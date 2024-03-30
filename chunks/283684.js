function(e, t, n) {
    "use strict";
    n.r(t);
    var r = (0, n("94498").createExperiment)({
        kind: "user",
        id: "2023-11_keybind_indicators",
        label: "Overlay Keybind Indicators",
        defaultConfig: {
            showKeybindIndicators: !1
        },
        treatments: [{
            id: 1,
            label: "Show Keybind Indicators - Overlay",
            config: {
                showKeybindIndicators: !0
            }
        }]
    });
    t.default = r
}