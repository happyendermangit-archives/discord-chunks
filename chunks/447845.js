function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var a = n("862205");
    let i = (0, a.createExperiment)({
        kind: "user",
        id: "2024-03_packages",
        label: "Packages",
        defaultConfig: {
            allowOpeningLootboxes: !1
        },
        treatments: [{
            id: 1,
            label: "Allow users to open packages",
            config: {
                allowOpeningLootboxes: !0
            }
        }]
    });
    var s = i
}