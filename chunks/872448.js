function(e, t, n) {
    "use strict";
    var r = function(e) {
        switch (typeof e) {
            case "string":
                return e;
            case "boolean":
                return e ? "true" : "false";
            case "number":
                return isFinite(e) ? e : "";
            default:
                return ""
        }
    };
    e.exports = function(e, t, n, a) {
        return (t = t || "&", n = n || "=", null === e && (e = void 0), "object" == typeof e) ? Object.keys(e).map(function(a) {
            var i = encodeURIComponent(r(a)) + n;
            return Array.isArray(e[a]) ? e[a].map(function(e) {
                return i + encodeURIComponent(r(e))
            }).join(t) : i + encodeURIComponent(r(e[a]))
        }).filter(Boolean).join(t) : a ? encodeURIComponent(r(a)) + n + encodeURIComponent(r(e)) : ""
    }
}