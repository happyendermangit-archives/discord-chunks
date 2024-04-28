function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return O
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("873546"),
        l = n("481060"),
        u = n("648996"),
        d = n("51144"),
        _ = n("785717"),
        c = n("659101"),
        E = n("689938"),
        I = n("846389"),
        T = n("390965"),
        f = n("752266"),
        S = n("390820"),
        h = n("230797"),
        A = n("612830"),
        m = n("293173");
    let N = [n("198087"), T, h, S, A, f, m];

    function p(e) {
        let {
            userId: t
        } = e, [n, s] = r.useState(!1);
        return r.useLayoutEffect(() => {
            !n && s(!0)
        }, [n]), (0, i.jsx)("div", {
            className: I.wumpusWrapper,
            children: (0, i.jsxs)("div", {
                className: a()(I.wumpus, {
                    [I.wumpusShown]: n
                }),
                children: [(0, i.jsx)("img", {
                    className: I.wumpusImage,
                    alt: E.default.Messages.IMG_ALT_ICON.format({
                        name: E.default.Messages.WUMPUS
                    }),
                    src: N[parseInt(t.slice(-6), 10) % N.length]
                }), (0, i.jsxs)(l.Text, {
                    variant: "text-sm/normal",
                    children: [E.default.Messages.USER_POPOUT_WUMPUS_TOOLTIP, "???"]
                })]
            })
        })
    }

    function O(e) {
        let {
            user: t,
            setNote: n,
            canDM: r,
            onClose: s
        } = e, {
            trackUserProfileAction: a
        } = (0, _.useUserProfileAnalyticsContext)(), l = r && (0, d.isNewUser)(t) && !t.bot;
        return (0, i.jsxs)(c.default, {
            className: I.section,
            lastSection: !0,
            children: [l && r ? (0, i.jsx)(p, {
                userId: t.id
            }) : null, r ? (0, i.jsx)(u.default, {
                className: I.messageInputContainer,
                inputClassName: I.messageInput,
                user: t,
                autoFocus: !o.isMobile && !n,
                onSend: () => {
                    a({
                        action: "SEND_DIRECT_MESSAGE"
                    }), null == s || s()
                }
            }) : null]
        })
    }
}