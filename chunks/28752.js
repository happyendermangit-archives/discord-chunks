function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return N
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("373793"),
        l = n("974674"),
        u = n("40146"),
        d = n("780014"),
        _ = n("481060"),
        c = n("688465"),
        E = n("692437"),
        I = n("768581"),
        T = n("63063"),
        f = n("981631"),
        S = n("182294"),
        h = n("689079"),
        A = n("689938"),
        m = n("844703");

    function N(e) {
        let {
            inApp: t,
            application: n,
            onSelect: s
        } = e, N = r.useMemo(() => I.default.getApplicationIconURL({
            id: n.id,
            icon: n.icon
        }), [n.icon, n.id]), p = r.useMemo(() => [{
            type: o.ApplicationIntegrationType.USER_INSTALL,
            icon: (0, d.UserPlusIcon),
            title: A.default.Messages.OAUTH2_INTEGRATION_SELECT_USER,
            subtitle: A.default.Messages.OAUTH2_INTEGRATION_SELECT_USER_SUBTITLE,
            beta: !0
        }, {
            type: o.ApplicationIntegrationType.GUILD_INSTALL,
            icon: (0, u.ServerIcon),
            title: A.default.Messages.OAUTH2_INTEGRATION_SELECT_GUILD,
            subtitle: A.default.Messages.OAUTH2_INTEGRATION_SELECT_GUILD_SUBTITLE,
            beta: !1
        }].filter(e => {
            var t, i;
            return (null === (i = n.integrationTypesConfig) || void 0 === i ? void 0 : null === (t = i[e.type]) || void 0 === t ? void 0 : t.oauth2InstallParams) != null
        }), [n.integrationTypesConfig]);
        return (0, i.jsxs)("div", {
            className: m.container,
            children: [(0, i.jsxs)("div", {
                className: m.header,
                children: [(0, i.jsx)(l.Avatar, {
                    src: N,
                    size: S.AvatarSizes.SIZE_80,
                    "aria-label": n.name
                }), (0, i.jsx)(_.Heading, {
                    variant: "heading-xl/bold",
                    color: "header-primary",
                    children: n.name
                })]
            }), (0, i.jsx)("ul", {
                className: m.rows,
                children: p.map(e => (0, i.jsxs)(_.Clickable, {
                    tag: "li",
                    className: a()(m.row, {
                        [m.inApp]: t
                    }),
                    onClick: () => s(e.type),
                    children: [(0, i.jsx)(e.icon, {
                        width: 24,
                        height: 24,
                        className: m.leftIcon
                    }), (0, i.jsxs)("div", {
                        className: m.rowInner,
                        children: [(0, i.jsxs)("div", {
                            className: m.rowDetails,
                            children: [(0, i.jsx)(_.Text, {
                                variant: "text-md/medium",
                                color: "interactive-active",
                                children: e.title
                            }), (0, i.jsx)(_.Text, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: e.subtitle
                            })]
                        }), e.beta && (0, i.jsx)(c.default, {}), (0, i.jsx)(E.default, {
                            className: m.rightIcon
                        })]
                    })]
                }, e.type))
            }), (0, i.jsx)(_.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: m.learnMore,
                children: A.default.Messages.OAUTH2_INTEGRATION_SELECT_DETAILS.format({
                    betaUserLimit: h.APPLICATION_USER_INSTALL_BETA_USER_LIMIT,
                    learnMoreUrl: T.default.getArticleURL(f.HelpdeskArticles.USING_APPS_FAQ)
                })
            })]
        })
    }
}