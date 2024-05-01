function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("692547"),
        a = n("26290"),
        s = n("689938");

    function o(e) {
        let {
            className: t,
            color: n = r.default.unsafe_rawColors.BRAND_500.css,
            ...o
        } = e;
        return (0, i.jsx)(a.TextBadge, {
            ...o,
            text: s.default.Messages.BETA,
            color: n,
            className: t
        })
    }
}