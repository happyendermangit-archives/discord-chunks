function(t, e, s) {
    "use strict";
    var r = s("748795"),
        i = s("911718")("%TypeError%"),
        n = s("583608"),
        c = s("841819"),
        o = s("466917");
    t.exports = function(t) {
        if ("Object" !== n(t)) throw new i("ToPropertyDescriptor requires an object");
        var e = {};
        if (r(t, "enumerable") && (e["[[Enumerable]]"] = c(t.enumerable)), r(t, "configurable") && (e["[[Configurable]]"] = c(t.configurable)), r(t, "value") && (e["[[Value]]"] = t.value), r(t, "writable") && (e["[[Writable]]"] = c(t.writable)), r(t, "get")) {
            var s = t.get;
            if (void 0 !== s && !o(s)) throw new i("getter must be a function");
            e["[[Get]]"] = s
        }
        if (r(t, "set")) {
            var f = t.set;
            if (void 0 !== f && !o(f)) throw new i("setter must be a function");
            e["[[Set]]"] = f
        }
        if ((r(e, "[[Get]]") || r(e, "[[Set]]")) && (r(e, "[[Value]]") || r(e, "[[Writable]]"))) throw new i("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
        return e
    }
}