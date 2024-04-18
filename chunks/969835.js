function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("512722"),
        a = n.n(s),
        o = n("442837"),
        l = n("481060"),
        u = n("727637"),
        d = n("100527"),
        _ = n("906732"),
        c = n("680295"),
        E = n("271383"),
        I = n("430824"),
        T = n("594174"),
        f = n("785717"),
        S = n("318661"),
        h = n("502762"),
        A = n("705556"),
        m = n("301984"),
        N = n("664794"),
        p = n("980768"),
        O = n("171368"),
        R = n("958120"),
        C = n("23293"),
        g = n("228168"),
        L = n("689938");

    function D(e) {
        e.stopPropagation()
    }

    function v(e) {
        let {
            user: t,
            guildId: n,
            channelId: s,
            messageId: a,
            roleId: T,
            closePopout: v,
            setPopoutRef: M,
            disableUserProfileLink: y = __OVERLAY__,
            newAnalyticsLocations: P = []
        } = e, {
            analyticsLocations: U
        } = (0, _.default)([...P, d.default.BITE_SIZE_PROFILE_POPOUT]), b = (0, f.useTrackUserProfileAction)({
            layout: "BITE_SIZE_POPOUT",
            userId: t.id,
            guildId: n,
            channelId: s,
            messageId: a,
            roleId: T
        }), G = r.useRef(null), w = (0, S.default)(t.id, n), B = (0, u.default)(G), k = (0, o.useStateFromStores)([I.default], () => null != n ? I.default.getGuild(n) : null), F = (0, o.useStateFromStores)([E.default], () => null != n ? E.default.getMember(n, t.id) : null);
        r.useEffect(() => {
            null == M || M(null == G ? void 0 : G.current)
        }, [G, M]);
        let V = e => {
            null == v || v(), (0, O.openUserProfileModal)({
                sourceAnalyticsLocations: U,
                userId: t.id,
                guildId: n,
                channelId: s,
                messageId: a,
                roleId: T,
                autoFocusNote: e
            })
        };
        return (0, i.jsx)(_.AnalyticsLocationProvider, {
            value: U,
            children: (0, i.jsx)(f.UserProfileAnalyticsProvider, {
                layout: "BITE_SIZE_POPOUT",
                userId: t.id,
                guildId: n,
                channelId: s,
                messageId: a,
                roleId: T,
                shouldTrackViewOnMount: null == F || null != F.fullProfileLoadedTimestamp,
                children: (0, i.jsxs)(l.Dialog, {
                    ref: G,
                    "aria-label": t.username,
                    onClick: D,
                    onContextMenu: D,
                    children: [(0, i.jsxs)(h.default, {
                        user: t,
                        displayProfile: w,
                        profileType: g.UserProfileTypes.BITE_SIZE,
                        children: [(0, i.jsxs)(p.default, {
                            isFaded: (null == w ? void 0 : w.profileEffectId) != null && !B,
                            children: [(0, i.jsx)(m.default, {
                                user: t
                            }), (0, i.jsx)(A.default, {
                                user: t,
                                guildId: n,
                                onClose: v
                            }), (0, i.jsx)(N.default, {
                                user: t,
                                guildId: n,
                                onClose: v,
                                viewProfileItem: (0, i.jsx)(l.MenuItem, {
                                    id: "view-profile",
                                    label: L.default.Messages.VIEW_FULL_PROFILE,
                                    action: () => {
                                        b({
                                            action: "PRESS_VIEW_PROFILE",
                                            analyticsLocations: U
                                        }), V()
                                    }
                                })
                            })]
                        }), (0, i.jsx)(C.default, {
                            user: t,
                            displayProfile: w,
                            guildId: n,
                            channelId: s,
                            onClose: v,
                            disableUserProfileLink: y
                        }), (0, i.jsx)(R.default, {
                            user: t,
                            displayProfile: w,
                            onOpenProfile: () => V(!0),
                            guild: k,
                            channelId: s,
                            onClose: v
                        })]
                    }), (null == w ? void 0 : w.profileEffectId) != null && (0, i.jsx)(c.default, {
                        profileEffectId: null == w ? void 0 : w.profileEffectId,
                        bannerAdjustment: 0,
                        isHovering: B
                    })]
                })
            })
        })
    }
    t.default = r.memo(function(e) {
        let {
            userId: t,
            user: n,
            ...r
        } = e, s = (0, o.useStateFromStores)([T.default], () => T.default.getUser(t), [t]), l = null != n ? n : s;
        return a()(null != l, "Unexpected missing user"), (0, i.jsx)(v, {
            user: l,
            ...r
        })
    })
}