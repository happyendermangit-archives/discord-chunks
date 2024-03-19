function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return T
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("394846"),
        o = n("77078"),
        u = n("36341"),
        d = n("158998"),
        c = n("756507"),
        f = n("777003"),
        p = n("782340"),
        m = n("888485"),
        h = n("107680"),
        x = n("379539"),
        E = n("714073"),
        y = n("980923"),
        g = n("779585"),
        S = n("900143"),
        C = n("923337");
    let _ = [C, h, y, E, g, x, S];

    function I(e) {
        let {
            userId: t
        } = e, [n, a] = l.useState(!1);
        return l.useLayoutEffect(() => {
            !n && a(!0)
        }, [n]), (0, i.jsx)("div", {
            className: m.wumpusWrapper,
            children: (0, i.jsxs)("div", {
                className: s(m.wumpus, {
                    [m.wumpusShown]: n
                }),
                children: [(0, i.jsx)("img", {
                    className: m.wumpusImage,
                    alt: p.default.Messages.IMG_ALT_ICON.format({
                        name: p.default.Messages.WUMPUS
                    }),
                    src: function() {
                        let e = parseInt(t.slice(-6), 10);
                        return _[e % _.length]
                    }()
                }), (0, i.jsxs)(o.Text, {
                    variant: "text-sm/normal",
                    children: [p.default.Messages.USER_POPOUT_WUMPUS_TOOLTIP, "???"]
                })]
            })
        })
    }

    function T(e) {
        let {
            user: t,
            setNote: n,
            canDM: l,
            onClose: a
        } = e, {
            trackUserProfileAction: s
        } = (0, c.useUserProfileAnalyticsContext)(), o = l && (0, d.isNewUser)(t) && !t.bot;
        return (0, i.jsxs)(f.default, {
            className: m.section,
            lastSection: !0,
            children: [o && l ? (0, i.jsx)(I, {
                userId: t.id
            }) : null, l ? (0, i.jsx)(u.default, {
                className: m.messageInputContainer,
                inputClassName: m.messageInput,
                user: t,
                autoFocus: !r.isMobile && !n,
                onSend: () => {
                    s({
                        action: "SEND_DIRECT_MESSAGE"
                    }), null == a || a()
                }
            }) : null]
        })
    }
}