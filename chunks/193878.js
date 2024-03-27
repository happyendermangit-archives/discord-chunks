function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        EnhancedHDStreamingRoadblockVariants: function() {
            return r
        },
        GradientVariants: function() {
            return a
        }
    });
    var i, r, s = n("818083");
    (i = r || (r = {}))[i.NONE = 0] = "NONE", i[i.VARIANT_1A = 1] = "VARIANT_1A", i[i.VARIANT_1B = 2] = "VARIANT_1B", i[i.VARIANT_2A = 3] = "VARIANT_2A", i[i.VARIANT_2B = 4] = "VARIANT_2B";
    let a = [1, 3],
        o = (0, s.createExperiment)({
            kind: "user",
            id: "2024-01_enhanced_hd_streaming_roadblock",
            label: "Enhanced HD Streaming Roadblock",
            defaultConfig: {
                enabled: !1,
                variant: 0
            },
            treatments: [{
                id: 1,
                label: "Variant 1A",
                config: {
                    enabled: !0,
                    variant: 1
                }
            }, {
                id: 2,
                label: "Variant 1B",
                config: {
                    enabled: !0,
                    variant: 2
                }
            }, {
                id: 3,
                label: "Variant 2A",
                config: {
                    enabled: !0,
                    variant: 3
                }
            }, {
                id: 4,
                label: "Variant 2B",
                config: {
                    enabled: !0,
                    variant: 4
                }
            }]
        });
    t.default = o
}