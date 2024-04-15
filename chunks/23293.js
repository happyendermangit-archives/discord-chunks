function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return I
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("442837"),
        s = n("420660"),
        a = n("199902"),
        o = n("158776"),
        l = n("78675"),
        u = n("131640"),
        d = n("228168"),
        _ = n("981631"),
        c = n("231338"),
        E = n("247076");

    function I(e) {
        let {
            user: t,
            displayProfile: n,
            disableUserProfileLink: I,
            guildId: T,
            channelId: f,
            onClose: S
        } = e, {
            activity: A,
            status: h,
            isMobile: m
        } = (0, r.useStateFromStoresObject)([a.default, o.default], () => {
            let e = null != a.default.getAnyStreamForUser(t.id);
            return {
                activity: o.default.findActivity(t.id, t => {
                    let {
                        type: n
                    } = t;
                    return e ? n === _.ActivityTypes.PLAYING : n !== _.ActivityTypes.CUSTOM_STATUS
                }),
                status: o.default.getStatus(t.id),
                isMobile: o.default.isMobileOnline(t.id)
            }
        });
        return (0, i.jsxs)("header", {
            className: E.header,
            children: [(0, i.jsx)(l.default, {
                user: t,
                displayProfile: n,
                guildId: T,
                profileType: d.UserProfileTypes.BITE_SIZE,
                hasProfileEffect: (null == n ? void 0 : n.profileEffectId) != null
            }), (0, i.jsx)(u.UserPopoutAvatar, {
                user: t,
                displayProfile: n,
                status: (0, s.default)(A) ? c.StatusTypes.STREAMING : h,
                isMobile: m,
                guildId: T,
                channelId: f,
                onClose: S,
                disableUserProfileLink: I,
                hasBanner: (null == n ? void 0 : n.banner) != null,
                hasProfileEffect: (null == n ? void 0 : n.profileEffectId) != null,
                profileType: d.UserProfileTypes.BITE_SIZE
            }), (0, i.jsx)("div", {
                className: E.customStatus
            })]
        })
    }
}