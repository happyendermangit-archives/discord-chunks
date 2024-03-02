function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    }), n("222007");
    var l = n("37983");
    n("884691");
    var i = n("509043"),
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
                tooltipText: E
            } = e,
            [g, C] = (0, a.useStateFromStoresArray)([o.default], () => [o.default.desaturateUserColors, o.default.saturation]),
            S = (0, r.useToken)(s.default.unsafe_rawColors.PRIMARY_300).hex(),
            T = (0, i.hex2int)(null != n ? n : S),
            I = (0, i.int2hsl)(T, !1, g ? C : null);
        return t = null != m ? m : .3 > (0, i.getDarkness)(T) ? s.default.unsafe_rawColors.PRIMARY_630.css : s.default.unsafe_rawColors.WHITE_500.css, (0, l.jsx)(r.Tooltip, {
            text: null != E ? E : c.default.Messages.CONNECTIONS_ROLE_OFFICIAL_ICON_TOOLTIP,
            children: e => (0, l.jsx)(u.default, {
                ...e,
                className: p,
                color: I,
                size: f,
                children: (0, l.jsx)(d.default, {
                    color: t,
                    height: f,
                    width: f,
                    className: h
                })
            })
        })
    }
}