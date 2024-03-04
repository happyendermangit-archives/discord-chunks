function(e, t, n) {
    "use strict";
    var r = n("934940"),
        i = r.define("Time", function() {
            this.choice({
                utcTime: this.utctime(),
                generalTime: this.gentime()
            })
        }),
        o = r.define("AttributeTypeValue", function() {
            this.seq().obj(this.key("type").objid(), this.key("value").any())
        }),
        s = r.define("AlgorithmIdentifier", function() {
            this.seq().obj(this.key("algorithm").objid(), this.key("parameters").optional(), this.key("curve").objid().optional())
        }),
        a = r.define("SubjectPublicKeyInfo", function() {
            this.seq().obj(this.key("algorithm").use(s), this.key("subjectPublicKey").bitstr())
        }),
        c = r.define("RelativeDistinguishedName", function() {
            this.setof(o)
        }),
        u = r.define("RDNSequence", function() {
            this.seqof(c)
        }),
        d = r.define("Name", function() {
            this.choice({
                rdnSequence: this.use(u)
            })
        }),
        l = r.define("Validity", function() {
            this.seq().obj(this.key("notBefore").use(i), this.key("notAfter").use(i))
        }),
        f = r.define("Extension", function() {
            this.seq().obj(this.key("extnID").objid(), this.key("critical").bool().def(!1), this.key("extnValue").octstr())
        }),
        p = r.define("TBSCertificate", function() {
            this.seq().obj(this.key("version").explicit(0).int().optional(), this.key("serialNumber").int(), this.key("signature").use(s), this.key("issuer").use(d), this.key("validity").use(l), this.key("subject").use(d), this.key("subjectPublicKeyInfo").use(a), this.key("issuerUniqueID").implicit(1).bitstr().optional(), this.key("subjectUniqueID").implicit(2).bitstr().optional(), this.key("extensions").explicit(3).seqof(f).optional())
        }),
        h = r.define("X509Certificate", function() {
            this.seq().obj(this.key("tbsCertificate").use(p), this.key("signatureAlgorithm").use(s), this.key("signatureValue").bitstr())
        });
    e.exports = h
}