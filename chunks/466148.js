function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        },
        getEventSchedule: function() {
            return o
        }
    });
    var u = n("627445"),
        r = n.n(u),
        l = n("446674"),
        a = n("398604"),
        i = n("397680"),
        d = n("822516");

    function c(e, t, n) {
        var u;
        let c = null !== (u = (0, l.useStateFromStores)([a.default], () => a.default.getGuildScheduledEvent(e))) && void 0 !== u ? u : n;
        r(null != c, "Event must be defined"), t = null != t ? t : (0, d.getNextRecurrenceIdInEvent)(c);
        let o = (0, i.default)(t, e);
        return s(c, o, t)
    }

    function o(e, t) {
        let n = (0, i.getEventException)(t, e.id);
        return s(e, n, t)
    }

    function s(e, t, n) {
        if (null == e.recurrence_rule || null == n) return {
            startTime: new Date(e.scheduled_start_time),
            endTime: null != e.scheduled_end_time ? new Date(e.scheduled_end_time) : null
        };
        let u = (0, d.getBaseScheduleForRecurrence)(n, e),
            {
                startDate: r,
                endDate: l
            } = (0, d.getScheduleForRecurrenceWithException)(u, t);
        return {
            startTime: r.toDate(),
            endTime: null == l ? void 0 : l.toDate()
        }
    }
}