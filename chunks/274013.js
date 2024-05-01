function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        VideoLockIcon: function() {
            return s
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("692547"),
        a = n("331595");
    let s = e => {
        let {
            width: t = 24,
            height: n = 24,
            color: s = r.default.colors.INTERACTIVE_NORMAL,
            colorClass: o = "",
            ...l
        } = e;
        return (0, i.jsxs)("svg", {
            ...(0, a.default)(l),
            xmlns: "http://www.w3.org/2000/svg",
            width: t,
            height: n,
            fill: "none",
            viewBox: "0 0 24 24",
            children: [(0, i.jsx)("path", {
                fill: "string" == typeof s ? s : s.css,
                d: "M4 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h8.5a.5.5 0 0 0 .5-.5V19a3 3 0 0 1 1.46-2.58.6.6 0 0 0 .26-.32 4.5 4.5 0 0 1 6.96-2.22c.42.32 1.32.02 1.32-.5V7.62a1 1 0 0 0-1.45-.9l-3 1.5a1 1 0 0 0-.55.9V7a3 3 0 0 0-3-3H4Z",
                className: o
            }), (0, i.jsx)("path", {
                fill: "string" == typeof s ? s : s.css,
                fillRule: "evenodd",
                d: "M16 18h.5v-.5a2.5 2.5 0 0 1 5 0v.5h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1Zm4-.5v.5h-2v-.5a1 1 0 1 1 2 0Z",
                clipRule: "evenodd",
                className: o
            })]
        })
    }
}