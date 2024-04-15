function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("481060"),
        a = n("367907"),
        o = n("434404"),
        l = n("430824"),
        u = n("346656"),
        d = n("981631"),
        _ = n("689938"),
        c = n("903851");
    t.default = e => {
        let {
            guildId: t,
            reportId: n
        } = e, [E, I] = r.useState(!1), T = l.default.getGuild(t), f = null != T;
        r.useEffect(() => {
            I(!f)
        }, [f]);
        let S = r.useCallback(() => {
            I(!0), a.default.trackWithMetadata(d.AnalyticEvents.IAR_LEAVE_GUILD_BUTTON_CLICKED, {
                guild_id: t,
                report_id: n
            }), o.default.leaveGuild(t)
        }, [t, n]);
        if (null == T) return null;
        let h = () => {
            (0, s.openModal)(e => (0, i.jsx)(s.ConfirmModal, {
                header: _.default.Messages.LEAVE_SERVER_TITLE.format({
                    name: T.name
                }),
                confirmText: _.default.Messages.LEAVE_SERVER,
                cancelText: _.default.Messages.CANCEL,
                onConfirm: S,
                ...e,
                children: (0, i.jsx)(s.Text, {
                    variant: "text-md/normal",
                    children: _.default.Messages.LEAVE_SERVER_BODY.format({
                        name: T.name
                    })
                })
            }))
        };
        return (0, i.jsxs)("div", {
            className: c.container,
            children: [(0, i.jsx)(s.Text, {
                className: c.description,
                variant: "text-sm/normal",
                children: _.default.Messages.MOBILE_REPORTS_LEAVE_ELEMENT_DESCRIPTION
            }), (0, i.jsxs)("div", {
                className: c.guildContainer,
                children: [(0, i.jsxs)("div", {
                    className: c.guildInfo,
                    children: [(0, i.jsx)(u.default, {
                        guild: T,
                        showBadge: !1,
                        animate: !1,
                        size: u.default.Sizes.SMALL,
                        "aria-label": T.name,
                        className: c.icon,
                        active: !0
                    }), (0, i.jsx)(s.Text, {
                        className: c.guildName,
                        variant: "text-sm/semibold",
                        children: T.name
                    })]
                }), (0, i.jsx)(s.Button, {
                    onClick: () => h(),
                    disabled: E,
                    size: s.Button.Sizes.SMALL,
                    color: s.Button.Colors.RED,
                    children: E ? _.default.Messages.MOBILE_REPORTS_LEFT_SERVER : _.default.Messages.LEAVE_SERVER
                })]
            })]
        })
    }
}