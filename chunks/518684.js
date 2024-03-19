function(e, a, t) {
    "use strict";
    t.r(a), t.d(a, {
        default: function() {
            return o
        }
    });
    var s = t("393414"),
        d = t("227602"),
        n = t("773336"),
        c = t("50885"),
        i = t("49111");

    function r(e, a) {
        return !(e === i.NavigateEventSource.BROWSER && d.default.hasKeybind(i.KeyboardDeviceTypes.MOUSE_BUTTON, a)) && !0
    }
    var o = new class e {
        initialize() {
            (0, n.isDesktop)() && (c.default.on("NAVIGATE_BACK", (e, a) => {
                r(a, i.MouseKeyCodes.Back) && (0, s.back)()
            }), c.default.on("NAVIGATE_FORWARD", (e, a) => {
                r(a, i.MouseKeyCodes.Forward) && (0, s.forward)()
            }))
        }
    }
}