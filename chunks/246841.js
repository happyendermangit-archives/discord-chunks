function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("725686"),
        s = n.n(r),
        a = n("481060"),
        o = n("285952"),
        l = n("395361"),
        u = n("829820"),
        d = n("160004");

    function _(e) {
        let {
            activity: t,
            user: n,
            source: r,
            ..._
        } = e, {
            label: c,
            tooltip: E,
            loading: I,
            disabled: T,
            onClick: f
        } = (0, u.useSpotifyPlayAction)(t, n, r);
        return (0, i.jsx)(a.Tooltip, {
            text: E,
            children: e => {
                let {
                    onMouseEnter: t,
                    onMouseLeave: n
                } = e;
                return (0, i.jsx)(a.Button, {
                    ...s()(_, ["channelId", "guildId"]),
                    onClick: f,
                    onMouseEnter: t,
                    onMouseLeave: n,
                    disabled: T,
                    submitting: I,
                    children: (0, i.jsxs)(o.default, {
                        align: o.default.Align.CENTER,
                        children: [(0, i.jsx)(l.default, {
                            className: d.spotifyButtonLogo
                        }), c]
                    })
                })
            }
        })
    }
}