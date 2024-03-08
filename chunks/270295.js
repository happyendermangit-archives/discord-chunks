function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("414456"),
        a = n.n(l),
        s = n("77078"),
        r = n("181114"),
        o = n("915675"),
        u = n("430628");

    function d(e) {
        let {
            children: t,
            className: n,
            size: l = s.Button.Sizes.MEDIUM,
            onlyShineOnHover: d = !1,
            ...c
        } = e;
        return (0, i.jsx)(r.default, {
            ...c,
            color: s.Button.Colors.CUSTOM,
            size: l,
            className: a(u.button, n),
            onlyShineOnHover: d,
            children: (0, i.jsxs)("div", {
                className: u.buttonContents,
                children: [(0, i.jsx)(o.default, {
                    className: u.icon
                }), t]
            })
        })
    }
}