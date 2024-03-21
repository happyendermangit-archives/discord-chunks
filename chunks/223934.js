function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return h
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
        _ = n("52904"),
        f = n("782340"),
        E = n("768416");

    function h(e) {
        let {
            id: t,
            user: n,
            application: h,
            bot: g,
            accountScopes: m,
            showLogout: p,
            location: S,
            isTrustedName: T
        } = e, v = l.default.getApplicationIconURL({
            id: h.id,
            icon: h.icon
        }), I = l.default.getUserAvatarURL(n);
        return (0, i.jsxs)("header", {
            id: t,
            className: E.header,
            children: [(0, i.jsxs)("div", {
                className: E.headerIcons,
                children: [(0, i.jsx)(s.Avatar, {
                    src: v,
                    size: _.AvatarSizes.SIZE_80,
                    "aria-label": h.name
                }), (0, i.jsxs)("div", {
                    className: E.ellipseGroup,
                    children: [(0, i.jsx)("div", {
                        className: E.ellipse
                    }), (0, i.jsx)("div", {
                        className: E.ellipse
                    }), (0, i.jsx)("div", {
                        className: E.ellipse
                    })]
                }), (0, i.jsx)(s.Avatar, {
                    src: I,
                    size: _.AvatarSizes.SIZE_80,
                    "aria-label": n.username
                })]
            }), !T && (0, i.jsx)(a.Text, {
                variant: "text-md/medium",
                color: "header-secondary",
                className: E.label,
                children: f.default.Messages.OAUTH2_THIRD_PARTY_APPLICATION
            }), (0, i.jsxs)(a.Text, {
                variant: "text-lg/bold",
                color: "header-primary",
                children: [h.name, null != g ? (0, i.jsx)(o.default, {
                    className: E.botTag,
                    verified: null != g.public_flags && (0, u.hasFlag)(g.public_flags, c.UserFlags.VERIFIED_BOT)
                }) : null]
            }), m.length > 0 ? (0, i.jsx)(a.Text, {
                variant: "text-md/normal",
                color: "header-secondary",
                className: E.label,
                children: f.default.Messages.OAUTH2_REQUESTS_ACCOUNT_ACCESS
            }) : (0, i.jsx)(a.Text, {
                variant: "text-md/normal",
                color: "header-secondary",
                className: E.label,
                children: f.default.Messages.OAUTH2_CONNECT_TO_DISCORD
            }), p ? (0, i.jsx)("div", {
                className: E.currentUser,
                children: (0, i.jsxs)(a.Text, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: [f.default.Messages.OAUTH2_SIGNED_IN_AS.format({
                        userHook: () => (0, i.jsxs)(a.Text, {
                            className: E.currentUserTag,
                            variant: "text-sm/normal",
                            children: [n.username, !n.isPomelo() && (0, i.jsx)(a.Text, {
                                className: E.currentUserDiscriminator,
                                variant: "text-sm/normal",
                                children: "#".concat(n.discriminator)
                            })]
                        }, n.id)
                    }), (0, i.jsx)(r.Clickable, {
                        tag: "a",
                        className: E.logoutLink,
                        onClick: () => (0, d.logoutWithRedirect)(S),
                        children: f.default.Messages.OAUTH2_LOGOUT
                    })]
                })
            }) : null]
        })
    }
}