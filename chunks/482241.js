function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("544891"),
        r = n("570140"),
        s = n("287734"),
        a = n("703656"),
        o = n("314897"),
        l = n("709054"),
        u = n("73346"),
        d = n("924301"),
        _ = n("236373"),
        c = n("124165"),
        E = n("765305"),
        I = n("981631");
    t.default = {
        startEvent: (e, t) => i.HTTP.patch({
            url: I.Endpoints.GUILD_EVENT(t, e),
            body: {
                status: E.GuildScheduledEventStatus.ACTIVE
            }
        }),
        endEvent: (e, t) => i.HTTP.patch({
            url: I.Endpoints.GUILD_EVENT(t, e),
            body: {
                status: E.GuildScheduledEventStatus.COMPLETED
            }
        }),
        joinVoiceEvent(e, t) {
            s.default.selectVoiceChannel(t), (0, a.transitionTo)(I.Routes.CHANNEL(e, t))
        },
        saveEvent(e, t, n, r) {
            let s = E.ENTITY_TYPES_REQUIRED_CHANNEL_ID.has(t.entityType) ? t.channelId : null,
                a = E.ENTITY_TYPES_REQUIRED_ENTITY_METADATA.has(t.entityType) ? t.entityMetadata : null,
                o = null != t.image && !1 === /^data:/.test(t.image) ? void 0 : t.image,
                l = {
                    name: t.name,
                    description: t.description,
                    image: o,
                    privacy_level: t.privacyLevel,
                    scheduled_start_time: t.scheduledStartTime,
                    scheduled_end_time: t.scheduledEndTime,
                    entity_type: t.entityType,
                    channel_id: s,
                    entity_metadata: a,
                    broadcast_to_directory_channels: r.broadcastToDirectoryChannels,
                    recurrence_rule: (0, _.recurrenceRuleToServer)(t.recurrenceRule)
                };
            return i.HTTP.patch({
                url: I.Endpoints.GUILD_EVENT(n, e),
                body: l
            })
        },
        createGuildEvent(e, t, n) {
            let r = {
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
                recurrence_rule: (0, _.recurrenceRuleToServer)(e.recurrenceRule)
            };
            return i.HTTP.post({
                url: I.Endpoints.GUILD_EVENTS_FOR_GUILD(t),
                body: r
            })
        },
        async fetchGuildEvent(e, t) {
            let {
                body: n
            } = await (0, u.httpGetWithCountryCodeQuery)(I.Endpoints.GUILD_EVENT(e, t));
            return r.default.dispatch({
                type: "FETCH_GUILD_EVENT",
                guildScheduledEvent: n
            }), n
        },
        async fetchGuildEventsForGuild(e) {
            let t = {
                    url: I.Endpoints.GUILD_EVENTS_FOR_GUILD(e)
                },
                {
                    body: n
                } = await (0, u.httpGetWithCountryCodeQuery)(t);
            return r.default.dispatch({
                type: "FETCH_GUILD_EVENTS_FOR_GUILD",
                guildId: e,
                guildScheduledEvents: n
            }), n
        },
        async fetchGuildEventUserCounts(e, t, n) {
            let s = {
                    url: I.Endpoints.GUILD_EVENT_USER_COUNTS(e, t),
                    query: {
                        guild_scheduled_event_exception_ids: n
                    }
                },
                {
                    body: {
                        guild_scheduled_event_count: a,
                        guild_scheduled_event_exception_counts: o
                    }
                } = await i.HTTP.get(s),
                l = {
                    eventCount: a,
                    recurrenceCounts: o
                };
            return r.default.dispatch({
                type: "GUILD_SCHEDULED_EVENT_USER_COUNTS_FETCH_SUCCESS",
                guildId: e,
                eventId: t,
                counts: l
            }), l
        },
        cancelGuildEvent: (e, t) => i.HTTP.patch({
            url: I.Endpoints.GUILD_EVENT(t, e),
            body: {
                status: E.GuildScheduledEventStatus.CANCELED
            }
        }),
        deleteGuildEvent: (e, t) => i.HTTP.del({
            url: I.Endpoints.GUILD_EVENT(t, e)
        }),
        async getGuildEventsForCurrentUser(e) {
            let {
                body: t
            } = await i.HTTP.get({
                url: I.Endpoints.USER_GUILD_EVENTS,
                query: {
                    guild_ids: [e]
                }
            });
            r.default.dispatch({
                type: "GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS",
                guildScheduledEventUsers: t,
                guildId: e
            })
        },
        async createRsvpForGuildEvent(e, t, n, s) {
            let a = o.default.getId();
            try {
                return r.default.dispatch({
                    type: "GUILD_SCHEDULED_EVENT_USER_ADD",
                    userId: a,
                    guildId: n,
                    guildEventId: e,
                    guildEventExceptionId: t,
                    response: s
                }), await i.HTTP.put({
                    url: I.Endpoints.USER_GUILD_EVENT(n, e, t),
                    body: {
                        response: s
                    }
                })
            } catch (i) {
                throw r.default.dispatch({
                    type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
                    userId: a,
                    guildId: n,
                    guildEventId: e,
                    guildEventExceptionId: t,
                    response: s
                }), i
            }
        },
        async deleteRsvpForGuildEvent(e, t, n) {
            let s = o.default.getId(),
                a = d.default.getRsvp(e, t, s);
            if (null != a) try {
                return r.default.dispatch({
                    type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
                    userId: s,
                    guildId: n,
                    guildEventId: e,
                    guildEventExceptionId: t,
                    response: a.response
                }), await i.HTTP.del({
                    url: I.Endpoints.USER_GUILD_EVENT(n, e, t)
                })
            } catch (i) {
                throw r.default.dispatch({
                    type: "GUILD_SCHEDULED_EVENT_USER_ADD",
                    userId: s,
                    guildId: n,
                    guildEventId: e,
                    guildEventExceptionId: t,
                    response: a.response
                }), i
            }
        },
        async updateRsvp(e, t, n, i, r) {
            if (null != (0, c.getExistingRsvp)(e, t)) try {
                await this.deleteRsvpForGuildEvent(e, t, n), null == r || r()
            } catch (e) {
                null == r || r(e)
            } else try {
                await this.createRsvpForGuildEvent(e, t, n, i), null == r || r()
            } catch (e) {
                null == r || r(e)
            }
        },
        async fetchUsersForGuildEvent(e, t, n) {
            let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : E.MAX_RSVP_USER_DISPLAY_COUNT;
            if (null == e || null == n) return [];
            let a = await i.HTTP.get({
                url: I.Endpoints.GUILD_EVENT_USERS(n, e, t),
                query: {
                    limit: s,
                    with_member: !0,
                    upgrade_response_type: !0
                }
            });
            return r.default.dispatch({
                type: "GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS",
                guildEventId: e,
                guildScheduledEventUsers: a.body,
                guildId: n,
                guildEventExceptionId: t
            }), a.body.users
        },
        createGuildEventException(e, t, n) {
            let {
                original_scheduled_start_time: r,
                scheduled_start_time: s,
                scheduled_end_time: a,
                is_canceled: o
            } = e;
            return i.HTTP.post({
                url: I.Endpoints.GUILD_EVENT_EXCEPTIONS(t, n),
                body: {
                    original_scheduled_start_time: r,
                    scheduled_start_time: s,
                    scheduled_end_time: a,
                    is_canceled: o
                }
            })
        },
        updateGuildEventException(e, t, n, r) {
            let {
                scheduled_start_time: s,
                scheduled_end_time: a,
                is_canceled: o
            } = e;
            return i.HTTP.patch({
                url: I.Endpoints.GUILD_EVENT_EXCEPTION(t, n, r),
                body: {
                    scheduled_start_time: s,
                    scheduled_end_time: a,
                    is_canceled: o
                }
            })
        },
        deleteGuildEventException: (e, t, n) => i.HTTP.del({
            url: I.Endpoints.GUILD_EVENT_EXCEPTION(e, t, n)
        }),
        deleteRecurrence(e, t, n, i) {
            if (null != i) this.updateGuildEventException({
                scheduled_start_time: i.scheduled_start_time,
                scheduled_end_time: i.scheduled_end_time,
                is_canceled: !0
            }, e, t, n);
            else {
                let i = l.default.extractTimestamp(n);
                this.createGuildEventException({
                    original_scheduled_start_time: new Date(i).toISOString(),
                    is_canceled: !0
                }, e, t)
            }
        }
    }
}