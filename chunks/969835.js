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
        c = n("271383"),
        E = n("430824"),
        I = n("594174"),
        T = n("785717"),
        f = n("318661"),
        S = n("747074"),
        A = n("131640"),
        h = n("958120"),
        m = n("228168");

    function N(e) {
        e.stopPropagation()
    }

    function O(e) {
        let {
            user: t,
            guildId: n,
            channelId: s,
            messageId: a,
            closePopout: I,
            setPopoutRef: O,
            disableUserProfileLink: p = __OVERLAY__,
            newAnalyticsLocations: R = []
        } = e, {
            analyticsLocations: C
        } = (0, _.default)([...R, d.default.BITE_SIZE_PROFILE_POPOUT]), g = r.useRef(null), L = (0, f.default)(t.id, n), D = (0, u.default)(g), v = (0, o.useStateFromStores)([E.default], () => null != n ? E.default.getGuild(n) : null), M = (0, o.useStateFromStores)([c.default], () => null != n ? c.default.getMember(n, t.id) : null);
        return r.useEffect(() => {
            null == O || O(null == g ? void 0 : g.current)
        }, [g, O]), (0, i.jsx)(_.AnalyticsLocationProvider, {
            value: C,
            children: (0, i.jsx)(T.UserProfileAnalyticsProvider, {
                layout: "BITE_SIZE_POPOUT",
                userId: t.id,
                guildId: n,
                channelId: s,
                messageId: a,
                shouldTrackViewOnMount: null == M || null != M.fullProfileLoadedTimestamp,
                children: (0, i.jsx)(l.Dialog, {
                    ref: g,
                    "aria-label": t.username,
                    onClick: N,
                    onContextMenu: N,
                    children: (0, i.jsxs)(S.default, {
                        user: t,
                        guildId: n,
                        profileType: m.UserProfileTypes.POPOUT,
                        children: [(0, i.jsx)(A.BiteSizeProfileHeader, {
                            user: t,
                            displayProfile: L,
                            guildId: n,
                            channelId: s,
                            onClose: () => null == I ? void 0 : I(),
                            disableUserProfileLink: p,
                            isHovering: D
                        }), (0, i.jsx)(S.default.Inner, {
                            children: (0, i.jsx)(h.default, {
                                user: t,
                                displayProfile: L,
                                guild: v,
                                channelId: s
                            })
                        })]
                    })
                })
            })
        })
    }
    t.default = r.memo(function(e) {
        let {
            userId: t,
            user: n,
            ...r
        } = e, s = (0, o.useStateFromStores)([I.default], () => I.default.getUser(t), [t]), l = null != n ? n : s;
        return a()(null != l, "Unexpected missing user"), (0, i.jsx)(O, {
            user: l,
            ...r
        })
    })
}