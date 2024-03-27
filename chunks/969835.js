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
        _ = n("271383"),
        c = n("430824"),
        E = n("594174"),
        I = n("785717"),
        T = n("318661"),
        f = n("747074"),
        S = n("131640"),
        h = n("958120"),
        A = n("228168");

    function m(e) {
        e.stopPropagation()
    }

    function N(e) {
        let {
            user: t,
            guildId: n,
            channelId: s,
            messageId: a,
            closePopout: E,
            setPopoutRef: N,
            disableUserProfileLink: O = __OVERLAY__,
            newAnalyticsLocations: p = []
        } = e, R = r.useRef(null), C = (0, T.default)(t.id, n), g = (0, u.default)(R), L = (0, o.useStateFromStores)([c.default], () => null != n ? c.default.getGuild(n) : null), D = (0, o.useStateFromStores)([_.default], () => null != n ? _.default.getMember(n, t.id) : null), {
            UserProfileAnalyticsProvider: v
        } = (0, I.useUserProfileAnalyticsProvider)({
            layout: "BITE_SIZE_POPOUT",
            newAnalyticsLocations: [...p, d.default.BITE_SIZE_PROFILE_POPOUT],
            userId: t.id,
            guildId: n,
            channelId: s,
            messageId: a
        }, null == D || null != D.fullProfileLoadedTimestamp);
        return r.useEffect(() => {
            null == N || N(null == R ? void 0 : R.current)
        }, [R, N]), (0, i.jsx)(v, {
            children: (0, i.jsx)(l.Dialog, {
                ref: R,
                "aria-label": t.username,
                onClick: m,
                onContextMenu: m,
                children: (0, i.jsxs)(f.default, {
                    user: t,
                    guildId: n,
                    profileType: A.UserProfileTypes.POPOUT,
                    children: [(0, i.jsx)(S.BiteSizeProfileHeader, {
                        user: t,
                        displayProfile: C,
                        guildId: n,
                        channelId: s,
                        onClose: () => null == E ? void 0 : E(),
                        disableUserProfileLink: O,
                        isHovering: g
                    }), (0, i.jsx)(f.default.Inner, {
                        children: (0, i.jsx)(h.default, {
                            user: t,
                            displayProfile: C,
                            guild: L,
                            channelId: s
                        })
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
        } = e, s = (0, o.useStateFromStores)([E.default], () => E.default.getUser(t), [t]), l = null != n ? n : s;
        return a()(null != l, "Unexpected missing user"), (0, i.jsx)(N, {
            user: l,
            ...r
        })
    })
}