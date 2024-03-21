function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return v
        }
    });
    var l = n("872717"),
        d = n("913144"),
        i = n("987317"),
        u = n("393414"),
        r = n("271938"),
        a = n("299039"),
        E = n("271560"),
        c = n("398604"),
        s = n("189443"),
        _ = n("832588"),
        o = n("745049"),
        y = n("49111"),
        v = {
            startEvent: (e, t) => l.HTTP.patch({
                url: y.Endpoints.GUILD_EVENT(t, e),
                body: {
                    status: o.GuildScheduledEventStatus.ACTIVE
                }
            }),
            endEvent: (e, t) => l.HTTP.patch({
                url: y.Endpoints.GUILD_EVENT(t, e),
                body: {
                    status: o.GuildScheduledEventStatus.COMPLETED
                }
            }),
            joinVoiceEvent(e, t) {
                i.default.selectVoiceChannel(t), (0, u.transitionTo)(y.Routes.CHANNEL(e, t))
            },
            saveEvent(e, t, n, d) {
                let i = o.ENTITY_TYPES_REQUIRED_CHANNEL_ID.has(t.entityType) ? t.channelId : null,
                    u = o.ENTITY_TYPES_REQUIRED_ENTITY_METADATA.has(t.entityType) ? t.entityMetadata : null,
                    r = null != t.image && !1 === /^data:/.test(t.image) ? void 0 : t.image,
                    a = {
                        name: t.name,
                        description: t.description,
                        image: r,
                        privacy_level: t.privacyLevel,
                        scheduled_start_time: t.scheduledStartTime,
                        scheduled_end_time: t.scheduledEndTime,
                        entity_type: t.entityType,
                        channel_id: i,
                        entity_metadata: u,
                        broadcast_to_directory_channels: d.broadcastToDirectoryChannels,
                        recurrence_rule: (0, s.recurrenceRuleToServer)(t.recurrenceRule)
                    };
                return l.HTTP.patch({
                    url: y.Endpoints.GUILD_EVENT(n, e),
                    body: a
                })
            },
            createGuildEvent(e, t, n) {
                let d = {
                    name: e.name,
                    description: e.description,
                    image: e.image,
                    privacy_level: e.privacyLevel,
                    scheduled_start_time: e.scheduledStartTime,
                    scheduled_end_time: e.scheduledEndTime,
                    entity_type: e.entityType,
                    channel_id: e.channelId,
                    entity_metadata: e.entityMetadata,
                    broadcast_to_directory_channels: n.broadcastToDirectoryChannels,
                    recurrence_rule: (0, s.recurrenceRuleToServer)(e.recurrenceRule)
                };
                return l.HTTP.post({
                    url: y.Endpoints.GUILD_EVENTS_FOR_GUILD(t),
                    body: d
                })
            },
            async fetchGuildEvent(e, t) {
                let {
                    body: n
                } = await (0, E.httpGetWithCountryCodeQuery)(y.Endpoints.GUILD_EVENT(e, t));
                return d.default.dispatch({
                    type: "FETCH_GUILD_EVENT",
                    guildScheduledEvent: n
                }), n
            },
            async fetchGuildEventsForGuild(e) {
                let t = {
                        url: y.Endpoints.GUILD_EVENTS_FOR_GUILD(e)
                    },
                    {
                        body: n
                    } = await (0, E.httpGetWithCountryCodeQuery)(t);
                return d.default.dispatch({
                    type: "FETCH_GUILD_EVENTS_FOR_GUILD",
                    guildId: e,
                    guildScheduledEvents: n
                }), n
            },
            async fetchGuildEventUserCounts(e, t, n) {
                let i = {
                        url: y.Endpoints.GUILD_EVENT_USER_COUNTS(e, t),
                        query: {
                            guild_scheduled_event_exception_ids: n
                        }
                    },
                    {
                        body: {
                            guild_scheduled_event_count: u,
                            guild_scheduled_event_exception_counts: r
                        }
                    } = await l.HTTP.get(i),
                    a = {
                        eventCount: u,
                        recurrenceCounts: r
                    };
                return d.default.dispatch({
                    type: "GUILD_SCHEDULED_EVENT_USER_COUNTS_FETCH_SUCCESS",
                    guildId: e,
                    eventId: t,
                    counts: a
                }), a
            },
            cancelGuildEvent: (e, t) => l.HTTP.patch({
                url: y.Endpoints.GUILD_EVENT(t, e),
                body: {
                    status: o.GuildScheduledEventStatus.CANCELED
                }
            }),
            deleteGuildEvent: (e, t) => l.HTTP.del({
                url: y.Endpoints.GUILD_EVENT(t, e)
            }),
            async getGuildEventsForCurrentUser(e) {
                let {
                    body: t
                } = await l.HTTP.get({
                    url: y.Endpoints.USER_GUILD_EVENTS,
                    query: {
                        guild_ids: [e]
                    }
                });
                d.default.dispatch({
                    type: "GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS",
                    guildScheduledEventUsers: t,
                    guildId: e
                })
            },
            async createRsvpForGuildEvent(e, t, n, i) {
                let u = r.default.getId();
                try {
                    return d.default.dispatch({
                        type: "GUILD_SCHEDULED_EVENT_USER_ADD",
                        userId: u,
                        guildId: n,
                        guildEventId: e,
                        guildEventExceptionId: t,
                        response: i
                    }), await l.HTTP.put({
                        url: y.Endpoints.USER_GUILD_EVENT(n, e, t),
                        body: {
                            response: i
                        }
                    })
                } catch (l) {
                    throw d.default.dispatch({
                        type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
                        userId: u,
                        guildId: n,
                        guildEventId: e,
                        guildEventExceptionId: t,
                        response: i
                    }), l
                }
            },
            async deleteRsvpForGuildEvent(e, t, n) {
                let i = r.default.getId(),
                    u = c.default.getRsvp(e, t, i);
                if (null != u) try {
                    return d.default.dispatch({
                        type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
                        userId: i,
                        guildId: n,
                        guildEventId: e,
                        guildEventExceptionId: t,
                        response: u.response
                    }), await l.HTTP.del({
                        url: y.Endpoints.USER_GUILD_EVENT(n, e, t)
                    })
                } catch (l) {
                    throw d.default.dispatch({
                        type: "GUILD_SCHEDULED_EVENT_USER_ADD",
                        userId: i,
                        guildId: n,
                        guildEventId: e,
                        guildEventExceptionId: t,
                        response: u.response
                    }), l
                }
            },
            async updateRsvp(e, t, n, l, d) {
                let i = (0, _.getExistingRsvp)(e, t);
                if (null != i) try {
                    await this.deleteRsvpForGuildEvent(e, t, n), null == d || d()
                } catch (e) {
                    null == d || d(e)
                } else try {
                    await this.createRsvpForGuildEvent(e, t, n, l), null == d || d()
                } catch (e) {
                    null == d || d(e)
                }
            },
            async fetchUsersForGuildEvent(e, t, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o.MAX_RSVP_USER_DISPLAY_COUNT;
                if (null == e || null == n) return [];
                let u = await l.HTTP.get({
                    url: y.Endpoints.GUILD_EVENT_USERS(n, e, t),
                    query: {
                        limit: i,
                        with_member: !0,
                        upgrade_response_type: !0
                    }
                });
                return d.default.dispatch({
                    type: "GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS",
                    guildEventId: e,
                    guildScheduledEventUsers: u.body,
                    guildId: n,
                    guildEventExceptionId: t
                }), u.body.users
            },
            createGuildEventException(e, t, n) {
                let {
                    original_scheduled_start_time: d,
                    scheduled_start_time: i,
                    scheduled_end_time: u,
                    is_canceled: r
                } = e;
                return l.HTTP.post({
                    url: y.Endpoints.GUILD_EVENT_EXCEPTIONS(t, n),
                    body: {
                        original_scheduled_start_time: d,
                        scheduled_start_time: i,
                        scheduled_end_time: u,
                        is_canceled: r
                    }
                })
            },
            updateGuildEventException(e, t, n, d) {
                let {
                    scheduled_start_time: i,
                    scheduled_end_time: u,
                    is_canceled: r
                } = e;
                return l.HTTP.patch({
                    url: y.Endpoints.GUILD_EVENT_EXCEPTION(t, n, d),
                    body: {
                        scheduled_start_time: i,
                        scheduled_end_time: u,
                        is_canceled: r
                    }
                })
            },
            deleteGuildEventException: (e, t, n) => l.HTTP.del({
                url: y.Endpoints.GUILD_EVENT_EXCEPTION(e, t, n)
            }),
            deleteRecurrence(e, t, n, l) {
                if (null != l) this.updateGuildEventException({
                    scheduled_start_time: l.scheduled_start_time,
                    scheduled_end_time: l.scheduled_end_time,
                    is_canceled: !0
                }, e, t, n);
                else {
                    let l = a.default.extractTimestamp(n);
                    this.createGuildEventException({
                        original_scheduled_start_time: new Date(l).toISOString(),
                        is_canceled: !0
                    }, e, t)
                }
            }
        }
}