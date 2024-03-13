function(t, r, e) {
    "use strict";
    var n = e("664144"),
        o = e("174669"),
        i = e("814026"),
        a = e("140925"),
        u = o("iterator");
    t.exports = !n(function() {
        var t = new URL("b?a=1&b=2&c=3", "http://a"),
            r = t.searchParams,
            e = new URLSearchParams("a=1&a=2&b=3"),
            n = "";
        return t.pathname = "c%20d", r.forEach(function(t, e) {
            r.delete("b"), n += e + t
        }), e.delete("a", 2), e.delete("b", void 0), a && (!t.toJSON || !e.has("a", 1) || e.has("a", 2) || !e.has("a", void 0) || e.has("b")) || !r.size && (a || !i) || !r.sort || "http://a/c%20d?a=1&c=3" !== t.href || "3" !== r.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !r[u] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash || "a1c3" !== n || "x" !== new URL("http://x", void 0).host
    })
}