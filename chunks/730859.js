function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
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
            onFocus: h,
            size: x = u.AvatarSizes.SIZE_24,
            hideOverflowCount: E = !1,
            disableUsernameTooltip: y = !1
        } = e, [g, S] = l.useState(!1);

        function C() {
            return (0, i.jsx)(u.Dialog, {
                className: m.popoutWrapper,
                children: (0, i.jsx)(u.Scroller, {
                    className: m.scroller,
                    children: r.map(e => (0, i.jsx)(c.default, {
                        guildId: p,
                        user: e,
                        nick: f.default.getName(e),
                        onContextMenu: t => (0, d.openContextMenuLazy)(t, async () => {
                            let {
                                default: t
                            } = await n.el("406784").then(n.bind(n, "406784"));
                            return n => (0, i.jsx)(t, {
                                ...n,
                                user: e
                            })
                        }, {
                            onClose: () => S(!1)
                        })
                    }, e.id))
                })
            })
        }
        return r.length <= 0 ? null : (0, i.jsx)("div", {
            className: s(t, m.avatars),
            children: function() {
                let e = o(r).take(a).map(e => {
                        let t = f.default.getName(e);
                        return y ? (0, i.jsx)("div", {
                            className: m.avatar,
                            children: (0, i.jsx)(u.Avatar, {
                                src: e.getAvatarURL(p, 24),
                                "aria-label": t,
                                size: x
                            })
                        }) : (0, i.jsx)(u.TooltipContainer, {
                            text: t,
                            className: m.avatar,
                            children: (0, i.jsx)(u.Avatar, {
                                src: e.getAvatarURL(p, 24),
                                "aria-label": t,
                                size: x
                            })
                        }, e.id)
                    }).value(),
                    t = r.length - a;
                return t > 0 && !E && (e[e.length - 1] = (0, i.jsx)(u.Popout, {
                    renderPopout: C,
                    shouldShow: g,
                    position: "bottom",
                    onRequestClose: () => S(!1),
                    children: () => (0, i.jsxs)(u.Button, {
                        className: s(m.avatar, m.overflow),
                        onFocus: h,
                        onClick: () => S(!0),
                        look: u.Button.Looks.BLANK,
                        size: u.Button.Sizes.NONE,
                        children: ["+", t + 1]
                    })
                }, "overflow")), e
            }()
        })
    }
}