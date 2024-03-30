function(t, e, r) {
    "use strict";
    var n = r("97131").f,
        o = r("740362"),
        i = r("641236")("toStringTag");
    t.exports = function(t, e, r) {
        t && !r && (t = t.prototype), t && !o(t, i) && n(t, i, {
            configurable: !0,
            value: e
        })
    }
}