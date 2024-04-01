function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    }), n("47120");
    var i = n("735250");
    n("470079");
    var r = n("866442"),
        s = n("442837"),
        a = n("692547"),
        o = n("481060"),
        l = n("607070"),
        u = n("797717"),
        d = n("507957"),
        _ = n("689938");

    function c(e) {
        let t, {
                color: n,
                size: c,
                forcedIconColor: E,
                className: I,
                iconClassName: T,
                tooltipText: f
            } = e,
            [S, A] = (0, s.useStateFromStoresArray)([l.default], () => [l.default.desaturateUserColors, l.default.saturation]),
            h = (0, o.useToken)(a.default.unsafe_rawColors.PRIMARY_300).hex(),
            m = (0, r.hex2int)(null != n ? n : h),
            N = (0, r.int2hsl)(m, !1, S ? A : null);
        return t = null != E ? E : .3 > (0, r.getDarkness)(m) ? a.default.unsafe_rawColors.PRIMARY_630.css : a.default.unsafe_rawColors.WHITE_500.css, (0, i.jsx)(o.Tooltip, {
            text: null != f ? f : _.default.Messages.CONNECTIONS_ROLE_OFFICIAL_ICON_TOOLTIP,
            children: e => (0, i.jsx)(u.default, {
                ...e,
                className: I,
                color: N,
                size: c,
                children: (0, i.jsx)(d.default, {
                    color: t,
                    height: c,
                    width: c,
                    className: T
                })
            })
        })
    }
}