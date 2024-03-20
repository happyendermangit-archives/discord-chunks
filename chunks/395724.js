function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var s = n("866227"),
        a = n.n(s),
        l = n("599110"),
        r = n("49111");

    function i(e, t) {
        l.default.track(r.AnalyticEvents.AGE_GATE_SUBMITTED, {
            dob: 18 > a().diff(e, "years") ? e.format("YYYY-MM-DD") : null,
            dob_day: e.date(),
            dob_month: e.month() + 1,
            dob_year: e.year(),
            source: {
                section: t
            }
        })
    }
}