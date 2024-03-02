function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var s = n("37983");
    n("884691");
    var i = n("316693"),
        r = n("605451"),
        a = n("577776"),
        o = n("77078"),
        d = n("49111"),
        u = n("782340"),
        l = n("590732");

    function f(e) {
        let {
            error: t,
            selectedGuildId: n,
            onGuildChange: f,
            guilds: _,
            disabled: c = !1
        } = e, g = _.filter(e => i.default.has(e.permissions, d.Permissions.MANAGE_GUILD)).map(e => ({
            value: e.id,
            label: e.name
        }));
        return (0, s.jsxs)("div", {
            className: l.selectorGroup,
            children: [(0, s.jsx)(r.Heading, {
                variant: "heading-deprecated-12/semibold",
                className: l.sectionLabel,
                children: u.default.Messages.OAUTH2_ADD_TO_GUILD
            }), null != t && "" !== t ? (0, s.jsx)(a.Text, {
                variant: "text-xs/normal",
                color: "text-danger",
                children: t
            }) : null, (0, s.jsx)(o.Select, {
                className: l.select,
                maxVisibleItems: 5,
                placeholder: u.default.Messages.OAUTH2_ADD_TO_GUILD_PLACEHOLDER,
                options: g,
                select: f,
                isDisabled: c,
                isSelected: e => e === n,
                serialize: e => e
            }), (0, s.jsx)(a.Text, {
                variant: "text-xs/medium",
                color: "header-secondary",
                className: l.label,
                children: u.default.Messages.OAUTH2_ADD_TO_GUILD_DESCRIPTION.format()
            })]
        })
    }
}