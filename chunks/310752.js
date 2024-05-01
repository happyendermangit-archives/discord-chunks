function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        a = n.n(r),
        s = n("731994"),
        o = n("297888");
    t.default = function(e) {
        let {
            icons: t,
            className: n
        } = e;
        return (0, i.jsxs)("div", {
            className: a()(o.icons, n),
            children: [(0, i.jsx)("div", {
                className: o.wrapOne,
                children: (0, i.jsx)("div", {
                    className: a()(o.icon, o.one, s.FileUploadIconClassNames[t[0]])
                })
            }), (0, i.jsx)("div", {
                className: o.wrapThree,
                children: (0, i.jsx)("div", {
                    className: a()(o.icon, o.three, s.FileUploadIconClassNames[t[2]])
                })
            }), (0, i.jsx)("div", {
                className: o.wrapTwo,
                children: (0, i.jsx)("div", {
                    className: a()(o.icon, o.two, s.FileUploadIconClassNames[t[1]])
                })
            })]
        })
    }
}