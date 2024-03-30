function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("818083");
    t.default = (0, i.createExperiment)({
        kind: "user",
        id: "2023-03_apps_in_gdms",
        label: "Apps in GDMs",
        defaultConfig: {
            enabled: !1
        },
        treatments: [{
            id: 1,
            label: "Show apps in gdm",
            config: {
                enabled: !0
            }
        }]
    })
}