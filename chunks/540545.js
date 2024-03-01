function(t, e, n) {
    "use strict";

    function r(t) {
        return "/" === t.charAt(0)
    }

    function i(t, e) {
        for (var n = e, r = n + 1, i = t.length; r < i; n += 1, r += 1) t[n] = t[r];
        t.pop()
    }
    n.r(e), n.d(e, {
        default: function() {
            return o
        }
    }), n("843762");
    var o = function(t, e) {
        void 0 === e && (e = "");
        var n, o = t && t.split("/") || [],
            a = e && e.split("/") || [],
            u = t && r(t),
            s = e && r(e),
            c = u || s;
        if (t && r(t) ? a = o : o.length && (a.pop(), a = a.concat(o)), !a.length) return "/";
        if (a.length) {
            var l = a[a.length - 1];
            n = "." === l || ".." === l || "" === l
        } else n = !1;
        for (var f = 0, h = a.length; h >= 0; h--) {
            var p = a[h];
            "." === p ? i(a, h) : ".." === p ? (i(a, h), f++) : f && (i(a, h), f--)
        }
        if (!c)
            for (; f--; f) a.unshift("..");
        c && "" !== a[0] && (!a[0] || !r(a[0])) && a.unshift("");
        var d = a.join("/");
        return n && "/" !== d.substr(-1) && (d += "/"), d
    }
}