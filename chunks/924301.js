function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        StaticGuildEventIndexes: function() {
            return f
        },
        isEventUpcoming: function() {
            return b
        },
        isGuildEventEnded: function() {
            return G
        },
        isGuildScheduledEventActive: function() {
            return U
        },
        scheduledEventSort: function() {
            return S
        }
    }), n("653041"), n("47120");
    var i, r, s, a, o = n("392711"),
        l = n.n(o),
        u = n("442837"),
        d = n("759174"),
        _ = n("570140"),
        c = n("314897"),
        E = n("271383"),
        I = n("709054"),
        T = n("765305");
    let f = {
        EVENT: "event",
        EVENT_ACTIVE: "active",
        EVENT_UPCOMING: "event-upcoming",
        GUILD_EVENT: e => "".concat(e, "-").concat(f.EVENT),
        GUILD_EVENT_ACTIVE: e => "".concat(e, "-").concat(f.EVENT_ACTIVE),
        GUILD_EVENT_UPCOMING: e => "".concat(e, "-").concat(f.EVENT_UPCOMING),
        CHANNEL_EVENT: e => "".concat(e, "-").concat(f.EVENT),
        CHANNEL_EVENT_ACTIVE: e => "".concat(e, "-").concat(f.EVENT_ACTIVE),
        CHANNEL_EVENT_UPCOMING: e => "".concat(e, "-").concat(f.EVENT_UPCOMING)
    };

    function S(e) {
        let {
            id: t,
            scheduled_start_time: n
        } = e, i = U(e) ? "\0" : "\x01";
        return "".concat(i, "-").concat(new Date(n).getTime(), "-").concat(t)
    }
    let h = new d.SecondaryIndexMap(e => {
            let {
                guild_id: t,
                entity_id: n,
                channel_id: i
            } = e, r = [t];
            return null != n && r.push(n), r.push(f.GUILD_EVENT(t)), null != i && r.push(f.CHANNEL_EVENT(i)), U(e) && (r.push(f.EVENT_ACTIVE), r.push(f.GUILD_EVENT_ACTIVE(t)), null != i && r.push(f.CHANNEL_EVENT_ACTIVE(i))), b(e) && (r.push(f.EVENT_UPCOMING), r.push(f.GUILD_EVENT_UPCOMING(t)), null != i && r.push(f.CHANNEL_EVENT_UPCOMING(i))), r
        }, S),
        A = 0,
        m = [],
        N = "SERIES",
        p = {},
        O = {};

    function R(e) {
        h.set(e.id, e), A += 1
    }

    function C(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        h.delete(e), delete p[e], t && delete O[e], A += 1
    }

    function g(e) {
        return null != e ? e : N
    }

    function L(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = e.guild_scheduled_event_id;
        null == p[i] && (p[i] = {});
        let r = g(e.guild_scheduled_event_exception_id);
        null == p[i][r] && (p[i][r] = {}), p[i][r][e.user_id] = e, t && function(e) {
            var t, n;
            let i = g(e.guild_scheduled_event_exception_id),
                r = null !== (n = null === (t = O[e.guild_scheduled_event_id]) || void 0 === t ? void 0 : t[i]) && void 0 !== n ? n : 0,
                s = null != e.guild_scheduled_event_exception_id && e.response === T.GuildScheduledEventUserResponses.UNINTERESTED || null == e.guild_scheduled_event_exception_id && e.response === T.GuildScheduledEventUserResponses.INTERESTED ? 1 : -1;
            v(e.guild_scheduled_event_id, e.guild_scheduled_event_exception_id, r + s)
        }(e), n && (A += 1)
    }

    function D(e) {
        var t, n, i, r;
        let s = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            a = g(e.guild_scheduled_event_exception_id),
            o = (null === (n = p[e.guild_scheduled_event_id]) || void 0 === n ? void 0 : null === (t = n[a]) || void 0 === t ? void 0 : t[e.user_id]) != null,
            l = e.user_id === c.default.getId();
        (o || !l) && (null === (r = p[e.guild_scheduled_event_id]) || void 0 === r || null === (i = r[a]) || void 0 === i || delete i[e.user_id], function(e) {
            var t, n;
            let i = g(e.guild_scheduled_event_exception_id),
                r = null !== (n = null === (t = O[e.guild_scheduled_event_id]) || void 0 === t ? void 0 : t[i]) && void 0 !== n ? n : 0,
                s = null != e.guild_scheduled_event_exception_id && e.response === T.GuildScheduledEventUserResponses.UNINTERESTED || null == e.guild_scheduled_event_exception_id && e.response === T.GuildScheduledEventUserResponses.INTERESTED ? -1 : 1;
            v(e.guild_scheduled_event_id, e.guild_scheduled_event_exception_id, r + s)
        }(e), s && (A += 1))
    }

    function v(e, t, n) {
        let i = g(t);
        null == O[e] && (O[e] = {}), O[e][i] = n
    }

    function M(e, t) {
        h.values(f.GUILD_EVENT(e)).forEach(e => C(e.id, t))
    }

    function y(e) {
        let {
            guildScheduledEvent: t
        } = e;
        return R(t), !0
    }

    function P(e) {
        let {
            eventException: t
        } = e, n = h.get(t.event_id);
        if (null == n) return !1;
        let i = n.guild_scheduled_event_exceptions.findIndex(e => e.event_exception_id === t.event_exception_id),
            r = [...n.guild_scheduled_event_exceptions];
        return i < 0 ? r.push(t) : r[i] = t, R({
            ...n,
            guild_scheduled_event_exceptions: r
        }), !0
    }

    function U(e) {
        var t;
        return null != e && (t = (null == e ? void 0 : e.status) === T.GuildScheduledEventStatus.ACTIVE, t)
    }

    function b(e) {
        return !T.GuildScheduledEventStatusDone.has(e.status)
    }

    function G(e) {
        return null != e && T.GuildScheduledEventStatusDone.has(e.status)
    }
    class w extends(i = u.default.Store) {
        getGuildScheduledEvent(e) {
            var t;
            return null == e ? null : null !== (t = h.get(e)) && void 0 !== t ? t : null
        }
        getGuildEventCountByIndex(e) {
            return h.size(e)
        }
        getGuildScheduledEventsForGuild(e) {
            return null == e ? [] : h.values(e)
        }
        getGuildScheduledEventsByIndex(e) {
            return h.values(e)
        }
        getRsvpVersion() {
            return A
        }
        getRsvp(e, t, n) {
            var i, r;
            if (null == e) return null;
            let s = g(t);
            return null === (r = p[e]) || void 0 === r ? void 0 : null === (i = r[s]) || void 0 === i ? void 0 : i[n]
        }
        isInterestedInEventRecurrence(e, t) {
            let n = c.default.getId(),
                i = this.getRsvp(e, null, n),
                r = this.getRsvp(e, t, n),
                s = (null == i ? void 0 : i.response) === T.GuildScheduledEventUserResponses.INTERESTED,
                a = (null == r ? void 0 : r.response) === T.GuildScheduledEventUserResponses.INTERESTED,
                o = (null == r ? void 0 : r.response) === T.GuildScheduledEventUserResponses.UNINTERESTED;
            return s && !o || a
        }
        getUserCount(e, t) {
            var n, i, r, s;
            if (null == e) return 0;
            let a = null !== (r = null === (n = O[e]) || void 0 === n ? void 0 : n[N]) && void 0 !== r ? r : 0;
            return null == t ? a : a - (null !== (s = null === (i = O[e]) || void 0 === i ? void 0 : i[t]) && void 0 !== s ? s : 0)
        }
        hasUserCount(e, t) {
            var n;
            let i = g(t);
            return (null === (n = O[e]) || void 0 === n ? void 0 : n[i]) != null
        }
        isActive(e) {
            return null != e && U(h.get(e))
        }
        getActiveEventByChannel(e) {
            if (null != e) return this.getGuildScheduledEventsByIndex(f.CHANNEL_EVENT_ACTIVE(e))[0]
        }
        getUsersForGuildEvent(e, t) {
            var n, i;
            if (null == e) return {};
            let r = g(t);
            return null !== (i = null === (n = p[e]) || void 0 === n ? void 0 : n[r]) && void 0 !== i ? i : {}
        }
    }
    a = "GuildScheduledEventStore", (s = "displayName") in(r = w) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new w(_.default, {
        CONNECTION_OPEN: function(e) {
            let {
                guilds: t
            } = e;
            return h.clear(), A = 0, p = {}, O = {}, m.forEach(R), t.forEach(e => e.guild_scheduled_events.forEach(e => R(e))), !0
        },
        GUILD_CREATE: function(e) {
            let {
                guild: t
            } = e;
            return M(t.id, !1), t.guild_scheduled_events.forEach(e => R(e)), !0
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            return M(t.id, !0), !0
        },
        FETCH_GUILD_EVENT: function(e) {
            let {
                guildScheduledEvent: t
            } = e;
            R(t)
        },
        FETCH_GUILD_EVENTS_FOR_GUILD: function(e) {
            let {
                guildId: t,
                guildScheduledEvents: n
            } = e, i = h.values(f.GUILD_EVENT(t), !0).map(e => e.id), r = n.map(e => e.id);
            for (let e of (l().difference(i, r).forEach(e => {
                    C(e)
                }), n)) R(e);
            return !0
        },
        GUILD_SCHEDULED_EVENT_CREATE: y,
        GUILD_SCHEDULED_EVENT_UPDATE: y,
        GUILD_SCHEDULED_EVENT_DELETE: function(e) {
            let {
                guildScheduledEvent: t
            } = e;
            return C(t.id), !0
        },
        GUILD_SCHEDULED_EVENT_USER_ADD: function(e) {
            var t, n;
            let {
                userId: i,
                guildEventId: r,
                guildId: s,
                guildEventExceptionId: a,
                response: o
            } = e, l = g(a), u = null === (n = p[r]) || void 0 === n ? void 0 : null === (t = n[l]) || void 0 === t ? void 0 : t[i];
            null != u && D(u, !1);
            let d = E.default.getMember(s, i);
            return L({
                user_id: i,
                guild_scheduled_event_id: r,
                member: null != d ? d : {
                    guildId: s
                },
                guild_scheduled_event_exception_id: a,
                response: o
            }), !0
        },
        GUILD_SCHEDULED_EVENT_USER_REMOVE: function(e) {
            let {
                userId: t,
                guildEventId: n,
                guildEventExceptionId: i,
                response: r
            } = e;
            D({
                user_id: t,
                guild_scheduled_event_id: n,
                guild_scheduled_event_exception_id: i,
                response: r
            })
        },
        GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS: function(e) {
            let {
                guildScheduledEventUsers: t
            } = e;
            return t.forEach(e => L(e, !1, !1)), A += 1, !0
        },
        GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: function(e) {
            let {
                guildScheduledEventUsers: t
            } = e;
            return t.forEach(e => L(e, !1, !1)), A += 1, !0
        },
        GUILD_SCHEDULED_EVENT_USER_COUNTS_FETCH_SUCCESS: function(e) {
            let {
                eventId: t,
                counts: n
            } = e;
            v(t, null, n.eventCount), I.default.forEachKey(n.recurrenceCounts, e => {
                v(t, e, n.eventCount - n.recurrenceCounts[e])
            })
        },
        INVITE_RESOLVE_SUCCESS: function(e) {
            let {
                invite: t
            } = e, n = t.guild_scheduled_event;
            return null != n && (R(n), !0)
        },
        GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE: P,
        GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE: P,
        GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE: function(e) {
            let {
                eventException: t
            } = e, n = h.get(t.event_id);
            if (null == n) return !1;
            let i = n.guild_scheduled_event_exceptions.filter(e => e.event_exception_id !== t.event_exception_id);
            return R({
                ...n,
                guild_scheduled_event_exceptions: i
            }), !0
        },
        GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE: function(e) {
            let {
                eventId: t
            } = e, n = h.get(t);
            return null != n && (R({
                ...n,
                guild_scheduled_event_exceptions: []
            }), !0)
        },
        LOGOUT: function() {
            return h.clear(), !0
        }
    })
}