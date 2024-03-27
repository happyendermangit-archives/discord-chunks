function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    }), n("222007");
    var i = n("37983");
    n("884691");
    var l = n("509043"),
        a = n("446674"),
        s = n("669491"),
        r = n("77078"),
        o = n("206230"),
        u = n("931138"),
        d = n("486952"),
        c = n("782340");

    function f(e) {
        let t, {
                color: n,
                size: f,
                forcedIconColor: m,
                className: p,
                iconClassName: h,
                tooltipText: x
            } = e,
            [E, y] = (0, a.useStateFromStoresArray)([o.default], () => [o.default.desaturateUserColors, o.default.saturation]),
            g = (0, r.useToken)(s.default.unsafe_rawColors.PRIMARY_300).hex(),
            S = (0, l.hex2int)(null != n ? n : g),
            C = (0, l.int2hsl)(S, !1, E ? y : null);
        return t = null != m ? m : .3 > (0, l.getDarkness)(S) ? s.default.unsafe_rawColors.PRIMARY_630.css : s.default.unsafe_rawColors.WHITE_500.css, (0, i.jsx)(r.Tooltip, {
            text: null != x ? x : c.default.Messages.CONNECTIONS_ROLE_OFFICIAL_ICON_TOOLTIP,
            children: e => (0, i.jsx)(u.default, {
                ...e,
                className: p,
                color: C,
                size: f,
                children: (0, i.jsx)(d.default, {
                    color: t,
                    height: f,
                    width: f,
                    className: h
                })
            })
        })
    }
}