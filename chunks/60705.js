function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GuildProductsExperiment: function() {
            return s
        }
    });
    var i = n("862205");
    let s = (0, i.createExperiment)({
        kind: "guild",
        id: "2023-04_server_products",
        label: "Server Products",
        defaultConfig: {
            enabled: !1
        },
        treatments: [{
            id: 1,
            label: "Enables Server Products (AKA one time purchases for creator guilds)",
            config: {
                enabled: !0
            }
        }]
    })
}