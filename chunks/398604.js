function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        StaticGuildEventIndexes: function() {
            return f
        },
        scheduledEventSort: function() {
            return _
        },
        isGuildScheduledEventActive: function() {
            return D
        },
        isEventUpcoming: function() {
            return P
        },
        isGuildEventEnded: function() {
            return L
        },
        default: function() {
            return b
        }
    }), n("424973"), n("222007");
    var i = n("917351"),
        s = n.n(i),
        r = n("446674"),
        a = n("407846"),
        o = n("913144"),
        l = n("271938"),
        u = n("26989"),
        d = n("299039"),
        c = n("745049");
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

    function _(e) {
        let {
            id: t,
            scheduled_start_time: n
        } = e, i = D(e) ? "\x00" : "\x01";
        return "".concat(i, "-").concat(new Date(n).getTime(), "-").concat(t)
    }
    let h = new a.default(e => {
            let {
                guild_id: t,
                entity_id: n,
                channel_id: i
            } = e, s = [t];
            return null != n && s.push(n), s.push(f.GUILD_EVENT(t)), null != i && s.push(f.CHANNEL_EVENT(i)), D(e) && (s.push(f.EVENT_ACTIVE), s.push(f.GUILD_EVENT_ACTIVE(t)), null != i && s.push(f.CHANNEL_EVENT_ACTIVE(i))), P(e) && (s.push(f.EVENT_UPCOMING), s.push(f.GUILD_EVENT_UPCOMING(t)), null != i && s.push(f.CHANNEL_EVENT_UPCOMING(i))), s
        }, _),
        E = 0,
        g = [],
        m = "SERIES",
        p = {},
        S = {};

    function v(e) {
        h.set(e.id, e), E += 1
    }

    function T(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        h.delete(e), delete p[e], t && delete S[e], E += 1
    }

    function I(e) {
        return null != e ? e : m
    }

    function C(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = e.guild_scheduled_event_id;
        null == p[i] && (p[i] = {});
        let s = I(e.guild_scheduled_event_exception_id);
        null == p[i][s] && (p[i][s] = {}), p[i][s][e.user_id] = e, t && function(e) {
            var t, n;
            let i = I(e.guild_scheduled_event_exception_id),
                s = null !== (n = null === (t = S[e.guild_scheduled_event_id]) || void 0 === t ? void 0 : t[i]) && void 0 !== n ? n : 0,
                r = null != e.guild_scheduled_event_exception_id && e.response === c.GuildScheduledEventUserResponses.UNINTERESTED || null == e.guild_scheduled_event_exception_id && e.response === c.GuildScheduledEventUserResponses.INTERESTED ? 1 : -1;
            y(e.guild_scheduled_event_id, e.guild_scheduled_event_exception_id, s + r)
        }(e), n && (E += 1)
    }

    function A(e) {
        var t, n, i, s;
        let r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            a = I(e.guild_scheduled_event_exception_id),
            o = (null === (n = p[e.guild_scheduled_event_id]) || void 0 === n ? void 0 : null === (t = n[a]) || void 0 === t ? void 0 : t[e.user_id]) != null,
            u = e.user_id === l.default.getId();
        (o || !u) && (null === (s = p[e.guild_scheduled_event_id]) || void 0 === s || null === (i = s[a]) || void 0 === i || delete i[e.user_id], function(e) {
            var t, n;
            let i = I(e.guild_scheduled_event_exception_id),
                s = null !== (n = null === (t = S[e.guild_scheduled_event_id]) || void 0 === t ? void 0 : t[i]) && void 0 !== n ? n : 0,
                r = null != e.guild_scheduled_event_exception_id && e.response === c.GuildScheduledEventUserResponses.UNINTERESTED || null == e.guild_scheduled_event_exception_id && e.response === c.GuildScheduledEventUserResponses.INTERESTED ? -1 : 1;
            y(e.guild_scheduled_event_id, e.guild_scheduled_event_exception_id, s + r)
        }(e), r && (E += 1))
    }

    function y(e, t, n) {
        let i = I(t);
        null == S[e] && (S[e] = {}), S[e][i] = n
    }

    function N(e, t) {
        h.values(f.GUILD_EVENT(e)).forEach(e => T(e.id, t))
    }

    function R(e) {
        let {
            guildScheduledEvent: t
        } = e;
        return v(t), !0
    }

    function O(e) {
        let {
            eventException: t
        } = e, n = h.get(t.event_id);
        if (null == n) return !1;
        let i = n.guild_scheduled_event_exceptions.findIndex(e => e.event_exception_id === t.event_exception_id),
            s = [...n.guild_scheduled_event_exceptions];
        return i < 0 ? s.push(t) : s[i] = t, v({
            ...n,
            guild_scheduled_event_exceptions: s
        }), !0
    }

    function D(e) {
        var t;
        return null != e && (t = (null == e ? void 0 : e.status) === c.GuildScheduledEventStatus.ACTIVE, t)
    }

    function P(e) {
        return !c.GuildScheduledEventStatusDone.has(e.status)
    }

    function L(e) {
        return null != e && c.GuildScheduledEventStatusDone.has(e.status)
    }
    class M extends r.default.Store {
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
            return E
        }
        getRsvp(e, t, n) {
            var i, s;
            if (null == e) return null;
            let r = I(t);
            return null === (s = p[e]) || void 0 === s ? void 0 : null === (i = s[r]) || void 0 === i ? void 0 : i[n]
        }
        isInterestedInEventRecurrence(e, t) {
            let n = l.default.getId(),
                i = this.getRsvp(e, null, n),
                s = this.getRsvp(e, t, n),
                r = (null == i ? void 0 : i.response) === c.GuildScheduledEventUserResponses.INTERESTED,
                a = (null == s ? void 0 : s.response) === c.GuildScheduledEventUserResponses.INTERESTED,
                o = (null == s ? void 0 : s.response) === c.GuildScheduledEventUserResponses.UNINTERESTED;
            return r && !o || a
        }
        getUserCount(e, t) {
            var n, i, s, r;
            if (null == e) return 0;
            let a = null !== (s = null === (n = S[e]) || void 0 === n ? void 0 : n[m]) && void 0 !== s ? s : 0;
            if (null == t) return a;
            let o = null !== (r = null === (i = S[e]) || void 0 === i ? void 0 : i[t]) && void 0 !== r ? r : 0;
            return a - o
        }
        hasUserCount(e, t) {
            var n;
            let i = I(t);
            return (null === (n = S[e]) || void 0 === n ? void 0 : n[i]) != null
        }
        isActive(e) {
            return null != e && D(h.get(e))
        }
        getActiveEventByChannel(e) {
            if (null == e) return;
            let t = this.getGuildScheduledEventsByIndex(f.CHANNEL_EVENT_ACTIVE(e));
            return t[0]
        }
        getUsersForGuildEvent(e, t) {
            var n, i;
            if (null == e) return {};
            let s = I(t);
            return null !== (i = null === (n = p[e]) || void 0 === n ? void 0 : n[s]) && void 0 !== i ? i : {}
        }
    }
    M.displayName = "GuildScheduledEventStore";
    var b = new M(o.default, {
        CONNECTION_OPEN: function(e) {
            let {
                guilds: t
            } = e;
            return h.clear(), E = 0, p = {}, S = {}, g.forEach(v), t.forEach(e => e.guild_scheduled_events.forEach(e => v(e))), !0
        },
        GUILD_CREATE: function(e) {
            let {
                guild: t
            } = e;
            return N(t.id, !1), t.guild_scheduled_events.forEach(e => v(e)), !0
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            return N(t.id, !0), !0
        },
        FETCH_GUILD_EVENT: function(e) {
            let {
                guildScheduledEvent: t
            } = e;
            v(t)
        },
        FETCH_GUILD_EVENTS_FOR_GUILD: function(e) {
            let {
                guildId: t,
                guildScheduledEvents: n
            } = e, i = h.values(f.GUILD_EVENT(t), !0).map(e => e.id), r = n.map(e => e.id);
            for (let e of (s.difference(i, r).forEach(e => {
                    T(e)
                }), n)) v(e);
            return !0
        },
        GUILD_SCHEDULED_EVENT_CREATE: R,
        GUILD_SCHEDULED_EVENT_UPDATE: R,
        GUILD_SCHEDULED_EVENT_DELETE: function(e) {
            let {
                guildScheduledEvent: t
            } = e;
            return T(t.id), !0
        },
        GUILD_SCHEDULED_EVENT_USER_ADD: function(e) {
            var t, n;
            let {
                userId: i,
                guildEventId: s,
                guildId: r,
                guildEventExceptionId: a,
                response: o
            } = e, l = I(a), d = null === (n = p[s]) || void 0 === n ? void 0 : null === (t = n[l]) || void 0 === t ? void 0 : t[i];
            null != d && A(d, !1);
            let c = u.default.getMember(r, i);
            return C({
                user_id: i,
                guild_scheduled_event_id: s,
                member: null != c ? c : {
                    guildId: r
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
                response: s
            } = e;
            A({
                user_id: t,
                guild_scheduled_event_id: n,
                guild_scheduled_event_exception_id: i,
                response: s
            })
        },
        GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS: function(e) {
            let {
                guildScheduledEventUsers: t
            } = e;
            return t.forEach(e => C(e, !1, !1)), E += 1, !0
        },
        GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: function(e) {
            let {
                guildScheduledEventUsers: t
            } = e;
            return t.forEach(e => C(e, !1, !1)), E += 1, !0
        },
        GUILD_SCHEDULED_EVENT_USER_COUNTS_FETCH_SUCCESS: function(e) {
            let {
                eventId: t,
                counts: n
            } = e;
            y(t, null, n.eventCount), d.default.forEachKey(n.recurrenceCounts, e => {
                y(t, e, n.eventCount - n.recurrenceCounts[e])
            })
        },
        INVITE_RESOLVE_SUCCESS: function(e) {
            let {
                invite: t
            } = e, n = t.guild_scheduled_event;
            return null != n && (v(n), !0)
        },
        GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE: O,
        GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE: O,
        GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE: function(e) {
            let {
                eventException: t
            } = e, n = h.get(t.event_id);
            if (null == n) return !1;
            let i = n.guild_scheduled_event_exceptions.filter(e => e.event_exception_id !== t.event_exception_id);
            return v({
                ...n,
                guild_scheduled_event_exceptions: i
            }), !0
        },
        GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE: function(e) {
            let {
                eventId: t
            } = e, n = h.get(t);
            return null != n && (v({
                ...n,
                guild_scheduled_event_exceptions: []
            }), !0)
        },
        LOGOUT: function() {
            return h.clear(), !0
        }
    })
}