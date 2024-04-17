function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        convertPrimeTimeSelectionToRRule: function() {
            return O
        },
        formatTimesForServer: function() {
            return N
        },
        generateTimeOptions: function() {
            return _
        },
        getDayOptions: function() {
            return c
        },
        getTimeRangesInNextWeek: function() {
            return m
        },
        guildEventToPrimeTimeSelection: function() {
            return R
        },
        primetimeToString: function() {
            return p
        }
    }), n("653041"), n("47120");
    var i = n("913527"),
        r = n.n(i),
        s = n("859334"),
        a = n("854698"),
        o = n("563040"),
        l = n("227120"),
        u = n("308083"),
        d = n("689938");
    let _ = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30,
                t = [{
                    label: d.default.Messages.CLAN_PRIMETIME_MORNING,
                    value: l.ExtendedTimeOptions.MORNING
                }, {
                    label: d.default.Messages.CLAN_PRIMETIME_AFTERNOON,
                    value: l.ExtendedTimeOptions.AFTERNOON
                }, {
                    label: d.default.Messages.CLAN_PRIMETIME_EVENING,
                    value: l.ExtendedTimeOptions.EVENING
                }, {
                    label: d.default.Messages.CLAN_PRIMETIME_LATE_NIGHT,
                    value: l.ExtendedTimeOptions.LATE_NIGHT
                }],
                n = r()(u.ARBITRARY_MIDNIGHT),
                i = r()(n).add(1, "day"),
                s = r()(n);
            for (; s < i;) {
                let n = (0, o.timeAtSpecificDay)(u.ARBITRARY_MIDNIGHT, s.clone()).format(u.LOCALE_TIME_FORMAT);
                t.push({
                    label: n,
                    value: n
                }), s.add(e, "minutes")
            }
            return t
        },
        c = () => [{
            value: l.DayOptions.WEEKDAYS,
            label: d.default.Messages.CLAN_PRIMETIME_WEEKDAYS
        }, {
            value: l.DayOptions.WEEKENDS,
            label: d.default.Messages.CLAN_PRIMETIME_WEEKENDS
        }, {
            value: l.DayOptions.SUNDAY,
            label: d.default.Messages.CLAN_PRIMETIME_SUNDAY
        }, {
            value: l.DayOptions.MONDAY,
            label: d.default.Messages.CLAN_PRIMETIME_MONDAY
        }, {
            value: l.DayOptions.TUESDAY,
            label: d.default.Messages.CLAN_PRIMETIME_TUESDAY
        }, {
            value: l.DayOptions.WEDNESDAY,
            label: d.default.Messages.CLAN_PRIMETIME_WEDNESDAY
        }, {
            value: l.DayOptions.THURSDAY,
            label: d.default.Messages.CLAN_PRIMETIME_THURSDAY
        }, {
            value: l.DayOptions.FRIDAY,
            label: d.default.Messages.CLAN_PRIMETIME_FRIDAY
        }, {
            value: l.DayOptions.SATURDAY,
            label: d.default.Messages.CLAN_PRIMETIME_SATURDAY
        }],
        E = e => {
            switch (e) {
                case l.DayOptions.WEEKDAYS:
                    return 1;
                case l.DayOptions.WEEKENDS:
                    return 6;
                case l.DayOptions.SUNDAY:
                    return 0;
                case l.DayOptions.MONDAY:
                    return 1;
                case l.DayOptions.TUESDAY:
                    return 2;
                case l.DayOptions.WEDNESDAY:
                    return 3;
                case l.DayOptions.THURSDAY:
                    return 4;
                case l.DayOptions.FRIDAY:
                    return 5;
                case l.DayOptions.SATURDAY:
                    return 6
            }
        },
        I = e => {
            switch (e) {
                case l.DayOptions.WEEKDAYS:
                    return d.default.Messages.CLAN_PRIMETIME_WEEKDAYS;
                case l.DayOptions.WEEKENDS:
                    return d.default.Messages.CLAN_PRIMETIME_WEEKENDS;
                case l.DayOptions.SUNDAY:
                    return d.default.Messages.CLAN_PRIMETIME_SUNDAY;
                case l.DayOptions.MONDAY:
                    return d.default.Messages.CLAN_PRIMETIME_MONDAY;
                case l.DayOptions.TUESDAY:
                    return d.default.Messages.CLAN_PRIMETIME_TUESDAY;
                case l.DayOptions.WEDNESDAY:
                    return d.default.Messages.CLAN_PRIMETIME_WEDNESDAY;
                case l.DayOptions.THURSDAY:
                    return d.default.Messages.CLAN_PRIMETIME_THURSDAY;
                case l.DayOptions.FRIDAY:
                    return d.default.Messages.CLAN_PRIMETIME_FRIDAY;
                case l.DayOptions.SATURDAY:
                    return d.default.Messages.CLAN_PRIMETIME_SATURDAY;
                default:
                    return null
            }
        },
        T = e => {
            switch (e) {
                case s.RRule.SU.weekday:
                    return l.DayOptions.SUNDAY;
                case s.RRule.MO.weekday:
                    return l.DayOptions.MONDAY;
                case s.RRule.TU.weekday:
                    return l.DayOptions.TUESDAY;
                case s.RRule.WE.weekday:
                    return l.DayOptions.WEDNESDAY;
                case s.RRule.TH.weekday:
                    return l.DayOptions.THURSDAY;
                case s.RRule.FR.weekday:
                    return l.DayOptions.FRIDAY;
                case s.RRule.SA.weekday:
                    return l.DayOptions.SATURDAY
            }
        },
        f = e => {
            switch (e) {
                case l.ExtendedTimeOptions.MORNING:
                    return d.default.Messages.CLAN_PRIMETIME_RECURRING_MORNING;
                case l.ExtendedTimeOptions.AFTERNOON:
                    return d.default.Messages.CLAN_PRIMETIME_RECURRING_AFTERNOON;
                case l.ExtendedTimeOptions.EVENING:
                    return d.default.Messages.CLAN_PRIMETIME_RECURRING_EVENING;
                case l.ExtendedTimeOptions.LATE_NIGHT:
                    return d.default.Messages.CLAN_PRIMETIME_RECURRING_LATE_NIGHT;
                default:
                    return null
            }
        },
        S = (e, t) => {
            let n;
            switch (e) {
                case l.DayOptions.WEEKDAYS:
                    n = d.default.Messages.CLAN_PRIMETIME_RECURRING_WEEKDAY;
                    break;
                case l.DayOptions.WEEKENDS:
                    n = d.default.Messages.CLAN_PRIMETIME_RECURRING_WEEKEND;
                    break;
                default:
                    n = I(e)
            }
            return d.default.Messages.CLAN_PRIMETIME_FORMATTED_RECURRING_TIME.format({
                day: n,
                time: t
            })
        },
        h = e => {
            let t = r()().startOf("day");
            switch (e) {
                case l.ExtendedTimeOptions.MORNING:
                    return [t.hour(8), 4];
                case l.ExtendedTimeOptions.AFTERNOON:
                    return [t.hour(12), 6];
                case l.ExtendedTimeOptions.EVENING:
                    return [t.hour(18), 5];
                case l.ExtendedTimeOptions.LATE_NIGHT:
                    return [t.hour(23), 5];
                default:
                    return [r()(e, u.LOCALE_TIME_FORMAT), 2]
            }
        },
        A = e => {
            if (null == e.day || null == e.time) return null;
            let t = r()(),
                n = t.clone().add(1, "day"),
                i = t.day() >= 1 && 5 >= t.day(),
                s = n.day() >= 1 && 5 >= n.day(),
                a = e.time.clone(),
                o = t.clone();
            return e.day === l.DayOptions.WEEKDAYS ? o = i ? t.isAfter(a) ? s ? a.day(n.weekday()) : a.day(1) : a.day(t.weekday()) : e.time.day(1) : e.day === l.DayOptions.WEEKENDS ? i ? o = a.day(6) : t.isAfter(a) && (o = s ? a.day(6) : a.day(n.weekday())) : o = a.day(E(e.day)), t.isAfter(o) && (o = o.add(1, "week")), o
        };

    function m(e) {
        let t = [];
        return e.forEach(e => {
            if (null == e.day || null == e.time) return null;
            let [n, i] = h(e.time), r = A({
                day: e.day,
                time: n
            });
            null != r && t.push({
                start: r,
                end: r.clone().add(i, "hour")
            })
        }), t
    }

    function N(e) {
        let t = [];
        return e.forEach(e => {
            if (null == e.day || null == e.time) return null;
            let [n, i] = h(e.time);
            if (e.day === l.DayOptions.WEEKENDS) {
                let r = A({
                    day: e.day,
                    time: n
                });
                null != r && t.push({
                    scheduled_start_time: r.toISOString(),
                    scheduled_end_time: r.clone().add(i, "hour").toISOString(),
                    days: (0, a.getValidWeekends)(r)
                })
            } else if (e.day === l.DayOptions.WEEKDAYS) {
                let r = A({
                    day: e.day,
                    time: n
                });
                null != r && t.push({
                    scheduled_start_time: r.toISOString(),
                    scheduled_end_time: r.clone().add(i, "hour").toISOString(),
                    days: (0, a.getValidWeekdays)(r)
                })
            } else {
                let r = A({
                    day: e.day,
                    time: n
                });
                null != r && t.push({
                    scheduled_start_time: r.toISOString(),
                    scheduled_end_time: r.clone().add(i, "hour").toISOString(),
                    days: [(0, a.convertJSDayToRRuleDay)(r.toDate().getUTCDay()).weekday]
                })
            }
        }), t
    }

    function p(e) {
        if (null == e.day || null == e.time) return null;
        let {
            day: t,
            time: n
        } = e, i = f(n);
        if (null != i) return S(t, i);
        let r = I(e.day);
        return "".concat(r, " ").concat(n)
    }

    function O(e) {
        return N(e).map(e => ({
            start: e.scheduled_start_time,
            frequency: e.days.length > 1 ? s.RRule.DAILY : s.RRule.WEEKLY,
            interval: 1,
            byWeekday: e.days
        }))
    }

    function R(e) {
        let t, n, {
                id: i,
                scheduled_start_time: a,
                scheduled_end_time: o,
                recurrence_rule: d
            } = e,
            _ = r()(a),
            c = r()(o),
            E = r().duration(c.diff(_)).asHours();
        if (null == d) return {
            id: i,
            day: void 0,
            time: void 0
        };
        let {
            frequency: I,
            by_weekday: f
        } = d;
        I === s.RRule.DAILY ? (null == f ? void 0 : f.length) === 5 ? t = l.DayOptions.WEEKDAYS : (null == f ? void 0 : f.length) === 2 && (t = l.DayOptions.WEEKENDS) : I === s.RRule.WEEKLY && (null == f ? void 0 : f.length) === 1 && (t = T(f[0]));
        return 2 === E ? n = _.format(u.LOCALE_TIME_FORMAT) : 8 === _.hour() && 4 === E ? n = l.ExtendedTimeOptions.MORNING : 12 === _.hour() && 6 === E ? n = l.ExtendedTimeOptions.AFTERNOON : 18 === _.hour() && 5 === E ? n = l.ExtendedTimeOptions.EVENING : 23 === _.hour() && 5 === E && (n = l.ExtendedTimeOptions.LATE_NIGHT), {
            id: i,
            day: t,
            time: n
        }
    }
}