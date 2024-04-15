function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        TimeUnits: function() {
            return r
        },
        default: function() {
            return p
        },
        getTimeAndUnit: function() {
            return N
        }
    }), n("411104"), n("852437"), n("47120");
    var i, r, s, a, o, l, u = n("735250"),
        d = n("470079"),
        _ = n("392711"),
        c = n.n(_),
        E = n("846519"),
        I = n("689938");

    function T(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }(a = i || (i = {})).ACTIVITY_FEED = "ACTIVITY_FEED", a.ACTIVITY_FEED_NEW = "ACTIVITY_FEED_NEW", a.USER_ACTIVITY = "USER_ACTIVITY", a.GAME_LIBRARY_TIME_PLAYED = "GAME_LIBRARY_TIME_PLAYED", a.GAME_LIBRARY_LAST_PLAYED = "GAME_LIBRARY_LAST_PLAYED", (o = r || (r = {})).NONE = "NONE", o.SECONDS = "SECONDS", o.MINUTES = "MINUTES", o.HOURS = "HOURS", o.DAYS = "DAYS", o.WEEKS = "WEEKS", o.MONTHS = "MONTHS", o.YEARS = "YEARS", (l = s || (s = {})).START = "START", l.END = "END", l.TIME = "TIME";
    let f = {
            NONE: e => 0,
            SECONDS: e => 60 * e,
            MINUTES: e => e,
            HOURS: e => e / 60,
            DAYS: e => e / 60 / 24,
            WEEKS: e => e / 60 / 24 / 7,
            MONTHS: e => e / 60 / 24 / 31,
            YEARS: e => e / 60 / 24 / 365
        },
        S = [{
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
        h = e => (t, n) => null == n ? "" : e().format({
            time: t,
            ...n
        }),
        A = {
            ACTIVITY_FEED: {
                START: {
                    SECONDS: () => I.default.Messages.GAME_FEED_USER_PLAYING_JUST_STARTED,
                    MINUTES: e => I.default.Messages.GAME_FEED_USER_PLAYING_FOR_MINUTES.format({
                        time: e
                    }),
                    HOURS: e => I.default.Messages.GAME_FEED_USER_PLAYING_FOR_HOURS.format({
                        time: e
                    }),
                    DAYS: e => I.default.Messages.GAME_FEED_USER_PLAYING_FOR_DAYS.format({
                        time: e
                    })
                },
                END: {
                    SECONDS: () => I.default.Messages.GAME_FEED_USER_PLAYING_JUST_ENDED,
                    MINUTES: e => I.default.Messages.GAME_FEED_USER_PLAYED_MINUTES_AGO.format({
                        time: e
                    }),
                    HOURS: e => I.default.Messages.GAME_FEED_USER_PLAYED_HOURS_AGO.format({
                        time: e
                    }),
                    DAYS: e => I.default.Messages.GAME_FEED_USER_PLAYED_DAYS_AGO.format({
                        time: e
                    }),
                    WEEKS: e => I.default.Messages.GAME_FEED_USER_PLAYED_WEEKS_AGO.format({
                        time: e
                    }),
                    MONTHS: e => I.default.Messages.GAME_FEED_USER_PLAYED_MONTHS_AGO.format({
                        time: e
                    }),
                    YEARS: e => I.default.Messages.GAME_FEED_USER_PLAYED_YEARS_AGO.format({
                        time: e
                    })
                }
            },
            ACTIVITY_FEED_NEW: {
                START: {
                    SECONDS: h(() => I.default.Messages.ACTIVITY_FEED_USER_PLAYING_JUST_STARTED),
                    MINUTES: h(() => I.default.Messages.ACTIVITY_FEED_USER_PLAYING_FOR_MINUTES),
                    HOURS: h(() => I.default.Messages.ACTIVITY_FEED_USER_PLAYING_FOR_HOURS),
                    DAYS: h(() => I.default.Messages.ACTIVITY_FEED_USER_PLAYING_FOR_DAYS)
                },
                END: {
                    SECONDS: e => I.default.Messages.DURATION_SECONDS_AGO.format({
                        seconds: e
                    }),
                    MINUTES: e => I.default.Messages.DURATION_MINUTES_AGO.format({
                        minutes: e
                    }),
                    HOURS: e => I.default.Messages.DURATION_HOURS_AGO.format({
                        hours: e
                    }),
                    DAYS: e => I.default.Messages.DURATION_DAYS_AGO.format({
                        days: e
                    })
                }
            },
            USER_ACTIVITY: {
                START: {
                    SECONDS: () => I.default.Messages.GAME_FEED_USER_PLAYING_JUST_STARTED,
                    MINUTES: function(e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return n ? I.default.Messages.GAME_FEED_USER_PLAYING_FOR_MINUTES.format({
                            time: e
                        }) : I.default.Messages.USER_ACTIVITY_USER_PLAYING_FOR_MINUTES.format({
                            time: e
                        })
                    },
                    HOURS: function(e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return n ? I.default.Messages.GAME_FEED_USER_PLAYING_FOR_HOURS.format({
                            time: e
                        }) : I.default.Messages.USER_ACTIVITY_USER_PLAYING_FOR_HOURS.format({
                            time: e
                        })
                    },
                    DAYS: function(e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return n ? I.default.Messages.GAME_FEED_USER_PLAYING_FOR_DAYS.format({
                            time: e
                        }) : I.default.Messages.USER_ACTIVITY_USER_PLAYING_FOR_DAYS.format({
                            time: e
                        })
                    }
                }
            },
            GAME_LIBRARY_TIME_PLAYED: {
                TIME: {
                    NONE: () => I.default.Messages.GAME_LIBRARY_TIME_PLAYED_NONE,
                    SECONDS: e => I.default.Messages.GAME_LIBRARY_TIME_PLAYED_SECONDS.format({
                        time: e
                    }),
                    MINUTES: e => I.default.Messages.GAME_LIBRARY_TIME_PLAYED_MINUTES.format({
                        time: e
                    }),
                    HOURS: e => I.default.Messages.GAME_LIBRARY_TIME_PLAYED_HOURS.format({
                        time: e
                    })
                }
            },
            GAME_LIBRARY_LAST_PLAYED: {
                END: {
                    NONE: () => I.default.Messages.GAME_LIBRARY_LAST_PLAYED_NONE,
                    SECONDS: () => I.default.Messages.GAME_LIBRARY_LAST_PLAYED_JUST_NOW,
                    MINUTES: e => I.default.Messages.GAME_LIBRARY_LAST_PLAYED_MINUTES.format({
                        time: e
                    }),
                    HOURS: e => I.default.Messages.GAME_LIBRARY_LAST_PLAYED_HOURS.format({
                        time: e
                    }),
                    DAYS: e => I.default.Messages.GAME_LIBRARY_LAST_PLAYED_DAYS.format({
                        time: e
                    }),
                    WEEKS: e => I.default.Messages.GAME_LIBRARY_LAST_PLAYED_WEEKS.format({
                        time: e
                    }),
                    MONTHS: e => I.default.Messages.GAME_LIBRARY_LAST_PLAYED_MONTHS.format({
                        time: e
                    }),
                    YEARS: e => I.default.Messages.GAME_LIBRARY_LAST_PLAYED_YEARS.format({
                        time: e
                    })
                }
            }
        };

    function m(e, t) {
        let n = S.findIndex(t => {
                let {
                    max: n,
                    unit: i
                } = t;
                return "NONE" === i && e === n || e < n
            }),
            i = c().findLast(S, e => {
                let {
                    unit: n
                } = e;
                return t(n)
            }, n);
        if (null != i) return i.unit;
        let r = S.find(e => {
            let {
                unit: n
            } = e;
            return t(n)
        });
        return null != r ? r.unit : null
    }

    function N(e, t) {
        let n = null != e ? m(e, e => t.includes(e)) : "NONE",
            i = null != n ? f[n] : null;
        return {
            unit: n,
            time: null != e && null != i ? Math.floor(i(e)) : null
        }
    }

    function p(e) {
        var t, n;
        return n = class extends(t = d.PureComponent) {
            componentDidMount() {
                this.timer.start(1e4, this.update)
            }
            componentDidUpdate(e) {
                let {
                    start: t,
                    end: n,
                    time: i
                } = this.props;
                (e.start !== t || e.end !== n || e.time !== i) && this.update()
            }
            componentWillUnmount() {
                this.timer.stop()
            }
            getDiff() {
                let {
                    start: e,
                    end: t,
                    time: n
                } = this.props;
                if (null != n) return n / 1e3 / 60;
                let i = Date.now(),
                    r = 0;
                return null != e ? r = i - e : null != t && (r = i - t), Math.abs(r) / 1e3 / 60
            }
            getTimeUnit(e, t, n) {
                let i = m(e, e => (function(e, t, n) {
                    let i = A[n];
                    if (null != i) {
                        let n = i[t];
                        if (null != n) return null != n[e]
                    }
                    return !1
                })(e, n, t));
                if (null == i) throw Error("Could not get the time unit in PlayTime with time: ".concat(e, " for type: ").concat(n, " in location: ").concat(t));
                return i
            }
            getType() {
                let {
                    start: e,
                    end: t,
                    time: n
                } = this.props;
                if (null != e) return "START";
                if (null != t) return "END";
                if (null != n) return "TIME";
                return null
            }
            transformTime(e, t) {
                return f[e](t)
            }
            render() {
                let {
                    location: t,
                    messageProps: n,
                    isApplicationStreaming: i,
                    ...r
                } = this.props, {
                    time: s
                } = this.state, a = this.getType();
                if (null == a) return null;
                let o = this.getTimeUnit(s, t, a),
                    l = A[t][a];
                if (null == l) return null;
                let d = l[o],
                    _ = Math.floor(this.transformTime(o, s));
                return (0, u.jsx)(e, {
                    ...r,
                    children: null == d ? void 0 : d(_, n, i)
                })
            }
            constructor(...e) {
                super(...e), T(this, "timer", new E.Interval), T(this, "state", {
                    time: this.getDiff()
                }), T(this, "update", () => {
                    this.setState({
                        time: this.getDiff()
                    })
                })
            }
        }, T(n, "Locations", i), T(n, "Types", s), n
    }
}