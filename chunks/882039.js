function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        VoiceNormalIcon: function() {
            return l
        }
    });
    var i = n("37983");
    n("884691");
    var s = n("669491"),
        r = n("82169");
    let l = e => {
        let {
            width: t = 24,
            height: n = 24,
            color: l = s.default.colors.INTERACTIVE_NORMAL,
            colorClass: o = "",
            ...a
        } = e;
        return (0, i.jsxs)("svg", {
            ...(0, r.default)(a),
            xmlns: "http://www.w3.org/2000/svg",
            width: t,
            height: n,
            fill: "none",
            viewBox: "0 0 24 24",
            children: [(0, i.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.1 20.75c-.58.14-1.1-.33-1.1-.92v-.03c0-.5.37-.92.85-1.05a7 7 0 0 0 0-13.5A1.11 1.11 0 0 1 14 4.2v-.03c0-.6.52-1.06 1.1-.92a9 9 0 0 1 0 17.5Z",
                className: o
            }), (0, i.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                d: "M15.16 16.51c-.57.28-1.16-.2-1.16-.83v-.14c0-.43.28-.8.63-1.02a3 3 0 0 0 0-5.04c-.35-.23-.63-.6-.63-1.02v-.14c0-.63.59-1.1 1.16-.83a5 5 0 0 1 0 9.02Z",
                className: o
            })]
        })
    }
}