function(e, t, n) {
    "use strict";
    t.randomBytes = t.rng = t.pseudoRandomBytes = t.prng = n("706178"), t.createHash = t.Hash = n("108381"), t.createHmac = t.Hmac = n("294415");
    var r = ["sha1", "sha224", "sha256", "sha384", "sha512", "md5", "rmd160"].concat(Object.keys(n("518401")));
    t.getHashes = function() {
        return r
    };
    var i = n("585754");
    t.pbkdf2 = i.pbkdf2, t.pbkdf2Sync = i.pbkdf2Sync;
    var a = n("768730");
    t.Cipher = a.Cipher, t.createCipher = a.createCipher, t.Cipheriv = a.Cipheriv, t.createCipheriv = a.createCipheriv, t.Decipher = a.Decipher, t.createDecipher = a.createDecipher, t.Decipheriv = a.Decipheriv, t.createDecipheriv = a.createDecipheriv, t.getCiphers = a.getCiphers, t.listCiphers = a.listCiphers;
    var o = n("985493");
    t.DiffieHellmanGroup = o.DiffieHellmanGroup, t.createDiffieHellmanGroup = o.createDiffieHellmanGroup, t.getDiffieHellman = o.getDiffieHellman, t.createDiffieHellman = o.createDiffieHellman, t.DiffieHellman = o.DiffieHellman;
    var s = n("552718");
    t.createSign = s.createSign, t.Sign = s.Sign, t.createVerify = s.createVerify, t.Verify = s.Verify, t.createECDH = n("398833");
    var u = n("197909");
    t.publicEncrypt = u.publicEncrypt, t.privateEncrypt = u.privateEncrypt, t.publicDecrypt = u.publicDecrypt, t.privateDecrypt = u.privateDecrypt;
    var c = n("107083");
    t.randomFill = c.randomFill, t.randomFillSync = c.randomFillSync, t.createCredentials = function() {
        throw Error("sorry, createCredentials is not implemented yet\nwe accept pull requests\nhttps://github.com/crypto-browserify/crypto-browserify")
    }, t.constants = {
        DH_CHECK_P_NOT_SAFE_PRIME: 2,
        DH_CHECK_P_NOT_PRIME: 1,
        DH_UNABLE_TO_CHECK_GENERATOR: 4,
        DH_NOT_SUITABLE_GENERATOR: 8,
        NPN_ENABLED: 1,
        ALPN_ENABLED: 1,
        RSA_PKCS1_PADDING: 1,
        RSA_SSLV23_PADDING: 2,
        RSA_NO_PADDING: 3,
        RSA_PKCS1_OAEP_PADDING: 4,
        RSA_X931_PADDING: 5,
        RSA_PKCS1_PSS_PADDING: 6,
        POINT_CONVERSION_COMPRESSED: 2,
        POINT_CONVERSION_UNCOMPRESSED: 4,
        POINT_CONVERSION_HYBRID: 6
    }
}