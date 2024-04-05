function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return T
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("974674"),
        s = n("1561"),
        a = n("993365"),
        o = n("467679"),
        l = n("768581"),
        u = n("630388"),
        d = n("489863"),
        _ = n("981631"),
        c = n("182294"),
        E = n("689938"),
        I = n("95761");

    function T(e) {
        let {
            id: t,
            user: n,
            application: T,
            bot: f,
            accountScopes: S,
            showLogout: A,
            location: h,
            isTrustedName: m
        } = e, N = l.default.getApplicationIconURL({
            id: T.id,
            icon: T.icon
        }), O = l.default.getUserAvatarURL(n);
        return (0, i.jsxs)("header", {
            id: t,
            className: I.header,
            children: [(0, i.jsxs)("div", {
                className: I.headerIcons,
                children: [(0, i.jsx)(r.Avatar, {
                    src: N,
                    size: c.AvatarSizes.SIZE_80,
                    "aria-label": T.name
                }), (0, i.jsxs)("div", {
                    className: I.ellipseGroup,
                    children: [(0, i.jsx)("div", {
                        className: I.ellipse
                    }), (0, i.jsx)("div", {
                        className: I.ellipse
                    }), (0, i.jsx)("div", {
                        className: I.ellipse
                    })]
                }), (0, i.jsx)(r.Avatar, {
                    src: O,
                    size: c.AvatarSizes.SIZE_80,
                    "aria-label": n.username
                })]
            }), !m && (0, i.jsx)(a.Text, {
                variant: "text-md/medium",
                color: "header-secondary",
                className: I.label,
                children: E.default.Messages.OAUTH2_THIRD_PARTY_APPLICATION
            }), (0, i.jsxs)(a.Text, {
                variant: "text-lg/bold",
                color: "header-primary",
                children: [T.name, null != f ? (0, i.jsx)(o.default, {
                    className: I.botTag,
                    verified: null != f.public_flags && (0, u.hasFlag)(f.public_flags, _.UserFlags.VERIFIED_BOT)
                }) : null]
            }), S.length > 0 ? (0, i.jsx)(a.Text, {
                variant: "text-md/normal",
                color: "header-secondary",
                className: I.label,
                children: E.default.Messages.OAUTH2_REQUESTS_ACCOUNT_ACCESS
            }) : (0, i.jsx)(a.Text, {
                variant: "text-md/normal",
                color: "header-secondary",
                className: I.label,
                children: E.default.Messages.OAUTH2_CONNECT_TO_DISCORD
            }), A ? (0, i.jsx)("div", {
                className: I.currentUser,
                children: (0, i.jsxs)(a.Text, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: [E.default.Messages.OAUTH2_SIGNED_IN_AS.format({
                        userHook: () => (0, i.jsxs)(a.Text, {
                            className: I.currentUserTag,
                            variant: "text-sm/normal",
                            children: [n.username, !n.isPomelo() && (0, i.jsx)(a.Text, {
                                className: I.currentUserDiscriminator,
                                variant: "text-sm/normal",
                                children: "#".concat(n.discriminator)
                            })]
                        }, n.id)
                    }), (0, i.jsx)(s.Clickable, {
                        tag: "a",
                        className: I.logoutLink,
                        onClick: () => (0, d.logoutWithRedirect)(h),
                        children: E.default.Messages.OAUTH2_LOGOUT
                    })]
                })
            }) : null]
        })
    }
}