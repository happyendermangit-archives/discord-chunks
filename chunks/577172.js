function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
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
        c = n("777003"),
        f = n("782340"),
        p = n("888485"),
        m = n("107680"),
        h = n("379539"),
        x = n("714073"),
        E = n("980923"),
        y = n("779585"),
        g = n("900143"),
        S = n("923337");
    let C = [S, m, E, x, y, h, g];

    function I(e) {
        let {
            userId: t
        } = e, [n, a] = l.useState(!1);
        return l.useLayoutEffect(() => {
            !n && a(!0)
        }, [n]), (0, i.jsx)("div", {
            className: p.wumpusWrapper,
            children: (0, i.jsxs)("div", {
                className: s(p.wumpus, {
                    [p.wumpusShown]: n
                }),
                children: [(0, i.jsx)("img", {
                    className: p.wumpusImage,
                    alt: f.default.Messages.IMG_ALT_ICON.format({
                        name: f.default.Messages.WUMPUS
                    }),
                    src: function() {
                        let e = parseInt(t.slice(-6), 10);
                        return C[e % C.length]
                    }()
                }), (0, i.jsxs)(o.Text, {
                    variant: "text-sm/normal",
                    children: [f.default.Messages.USER_POPOUT_WUMPUS_TOOLTIP, "???"]
                })]
            })
        })
    }

    function _(e) {
        let {
            user: t,
            setNote: n,
            canDM: l,
            onClose: a
        } = e;
        if (t.isNonUserBot() || !l) return null;
        let s = l && (0, d.isNewUser)(t) && !t.bot;
        return (0, i.jsxs)(c.default, {
            className: p.section,
            lastSection: !0,
            children: [s && l ? (0, i.jsx)(I, {
                userId: t.id
            }) : null, l ? (0, i.jsx)(u.default, {
                className: p.messageInputContainer,
                inputClassName: p.messageInput,
                user: t,
                onClose: () => null == a ? void 0 : a(),
                autoFocus: !r.isMobile && !n
            }) : null]
        })
    }
}