function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var i = n("862205");
    let s = (0, i.createExperiment)({
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
    var r = s
}