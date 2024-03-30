function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        StaticGuildEventIndexes: function() {
            return O
        },
        isEventUpcoming: function() {
            return B
        },
        isGuildEventEnded: function() {
            return j
        },
        isGuildScheduledEventActive: function() {
            return G
        },
        scheduledEventSort: function() {
            return T
        }
    });
    var r, o = n("392711"),
        i = n.n(o),
        a = n("898511"),
        u = n("727309"),
        s = n("629815"),
        l = n("217014"),
        c = n("957808"),
        f = n("523018"),
        d = n("713653");

    function _(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function E(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function p(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function m(e) {
        return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function y(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                p(e, t, n[t])
            })
        }
        return e
    }

    function I(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function h(e, t) {
        return (h = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var O = {
        EVENT: "event",
        EVENT_ACTIVE: "active",
        EVENT_UPCOMING: "event-upcoming",
        GUILD_EVENT: function(e) {
            return "".concat(e, "-").concat(O.EVENT)
        },
        GUILD_EVENT_ACTIVE: function(e) {
            return "".concat(e, "-").concat(O.EVENT_ACTIVE)
        },
        GUILD_EVENT_UPCOMING: function(e) {
            return "".concat(e, "-").concat(O.EVENT_UPCOMING)
        },
        CHANNEL_EVENT: function(e) {
            return "".concat(e, "-").concat(O.EVENT)
        },
        CHANNEL_EVENT_ACTIVE: function(e) {
            return "".concat(e, "-").concat(O.EVENT_ACTIVE)
        },
        CHANNEL_EVENT_UPCOMING: function(e) {
            return "".concat(e, "-").concat(O.EVENT_UPCOMING)
        }
    };

    function T(e) {
        var t = e.id,
            n = e.scheduled_start_time,
            r = G(e) ? "\0" : "\x01";
        return "".concat(r, "-").concat(new Date(n).getTime(), "-").concat(t)
    }
    var S = new u.SecondaryIndexMap(function(e) {
            var t = e.guild_id,
                n = e.entity_id,
                r = e.channel_id,
                o = [t];
            return null != n && o.push(n), o.push(O.GUILD_EVENT(t)), null != r && o.push(O.CHANNEL_EVENT(r)), G(e) && (o.push(O.EVENT_ACTIVE), o.push(O.GUILD_EVENT_ACTIVE(t)), null != r && o.push(O.CHANNEL_EVENT_ACTIVE(r))), B(e) && (o.push(O.EVENT_UPCOMING), o.push(O.GUILD_EVENT_UPCOMING(t)), null != r && o.push(O.CHANNEL_EVENT_UPCOMING(r))), o
        }, T),
        v = 0,
        g = [],
        A = "SERIES",
        b = {},
        N = {};

    function R(e) {
        S.set(e.id, e), v += 1
    }

    function C(e) {
        var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        S.delete(e), delete b[e], t && delete N[e], v += 1
    }

    function P(e) {
        return null != e ? e : A
    }

    function D(e) {
        var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            r = e.guild_scheduled_event_id;
        null == b[r] && (b[r] = {});
        var o = P(e.guild_scheduled_event_exception_id);
        null == b[r][o] && (b[r][o] = {}), b[r][o][e.user_id] = e, t && function(e) {
            var t, n, r = P(e.guild_scheduled_event_exception_id),
                o = null !== (n = null === (t = N[e.guild_scheduled_event_id]) || void 0 === t ? void 0 : t[r]) && void 0 !== n ? n : 0,
                i = null != e.guild_scheduled_event_exception_id && e.response === d.GuildScheduledEventUserResponses.UNINTERESTED || null == e.guild_scheduled_event_exception_id && e.response === d.GuildScheduledEventUserResponses.INTERESTED ? 1 : -1;
            M(e.guild_scheduled_event_id, e.guild_scheduled_event_exception_id, o + i)
        }(e), n && (v += 1)
    }

    function L(e) {
        var t, n, r, o, i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            a = P(e.guild_scheduled_event_exception_id),
            u = (null === (n = b[e.guild_scheduled_event_id]) || void 0 === n ? void 0 : null === (t = n[a]) || void 0 === t ? void 0 : t[e.user_id]) != null,
            s = e.user_id === l.default.getId();
        (u || !s) && (null === (o = b[e.guild_scheduled_event_id]) || void 0 === o || null === (r = o[a]) || void 0 === r || delete r[e.user_id], function(e) {
            var t, n, r = P(e.guild_scheduled_event_exception_id),
                o = null !== (n = null === (t = N[e.guild_scheduled_event_id]) || void 0 === t ? void 0 : t[r]) && void 0 !== n ? n : 0,
                i = null != e.guild_scheduled_event_exception_id && e.response === d.GuildScheduledEventUserResponses.UNINTERESTED || null == e.guild_scheduled_event_exception_id && e.response === d.GuildScheduledEventUserResponses.INTERESTED ? -1 : 1;
            M(e.guild_scheduled_event_id, e.guild_scheduled_event_exception_id, o + i)
        }(e), i && (v += 1))
    }

    function M(e, t, n) {
        var r = P(t);
        null == N[e] && (N[e] = {}), N[e][r] = n
    }

    function U(e, t) {
        S.values(O.GUILD_EVENT(e)).forEach(function(e) {
            return C(e.id, t)
        })
    }

    function w(e) {
        return R(e.guildScheduledEvent), !0
    }

    function k(e) {
        var t, n = e.eventException,
            r = S.get(n.event_id);
        if (null == r) return !1;
        var o = r.guild_scheduled_event_exceptions.findIndex(function(e) {
            return e.event_exception_id === n.event_exception_id
        });
        var i = function(e) {
            if (Array.isArray(e)) return _(e)
        }(t = r.guild_scheduled_event_exceptions) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return _(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(e, t)
            }
        }(t) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }();
        return o < 0 ? i.push(n) : i[o] = n, R(I(y({}, r), {
            guild_scheduled_event_exceptions: i
        })), !0
    }

    function G(e) {
        var t;
        return null != e && (t = (null == e ? void 0 : e.status) === d.GuildScheduledEventStatus.ACTIVE, t)
    }

    function B(e) {
        return !d.GuildScheduledEventStatusDone.has(e.status)
    }

    function j(e) {
        return null != e && d.GuildScheduledEventStatusDone.has(e.status)
    }
    var F = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && h(e, t)
        }(u, e);
        var t, n, r, o, i, a = (t = u, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = m(t);
            if (n) {
                var a = m(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function u() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, u), a.apply(this, arguments)
        }
        return r = u, o = [{
            key: "getGuildScheduledEvent",
            value: function(e) {
                var t;
                return null == e ? null : null !== (t = S.get(e)) && void 0 !== t ? t : null
            }
        }, {
            key: "getGuildEventCountByIndex",
            value: function(e) {
                return S.size(e)
            }
        }, {
            key: "getGuildScheduledEventsForGuild",
            value: function(e) {
                return null == e ? [] : S.values(e)
            }
        }, {
            key: "getGuildScheduledEventsByIndex",
            value: function(e) {
                return S.values(e)
            }
        }, {
            key: "getRsvpVersion",
            value: function() {
                return v
            }
        }, {
            key: "getRsvp",
            value: function(e, t, n) {
                if (null == e) return null;
                var r, o, i = P(t);
                return null === (o = b[e]) || void 0 === o ? void 0 : null === (r = o[i]) || void 0 === r ? void 0 : r[n]
            }
        }, {
            key: "isInterestedInEventRecurrence",
            value: function(e, t) {
                var n = l.default.getId(),
                    r = this.getRsvp(e, null, n),
                    o = this.getRsvp(e, t, n),
                    i = (null == r ? void 0 : r.response) === d.GuildScheduledEventUserResponses.INTERESTED,
                    a = (null == o ? void 0 : o.response) === d.GuildScheduledEventUserResponses.INTERESTED,
                    u = (null == o ? void 0 : o.response) === d.GuildScheduledEventUserResponses.UNINTERESTED;
                return i && !u || a
            }
        }, {
            key: "getUserCount",
            value: function(e, t) {
                if (null == e) return 0;
                var n, r, o, i, a = null !== (o = null === (n = N[e]) || void 0 === n ? void 0 : n[A]) && void 0 !== o ? o : 0;
                return null == t ? a : a - (null !== (i = null === (r = N[e]) || void 0 === r ? void 0 : r[t]) && void 0 !== i ? i : 0)
            }
        }, {
            key: "hasUserCount",
            value: function(e, t) {
                var n, r = P(t);
                return (null === (n = N[e]) || void 0 === n ? void 0 : n[r]) != null
            }
        }, {
            key: "isActive",
            value: function(e) {
                return null != e && G(S.get(e))
            }
        }, {
            key: "getActiveEventByChannel",
            value: function(e) {
                if (null != e) return this.getGuildScheduledEventsByIndex(O.CHANNEL_EVENT_ACTIVE(e))[0]
            }
        }, {
            key: "getUsersForGuildEvent",
            value: function(e, t) {
                if (null == e) return {};
                var n, r, o = P(t);
                return null !== (r = null === (n = b[e]) || void 0 === n ? void 0 : n[o]) && void 0 !== r ? r : {}
            }
        }], E(r.prototype, o), i && E(r, i), u
    }(a.default.Store);
    p(F, "displayName", "GuildScheduledEventStore"), t.default = new F(s.default, {
        CONNECTION_OPEN: function(e) {
            var t = e.guilds;
            return S.clear(), v = 0, b = {}, N = {}, g.forEach(R), t.forEach(function(e) {
                return e.guild_scheduled_events.forEach(function(e) {
                    return R(e)
                })
            }), !0
        },
        GUILD_CREATE: function(e) {
            var t = e.guild;
            return U(t.id, !1), t.guild_scheduled_events.forEach(function(e) {
                return R(e)
            }), !0
        },
        GUILD_DELETE: function(e) {
            return U(e.guild.id, !0), !0
        },
        FETCH_GUILD_EVENT: function(e) {
            R(e.guildScheduledEvent)
        },
        FETCH_GUILD_EVENTS_FOR_GUILD: function(e) {
            var t = e.guildId,
                n = e.guildScheduledEvents,
                r = S.values(O.GUILD_EVENT(t), !0).map(function(e) {
                    return e.id
                }),
                o = n.map(function(e) {
                    return e.id
                });
            i().difference(r, o).forEach(function(e) {
                C(e)
            });
            var a = !0,
                u = !1,
                s = void 0;
            try {
                for (var l, c = n[Symbol.iterator](); !(a = (l = c.next()).done); a = !0) {
                    var f = l.value;
                    R(f)
                }
            } catch (e) {
                u = !0, s = e
            } finally {
                try {
                    !a && null != c.return && c.return()
                } finally {
                    if (u) throw s
                }
            }
            return !0
        },
        GUILD_SCHEDULED_EVENT_CREATE: w,
        GUILD_SCHEDULED_EVENT_UPDATE: w,
        GUILD_SCHEDULED_EVENT_DELETE: function(e) {
            return C(e.guildScheduledEvent.id), !0
        },
        GUILD_SCHEDULED_EVENT_USER_ADD: function(e) {
            var t, n, r = e.userId,
                o = e.guildEventId,
                i = e.guildId,
                a = e.guildEventExceptionId,
                u = e.response,
                s = P(a),
                l = null === (n = b[o]) || void 0 === n ? void 0 : null === (t = n[s]) || void 0 === t ? void 0 : t[r];
            null != l && L(l, !1);
            var f = c.default.getMember(i, r);
            return D({
                user_id: r,
                guild_scheduled_event_id: o,
                member: null != f ? f : {
                    guildId: i
                },
                guild_scheduled_event_exception_id: a,
                response: u
            }), !0
        },
        GUILD_SCHEDULED_EVENT_USER_REMOVE: function(e) {
            L({
                user_id: e.userId,
                guild_scheduled_event_id: e.guildEventId,
                guild_scheduled_event_exception_id: e.guildEventExceptionId,
                response: e.response
            })
        },
        GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS: function(e) {
            return e.guildScheduledEventUsers.forEach(function(e) {
                return D(e, !1, !1)
            }), v += 1, !0
        },
        GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: function(e) {
            return e.guildScheduledEventUsers.forEach(function(e) {
                return D(e, !1, !1)
            }), v += 1, !0
        },
        GUILD_SCHEDULED_EVENT_USER_COUNTS_FETCH_SUCCESS: function(e) {
            var t = e.eventId,
                n = e.counts;
            M(t, null, n.eventCount), f.default.forEachKey(n.recurrenceCounts, function(e) {
                M(t, e, n.eventCount - n.recurrenceCounts[e])
            })
        },
        INVITE_RESOLVE_SUCCESS: function(e) {
            var t = e.invite.guild_scheduled_event;
            return null != t && (R(t), !0)
        },
        GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE: k,
        GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE: k,
        GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE: function(e) {
            var t = e.eventException,
                n = S.get(t.event_id);
            if (null == n) return !1;
            var r = n.guild_scheduled_event_exceptions.filter(function(e) {
                return e.event_exception_id !== t.event_exception_id
            });
            return R(I(y({}, n), {
                guild_scheduled_event_exceptions: r
            })), !0
        },
        GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE: function(e) {
            var t = e.eventId,
                n = S.get(t);
            return null != n && (R(I(y({}, n), {
                guild_scheduled_event_exceptions: []
            })), !0)
        },
        LOGOUT: function() {
            return S.clear(), !0
        }
    })
}