function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        a = n.n(r),
        s = n("346656"),
        o = n("227356"),
        l = n("173838");
    t.default = function(e) {
        let {
            guild: t,
            children: n
        } = e, r = null != t ? (0, i.jsx)(s.default, {
            guild: t,
            size: s.default.Sizes.MEDIUM,
            className: a()(l.icon, null == t.icon ? l.textIcon : l.imageIcon),
            active: !0
        }) : null;
        return (0, i.jsxs)("span", {
            children: [(0, i.jsx)(o.default, {
                children: r
            }), (0, i.jsx)("span", {
                className: l.name,
                children: n
            })]
        })
    }
}