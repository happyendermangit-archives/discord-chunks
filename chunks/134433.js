function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    }), n("47120");
    var i = n("735250");
    n("470079");
    var r = n("803997"),
        s = n.n(r),
        a = n("866442"),
        o = n("442837"),
        l = n("692547"),
        u = n("481060"),
        d = n("607070"),
        _ = n("757698"),
        c = n("120468");

    function E(e) {
        let t, {
                color: n,
                size: r,
                forcedIconColor: E,
                className: I,
                iconClassName: T
            } = e,
            [f, S] = (0, o.useStateFromStoresArray)([d.default], () => [d.default.desaturateUserColors, d.default.saturation]),
            h = (0, u.useToken)(l.default.unsafe_rawColors.PRIMARY_300).hex(),
            A = (0, a.hex2int)(null != n ? n : h),
            m = (0, a.int2hsl)(A, !1, f ? S : null);
        t = null != E ? E : .3 > (0, a.getDarkness)(A) ? l.default.unsafe_rawColors.PRIMARY_630.css : l.default.unsafe_rawColors.WHITE_500.css;
        let N = r / 8;
        return (0, i.jsx)("div", {
            style: {
                background: m,
                width: r,
                height: r,
                borderRadius: r,
                lineHeight: "".concat(r, "px")
            },
            className: I,
            children: (0, i.jsx)(_.default, {
                color: t,
                className: s()(c.linkIcon, T),
                width: r - 2 * N,
                height: r - 2 * N,
                style: {
                    margin: N
                }
            })
        })
    }
}