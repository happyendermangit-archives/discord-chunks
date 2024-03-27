function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("414456"),
        a = n.n(l),
        s = n("77078"),
        r = n("616225"),
        o = n("387111"),
        u = n("996866"),
        d = n("8626");

    function c(e) {
        let {
            activity: t,
            user: n,
            channelId: l,
            guildId: c,
            source: f,
            size: m,
            className: p,
            ...h
        } = e, {
            tooltip: x,
            loading: E,
            disabled: y,
            onClick: g
        } = (0, u.useSpotifySyncAction)(t, n, f, o.default.getNickname(c, l, n));
        return (0, i.jsx)(s.Tooltip, {
            text: x,
            children: e => {
                let {
                    onMouseEnter: n,
                    onMouseLeave: l
                } = e;
                return (0, i.jsx)(s.Button, {
                    ...h,
                    size: a(m, d.iconButtonSize),
                    className: a(p, d.iconButton),
                    onClick: g,
                    onMouseEnter: n,
                    onMouseLeave: l,
                    disabled: y,
                    submitting: E,
                    "aria-label": null != x ? x : t.name,
                    children: (0, i.jsx)(r.default, {
                        className: d.listenAlongIcon
                    })
                })
            }
        })
    }
}