function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return T
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("442837"),
        a = n("420660"),
        s = n("199902"),
        o = n("158776"),
        l = n("78675"),
        u = n("438163"),
        d = n("131640"),
        _ = n("228168"),
        c = n("981631"),
        E = n("231338"),
        I = n("821301");

    function T(e) {
        let {
            user: t,
            displayProfile: n,
            disableUserProfileLink: T,
            guildId: f,
            channelId: S,
            onClose: h
        } = e, {
            activity: A,
            customStatusActivity: m,
            status: N,
            isMobile: p
        } = (0, r.useStateFromStoresObject)([s.default, o.default], () => {
            let e = null != s.default.getAnyStreamForUser(t.id);
            return {
                activity: o.default.findActivity(t.id, t => {
                    let {
                        type: n
                    } = t;
                    return e ? n === c.ActivityTypes.PLAYING : n !== c.ActivityTypes.CUSTOM_STATUS
                }),
                customStatusActivity: o.default.findActivity(t.id, e => {
                    let {
                        type: t
                    } = e;
                    return t === c.ActivityTypes.CUSTOM_STATUS
                }),
                status: o.default.getStatus(t.id),
                isMobile: o.default.isMobileOnline(t.id)
            }
        });
        return (0, i.jsxs)("header", {
            className: I.header,
            children: [(0, i.jsx)(l.default, {
                user: t,
                displayProfile: n,
                guildId: f,
                profileType: _.UserProfileTypes.BITE_SIZE,
                hasProfileEffect: (null == n ? void 0 : n.profileEffectId) != null
            }), (0, i.jsx)(d.UserPopoutAvatar, {
                user: t,
                displayProfile: n,
                status: (0, a.default)(A) ? E.StatusTypes.STREAMING : N,
                isMobile: p,
                guildId: f,
                channelId: S,
                onClose: h,
                disableUserProfileLink: T,
                hasBanner: (null == n ? void 0 : n.banner) != null,
                hasProfileEffect: (null == n ? void 0 : n.profileEffectId) != null,
                profileType: _.UserProfileTypes.BITE_SIZE
            }), (0, i.jsx)(u.UserProfileCustomStatusBubble, {
                user: t,
                statusActivity: m,
                profileType: _.UserProfileTypes.BITE_SIZE,
                onClose: h
            })]
        })
    }
}