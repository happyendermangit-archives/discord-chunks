function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    }), n("222007");
    var a = n("37983"),
        l = n("884691"),
        r = n("446674"),
        s = n("77078"),
        i = n("736964"),
        d = n("716241"),
        u = n("27618"),
        o = n("697218"),
        c = n("143618"),
        m = n("49111"),
        f = n("782340"),
        _ = n("217486"),
        E = e => {
            let {
                userId: t,
                reportId: n,
                reportName: E
            } = e, [h, v] = l.useState(!1), R = (0, r.useStateFromStores)([o.default], () => o.default.getUser(t), [t]), x = (0, r.useStateFromStores)([u.default], () => u.default.getRelationshipType(t), [t]) === m.RelationshipTypes.BLOCKED;
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
                className: _.container,
                children: [(0, a.jsx)(s.Text, {
                    className: _.description,
                    variant: "text-sm/normal",
                    children: E === c.ReportNames.USER ? f.default.Messages.REPORTS_BLOCK_USER_ELEMENT_DESCRIPTION : f.default.Messages.MOBILE_REPORTS_BLOCK_ELEMENT_DESCRIPTION
                }), (0, a.jsxs)("div", {
                    className: _.userContainer,
                    children: [(0, a.jsxs)("div", {
                        className: _.userInfo,
                        children: [(0, a.jsx)(s.Avatar, {
                            size: s.AvatarSizes.SIZE_32,
                            src: R.getAvatarURL(void 0, 32),
                            className: _.avatar,
                            "aria-label": R.username
                        }), (0, a.jsx)(s.Text, {
                            className: _.userName,
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
                        children: h ? f.default.Messages.BLOCKED : f.default.Messages.BLOCK
                    })]
                })]
            })
        }
}