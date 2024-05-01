function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("481060"),
        o = n("889161"),
        l = n("729285"),
        u = n("343747"),
        d = n("689938"),
        _ = n("818178");

    function c(e) {
        let {
            guild: t,
            focused: n,
            ...r
        } = e, {
            canCreateExpressions: c
        } = (0, o.useManageResourcePermissions)(t);
        return (0, i.jsx)(a.Tooltip, {
            text: d.default.Messages.SOUNDBOARD_SOUND_UPLOAD_BUTTON_DISABLED,
            shouldShow: !c,
            children: e => (0, i.jsx)("li", {
                className: _.soundButtonWrapper,
                ...e,
                children: (0, i.jsxs)(a.ClickableContainer, {
                    ...r,
                    "aria-label": d.default.Messages.SOUNDBOARD_UPLOAD_SOUND_FOR_GUILD.format({
                        guildName: t.name
                    }),
                    className: s()(_.soundAddButton, {
                        [_.focused]: n,
                        [_.disabled]: !c
                    }),
                    onClick: () => (0, u.default)(t.id),
                    children: [(0, i.jsx)(l.default, {
                        className: _.soundAddIcon
                    }), (0, i.jsx)(a.Text, {
                        variant: "text-xs/normal",
                        color: c ? "header-primary" : "text-muted",
                        children: d.default.Messages.SOUNDBOARD_SOUND_ADD_SOUND
                    })]
                })
            })
        })
    }
}