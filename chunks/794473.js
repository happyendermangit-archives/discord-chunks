function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return O
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("571979"),
        u = n("2489"),
        s = n("181951"),
        l = n("852772"),
        c = n("784184"),
        f = n("938752"),
        d = n("379698"),
        _ = n("299529"),
        E = n("481971"),
        p = n("281767"),
        m = n("962839"),
        y = n("118891"),
        I = n("941504"),
        h = n("593275");

    function O(e) {
        var t = e.inApp,
            n = e.application,
            o = e.onSelect,
            O = r.useMemo(function() {
                return _.default.getApplicationIconURL({
                    id: n.id,
                    icon: n.icon
                })
            }, [n.icon, n.id]),
            T = r.useMemo(function() {
                return [{
                    type: a.ApplicationIntegrationType.USER_INSTALL,
                    icon: (0, l.UserPlusIcon),
                    title: I.default.Messages.OAUTH2_INTEGRATION_SELECT_USER,
                    subtitle: I.default.Messages.OAUTH2_INTEGRATION_SELECT_USER_SUBTITLE,
                    beta: !0
                }, {
                    type: a.ApplicationIntegrationType.GUILD_INSTALL,
                    icon: (0, s.ServerIcon),
                    title: I.default.Messages.OAUTH2_INTEGRATION_SELECT_GUILD,
                    subtitle: I.default.Messages.OAUTH2_INTEGRATION_SELECT_GUILD_SUBTITLE,
                    beta: !1
                }].filter(function(e) {
                    var t, r;
                    return (null === (r = n.integrationTypesConfig) || void 0 === r ? void 0 : null === (t = r[e.type]) || void 0 === t ? void 0 : t.oauth2InstallParams) != null
                })
            }, [n.integrationTypesConfig]);
        return r.createElement("div", {
            className: h.container
        }, r.createElement("div", {
            className: h.header
        }, r.createElement(u.Avatar, {
            src: O,
            size: m.AvatarSizes.SIZE_80,
            "aria-label": n.name
        }), r.createElement(c.Heading, {
            variant: "heading-xl/bold",
            color: "header-primary"
        }, n.name)), r.createElement("ul", {
            className: h.rows
        }, T.map(function(e) {
            var n, a, u;
            return r.createElement(c.Clickable, {
                tag: "li",
                key: e.type,
                className: i()(h.row, (n = {}, a = h.inApp, u = t, a in n ? Object.defineProperty(n, a, {
                    value: u,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[a] = u, n)),
                onClick: function() {
                    return o(e.type)
                }
            }, r.createElement(e.icon, {
                width: 24,
                height: 24,
                className: h.leftIcon
            }), r.createElement("div", {
                className: h.rowInner
            }, r.createElement("div", {
                className: h.rowDetails
            }, r.createElement(c.Text, {
                variant: "text-md/medium",
                color: "interactive-active"
            }, e.title), r.createElement(c.Text, {
                variant: "text-xs/medium",
                color: "text-muted"
            }, e.subtitle)), e.beta && r.createElement(f.default, null), r.createElement(d.default, {
                className: h.rightIcon
            })))
        })), r.createElement(c.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            className: h.learnMore
        }, I.default.Messages.OAUTH2_INTEGRATION_SELECT_DETAILS.format({
            betaUserLimit: y.APPLICATION_USER_INSTALL_BETA_USER_LIMIT,
            learnMoreUrl: E.default.getArticleURL(p.HelpdeskArticles.USING_APPS_FAQ)
        })))
    }
}