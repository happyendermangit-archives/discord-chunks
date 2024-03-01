function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return v
        }
    });
    var s = n("37983"),
        i = n("884691"),
        r = n("414456"),
        a = n.n(r),
        o = n("891189"),
        d = n("913365"),
        u = n("31745"),
        l = n("542238"),
        f = n("77078"),
        _ = n("772280"),
        c = n("315102"),
        g = n("52904"),
        m = n("782340"),
        h = n("146482");

    function v(e) {
        let {
            inApp: t,
            application: n,
            onSelect: r
        } = e, v = i.useMemo(() => c.default.getApplicationIconURL({
            id: n.id,
            icon: n.icon
        }), [n.icon, n.id]), E = i.useMemo(() => [{
            type: o.ApplicationIntegrationType.USER_INSTALL,
            icon: (0, u.CirclePlusIcon),
            title: m.default.Messages.ADD_TO_USER,
            subtitle: m.default.Messages.ADD_TO_USER_SUBTITLE
        }, {
            type: o.ApplicationIntegrationType.GUILD_INSTALL,
            icon: (0, l.ServerIcon),
            title: m.default.Messages.ADD_TO_GUILD,
            subtitle: m.default.Messages.ADD_TO_GUILD_SUBTITLE
        }].filter(e => {
            var t, s;
            return (null === (s = n.integrationTypesConfig) || void 0 === s ? void 0 : null === (t = s[e.type]) || void 0 === t ? void 0 : t.oauth2InstallParams) != null
        }), [n.integrationTypesConfig]);
        return (0, s.jsxs)("div", {
            className: h.container,
            children: [(0, s.jsxs)("div", {
                className: h.header,
                children: [(0, s.jsx)(d.Avatar, {
                    src: v,
                    size: g.AvatarSizes.SIZE_80,
                    "aria-label": n.name
                }), (0, s.jsx)(f.Heading, {
                    variant: "heading-xl/bold",
                    color: "header-primary",
                    children: n.name
                })]
            }), (0, s.jsx)("div", {
                children: E.map(e => (0, s.jsxs)(f.Clickable, {
                    className: a(h.row, {
                        [h.inApp]: t
                    }),
                    onClick: () => r(e.type),
                    children: [(0, s.jsx)(e.icon, {
                        className: h.leftIcon
                    }), (0, s.jsxs)("div", {
                        children: [(0, s.jsx)(f.Text, {
                            variant: "text-md/medium",
                            color: "interactive-active",
                            children: e.title
                        }), (0, s.jsx)(f.Text, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: e.subtitle
                        })]
                    }), (0, s.jsx)(_.default, {
                        width: 12,
                        height: 12,
                        className: h.rightIcon
                    })]
                }, e.type))
            }), (0, s.jsx)(f.Text, {
                variant: "text-xs/semibold",
                color: "text-muted",
                className: h.learnMore,
                children: m.default.Messages.USER_APPS_LEARN_MORE.format({
                    helpUrl: "https://support.discord.com/hc/en-us/articles/360045093012-Server-Integrations-Page"
                })
            })]
        })
    }
}