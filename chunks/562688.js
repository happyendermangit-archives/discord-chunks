function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
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
        p = n("697218"),
        m = n("756507"),
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
            closePopout: p,
            setPopoutRef: C,
            disableUserProfileLink: _ = __OVERLAY__,
            newAnalyticsLocations: T = []
        } = e, I = l.useRef(null), v = (0, h.default)(t.id, n), N = (0, u.default)(I), A = (0, r.useStateFromStores)([f.default], () => null != n ? f.default.getGuild(n) : null), O = (0, r.useStateFromStores)([c.default], () => null != n ? c.default.getMember(n, t.id) : null), {
            UserProfileAnalyticsProvider: R
        } = (0, m.useUserProfileAnalyticsProvider)({
            layout: "BITE_SIZE_POPOUT",
            newAnalyticsLocations: [...T, d.default.BITE_SIZE_PROFILE_POPOUT],
            userId: t.id,
            guildId: n,
            channelId: a,
            messageId: s
        }, null == O || null != O.fullProfileLoadedTimestamp);
        return l.useEffect(() => {
            null == C || C(null == I ? void 0 : I.current)
        }, [I, C]), (0, i.jsx)(R, {
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
                        onClose: () => null == p ? void 0 : p(),
                        disableUserProfileLink: _,
                        isHovering: N
                    }), (0, i.jsx)(x.default.Inner, {
                        children: (0, i.jsx)(y.default, {
                            user: t,
                            displayProfile: v,
                            guild: A,
                            channelId: a
                        })
                    })]
                })
            })
        })
    }
    var _ = l.memo(function(e) {
        let {
            userId: t,
            user: n,
            ...l
        } = e, a = (0, r.useStateFromStores)([p.default], () => p.default.getUser(t), [t]), o = null != n ? n : a;
        return s(null != o, "Unexpected missing user"), (0, i.jsx)(C, {
            user: o,
            ...l
        })
    })
}