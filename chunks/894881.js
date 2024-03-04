function(e, t, n) {
    n("70102");
    var r = n("596659"),
        i = n("746067"),
        o = n("963130"),
        s = n("839309"),
        a = n("422077"),
        c = n("488274"),
        u = n("533971"),
        d = n("912065").Buffer;
    e.exports = function(e, t, n) {
        l = e.padding ? e.padding : n ? 1 : 4;
        var l, f, p = r(e),
            h = p.modulus.byteLength();
        if (t.length > h || new s(t).cmp(p.modulus) >= 0) throw Error("decryption error");
        f = n ? u(new s(t), p) : a(t, p);
        var v = d.alloc(h - f.length);
        if (f = d.concat([v, f], h), 4 === l) return function(e, t) {
            var n = e.modulus.byteLength(),
                r = c("sha1").update(d.alloc(0)).digest(),
                s = r.length;
            if (0 !== t[0]) throw Error("decryption error");
            var a = t.slice(1, s + 1),
                u = t.slice(s + 1),
                l = o(a, i(u, s)),
                f = o(u, i(l, n - s - 1));
            if (function(e, t) {
                    e = d.from(e), t = d.from(t);
                    var n = 0,
                        r = e.length;
                    e.length !== t.length && (n++, r = Math.min(e.length, t.length));
                    for (var i = -1; ++i < r;) n += e[i] ^ t[i];
                    return n
                }(r, f.slice(0, s))) throw Error("decryption error");
            for (var p = s; 0 === f[p];) p++;
            if (1 !== f[p++]) throw Error("decryption error");
            return f.slice(p)
        }(p, f);
        if (1 === l) return function(e, t, n) {
            for (var r = t.slice(0, 2), i = 2, o = 0; 0 !== t[i++];)
                if (i >= t.length) {
                    o++;
                    break
                } var s = t.slice(2, i - 1);
            if (("0002" !== r.toString("hex") && !n || "0001" !== r.toString("hex") && n) && o++, s.length < 8 && o++, o) throw Error("decryption error");
            return t.slice(i)
        }(p, f, n);
        if (3 === l) return f;
        else throw Error("unknown padding")
    }
}