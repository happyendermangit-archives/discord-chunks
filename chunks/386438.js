function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    }), n("51350");
    var i, r, s, a = n("149765");
    class o {
        static has(e, t) {
            return (e & t) != 0
        }
        static asBasicFlag(e) {
            return a.asUintN(20, e)
        }
        static asBigFlag(e) {
            return !Object.hasOwn(this.cache, e) && (this.cache[e] = a.deserialize(e)), this.cache[e]
        }
    }
    s = {}, (r = "cache") in(i = o) ? Object.defineProperty(i, r, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = s
}