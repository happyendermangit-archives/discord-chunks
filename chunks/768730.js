function(e, t, n) {
    var r = n("242474"),
        i = n("780177"),
        a = n("737372"),
        o = n("109426"),
        s = n("245413");

    function u(e, t, n) {
        if (a[e = e.toLowerCase()]) return i.createCipheriv(e, t, n);
        if (o[e]) return new r({
            key: t,
            iv: n,
            mode: e
        });
        throw TypeError("invalid suite type")
    }

    function c(e, t, n) {
        if (a[e = e.toLowerCase()]) return i.createDecipheriv(e, t, n);
        if (o[e]) return new r({
            key: t,
            iv: n,
            mode: e,
            decrypt: !0
        });
        throw TypeError("invalid suite type")
    }
    t.createCipher = t.Cipher = function(e, t) {
        if (a[e = e.toLowerCase()]) n = a[e].key, r = a[e].iv;
        else if (o[e]) n = 8 * o[e].key, r = o[e].iv;
        else throw TypeError("invalid suite type");
        var n, r, i = s(t, !1, n, r);
        return u(e, i.key, i.iv)
    }, t.createCipheriv = t.Cipheriv = u, t.createDecipher = t.Decipher = function(e, t) {
        if (a[e = e.toLowerCase()]) n = a[e].key, r = a[e].iv;
        else if (o[e]) n = 8 * o[e].key, r = o[e].iv;
        else throw TypeError("invalid suite type");
        var n, r, i = s(t, !1, n, r);
        return c(e, i.key, i.iv)
    }, t.createDecipheriv = t.Decipheriv = c, t.listCiphers = t.getCiphers = function() {
        return Object.keys(o).concat(i.getCiphers())
    }
}