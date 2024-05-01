function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("960259"),
        a = n("422045"),
        s = n("325767");
    t.default = (0, r.replaceIcon)(function(e) {
        let {
            width: t = 24,
            height: n = 24,
            color: r = "currentColor",
            foreground: a,
            ...o
        } = e;
        return (0, i.jsxs)("svg", {
            ...(0, s.default)(o),
            width: t,
            height: n,
            viewBox: "0 0 24 24",
            children: [(0, i.jsx)("path", {
                fill: r,
                className: a,
                d: "M15 3.999V2H9V3.999H3V5.999H21V3.999H15Z"
            }), (0, i.jsx)("path", {
                fill: r,
                className: a,
                d: "M5 6.99902V18.999C5 20.101 5.897 20.999 7 20.999H17C18.103 20.999 19 20.101 19 18.999V6.99902H5ZM11 17H9V11H11V17ZM15 17H13V11H15V17Z"
            })]
        })
    }, a.TrashIcon, void 0, {
        size: 24
    })
}