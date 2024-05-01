function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BookCheckIcon: function() {
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
                d: "M15 2a3 3 0 0 1 3 3v12H5.5a1.5 1.5 0 0 0 0 3h14a.5.5 0 0 0 .5-.5V5h1a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h10Zm-.3 5.7a1 1 0 0 0-1.4-1.4L9 10.58l-2.3-2.3a1 1 0 0 0-1.4 1.42l3 3a1 1 0 0 0 1.4 0l5-5Z",
                clipRule: "evenodd",
                className: o
            })
        })
    }
}