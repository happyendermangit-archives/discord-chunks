function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        },
        getEventSchedule: function() {
            return c
        }
    });
    var r = n("512722"),
        o = n.n(r),
        i = n("898511"),
        a = n("89536"),
        u = n("592741"),
        s = n("888447");

    function l(e, t, n) {
        var r, l = null !== (r = (0, i.useStateFromStores)([a.default], function() {
            return a.default.getGuildScheduledEvent(e)
        })) && void 0 !== r ? r : n;
        return o()(null != l, "Event must be defined"), t = null != t ? t : (0, s.getNextRecurrenceIdInEvent)(l), f(l, (0, u.default)(t, e), t)
    }

    function c(e, t) {
        var n = (0, u.getEventException)(t, e.id);
        return f(e, n, t)
    }

    function f(e, t, n) {
        if (null == e.recurrence_rule || null == n) return {
            startTime: new Date(e.scheduled_start_time),
            endTime: null != e.scheduled_end_time ? new Date(e.scheduled_end_time) : null
        };
        var r = (0, s.getBaseScheduleForRecurrence)(n, e),
            o = (0, s.getScheduleForRecurrenceWithException)(r, t),
            i = o.startDate,
            a = o.endDate;
        return {
            startTime: i.toDate(),
            endTime: null == a ? void 0 : a.toDate()
        }
    }
}