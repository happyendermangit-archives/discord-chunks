function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        openGuildBoostingMarketingModal: function() {
            return E
        }
    });
    var r = n("470079"),
        o = n("512722"),
        i = n.n(o),
        a = n("898511"),
        u = n("649455"),
        s = n("396586"),
        l = n("306912"),
        c = n("208454"),
        f = n("310734"),
        d = n("427752"),
        _ = function(e) {
            var t = e.guildId,
                n = e.close,
                o = e.location,
                f = (0, a.useStateFromStores)([c.default], function() {
                    return c.default.getCurrentUser()
                });
            i()(null != f, "PremiumGuildPerksModalConnected: currentUser cannot be undefined");
            var _ = (0, a.useStateFromStores)([l.default], function() {
                    return l.default.getGuild(t)
                }, [t]),
                E = (0, s.default)(u.default.BOOSTED_GUILD_PERKS_MODAL).analyticsLocations;
            return null == _ ? null : r.createElement(s.AnalyticsLocationProvider, {
                value: E
            }, r.createElement(d.default, {
                analyticsLocation: o,
                onClose: n,
                guild: _
            }))
        };

    function E(e) {
        var t = e.guildId,
            n = e.location;
        (0, f.openFullScreenLayer)(function(e) {
            var o = e.closeLayer;
            return r.createElement(_, {
                close: o,
                guildId: t,
                location: n
            })
        }, {
            layerKey: "BoostedGuildPerksModalConnected"
        })
    }
}