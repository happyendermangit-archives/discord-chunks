function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CollectiblesShopMarketingVariants: function() {
            return o
        }
    });
    var r, o, i = n("94498");
    (r = o || (o = {}))[r.DEFAULT = 0] = "DEFAULT", r[r.WINTER_2023_DROP = 1] = "WINTER_2023_DROP", r[r.MONSTER_DROP = 2] = "MONSTER_DROP", r[r.SPRINGTOONS = 4] = "SPRINGTOONS", r[r.SHY = 5] = "SHY";
    var a = (0, i.createExperiment)({
        kind: "user",
        id: "2023-12_collectibles_shop_marketing",
        label: "Collectibles Shop Marketing Variations",
        defaultConfig: {
            variant: 0
        },
        treatments: [{
            id: 1,
            label: "Winter 2023",
            config: {
                variant: 1
            }
        }, {
            id: 2,
            label: "Jan 2024",
            config: {
                variant: 2
            }
        }, {
            id: 4,
            label: "Springtoons 2024",
            config: {
                variant: 4
            }
        }, {
            id: 5,
            label: "Shy 2024",
            config: {
                variant: 5
            }
        }]
    });
    t.default = function(e) {
        return a.useExperiment({
            location: e
        }).variant
    }
}