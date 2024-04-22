function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return R
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
        T = n("301984"),
        f = n("664794"),
        S = n("980768"),
        h = n("171368"),
        A = n("958120"),
        m = n("23293"),
        N = n("228168"),
        p = n("689938");

    function O(e) {
        e.stopPropagation()
    }

    function R(e) {
        let {
            user: t,
            guildId: n,
            channelId: R,
            messageId: C,
            roleId: g,
            closePopout: L,
            setPopoutRef: D,
            disableUserProfileLink: v = __OVERLAY__,
            newAnalyticsLocations: M = []
        } = e, {
            analyticsLocations: y
        } = (0, u.default)([...M, l.default.BITE_SIZE_PROFILE_POPOUT]), P = (0, c.useTrackUserProfileAction)({
            layout: "BITE_SIZE_POPOUT",
            userId: t.id,
            guildId: n,
            channelId: R,
            messageId: C,
            roleId: g
        }), U = r.useRef(null), b = (0, E.default)(t.id, n), G = (0, o.default)(U), w = (0, s.useStateFromStores)([_.default], () => null != n ? _.default.getMember(n, t.id) : null);
        r.useEffect(() => {
            null == D || D(null == U ? void 0 : U.current)
        }, [U, D]);
        let k = e => {
            null == L || L(), (0, h.openUserProfileModal)({
                sourceAnalyticsLocations: y,
                userId: t.id,
                guildId: n,
                channelId: R,
                messageId: C,
                roleId: g,
                autoFocusNote: e
            })
        };
        return (0, i.jsx)(u.AnalyticsLocationProvider, {
            value: y,
            children: (0, i.jsx)(c.UserProfileAnalyticsProvider, {
                layout: "BITE_SIZE_POPOUT",
                userId: t.id,
                guildId: n,
                channelId: R,
                messageId: C,
                roleId: g,
                shouldTrackViewOnMount: null == w || null != w.fullProfileLoadedTimestamp,
                children: (0, i.jsxs)(a.Dialog, {
                    ref: U,
                    "aria-label": t.username,
                    onClick: O,
                    onContextMenu: O,
                    children: [(0, i.jsxs)(I.default, {
                        user: t,
                        displayProfile: b,
                        profileType: N.UserProfileTypes.BITE_SIZE,
                        children: [(0, i.jsxs)(S.default, {
                            isFaded: (null == b ? void 0 : b.profileEffectId) != null && !G,
                            children: [(0, i.jsx)(T.default, {
                                user: t
                            }), (0, i.jsx)(f.default, {
                                user: t,
                                guildId: n,
                                onClose: L,
                                viewProfileItem: (0, i.jsx)(a.MenuItem, {
                                    id: "view-profile",
                                    label: p.default.Messages.VIEW_FULL_PROFILE,
                                    action: () => {
                                        P({
                                            action: "PRESS_VIEW_PROFILE",
                                            analyticsLocations: y
                                        }), k()
                                    }
                                })
                            })]
                        }), (0, i.jsx)(m.default, {
                            user: t,
                            displayProfile: b,
                            guildId: n,
                            channelId: R,
                            onClose: L,
                            disableUserProfileLink: v
                        }), (0, i.jsx)(A.default, {
                            user: t,
                            displayProfile: b,
                            onOpenProfile: () => k(!0),
                            guildId: n,
                            channelId: R,
                            onClose: L
                        })]
                    }), (null == b ? void 0 : b.profileEffectId) != null && (0, i.jsx)(d.default, {
                        profileEffectId: null == b ? void 0 : b.profileEffectId,
                        bannerAdjustment: 0,
                        isHovering: G
                    })]
                })
            })
        })
    }
}