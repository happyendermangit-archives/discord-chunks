function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("731994"),
        o = n("294575");
    t.default = function(e) {
        let {
            icons: t,
            className: n
        } = e;
        return (0, i.jsxs)("div", {
            className: s()(o.icons, n),
            children: [(0, i.jsx)("div", {
                className: o.wrapOne,
                children: (0, i.jsx)("div", {
                    className: s()(o.icon, o.one, a.FileUploadIconClassNames[t[0]])
                })
            }), (0, i.jsx)("div", {
                className: o.wrapThree,
                children: (0, i.jsx)("div", {
                    className: s()(o.icon, o.three, a.FileUploadIconClassNames[t[2]])
                })
            }), (0, i.jsx)("div", {
                className: o.wrapTwo,
                children: (0, i.jsx)("div", {
                    className: s()(o.icon, o.two, a.FileUploadIconClassNames[t[1]])
                })
            })]
        })
    }
}