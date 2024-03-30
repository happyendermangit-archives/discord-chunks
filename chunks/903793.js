function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("94498");
    t.default = (0, r.createExperiment)({
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