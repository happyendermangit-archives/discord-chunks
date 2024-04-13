function(e, t, a) {
    "use strict";
    a.r(t);
    var d = a("703656"),
        n = a("556296"),
        c = a("358085"),
        i = a("998502"),
        r = a("981631");

    function o(e, t) {
        return !(e === r.NavigateEventSource.BROWSER && n.default.hasKeybind(r.KeyboardDeviceTypes.MOUSE_BUTTON, t)) && !0
    }
    t.default = new class e {
        initialize() {
            (0, c.isDesktop)() && (i.default.on("NAVIGATE_BACK", (e, t) => {
                o(t, r.MouseKeyCodes.Back) && (0, d.back)()
            }), i.default.on("NAVIGATE_FORWARD", (e, t) => {
                o(t, r.MouseKeyCodes.Forward) && (0, d.forward)()
            }))
        }
    }
}