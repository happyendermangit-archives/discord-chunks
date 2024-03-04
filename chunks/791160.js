function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var i = n("299285"),
        s = n("49111");

    function r(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            r = i.default.getApplication(e.applicationId),
            a = e.getPrice(),
            o = e.getPrice(null, !1),
            l = {
                sku_id: e.id,
                sku_type: e.type,
                application_id: e.applicationId,
                application_name: null != r ? r.name : null,
                store_title: e.name,
                distribution_type: e.premium ? "premium" : "distribution"
            },
            u = null;
        n && (u = {
            price: null != a ? a.amount : null,
            regular_price: null != o ? o.amount : null,
            currency: null != a ? a.currency : null
        });
        let d = null;
        return t && (d = {
            has_single_player: e.hasFeature(s.SKUFeatureTypes.SINGLE_PLAYER),
            has_online_multiplayer: e.hasFeature(s.SKUFeatureTypes.ONLINE_MULTIPLAYER),
            has_local_multiplayer: e.hasFeature(s.SKUFeatureTypes.LOCAL_MULTIPLAYER),
            has_pvp_features: e.hasFeature(s.SKUFeatureTypes.PVP),
            has_local_coop: e.hasFeature(s.SKUFeatureTypes.LOCAL_COOP),
            has_online_coop: e.hasFeature(s.SKUFeatureTypes.ONLINE_COOP),
            has_cross_platform: e.hasFeature(s.SKUFeatureTypes.CROSS_PLATFORM),
            has_rich_presence: e.hasFeature(s.SKUFeatureTypes.RICH_PRESENCE),
            has_game_invites: e.hasFeature(s.SKUFeatureTypes.DISCORD_GAME_INVITES),
            has_spectator_mode: e.hasFeature(s.SKUFeatureTypes.SPECTATOR_MODE),
            has_controller_support: e.hasFeature(s.SKUFeatureTypes.CONTROLLER_SUPPORT),
            has_cloud_saves: e.hasFeature(s.SKUFeatureTypes.CLOUD_SAVES),
            has_secure_networking: e.hasFeature(s.SKUFeatureTypes.SECURE_NETWORKING)
        }), {
            ...l,
            ...u,
            ...d
        }
    }
}