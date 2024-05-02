function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return I
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        a = n("120356"),
        s = n.n(a),
        o = n("392711"),
        l = n.n(o),
        u = n("481060"),
        d = n("239091"),
        _ = n("321148"),
        c = n("51144"),
        E = n("832645");

    function I(e) {
        let {
            className: t,
            avatarClassName: a,
            maxUsers: o,
            users: I,
            guildId: T,
            onFocus: f,
            size: S = u.AvatarSizes.SIZE_24,
            hideOverflowCount: h = !1,
            disableUsernameTooltip: A = !1
        } = e, [m, N] = r.useState(!1);

        function p() {
            return (0, i.jsx)(u.Dialog, {
                className: E.popoutWrapper,
                children: (0, i.jsx)(u.Scroller, {
                    className: E.scroller,
                    children: I.map(e => (0, i.jsx)(_.default, {
                        guildId: T,
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
                            onClose: () => N(!1)
                        })
                    }, e.id))
                })
            })
        }
        return I.length <= 0 ? null : (0, i.jsx)("div", {
            className: s()(t, E.avatars),
            children: function() {
                let e = l()(I).take(o).map(e => {
                        let t = c.default.getName(e);
                        return A ? (0, i.jsx)("div", {
                            className: s()(E.avatar, a),
                            children: (0, i.jsx)(u.Avatar, {
                                src: e.getAvatarURL(T, 24),
                                "aria-label": t,
                                size: S
                            })
                        }) : (0, i.jsx)(u.TooltipContainer, {
                            text: t,
                            className: s()(E.avatar, a),
                            children: (0, i.jsx)(u.Avatar, {
                                src: e.getAvatarURL(T, 24),
                                "aria-label": t,
                                size: S
                            })
                        }, e.id)
                    }).value(),
                    t = I.length - o;
                return t > 0 && !h && (e[e.length - 1] = (0, i.jsx)(u.Popout, {
                    renderPopout: p,
                    shouldShow: m,
                    position: "bottom",
                    onRequestClose: () => N(!1),
                    children: () => (0, i.jsxs)(u.Button, {
                        className: s()(E.avatar, E.overflow),
                        onFocus: f,
                        onClick: () => N(!0),
                        look: u.Button.Looks.BLANK,
                        size: u.Button.Sizes.NONE,
                        children: ["+", t + 1]
                    })
                }, "overflow")), e
            }()
        })
    }
}