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
        h = n("903843"),
        A = n("502762"),
        m = n("705556"),
        N = n("664794"),
        p = n("171368"),
        O = n("958120"),
        R = n("23293"),
        C = n("228168"),
        g = n("689938");

    function L(e) {
        e.stopPropagation()
    }

    function D(e) {
        let {
            user: t,
            guildId: n,
            channelId: s,
            messageId: a,
            roleId: T,
            closePopout: D,
            setPopoutRef: v,
            disableUserProfileLink: M = __OVERLAY__,
            newAnalyticsLocations: y = []
        } = e, {
            analyticsLocations: P
        } = (0, _.default)([...y, d.default.BITE_SIZE_PROFILE_POPOUT]), U = (0, f.useTrackUserProfileAction)({
            layout: "BITE_SIZE_POPOUT",
            userId: t.id,
            guildId: n,
            channelId: s,
            messageId: a,
            roleId: T
        }), b = r.useRef(null), G = (0, S.default)(t.id, n), w = (0, u.default)(b), B = (0, o.useStateFromStores)([I.default], () => null != n ? I.default.getGuild(n) : null), k = (0, o.useStateFromStores)([E.default], () => null != n ? E.default.getMember(n, t.id) : null);
        r.useEffect(() => {
            null == v || v(null == b ? void 0 : b.current)
        }, [b, v]);
        let F = () => {
            null == D || D(), (0, p.openUserProfileModal)({
                sourceAnalyticsLocations: P,
                userId: t.id,
                guildId: n,
                channelId: s,
                messageId: a,
                roleId: T
            })
        };
        return (0, i.jsx)(_.AnalyticsLocationProvider, {
            value: P,
            children: (0, i.jsx)(f.UserProfileAnalyticsProvider, {
                layout: "BITE_SIZE_POPOUT",
                userId: t.id,
                guildId: n,
                channelId: s,
                messageId: a,
                roleId: T,
                shouldTrackViewOnMount: null == k || null != k.fullProfileLoadedTimestamp,
                children: (0, i.jsxs)(l.Dialog, {
                    ref: b,
                    "aria-label": t.username,
                    onClick: L,
                    onContextMenu: L,
                    children: [(0, i.jsxs)(A.default, {
                        user: t,
                        displayProfile: G,
                        profileType: C.UserProfileTypes.BITE_SIZE,
                        children: [(0, i.jsxs)(h.default, {
                            isFaded: (null == G ? void 0 : G.profileEffectId) != null && !w,
                            children: [(0, i.jsx)(m.default, {
                                user: t,
                                guildId: n,
                                onClose: D
                            }), (0, i.jsx)(N.default, {
                                user: t,
                                guildId: n,
                                onClose: D,
                                viewProfileItem: (0, i.jsx)(l.MenuItem, {
                                    id: "view-profile",
                                    label: g.default.Messages.VIEW_FULL_PROFILE,
                                    action: () => {
                                        U({
                                            action: "PRESS_VIEW_PROFILE",
                                            analyticsLocations: P
                                        }), F()
                                    }
                                })
                            })]
                        }), (0, i.jsx)(R.default, {
                            user: t,
                            displayProfile: G,
                            guildId: n,
                            channelId: s,
                            onClose: D,
                            disableUserProfileLink: M
                        }), (0, i.jsx)(O.default, {
                            user: t,
                            displayProfile: G,
                            guild: B,
                            channelId: s,
                            onOpenProfile: F,
                            onClose: D
                        })]
                    }), (null == G ? void 0 : G.profileEffectId) != null && (0, i.jsx)(c.default, {
                        profileEffectId: null == G ? void 0 : G.profileEffectId,
                        bannerAdjustment: 0,
                        isHovering: w
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
        return a()(null != l, "Unexpected missing user"), (0, i.jsx)(D, {
            user: l,
            ...r
        })
    })
}