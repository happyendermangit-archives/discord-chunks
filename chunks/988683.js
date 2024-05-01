function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        StarOutlineIcon: function() {
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
        return (0, i.jsx)("svg", {
            ...(0, a.default)(l),
            xmlns: "http://www.w3.org/2000/svg",
            width: t,
            height: n,
            fill: "none",
            viewBox: "0 0 24 24",
            children: (0, i.jsx)("path", {
                fill: "string" == typeof s ? s : s.css,
                fillRule: "evenodd",
                d: "M2.07 10.94a1.25 1.25 0 0 1 .73-2.25h6.12l1.9-5.83c.37-1.15 2-1.15 2.37 0l1.89 5.83h6.12c1.2 0 1.71 1.54.73 2.25l-4.95 3.6 1.9 5.82a1.25 1.25 0 0 1-1.93 1.4L12 18.16l-4.95 3.6c-.98.7-2.3-.25-1.92-1.4l1.89-5.82-4.95-3.6Zm11.55-.25h5.26l-4.25 3.09 1.62 5-4.25-3.1-4.25 3.1 1.62-5-4.25-3.1h5.26l1.62-5 1.62 5Z",
                clipRule: "evenodd",
                className: o
            })
        })
    }
}