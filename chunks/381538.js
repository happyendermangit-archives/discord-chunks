function(e) {
    "use strict";
    var t = Object.getOwnPropertySymbols,
        n = Object.prototype.hasOwnProperty,
        r = Object.prototype.propertyIsEnumerable;
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
    }() ? function(e, i) {
        for (var a, o, s = function(e) {
                if (null == e) throw TypeError("Object.assign cannot be called with null or undefined");
                return Object(e)
            }(e), u = 1; u < arguments.length; u++) {
            for (var c in a = Object(arguments[u]), a) n.call(a, c) && (s[c] = a[c]);
            if (t) {
                o = t(a);
                for (var l = 0; l < o.length; l++) r.call(a, o[l]) && (s[o[l]] = a[o[l]])
            }
        }
        return s
    } : Object.assign
}