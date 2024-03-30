function(e, t, n) {
    "use strict";
    n.r(t);

    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var o = new(function() {
        var e, t, n;

        function o() {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, o)
        }
        return e = o, t = [{
            key: "setActive",
            value: function(e) {
                return Promise.resolve()
            }
        }, {
            key: "setEnabled",
            value: function(e) {}
        }, {
            key: "setSelectedStream",
            value: function(e) {}
        }, {
            key: "setFocusedStream",
            value: function(e) {}
        }, {
            key: "setMirrored",
            value: function(e) {}
        }, {
            key: "setPipAspectRatio",
            value: function(e, t) {}
        }, {
            key: "updateSourceTrackingView",
            value: function() {}
        }, {
            key: "addOnPipModeChangedListener",
            value: function(e) {}
        }, {
            key: "addOnPipModeWillChangeListener",
            value: function(e) {}
        }, {
            key: "isEnabled",
            value: function() {
                return !1
            }
        }], r(e.prototype, t), n && r(e, n), o
    }());
    t.default = o
}