function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("392711"),
        i = n.n(o),
        a = n("898511"),
        u = n("629815"),
        s = n("506900"),
        l = n("569492"),
        c = n("217014");

    function f(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function _(e) {
        return (_ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function E(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                d(e, t, n[t])
            })
        }
        return e
    }

    function p(e, t) {
        return (p = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var m = {},
        y = new s.default,
        I = new Set;

    function h(e) {
        m = i()(m).reject(function(t) {
            return t.guildId === e
        }).keyBy("threadId").value()
    }

    function O(e) {
        var t;
        null === (t = e.threads) || void 0 === t || t.forEach(T)
    }

    function T(e) {
        l.ALL_CHANNEL_TYPES.has(e.type) && null != e.member && (m[e.id] = {
            threadId: e.id,
            guildId: e.guild_id,
            flags: e.member.flags,
            muted: e.member.muted,
            muteConfig: e.member.muteConfig,
            joinTimestamp: new Date(e.member.joinTimestamp)
        }, S(e.id))
    }

    function S(e) {
        var t = m[e];
        y.clearTimer(e), !0 === t.muted ? ((I = new Set(I)).add(e), y.setTimer(e, t.muteConfig, function() {
            m[e].muted = !1, (I = new Set(I)).delete(e), A.emitChange()
        }) && (m[e].muted = !1, (I = new Set(I)).delete(e))) : (I = new Set(I)).delete(e)
    }

    function v(e) {
        var t = e.guildId,
            n = e.members;
        null != t && null != n && n.forEach(function(e) {
            m[e.id] = {
                threadId: e.id,
                guildId: t,
                flags: e.flags,
                muted: e.muted,
                muteConfig: e.muteConfig,
                joinTimestamp: new Date(e.joinTimestamp)
            }, S(e.id)
        })
    }
    var g = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && p(e, t)
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
            var e, r, o, i = _(t);
            if (n) {
                var a = _(this).constructor;
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
            key: "hasJoined",
            value: function(e) {
                return e in m
            }
        }, {
            key: "joinTimestamp",
            value: function(e) {
                var t;
                return null === (t = m[e]) || void 0 === t ? void 0 : t.joinTimestamp
            }
        }, {
            key: "flags",
            value: function(e) {
                var t;
                return null === (t = m[e]) || void 0 === t ? void 0 : t.flags
            }
        }, {
            key: "getInitialOverlayState",
            value: function() {
                return Object.values(m)
            }
        }, {
            key: "getMuteConfig",
            value: function(e) {
                var t;
                return null === (t = m[e]) || void 0 === t ? void 0 : t.muteConfig
            }
        }, {
            key: "getMutedThreads",
            value: function() {
                return I
            }
        }, {
            key: "isMuted",
            value: function(e) {
                return I.has(e)
            }
        }], f(r.prototype, o), i && f(r, i), u
    }(a.default.Store);
    d(g, "displayName", "JoinedThreadsStore");
    var A = new g(u.default, {
        CONNECTION_OPEN: function(e) {
            y.reset(), I = new Set, m = {}, e.guilds.forEach(function(e) {
                O(e)
            })
        },
        OVERLAY_INITIALIZE: function(e) {
            var t = e.joinedThreads;
            m = i()(t).map(function(e) {
                var t, n;
                return t = E({}, e), n = (n = {
                    joinTimestamp: new Date(e.joinTimestamp)
                }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }), t
            }).keyBy("threadId").value()
        },
        GUILD_CREATE: function(e) {
            var t = e.guild;
            h(t.id), O(t)
        },
        GUILD_DELETE: function(e) {
            h(e.guild.id)
        },
        THREAD_CREATE: function(e) {
            T(e.channel)
        },
        THREAD_LIST_SYNC: v,
        SEARCH_FINISH: v,
        MOD_VIEW_SEARCH_FINISH: v,
        LOAD_THREADS_SUCCESS: v,
        LOAD_ARCHIVED_THREADS_SUCCESS: v,
        THREAD_DELETE: function(e) {
            var t = e.channel;
            if (!(t.id in m)) return !1;
            m = E({}, m), delete m[t.id]
        },
        THREAD_MEMBER_UPDATE: function(e) {
            if (c.default.getId() !== e.userId) return !1;
            m[e.id] = {
                threadId: e.id,
                guildId: e.guildId,
                flags: e.flags,
                muted: e.muted,
                muteConfig: e.muteConfig,
                joinTimestamp: new Date(e.joinTimestamp)
            }, S(e.id)
        },
        THREAD_MEMBER_LOCAL_UPDATE: function(e) {
            var t = e.id,
                n = e.userId,
                r = e.guildId,
                o = e.isJoining;
            if (c.default.getId() !== n || null === r) return !1;
            o ? m[t] = {
                threadId: t,
                guildId: r,
                flags: 0,
                muted: !0,
                muteConfig: {
                    end_time: void 0
                },
                joinTimestamp: new Date
            } : delete m[t]
        },
        THREAD_MEMBERS_UPDATE: function(e) {
            var t, n, r = !1;
            return (null === (t = e.removedMemberIds) || void 0 === t ? void 0 : t.includes(c.default.getId())) && e.id in m && (m = E({}, m), delete m[e.id], r = !0), null === (n = e.addedMembers) || void 0 === n || n.forEach(function(t) {
                t.userId === c.default.getId() && ((m = E({}, m))[e.id] = {
                    threadId: e.id,
                    guildId: e.guildId,
                    flags: t.flags,
                    muted: t.muted,
                    muteConfig: t.muteConfig,
                    joinTimestamp: new Date(t.joinTimestamp)
                }, S(e.id), r = !0)
            }), r
        }
    });
    t.default = A
}