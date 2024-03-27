function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("818083");
    t.default = (0, i.createExperiment)({
        kind: "user",
        id: "2021-07_popout_autocomplete",
        label: "Popout Autocomplete experiment",
        defaultConfig: {
            usePopoutAutocomplete: !1
        },
        treatments: [{
            id: 1,
            label: "New autocomplete style",
            config: {
                usePopoutAutocomplete: !0
            }
        }]
    })
}