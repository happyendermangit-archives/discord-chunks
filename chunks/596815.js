function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        HubIcon: function() {
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
                d: "M13 7.83a3 3 0 1 0-2 0V11H8a4 4 0 0 0-4 4v1.17a3 3 0 1 0 2 0V15c0-1.1.9-2 2-2h3v3.17a3 3 0 1 0 2 0V13h3a2 2 0 0 1 2 2v1.17a3 3 0 1 0 2 0V15a4 4 0 0 0-4-4h-3V7.83Z",
                className: o
            })
        })
    }
}