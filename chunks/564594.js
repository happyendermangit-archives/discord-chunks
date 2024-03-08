function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("376341"),
        a = n.n(l),
        s = n("77078"),
        r = n("145131"),
        o = n("936629"),
        u = n("996866"),
        d = n("8626");

    function c(e) {
        let {
            activity: t,
            user: n,
            source: l,
            ...c
        } = e, {
            label: f,
            tooltip: p,
            loading: m,
            disabled: h,
            onClick: x
        } = (0, u.useSpotifyPlayAction)(t, n, l);
        return (0, i.jsx)(s.Tooltip, {
            text: p,
            children: e => {
                let {
                    onMouseEnter: t,
                    onMouseLeave: n
                } = e;
                return (0, i.jsx)(s.Button, {
                    ...a(c, ["channelId", "guildId"]),
                    onClick: x,
                    onMouseEnter: t,
                    onMouseLeave: n,
                    disabled: h,
                    submitting: m,
                    children: (0, i.jsxs)(r.default, {
                        align: r.default.Align.CENTER,
                        children: [(0, i.jsx)(o.default, {
                            className: d.spotifyButtonLogo
                        }), f]
                    })
                })
            }
        })
    }
}