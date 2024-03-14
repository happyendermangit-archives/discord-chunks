function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
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
        f = n("772280"),
        _ = n("315102"),
        E = n("52904"),
        h = n("782340"),
        g = n("146482");

    function m(e) {
        let {
            inApp: t,
            application: n,
            onSelect: r
        } = e, m = s.useMemo(() => _.default.getApplicationIconURL({
            id: n.id,
            icon: n.icon
        }), [n.icon, n.id]), p = s.useMemo(() => [{
            type: o.ApplicationIntegrationType.USER_INSTALL,
            icon: (0, d.UserPlusIcon),
            title: h.default.Messages.ADD_TO_USER,
            subtitle: h.default.Messages.ADD_TO_USER_SUBTITLE
        }, {
            type: o.ApplicationIntegrationType.GUILD_INSTALL,
            icon: (0, u.ServerIcon),
            title: h.default.Messages.ADD_TO_GUILD,
            subtitle: h.default.Messages.ADD_TO_GUILD_SUBTITLE
        }].filter(e => {
            var t, i;
            return (null === (i = n.integrationTypesConfig) || void 0 === i ? void 0 : null === (t = i[e.type]) || void 0 === t ? void 0 : t.oauth2InstallParams) != null
        }), [n.integrationTypesConfig]);
        return (0, i.jsxs)("div", {
            className: g.container,
            children: [(0, i.jsxs)("div", {
                className: g.header,
                children: [(0, i.jsx)(l.Avatar, {
                    src: m,
                    size: E.AvatarSizes.SIZE_80,
                    "aria-label": n.name
                }), (0, i.jsx)(c.Heading, {
                    variant: "heading-xl/bold",
                    color: "header-primary",
                    children: n.name
                })]
            }), (0, i.jsx)("div", {
                children: p.map(e => (0, i.jsxs)(c.Clickable, {
                    className: a(g.row, {
                        [g.inApp]: t
                    }),
                    onClick: () => r(e.type),
                    children: [(0, i.jsx)(e.icon, {
                        className: g.leftIcon
                    }), (0, i.jsxs)("div", {
                        children: [(0, i.jsx)(c.Text, {
                            variant: "text-md/medium",
                            color: "interactive-active",
                            children: e.title
                        }), (0, i.jsx)(c.Text, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: e.subtitle
                        })]
                    }), (0, i.jsx)(f.default, {
                        width: 12,
                        height: 12,
                        className: g.rightIcon
                    })]
                }, e.type))
            }), (0, i.jsx)(c.Text, {
                variant: "text-xs/semibold",
                color: "text-muted",
                className: g.learnMore,
                children: h.default.Messages.USER_APPS_LEARN_MORE.format({
                    helpUrl: "https://support.discord.com/hc/en-us/articles/360045093012-Server-Integrations-Page"
                })
            })]
        })
    }
}