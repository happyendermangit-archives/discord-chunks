function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        TimeUnits: function() {
            return u
        },
        default: function() {
            return k
        },
        getTimeAndUnit: function() {
            return w
        }
    });
    var r, o, i, a, u, s, l, c, f, d, _, E, p, m, y, I, h, O = n("470079"),
        T = n("392711"),
        S = n.n(T),
        v = n("945816"),
        g = n("941504");

    function A(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function b(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function N(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function R(e) {
        return (R = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function C(e, t) {
        return (C = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }(r = a || (a = {})).ACTIVITY_FEED = "ACTIVITY_FEED", r.ACTIVITY_FEED_NEW = "ACTIVITY_FEED_NEW", r.USER_ACTIVITY = "USER_ACTIVITY", r.GAME_LIBRARY_TIME_PLAYED = "GAME_LIBRARY_TIME_PLAYED", r.GAME_LIBRARY_LAST_PLAYED = "GAME_LIBRARY_LAST_PLAYED", (o = u || (u = {})).NONE = "NONE", o.SECONDS = "SECONDS", o.MINUTES = "MINUTES", o.HOURS = "HOURS", o.DAYS = "DAYS", o.WEEKS = "WEEKS", o.MONTHS = "MONTHS", o.YEARS = "YEARS", (i = s || (s = {})).START = "START", i.END = "END", i.TIME = "TIME";
    var P = (N(l = {}, "NONE", function(e) {
            return 0
        }), N(l, "SECONDS", function(e) {
            return 60 * e
        }), N(l, "MINUTES", function(e) {
            return e
        }), N(l, "HOURS", function(e) {
            return e / 60
        }), N(l, "DAYS", function(e) {
            return e / 60 / 24
        }), N(l, "WEEKS", function(e) {
            return e / 60 / 24 / 7
        }), N(l, "MONTHS", function(e) {
            return e / 60 / 24 / 31
        }), N(l, "YEARS", function(e) {
            return e / 60 / 24 / 365
        }), l),
        D = [{
            unit: "NONE",
            max: 0
        }, {
            unit: "SECONDS",
            max: 1
        }, {
            unit: "MINUTES",
            max: 60
        }, {
            unit: "HOURS",
            max: 1440
        }, {
            unit: "DAYS",
            max: 44640
        }, {
            unit: "WEEKS",
            max: 40320
        }, {
            unit: "MONTHS",
            max: 525600
        }, {
            unit: "YEARS",
            max: 1 / 0
        }],
        L = function(e) {
            return function(t, n) {
                return null == n ? "" : e().format(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            N(e, t, n[t])
                        })
                    }
                    return e
                }({
                    time: t
                }, n))
            }
        },
        M = (N(h = {}, "ACTIVITY_FEED", (N(d = {}, "START", (N(c = {}, "SECONDS", function() {
            return g.default.Messages.GAME_FEED_USER_PLAYING_JUST_STARTED
        }), N(c, "MINUTES", function(e) {
            return g.default.Messages.GAME_FEED_USER_PLAYING_FOR_MINUTES.format({
                time: e
            })
        }), N(c, "HOURS", function(e) {
            return g.default.Messages.GAME_FEED_USER_PLAYING_FOR_HOURS.format({
                time: e
            })
        }), N(c, "DAYS", function(e) {
            return g.default.Messages.GAME_FEED_USER_PLAYING_FOR_DAYS.format({
                time: e
            })
        }), c)), N(d, "END", (N(f = {}, "SECONDS", function() {
            return g.default.Messages.GAME_FEED_USER_PLAYING_JUST_ENDED
        }), N(f, "MINUTES", function(e) {
            return g.default.Messages.GAME_FEED_USER_PLAYED_MINUTES_AGO.format({
                time: e
            })
        }), N(f, "HOURS", function(e) {
            return g.default.Messages.GAME_FEED_USER_PLAYED_HOURS_AGO.format({
                time: e
            })
        }), N(f, "DAYS", function(e) {
            return g.default.Messages.GAME_FEED_USER_PLAYED_DAYS_AGO.format({
                time: e
            })
        }), N(f, "WEEKS", function(e) {
            return g.default.Messages.GAME_FEED_USER_PLAYED_WEEKS_AGO.format({
                time: e
            })
        }), N(f, "MONTHS", function(e) {
            return g.default.Messages.GAME_FEED_USER_PLAYED_MONTHS_AGO.format({
                time: e
            })
        }), N(f, "YEARS", function(e) {
            return g.default.Messages.GAME_FEED_USER_PLAYED_YEARS_AGO.format({
                time: e
            })
        }), f)), d)), N(h, "ACTIVITY_FEED_NEW", (N(p = {}, "START", (N(_ = {}, "SECONDS", L(function() {
            return g.default.Messages.ACTIVITY_FEED_USER_PLAYING_JUST_STARTED
        })), N(_, "MINUTES", L(function() {
            return g.default.Messages.ACTIVITY_FEED_USER_PLAYING_FOR_MINUTES
        })), N(_, "HOURS", L(function() {
            return g.default.Messages.ACTIVITY_FEED_USER_PLAYING_FOR_HOURS
        })), N(_, "DAYS", L(function() {
            return g.default.Messages.ACTIVITY_FEED_USER_PLAYING_FOR_DAYS
        })), _)), N(p, "END", (N(E = {}, "SECONDS", function(e) {
            return g.default.Messages.DURATION_SECONDS_AGO.format({
                seconds: e
            })
        }), N(E, "MINUTES", function(e) {
            return g.default.Messages.DURATION_MINUTES_AGO.format({
                minutes: e
            })
        }), N(E, "HOURS", function(e) {
            return g.default.Messages.DURATION_HOURS_AGO.format({
                hours: e
            })
        }), N(E, "DAYS", function(e) {
            return g.default.Messages.DURATION_DAYS_AGO.format({
                days: e
            })
        }), E)), p)), N(h, "USER_ACTIVITY", N({}, "START", (N(m = {}, "SECONDS", function() {
            return g.default.Messages.GAME_FEED_USER_PLAYING_JUST_STARTED
        }), N(m, "MINUTES", function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return n ? g.default.Messages.GAME_FEED_USER_PLAYING_FOR_MINUTES.format({
                time: e
            }) : g.default.Messages.USER_ACTIVITY_USER_PLAYING_FOR_MINUTES.format({
                time: e
            })
        }), N(m, "HOURS", function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return n ? g.default.Messages.GAME_FEED_USER_PLAYING_FOR_HOURS.format({
                time: e
            }) : g.default.Messages.USER_ACTIVITY_USER_PLAYING_FOR_HOURS.format({
                time: e
            })
        }), N(m, "DAYS", function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return n ? g.default.Messages.GAME_FEED_USER_PLAYING_FOR_DAYS.format({
                time: e
            }) : g.default.Messages.USER_ACTIVITY_USER_PLAYING_FOR_DAYS.format({
                time: e
            })
        }), m))), N(h, "GAME_LIBRARY_TIME_PLAYED", N({}, "TIME", (N(y = {}, "NONE", function() {
            return g.default.Messages.GAME_LIBRARY_TIME_PLAYED_NONE
        }), N(y, "SECONDS", function(e) {
            return g.default.Messages.GAME_LIBRARY_TIME_PLAYED_SECONDS.format({
                time: e
            })
        }), N(y, "MINUTES", function(e) {
            return g.default.Messages.GAME_LIBRARY_TIME_PLAYED_MINUTES.format({
                time: e
            })
        }), N(y, "HOURS", function(e) {
            return g.default.Messages.GAME_LIBRARY_TIME_PLAYED_HOURS.format({
                time: e
            })
        }), y))), N(h, "GAME_LIBRARY_LAST_PLAYED", N({}, "END", (N(I = {}, "NONE", function() {
            return g.default.Messages.GAME_LIBRARY_LAST_PLAYED_NONE
        }), N(I, "SECONDS", function() {
            return g.default.Messages.GAME_LIBRARY_LAST_PLAYED_JUST_NOW
        }), N(I, "MINUTES", function(e) {
            return g.default.Messages.GAME_LIBRARY_LAST_PLAYED_MINUTES.format({
                time: e
            })
        }), N(I, "HOURS", function(e) {
            return g.default.Messages.GAME_LIBRARY_LAST_PLAYED_HOURS.format({
                time: e
            })
        }), N(I, "DAYS", function(e) {
            return g.default.Messages.GAME_LIBRARY_LAST_PLAYED_DAYS.format({
                time: e
            })
        }), N(I, "WEEKS", function(e) {
            return g.default.Messages.GAME_LIBRARY_LAST_PLAYED_WEEKS.format({
                time: e
            })
        }), N(I, "MONTHS", function(e) {
            return g.default.Messages.GAME_LIBRARY_LAST_PLAYED_MONTHS.format({
                time: e
            })
        }), N(I, "YEARS", function(e) {
            return g.default.Messages.GAME_LIBRARY_LAST_PLAYED_YEARS.format({
                time: e
            })
        }), I))), h);

    function U(e, t) {
        var n = D.findIndex(function(t) {
                var n = t.max;
                return "NONE" === t.unit && e === n || e < n
            }),
            r = S().findLast(D, function(e) {
                return t(e.unit)
            }, n);
        if (null != r) return r.unit;
        var o = D.find(function(e) {
            return t(e.unit)
        });
        return null != o ? o.unit : null
    }

    function w(e, t) {
        var n = null != e ? U(e, function(e) {
                return t.includes(e)
            }) : "NONE",
            r = null != n ? P[n] : null;
        return {
            unit: n,
            time: null != e && null != r ? Math.floor(r(e)) : null
        }
    }

    function k(e) {
        var t, n;
        return n = function(t) {
            (function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && C(e, t)
            })(s, t);
            var n, r, o, i, a, u = (n = s, r = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, t, o, i = R(n);
                if (r) {
                    var a = R(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (t = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(t) || "function" == typeof t) ? t : A(e)
            });

            function s() {
                var e;
                return function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, s), e = u.apply(this, arguments), N(A(e), "timer", new v.Interval), N(A(e), "state", {
                    time: e.getDiff()
                }), N(A(e), "update", function() {
                    e.setState({
                        time: e.getDiff()
                    })
                }), e
            }
            return o = s, i = [{
                key: "componentDidMount",
                value: function() {
                    this.timer.start(1e4, this.update)
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    var t = this.props,
                        n = t.start,
                        r = t.end,
                        o = t.time;
                    (e.start !== n || e.end !== r || e.time !== o) && this.update()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.timer.stop()
                }
            }, {
                key: "getDiff",
                value: function() {
                    var e = this.props,
                        t = e.start,
                        n = e.end,
                        r = e.time;
                    if (null != r) return r / 1e3 / 60;
                    var o = Date.now(),
                        i = 0;
                    return null != t ? i = o - t : null != n && (i = o - n), Math.abs(i) / 1e3 / 60
                }
            }, {
                key: "getTimeUnit",
                value: function(e, t, n) {
                    var r = U(e, function(e) {
                        return function(e, t, n) {
                            var r = M[n];
                            if (null != r) {
                                var o = r[t];
                                if (null != o) return null != o[e]
                            }
                            return !1
                        }(e, n, t)
                    });
                    if (null == r) throw Error("Could not get the time unit in PlayTime with time: ".concat(e, " for type: ").concat(n, " in location: ").concat(t));
                    return r
                }
            }, {
                key: "getType",
                value: function() {
                    var e = this.props,
                        t = e.start,
                        n = e.end,
                        r = e.time;
                    if (null != t) return "START";
                    if (null != n) return "END";
                    if (null != r) return "TIME";
                    return null
                }
            }, {
                key: "transformTime",
                value: function(e, t) {
                    return P[e](t)
                }
            }, {
                key: "render",
                value: function() {
                    var t = this.props,
                        n = t.location,
                        r = t.messageProps,
                        o = t.isApplicationStreaming,
                        i = function(e, t) {
                            if (null == e) return {};
                            var n, r, o = function(e, t) {
                                if (null == e) return {};
                                var n, r, o = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                                return o
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var i = Object.getOwnPropertySymbols(e);
                                for (r = 0; r < i.length; r++) {
                                    if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                                }
                            }
                            return o
                        }(t, ["location", "messageProps", "isApplicationStreaming"]),
                        a = this.state.time,
                        u = this.getType();
                    if (null == u) return null;
                    var s = this.getTimeUnit(a, n, u),
                        l = M[n][u];
                    if (null == l) return null;
                    var c = l[s],
                        f = Math.floor(this.transformTime(s, a));
                    return O.createElement(e, i, null == c ? void 0 : c(f, r, o))
                }
            }], b(o.prototype, i), a && b(o, a), s
        }(O.PureComponent), N(n, "Locations", a), N(n, "Types", s), n
    }
}