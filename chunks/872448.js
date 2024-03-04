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
    e.exports = function(e, t, n, i) {
        return (t = t || "&", n = n || "=", null === e && (e = void 0), "object" == typeof e) ? Object.keys(e).map(function(i) {
            var o = encodeURIComponent(r(i)) + n;
            return Array.isArray(e[i]) ? e[i].map(function(e) {
                return o + encodeURIComponent(r(e))
            }).join(t) : o + encodeURIComponent(r(e[i]))
        }).filter(Boolean).join(t) : i ? encodeURIComponent(r(i)) + n + encodeURIComponent(r(e)) : ""
    }
}