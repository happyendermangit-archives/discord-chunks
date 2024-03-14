function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    });
    var i = n("37983");
    n("884691");
    var s = n("913365"),
        r = n("227645"),
        a = n("577776"),
        o = n("79798"),
        l = n("315102"),
        u = n("568734"),
        d = n("8222"),
        c = n("49111"),
        f = n("52904"),
        _ = n("782340"),
        h = n("768416");

    function E(e) {
        let {
            id: t,
            user: n,
            application: E,
            bot: g,
            accountScopes: m,
            showLogout: p,
            location: S,
            isTrustedName: v
        } = e, T = l.default.getApplicationIconURL({
            id: E.id,
            icon: E.icon
        }), I = l.default.getUserAvatarURL(n);
        return (0, i.jsxs)("header", {
            id: t,
            className: h.header,
            children: [(0, i.jsxs)("div", {
                className: h.headerIcons,
                children: [(0, i.jsx)(s.Avatar, {
                    src: T,
                    size: f.AvatarSizes.SIZE_80,
                    "aria-label": E.name
                }), (0, i.jsxs)("div", {
                    className: h.ellipseGroup,
                    children: [(0, i.jsx)("div", {
                        className: h.ellipse
                    }), (0, i.jsx)("div", {
                        className: h.ellipse
                    }), (0, i.jsx)("div", {
                        className: h.ellipse
                    })]
                }), (0, i.jsx)(s.Avatar, {
                    src: I,
                    size: f.AvatarSizes.SIZE_80,
                    "aria-label": n.username
                })]
            }), !v && (0, i.jsx)(a.Text, {
                variant: "text-md/medium",
                color: "header-secondary",
                className: h.label,
                children: _.default.Messages.OAUTH2_THIRD_PARTY_APPLICATION
            }), (0, i.jsxs)(a.Text, {
                variant: "text-lg/bold",
                color: "header-primary",
                children: [E.name, null != g ? (0, i.jsx)(o.default, {
                    className: h.botTag,
                    verified: null != g.public_flags && (0, u.hasFlag)(g.public_flags, c.UserFlags.VERIFIED_BOT)
                }) : null]
            }), m.length > 0 ? (0, i.jsx)(a.Text, {
                variant: "text-md/normal",
                color: "header-secondary",
                className: h.label,
                children: _.default.Messages.OAUTH2_REQUESTS_ACCOUNT_ACCESS
            }) : (0, i.jsx)(a.Text, {
                variant: "text-md/normal",
                color: "header-secondary",
                className: h.label,
                children: _.default.Messages.OAUTH2_CONNECT_TO_DISCORD
            }), p ? (0, i.jsx)("div", {
                className: h.currentUser,
                children: (0, i.jsxs)(a.Text, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: [_.default.Messages.OAUTH2_SIGNED_IN_AS.format({
                        userHook: () => (0, i.jsxs)(a.Text, {
                            className: h.currentUserTag,
                            variant: "text-sm/normal",
                            children: [n.username, !n.isPomelo() && (0, i.jsx)(a.Text, {
                                className: h.currentUserDiscriminator,
                                variant: "text-sm/normal",
                                children: "#".concat(n.discriminator)
                            })]
                        }, n.id)
                    }), (0, i.jsx)(r.Clickable, {
                        tag: "a",
                        className: h.logoutLink,
                        onClick: () => (0, d.logoutWithRedirect)(S),
                        children: _.default.Messages.OAUTH2_LOGOUT
                    })]
                })
            }) : null]
        })
    }
}