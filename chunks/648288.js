function(e, t, n) {
    "use strict";
    var r = n("911718"),
        i = n("748795"),
        o = n("890741")(),
        s = r("%TypeError%"),
        a = {
            assert: function(e, t) {
                if (!e || "object" != typeof e && "function" != typeof e) throw new s("`O` is not an object");
                if ("string" != typeof t) throw new s("`slot` must be a string");
                if (o.assert(e), !a.has(e, t)) throw new s("`" + t + "` is not present on `O`")
            },
            get: function(e, t) {
                if (!e || "object" != typeof e && "function" != typeof e) throw new s("`O` is not an object");
                if ("string" != typeof t) throw new s("`slot` must be a string");
                var n = o.get(e);
                return n && n["$" + t]
            },
            has: function(e, t) {
                if (!e || "object" != typeof e && "function" != typeof e) throw new s("`O` is not an object");
                if ("string" != typeof t) throw new s("`slot` must be a string");
                var n = o.get(e);
                return !!n && i(n, "$" + t)
            },
            set: function(e, t, n) {
                if (!e || "object" != typeof e && "function" != typeof e) throw new s("`O` is not an object");
                if ("string" != typeof t) throw new s("`slot` must be a string");
                var r = o.get(e);
                !r && (r = {}, o.set(e, r)), r["$" + t] = n
            }
        };
    Object.freeze && Object.freeze(a), e.exports = a
}