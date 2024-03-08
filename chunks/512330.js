function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        TimeUnits: function() {
            return l
        },
        getTimeAndUnit: function() {
            return S
        },
        default: function() {
            return C
        }
    }), n("70102"), n("700225"), n("222007");
    var i, l, a, s, r, o, u = n("37983"),
        d = n("884691"),
        c = n("917351"),
        f = n.n(c),
        p = n("862337"),
        m = n("782340");
    (s = i || (i = {})).ACTIVITY_FEED = "ACTIVITY_FEED", s.ACTIVITY_FEED_NEW = "ACTIVITY_FEED_NEW", s.USER_ACTIVITY = "USER_ACTIVITY", s.GAME_LIBRARY_TIME_PLAYED = "GAME_LIBRARY_TIME_PLAYED", s.GAME_LIBRARY_LAST_PLAYED = "GAME_LIBRARY_LAST_PLAYED", (r = l || (l = {})).NONE = "NONE", r.SECONDS = "SECONDS", r.MINUTES = "MINUTES", r.HOURS = "HOURS", r.DAYS = "DAYS", r.WEEKS = "WEEKS", r.MONTHS = "MONTHS", r.YEARS = "YEARS", (o = a || (a = {})).START = "START", o.END = "END", o.TIME = "TIME";
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
        x = [{
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
        E = e => (t, n) => null == n ? "" : e().format({
            time: t,
            ...n
        }),
        y = {
            ACTIVITY_FEED: {
                START: {
                    SECONDS: () => m.default.Messages.GAME_FEED_USER_PLAYING_JUST_STARTED,
                    MINUTES: e => m.default.Messages.GAME_FEED_USER_PLAYING_FOR_MINUTES.format({
                        time: e
                    }),
                    HOURS: e => m.default.Messages.GAME_FEED_USER_PLAYING_FOR_HOURS.format({
                        time: e
                    }),
                    DAYS: e => m.default.Messages.GAME_FEED_USER_PLAYING_FOR_DAYS.format({
                        time: e
                    })
                },
                END: {
                    SECONDS: () => m.default.Messages.GAME_FEED_USER_PLAYING_JUST_ENDED,
                    MINUTES: e => m.default.Messages.GAME_FEED_USER_PLAYED_MINUTES_AGO.format({
                        time: e
                    }),
                    HOURS: e => m.default.Messages.GAME_FEED_USER_PLAYED_HOURS_AGO.format({
                        time: e
                    }),
                    DAYS: e => m.default.Messages.GAME_FEED_USER_PLAYED_DAYS_AGO.format({
                        time: e
                    }),
                    WEEKS: e => m.default.Messages.GAME_FEED_USER_PLAYED_WEEKS_AGO.format({
                        time: e
                    }),
                    MONTHS: e => m.default.Messages.GAME_FEED_USER_PLAYED_MONTHS_AGO.format({
                        time: e
                    }),
                    YEARS: e => m.default.Messages.GAME_FEED_USER_PLAYED_YEARS_AGO.format({
                        time: e
                    })
                }
            },
            ACTIVITY_FEED_NEW: {
                START: {
                    SECONDS: E(() => m.default.Messages.ACTIVITY_FEED_USER_PLAYING_JUST_STARTED),
                    MINUTES: E(() => m.default.Messages.ACTIVITY_FEED_USER_PLAYING_FOR_MINUTES),
                    HOURS: E(() => m.default.Messages.ACTIVITY_FEED_USER_PLAYING_FOR_HOURS),
                    DAYS: E(() => m.default.Messages.ACTIVITY_FEED_USER_PLAYING_FOR_DAYS)
                },
                END: {
                    SECONDS: e => m.default.Messages.DURATION_SECONDS_AGO.format({
                        seconds: e
                    }),
                    MINUTES: e => m.default.Messages.DURATION_MINUTES_AGO.format({
                        minutes: e
                    }),
                    HOURS: e => m.default.Messages.DURATION_HOURS_AGO.format({
                        hours: e
                    }),
                    DAYS: e => m.default.Messages.DURATION_DAYS_AGO.format({
                        days: e
                    })
                }
            },
            USER_ACTIVITY: {
                START: {
                    SECONDS: () => m.default.Messages.GAME_FEED_USER_PLAYING_JUST_STARTED,
                    MINUTES: function(e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return n ? m.default.Messages.GAME_FEED_USER_PLAYING_FOR_MINUTES.format({
                            time: e
                        }) : m.default.Messages.USER_ACTIVITY_USER_PLAYING_FOR_MINUTES.format({
                            time: e
                        })
                    },
                    HOURS: function(e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return n ? m.default.Messages.GAME_FEED_USER_PLAYING_FOR_HOURS.format({
                            time: e
                        }) : m.default.Messages.USER_ACTIVITY_USER_PLAYING_FOR_HOURS.format({
                            time: e
                        })
                    },
                    DAYS: function(e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return n ? m.default.Messages.GAME_FEED_USER_PLAYING_FOR_DAYS.format({
                            time: e
                        }) : m.default.Messages.USER_ACTIVITY_USER_PLAYING_FOR_DAYS.format({
                            time: e
                        })
                    }
                }
            },
            GAME_LIBRARY_TIME_PLAYED: {
                TIME: {
                    NONE: () => m.default.Messages.GAME_LIBRARY_TIME_PLAYED_NONE,
                    SECONDS: e => m.default.Messages.GAME_LIBRARY_TIME_PLAYED_SECONDS.format({
                        time: e
                    }),
                    MINUTES: e => m.default.Messages.GAME_LIBRARY_TIME_PLAYED_MINUTES.format({
                        time: e
                    }),
                    HOURS: e => m.default.Messages.GAME_LIBRARY_TIME_PLAYED_HOURS.format({
                        time: e
                    })
                }
            },
            GAME_LIBRARY_LAST_PLAYED: {
                END: {
                    NONE: () => m.default.Messages.GAME_LIBRARY_LAST_PLAYED_NONE,
                    SECONDS: () => m.default.Messages.GAME_LIBRARY_LAST_PLAYED_JUST_NOW,
                    MINUTES: e => m.default.Messages.GAME_LIBRARY_LAST_PLAYED_MINUTES.format({
                        time: e
                    }),
                    HOURS: e => m.default.Messages.GAME_LIBRARY_LAST_PLAYED_HOURS.format({
                        time: e
                    }),
                    DAYS: e => m.default.Messages.GAME_LIBRARY_LAST_PLAYED_DAYS.format({
                        time: e
                    }),
                    WEEKS: e => m.default.Messages.GAME_LIBRARY_LAST_PLAYED_WEEKS.format({
                        time: e
                    }),
                    MONTHS: e => m.default.Messages.GAME_LIBRARY_LAST_PLAYED_MONTHS.format({
                        time: e
                    }),
                    YEARS: e => m.default.Messages.GAME_LIBRARY_LAST_PLAYED_YEARS.format({
                        time: e
                    })
                }
            }
        };

    function g(e, t) {
        let n = x.findIndex(t => {
                let {
                    max: n,
                    unit: i
                } = t;
                return "NONE" === i && e === n || e < n
            }),
            i = f.findLast(x, e => {
                let {
                    unit: n
                } = e;
                return t(n)
            }, n);
        if (null != i) return i.unit;
        let l = x.find(e => {
            let {
                unit: n
            } = e;
            return t(n)
        });
        return null != l ? l.unit : null
    }

    function S(e, t) {
        let n = null != e ? g(e, e => t.includes(e)) : "NONE",
            i = null != n ? h[n] : null;
        return {
            unit: n,
            time: null != e && null != i ? Math.floor(i(e)) : null
        }
    }

    function C(e) {
        var t;
        return (t = class extends d.PureComponent {
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
                    l = 0;
                return null != e ? l = i - e : null != t && (l = i - t), Math.abs(l) / 1e3 / 60
            }
            getTimeUnit(e, t, n) {
                let i = g(e, e => (function(e, t, n) {
                    let i = y[n];
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
                return h[e](t)
            }
            render() {
                let {
                    location: t,
                    messageProps: n,
                    isApplicationStreaming: i,
                    ...l
                } = this.props, {
                    time: a
                } = this.state, s = this.getType();
                if (null == s) return null;
                let r = this.getTimeUnit(a, t, s),
                    o = y[t][s];
                if (null == o) return null;
                let d = o[r],
                    c = Math.floor(this.transformTime(r, a));
                return (0, u.jsx)(e, {
                    ...l,
                    children: null == d ? void 0 : d(c, n, i)
                })
            }
            constructor(...e) {
                super(...e), this.timer = new p.Interval, this.state = {
                    time: this.getDiff()
                }, this.update = () => {
                    this.setState({
                        time: this.getDiff()
                    })
                }
            }
        }).Locations = i, t.Types = a, t
    }
}