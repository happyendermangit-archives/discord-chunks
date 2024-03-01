function(t, e, s) {
    "use strict";
    s("424973");
    let r = s("599235"),
        i = s("246305");

    function n(t) {
        i.call(this, t), this.enc = "pem"
    }
    r(n, i), t.exports = n, n.prototype.encode = function(t, e) {
        let s = i.prototype.encode.call(this, t),
            r = s.toString("base64"),
            n = ["-----BEGIN " + e.label + "-----"];
        for (let t = 0; t < r.length; t += 64) n.push(r.slice(t, t + 64));
        return n.push("-----END " + e.label + "-----"), n.join("\n")
    }
}