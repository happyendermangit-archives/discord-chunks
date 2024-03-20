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
        i = t("50885"),
        c = t("49111");

    function r(e, a) {
        return !(e === c.NavigateEventSource.BROWSER && d.default.hasKeybind(c.KeyboardDeviceTypes.MOUSE_BUTTON, a)) && !0
    }
    var o = new class e {
        initialize() {
            (0, n.isDesktop)() && (i.default.on("NAVIGATE_BACK", (e, a) => {
                r(a, c.MouseKeyCodes.Back) && (0, s.back)()
            }), i.default.on("NAVIGATE_FORWARD", (e, a) => {
                r(a, c.MouseKeyCodes.Forward) && (0, s.forward)()
            }))
        }
    }
}