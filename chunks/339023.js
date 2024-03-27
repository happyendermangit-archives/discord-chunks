function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    }), n("222007");
    var i = n("37983");
    n("884691");
    var l = n("414456"),
        a = n.n(l),
        s = n("509043"),
        r = n("446674"),
        o = n("669491"),
        u = n("77078"),
        d = n("206230"),
        c = n("83900"),
        f = n("250964");

    function m(e) {
        let t, {
                color: n,
                size: l,
                forcedIconColor: m,
                className: p,
                iconClassName: h
            } = e,
            [x, E] = (0, r.useStateFromStoresArray)([d.default], () => [d.default.desaturateUserColors, d.default.saturation]),
            y = (0, u.useToken)(o.default.unsafe_rawColors.PRIMARY_300).hex(),
            g = (0, s.hex2int)(null != n ? n : y),
            S = (0, s.int2hsl)(g, !1, x ? E : null);
        t = null != m ? m : .3 > (0, s.getDarkness)(g) ? o.default.unsafe_rawColors.PRIMARY_630.css : o.default.unsafe_rawColors.WHITE_500.css;
        let C = l / 8;
        return (0, i.jsx)("div", {
            style: {
                background: S,
                width: l,
                height: l,
                borderRadius: l,
                lineHeight: "".concat(l, "px")
            },
            className: p,
            children: (0, i.jsx)(c.default, {
                color: t,
                className: a(f.linkIcon, h),
                width: l - 2 * C,
                height: l - 2 * C,
                style: {
                    margin: C
                }
            })
        })
    }
}