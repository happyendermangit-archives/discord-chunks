function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        s = n("55178"),
        a = n("689938"),
        o = n("3025");

    function l() {
        return (0, i.jsx)(r.Tooltip, {
            text: a.default.Messages.SUPPRESS_NOTIFICATIONS_TOOLTIP,
            children: e => (0, i.jsx)("div", {
                className: o.badge,
                ...e,
                children: (0, i.jsx)(s.default, {
                    width: "1rem",
                    height: "1rem"
                })
            })
        })
    }
}