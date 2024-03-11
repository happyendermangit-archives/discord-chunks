function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        default: function() {
            return o
        }
    });
    var l = i("37983");
    i("884691");
    var r = i("77078"),
        a = i("188554"),
        n = i("782340"),
        s = i("640054");

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