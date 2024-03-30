function(t, r, n) {
    "use strict";
    var e = n("325008"),
        o = n("740362"),
        i = Function.prototype,
        u = e && Object.getOwnPropertyDescriptor,
        c = o(i, "name"),
        s = c && (!e || e && u(i, "name").configurable);
    t.exports = {
        EXISTS: c,
        PROPER: c && "something" === (function() {}).name,
        CONFIGURABLE: s
    }
}