function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var r, o, i, a = n("22287");

    function u(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var s = function() {
        var e, t, n;

        function r() {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, r)
        }
        return e = r, t = null, n = [{
            key: "has",
            value: function(e, t) {
                return (e & t) != 0
            }
        }, {
            key: "asBasicFlag",
            value: function(e) {
                return a.asUintN(20, e)
            }
        }, {
            key: "asBigFlag",
            value: function(e) {
                return !Object.hasOwn(this.cache, e) && (this.cache[e] = a.deserialize(e)), this.cache[e]
            }
        }], t && u(e.prototype, t), n && u(e, n), r
    }();
    i = {}, (o = "cache") in(r = s) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i
}