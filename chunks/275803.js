function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        UUOneClickExperiment: function() {
            return o
        }
    });
    var t = E("862205");
    let o = (0, t.createExperiment)({
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