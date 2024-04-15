function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("481060"),
        a = n("904245"),
        o = n("367907"),
        l = n("592125"),
        u = n("496675"),
        d = n("981631"),
        _ = n("689938"),
        c = n("303936");
    t.default = e => {
        let {
            message: t,
            reportId: n
        } = e, [E, I] = r.useState(!1), T = r.useCallback(() => {
            I(!0), o.default.trackWithMetadata(d.AnalyticEvents.IAR_DELETE_MESSAGE_BUTTON_CLICKED, {
                report_id: n
            }), a.default.deleteMessage(t.getChannelId(), t.id)
        }, [t, n]), f = r.useMemo(() => {
            let e = l.default.getChannel(t.getChannelId());
            return null != e && e.type !== d.ChannelTypes.DM && e.type !== d.ChannelTypes.GROUP_DM && u.default.canWithPartialContext(d.Permissions.MANAGE_MESSAGES, {
                channelId: e.id
            })
        }, [t]);
        return null != t && f ? (0, i.jsx)("div", {
            className: c.container,
            children: (0, i.jsxs)("div", {
                className: c.messageContainer,
                children: [(0, i.jsx)("div", {
                    className: c.description,
                    children: (0, i.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        children: _.default.Messages.MOBILE_REPORTS_DELETE_MESSAGE_ELEMENT_DESCRIPTION
                    })
                }), (0, i.jsx)(s.Button, {
                    onClick: () => T(),
                    disabled: E,
                    size: s.Button.Sizes.SMALL,
                    color: s.Button.Colors.RED,
                    children: E ? _.default.Messages.DELETED : _.default.Messages.DELETE
                })]
            })
        }) : null
    }
}