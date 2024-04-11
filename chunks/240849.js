function(e, t, a) {
    "use strict";
    a.r(t);
    var d = a("703656"),
        n = a("556296"),
        i = a("358085"),
        c = a("998502"),
        o = a("981631");

    function r(e, t) {
        return !(e === o.NavigateEventSource.BROWSER && n.default.hasKeybind(o.KeyboardDeviceTypes.MOUSE_BUTTON, t)) && !0
    }
    t.default = new class e {
        initialize() {
            (0, i.isDesktop)() && (c.default.on("NAVIGATE_BACK", (e, t) => {
                r(t, o.MouseKeyCodes.Back) && (0, d.back)()
            }), c.default.on("NAVIGATE_FORWARD", (e, t) => {
                r(t, o.MouseKeyCodes.Forward) && (0, d.forward)()
            }))
        }
    }
}