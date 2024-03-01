function(t, e, s) {
    "use strict";
    var r = s("934940");
    e.certificate = s("964138");
    var i = r.define("RSAPrivateKey", function() {
        this.seq().obj(this.key("version").int(), this.key("modulus").int(), this.key("publicExponent").int(), this.key("privateExponent").int(), this.key("prime1").int(), this.key("prime2").int(), this.key("exponent1").int(), this.key("exponent2").int(), this.key("coefficient").int())
    });
    e.RSAPrivateKey = i;
    var n = r.define("RSAPublicKey", function() {
        this.seq().obj(this.key("modulus").int(), this.key("publicExponent").int())
    });
    e.RSAPublicKey = n;
    var c = r.define("SubjectPublicKeyInfo", function() {
        this.seq().obj(this.key("algorithm").use(o), this.key("subjectPublicKey").bitstr())
    });
    e.PublicKey = c;
    var o = r.define("AlgorithmIdentifier", function() {
            this.seq().obj(this.key("algorithm").objid(), this.key("none").null_().optional(), this.key("curve").objid().optional(), this.key("params").seq().obj(this.key("p").int(), this.key("q").int(), this.key("g").int()).optional())
        }),
        f = r.define("PrivateKeyInfo", function() {
            this.seq().obj(this.key("version").int(), this.key("algorithm").use(o), this.key("subjectPrivateKey").octstr())
        });
    e.PrivateKey = f;
    var u = r.define("EncryptedPrivateKeyInfo", function() {
        this.seq().obj(this.key("algorithm").seq().obj(this.key("id").objid(), this.key("decrypt").seq().obj(this.key("kde").seq().obj(this.key("id").objid(), this.key("kdeparams").seq().obj(this.key("salt").octstr(), this.key("iters").int())), this.key("cipher").seq().obj(this.key("algo").objid(), this.key("iv").octstr()))), this.key("subjectPrivateKey").octstr())
    });
    e.EncryptedPrivateKey = u;
    var a = r.define("DSAPrivateKey", function() {
        this.seq().obj(this.key("version").int(), this.key("p").int(), this.key("q").int(), this.key("g").int(), this.key("pub_key").int(), this.key("priv_key").int())
    });
    e.DSAPrivateKey = a, e.DSAparam = r.define("DSAparam", function() {
        this.int()
    });
    var d = r.define("ECPrivateKey", function() {
        this.seq().obj(this.key("version").int(), this.key("privateKey").octstr(), this.key("parameters").optional().explicit(0).use(p), this.key("publicKey").optional().explicit(1).bitstr())
    });
    e.ECPrivateKey = d;
    var p = r.define("ECParameters", function() {
        this.choice({
            namedCurve: this.objid()
        })
    });
    e.signature = r.define("signature", function() {
        this.seq().obj(this.key("r").int(), this.key("s").int())
    })
}