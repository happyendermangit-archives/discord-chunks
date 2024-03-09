function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    }), n("222007");
    var a = n("37983"),
        l = n("884691"),
        r = n("77078"),
        s = n("819689"),
        i = n("716241"),
        d = n("42203"),
        u = n("957255"),
        o = n("49111"),
        c = n("782340"),
        m = n("766541"),
        f = e => {
            let {
                message: t,
                reportId: n
            } = e, [f, _] = l.useState(!1), E = l.useCallback(() => {
                _(!0), i.default.trackWithMetadata(o.AnalyticEvents.IAR_DELETE_MESSAGE_BUTTON_CLICKED, {
                    report_id: n
                }), s.default.deleteMessage(t.getChannelId(), t.id)
            }, [t, n]), h = l.useMemo(() => {
                let e = d.default.getChannel(t.getChannelId());
                return null != e && e.type !== o.ChannelTypes.DM && e.type !== o.ChannelTypes.GROUP_DM && u.default.canWithPartialContext(o.Permissions.MANAGE_MESSAGES, {
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
                        disabled: f,
                        size: r.Button.Sizes.SMALL,
                        color: r.Button.Colors.RED,
                        children: f ? c.default.Messages.DELETED : c.default.Messages.DELETE
                    })]
                })
            }) : null
        }
}