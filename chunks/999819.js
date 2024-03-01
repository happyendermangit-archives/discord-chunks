function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var a = n("862205");
    let l = (0, a.createExperiment)({
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
    var o = l
}