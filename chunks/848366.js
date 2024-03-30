function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    });
    var r = n("470079"),
        o = n("2489"),
        i = n("324377"),
        a = n("135983"),
        u = n("303052"),
        s = n("299529"),
        l = n("947248"),
        c = n("390897"),
        f = n("281767"),
        d = n("962839"),
        _ = n("941504"),
        E = n("95761");

    function p(e) {
        var t = e.id,
            n = e.user,
            p = e.application,
            m = e.bot,
            y = e.accountScopes,
            I = e.showLogout,
            h = e.location,
            O = e.isTrustedName,
            T = s.default.getApplicationIconURL({
                id: p.id,
                icon: p.icon
            }),
            S = s.default.getUserAvatarURL(n);
        return r.createElement("header", {
            id: t,
            className: E.header
        }, r.createElement("div", {
            className: E.headerIcons
        }, r.createElement(o.Avatar, {
            src: T,
            size: d.AvatarSizes.SIZE_80,
            "aria-label": p.name
        }), r.createElement("div", {
            className: E.ellipseGroup
        }, r.createElement("div", {
            className: E.ellipse
        }), r.createElement("div", {
            className: E.ellipse
        }), r.createElement("div", {
            className: E.ellipse
        })), r.createElement(o.Avatar, {
            src: S,
            size: d.AvatarSizes.SIZE_80,
            "aria-label": n.username
        })), !O && r.createElement(a.Text, {
            variant: "text-md/medium",
            color: "header-secondary",
            className: E.label
        }, _.default.Messages.OAUTH2_THIRD_PARTY_APPLICATION), r.createElement(a.Text, {
            variant: "text-lg/bold",
            color: "header-primary"
        }, p.name, null != m ? r.createElement(u.default, {
            className: E.botTag,
            verified: null != m.public_flags && (0, l.hasFlag)(m.public_flags, f.UserFlags.VERIFIED_BOT)
        }) : null), y.length > 0 ? r.createElement(a.Text, {
            variant: "text-md/normal",
            color: "header-secondary",
            className: E.label
        }, _.default.Messages.OAUTH2_REQUESTS_ACCOUNT_ACCESS) : r.createElement(a.Text, {
            variant: "text-md/normal",
            color: "header-secondary",
            className: E.label
        }, _.default.Messages.OAUTH2_CONNECT_TO_DISCORD), I ? r.createElement("div", {
            className: E.currentUser
        }, r.createElement(a.Text, {
            variant: "text-sm/normal",
            color: "text-muted"
        }, _.default.Messages.OAUTH2_SIGNED_IN_AS.format({
            userHook: function() {
                return r.createElement(a.Text, {
                    key: n.id,
                    className: E.currentUserTag,
                    variant: "text-sm/normal"
                }, n.username, !n.isPomelo() && r.createElement(a.Text, {
                    className: E.currentUserDiscriminator,
                    variant: "text-sm/normal"
                }, "#".concat(n.discriminator)))
            }
        }), r.createElement(i.Clickable, {
            tag: "a",
            className: E.logoutLink,
            onClick: function() {
                return (0, c.logoutWithRedirect)(h)
            }
        }, _.default.Messages.OAUTH2_LOGOUT))) : null)
    }
}