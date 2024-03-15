function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("37983");
    n("884691");
    var s = n("669491"),
        r = n("956089"),
        a = n("782340");

    function o(e) {
        let {
            className: t,
            color: n = s.default.unsafe_rawColors.BRAND_500.css,
            ...o
        } = e;
        return (0, i.jsx)(r.TextBadge, {
            ...o,
            text: a.default.Messages.BETA,
            color: n,
            className: t
        })
    }
}