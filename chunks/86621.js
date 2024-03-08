function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("37983"),
        l = n("884691"),
        a = n("599110");

    function s(e) {
        var t;
        let n = l.forwardRef((t, n) => (0, i.jsx)(a.AnalyticsContext.Consumer, {
            children: l => (0, i.jsx)(e, {
                ...t,
                ref: n,
                analyticsContext: l
            })
        }));
        return n.displayName = "withAnalyticsContext(".concat(null !== (t = e.displayName) && void 0 !== t ? t : e.name, ")"), n
    }
}