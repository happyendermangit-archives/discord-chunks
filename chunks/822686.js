function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var a = n("735250"),
        l = n("470079"),
        r = n("481060"),
        s = n("904245"),
        i = n("367907"),
        d = n("592125"),
        o = n("496675"),
        u = n("981631"),
        c = n("689938"),
        m = n("303936");
    t.default = e => {
        let {
            message: t,
            reportId: n
        } = e, [_, f] = l.useState(!1), E = l.useCallback(() => {
            f(!0), i.default.trackWithMetadata(u.AnalyticEvents.IAR_DELETE_MESSAGE_BUTTON_CLICKED, {
                report_id: n
            }), s.default.deleteMessage(t.getChannelId(), t.id)
        }, [t, n]), h = l.useMemo(() => {
            let e = d.default.getChannel(t.getChannelId());
            return null != e && e.type !== u.ChannelTypes.DM && e.type !== u.ChannelTypes.GROUP_DM && o.default.canWithPartialContext(u.Permissions.MANAGE_MESSAGES, {
                channelId: e.id
            })
        }, [t]);
        return null != t && h ? (0, a.jsx)("div", {
            className: m.container,
            children: (0, a.jsxs)("div", {
                className: m.messageContainer,
                children: [(0, a.jsx)("div", {
                    className: m.description,
                    children: (0, a.jsx)(r.Text, {
                        variant: "text-sm/normal",
                        children: c.default.Messages.MOBILE_REPORTS_DELETE_MESSAGE_ELEMENT_DESCRIPTION
                    })
                }), (0, a.jsx)(r.Button, {
                    onClick: () => E(),
                    disabled: _,
                    size: r.Button.Sizes.SMALL,
                    color: r.Button.Colors.RED,
                    children: _ ? c.default.Messages.DELETED : c.default.Messages.DELETE
                })]
            })
        }) : null
    }
}