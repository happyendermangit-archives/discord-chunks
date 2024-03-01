function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("669491"),
        a = n("956089"),
        s = n("782340");

    function r(e) {
        let {
            className: t,
            color: n = i.default.unsafe_rawColors.BRAND_500.css,
            ...r
        } = e;
        return (0, l.jsx)(a.TextBadge, {
            ...r,
            text: s.default.Messages.BETA,
            color: n,
            className: t
        })
    }
}