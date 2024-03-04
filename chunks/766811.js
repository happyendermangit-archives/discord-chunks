function(e, t, n) {
    "use strict";
    n("70102");
    var r = Object.getOwnPropertySymbols,
        i = Object.prototype.hasOwnProperty,
        o = Object.prototype.propertyIsEnumerable;
    e.exports = ! function() {
        try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
            for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
            var r = Object.getOwnPropertyNames(t).map(function(e) {
                return t[e]
            });
            if ("0123456789" !== r.join("")) return !1;
            var i = {};
            if ("abcdefghijklmnopqrst".split("").forEach(function(e) {
                    i[e] = e
                }), "abcdefghijklmnopqrst" !== Object.keys(Object.assign({}, i)).join("")) return !1;
            return !0
        } catch (e) {
            return !1
        }
    }() ? function(e, t) {
        for (var n, s, a = function(e) {
                if (null == e) throw TypeError("Object.assign cannot be called with null or undefined");
                return Object(e)
            }(e), c = 1; c < arguments.length; c++) {
            for (var u in n = Object(arguments[c]), n) i.call(n, u) && (a[u] = n[u]);
            if (r) {
                s = r(n);
                for (var d = 0; d < s.length; d++) o.call(n, s[d]) && (a[s[d]] = n[s[d]])
            }
        }
        return a
    } : Object.assign
}