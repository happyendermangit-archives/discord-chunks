function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        openGuildBoostingMarketingModal: function() {
            return I
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("512722"),
        a = n.n(r),
        s = n("442837"),
        o = n("100527"),
        l = n("906732"),
        u = n("430824"),
        d = n("594174"),
        _ = n("725568"),
        c = n("443002");
    let E = e => {
        let {
            guildId: t,
            close: n,
            location: r
        } = e, _ = (0, s.useStateFromStores)([d.default], () => d.default.getCurrentUser());
        a()(null != _, "PremiumGuildPerksModalConnected: currentUser cannot be undefined");
        let E = (0, s.useStateFromStores)([u.default], () => u.default.getGuild(t), [t]),
            {
                analyticsLocations: I
            } = (0, l.default)(o.default.BOOSTED_GUILD_PERKS_MODAL);
        return null == E ? null : (0, i.jsx)(l.AnalyticsLocationProvider, {
            value: I,
            children: (0, i.jsx)(c.default, {
                analyticsLocation: r,
                onClose: n,
                guild: E
            })
        })
    };

    function I(e) {
        let {
            guildId: t,
            location: n
        } = e;
        (0, _.openFullScreenLayer)(e => {
            let {
                closeLayer: r
            } = e;
            return (0, i.jsx)(E, {
                close: r,
                guildId: t,
                location: n
            })
        }, {
            layerKey: "BoostedGuildPerksModalConnected"
        })
    }
}