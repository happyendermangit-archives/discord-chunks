function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("394846"),
        o = n("77078"),
        u = n("36341"),
        d = n("158998"),
        c = n("777003"),
        f = n("782340"),
        m = n("888485"),
        p = n("107680"),
        h = n("379539"),
        E = n("714073"),
        g = n("980923"),
        C = n("779585"),
        S = n("900143"),
        T = n("923337");
    let I = [T, p, g, E, C, h, S];

    function v(e) {
        let {
            userId: t
        } = e, [n, a] = i.useState(!1);
        return i.useLayoutEffect(() => {
            !n && a(!0)
        }, [n]), (0, l.jsx)("div", {
            className: m.wumpusWrapper,
            children: (0, l.jsxs)("div", {
                className: s(m.wumpus, {
                    [m.wumpusShown]: n
                }),
                children: [(0, l.jsx)("img", {
                    className: m.wumpusImage,
                    alt: f.default.Messages.IMG_ALT_ICON.format({
                        name: f.default.Messages.WUMPUS
                    }),
                    src: function() {
                        let e = parseInt(t.slice(-6), 10);
                        return I[e % I.length]
                    }()
                }), (0, l.jsxs)(o.Text, {
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
            canDM: i,
            onClose: a
        } = e;
        if (t.isNonUserBot() || !i) return null;
        let s = i && (0, d.isNewUser)(t) && !t.bot;
        return (0, l.jsxs)(c.default, {
            className: m.section,
            lastSection: !0,
            children: [s && i ? (0, l.jsx)(v, {
                userId: t.id
            }) : null, i ? (0, l.jsx)(u.default, {
                className: m.messageInputContainer,
                inputClassName: m.messageInput,
                user: t,
                onClose: () => null == a ? void 0 : a(),
                autoFocus: !r.isMobile && !n
            }) : null]
        })
    }
}