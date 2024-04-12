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
        A = n("502762"),
        h = n("958120"),
        m = n("23293"),
        N = n("228168");

    function O(e) {
        e.stopPropagation()
    }

    function p(e) {
        let {
            user: t,
            guildId: n,
            channelId: s,
            messageId: a,
            closePopout: T,
            setPopoutRef: p,
            disableUserProfileLink: R = __OVERLAY__,
            newAnalyticsLocations: C = []
        } = e, {
            analyticsLocations: g
        } = (0, _.default)([...C, d.default.BITE_SIZE_PROFILE_POPOUT]), L = r.useRef(null), D = (0, S.default)(t.id, n), v = (0, u.default)(L), M = (0, o.useStateFromStores)([I.default], () => null != n ? I.default.getGuild(n) : null), y = (0, o.useStateFromStores)([E.default], () => null != n ? E.default.getMember(n, t.id) : null);
        return r.useEffect(() => {
            null == p || p(null == L ? void 0 : L.current)
        }, [L, p]), (0, i.jsx)(_.AnalyticsLocationProvider, {
            value: g,
            children: (0, i.jsx)(f.UserProfileAnalyticsProvider, {
                layout: "BITE_SIZE_POPOUT",
                userId: t.id,
                guildId: n,
                channelId: s,
                messageId: a,
                shouldTrackViewOnMount: null == y || null != y.fullProfileLoadedTimestamp,
                children: (0, i.jsxs)(l.Dialog, {
                    ref: L,
                    "aria-label": t.username,
                    onClick: O,
                    onContextMenu: O,
                    children: [(0, i.jsxs)(A.default, {
                        user: t,
                        guildId: n,
                        profileType: N.UserProfileTypes.POPOUT,
                        children: [(0, i.jsx)(m.default, {
                            user: t,
                            displayProfile: D,
                            guildId: n,
                            channelId: s,
                            onClose: T,
                            disableUserProfileLink: R
                        }), (0, i.jsx)(h.default, {
                            user: t,
                            displayProfile: D,
                            guild: M,
                            channelId: s,
                            onClose: T
                        })]
                    }), (null == D ? void 0 : D.profileEffectId) != null && (0, i.jsx)(c.default, {
                        profileEffectId: null == D ? void 0 : D.profileEffectId,
                        bannerAdjustment: 0,
                        isHovering: v
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
        return a()(null != l, "Unexpected missing user"), (0, i.jsx)(p, {
            user: l,
            ...r
        })
    })
}