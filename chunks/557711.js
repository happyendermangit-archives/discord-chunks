function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("803997"),
        s = n.n(r),
        a = n("481060"),
        o = n("432247"),
        l = n("5192"),
        u = n("829820"),
        d = n("310178");

    function _(e) {
        let {
            activity: t,
            user: n,
            channelId: r,
            guildId: _,
            source: c,
            size: E,
            className: I,
            ...T
        } = e, {
            tooltip: f,
            loading: S,
            disabled: h,
            onClick: A
        } = (0, u.useSpotifySyncAction)(t, n, c, l.default.getNickname(_, r, n));
        return (0, i.jsx)(a.Tooltip, {
            text: f,
            children: e => {
                let {
                    onMouseEnter: n,
                    onMouseLeave: r
                } = e;
                return (0, i.jsx)(a.Button, {
                    ...T,
                    size: s()(E, d.iconButtonSize),
                    className: s()(I, d.iconButton),
                    onClick: A,
                    onMouseEnter: n,
                    onMouseLeave: r,
                    disabled: h,
                    submitting: S,
                    "aria-label": null != f ? f : t.name,
                    children: (0, i.jsx)(o.default, {
                        className: d.listenAlongIcon
                    })
                })
            }
        })
    }
}