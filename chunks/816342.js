function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var a = n("735250"),
        l = n("470079"),
        r = n("442837"),
        s = n("481060"),
        i = n("194359"),
        d = n("367907"),
        o = n("699516"),
        u = n("594174"),
        c = n("82554"),
        m = n("981631"),
        _ = n("689938"),
        f = n("580999");
    t.default = e => {
        let {
            userId: t,
            reportId: n,
            reportName: E
        } = e, [h, v] = l.useState(!1), R = (0, r.useStateFromStores)([u.default], () => u.default.getUser(t), [t]), x = (0, r.useStateFromStores)([o.default], () => o.default.getRelationshipType(t), [t]) === m.RelationshipTypes.BLOCKED;
        l.useEffect(() => {
            v(x)
        }, [x]);
        let p = l.useCallback(() => {
            v(!0), d.default.trackWithMetadata(m.AnalyticEvents.IAR_BLOCK_USER_BUTTON_CLICKED, {
                other_user_id: t,
                report_id: n
            }), i.default.addRelationship({
                userId: t,
                context: {
                    location: "ReportMenuBlockUser-iOS"
                },
                type: m.RelationshipTypes.BLOCKED
            })
        }, [t, n]);
        return null == R ? null : (0, a.jsxs)("div", {
            className: f.container,
            children: [(0, a.jsx)(s.Text, {
                className: f.description,
                variant: "text-sm/normal",
                children: E === c.ReportNames.USER ? _.default.Messages.REPORTS_BLOCK_USER_ELEMENT_DESCRIPTION : _.default.Messages.MOBILE_REPORTS_BLOCK_ELEMENT_DESCRIPTION
            }), (0, a.jsxs)("div", {
                className: f.userContainer,
                children: [(0, a.jsxs)("div", {
                    className: f.userInfo,
                    children: [(0, a.jsx)(s.Avatar, {
                        size: s.AvatarSizes.SIZE_32,
                        src: R.getAvatarURL(void 0, 32),
                        className: f.avatar,
                        "aria-label": R.username
                    }), (0, a.jsx)(s.Text, {
                        className: f.userName,
                        variant: "text-sm/semibold",
                        children: R.username
                    }), !R.isPomelo() && (0, a.jsxs)(s.Text, {
                        variant: "text-sm/normal",
                        children: ["#", R.discriminator]
                    })]
                }), (0, a.jsx)(s.Button, {
                    onClick: () => p(),
                    disabled: h,
                    size: s.Button.Sizes.SMALL,
                    color: s.Button.Colors.RED,
                    children: h ? _.default.Messages.BLOCKED : _.default.Messages.BLOCK
                })]
            })]
        })
    }
}