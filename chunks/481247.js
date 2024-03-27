function(e, t, n) {
    "use strict";
    let r = n("689118"),
        i = n("692656");

    function a(e) {
        i.call(this, e), this.enc = "pem"
    }
    r(a, i), e.exports = a, a.prototype.encode = function(e, t) {
        let n = i.prototype.encode.call(this, e).toString("base64"),
            r = ["-----BEGIN " + t.label + "-----"];
        for (let e = 0; e < n.length; e += 64) r.push(n.slice(e, e + 64));
        return r.push("-----END " + t.label + "-----"), r.join("\n")
    }
}