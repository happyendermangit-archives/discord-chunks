function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u = n("898511"),
        s = n("629815"),
        l = n("281767");

    function c(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function f(e) {
        return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function d(e, t) {
        return (d = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var _ = {},
        E = null,
        p = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && d(e, t)
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
                var e, r, o, i = f(t);
                if (n) {
                    var a = f(this).constructor;
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
                key: "applicationStatistics",
                get: function() {
                    return _
                }
            }, {
                key: "lastFetched",
                get: function() {
                    return E
                }
            }, {
                key: "getGameDuration",
                value: function(e) {
                    var t = _[e];
                    return null != t ? t.total_duration : 0
                }
            }, {
                key: "getLastPlayedDateTime",
                value: function(e) {
                    var t = _[e];
                    return null != t ? new Date(t.last_played_at).getTime() : null
                }
            }, {
                key: "hasApplicationStatistic",
                value: function(e) {
                    return null != _[e]
                }
            }, {
                key: "getCurrentUserStatisticsForApplication",
                value: function(e) {
                    return _[e]
                }
            }, {
                key: "getQuickSwitcherScoreForApplication",
                value: function(e) {
                    var t = _[e],
                        n = 0;
                    if (null != t) {
                        var r = Math.floor((Date.now() - new Date(t.last_played_at).getTime()) / 864e5),
                            o = Math.floor(1e3 * t.total_duration / 36e5);
                        0 === r ? n += 50 : r >= 1 && r < 2 ? n += 40 : r >= 2 && r < 4 ? n += 30 : r >= 4 && r < 7 ? n += 20 : r >= 7 && (n += 10), 0 === o ? n += 0 : o >= 1 && o < 12 ? n += 10 : o >= 12 && o < 168 ? n += 20 : o >= 168 && o < 720 ? n += 40 : o >= 720 && (n += 50)
                    }
                    return n
                }
            }], c(r.prototype, o), i && c(r, i), u
        }(u.default.Store);
    i = "LibraryApplicationStatisticsStore", (o = "displayName") in(r = p) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new p(s.default, {
        USER_ACTIVITY_STATISTICS_FETCH_SUCCESS: function(e) {
            e.statistics.forEach(function(e) {
                _[e.application_id] = e
            }), E = Date.now()
        },
        ACTIVITY_UPDATE_START: function(e) {
            var t, n = e.duration,
                r = e.applicationId,
                o = e.distributor,
                i = _[r],
                a = new Date().toISOString(),
                u = 0,
                s = 0;
            null != i && (u = i.total_duration, s = null !== (t = i.total_discord_sku_duration) && void 0 !== t ? t : 0), u += n, o === l.Distributors.DISCORD && (s += n), _[r] = {
                application_id: r,
                total_duration: u,
                last_played_at: a,
                total_discord_sku_duration: s
            }
        },
        LOGOUT: function() {
            _ = {}, E = null
        }
    })
}