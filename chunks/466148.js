function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        },
        getEventSchedule: function() {
            return o
        }
    });
    var i = n("627445"),
        l = n.n(i),
        s = n("446674"),
        r = n("398604"),
        a = n("397680"),
        u = n("822516");

    function d(e, t, n) {
        var i;
        let d = null !== (i = (0, s.useStateFromStores)([r.default], () => r.default.getGuildScheduledEvent(e))) && void 0 !== i ? i : n;
        l(null != d, "Event must be defined"), t = null != t ? t : (0, u.getNextRecurrenceIdInEvent)(d);
        let o = (0, a.default)(t, e);
        return c(d, o, t)
    }

    function o(e, t) {
        let n = (0, a.getEventException)(t, e.id);
        return c(e, n, t)
    }

    function c(e, t, n) {
        if (null == e.recurrence_rule || null == n) return {
            startTime: new Date(e.scheduled_start_time),
            endTime: null != e.scheduled_end_time ? new Date(e.scheduled_end_time) : null
        };
        let i = (0, u.getBaseScheduleForRecurrence)(n, e),
            {
                startDate: l,
                endDate: s
            } = (0, u.getScheduleForRecurrenceWithException)(i, t);
        return {
            startTime: l.toDate(),
            endTime: null == s ? void 0 : s.toDate()
        }
    }
}