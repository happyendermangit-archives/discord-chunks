function(e, t, n) {
    "use strict";
    n.r(t);
    let i = (0, n("818083").createExperiment)({
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
    t.default = i
}