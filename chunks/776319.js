function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UUOneClickExperiment: function() {
            return i
        }
    });
    let i = (0, n("818083").createExperiment)({
        kind: "user",
        id: "2023-11_uu_one_click",
        label: "Unique Username one click",
        defaultConfig: {
            enabled: !1
        },
        treatments: [{
            id: 1,
            label: "Enable one click",
            config: {
                enabled: !0
            }
        }]
    })
}