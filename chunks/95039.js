function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        openGuildBoostingMarketingModal: function() {
            return T
        }
    });
    var i = s("37983");
    s("884691");
    var r = s("627445"),
        a = s.n(r),
        l = s("446674"),
        o = s("812204"),
        n = s("685665"),
        u = s("305961"),
        d = s("697218"),
        c = s("708169"),
        E = s("783121");
    let _ = e => {
        let {
            guildId: t,
            close: s,
            location: r
        } = e, c = (0, l.useStateFromStores)([d.default], () => d.default.getCurrentUser());
        a(null != c, "PremiumGuildPerksModalConnected: currentUser cannot be undefined");
        let _ = (0, l.useStateFromStores)([u.default], () => u.default.getGuild(t), [t]),
            {
                analyticsLocations: T
            } = (0, n.default)(o.default.BOOSTED_GUILD_PERKS_MODAL);
        return null == _ ? null : (0, i.jsx)(n.AnalyticsLocationProvider, {
            value: T,
            children: (0, i.jsx)(E.default, {
                analyticsLocation: r,
                onClose: s,
                guild: _
            })
        })
    };

    function T(e) {
        let {
            guildId: t,
            location: s
        } = e;
        (0, c.openFullScreenLayer)(e => {
            let {
                closeLayer: r
            } = e;
            return (0, i.jsx)(_, {
                close: r,
                guildId: t,
                location: s
            })
        }, {
            layerKey: "BoostedGuildPerksModalConnected"
        })
    }
}