function(e, t, n) {
    "use strict";

    function r(e) {
        return "/" === e.charAt(0)
    }

    function i(e, t) {
        for (var n = t, r = n + 1, i = e.length; r < i; n += 1, r += 1) e[n] = e[r];
        e.pop()
    }
    n.r(t);
    t.default = function(e, t) {
        void 0 === t && (t = "");
        var n, a = e && e.split("/") || [],
            o = t && t.split("/") || [],
            s = e && r(e),
            u = t && r(t),
            c = s || u;
        if (e && r(e) ? o = a : a.length && (o.pop(), o = o.concat(a)), !o.length) return "/";
        if (o.length) {
            var l = o[o.length - 1];
            n = "." === l || ".." === l || "" === l
        } else n = !1;
        for (var d = 0, f = o.length; f >= 0; f--) {
            var p = o[f];
            "." === p ? i(o, f) : ".." === p ? (i(o, f), d++) : d && (i(o, f), d--)
        }
        if (!c)
            for (; d--; d) o.unshift("..");
        c && "" !== o[0] && (!o[0] || !r(o[0])) && o.unshift("");
        var h = o.join("/");
        return n && "/" !== h.substr(-1) && (h += "/"), h
    }
}