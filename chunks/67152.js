function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("481060"),
        a = n("906732"),
        o = n("785717"),
        l = n("588822"),
        u = n("171368"),
        d = n("981631"),
        _ = n("689938"),
        c = n("772723");
    t.default = r.memo(function(e) {
        let {
            user: t,
            onClose: n,
            bio: E,
            hidePersonalInformation: I
        } = e, {
            guildId: T,
            channelId: f,
            messageId: S,
            roleId: h
        } = (0, o.useUserProfileAnalyticsContext)(), {
            analyticsLocations: A
        } = (0, a.default)(), [m, N] = r.useState(!1);
        return I || null == E || "" === E ? null : (0, i.jsxs)("div", {
            className: c.container,
            children: [(0, i.jsx)("div", {
                ref: e => {
                    null != e && N(e.scrollHeight - e.clientHeight > 1)
                },
                className: c.descriptionClamp,
                children: (0, i.jsx)(l.default, {
                    userBio: E,
                    setLineClamp: !1
                })
            }), m && (0, i.jsx)(s.Clickable, {
                onClick: () => {
                    null == n || n(), (0, u.openUserProfileModal)({
                        userId: t.id,
                        guildId: null != T ? T : void 0,
                        channelId: null != f ? f : void 0,
                        messageId: null != S ? S : void 0,
                        roleId: null != h ? h : void 0,
                        analyticsLocation: {
                            section: d.AnalyticsSections.BITE_SIZE_PROFILE_POPOUT
                        },
                        sourceAnalyticsLocations: A
                    })
                },
                className: c.seeMoreText,
                children: (0, i.jsx)(s.Text, {
                    variant: "text-sm/normal",
                    children: _.default.Messages.BITE_SIZE_PROFILE_BIO_SEE_MORE
                })
            })]
        })
    })
}