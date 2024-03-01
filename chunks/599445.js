function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GuildShopStorefrontExperiment: function() {
            return i
        },
        ShowGuildRoleSubInGuildShopExperiment: function() {
            return r
        },
        GuildShopPreviewExperiment: function() {
            return a
        }
    });
    var s = n("862205");
    let i = (0, s.createExperiment)({
            kind: "user",
            id: "2023-08_server_shop_storefront",
            label: "Server Shop Storefront",
            defaultConfig: {
                enabled: !1
            },
            treatments: [{
                id: 1,
                label: "Enables Server shop storefront",
                config: {
                    enabled: !0
                }
            }]
        }),
        r = (0, s.createExperiment)({
            kind: "user",
            id: "2023-09_show_server_sub_in_server_shop",
            label: "Show server sub in server shop",
            defaultConfig: {
                enabled: !1
            },
            treatments: [{
                id: 1,
                label: "Enables showing server sub in server shop",
                config: {
                    enabled: !0
                }
            }]
        }),
        a = (0, s.createExperiment)({
            kind: "user",
            id: "2023-09_server_shop_phantom_preview",
            label: "Server Shop Phantom Preview",
            defaultConfig: {
                enabled: !1
            },
            treatments: [{
                id: 1,
                label: "Enables Server shop phantom preview",
                config: {
                    enabled: !0
                }
            }]
        })
}