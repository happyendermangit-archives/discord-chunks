function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MAX_DAYS_AHEAD_AN_EVENT_CAN_END: function() {
            return I
        },
        MAX_DAYS_AHEAD_AN_EVENT_CAN_START: function() {
            return E
        },
        MAX_YEARS_AHEAD_RECURRING_EVENT: function() {
            return T
        },
        areDatesIdentical: function() {
            return b
        },
        areSchedulesIdentical: function() {
            return G
        },
        convertJSDayToRRuleDay: function() {
            return v
        },
        generateNextRecurrences: function() {
            return B
        },
        getBaseScheduleForRecurrence: function() {
            return y
        },
        getEventTimeData: function() {
            return D
        },
        getInitialEventStartDate: function() {
            return C
        },
        getNextRecurrenceIdInEvent: function() {
            return k
        },
        getRRule: function() {
            return w
        },
        getRecurrenceOptions: function() {
            return R
        },
        getRecurrenceStatus: function() {
            return W
        },
        getScheduleForRecurrenceWithException: function() {
            return P
        },
        getScheduleFromEventData: function() {
            return U
        },
        getValidWeekdays: function() {
            return F
        },
        hasScheduleChanges: function() {
            return j
        },
        isValidRecurrence: function() {
            return V
        },
        recurrenceOptionToRecurrenceRule: function() {
            return H
        },
        recurrenceRuleToOption: function() {
            return Y
        }
    }), n("47120"), n("653041");
    var i = n("392711"),
        r = n("913527"),
        s = n.n(r),
        a = n("859334"),
        o = n("594174"),
        l = n("70956"),
        u = n("709054"),
        d = n("849464"),
        _ = n("765305"),
        c = n("689938");
    let E = 365,
        I = 366,
        T = 4,
        f = [a.RRule.MO.weekday, a.RRule.TU.weekday, a.RRule.WE.weekday, a.RRule.TH.weekday, a.RRule.FR.weekday],
        S = [a.RRule.SU.weekday, a.RRule.MO.weekday, a.RRule.TU.weekday, a.RRule.WE.weekday, a.RRule.TH.weekday],
        h = [a.RRule.TU.weekday, a.RRule.WE.weekday, a.RRule.TH.weekday, a.RRule.FR.weekday, a.RRule.SA.weekday],
        A = [a.RRule.SA.weekday, a.RRule.SU.weekday],
        m = [a.RRule.FR.weekday, a.RRule.SA.weekday],
        N = [a.RRule.SU.weekday, a.RRule.MO.weekday],
        O = [a.RRule.SU.weekday, a.RRule.MO.weekday, a.RRule.TU.weekday, a.RRule.WE.weekday, a.RRule.TH.weekday, a.RRule.FR.weekday, a.RRule.SA.weekday],
        p = new Set([0, 6]);

    function R(e) {
        var t;
        let n = e.toDate(),
            i = Math.ceil(n.getDate() / 7),
            r = e.format("dddd"),
            s = [{
                value: d.RecurrenceOptions.NONE,
                label: c.default.Messages.CREATE_EVENT_RECUR_NONE
            }, {
                value: d.RecurrenceOptions.WEEKLY,
                label: c.default.Messages.CREATE_EVENT_RECUR_WEEKLY.format({
                    weekday: r
                })
            }, {
                value: d.RecurrenceOptions.BIWEEKLY,
                label: c.default.Messages.CREATE_EVENT_RECUR_BIWEEKLY.format({
                    weekday: r
                })
            }, {
                value: d.RecurrenceOptions.MONTHLY,
                label: c.default.Messages.CREATE_EVENT_RECUR_MONTHLY.format({
                    nth: i,
                    weekday: r
                })
            }, {
                value: d.RecurrenceOptions.YEARLY,
                label: c.default.Messages.CREATE_EVENT_RECUR_YEARLY.format({
                    date: n.toLocaleString(c.default.getLocale(), {
                        month: "short",
                        day: "2-digit"
                    })
                })
            }];
        return p.has(n.getDay()) ? (null === (t = o.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) && s.push({
            value: d.RecurrenceOptions.WEEKEND_ONLY,
            label: c.default.Messages.CREATE_EVENT_RECUR_WEEKENDS
        }) : s.push({
            value: d.RecurrenceOptions.WEEKDAY_ONLY,
            label: c.default.Messages.CREATE_EVENT_RECUR_WEEKDAYS
        }), s
    }
    let C = () => {
            let e = s()().add(1, "hour"),
                t = e.hour();
            return e.minutes() >= 30 && (t += 1), e.hour(t).minutes(0).seconds(0)
        },
        g = (e, t) => e.format(e.get("years") === t.get("years") ? "ddd MMM Do \xb7 LT" : "ddd MMM Do, YYYY \xb7 LT"),
        L = (e, t) => e.diff(t, "days") > 1 ? g(e, t) : e.calendar(t);

    function D(e, t, n) {
        null == n && (n = s()());
        let i = s()(e),
            r = null != t && "" !== t ? s()(t) : void 0,
            a = null != t && i.isSame(r, "day");
        return {
            startDateTimeString: L(i, n),
            endDateTimeString: null != r ? a ? r.format("LT") : g(r, n) : void 0,
            currentOrPastEvent: i <= n,
            upcomingEvent: i <= s()().add(1, "hour"),
            withinStartWindow: i <= s()().add(15, "minute"),
            diffMinutes: i.diff(n, "minutes")
        }
    }

    function v(e) {
        return new a.Weekday(O[e])
    }

    function M(e, t) {
        let n;
        return null != e && (n = {
            startDate: s()(e),
            endDate: void 0
        }, null != t && (n.endDate = s()(t))), n
    }

    function y(e, t) {
        let n = function(e) {
                return M(e.scheduled_start_time, e.scheduled_end_time)
            }(t),
            i = s()(u.default.extractTimestamp(e)),
            r = (null == n ? void 0 : n.endDate) != null ? i.clone().add(n.endDate.diff(n.startDate)) : void 0;
        return {
            startDate: i,
            endDate: r
        }
    }

    function P(e, t) {
        var n;
        if (null == t) return e;
        let i = null !== (n = t.scheduled_end_time) && void 0 !== n ? n : e.endDate;
        return {
            startDate: null != t.scheduled_start_time ? s()(t.scheduled_start_time) : e.startDate,
            endDate: null != i ? s()(i) : void 0
        }
    }

    function U(e) {
        return M(e.scheduledStartTime, e.scheduledEndTime)
    }

    function b(e, t) {
        return null == e || null == t ? null == e && null == t : e.isSame(t)
    }

    function G(e, t) {
        return null == e || null == t ? null == e && null == t : b(e.startDate, t.startDate) && b(e.endDate, t.endDate)
    }

    function w(e) {
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

    function B(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            r = [],
            s = n;
        s.setMilliseconds(0);
        let a = new Date;
        a.setFullYear(a.getFullYear() + T);
        for (let n = 0; n < e && s < a; n++) {
            let e = t.after(s, 0 === n && !i);
            if (null == e) break;
            s = e, r.push(e)
        }
        return r
    }

    function k(e) {
        var t;
        if (null == e) return null;
        let n = null == (t = e).recurrence_rule ? null : new Date(t.scheduled_start_time);
        return null != n ? u.default.fromTimestamp(Math.floor(n.getTime() / l.default.Millis.SECOND) * l.default.Millis.SECOND) : null
    }

    function V(e, t) {
        if (null == t || null == e) return !1;
        let n = new Date(e.start),
            i = new Date(u.default.extractTimestamp(t));
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

    function F(e) {
        let t = v(e.toDate().getDay()),
            n = v(e.toDate().getUTCDay());
        return n.weekday - t.weekday > 0 ? h : n.weekday - t.weekday < 0 ? S : f
    }

    function x(e) {
        let t = v(e.toDate().getDay()),
            n = v(e.toDate().getUTCDay());
        return n.weekday - t.weekday > 0 ? N : n.weekday - t.weekday < 0 ? m : A
    }

    function H(e, t) {
        let n = function(e, t) {
            let n = F(t),
                i = x(t),
                r = v(t.toDate().getUTCDay()),
                s = Math.ceil(t.toDate().getUTCDate() / 7),
                o = t.toDate();
            switch (o.setMilliseconds(0), e) {
                case d.RecurrenceOptions.NONE:
                    return null;
                case d.RecurrenceOptions.WEEKLY:
                    return new a.RRule({
                        dtstart: o,
                        freq: a.RRule.WEEKLY
                    });
                case d.RecurrenceOptions.BIWEEKLY:
                    return new a.RRule({
                        dtstart: o,
                        freq: a.RRule.WEEKLY,
                        interval: 2
                    });
                case d.RecurrenceOptions.MONTHLY:
                    return new a.RRule({
                        dtstart: o,
                        freq: a.RRule.MONTHLY,
                        byweekday: [r.nth(s)]
                    });
                case d.RecurrenceOptions.YEARLY:
                    return new a.RRule({
                        dtstart: o,
                        freq: a.RRule.YEARLY
                    });
                case d.RecurrenceOptions.WEEKDAY_ONLY:
                    return new a.RRule({
                        dtstart: o,
                        freq: a.RRule.DAILY,
                        byweekday: n
                    });
                case d.RecurrenceOptions.WEEKEND_ONLY:
                    return new a.RRule({
                        dtstart: o,
                        freq: a.RRule.DAILY,
                        byweekday: i
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
            bynweekday: u,
            bymonth: _,
            bymonthday: c,
            byyearday: E,
            count: I
        } = n.options, T = null == u ? void 0 : u.map(e => ({
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

    function Y(e, t) {
        if (null == t) return d.RecurrenceOptions.NONE;
        let n = w(t);
        switch (n.options.freq) {
            case a.RRule.WEEKLY:
                if (n.options.interval < 1 || n.options.interval > 2) return d.RecurrenceOptions.NONE;
                return 1 === n.options.interval ? d.RecurrenceOptions.WEEKLY : d.RecurrenceOptions.BIWEEKLY;
            case a.RRule.YEARLY:
                return d.RecurrenceOptions.YEARLY;
            case a.RRule.MONTHLY:
                return d.RecurrenceOptions.MONTHLY;
            case a.RRule.DAILY:
                if ((0, i.isEqual)(n.options.byweekday, F(e))) return d.RecurrenceOptions.WEEKDAY_ONLY;
                if ((0, i.isEqual)(n.options.byweekday, x(e))) return d.RecurrenceOptions.WEEKEND_ONLY;
                return d.RecurrenceOptions.NONE;
            default:
                return d.RecurrenceOptions.NONE
        }
    }

    function j(e, t) {
        return (null == e ? void 0 : e.scheduled_start_time) !== t.scheduledStartTime || e.scheduled_end_time !== t.scheduledEndTime || !(0, i.isEqual)(e.recurrence_rule, t.recurrenceRule)
    }

    function W(e, t, n) {
        return (null == e ? void 0 : e.is_canceled) ? _.GuildScheduledEventStatus.CANCELED : t < n ? _.GuildScheduledEventStatus.COMPLETED : null != e ? _.GuildScheduledEventStatus.SCHEDULED : null
    }
}