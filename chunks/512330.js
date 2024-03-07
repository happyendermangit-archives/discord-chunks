function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        TimeUnits: function() {
            return i
        },
        getTimeAndUnit: function() {
            return T
        },
        default: function() {
            return v
        }
    }), n("70102"), n("700225"), n("222007");
    var l, i, a, s, r, o, u = n("37983"),
        d = n("884691"),
        c = n("917351"),
        f = n.n(c),
        m = n("862337"),
        p = n("782340");
    (s = l || (l = {})).ACTIVITY_FEED = "ACTIVITY_FEED", s.ACTIVITY_FEED_NEW = "ACTIVITY_FEED_NEW", s.USER_ACTIVITY = "USER_ACTIVITY", s.GAME_LIBRARY_TIME_PLAYED = "GAME_LIBRARY_TIME_PLAYED", s.GAME_LIBRARY_LAST_PLAYED = "GAME_LIBRARY_LAST_PLAYED", (r = i || (i = {})).NONE = "NONE", r.SECONDS = "SECONDS", r.MINUTES = "MINUTES", r.HOURS = "HOURS", r.DAYS = "DAYS", r.WEEKS = "WEEKS", r.MONTHS = "MONTHS", r.YEARS = "YEARS", (o = a || (a = {})).START = "START", o.END = "END", o.TIME = "TIME";
    let h = {
            NONE: e => 0,
            SECONDS: e => 60 * e,
            MINUTES: e => e,
            HOURS: e => e / 60,
            DAYS: e => e / 60 / 24,
            WEEKS: e => e / 60 / 24 / 7,
            MONTHS: e => e / 60 / 24 / 31,
            YEARS: e => e / 60 / 24 / 365
        },
        E = [{
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
        g = e => (t, n) => null == n ? "" : e().format({
            time: t,
            ...n
        }),
        S = {
            ACTIVITY_FEED: {
                START: {
                    SECONDS: () => p.default.Messages.GAME_FEED_USER_PLAYING_JUST_STARTED,
                    MINUTES: e => p.default.Messages.GAME_FEED_USER_PLAYING_FOR_MINUTES.format({
                        time: e
                    }),
                    HOURS: e => p.default.Messages.GAME_FEED_USER_PLAYING_FOR_HOURS.format({
                        time: e
                    }),
                    DAYS: e => p.default.Messages.GAME_FEED_USER_PLAYING_FOR_DAYS.format({
                        time: e
                    })
                },
                END: {
                    SECONDS: () => p.default.Messages.GAME_FEED_USER_PLAYING_JUST_ENDED,
                    MINUTES: e => p.default.Messages.GAME_FEED_USER_PLAYED_MINUTES_AGO.format({
                        time: e
                    }),
                    HOURS: e => p.default.Messages.GAME_FEED_USER_PLAYED_HOURS_AGO.format({
                        time: e
                    }),
                    DAYS: e => p.default.Messages.GAME_FEED_USER_PLAYED_DAYS_AGO.format({
                        time: e
                    }),
                    WEEKS: e => p.default.Messages.GAME_FEED_USER_PLAYED_WEEKS_AGO.format({
                        time: e
                    }),
                    MONTHS: e => p.default.Messages.GAME_FEED_USER_PLAYED_MONTHS_AGO.format({
                        time: e
                    }),
                    YEARS: e => p.default.Messages.GAME_FEED_USER_PLAYED_YEARS_AGO.format({
                        time: e
                    })
                }
            },
            ACTIVITY_FEED_NEW: {
                START: {
                    SECONDS: g(() => p.default.Messages.ACTIVITY_FEED_USER_PLAYING_JUST_STARTED),
                    MINUTES: g(() => p.default.Messages.ACTIVITY_FEED_USER_PLAYING_FOR_MINUTES),
                    HOURS: g(() => p.default.Messages.ACTIVITY_FEED_USER_PLAYING_FOR_HOURS),
                    DAYS: g(() => p.default.Messages.ACTIVITY_FEED_USER_PLAYING_FOR_DAYS)
                },
                END: {
                    SECONDS: e => p.default.Messages.DURATION_SECONDS_AGO.format({
                        seconds: e
                    }),
                    MINUTES: e => p.default.Messages.DURATION_MINUTES_AGO.format({
                        minutes: e
                    }),
                    HOURS: e => p.default.Messages.DURATION_HOURS_AGO.format({
                        hours: e
                    }),
                    DAYS: e => p.default.Messages.DURATION_DAYS_AGO.format({
                        days: e
                    })
                }
            },
            USER_ACTIVITY: {
                START: {
                    SECONDS: () => p.default.Messages.GAME_FEED_USER_PLAYING_JUST_STARTED,
                    MINUTES: function(e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return n ? p.default.Messages.GAME_FEED_USER_PLAYING_FOR_MINUTES.format({
                            time: e
                        }) : p.default.Messages.USER_ACTIVITY_USER_PLAYING_FOR_MINUTES.format({
                            time: e
                        })
                    },
                    HOURS: function(e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return n ? p.default.Messages.GAME_FEED_USER_PLAYING_FOR_HOURS.format({
                            time: e
                        }) : p.default.Messages.USER_ACTIVITY_USER_PLAYING_FOR_HOURS.format({
                            time: e
                        })
                    },
                    DAYS: function(e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return n ? p.default.Messages.GAME_FEED_USER_PLAYING_FOR_DAYS.format({
                            time: e
                        }) : p.default.Messages.USER_ACTIVITY_USER_PLAYING_FOR_DAYS.format({
                            time: e
                        })
                    }
                }
            },
            GAME_LIBRARY_TIME_PLAYED: {
                TIME: {
                    NONE: () => p.default.Messages.GAME_LIBRARY_TIME_PLAYED_NONE,
                    SECONDS: e => p.default.Messages.GAME_LIBRARY_TIME_PLAYED_SECONDS.format({
                        time: e
                    }),
                    MINUTES: e => p.default.Messages.GAME_LIBRARY_TIME_PLAYED_MINUTES.format({
                        time: e
                    }),
                    HOURS: e => p.default.Messages.GAME_LIBRARY_TIME_PLAYED_HOURS.format({
                        time: e
                    })
                }
            },
            GAME_LIBRARY_LAST_PLAYED: {
                END: {
                    NONE: () => p.default.Messages.GAME_LIBRARY_LAST_PLAYED_NONE,
                    SECONDS: () => p.default.Messages.GAME_LIBRARY_LAST_PLAYED_JUST_NOW,
                    MINUTES: e => p.default.Messages.GAME_LIBRARY_LAST_PLAYED_MINUTES.format({
                        time: e
                    }),
                    HOURS: e => p.default.Messages.GAME_LIBRARY_LAST_PLAYED_HOURS.format({
                        time: e
                    }),
                    DAYS: e => p.default.Messages.GAME_LIBRARY_LAST_PLAYED_DAYS.format({
                        time: e
                    }),
                    WEEKS: e => p.default.Messages.GAME_LIBRARY_LAST_PLAYED_WEEKS.format({
                        time: e
                    }),
                    MONTHS: e => p.default.Messages.GAME_LIBRARY_LAST_PLAYED_MONTHS.format({
                        time: e
                    }),
                    YEARS: e => p.default.Messages.GAME_LIBRARY_LAST_PLAYED_YEARS.format({
                        time: e
                    })
                }
            }
        };

    function C(e, t) {
        let n = E.findIndex(t => {
                let {
                    max: n,
                    unit: l
                } = t;
                return "NONE" === l && e === n || e < n
            }),
            l = f.findLast(E, e => {
                let {
                    unit: n
                } = e;
                return t(n)
            }, n);
        if (null != l) return l.unit;
        let i = E.find(e => {
            let {
                unit: n
            } = e;
            return t(n)
        });
        return null != i ? i.unit : null
    }

    function T(e, t) {
        let n = null != e ? C(e, e => t.includes(e)) : "NONE",
            l = null != n ? h[n] : null;
        return {
            unit: n,
            time: null != e && null != l ? Math.floor(l(e)) : null
        }
    }

    function v(e) {
        var t;
        return (t = class extends d.PureComponent {
            componentDidMount() {
                this.timer.start(1e4, this.update)
            }
            componentDidUpdate(e) {
                let {
                    start: t,
                    end: n,
                    time: l
                } = this.props;
                (e.start !== t || e.end !== n || e.time !== l) && this.update()
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
                let l = Date.now(),
                    i = 0;
                return null != e ? i = l - e : null != t && (i = l - t), Math.abs(i) / 1e3 / 60
            }
            getTimeUnit(e, t, n) {
                let l = C(e, e => (function(e, t, n) {
                    let l = S[n];
                    if (null != l) {
                        let n = l[t];
                        if (null != n) return null != n[e]
                    }
                    return !1
                })(e, n, t));
                if (null == l) throw Error("Could not get the time unit in PlayTime with time: ".concat(e, " for type: ").concat(n, " in location: ").concat(t));
                return l
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
                return h[e](t)
            }
            render() {
                let {
                    location: t,
                    messageProps: n,
                    isApplicationStreaming: l,
                    ...i
                } = this.props, {
                    time: a
                } = this.state, s = this.getType();
                if (null == s) return null;
                let r = this.getTimeUnit(a, t, s),
                    o = S[t][s];
                if (null == o) return null;
                let d = o[r],
                    c = Math.floor(this.transformTime(r, a));
                return (0, u.jsx)(e, {
                    ...i,
                    children: null == d ? void 0 : d(c, n, l)
                })
            }
            constructor(...e) {
                super(...e), this.timer = new m.Interval, this.state = {
                    time: this.getDiff()
                }, this.update = () => {
                    this.setState({
                        time: this.getDiff()
                    })
                }
            }
        }).Locations = l, t.Types = a, t
    }
}