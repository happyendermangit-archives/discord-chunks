function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    }), n("581081");
    var i, s, r = n("316693");
    (i = class {
        static has(e, t) {
            return (e & t) != 0
        }
        static asBasicFlag(e) {
            return r.asUintN(20, e)
        }
        static asBigFlag(e) {
            return !Object.hasOwn(this.cache, e) && (this.cache[e] = r.deserialize(e)), this.cache[e]
        }
    }).cache = {}, s = i
}