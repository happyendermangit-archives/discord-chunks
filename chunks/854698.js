function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MAX_DAYS_AHEAD_AN_EVENT_CAN_END: function() {
            return E
        },
        MAX_DAYS_AHEAD_AN_EVENT_CAN_START: function() {
            return c
        },
        MAX_YEARS_AHEAD_RECURRING_EVENT: function() {
            return I
        },
        areDatesIdentical: function() {
            return M
        },
        areSchedulesIdentical: function() {
            return y
        },
        convertJSDayToRRuleDay: function() {
            return C
        },
        generateNextRecurrences: function() {
            return U
        },
        getBaseScheduleForRecurrence: function() {
            return L
        },
        getEventTimeData: function() {
            return R
        },
        getInitialEventStartDate: function() {
            return N
        },
        getNextRecurrenceIdInEvent: function() {
            return b
        },
        getRRule: function() {
            return P
        },
        getRecurrenceOptions: function() {
            return m
        },
        getRecurrenceStatus: function() {
            return F
        },
        getScheduleForRecurrenceWithException: function() {
            return D
        },
        getScheduleFromEventData: function() {
            return v
        },
        getValidWeekdays: function() {
            return w
        },
        hasScheduleChanges: function() {
            return V
        },
        isValidRecurrence: function() {
            return G
        },
        recurrenceOptionToRecurrenceRule: function() {
            return k
        },
        recurrenceRuleToOption: function() {
            return B
        }
    }), n("47120"), n("653041");
    var i = n("392711"),
        r = n("913527"),
        s = n.n(r),
        a = n("859334"),
        o = n("70956"),
        l = n("709054"),
        u = n("849464"),
        d = n("765305"),
        _ = n("689938");
    let c = 365,
        E = 366,
        I = 4,
        T = [a.RRule.MO.weekday, a.RRule.TU.weekday, a.RRule.WE.weekday, a.RRule.TH.weekday, a.RRule.FR.weekday],
        f = [a.RRule.SU.weekday, a.RRule.MO.weekday, a.RRule.TU.weekday, a.RRule.WE.weekday, a.RRule.TH.weekday],
        S = [a.RRule.TU.weekday, a.RRule.WE.weekday, a.RRule.TH.weekday, a.RRule.FR.weekday, a.RRule.SA.weekday],
        h = [a.RRule.SU.weekday, a.RRule.MO.weekday, a.RRule.TU.weekday, a.RRule.WE.weekday, a.RRule.TH.weekday, a.RRule.FR.weekday, a.RRule.SA.weekday],
        A = new Set([0, 6]);

    function m(e) {
        let t = e.toDate(),
            n = Math.ceil(t.getDate() / 7),
            i = e.format("dddd"),
            r = [{
                value: u.RecurrenceOptions.NONE,
                label: _.default.Messages.CREATE_EVENT_RECUR_NONE
            }, {
                value: u.RecurrenceOptions.WEEKLY,
                label: _.default.Messages.CREATE_EVENT_RECUR_WEEKLY.format({
                    weekday: i
                })
            }, {
                value: u.RecurrenceOptions.BIWEEKLY,
                label: _.default.Messages.CREATE_EVENT_RECUR_BIWEEKLY.format({
                    weekday: i
                })
            }, {
                value: u.RecurrenceOptions.MONTHLY,
                label: _.default.Messages.CREATE_EVENT_RECUR_MONTHLY.format({
                    nth: n,
                    weekday: i
                })
            }, {
                value: u.RecurrenceOptions.YEARLY,
                label: _.default.Messages.CREATE_EVENT_RECUR_YEARLY.format({
                    date: t.toLocaleString(_.default.getLocale(), {
                        month: "short",
                        day: "2-digit"
                    })
                })
            }];
        return !A.has(t.getDay()) && r.push({
            value: u.RecurrenceOptions.WEEKDAY_ONLY,
            label: _.default.Messages.CREATE_EVENT_RECUR_WEEKDAYS
        }), r
    }
    let N = () => {
            let e = s()().add(1, "hour"),
                t = e.hour();
            return e.minutes() >= 30 && (t += 1), e.hour(t).minutes(0).seconds(0)
        },
        O = (e, t) => e.format(e.get("years") === t.get("years") ? "ddd MMM Do \xb7 LT" : "ddd MMM Do, YYYY \xb7 LT"),
        p = (e, t) => e.diff(t, "days") > 1 ? O(e, t) : e.calendar(t);

    function R(e, t, n) {
        null == n && (n = s()());
        let i = s()(e),
            r = null != t && "" !== t ? s()(t) : void 0,
            a = null != t && i.isSame(r, "day");
        return {
            startDateTimeString: p(i, n),
            endDateTimeString: null != r ? a ? r.format("LT") : O(r, n) : void 0,
            currentOrPastEvent: i <= n,
            upcomingEvent: i <= s()().add(1, "hour"),
            withinStartWindow: i <= s()().add(15, "minute"),
            diffMinutes: i.diff(n, "minutes")
        }
    }

    function C(e) {
        return new a.Weekday(h[e])
    }

    function g(e, t) {
        let n;
        return null != e && (n = {
            startDate: s()(e),
            endDate: void 0
        }, null != t && (n.endDate = s()(t))), n
    }

    function L(e, t) {
        let n = function(e) {
                return g(e.scheduled_start_time, e.scheduled_end_time)
            }(t),
            i = s()(l.default.extractTimestamp(e)),
            r = (null == n ? void 0 : n.endDate) != null ? i.clone().add(n.endDate.diff(n.startDate)) : void 0;
        return {
            startDate: i,
            endDate: r
        }
    }

    function D(e, t) {
        var n;
        if (null == t) return e;
        let i = null !== (n = t.scheduled_end_time) && void 0 !== n ? n : e.endDate;
        return {
            startDate: null != t.scheduled_start_time ? s()(t.scheduled_start_time) : e.startDate,
            endDate: null != i ? s()(i) : void 0
        }
    }

    function v(e) {
        return g(e.scheduledStartTime, e.scheduledEndTime)
    }

    function M(e, t) {
        return null == e || null == t ? null == e && null == t : e.isSame(t)
    }

    function y(e, t) {
        return null == e || null == t ? null == e && null == t : M(e.startDate, t.startDate) && M(e.endDate, t.endDate)
    }

    function P(e) {
        var t;
        let n = null != e.byWeekday ? [...e.byWeekday] : null,
            i = null === (t = e.byNWeekday) || void 0 === t ? void 0 : t.map(e => new a.Weekday(e.day, e.n)),
            r = new Date(e.start);
        return r.setMilliseconds(0), new a.RRule({
            dtstart: r,
            until: null != e.end ? new Date(e.end) : null,
            freq: e.frequency,
            interval: e.interval,
            byweekday: null != n ? n : i,
            bymonth: null != e.byMonth ? [...e.byMonth] : null,
            bymonthday: null != e.byMonthDay ? [...e.byMonthDay] : null,
            byyearday: null != e.byYearDay ? [...e.byYearDay] : null,
            count: e.count
        })
    }

    function U(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            r = [],
            s = n;
        s.setMilliseconds(0);
        let a = new Date;
        a.setFullYear(a.getFullYear() + I);
        for (let n = 0; n < e && s < a; n++) {
            let e = t.after(s, 0 === n && !i);
            if (null == e) break;
            s = e, r.push(e)
        }
        return r
    }

    function b(e) {
        var t;
        if (null == e) return null;
        let n = null == (t = e).recurrence_rule ? null : new Date(t.scheduled_start_time);
        return null != n ? l.default.fromTimestamp(Math.floor(n.getTime() / o.default.Millis.SECOND) * o.default.Millis.SECOND) : null
    }

    function G(e, t) {
        if (null == t || null == e) return !1;
        let n = new Date(e.start),
            i = new Date(l.default.extractTimestamp(t));
        if (n.getUTCHours() !== i.getUTCHours() || n.getUTCMinutes() !== i.getUTCMinutes() || n.getUTCSeconds() !== i.getUTCSeconds()) return !1;
        switch (e.frequency) {
            case a.RRule.WEEKLY:
                return n.getUTCDay() === i.getUTCDay();
            case a.RRule.YEARLY:
                return n.getUTCDate() === i.getUTCDate();
            default:
                return !0
        }
    }

    function w(e) {
        let t = C(e.toDate().getDay()),
            n = C(e.toDate().getUTCDay());
        return n.weekday - t.weekday > 0 ? S : n.weekday - t.weekday < 0 ? f : T
    }

    function k(e, t) {
        let n = function(e, t) {
            let n = w(t),
                i = C(t.toDate().getUTCDay()),
                r = Math.ceil(t.toDate().getUTCDate() / 7),
                s = t.toDate();
            switch (s.setMilliseconds(0), e) {
                case u.RecurrenceOptions.NONE:
                    return null;
                case u.RecurrenceOptions.WEEKLY:
                    return new a.RRule({
                        dtstart: s,
                        freq: a.RRule.WEEKLY
                    });
                case u.RecurrenceOptions.BIWEEKLY:
                    return new a.RRule({
                        dtstart: s,
                        freq: a.RRule.WEEKLY,
                        interval: 2
                    });
                case u.RecurrenceOptions.MONTHLY:
                    return new a.RRule({
                        dtstart: s,
                        freq: a.RRule.MONTHLY,
                        byweekday: [i.nth(r)]
                    });
                case u.RecurrenceOptions.YEARLY:
                    return new a.RRule({
                        dtstart: s,
                        freq: a.RRule.YEARLY
                    });
                case u.RecurrenceOptions.WEEKDAY_ONLY:
                    return new a.RRule({
                        dtstart: s,
                        freq: a.RRule.DAILY,
                        byweekday: n
                    })
            }
        }(e, t);
        if (null == n) return null;
        let {
            dtstart: i,
            until: r,
            freq: s,
            interval: o,
            byweekday: l,
            bynweekday: d,
            bymonth: _,
            bymonthday: c,
            byyearday: E,
            count: I
        } = n.options, T = null == d ? void 0 : d.map(e => ({
            n: e[1],
            day: e[0]
        }));
        return {
            start: i.toISOString(),
            end: null == r ? void 0 : r.toISOString(),
            frequency: s,
            interval: o,
            byWeekday: l,
            byNWeekday: T,
            byMonth: _,
            byMonthDay: c,
            byYearDay: E,
            count: I
        }
    }

    function B(e, t) {
        if (null == t) return u.RecurrenceOptions.NONE;
        let n = P(t);
        switch (n.options.freq) {
            case a.RRule.WEEKLY:
                if (n.options.interval < 1 || n.options.interval > 2) return u.RecurrenceOptions.NONE;
                return 1 === n.options.interval ? u.RecurrenceOptions.WEEKLY : u.RecurrenceOptions.BIWEEKLY;
            case a.RRule.YEARLY:
                return u.RecurrenceOptions.YEARLY;
            case a.RRule.MONTHLY:
                return u.RecurrenceOptions.MONTHLY;
            case a.RRule.DAILY:
                if (!(0, i.isEqual)(n.options.byweekday, w(e))) return u.RecurrenceOptions.NONE;
                return u.RecurrenceOptions.WEEKDAY_ONLY;
            default:
                return u.RecurrenceOptions.NONE
        }
    }

    function V(e, t) {
        return (null == e ? void 0 : e.scheduled_start_time) !== t.scheduledStartTime || e.scheduled_end_time !== t.scheduledEndTime || !(0, i.isEqual)(e.recurrence_rule, t.recurrenceRule)
    }

    function F(e, t, n) {
        return (null == e ? void 0 : e.is_canceled) ? d.GuildScheduledEventStatus.CANCELED : t < n ? d.GuildScheduledEventStatus.COMPLETED : null != e ? d.GuildScheduledEventStatus.SCHEDULED : null
    }
}