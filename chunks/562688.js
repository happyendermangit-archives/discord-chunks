function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return T
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("627445"),
        s = n.n(a),
        r = n("446674"),
        o = n("77078"),
        u = n("252744"),
        d = n("812204"),
        c = n("26989"),
        f = n("305961"),
        m = n("697218"),
        p = n("756507"),
        h = n("217513"),
        x = n("430312"),
        E = n("935409"),
        y = n("179014"),
        g = n("590456");

    function S(e) {
        e.stopPropagation()
    }

    function C(e) {
        let {
            user: t,
            guildId: n,
            channelId: a,
            messageId: s,
            closePopout: m,
            setPopoutRef: C,
            disableUserProfileLink: T = __OVERLAY__,
            newAnalyticsLocations: _ = []
        } = e, I = l.useRef(null), v = (0, h.default)(t.id, n), A = (0, u.default)(I), N = (0, r.useStateFromStores)([f.default], () => null != n ? f.default.getGuild(n) : null), R = (0, r.useStateFromStores)([c.default], () => null != n ? c.default.getMember(n, t.id) : null), {
            UserProfileAnalyticsProvider: O
        } = (0, p.useUserProfileAnalyticsProvider)({
            layout: "BITE_SIZE_POPOUT",
            newAnalyticsLocations: [..._, d.default.BITE_SIZE_PROFILE_POPOUT],
            userId: t.id,
            guildId: n,
            channelId: a,
            messageId: s
        }, null == R || null != R.fullProfileLoadedTimestamp);
        return l.useEffect(() => {
            null == C || C(null == I ? void 0 : I.current)
        }, [I, C]), (0, i.jsx)(O, {
            children: (0, i.jsx)(o.Dialog, {
                ref: I,
                "aria-label": t.username,
                onClick: S,
                onContextMenu: S,
                children: (0, i.jsxs)(x.default, {
                    user: t,
                    guildId: n,
                    profileType: g.UserProfileTypes.POPOUT,
                    children: [(0, i.jsx)(E.BiteSizeProfileHeader, {
                        user: t,
                        displayProfile: v,
                        guildId: n,
                        channelId: a,
                        onClose: () => null == m ? void 0 : m(),
                        disableUserProfileLink: T,
                        isHovering: A
                    }), (0, i.jsx)(x.default.Inner, {
                        children: (0, i.jsx)(y.default, {
                            user: t,
                            displayProfile: v,
                            guild: N,
                            channelId: a
                        })
                    })]
                })
            })
        })
    }
    var T = l.memo(function(e) {
        let {
            userId: t,
            user: n,
            ...l
        } = e, a = (0, r.useStateFromStores)([m.default], () => m.default.getUser(t), [t]), o = null != n ? n : a;
        return s(null != o, "Unexpected missing user"), (0, i.jsx)(C, {
            user: o,
            ...l
        })
    })
}