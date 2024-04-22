function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return S
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
        _ = n("622724"),
        c = n("314897"),
        E = n("808268"),
        I = n("785717"),
        T = n("537387"),
        f = n("689938");

    function S(e) {
        let {
            user: t,
            guildId: n,
            channelId: S,
            viewProfileItem: h,
            onClose: A
        } = e, m = (0, r.useStateFromStores)([c.default], () => c.default.getId() === t.id), {
            trackUserProfileAction: N
        } = (0, I.useUserProfileAnalyticsContext)(), {
            analyticsLocations: p,
            newestAnalyticsLocation: O
        } = (0, o.default)(a.default.USER_PROFILE_OVERFLOW_MENU), R = (0, l.default)({
            user: t,
            onAction: () => N({
                action: "PRESS_SET_FRIEND_NICKNAME",
                analyticsLocations: p
            })
        }), C = (0, d.default)({
            userId: t.id,
            guildId: null != n ? n : null,
            channelId: S,
            location: O,
            onAction: () => {
                N({
                    action: "PRESS_MOD_VIEW",
                    analyticsLocations: p
                }), null == A || A()
            }
        }), g = (0, u.default)({
            user: t,
            color: "danger",
            location: O,
            onBlock: () => N({
                action: "BLOCK",
                analyticsLocations: p
            }),
            onUnblock: () => N({
                action: "UNBLOCK",
                analyticsLocations: p
            })
        }), L = (0, _.default)({
            user: t,
            guildId: n,
            color: "danger",
            location: O,
            onAction: () => N({
                action: "REPORT",
                analyticsLocations: p
            })
        });
        return m ? null : (0, i.jsx)(o.AnalyticsLocationProvider, {
            value: p,
            children: (0, i.jsx)(s.Popout, {
                renderPopout: e => {
                    let {
                        closePopout: t
                    } = e;
                    return (0, i.jsxs)(s.Menu, {
                        navId: "user-profile-overflow-menu",
                        onSelect: void 0,
                        onClose: t,
                        "aria-label": f.default.Messages.PROFILE_ACTIONS_MENU_LABEL,
                        children: [(0, i.jsxs)(s.MenuGroup, {
                            children: [h, R, C]
                        }), (0, i.jsxs)(s.MenuGroup, {
                            children: [g, L]
                        })]
                    })
                },
                children: e => (0, i.jsx)(T.default, {
                    icon: E.default,
                    ...e
                })
            })
        })
    }
}