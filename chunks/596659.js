function(e, t, n) {
    n("70102"), n("424973");
    var r = n("678304"),
        i = n("678889"),
        o = n("811527"),
        s = n("891044"),
        a = n("560422"),
        c = n("912065").Buffer;

    function u(e) {
        "object" == typeof e && !c.isBuffer(e) && (t = e.passphrase, e = e.key), "string" == typeof e && (e = c.from(e));
        var t, n, u, d = o(e, t),
            l = d.tag,
            f = d.data;
        switch (l) {
            case "CERTIFICATE":
                u = r.certificate.decode(f, "der").tbsCertificate.subjectPublicKeyInfo;
            case "PUBLIC KEY":
                switch (!u && (u = r.PublicKey.decode(f, "der")), n = u.algorithm.algorithm.join(".")) {
                    case "1.2.840.113549.1.1.1":
                        return r.RSAPublicKey.decode(u.subjectPublicKey.data, "der");
                    case "1.2.840.10045.2.1":
                        return u.subjectPrivateKey = u.subjectPublicKey, {
                            type: "ec",
                            data: u
                        };
                    case "1.2.840.10040.4.1":
                        return u.algorithm.params.pub_key = r.DSAparam.decode(u.subjectPublicKey.data, "der"), {
                            type: "dsa",
                            data: u.algorithm.params
                        };
                    default:
                        throw Error("unknown key id " + n)
                }
            case "ENCRYPTED PRIVATE KEY":
                f = function(e, t) {
                    var n = e.algorithm.decrypt.kde.kdeparams.salt,
                        r = parseInt(e.algorithm.decrypt.kde.kdeparams.iters.toString(), 10),
                        o = i[e.algorithm.decrypt.cipher.algo.join(".")],
                        u = e.algorithm.decrypt.cipher.iv,
                        d = e.subjectPrivateKey,
                        l = parseInt(o.split("-")[1], 10) / 8,
                        f = a.pbkdf2Sync(t, n, r, l, "sha1"),
                        p = s.createDecipheriv(o, f, u),
                        h = [];
                    return h.push(p.update(d)), h.push(p.final()), c.concat(h)
                }(f = r.EncryptedPrivateKey.decode(f, "der"), t);
            case "PRIVATE KEY":
                switch (n = (u = r.PrivateKey.decode(f, "der")).algorithm.algorithm.join(".")) {
                    case "1.2.840.113549.1.1.1":
                        return r.RSAPrivateKey.decode(u.subjectPrivateKey, "der");
                    case "1.2.840.10045.2.1":
                        return {
                            curve: u.algorithm.curve, privateKey: r.ECPrivateKey.decode(u.subjectPrivateKey, "der").privateKey
                        };
                    case "1.2.840.10040.4.1":
                        return u.algorithm.params.priv_key = r.DSAparam.decode(u.subjectPrivateKey, "der"), {
                            type: "dsa",
                            params: u.algorithm.params
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
                throw Error("unknown key type " + l)
        }
    }
    e.exports = u, u.signature = r.signature
}