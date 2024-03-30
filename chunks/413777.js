function(e, t, n) {
    "use strict";
    n.r(t);
    var a = n("163291"),
        r = n("53881"),
        c = n("374550"),
        o = n("131900"),
        i = n("281767");

    function f(e, t) {
        for (var n = 0; n < t.length; n++) {
            var a = t[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }

    function d(e, t) {
        return !(e === i.NavigateEventSource.BROWSER && r.default.hasKeybind(i.KeyboardDeviceTypes.MOUSE_BUTTON, t)) && !0
    }
    var u = function() {
        var e, t, n;

        function r() {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, r)
        }
        return e = r, t = [{
            key: "initialize",
            value: function() {
                (0, c.isDesktop)() && (o.default.on("NAVIGATE_BACK", function(e, t) {
                    d(t, i.MouseKeyCodes.Back) && (0, a.back)()
                }), o.default.on("NAVIGATE_FORWARD", function(e, t) {
                    d(t, i.MouseKeyCodes.Forward) && (0, a.forward)()
                }))
            }
        }], f(e.prototype, t), n && f(e, n), r
    }();
    t.default = new u
}