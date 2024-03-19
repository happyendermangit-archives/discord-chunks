function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return v
        }
    });
    var l = n("872717"),
        d = n("913144"),
        u = n("987317"),
        i = n("393414"),
        a = n("271938"),
        r = n("299039"),
        E = n("271560"),
        c = n("398604"),
        s = n("189443"),
        _ = n("832588"),
        o = n("745049"),
        y = n("49111"),
        v = {
            startEvent: (e, t) => l.default.patch({
                url: y.Endpoints.GUILD_EVENT(t, e),
                body: {
                    status: o.GuildScheduledEventStatus.ACTIVE
                }
            }),
            endEvent: (e, t) => l.default.patch({
                url: y.Endpoints.GUILD_EVENT(t, e),
                body: {
                    status: o.GuildScheduledEventStatus.COMPLETED
                }
            }),
            joinVoiceEvent(e, t) {
                u.default.selectVoiceChannel(t), (0, i.transitionTo)(y.Routes.CHANNEL(e, t))
            },
            saveEvent(e, t, n, d) {
                let u = o.ENTITY_TYPES_REQUIRED_CHANNEL_ID.has(t.entityType) ? t.channelId : null,
                    i = o.ENTITY_TYPES_REQUIRED_ENTITY_METADATA.has(t.entityType) ? t.entityMetadata : null,
                    a = null != t.image && !1 === /^data:/.test(t.image) ? void 0 : t.image,
                    r = {
                        name: t.name,
                        description: t.description,
                        image: a,
                        privacy_level: t.privacyLevel,
                        scheduled_start_time: t.scheduledStartTime,
                        scheduled_end_time: t.scheduledEndTime,
                        entity_type: t.entityType,
                        channel_id: u,
                        entity_metadata: i,
                        broadcast_to_directory_channels: d.broadcastToDirectoryChannels,
                        recurrence_rule: (0, s.recurrenceRuleToServer)(t.recurrenceRule)
                    };
                return l.default.patch({
                    url: y.Endpoints.GUILD_EVENT(n, e),
                    body: r
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
                return l.default.post({
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
                let u = {
                        url: y.Endpoints.GUILD_EVENT_USER_COUNTS(e, t),
                        query: {
                            guild_scheduled_event_exception_ids: n
                        }
                    },
                    {
                        body: {
                            guild_scheduled_event_count: i,
                            guild_scheduled_event_exception_counts: a
                        }
                    } = await l.default.get(u),
                    r = {
                        eventCount: i,
                        recurrenceCounts: a
                    };
                return d.default.dispatch({
                    type: "GUILD_SCHEDULED_EVENT_USER_COUNTS_FETCH_SUCCESS",
                    guildId: e,
                    eventId: t,
                    counts: r
                }), r
            },
            cancelGuildEvent: (e, t) => l.default.patch({
                url: y.Endpoints.GUILD_EVENT(t, e),
                body: {
                    status: o.GuildScheduledEventStatus.CANCELED
                }
            }),
            deleteGuildEvent: (e, t) => l.default.delete({
                url: y.Endpoints.GUILD_EVENT(t, e)
            }),
            async getGuildEventsForCurrentUser(e) {
                let {
                    body: t
                } = await l.default.get({
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
            async createRsvpForGuildEvent(e, t, n, u) {
                let i = a.default.getId();
                try {
                    return d.default.dispatch({
                        type: "GUILD_SCHEDULED_EVENT_USER_ADD",
                        userId: i,
                        guildId: n,
                        guildEventId: e,
                        guildEventExceptionId: t,
                        response: u
                    }), await l.default.put({
                        url: y.Endpoints.USER_GUILD_EVENT(n, e, t),
                        body: {
                            response: u
                        }
                    })
                } catch (l) {
                    throw d.default.dispatch({
                        type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
                        userId: i,
                        guildId: n,
                        guildEventId: e,
                        guildEventExceptionId: t,
                        response: u
                    }), l
                }
            },
            async deleteRsvpForGuildEvent(e, t, n) {
                let u = a.default.getId(),
                    i = c.default.getRsvp(e, t, u);
                if (null != i) try {
                    return d.default.dispatch({
                        type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
                        userId: u,
                        guildId: n,
                        guildEventId: e,
                        guildEventExceptionId: t,
                        response: i.response
                    }), await l.default.delete({
                        url: y.Endpoints.USER_GUILD_EVENT(n, e, t)
                    })
                } catch (l) {
                    throw d.default.dispatch({
                        type: "GUILD_SCHEDULED_EVENT_USER_ADD",
                        userId: u,
                        guildId: n,
                        guildEventId: e,
                        guildEventExceptionId: t,
                        response: i.response
                    }), l
                }
            },
            async updateRsvp(e, t, n, l, d) {
                let u = (0, _.getExistingRsvp)(e, t);
                if (null != u) try {
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
                let u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o.MAX_RSVP_USER_DISPLAY_COUNT;
                if (null == e || null == n) return [];
                let i = await l.default.get({
                    url: y.Endpoints.GUILD_EVENT_USERS(n, e, t),
                    query: {
                        limit: u,
                        with_member: !0,
                        upgrade_response_type: !0
                    }
                });
                return d.default.dispatch({
                    type: "GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS",
                    guildEventId: e,
                    guildScheduledEventUsers: i.body,
                    guildId: n,
                    guildEventExceptionId: t
                }), i.body.users
            },
            createGuildEventException(e, t, n) {
                let {
                    original_scheduled_start_time: d,
                    scheduled_start_time: u,
                    scheduled_end_time: i,
                    is_canceled: a
                } = e;
                return l.default.post({
                    url: y.Endpoints.GUILD_EVENT_EXCEPTIONS(t, n),
                    body: {
                        original_scheduled_start_time: d,
                        scheduled_start_time: u,
                        scheduled_end_time: i,
                        is_canceled: a
                    }
                })
            },
            updateGuildEventException(e, t, n, d) {
                let {
                    scheduled_start_time: u,
                    scheduled_end_time: i,
                    is_canceled: a
                } = e;
                return l.default.patch({
                    url: y.Endpoints.GUILD_EVENT_EXCEPTION(t, n, d),
                    body: {
                        scheduled_start_time: u,
                        scheduled_end_time: i,
                        is_canceled: a
                    }
                })
            },
            deleteGuildEventException: (e, t, n) => l.default.delete({
                url: y.Endpoints.GUILD_EVENT_EXCEPTION(e, t, n)
            }),
            deleteRecurrence(e, t, n, l) {
                if (null != l) this.updateGuildEventException({
                    scheduled_start_time: l.scheduled_start_time,
                    scheduled_end_time: l.scheduled_end_time,
                    is_canceled: !0
                }, e, t, n);
                else {
                    let l = r.default.extractTimestamp(n);
                    this.createGuildEventException({
                        original_scheduled_start_time: new Date(l).toISOString(),
                        is_canceled: !0
                    }, e, t)
                }
            }
        }
}