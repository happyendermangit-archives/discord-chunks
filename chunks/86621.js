function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var l = n("37983"),
        i = n("884691"),
        a = n("599110");

    function s(e) {
        var t;
        let n = i.forwardRef((t, n) => (0, l.jsx)(a.AnalyticsContext.Consumer, {
            children: i => (0, l.jsx)(e, {
                ...t,
                ref: n,
                analyticsContext: i
            })
        }));
        return n.displayName = "withAnalyticsContext(".concat(null !== (t = e.displayName) && void 0 !== t ? t : e.name, ")"), n
    }
}