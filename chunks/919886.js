function(e, t, n) {
    "use strict";
    n("70102"), t.randomBytes = t.rng = t.pseudoRandomBytes = t.prng = n("664813"), t.createHash = t.Hash = n("488274"), t.createHmac = t.Hmac = n("145755");
    var r = ["sha1", "sha224", "sha256", "sha384", "sha512", "md5", "rmd160"].concat(Object.keys(n("617169")));
    t.getHashes = function() {
        return r
    };
    var i = n("560422");
    t.pbkdf2 = i.pbkdf2, t.pbkdf2Sync = i.pbkdf2Sync;
    var o = n("148300");
    t.Cipher = o.Cipher, t.createCipher = o.createCipher, t.Cipheriv = o.Cipheriv, t.createCipheriv = o.createCipheriv, t.Decipher = o.Decipher, t.createDecipher = o.createDecipher, t.Decipheriv = o.Decipheriv, t.createDecipheriv = o.createDecipheriv, t.getCiphers = o.getCiphers, t.listCiphers = o.listCiphers;
    var s = n("624815");
    t.DiffieHellmanGroup = s.DiffieHellmanGroup, t.createDiffieHellmanGroup = s.createDiffieHellmanGroup, t.getDiffieHellman = s.getDiffieHellman, t.createDiffieHellman = s.createDiffieHellman, t.DiffieHellman = s.DiffieHellman;
    var a = n("318882");
    t.createSign = a.createSign, t.Sign = a.Sign, t.createVerify = a.createVerify, t.Verify = a.Verify, t.createECDH = n("162172");
    var c = n("588534");
    t.publicEncrypt = c.publicEncrypt, t.privateEncrypt = c.privateEncrypt, t.publicDecrypt = c.publicDecrypt, t.privateDecrypt = c.privateDecrypt;
    var u = n("307334");
    t.randomFill = u.randomFill, t.randomFillSync = u.randomFillSync, t.createCredentials = function() {
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