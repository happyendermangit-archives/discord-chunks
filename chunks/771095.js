function(e, t, n) {
    "use strict";
    n("222007"), n("70102");
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator,
        i = n("240988"),
        o = n("170407"),
        s = n("140181"),
        a = n("5927"),
        c = function(e, t) {
            if (null == e) throw TypeError("Cannot call method on " + e);
            if ("string" != typeof t || "number" !== t && "string" !== t) throw TypeError('hint must be "string" or "number"');
            var n, r, s, a = "string" === t ? ["toString", "valueOf"] : ["valueOf", "toString"];
            for (s = 0; s < a.length; ++s)
                if (o(n = e[a[s]]) && i(r = n.call(e))) return r;
            throw TypeError("No default value")
        },
        u = function(e, t) {
            var n = e[t];
            if (null != n) {
                if (!o(n)) throw TypeError(n + " returned for property " + t + " of object " + e + " is not a function");
                return n
            }
        };
    e.exports = function(e) {
        if (i(e)) return e;
        var t, n = "default";
        if (arguments.length > 1 && (arguments[1] === String ? n = "string" : arguments[1] === Number && (n = "number")), r && (Symbol.toPrimitive ? t = u(e, Symbol.toPrimitive) : a(e) && (t = Symbol.prototype.valueOf)), void 0 !== t) {
            var o = t.call(e, n);
            if (i(o)) return o;
            throw TypeError("unable to convert exotic object to primitive")
        }
        return "default" === n && (s(e) || a(e)) && (n = "string"), c(e, "default" === n ? "number" : n)
    }
}