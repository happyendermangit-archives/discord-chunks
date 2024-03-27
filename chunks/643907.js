function(e, t, n) {
    var r = n("492750");
    t.types = Object.create(null), t.extensions = Object.create(null), Object.keys(r).forEach(function(e) {
        var n = r[e].extensions;
        n && n.length && (t.extensions[e] = n, n.forEach(function(n) {
            t.types[n] = e
        }))
    }), t.lookup = function(e) {
        return !!(e && "string" == typeof e && (e = e.replace(/.*[\.\/\\]/, "").toLowerCase())) && (t.types[e] || !1)
    }, t.extension = function(e) {
        if (!e || "string" != typeof e || !(e = e.match(/^\s*([^;\s]*)(?:;|\s|$)/))) return !1;
        var n = t.extensions[e[1].toLowerCase()];
        return !!n && !!n.length && n[0]
    }, t.charset = function(e) {
        var t = r[e];
        return t && t.charset ? t.charset : !!/^text\//.test(e) && "UTF-8"
    }, t.charsets = {
        lookup: t.charset
    }, t.contentType = function(e) {
        if (!e || "string" != typeof e) return !1;
        if (!~e.indexOf("/") && (e = t.lookup(e)), !e) return !1;
        if (!~e.indexOf("charset")) {
            var n = t.charset(e);
            n && (e += "; charset=" + n.toLowerCase())
        }
        return e
    }
}