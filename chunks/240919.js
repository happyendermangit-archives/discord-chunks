function(e, t, n) {
    "use strict";
    var r = n("54341"),
        i = n("81021")("%TypeError%"),
        a = n("632384"),
        o = n("710157"),
        s = n("713720");
    e.exports = function(e) {
        if ("Object" !== a(e)) throw new i("ToPropertyDescriptor requires an object");
        var t = {};
        if (r(e, "enumerable") && (t["[[Enumerable]]"] = o(e.enumerable)), r(e, "configurable") && (t["[[Configurable]]"] = o(e.configurable)), r(e, "value") && (t["[[Value]]"] = e.value), r(e, "writable") && (t["[[Writable]]"] = o(e.writable)), r(e, "get")) {
            var n = e.get;
            if (void 0 !== n && !s(n)) throw new i("getter must be a function");
            t["[[Get]]"] = n
        }
        if (r(e, "set")) {
            var u = e.set;
            if (void 0 !== u && !s(u)) throw new i("setter must be a function");
            t["[[Set]]"] = u
        }
        if ((r(t, "[[Get]]") || r(t, "[[Set]]")) && (r(t, "[[Value]]") || r(t, "[[Writable]]"))) throw new i("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
        return t
    }
}