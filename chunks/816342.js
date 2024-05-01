function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        a = n("442837"),
        s = n("481060"),
        o = n("194359"),
        l = n("367907"),
        u = n("699516"),
        d = n("594174"),
        _ = n("82554"),
        c = n("981631"),
        E = n("689938"),
        I = n("468372");
    t.default = e => {
        let {
            userId: t,
            reportId: n,
            reportName: T
        } = e, [f, S] = r.useState(!1), h = (0, a.useStateFromStores)([d.default], () => d.default.getUser(t), [t]), A = (0, a.useStateFromStores)([u.default], () => u.default.getRelationshipType(t), [t]) === c.RelationshipTypes.BLOCKED;
        r.useEffect(() => {
            S(A)
        }, [A]);
        let m = r.useCallback(() => {
            S(!0), l.default.trackWithMetadata(c.AnalyticEvents.IAR_BLOCK_USER_BUTTON_CLICKED, {
                other_user_id: t,
                report_id: n
            }), o.default.addRelationship({
                userId: t,
                context: {
                    location: "ReportMenuBlockUser-iOS"
                },
                type: c.RelationshipTypes.BLOCKED
            })
        }, [t, n]);
        return null == h ? null : (0, i.jsxs)("div", {
            className: I.container,
            children: [(0, i.jsx)(s.Text, {
                className: I.description,
                variant: "text-sm/normal",
                children: T === _.ReportNames.USER ? E.default.Messages.REPORTS_BLOCK_USER_ELEMENT_DESCRIPTION : E.default.Messages.MOBILE_REPORTS_BLOCK_ELEMENT_DESCRIPTION
            }), (0, i.jsxs)("div", {
                className: I.userContainer,
                children: [(0, i.jsxs)("div", {
                    className: I.userInfo,
                    children: [(0, i.jsx)(s.Avatar, {
                        size: s.AvatarSizes.SIZE_32,
                        src: h.getAvatarURL(void 0, 32),
                        className: I.avatar,
                        "aria-label": h.username
                    }), (0, i.jsx)(s.Text, {
                        className: I.userName,
                        variant: "text-sm/semibold",
                        children: h.username
                    }), !h.isPomelo() && (0, i.jsxs)(s.Text, {
                        variant: "text-sm/normal",
                        children: ["#", h.discriminator]
                    })]
                }), (0, i.jsx)(s.Button, {
                    onClick: () => m(),
                    disabled: f,
                    size: s.Button.Sizes.SMALL,
                    color: s.Button.Colors.RED,
                    children: f ? E.default.Messages.BLOCKED : E.default.Messages.BLOCK
                })]
            })]
        })
    }
}