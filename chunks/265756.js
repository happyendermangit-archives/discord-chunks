function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });

    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var o = function() {
        var e, t, n;

        function o() {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, o)
        }
        return e = o, t = [{
            key: "acquire",
            value: function(e) {
                return navigator.mediaDevices.getUserMedia(e)
            }
        }, {
            key: "release",
            value: function(e) {
                e.getTracks().forEach(function(e) {
                    e.onended = function() {}, e.stop()
                })
            }
        }], r(e.prototype, t), n && r(e, n), o
    }()
}