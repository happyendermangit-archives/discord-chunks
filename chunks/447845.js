function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var i = n("862205");
    let a = (0, i.createExperiment)({
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
    var l = a
}