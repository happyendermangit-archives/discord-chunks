function(t, r, n) {
    "use strict";
    var e = n("814026"),
        o = n("664144");
    t.exports = e && o(function() {
        return 42 !== Object.defineProperty(function() {}, "prototype", {
            value: 42,
            writable: !1
        }).prototype
    })
}