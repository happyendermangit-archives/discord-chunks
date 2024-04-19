function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return g
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
        E = n("785717"),
        I = n("318661"),
        T = n("502762"),
        f = n("705556"),
        S = n("301984"),
        h = n("664794"),
        A = n("980768"),
        m = n("171368"),
        N = n("958120"),
        p = n("23293"),
        O = n("228168"),
        R = n("689938");

    function C(e) {
        e.stopPropagation()
    }

    function g(e) {
        let {
            user: t,
            guildId: n,
            channelId: g,
            messageId: L,
            roleId: D,
            closePopout: v,
            setPopoutRef: M,
            disableUserProfileLink: y = __OVERLAY__,
            newAnalyticsLocations: P = []
        } = e, {
            analyticsLocations: U
        } = (0, u.default)([...P, l.default.BITE_SIZE_PROFILE_POPOUT]), b = (0, E.useTrackUserProfileAction)({
            layout: "BITE_SIZE_POPOUT",
            userId: t.id,
            guildId: n,
            channelId: g,
            messageId: L,
            roleId: D
        }), G = r.useRef(null), w = (0, I.default)(t.id, n), B = (0, o.default)(G), k = (0, s.useStateFromStores)([c.default], () => null != n ? c.default.getGuild(n) : null), F = (0, s.useStateFromStores)([_.default], () => null != n ? _.default.getMember(n, t.id) : null);
        r.useEffect(() => {
            null == M || M(null == G ? void 0 : G.current)
        }, [G, M]);
        let V = e => {
            null == v || v(), (0, m.openUserProfileModal)({
                sourceAnalyticsLocations: U,
                userId: t.id,
                guildId: n,
                channelId: g,
                messageId: L,
                roleId: D,
                autoFocusNote: e
            })
        };
        return (0, i.jsx)(u.AnalyticsLocationProvider, {
            value: U,
            children: (0, i.jsx)(E.UserProfileAnalyticsProvider, {
                layout: "BITE_SIZE_POPOUT",
                userId: t.id,
                guildId: n,
                channelId: g,
                messageId: L,
                roleId: D,
                shouldTrackViewOnMount: null == F || null != F.fullProfileLoadedTimestamp,
                children: (0, i.jsxs)(a.Dialog, {
                    ref: G,
                    "aria-label": t.username,
                    onClick: C,
                    onContextMenu: C,
                    children: [(0, i.jsxs)(T.default, {
                        user: t,
                        displayProfile: w,
                        profileType: O.UserProfileTypes.BITE_SIZE,
                        children: [(0, i.jsxs)(A.default, {
                            isFaded: (null == w ? void 0 : w.profileEffectId) != null && !B,
                            children: [(0, i.jsx)(S.default, {
                                user: t
                            }), (0, i.jsx)(f.default, {
                                user: t,
                                guildId: n,
                                onClose: v
                            }), (0, i.jsx)(h.default, {
                                user: t,
                                guildId: n,
                                onClose: v,
                                viewProfileItem: (0, i.jsx)(a.MenuItem, {
                                    id: "view-profile",
                                    label: R.default.Messages.VIEW_FULL_PROFILE,
                                    action: () => {
                                        b({
                                            action: "PRESS_VIEW_PROFILE",
                                            analyticsLocations: U
                                        }), V()
                                    }
                                })
                            })]
                        }), (0, i.jsx)(p.default, {
                            user: t,
                            displayProfile: w,
                            guildId: n,
                            channelId: g,
                            onClose: v,
                            disableUserProfileLink: y
                        }), (0, i.jsx)(N.default, {
                            user: t,
                            displayProfile: w,
                            onOpenProfile: () => V(!0),
                            guild: k,
                            channelId: g,
                            onClose: v
                        })]
                    }), (null == w ? void 0 : w.profileEffectId) != null && (0, i.jsx)(d.default, {
                        profileEffectId: null == w ? void 0 : w.profileEffectId,
                        bannerAdjustment: 0,
                        isHovering: B
                    })]
                })
            })
        })
    }
}