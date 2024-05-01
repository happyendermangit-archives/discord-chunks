function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        a = n.n(r),
        s = n("481060"),
        o = n("976644"),
        l = n("549631"),
        u = n("936408");

    function d(e) {
        let {
            children: t,
            className: n,
            size: r = s.Button.Sizes.MEDIUM,
            onlyShineOnHover: d = !1,
            ..._
        } = e;
        return (0, i.jsx)(o.default, {
            ..._,
            color: s.Button.Colors.CUSTOM,
            size: r,
            className: a()(u.button, n),
            onlyShineOnHover: d,
            children: (0, i.jsxs)("div", {
                className: u.buttonContents,
                children: [(0, i.jsx)(l.default, {
                    className: u.icon
                }), t]
            })
        })
    }
}