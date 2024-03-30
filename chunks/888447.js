function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MAX_DAYS_AHEAD_AN_EVENT_CAN_END: function() {
            return p
        },
        MAX_DAYS_AHEAD_AN_EVENT_CAN_START: function() {
            return E
        },
        MAX_YEARS_AHEAD_RECURRING_EVENT: function() {
            return m
        },
        areDatesIdentical: function() {
            return D
        },
        areSchedulesIdentical: function() {
            return L
        },
        convertJSDayToRRuleDay: function() {
            return b
        },
        generateNextRecurrences: function() {
            return U
        },
        getBaseScheduleForRecurrence: function() {
            return R
        },
        getEventTimeData: function() {
            return A
        },
        getInitialEventStartDate: function() {
            return v
        },
        getNextRecurrenceIdInEvent: function() {
            return w
        },
        getRRule: function() {
            return M
        },
        getRecurrenceOptions: function() {
            return S
        },
        getRecurrenceStatus: function() {
            return V
        },
        getScheduleForRecurrenceWithException: function() {
            return C
        },
        getScheduleFromEventData: function() {
            return P
        },
        getValidWeekdays: function() {
            return G
        },
        hasScheduleChanges: function() {
            return F
        },
        isValidRecurrence: function() {
            return k
        },
        recurrenceOptionToRecurrenceRule: function() {
            return B
        },
        recurrenceRuleToOption: function() {
            return j
        }
    });
    var r = n("392711"),
        o = n("913527"),
        i = n.n(o),
        a = n("859334"),
        u = n("388990"),
        s = n("523018"),
        l = n("556161"),
        c = n("713653"),
        f = n("941504");

    function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function _(e) {
        return function(e) {
            if (Array.isArray(e)) return d(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return d(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var E = 365,
        p = 366,
        m = 4,
        y = [a.RRule.MO.weekday, a.RRule.TU.weekday, a.RRule.WE.weekday, a.RRule.TH.weekday, a.RRule.FR.weekday],
        I = [a.RRule.SU.weekday, a.RRule.MO.weekday, a.RRule.TU.weekday, a.RRule.WE.weekday, a.RRule.TH.weekday],
        h = [a.RRule.TU.weekday, a.RRule.WE.weekday, a.RRule.TH.weekday, a.RRule.FR.weekday, a.RRule.SA.weekday],
        O = [a.RRule.SU.weekday, a.RRule.MO.weekday, a.RRule.TU.weekday, a.RRule.WE.weekday, a.RRule.TH.weekday, a.RRule.FR.weekday, a.RRule.SA.weekday],
        T = new Set([0, 6]);

    function S(e) {
        var t = e.toDate(),
            n = Math.ceil(t.getDate() / 7),
            r = e.format("dddd"),
            o = [{
                value: l.RecurrenceOptions.NONE,
                label: f.default.Messages.CREATE_EVENT_RECUR_NONE
            }, {
                value: l.RecurrenceOptions.WEEKLY,
                label: f.default.Messages.CREATE_EVENT_RECUR_WEEKLY.format({
                    weekday: r
                })
            }, {
                value: l.RecurrenceOptions.BIWEEKLY,
                label: f.default.Messages.CREATE_EVENT_RECUR_BIWEEKLY.format({
                    weekday: r
                })
            }, {
                value: l.RecurrenceOptions.MONTHLY,
                label: f.default.Messages.CREATE_EVENT_RECUR_MONTHLY.format({
                    nth: n,
                    weekday: r
                })
            }, {
                value: l.RecurrenceOptions.YEARLY,
                label: f.default.Messages.CREATE_EVENT_RECUR_YEARLY.format({
                    date: t.toLocaleString(f.default.getLocale(), {
                        month: "short",
                        day: "2-digit"
                    })
                })
            }];
        return !T.has(t.getDay()) && o.push({
            value: l.RecurrenceOptions.WEEKDAY_ONLY,
            label: f.default.Messages.CREATE_EVENT_RECUR_WEEKDAYS
        }), o
    }
    var v = function() {
            var e = i()().add(1, "hour"),
                t = e.hour();
            return e.minutes() >= 30 && (t += 1), e.hour(t).minutes(0).seconds(0)
        },
        g = function(e, t) {
            return e.format(e.get("years") === t.get("years") ? "ddd MMM Do \xb7 LT" : "ddd MMM Do, YYYY \xb7 LT")
        };

    function A(e, t, n) {
        null == n && (n = i()());
        var r, o, a = i()(e),
            u = null != t && "" !== t ? i()(t) : void 0,
            s = null != t && a.isSame(u, "day");
        return {
            startDateTimeString: (r = a, o = n, r.diff(o, "days") > 1 ? g(r, o) : r.calendar(o)),
            endDateTimeString: null != u ? s ? u.format("LT") : g(u, n) : void 0,
            currentOrPastEvent: a <= n,
            upcomingEvent: a <= i()().add(1, "hour"),
            withinStartWindow: a <= i()().add(15, "minute"),
            diffMinutes: a.diff(n, "minutes")
        }
    }

    function b(e) {
        return new a.Weekday(O[e])
    }

    function N(e, t) {
        var n;
        return null != e && (n = {
            startDate: i()(e),
            endDate: void 0
        }, null != t && (n.endDate = i()(t))), n
    }

    function R(e, t) {
        var n = function(e) {
                return N(e.scheduled_start_time, e.scheduled_end_time)
            }(t),
            r = i()(s.default.extractTimestamp(e)),
            o = (null == n ? void 0 : n.endDate) != null ? r.clone().add(n.endDate.diff(n.startDate)) : void 0;
        return {
            startDate: r,
            endDate: o
        }
    }

    function C(e, t) {
        if (null == t) return e;
        var n, r = null !== (n = t.scheduled_end_time) && void 0 !== n ? n : e.endDate;
        return {
            startDate: null != t.scheduled_start_time ? i()(t.scheduled_start_time) : e.startDate,
            endDate: null != r ? i()(r) : void 0
        }
    }

    function P(e) {
        return N(e.scheduledStartTime, e.scheduledEndTime)
    }

    function D(e, t) {
        return null == e || null == t ? null == e && null == t : e.isSame(t)
    }

    function L(e, t) {
        return null == e || null == t ? null == e && null == t : D(e.startDate, t.startDate) && D(e.endDate, t.endDate)
    }

    function M(e) {
        var t, n = null != e.byWeekday ? _(e.byWeekday) : null,
            r = null === (t = e.byNWeekday) || void 0 === t ? void 0 : t.map(function(e) {
                return new a.Weekday(e.day, e.n)
            }),
            o = new Date(e.start);
        return o.setMilliseconds(0), new a.RRule({
            dtstart: o,
            until: null != e.end ? new Date(e.end) : null,
            freq: e.frequency,
            interval: e.interval,
            byweekday: null != n ? n : r,
            bymonth: null != e.byMonth ? _(e.byMonth) : null,
            bymonthday: null != e.byMonthDay ? _(e.byMonthDay) : null,
            byyearday: null != e.byYearDay ? _(e.byYearDay) : null,
            count: e.count
        })
    }

    function U(e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            o = [],
            i = n;
        i.setMilliseconds(0);
        var a = new Date;
        a.setFullYear(a.getFullYear() + m);
        for (var u = 0; u < e && i < a; u++) {
            var s = t.after(i, 0 === u && !r);
            if (null == s) break;
            i = s, o.push(s)
        }
        return o
    }

    function w(e) {
        if (null == e) return null;
        var t, n = null == (t = e).recurrence_rule ? null : new Date(t.scheduled_start_time);
        return null != n ? s.default.fromTimestamp(Math.floor(n.getTime() / u.default.Millis.SECOND) * u.default.Millis.SECOND) : null
    }

    function k(e, t) {
        if (null == t || null == e) return !1;
        var n = new Date(e.start),
            r = new Date(s.default.extractTimestamp(t));
        if (n.getUTCHours() !== r.getUTCHours() || n.getUTCMinutes() !== r.getUTCMinutes() || n.getUTCSeconds() !== r.getUTCSeconds()) return !1;
        switch (e.frequency) {
            case a.RRule.WEEKLY:
                return n.getUTCDay() === r.getUTCDay();
            case a.RRule.YEARLY:
                return n.getUTCDate() === r.getUTCDate();
            default:
                return !0
        }
    }

    function G(e) {
        var t = b(e.toDate().getDay()),
            n = b(e.toDate().getUTCDay());
        return n.weekday - t.weekday > 0 ? h : n.weekday - t.weekday < 0 ? I : y
    }

    function B(e, t) {
        var n = function(e, t) {
            var n = G(t),
                r = b(t.toDate().getUTCDay()),
                o = Math.ceil(t.toDate().getUTCDate() / 7),
                i = t.toDate();
            switch (i.setMilliseconds(0), e) {
                case l.RecurrenceOptions.NONE:
                    return null;
                case l.RecurrenceOptions.WEEKLY:
                    return new a.RRule({
                        dtstart: i,
                        freq: a.RRule.WEEKLY
                    });
                case l.RecurrenceOptions.BIWEEKLY:
                    return new a.RRule({
                        dtstart: i,
                        freq: a.RRule.WEEKLY,
                        interval: 2
                    });
                case l.RecurrenceOptions.MONTHLY:
                    return new a.RRule({
                        dtstart: i,
                        freq: a.RRule.MONTHLY,
                        byweekday: [r.nth(o)]
                    });
                case l.RecurrenceOptions.YEARLY:
                    return new a.RRule({
                        dtstart: i,
                        freq: a.RRule.YEARLY
                    });
                case l.RecurrenceOptions.WEEKDAY_ONLY:
                    return new a.RRule({
                        dtstart: i,
                        freq: a.RRule.DAILY,
                        byweekday: n
                    })
            }
        }(e, t);
        if (null == n) return null;
        var r = n.options,
            o = r.dtstart,
            i = r.until,
            u = r.freq,
            s = r.interval,
            c = r.byweekday,
            f = r.bynweekday,
            d = r.bymonth,
            _ = r.bymonthday,
            E = r.byyearday,
            p = r.count,
            m = null == f ? void 0 : f.map(function(e) {
                return {
                    n: e[1],
                    day: e[0]
                }
            });
        return {
            start: o.toISOString(),
            end: null == i ? void 0 : i.toISOString(),
            frequency: u,
            interval: s,
            byWeekday: c,
            byNWeekday: m,
            byMonth: d,
            byMonthDay: _,
            byYearDay: E,
            count: p
        }
    }

    function j(e, t) {
        if (null == t) return l.RecurrenceOptions.NONE;
        var n = M(t);
        switch (n.options.freq) {
            case a.RRule.WEEKLY:
                if (n.options.interval < 1 || n.options.interval > 2) return l.RecurrenceOptions.NONE;
                return 1 === n.options.interval ? l.RecurrenceOptions.WEEKLY : l.RecurrenceOptions.BIWEEKLY;
            case a.RRule.YEARLY:
                return l.RecurrenceOptions.YEARLY;
            case a.RRule.MONTHLY:
                return l.RecurrenceOptions.MONTHLY;
            case a.RRule.DAILY:
                if (!(0, r.isEqual)(n.options.byweekday, G(e))) return l.RecurrenceOptions.NONE;
                return l.RecurrenceOptions.WEEKDAY_ONLY;
            default:
                return l.RecurrenceOptions.NONE
        }
    }

    function F(e, t) {
        return (null == e ? void 0 : e.scheduled_start_time) !== t.scheduledStartTime || e.scheduled_end_time !== t.scheduledEndTime || !(0, r.isEqual)(e.recurrence_rule, t.recurrenceRule)
    }

    function V(e, t, n) {
        return (null == e ? void 0 : e.is_canceled) ? c.GuildScheduledEventStatus.CANCELED : t < n ? c.GuildScheduledEventStatus.COMPLETED : null != e ? c.GuildScheduledEventStatus.SCHEDULED : null
    }
}