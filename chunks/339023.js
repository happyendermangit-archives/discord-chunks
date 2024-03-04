function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    }), n("222007");
    var l = n("37983");
    n("884691");
    var i = n("414456"),
        a = n.n(i),
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
                size: i,
                forcedIconColor: m,
                className: p,
                iconClassName: h
            } = e,
            [E, g] = (0, r.useStateFromStoresArray)([d.default], () => [d.default.desaturateUserColors, d.default.saturation]),
            C = (0, u.useToken)(o.default.unsafe_rawColors.PRIMARY_300).hex(),
            S = (0, s.hex2int)(null != n ? n : C),
            T = (0, s.int2hsl)(S, !1, E ? g : null);
        t = null != m ? m : .3 > (0, s.getDarkness)(S) ? o.default.unsafe_rawColors.PRIMARY_630.css : o.default.unsafe_rawColors.WHITE_500.css;
        let v = i / 8;
        return (0, l.jsx)("div", {
            style: {
                background: T,
                width: i,
                height: i,
                borderRadius: i,
                lineHeight: "".concat(i, "px")
            },
            className: p,
            children: (0, l.jsx)(c.default, {
                color: t,
                className: a(f.linkIcon, h),
                width: i - 2 * v,
                height: i - 2 * v,
                style: {
                    margin: v
                }
            })
        })
    }
}