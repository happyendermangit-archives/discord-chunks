function(e, t, n) {
    var r = n("40251"),
        i = n("790784"),
        a = n("313739");
    t.createCipher = t.Cipher = r.createCipher, t.createCipheriv = t.Cipheriv = r.createCipheriv, t.createDecipher = t.Decipher = i.createDecipher, t.createDecipheriv = t.Decipheriv = i.createDecipheriv, t.listCiphers = t.getCiphers = function() {
        return Object.keys(a)
    }
}