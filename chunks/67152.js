function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("481060"),
        a = n("906732"),
        o = n("692437"),
        l = n("785717"),
        u = n("588822"),
        d = n("171368"),
        _ = n("981631"),
        c = n("689938"),
        E = n("772723");
    t.default = r.memo(function(e) {
        let {
            user: t,
            onClose: n,
            bio: I,
            hidePersonalInformation: T
        } = e, {
            guildId: f,
            channelId: S,
            messageId: h,
            roleId: A
        } = (0, l.useUserProfileAnalyticsContext)(), {
            analyticsLocations: m
        } = (0, a.default)(), [N, p] = r.useState(!1);
        return T || null == I || "" === I ? null : (0, i.jsxs)("div", {
            children: [(0, i.jsx)("div", {
                ref: e => {
                    null != e && p(e.scrollHeight - e.clientHeight > 1)
                },
                className: E.descriptionClamp,
                children: (0, i.jsx)(u.default, {
                    userBio: I,
                    setLineClamp: !1
                })
            }), N && (0, i.jsxs)(s.Clickable, {
                onClick: () => {
                    null == n || n(), (0, d.openUserProfileModal)({
                        userId: t.id,
                        guildId: null != f ? f : void 0,
                        channelId: null != S ? S : void 0,
                        messageId: null != h ? h : void 0,
                        roleId: null != A ? A : void 0,
                        analyticsLocation: {
                            section: _.AnalyticsSections.BITE_SIZE_PROFILE_POPOUT
                        },
                        sourceAnalyticsLocations: m
                    })
                },
                className: E.seeMoreText,
                children: [(0, i.jsx)(s.Text, {
                    variant: "text-xs/normal",
                    children: c.default.Messages.USER_PROFILE_VIEW_FULL_BIO
                }), (0, i.jsx)(o.default, {
                    width: 16,
                    height: 16,
                    color: "var(--interactive-normal)"
                })]
            })]
        })
    })
}