function(t, e, r) {
    "use strict";
    var n, o = r("24033"),
        i = r("94567"),
        c = r("202234"),
        s = r("624906"),
        u = r("620623"),
        a = r("722063"),
        f = r("883539"),
        p = "prototype",
        l = "script",
        y = f("IE_PROTO"),
        v = function() {},
        d = function(t) {
            return "<" + l + ">" + t + "</" + l + ">"
        },
        h = function(t) {
            t.write(d("")), t.close();
            var e = t.parentWindow.Object;
            return t = null, e
        },
        L = function() {
            var t, e = a("iframe");
            return e.style.display = "none", u.appendChild(e), e.src = String("java" + l + ":"), (t = e.contentWindow.document).open(), t.write(d("document.F=Object")), t.close(), t.F
        },
        O = function() {
            try {
                n = new ActiveXObject("htmlfile")
            } catch (t) {}
            O = "undefined" != typeof document ? document.domain && n ? h(n) : L() : h(n);
            for (var t = c.length; t--;) delete O[p][c[t]];
            return O()
        };
    s[y] = !0, t.exports = Object.create || function(t, e) {
        var r;
        return null !== t ? (v[p] = o(t), r = new v, v[p] = null, r[y] = t) : r = O(), void 0 === e ? r : i.f(r, e)
    }
}