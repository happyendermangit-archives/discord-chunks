function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    }), n("51350");
    var i, r, a, s = n("149765");
    class o {
        static has(e, t) {
            return (e & t) != 0
        }
        static asBasicFlag(e) {
            return s.asUintN(20, e)
        }
        static asBigFlag(e) {
            return !Object.hasOwn(this.cache, e) && (this.cache[e] = s.deserialize(e)), this.cache[e]
        }
    }
    a = {}, (r = "cache") in(i = o) ? Object.defineProperty(i, r, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = a
}