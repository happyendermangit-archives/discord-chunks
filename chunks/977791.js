function(e, t, n) {
    "use strict";
    var r = n("690244"),
        i = n("706165"),
        a = n("478497")(),
        o = r("%TypeError%"),
        s = {
            assert: function(e, t) {
                if (!e || "object" != typeof e && "function" != typeof e) throw new o("`O` is not an object");
                if ("string" != typeof t) throw new o("`slot` must be a string");
                if (a.assert(e), !s.has(e, t)) throw new o("`" + t + "` is not present on `O`")
            },
            get: function(e, t) {
                if (!e || "object" != typeof e && "function" != typeof e) throw new o("`O` is not an object");
                if ("string" != typeof t) throw new o("`slot` must be a string");
                var n = a.get(e);
                return n && n["$" + t]
            },
            has: function(e, t) {
                if (!e || "object" != typeof e && "function" != typeof e) throw new o("`O` is not an object");
                if ("string" != typeof t) throw new o("`slot` must be a string");
                var n = a.get(e);
                return !!n && i(n, "$" + t)
            },
            set: function(e, t, n) {
                if (!e || "object" != typeof e && "function" != typeof e) throw new o("`O` is not an object");
                if ("string" != typeof t) throw new o("`slot` must be a string");
                var r = a.get(e);
                !r && (r = {}, a.set(e, r)), r["$" + t] = n
            }
        };
    Object.freeze && Object.freeze(s), e.exports = s
}