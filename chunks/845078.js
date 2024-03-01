function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    }), n("581081");
    var i, r, s = n("316693");
    (i = class {
        static has(e, t) {
            return (e & t) != 0
        }
        static asBasicFlag(e) {
            return s.default.asUintN(20, e)
        }
        static asBigFlag(e) {
            return !Object.hasOwn(this.cache, e) && (this.cache[e] = s.default.deserialize(e)), this.cache[e]
        }
    }).cache = {}, r = i
}