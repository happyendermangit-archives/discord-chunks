function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("414456"),
        a = n.n(i),
        s = n("476263"),
        r = n("328413"),
        o = n("454924"),
        u = function(e) {
            let {
                guild: t,
                children: n
            } = e, i = null != t ? (0, l.jsx)(s.default, {
                guild: t,
                size: s.default.Sizes.MEDIUM,
                className: a(o.icon, null == t.icon ? o.textIcon : o.imageIcon),
                active: !0
            }) : null;
            return (0, l.jsxs)("span", {
                children: [(0, l.jsx)(r.default, {
                    children: i
                }), (0, l.jsx)("span", {
                    className: o.name,
                    children: n
                })]
            })
        }
}