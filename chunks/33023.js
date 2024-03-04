function(e, t, n) {
    "use strict";
    n("424973");
    let r = n("599235"),
        i = n("246305");

    function o(e) {
        i.call(this, e), this.enc = "pem"
    }
    r(o, i), e.exports = o, o.prototype.encode = function(e, t) {
        let n = i.prototype.encode.call(this, e),
            r = n.toString("base64"),
            o = ["-----BEGIN " + t.label + "-----"];
        for (let e = 0; e < r.length; e += 64) o.push(r.slice(e, e + 64));
        return o.push("-----END " + t.label + "-----"), o.join("\n")
    }
}