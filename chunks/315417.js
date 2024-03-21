function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return v
        }
    });
    var i = n("37983"),
        s = n("884691"),
        r = n("414456"),
        a = n.n(r),
        o = n("891189"),
        l = n("913365"),
        u = n("542238"),
        d = n("715072"),
        c = n("77078"),
        _ = n("298878"),
        f = n("772280"),
        E = n("315102"),
        h = n("701909"),
        g = n("49111"),
        m = n("52904"),
        p = n("317041"),
        S = n("782340"),
        T = n("146482");

    function v(e) {
        let {
            inApp: t,
            application: n,
            onSelect: r
        } = e, v = s.useMemo(() => E.default.getApplicationIconURL({
            id: n.id,
            icon: n.icon
        }), [n.icon, n.id]), I = s.useMemo(() => [{
            type: o.ApplicationIntegrationType.USER_INSTALL,
            icon: (0, d.UserPlusIcon),
            title: S.default.Messages.OAUTH2_INTEGRATION_SELECT_USER,
            subtitle: S.default.Messages.OAUTH2_INTEGRATION_SELECT_USER_SUBTITLE,
            beta: !0
        }, {
            type: o.ApplicationIntegrationType.GUILD_INSTALL,
            icon: (0, u.ServerIcon),
            title: S.default.Messages.OAUTH2_INTEGRATION_SELECT_GUILD,
            subtitle: S.default.Messages.OAUTH2_INTEGRATION_SELECT_GUILD_SUBTITLE,
            beta: !1
        }].filter(e => {
            var t, i;
            return (null === (i = n.integrationTypesConfig) || void 0 === i ? void 0 : null === (t = i[e.type]) || void 0 === t ? void 0 : t.oauth2InstallParams) != null
        }), [n.integrationTypesConfig]);
        return (0, i.jsxs)("div", {
            className: T.container,
            children: [(0, i.jsxs)("div", {
                className: T.header,
                children: [(0, i.jsx)(l.Avatar, {
                    src: v,
                    size: m.AvatarSizes.SIZE_80,
                    "aria-label": n.name
                }), (0, i.jsx)(c.Heading, {
                    variant: "heading-xl/bold",
                    color: "header-primary",
                    children: n.name
                })]
            }), (0, i.jsx)("ul", {
                className: T.rows,
                children: I.map(e => (0, i.jsxs)(c.Clickable, {
                    tag: "li",
                    className: a(T.row, {
                        [T.inApp]: t
                    }),
                    onClick: () => r(e.type),
                    children: [(0, i.jsx)(e.icon, {
                        width: 24,
                        height: 24,
                        className: T.leftIcon
                    }), (0, i.jsxs)("div", {
                        className: T.rowInner,
                        children: [(0, i.jsxs)("div", {
                            className: T.rowDetails,
                            children: [(0, i.jsx)(c.Text, {
                                variant: "text-md/medium",
                                color: "interactive-active",
                                children: e.title
                            }), (0, i.jsx)(c.Text, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: e.subtitle
                            })]
                        }), e.beta && (0, i.jsx)(_.default, {}), (0, i.jsx)(f.default, {
                            className: T.rightIcon
                        })]
                    })]
                }, e.type))
            }), (0, i.jsx)(c.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: T.learnMore,
                children: S.default.Messages.OAUTH2_INTEGRATION_SELECT_DETAILS.format({
                    betaUserLimit: p.APPLICATION_USER_INSTALL_BETA_USER_LIMIT,
                    learnMoreUrl: h.default.getArticleURL(g.HelpdeskArticles.USING_APPS_FAQ)
                })
            })]
        })
    }
}