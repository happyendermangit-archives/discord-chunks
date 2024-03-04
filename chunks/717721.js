function(e, t, n) {
    "use strict";
    var r = n("748795"),
        i = n("911718")("%TypeError%"),
        o = n("583608"),
        s = n("841819"),
        a = n("466917");
    e.exports = function(e) {
        if ("Object" !== o(e)) throw new i("ToPropertyDescriptor requires an object");
        var t = {};
        if (r(e, "enumerable") && (t["[[Enumerable]]"] = s(e.enumerable)), r(e, "configurable") && (t["[[Configurable]]"] = s(e.configurable)), r(e, "value") && (t["[[Value]]"] = e.value), r(e, "writable") && (t["[[Writable]]"] = s(e.writable)), r(e, "get")) {
            var n = e.get;
            if (void 0 !== n && !a(n)) throw new i("getter must be a function");
            t["[[Get]]"] = n
        }
        if (r(e, "set")) {
            var c = e.set;
            if (void 0 !== c && !a(c)) throw new i("setter must be a function");
            t["[[Set]]"] = c
        }
        if ((r(t, "[[Get]]") || r(t, "[[Set]]")) && (r(t, "[[Value]]") || r(t, "[[Writable]]"))) throw new i("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
        return t
    }
}