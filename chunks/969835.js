function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return C
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("442837"),
        a = n("481060"),
        o = n("727637"),
        l = n("100527"),
        u = n("906732"),
        d = n("680295"),
        _ = n("271383"),
        c = n("785717"),
        E = n("318661"),
        I = n("502762"),
        T = n("705556"),
        f = n("301984"),
        S = n("664794"),
        h = n("980768"),
        A = n("171368"),
        m = n("958120"),
        N = n("23293"),
        p = n("228168"),
        O = n("689938");

    function R(e) {
        e.stopPropagation()
    }

    function C(e) {
        let {
            user: t,
            guildId: n,
            channelId: C,
            messageId: g,
            roleId: L,
            closePopout: D,
            setPopoutRef: v,
            disableUserProfileLink: M = __OVERLAY__,
            newAnalyticsLocations: y = []
        } = e, {
            analyticsLocations: P
        } = (0, u.default)([...y, l.default.BITE_SIZE_PROFILE_POPOUT]), U = (0, c.useTrackUserProfileAction)({
            layout: "BITE_SIZE_POPOUT",
            userId: t.id,
            guildId: n,
            channelId: C,
            messageId: g,
            roleId: L
        }), b = r.useRef(null), G = (0, E.default)(t.id, n), w = (0, o.default)(b), B = (0, s.useStateFromStores)([_.default], () => null != n ? _.default.getMember(n, t.id) : null);
        r.useEffect(() => {
            null == v || v(null == b ? void 0 : b.current)
        }, [b, v]);
        let k = e => {
            null == D || D(), (0, A.openUserProfileModal)({
                sourceAnalyticsLocations: P,
                userId: t.id,
                guildId: n,
                channelId: C,
                messageId: g,
                roleId: L,
                autoFocusNote: e
            })
        };
        return (0, i.jsx)(u.AnalyticsLocationProvider, {
            value: P,
            children: (0, i.jsx)(c.UserProfileAnalyticsProvider, {
                layout: "BITE_SIZE_POPOUT",
                userId: t.id,
                guildId: n,
                channelId: C,
                messageId: g,
                roleId: L,
                shouldTrackViewOnMount: null == B || null != B.fullProfileLoadedTimestamp,
                children: (0, i.jsxs)(a.Dialog, {
                    ref: b,
                    "aria-label": t.username,
                    onClick: R,
                    onContextMenu: R,
                    children: [(0, i.jsxs)(I.default, {
                        user: t,
                        displayProfile: G,
                        profileType: p.UserProfileTypes.BITE_SIZE,
                        children: [(0, i.jsxs)(h.default, {
                            isFaded: (null == G ? void 0 : G.profileEffectId) != null && !w,
                            children: [(0, i.jsx)(f.default, {
                                user: t
                            }), (0, i.jsx)(T.default, {
                                user: t,
                                guildId: n,
                                onClose: D
                            }), (0, i.jsx)(S.default, {
                                user: t,
                                guildId: n,
                                onClose: D,
                                viewProfileItem: (0, i.jsx)(a.MenuItem, {
                                    id: "view-profile",
                                    label: O.default.Messages.VIEW_FULL_PROFILE,
                                    action: () => {
                                        U({
                                            action: "PRESS_VIEW_PROFILE",
                                            analyticsLocations: P
                                        }), k()
                                    }
                                })
                            })]
                        }), (0, i.jsx)(N.default, {
                            user: t,
                            displayProfile: G,
                            guildId: n,
                            channelId: C,
                            onClose: D,
                            disableUserProfileLink: M
                        }), (0, i.jsx)(m.default, {
                            user: t,
                            displayProfile: G,
                            onOpenProfile: () => k(!0),
                            guildId: n,
                            channelId: C,
                            onClose: D
                        })]
                    }), (null == G ? void 0 : G.profileEffectId) != null && (0, i.jsx)(d.default, {
                        profileEffectId: null == G ? void 0 : G.profileEffectId,
                        bannerAdjustment: 0,
                        isHovering: w
                    })]
                })
            })
        })
    }
}