function(t, e, s) {
    "use strict";
    var r = s("911718"),
        i = s("748795"),
        n = s("890741")(),
        c = r("%TypeError%"),
        o = {
            assert: function(t, e) {
                if (!t || "object" != typeof t && "function" != typeof t) throw new c("`O` is not an object");
                if ("string" != typeof e) throw new c("`slot` must be a string");
                if (n.assert(t), !o.has(t, e)) throw new c("`" + e + "` is not present on `O`")
            },
            get: function(t, e) {
                if (!t || "object" != typeof t && "function" != typeof t) throw new c("`O` is not an object");
                if ("string" != typeof e) throw new c("`slot` must be a string");
                var s = n.get(t);
                return s && s["$" + e]
            },
            has: function(t, e) {
                if (!t || "object" != typeof t && "function" != typeof t) throw new c("`O` is not an object");
                if ("string" != typeof e) throw new c("`slot` must be a string");
                var s = n.get(t);
                return !!s && i(s, "$" + e)
            },
            set: function(t, e, s) {
                if (!t || "object" != typeof t && "function" != typeof t) throw new c("`O` is not an object");
                if ("string" != typeof e) throw new c("`slot` must be a string");
                var r = n.get(t);
                !r && (r = {}, n.set(t, r)), r["$" + e] = s
            }
        };
    Object.freeze && Object.freeze(o), t.exports = o
}