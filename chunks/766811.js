function(t, e, s) {
    "use strict";
    s("70102");
    var r = Object.getOwnPropertySymbols,
        i = Object.prototype.hasOwnProperty,
        n = Object.prototype.propertyIsEnumerable;
    t.exports = ! function() {
        try {
            if (!Object.assign) return !1;
            var t = new String("abc");
            if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
            for (var e = {}, s = 0; s < 10; s++) e["_" + String.fromCharCode(s)] = s;
            var r = Object.getOwnPropertyNames(e).map(function(t) {
                return e[t]
            });
            if ("0123456789" !== r.join("")) return !1;
            var i = {};
            if ("abcdefghijklmnopqrst".split("").forEach(function(t) {
                    i[t] = t
                }), "abcdefghijklmnopqrst" !== Object.keys(Object.assign({}, i)).join("")) return !1;
            return !0
        } catch (t) {
            return !1
        }
    }() ? function(t, e) {
        for (var s, c, o = function(t) {
                if (null == t) throw TypeError("Object.assign cannot be called with null or undefined");
                return Object(t)
            }(t), f = 1; f < arguments.length; f++) {
            for (var u in s = Object(arguments[f]), s) i.call(s, u) && (o[u] = s[u]);
            if (r) {
                c = r(s);
                for (var a = 0; a < c.length; a++) n.call(s, c[a]) && (o[c[a]] = s[c[a]])
            }
        }
        return o
    } : Object.assign
}