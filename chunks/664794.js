function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("442837"),
        s = n("481060"),
        a = n("100527"),
        o = n("906732"),
        l = n("858488"),
        u = n("389052"),
        d = n("622724"),
        _ = n("314897"),
        c = n("808268"),
        E = n("785717"),
        I = n("537387"),
        T = n("689938");

    function f(e) {
        let {
            user: t,
            guildId: n,
            viewProfileItem: f
        } = e, S = (0, r.useStateFromStores)([_.default], () => _.default.getId() === t.id), {
            trackUserProfileAction: h
        } = (0, E.useUserProfileAnalyticsContext)(), {
            analyticsLocations: A,
            newestAnalyticsLocation: m
        } = (0, o.default)(a.default.USER_PROFILE_OVERFLOW_MENU), N = (0, l.default)({
            user: t,
            onAction: () => h({
                action: "PRESS_SET_FRIEND_NICKNAME",
                analyticsLocations: A
            })
        }), p = (0, u.default)({
            user: t,
            color: "danger",
            location: m,
            onBlock: () => h({
                action: "BLOCK",
                analyticsLocations: A
            }),
            onUnblock: () => h({
                action: "UNBLOCK",
                analyticsLocations: A
            })
        }), O = (0, d.default)({
            user: t,
            guildId: n,
            color: "danger",
            location: m,
            onAction: () => h({
                action: "REPORT",
                analyticsLocations: A
            })
        });
        return S ? null : (0, i.jsx)(o.AnalyticsLocationProvider, {
            value: A,
            children: (0, i.jsx)(s.Popout, {
                renderPopout: e => {
                    let {
                        closePopout: t
                    } = e;
                    return (0, i.jsxs)(s.Menu, {
                        navId: "user-profile-overflow-menu",
                        onSelect: void 0,
                        onClose: t,
                        "aria-label": T.default.Messages.PROFILE_ACTIONS_MENU_LABEL,
                        children: [(0, i.jsxs)(s.MenuGroup, {
                            children: [f, N]
                        }), (0, i.jsxs)(s.MenuGroup, {
                            children: [p, O]
                        })]
                    })
                },
                children: e => (0, i.jsx)(I.default, {
                    icon: c.default,
                    ...e
                })
            })
        })
    }
}