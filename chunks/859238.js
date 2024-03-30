function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("967888"),
        o = n("629815"),
        i = n("585949"),
        a = n("163291"),
        u = n("217014"),
        s = n("523018"),
        l = n("329903"),
        c = n("89536"),
        f = n("556403"),
        d = n("276132"),
        _ = n("713653"),
        E = n("281767");

    function p(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function m(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    p(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    p(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function y(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function u(i) {
            return function(u) {
                return function(i) {
                    if (n) throw TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1], o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2], a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = t.call(e, a)
                    } catch (e) {
                        i = [6, e], r = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, u])
            }
        }
    }
    t.default = {
        startEvent: function(e, t) {
            return r.HTTP.patch({
                url: E.Endpoints.GUILD_EVENT(t, e),
                body: {
                    status: _.GuildScheduledEventStatus.ACTIVE
                }
            })
        },
        endEvent: function(e, t) {
            return r.HTTP.patch({
                url: E.Endpoints.GUILD_EVENT(t, e),
                body: {
                    status: _.GuildScheduledEventStatus.COMPLETED
                }
            })
        },
        joinVoiceEvent: function(e, t) {
            i.default.selectVoiceChannel(t), (0, a.transitionTo)(E.Routes.CHANNEL(e, t))
        },
        saveEvent: function(e, t, n, o) {
            var i = _.ENTITY_TYPES_REQUIRED_CHANNEL_ID.has(t.entityType) ? t.channelId : null,
                a = _.ENTITY_TYPES_REQUIRED_ENTITY_METADATA.has(t.entityType) ? t.entityMetadata : null,
                u = null != t.image && !1 === /^data:/.test(t.image) ? void 0 : t.image,
                s = {
                    name: t.name,
                    description: t.description,
                    image: u,
                    privacy_level: t.privacyLevel,
                    scheduled_start_time: t.scheduledStartTime,
                    scheduled_end_time: t.scheduledEndTime,
                    entity_type: t.entityType,
                    channel_id: i,
                    entity_metadata: a,
                    broadcast_to_directory_channels: o.broadcastToDirectoryChannels,
                    recurrence_rule: (0, f.recurrenceRuleToServer)(t.recurrenceRule)
                };
            return r.HTTP.patch({
                url: E.Endpoints.GUILD_EVENT(n, e),
                body: s
            })
        },
        createGuildEvent: function(e, t, n) {
            var o = {
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
                recurrence_rule: (0, f.recurrenceRuleToServer)(e.recurrenceRule)
            };
            return r.HTTP.post({
                url: E.Endpoints.GUILD_EVENTS_FOR_GUILD(t),
                body: o
            })
        },
        fetchGuildEvent: function(e, t) {
            return m(function() {
                var n;
                return y(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return [4, (0, l.httpGetWithCountryCodeQuery)(E.Endpoints.GUILD_EVENT(e, t))];
                        case 1:
                            return n = r.sent().body, o.default.dispatch({
                                type: "FETCH_GUILD_EVENT",
                                guildScheduledEvent: n
                            }), [2, n]
                    }
                })
            })()
        },
        fetchGuildEventsForGuild: function(e) {
            return m(function() {
                var t, n;
                return y(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return t = {
                                url: E.Endpoints.GUILD_EVENTS_FOR_GUILD(e)
                            }, [4, (0, l.httpGetWithCountryCodeQuery)(t)];
                        case 1:
                            return n = r.sent().body, o.default.dispatch({
                                type: "FETCH_GUILD_EVENTS_FOR_GUILD",
                                guildId: e,
                                guildScheduledEvents: n
                            }), [2, n]
                    }
                })
            })()
        },
        fetchGuildEventUserCounts: function(e, t, n) {
            return m(function() {
                var i, a, u, s;
                return y(this, function(l) {
                    switch (l.label) {
                        case 0:
                            return i = {
                                url: E.Endpoints.GUILD_EVENT_USER_COUNTS(e, t),
                                query: {
                                    guild_scheduled_event_exception_ids: n
                                }
                            }, [4, r.HTTP.get(i)];
                        case 1:
                            return u = (a = l.sent().body).guild_scheduled_event_count, s = {
                                eventCount: u,
                                recurrenceCounts: a.guild_scheduled_event_exception_counts
                            }, o.default.dispatch({
                                type: "GUILD_SCHEDULED_EVENT_USER_COUNTS_FETCH_SUCCESS",
                                guildId: e,
                                eventId: t,
                                counts: s
                            }), [2, s]
                    }
                })
            })()
        },
        cancelGuildEvent: function(e, t) {
            return r.HTTP.patch({
                url: E.Endpoints.GUILD_EVENT(t, e),
                body: {
                    status: _.GuildScheduledEventStatus.CANCELED
                }
            })
        },
        deleteGuildEvent: function(e, t) {
            return r.HTTP.del({
                url: E.Endpoints.GUILD_EVENT(t, e)
            })
        },
        getGuildEventsForCurrentUser: function(e) {
            return m(function() {
                var t;
                return y(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return [4, r.HTTP.get({
                                url: E.Endpoints.USER_GUILD_EVENTS,
                                query: {
                                    guild_ids: [e]
                                }
                            })];
                        case 1:
                            return t = n.sent().body, o.default.dispatch({
                                type: "GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS",
                                guildScheduledEventUsers: t,
                                guildId: e
                            }), [2]
                    }
                })
            })()
        },
        createRsvpForGuildEvent: function(e, t, n, i) {
            return m(function() {
                var a, s;
                return y(this, function(l) {
                    switch (l.label) {
                        case 0:
                            a = u.default.getId(), l.label = 1;
                        case 1:
                            return l.trys.push([1, 3, , 4]), o.default.dispatch({
                                type: "GUILD_SCHEDULED_EVENT_USER_ADD",
                                userId: a,
                                guildId: n,
                                guildEventId: e,
                                guildEventExceptionId: t,
                                response: i
                            }), [4, r.HTTP.put({
                                url: E.Endpoints.USER_GUILD_EVENT(n, e, t),
                                body: {
                                    response: i
                                }
                            })];
                        case 2:
                            return [2, l.sent()];
                        case 3:
                            throw s = l.sent(), o.default.dispatch({
                                type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
                                userId: a,
                                guildId: n,
                                guildEventId: e,
                                guildEventExceptionId: t,
                                response: i
                            }), s;
                        case 4:
                            return [2]
                    }
                })
            })()
        },
        deleteRsvpForGuildEvent: function(e, t, n) {
            return m(function() {
                var i, a, s;
                return y(this, function(l) {
                    switch (l.label) {
                        case 0:
                            if (i = u.default.getId(), null == (a = c.default.getRsvp(e, t, i))) return [2];
                            l.label = 1;
                        case 1:
                            return l.trys.push([1, 3, , 4]), o.default.dispatch({
                                type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
                                userId: i,
                                guildId: n,
                                guildEventId: e,
                                guildEventExceptionId: t,
                                response: a.response
                            }), [4, r.HTTP.del({
                                url: E.Endpoints.USER_GUILD_EVENT(n, e, t)
                            })];
                        case 2:
                            return [2, l.sent()];
                        case 3:
                            throw s = l.sent(), o.default.dispatch({
                                type: "GUILD_SCHEDULED_EVENT_USER_ADD",
                                userId: i,
                                guildId: n,
                                guildEventId: e,
                                guildEventExceptionId: t,
                                response: a.response
                            }), s;
                        case 4:
                            return [2]
                    }
                })
            })()
        },
        updateRsvp: function(e, t, n, r, o) {
            return m(function() {
                var i, a;
                return y(this, function(u) {
                    switch (u.label) {
                        case 0:
                            if (!(null != (0, d.getExistingRsvp)(e, t))) return [3, 5];
                            u.label = 1;
                        case 1:
                            return u.trys.push([1, 3, , 4]), [4, this.deleteRsvpForGuildEvent(e, t, n)];
                        case 2:
                            return u.sent(), null == o || o(), [3, 4];
                        case 3:
                            return i = u.sent(), null == o || o(i), [3, 4];
                        case 4:
                            return [3, 8];
                        case 5:
                            return u.trys.push([5, 7, , 8]), [4, this.createRsvpForGuildEvent(e, t, n, r)];
                        case 6:
                            return u.sent(), null == o || o(), [3, 8];
                        case 7:
                            return a = u.sent(), null == o || o(a), [3, 8];
                        case 8:
                            return [2]
                    }
                })
            }).apply(this)
        },
        fetchUsersForGuildEvent: function(e, t, n) {
            var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : _.MAX_RSVP_USER_DISPLAY_COUNT;
            return m(function() {
                var a;
                return y(this, function(u) {
                    switch (u.label) {
                        case 0:
                            if (null == e || null == n) return [2, []];
                            return [4, r.HTTP.get({
                                url: E.Endpoints.GUILD_EVENT_USERS(n, e, t),
                                query: {
                                    limit: i,
                                    with_member: !0,
                                    upgrade_response_type: !0
                                }
                            })];
                        case 1:
                            return a = u.sent(), o.default.dispatch({
                                type: "GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS",
                                guildEventId: e,
                                guildScheduledEventUsers: a.body,
                                guildId: n,
                                guildEventExceptionId: t
                            }), [2, a.body.users]
                    }
                })
            })()
        },
        createGuildEventException: function(e, t, n) {
            var o = e.original_scheduled_start_time,
                i = e.scheduled_start_time,
                a = e.scheduled_end_time,
                u = e.is_canceled;
            return r.HTTP.post({
                url: E.Endpoints.GUILD_EVENT_EXCEPTIONS(t, n),
                body: {
                    original_scheduled_start_time: o,
                    scheduled_start_time: i,
                    scheduled_end_time: a,
                    is_canceled: u
                }
            })
        },
        updateGuildEventException: function(e, t, n, o) {
            var i = e.scheduled_start_time,
                a = e.scheduled_end_time,
                u = e.is_canceled;
            return r.HTTP.patch({
                url: E.Endpoints.GUILD_EVENT_EXCEPTION(t, n, o),
                body: {
                    scheduled_start_time: i,
                    scheduled_end_time: a,
                    is_canceled: u
                }
            })
        },
        deleteGuildEventException: function(e, t, n) {
            return r.HTTP.del({
                url: E.Endpoints.GUILD_EVENT_EXCEPTION(e, t, n)
            })
        },
        deleteRecurrence: function(e, t, n, r) {
            if (null != r) this.updateGuildEventException({
                scheduled_start_time: r.scheduled_start_time,
                scheduled_end_time: r.scheduled_end_time,
                is_canceled: !0
            }, e, t, n);
            else {
                var o = s.default.extractTimestamp(n);
                this.createGuildEventException({
                    original_scheduled_start_time: new Date(o).toISOString(),
                    is_canceled: !0
                }, e, t)
            }
        }
    }
}