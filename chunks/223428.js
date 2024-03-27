function(e, t, n) {
    var r = n("585559"),
        i = n("771378"),
        a = n("778247"),
        o = n("780177"),
        s = n("585754"),
        u = n("957578").Buffer;

    function c(e) {
        "object" == typeof e && !u.isBuffer(e) && (t = e.passphrase, e = e.key), "string" == typeof e && (e = u.from(e));
        var t, n, c, l = a(e, t),
            d = l.tag,
            f = l.data;
        switch (d) {
            case "CERTIFICATE":
                c = r.certificate.decode(f, "der").tbsCertificate.subjectPublicKeyInfo;
            case "PUBLIC KEY":
                switch (!c && (c = r.PublicKey.decode(f, "der")), n = c.algorithm.algorithm.join(".")) {
                    case "1.2.840.113549.1.1.1":
                        return r.RSAPublicKey.decode(c.subjectPublicKey.data, "der");
                    case "1.2.840.10045.2.1":
                        return c.subjectPrivateKey = c.subjectPublicKey, {
                            type: "ec",
                            data: c
                        };
                    case "1.2.840.10040.4.1":
                        return c.algorithm.params.pub_key = r.DSAparam.decode(c.subjectPublicKey.data, "der"), {
                            type: "dsa",
                            data: c.algorithm.params
                        };
                    default:
                        throw Error("unknown key id " + n)
                }
            case "ENCRYPTED PRIVATE KEY":
                f = function(e, t) {
                    var n = e.algorithm.decrypt.kde.kdeparams.salt,
                        r = parseInt(e.algorithm.decrypt.kde.kdeparams.iters.toString(), 10),
                        a = i[e.algorithm.decrypt.cipher.algo.join(".")],
                        c = e.algorithm.decrypt.cipher.iv,
                        l = e.subjectPrivateKey,
                        d = parseInt(a.split("-")[1], 10) / 8,
                        f = s.pbkdf2Sync(t, n, r, d, "sha1"),
                        p = o.createDecipheriv(a, f, c),
                        h = [];
                    return h.push(p.update(l)), h.push(p.final()), u.concat(h)
                }(f = r.EncryptedPrivateKey.decode(f, "der"), t);
            case "PRIVATE KEY":
                switch (n = (c = r.PrivateKey.decode(f, "der")).algorithm.algorithm.join(".")) {
                    case "1.2.840.113549.1.1.1":
                        return r.RSAPrivateKey.decode(c.subjectPrivateKey, "der");
                    case "1.2.840.10045.2.1":
                        return {
                            curve: c.algorithm.curve, privateKey: r.ECPrivateKey.decode(c.subjectPrivateKey, "der").privateKey
                        };
                    case "1.2.840.10040.4.1":
                        return c.algorithm.params.priv_key = r.DSAparam.decode(c.subjectPrivateKey, "der"), {
                            type: "dsa",
                            params: c.algorithm.params
                        };
                    default:
                        throw Error("unknown key id " + n)
                }
            case "RSA PUBLIC KEY":
                return r.RSAPublicKey.decode(f, "der");
            case "RSA PRIVATE KEY":
                return r.RSAPrivateKey.decode(f, "der");
            case "DSA PRIVATE KEY":
                return {
                    type: "dsa", params: r.DSAPrivateKey.decode(f, "der")
                };
            case "EC PRIVATE KEY":
                return {
                    curve: (f = r.ECPrivateKey.decode(f, "der")).parameters.value, privateKey: f.privateKey
                };
            default:
                throw Error("unknown key type " + d)
        }
    }
    e.exports = c, c.signature = r.signature
}