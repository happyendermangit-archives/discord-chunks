function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return L
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
        c = n("430824"),
        E = n("594174"),
        I = n("785717"),
        T = n("318661"),
        f = n("502762"),
        S = n("301984"),
        h = n("94918"),
        A = n("664794"),
        m = n("980768"),
        N = n("171368"),
        p = n("958120"),
        O = n("23293"),
        R = n("228168"),
        C = n("689938");

    function g(e) {
        e.stopPropagation()
    }

    function L(e) {
        let {
            user: t,
            guildId: n,
            channelId: L,
            messageId: D,
            roleId: v,
            closePopout: M,
            setPopoutRef: y,
            disableUserProfileLink: P = __OVERLAY__,
            newAnalyticsLocations: U = []
        } = e, {
            analyticsLocations: b
        } = (0, u.default)([...U, l.default.BITE_SIZE_PROFILE_POPOUT]), G = (0, I.useTrackUserProfileAction)({
            layout: "BITE_SIZE_POPOUT",
            userId: t.id,
            guildId: n,
            channelId: L,
            messageId: D,
            roleId: v
        }), w = (0, s.useStateFromStores)([E.default], () => E.default.getCurrentUser()), k = (0, s.useStateFromStores)([c.default], () => null != n ? c.default.getGuild(n) : null), B = (0, s.useStateFromStores)([_.default], () => null != n ? _.default.getMember(n, t.id) : null), V = r.useRef(null), x = (0, T.default)(t.id, n), F = (0, o.default)(V);
        r.useEffect(() => {
            null == y || y(null == V ? void 0 : V.current)
        }, [V, y]);
        let H = e => {
            null == M || M(), (0, N.openUserProfileModal)({
                sourceAnalyticsLocations: b,
                userId: t.id,
                guildId: n,
                channelId: L,
                messageId: D,
                roleId: v,
                autoFocusNote: e
            })
        };
        return null == w ? null : (0, i.jsx)(u.AnalyticsLocationProvider, {
            value: b,
            children: (0, i.jsx)(I.UserProfileAnalyticsProvider, {
                layout: "BITE_SIZE_POPOUT",
                userId: t.id,
                guildId: n,
                channelId: L,
                messageId: D,
                roleId: v,
                shouldTrackViewOnMount: null == B || null != B.fullProfileLoadedTimestamp,
                children: (0, i.jsxs)(a.Dialog, {
                    ref: V,
                    "aria-label": t.username,
                    onClick: g,
                    onContextMenu: g,
                    children: [(0, i.jsxs)(f.default, {
                        user: t,
                        displayProfile: x,
                        profileType: R.UserProfileTypes.BITE_SIZE,
                        children: [(0, i.jsxs)(m.default, {
                            isFaded: (null == x ? void 0 : x.profileEffectId) != null && !F,
                            children: [(0, i.jsx)(h.default, {
                                user: t,
                                guildId: n,
                                channelId: L,
                                onClose: M
                            }), (0, i.jsx)(S.default, {
                                user: t
                            }), (0, i.jsx)(A.default, {
                                user: t,
                                guildId: n,
                                viewProfileItem: (0, i.jsx)(a.MenuItem, {
                                    id: "view-profile",
                                    label: C.default.Messages.VIEW_FULL_PROFILE,
                                    action: () => {
                                        G({
                                            action: "PRESS_VIEW_PROFILE",
                                            analyticsLocations: b
                                        }), H()
                                    }
                                })
                            })]
                        }), (0, i.jsx)(O.default, {
                            user: t,
                            displayProfile: x,
                            guildId: n,
                            channelId: L,
                            onClose: M,
                            disableUserProfileLink: P
                        }), (0, i.jsx)(p.default, {
                            user: t,
                            currentUser: w,
                            displayProfile: x,
                            guild: k,
                            onOpenProfile: H,
                            channelId: L,
                            onClose: M
                        })]
                    }), (null == x ? void 0 : x.profileEffectId) != null && (0, i.jsx)(d.default, {
                        profileEffectId: null == x ? void 0 : x.profileEffectId,
                        bannerAdjustment: 0,
                        isHovering: F
                    })]
                })
            })
        })
    }
}