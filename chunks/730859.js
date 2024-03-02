function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("917351"),
        o = n.n(r),
        u = n("77078"),
        d = n("272030"),
        c = n("427302"),
        f = n("158998"),
        m = n("305130");

    function p(e) {
        let {
            className: t,
            maxUsers: a,
            users: r,
            guildId: p,
            onFocus: h
        } = e, [E, g] = i.useState(!1);

        function C() {
            return (0, l.jsx)(u.Dialog, {
                className: m.popoutWrapper,
                children: (0, l.jsx)(u.Scroller, {
                    className: m.scroller,
                    children: r.map(e => (0, l.jsx)(c.default, {
                        guildId: p,
                        user: e,
                        nick: f.default.getName(e),
                        onContextMenu: t => (0, d.openContextMenuLazy)(t, async () => {
                            let {
                                default: t
                            } = await n.el("406784").then(n.bind(n, "406784"));
                            return n => (0, l.jsx)(t, {
                                ...n,
                                user: e
                            })
                        }, {
                            onClose: () => g(!1)
                        })
                    }, e.id))
                })
            })
        }
        return r.length <= 0 ? null : (0, l.jsx)("div", {
            className: s(t, m.avatars),
            children: function() {
                let e = o(r).take(a).map(e => {
                        let t = f.default.getName(e);
                        return (0, l.jsx)(u.TooltipContainer, {
                            text: t,
                            className: m.avatar,
                            children: (0, l.jsx)(u.Avatar, {
                                src: e.getAvatarURL(p, 24),
                                "aria-label": t,
                                size: u.AvatarSizes.SIZE_24
                            })
                        }, e.id)
                    }).value(),
                    t = r.length - a;
                return t > 0 && (e[e.length - 1] = (0, l.jsx)(u.Popout, {
                    renderPopout: C,
                    shouldShow: E,
                    position: "bottom",
                    onRequestClose: () => g(!1),
                    children: () => (0, l.jsxs)(u.Button, {
                        className: s(m.avatar, m.overflow),
                        onFocus: h,
                        onClick: () => g(!0),
                        look: u.Button.Looks.BLANK,
                        size: u.Button.Sizes.NONE,
                        children: ["+", t + 1]
                    })
                }, "overflow")), e
            }()
        })
    }
}