function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var i = n("37983");
    n("884691");
    var s = n("316693"),
        r = n("605451"),
        a = n("577776"),
        o = n("77078"),
        l = n("49111"),
        u = n("782340"),
        d = n("590732");

    function c(e) {
        let {
            error: t,
            selectedGuildId: n,
            onGuildChange: c,
            guilds: f,
            disabled: _ = !1
        } = e, h = f.filter(e => s.default.has(e.permissions, l.Permissions.MANAGE_GUILD)).map(e => ({
            value: e.id,
            label: e.name
        }));
        return (0, i.jsxs)("div", {
            className: d.selectorGroup,
            children: [(0, i.jsx)(r.Heading, {
                variant: "heading-deprecated-12/semibold",
                className: d.sectionLabel,
                children: u.default.Messages.OAUTH2_ADD_TO_GUILD
            }), null != t && "" !== t ? (0, i.jsx)(a.Text, {
                variant: "text-xs/normal",
                color: "text-danger",
                children: t
            }) : null, (0, i.jsx)(o.Select, {
                className: d.select,
                maxVisibleItems: 5,
                placeholder: u.default.Messages.OAUTH2_ADD_TO_GUILD_PLACEHOLDER,
                options: h,
                select: c,
                isDisabled: _,
                isSelected: e => e === n,
                serialize: e => e
            }), (0, i.jsx)(a.Text, {
                variant: "text-xs/medium",
                color: "header-secondary",
                className: d.label,
                children: u.default.Messages.OAUTH2_ADD_TO_GUILD_DESCRIPTION.format()
            })]
        })
    }
}