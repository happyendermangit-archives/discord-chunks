function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        },
        getEventSchedule: function() {
            return d
        }
    });
    var i = n("512722"),
        r = n.n(i),
        a = n("442837"),
        s = n("924301"),
        o = n("894017"),
        l = n("854698");

    function u(e, t, n) {
        var i;
        let u = null !== (i = (0, a.useStateFromStores)([s.default], () => s.default.getGuildScheduledEvent(e))) && void 0 !== i ? i : n;
        return r()(null != u, "Event must be defined"), t = null != t ? t : (0, l.getNextRecurrenceIdInEvent)(u), _(u, (0, o.default)(t, e), t)
    }

    function d(e, t) {
        let n = (0, o.getEventException)(t, e.id);
        return _(e, n, t)
    }

    function _(e, t, n) {
        if (null == e.recurrence_rule || null == n) return {
            startTime: new Date(e.scheduled_start_time),
            endTime: null != e.scheduled_end_time ? new Date(e.scheduled_end_time) : null
        };
        let i = (0, l.getBaseScheduleForRecurrence)(n, e),
            {
                startDate: r,
                endDate: a
            } = (0, l.getScheduleForRecurrenceWithException)(i, t);
        return {
            startTime: r.toDate(),
            endTime: null == a ? void 0 : a.toDate()
        }
    }
}