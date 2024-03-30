function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var r = n("470079"),
        o = n("22287"),
        i = n("556026"),
        a = n("135983"),
        u = n("784184"),
        s = n("281767"),
        l = n("941504"),
        c = n("91779");

    function f(e) {
        var t = e.error,
            n = e.selectedGuildId,
            f = e.onGuildChange,
            d = e.guilds,
            _ = e.disabled,
            E = d.filter(function(e) {
                return o.has(e.permissions, s.Permissions.MANAGE_GUILD)
            }).map(function(e) {
                return {
                    value: e.id,
                    label: e.name
                }
            });
        return r.createElement("div", {
            className: c.selectorGroup
        }, r.createElement(i.Heading, {
            variant: "heading-deprecated-12/semibold",
            className: c.sectionLabel
        }, l.default.Messages.OAUTH2_ADD_TO_GUILD), null != t && "" !== t ? r.createElement(a.Text, {
            variant: "text-xs/normal",
            color: "text-danger"
        }, t) : null, r.createElement(u.Select, {
            className: c.select,
            maxVisibleItems: 5,
            placeholder: l.default.Messages.OAUTH2_ADD_TO_GUILD_PLACEHOLDER,
            options: E,
            select: f,
            isDisabled: void 0 !== _ && _,
            isSelected: function(e) {
                return e === n
            },
            serialize: function(e) {
                return e
            }
        }), r.createElement(a.Text, {
            variant: "text-xs/medium",
            color: "header-secondary",
            className: c.label
        }, l.default.Messages.OAUTH2_ADD_TO_GUILD_DESCRIPTION.format()))
    }
}