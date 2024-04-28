function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("442837"),
        o = n("420660"),
        l = n("199902"),
        u = n("158776"),
        d = n("78675"),
        _ = n("438163"),
        c = n("131640"),
        E = n("228168"),
        I = n("981631"),
        T = n("231338"),
        f = n("170022");

    function S(e) {
        let {
            user: t,
            displayProfile: n,
            disableUserProfileLink: r,
            guildId: S,
            channelId: h,
            onClose: A
        } = e, {
            activity: m,
            customStatusActivity: N,
            status: p,
            isMobile: O
        } = (0, a.useStateFromStoresObject)([l.default, u.default], () => {
            let e = null != l.default.getAnyStreamForUser(t.id);
            return {
                activity: u.default.findActivity(t.id, t => {
                    let {
                        type: n
                    } = t;
                    return e ? n === I.ActivityTypes.PLAYING : n !== I.ActivityTypes.CUSTOM_STATUS
                }),
                customStatusActivity: u.default.findActivity(t.id, e => {
                    let {
                        type: t
                    } = e;
                    return t === I.ActivityTypes.CUSTOM_STATUS
                }),
                status: u.default.getStatus(t.id),
                isMobile: u.default.isMobileOnline(t.id)
            }
        }), R = s()(f.header, {
            [f.noCustomStatusMargin]: null == N
        });
        return (0, i.jsxs)("header", {
            className: R,
            children: [(0, i.jsx)(d.default, {
                user: t,
                displayProfile: n,
                guildId: S,
                profileType: E.UserProfileTypes.BITE_SIZE,
                hasProfileEffect: (null == n ? void 0 : n.profileEffectId) != null
            }), (0, i.jsx)(c.UserPopoutAvatar, {
                user: t,
                displayProfile: n,
                status: (0, o.default)(m) ? T.StatusTypes.STREAMING : p,
                isMobile: O,
                guildId: S,
                channelId: h,
                onClose: A,
                disableUserProfileLink: r,
                hasBanner: (null == n ? void 0 : n.banner) != null,
                hasProfileEffect: (null == n ? void 0 : n.profileEffectId) != null,
                profileType: E.UserProfileTypes.BITE_SIZE
            }), null != N && (0, i.jsx)(_.UserProfileCustomStatusBubble, {
                statusActivity: N,
                profileType: E.UserProfileTypes.BITE_SIZE
            })]
        })
    }
}