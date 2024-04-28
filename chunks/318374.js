function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return I
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("392711"),
        l = n.n(o),
        u = n("481060"),
        d = n("239091"),
        _ = n("321148"),
        c = n("51144"),
        E = n("901540");

    function I(e) {
        let {
            className: t,
            maxUsers: s,
            users: o,
            guildId: I,
            onFocus: T,
            size: f = u.AvatarSizes.SIZE_24,
            hideOverflowCount: S = !1,
            disableUsernameTooltip: h = !1
        } = e, [A, m] = r.useState(!1);

        function N() {
            return (0, i.jsx)(u.Dialog, {
                className: E.popoutWrapper,
                children: (0, i.jsx)(u.Scroller, {
                    className: E.scroller,
                    children: o.map(e => (0, i.jsx)(_.default, {
                        guildId: I,
                        user: e,
                        nick: c.default.getName(e),
                        onContextMenu: t => (0, d.openContextMenuLazy)(t, async () => {
                            let {
                                default: t
                            } = await Promise.all([n.e("99387"), n.e("79695"), n.e("1502"), n.e("15421")]).then(n.bind(n, "881351"));
                            return n => (0, i.jsx)(t, {
                                ...n,
                                user: e
                            })
                        }, {
                            onClose: () => m(!1)
                        })
                    }, e.id))
                })
            })
        }
        return o.length <= 0 ? null : (0, i.jsx)("div", {
            className: a()(t, E.avatars),
            children: function() {
                let e = l()(o).take(s).map(e => {
                        let t = c.default.getName(e);
                        return h ? (0, i.jsx)("div", {
                            className: E.avatar,
                            children: (0, i.jsx)(u.Avatar, {
                                src: e.getAvatarURL(I, 24),
                                "aria-label": t,
                                size: f
                            })
                        }) : (0, i.jsx)(u.TooltipContainer, {
                            text: t,
                            className: E.avatar,
                            children: (0, i.jsx)(u.Avatar, {
                                src: e.getAvatarURL(I, 24),
                                "aria-label": t,
                                size: f
                            })
                        }, e.id)
                    }).value(),
                    t = o.length - s;
                return t > 0 && !S && (e[e.length - 1] = (0, i.jsx)(u.Popout, {
                    renderPopout: N,
                    shouldShow: A,
                    position: "bottom",
                    onRequestClose: () => m(!1),
                    children: () => (0, i.jsxs)(u.Button, {
                        className: a()(E.avatar, E.overflow),
                        onFocus: T,
                        onClick: () => m(!0),
                        look: u.Button.Looks.BLANK,
                        size: u.Button.Sizes.NONE,
                        children: ["+", t + 1]
                    })
                }, "overflow")), e
            }()
        })
    }
}