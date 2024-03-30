function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var r = n("342942"),
        o = n("281767");

    function i(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = r.default.getApplication(e.applicationId),
            a = e.getPrice(),
            u = e.getPrice(null, !1),
            s = {
                sku_id: e.id,
                sku_type: e.type,
                application_id: e.applicationId,
                application_name: null != i ? i.name : null,
                store_title: e.name,
                distribution_type: e.premium ? "premium" : "distribution"
            },
            l = null;
        n && (l = {
            price: null != a ? a.amount : null,
            regular_price: null != u ? u.amount : null,
            currency: null != a ? a.currency : null
        });
        var c = null;
        return t && (c = {
                has_single_player: e.hasFeature(o.SKUFeatureTypes.SINGLE_PLAYER),
                has_online_multiplayer: e.hasFeature(o.SKUFeatureTypes.ONLINE_MULTIPLAYER),
                has_local_multiplayer: e.hasFeature(o.SKUFeatureTypes.LOCAL_MULTIPLAYER),
                has_pvp_features: e.hasFeature(o.SKUFeatureTypes.PVP),
                has_local_coop: e.hasFeature(o.SKUFeatureTypes.LOCAL_COOP),
                has_online_coop: e.hasFeature(o.SKUFeatureTypes.ONLINE_COOP),
                has_cross_platform: e.hasFeature(o.SKUFeatureTypes.CROSS_PLATFORM),
                has_rich_presence: e.hasFeature(o.SKUFeatureTypes.RICH_PRESENCE),
                has_game_invites: e.hasFeature(o.SKUFeatureTypes.DISCORD_GAME_INVITES),
                has_spectator_mode: e.hasFeature(o.SKUFeatureTypes.SPECTATOR_MODE),
                has_controller_support: e.hasFeature(o.SKUFeatureTypes.CONTROLLER_SUPPORT),
                has_cloud_saves: e.hasFeature(o.SKUFeatureTypes.CLOUD_SAVES),
                has_secure_networking: e.hasFeature(o.SKUFeatureTypes.SECURE_NETWORKING)
            }),
            function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        var r, o, i;
                        r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[o] = i
                    })
                }
                return e
            }({}, s, l, c)
    }
}