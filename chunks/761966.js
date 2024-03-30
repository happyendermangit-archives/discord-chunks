function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("803997"),
        s = n.n(r),
        a = n("481060"),
        o = n("976644"),
        l = n("549631"),
        u = n("872010");

    function d(e) {
        let {
            children: t,
            className: n,
            size: r = a.Button.Sizes.MEDIUM,
            onlyShineOnHover: d = !1,
            ..._
        } = e;
        return (0, i.jsx)(o.default, {
            ..._,
            color: a.Button.Colors.CUSTOM,
            size: r,
            className: s()(u.button, n),
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