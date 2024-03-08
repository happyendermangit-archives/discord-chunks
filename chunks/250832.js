function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("414456"),
        a = n.n(l),
        s = n("476263"),
        r = n("328413"),
        o = n("454924"),
        u = function(e) {
            let {
                guild: t,
                children: n
            } = e, l = null != t ? (0, i.jsx)(s.default, {
                guild: t,
                size: s.default.Sizes.MEDIUM,
                className: a(o.icon, null == t.icon ? o.textIcon : o.imageIcon),
                active: !0
            }) : null;
            return (0, i.jsxs)("span", {
                children: [(0, i.jsx)(r.default, {
                    children: l
                }), (0, i.jsx)("span", {
                    className: o.name,
                    children: n
                })]
            })
        }
}