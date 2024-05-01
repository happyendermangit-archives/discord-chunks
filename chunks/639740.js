function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("960259"),
        a = n("359653"),
        s = n("325767");
    t.default = (0, r.replaceIcon)(function(e) {
        let {
            width: t = 10,
            height: n = 10,
            color: r = "currentColor",
            ...a
        } = e;
        return (0, i.jsx)("svg", {
            ...(0, s.default)(a),
            width: t,
            height: n,
            viewBox: "0 0 10 10",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, i.jsx)("path", {
                d: "M4.16667 8.33333V5.83333H5.83333V8.33333H7.91667V5H9.16667L5 1.25L0.833333 5H2.08333V8.33333H4.16667Z",
                fill: r
            })
        })
    }, e => {
        let {
            width: t = 10,
            height: n = 10,
            ...r
        } = e;
        return (0, i.jsx)(a.HomeIcon, {
            width: t,
            height: n,
            ...r
        })
    }, void 0, {
        size: 10
    })
}