function(e, t, n) {
    "use strict";
    var r = n("638839")(),
        a = n("911718"),
        o = r && a("%Object.defineProperty%", !0);
    if (o) try {
        o({}, "a", {
            value: 1
        })
    } catch (e) {
        o = !1
    }
    var i = a("%SyntaxError%"),
        s = a("%TypeError%"),
        u = n("293471");
    e.exports = function(e, t, n) {
        if (!e || "object" != typeof e && "function" != typeof e) throw new s("`obj` must be an object or a function`");
        if ("string" != typeof t && "symbol" != typeof t) throw new s("`property` must be a string or a symbol`");
        if (arguments.length > 3 && "boolean" != typeof arguments[3] && null !== arguments[3]) throw new s("`nonEnumerable`, if provided, must be a boolean or null");
        if (arguments.length > 4 && "boolean" != typeof arguments[4] && null !== arguments[4]) throw new s("`nonWritable`, if provided, must be a boolean or null");
        if (arguments.length > 5 && "boolean" != typeof arguments[5] && null !== arguments[5]) throw new s("`nonConfigurable`, if provided, must be a boolean or null");
        if (arguments.length > 6 && "boolean" != typeof arguments[6]) throw new s("`loose`, if provided, must be a boolean");
        var r = arguments.length > 3 ? arguments[3] : null,
            a = arguments.length > 4 ? arguments[4] : null,
            l = arguments.length > 5 ? arguments[5] : null,
            c = arguments.length > 6 && arguments[6],
            d = !!u && u(e, t);
        if (o) o(e, t, {
            configurable: null === l && d ? d.configurable : !l,
            enumerable: null === r && d ? d.enumerable : !r,
            value: n,
            writable: null === a && d ? d.writable : !a
        });
        else if (!c && (r || a || l)) throw new i("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
        else e[t] = n
    }
}