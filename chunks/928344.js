function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("920478"),
        o = n("392711"),
        i = n.n(o),
        a = n("728285");
    r.default.registerLanguage("ansi", a.default), t.default = {
        highlight: function(e, t, n) {
            if (! function(e) {
                    if (e.indexOf(u) >= 0) return !1;
                    var t = 0,
                        n = e.split("\n"),
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, s = n[Symbol.iterator](); !(r = (a = s.next()).done); r = !0) {
                            var l = a.value;
                            if (l.length > 1e3) return !1;
                            null == l.match(/^\s*[/][/]/) && null != l.match(/[^/]/) && (t = 0);
                            var c = l.match(/[/]/g);
                            if (null != c && (t += c.length) > 30) return !1
                        }
                    } catch (e) {
                        o = !0, i = e
                    } finally {
                        try {
                            !r && null != s.return && s.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return !0
                }(t)) return null;
            Date.now();
            var o = r.default.highlight(e, t, n);
            return Date.now(), o
        },
        hasLanguage: function(e) {
            return null != r.default.getLanguage(e)
        }
    };
    var u = i().repeat("/", 15)
}