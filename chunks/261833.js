function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        StarOutlineIcon: function() {
            return i
        }
    });
    var r = s("37983");
    s("884691");
    var n = s("669491"),
        l = s("82169");
    let i = e => {
        let {
            width: t = 24,
            height: s = 24,
            color: i = n.default.colors.INTERACTIVE_NORMAL,
            colorClass: a = "",
            ...o
        } = e;
        return (0, r.jsx)("svg", {
            ...(0, l.default)(o),
            xmlns: "http://www.w3.org/2000/svg",
            width: t,
            height: s,
            fill: "none",
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
                fill: "string" == typeof i ? i : i.css,
                fillRule: "evenodd",
                d: "M2.07 10.94a1.25 1.25 0 0 1 .73-2.25h6.12l1.9-5.83c.37-1.15 2-1.15 2.37 0l1.89 5.83h6.12c1.2 0 1.71 1.54.73 2.25l-4.95 3.6 1.9 5.82a1.25 1.25 0 0 1-1.93 1.4L12 18.16l-4.95 3.6c-.98.7-2.3-.25-1.92-1.4l1.89-5.82-4.95-3.6Zm11.55-.25h5.26l-4.25 3.09 1.62 5-4.25-3.1-4.25 3.1 1.62-5-4.25-3.1h5.26l1.62-5 1.62 5Z",
                clipRule: "evenodd",
                className: a
            })
        })
    }
}