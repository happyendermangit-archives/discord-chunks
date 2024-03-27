function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("818083");
    t.default = (0, i.createExperiment)({
        kind: "user",
        id: "2023-03_april_fools",
        label: "April Fools 2023",
        defaultConfig: {
            allowAprilFoolsSoundpack: !1
        },
        treatments: [{
            id: 1,
            label: "April Fools 2023",
            config: {
                allowAprilFoolsSoundpack: !0
            }
        }]
    })
}