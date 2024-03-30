function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u = n("512722"),
        s = n.n(u),
        l = n("674866"),
        c = n("898511"),
        f = n("629815"),
        d = n("217014"),
        _ = n("950520"),
        E = n("523018");

    function p(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function m(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function y(e) {
        return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function I(e, t) {
        return (I = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var h = new Set,
        O = new Map,
        T = new Set,
        S = new Set,
        v = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && I(e, t)
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
                var e, r, o, i = y(t);
                if (n) {
                    var a = y(this).constructor;
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
                key: "getRecentGames",
                value: function(e) {
                    var t;
                    return null === (t = O.get(e)) || void 0 === t ? void 0 : t.recentGames
                }
            }, {
                key: "getLastFetchTimestamp",
                value: function(e) {
                    var t;
                    return null === (t = O.get(e)) || void 0 === t ? void 0 : t.lastFetchTimestampMs
                }
            }, {
                key: "isFetching",
                value: function(e) {
                    return T.has(e)
                }
            }, {
                key: "isError",
                value: function(e) {
                    return S.has(e)
                }
            }, {
                key: "getCurrentUserApplicationIds",
                value: function() {
                    var e = d.default.getId(),
                        t = O.get(e);
                    return null == t ? h : new Set(t.recentGames.map(function(e) {
                        return e.applicationId
                    }))
                }
            }], m(r.prototype, o), i && m(r, i), u
        }(c.default.Store);
    i = "UserRecentGamesStore", (o = "displayName") in(r = v) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new v(f.default, {
        CONNECTION_OPEN: function() {
            O = new Map, T = new Set, S = new Set
        },
        USER_RECENT_GAMES_FETCH_START: function(e) {
            var t = e.userId;
            S.delete(t), T.add(t)
        },
        USER_RECENT_GAMES_FETCH_SUCCESS: function(e) {
            var t = e.userId,
                n = e.recentGames;
            T.delete(t), O.set(t, {
                recentGames: n.map(function(e) {
                    return {
                        applicationId: e.application.id,
                        duration: e.duration,
                        lastSessionId: e.last_session_id
                    }
                }).sort(function(e, t) {
                    return E.default.compare(t.lastSessionId, e.lastSessionId)
                }),
                lastFetchTimestampMs: Date.now()
            })
        },
        USER_RECENT_GAMES_FETCH_ERROR: function(e) {
            var t = e.userId;
            T.delete(t), S.add(t)
        },
        USER_RECENT_GAMES_UPDATE_LOCAL: function(e) {
            var t = e.applicationId,
                n = e.duration;
            if (null == _.default.getDetectableGame(t) || n < l.UserGameApplicationSessionDuration.MIN_DURATION_SECS) return !1;
            ! function(e, t) {
                var n = O.get(e);
                if (null == n) return;
                var r = [],
                    o = null;
                if (n.recentGames.forEach(function(e) {
                        e.applicationId === t.applicationId ? o = e : r.push(e)
                    }), null != o) {
                    var i, a, u, l = (i = o, a = t, s()(i.applicationId === a.applicationId, "[UserRecentGamesStore] Games must have same application for merge."), {
                        applicationId: i.applicationId,
                        duration: i.duration + a.duration,
                        lastSessionId: E.default.compare(i.lastSessionId, a.lastSessionId) > 0 ? i.lastSessionId : a.lastSessionId
                    });
                    O.set(e, {
                        lastFetchTimestampMs: Date.now(),
                        recentGames: [l].concat(function(e) {
                            if (Array.isArray(e)) return p(e)
                        }(u = r) || function(e) {
                            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                        }(u) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return p(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return p(e, t)
                            }
                        }(u) || function() {
                            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }())
                    })
                }
            }(d.default.getId(), {
                applicationId: t,
                duration: n,
                lastSessionId: E.default.fromTimestamp(Date.now())
            })
        }
    })
}