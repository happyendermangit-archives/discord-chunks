function(e, t, n) {
    "use strict";
    n.r(t);
    let i = (0, n("818083").createExperiment)({
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
    t.default = i
}