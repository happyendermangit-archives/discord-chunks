function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return h
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
        d = n("813872"),
        _ = n("822972"),
        c = n("622724"),
        E = n("314897"),
        I = n("808268"),
        T = n("785717"),
        f = n("537387"),
        S = n("689938");

    function h(e) {
        let {
            user: t,
            guildId: n,
            channelId: h,
            viewProfileItem: A,
            onClose: m
        } = e, N = (0, r.useStateFromStores)([E.default], () => E.default.getId() === t.id), {
            trackUserProfileAction: p
        } = (0, T.useUserProfileAnalyticsContext)(), {
            analyticsLocations: O,
            newestAnalyticsLocation: R
        } = (0, o.default)(a.default.USER_PROFILE_OVERFLOW_MENU), C = (0, l.default)({
            user: t,
            onAction: () => p({
                action: "PRESS_SET_FRIEND_NICKNAME",
                analyticsLocations: O
            })
        }), g = (0, d.default)({
            userId: t.id,
            guildId: null != n ? n : null,
            channelId: h,
            location: R,
            onAction: () => {
                p({
                    action: "PRESS_MOD_VIEW",
                    analyticsLocations: O
                }), null == m || m()
            }
        }), L = (0, _.default)({
            user: t,
            color: "danger",
            location: R,
            onAction: () => p({
                action: "REMOVE_FRIEND",
                analyticsLocations: O
            })
        }), D = (0, u.default)({
            user: t,
            color: "danger",
            location: R,
            onBlock: () => p({
                action: "BLOCK",
                analyticsLocations: O
            }),
            onUnblock: () => p({
                action: "UNBLOCK",
                analyticsLocations: O
            })
        }), v = (0, c.default)({
            user: t,
            guildId: n,
            color: "danger",
            location: R,
            onAction: () => p({
                action: "REPORT",
                analyticsLocations: O
            })
        });
        return N ? null : (0, i.jsx)(o.AnalyticsLocationProvider, {
            value: O,
            children: (0, i.jsx)(s.Popout, {
                renderPopout: e => {
                    let {
                        closePopout: t
                    } = e;
                    return (0, i.jsxs)(s.Menu, {
                        navId: "user-profile-overflow-menu",
                        onSelect: void 0,
                        onClose: t,
                        "aria-label": S.default.Messages.PROFILE_ACTIONS_MENU_LABEL,
                        children: [(0, i.jsxs)(s.MenuGroup, {
                            children: [A, C, g]
                        }), (0, i.jsxs)(s.MenuGroup, {
                            children: [L, D, v]
                        })]
                    })
                },
                children: e => (0, i.jsx)(f.default, {
                    icon: I.default,
                    ...e
                })
            })
        })
    }
}