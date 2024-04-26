function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("149765"),
        s = n("260034"),
        a = n("993365"),
        o = n("481060"),
        l = n("981631"),
        u = n("689938"),
        d = n("872272");

    function _(e) {
        let {
            error: t,
            selectedGuildId: n,
            onGuildChange: _,
            guilds: c,
            disabled: E = !1
        } = e, I = c.filter(e => r.has(e.permissions, l.Permissions.MANAGE_GUILD)).map(e => ({
            value: e.id,
            label: e.name
        }));
        return (0, i.jsxs)("div", {
            className: d.selectorGroup,
            children: [(0, i.jsx)(s.Heading, {
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
                options: I,
                select: _,
                isDisabled: E,
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