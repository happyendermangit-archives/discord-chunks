function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("414456"),
        a = n.n(l),
        s = n("77078"),
        r = n("817963"),
        o = n("151185"),
        u = n("569717"),
        d = n("782340"),
        c = n("484574");

    function f(e) {
        let {
            guild: t,
            focused: n,
            ...l
        } = e, {
            canCreateExpressions: f
        } = (0, r.useManageResourcePermissions)(t);
        return (0, i.jsx)(s.Tooltip, {
            text: d.default.Messages.SOUNDBOARD_SOUND_UPLOAD_BUTTON_DISABLED,
            shouldShow: !f,
            children: e => (0, i.jsx)("li", {
                className: c.soundButtonWrapper,
                ...e,
                children: (0, i.jsxs)(s.ClickableContainer, {
                    ...l,
                    "aria-label": d.default.Messages.SOUNDBOARD_UPLOAD_SOUND_FOR_GUILD.format({
                        guildName: t.name
                    }),
                    className: a(c.soundAddButton, {
                        [c.focused]: n,
                        [c.disabled]: !f
                    }),
                    onClick: () => (0, u.default)(t.id),
                    children: [(0, i.jsx)(o.default, {
                        className: c.soundAddIcon
                    }), (0, i.jsx)(s.Text, {
                        variant: "text-xs/normal",
                        color: f ? "header-primary" : "text-muted",
                        children: d.default.Messages.SOUNDBOARD_SOUND_ADD_SOUND
                    })]
                })
            })
        })
    }
}