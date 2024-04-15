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
        m = n("664794"),
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
            channelId: s,
            messageId: a,
            roleId: T,
            closePopout: L,
            setPopoutRef: D,
            disableUserProfileLink: v = __OVERLAY__,
            newAnalyticsLocations: M = []
        } = e, {
            analyticsLocations: y
        } = (0, _.default)([...M, d.default.BITE_SIZE_PROFILE_POPOUT]), P = (0, f.useTrackUserProfileAction)({
            layout: "BITE_SIZE_POPOUT",
            userId: t.id,
            guildId: n,
            channelId: s,
            messageId: a,
            roleId: T
        }), U = r.useRef(null), b = (0, S.default)(t.id, n), G = (0, u.default)(U), w = (0, o.useStateFromStores)([I.default], () => null != n ? I.default.getGuild(n) : null), B = (0, o.useStateFromStores)([E.default], () => null != n ? E.default.getMember(n, t.id) : null);
        r.useEffect(() => {
            null == D || D(null == U ? void 0 : U.current)
        }, [U, D]);
        let k = () => {
            null == L || L(), (0, N.openUserProfileModal)({
                sourceAnalyticsLocations: y,
                userId: t.id,
                guildId: n,
                channelId: s,
                messageId: a,
                roleId: T
            })
        };
        return (0, i.jsx)(_.AnalyticsLocationProvider, {
            value: y,
            children: (0, i.jsx)(f.UserProfileAnalyticsProvider, {
                layout: "BITE_SIZE_POPOUT",
                userId: t.id,
                guildId: n,
                channelId: s,
                messageId: a,
                roleId: T,
                shouldTrackViewOnMount: null == B || null != B.fullProfileLoadedTimestamp,
                children: (0, i.jsxs)(l.Dialog, {
                    ref: U,
                    "aria-label": t.username,
                    onClick: g,
                    onContextMenu: g,
                    children: [(0, i.jsxs)(A.default, {
                        user: t,
                        displayProfile: b,
                        profileType: R.UserProfileTypes.BITE_SIZE,
                        children: [(0, i.jsx)(h.default, {
                            isFaded: (null == b ? void 0 : b.profileEffectId) != null && !G,
                            children: (0, i.jsx)(m.default, {
                                user: t,
                                guildId: n,
                                onClose: L,
                                viewProfileItem: (0, i.jsx)(l.MenuItem, {
                                    id: "view-profile",
                                    label: C.default.Messages.VIEW_FULL_PROFILE,
                                    action: () => {
                                        P({
                                            action: "PRESS_VIEW_PROFILE",
                                            analyticsLocations: y
                                        }), k()
                                    }
                                })
                            })
                        }), (0, i.jsx)(O.default, {
                            user: t,
                            displayProfile: b,
                            guildId: n,
                            channelId: s,
                            onClose: L,
                            disableUserProfileLink: v
                        }), (0, i.jsx)(p.default, {
                            user: t,
                            displayProfile: b,
                            guild: w,
                            channelId: s,
                            onOpenProfile: k,
                            onClose: L
                        })]
                    }), (null == b ? void 0 : b.profileEffectId) != null && (0, i.jsx)(c.default, {
                        profileEffectId: null == b ? void 0 : b.profileEffectId,
                        bannerAdjustment: 0,
                        isHovering: G
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
        return a()(null != l, "Unexpected missing user"), (0, i.jsx)(L, {
            user: l,
            ...r
        })
    })
}