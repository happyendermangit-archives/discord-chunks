function(e, t, n) {
    n("70102");
    var r = n("961863"),
        i = n("891044"),
        o = n("725214"),
        s = n("869578"),
        a = n("786561");

    function c(e, t, n) {
        if (o[e = e.toLowerCase()]) return i.createCipheriv(e, t, n);
        if (s[e]) return new r({
            key: t,
            iv: n,
            mode: e
        });
        throw TypeError("invalid suite type")
    }

    function u(e, t, n) {
        if (o[e = e.toLowerCase()]) return i.createDecipheriv(e, t, n);
        if (s[e]) return new r({
            key: t,
            iv: n,
            mode: e,
            decrypt: !0
        });
        throw TypeError("invalid suite type")
    }
    t.createCipher = t.Cipher = function(e, t) {
        if (o[e = e.toLowerCase()]) n = o[e].key, r = o[e].iv;
        else if (s[e]) n = 8 * s[e].key, r = s[e].iv;
        else throw TypeError("invalid suite type");
        var n, r, i = a(t, !1, n, r);
        return c(e, i.key, i.iv)
    }, t.createCipheriv = t.Cipheriv = c, t.createDecipher = t.Decipher = function(e, t) {
        if (o[e = e.toLowerCase()]) n = o[e].key, r = o[e].iv;
        else if (s[e]) n = 8 * s[e].key, r = s[e].iv;
        else throw TypeError("invalid suite type");
        var n, r, i = a(t, !1, n, r);
        return u(e, i.key, i.iv)
    }, t.createDecipheriv = t.Decipheriv = u, t.listCiphers = t.getCiphers = function() {
        return Object.keys(s).concat(i.getCiphers())
    }
}