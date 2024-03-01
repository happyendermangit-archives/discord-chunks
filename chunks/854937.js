function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("414456"),
        a = n.n(i),
        s = n("77078"),
        r = n("616225"),
        o = n("387111"),
        u = n("996866"),
        d = n("8626");

    function c(e) {
        let {
            activity: t,
            user: n,
            channelId: i,
            guildId: c,
            source: f,
            size: m,
            className: p,
            ...h
        } = e, {
            tooltip: E,
            loading: g,
            disabled: C,
            onClick: S
        } = (0, u.useSpotifySyncAction)(t, n, f, o.default.getNickname(c, i, n));
        return (0, l.jsx)(s.Tooltip, {
            text: E,
            children: e => {
                let {
                    onMouseEnter: n,
                    onMouseLeave: i
                } = e;
                return (0, l.jsx)(s.Button, {
                    ...h,
                    size: a(m, d.iconButtonSize),
                    className: a(p, d.iconButton),
                    onClick: S,
                    onMouseEnter: n,
                    onMouseLeave: i,
                    disabled: C,
                    submitting: g,
                    "aria-label": null != E ? E : t.name,
                    children: (0, l.jsx)(r.default, {
                        className: d.listenAlongIcon
                    })
                })
            }
        })
    }
}