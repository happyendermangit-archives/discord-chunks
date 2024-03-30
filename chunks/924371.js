function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("818083");
    t.default = (0, i.createExperiment)({
        kind: "user",
        id: "2023-06_h265_macos",
        label: "Test how h265 works on macos",
        defaultConfig: {
            signalH265SupportMacOS: !1
        },
        treatments: [{
            id: 1,
            label: "Calling with H.265",
            config: {
                signalH265SupportMacOS: !0
            }
        }]
    })
}