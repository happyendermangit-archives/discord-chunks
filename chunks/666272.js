function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("960259"),
        a = n("509633"),
        s = n("325767");
    t.default = (0, r.replaceIcon)(function(e) {
        let {
            width: t = 24,
            height: n = 24,
            color: r = "currentColor",
            ...a
        } = e;
        return (0, i.jsx)("svg", {
            width: t,
            height: n,
            ...(0, s.default)(a),
            viewBox: "0 0 24 24",
            children: (0, i.jsx)("path", {
                d: "M16 4.00098C14.406 4.00098 12.93 4.83798 12 6.08098C11.07 4.83798 9.594 4.00098 8 4.00098C5.243 4.00098 3 6.24398 3 9.00098C3 14.492 11.124 19.633 11.471 19.849C11.633 19.95 11.817 20.001 12 20.001C12.183 20.001 12.367 19.95 12.529 19.849C12.876 19.633 21 14.492 21 9.00098C21 6.24398 18.757 4.00098 16 4.00098Z",
                fill: r
            })
        })
    }, a.HeartIcon, void 0, {
        size: 24
    })
}