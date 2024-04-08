function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        default: function() {
            return o
        }
    });
    var l = i("735250");
    i("470079");
    var r = i("481060"),
        a = i("55178"),
        n = i("689938"),
        s = i("626707");

    function o() {
        return (0, l.jsx)(r.Tooltip, {
            text: n.default.Messages.SUPPRESS_NOTIFICATIONS_TOOLTIP,
            children: t => (0, l.jsx)("div", {
                className: s.badge,
                ...t,
                children: (0, l.jsx)(a.default, {
                    width: "1rem",
                    height: "1rem"
                })
            })
        })
    }
}