function(t, r, n) {
    "use strict";
    var e = n("664144"),
        i = n("174669"),
        o = n("814026"),
        u = n("140925"),
        a = i("iterator");
    t.exports = !e(function() {
        var t = new URL("b?a=1&b=2&c=3", "http://a"),
            r = t.searchParams,
            n = new URLSearchParams("a=1&a=2&b=3"),
            e = "";
        return t.pathname = "c%20d", r.forEach(function(t, n) {
            r.delete("b"), e += n + t
        }), n.delete("a", 2), n.delete("b", void 0), u && (!t.toJSON || !n.has("a", 1) || n.has("a", 2) || !n.has("a", void 0) || n.has("b")) || !r.size && (u || !o) || !r.sort || "http://a/c%20d?a=1&c=3" !== t.href || "3" !== r.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !r[a] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash || "a1c3" !== e || "x" !== new URL("http://x", void 0).host
    })
}