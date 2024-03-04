function(e, t, n) {
    "use strict";
    n("70102"), n("781738");
    let r = n("599235"),
        i = n("415005").Buffer,
        o = n("348793");

    function s(e) {
        o.call(this, e), this.enc = "pem"
    }
    r(s, o), e.exports = s, s.prototype.decode = function(e, t) {
        let n = e.toString().split(/[\r\n]+/g),
            r = t.label.toUpperCase(),
            s = /^-----(BEGIN|END) ([^-]+)-----$/,
            a = -1,
            c = -1;
        for (let e = 0; e < n.length; e++) {
            let t = n[e].match(s);
            if (null !== t) {
                if (t[2] === r) {
                    if (-1 === a) {
                        if ("BEGIN" !== t[1]) break;
                        a = e
                    } else {
                        if ("END" !== t[1]) break;
                        c = e;
                        break
                    }
                }
            }
        }
        if (-1 === a || -1 === c) throw Error("PEM section not found for: " + r);
        let u = n.slice(a + 1, c).join("");
        u.replace(/[^a-z0-9+/=]+/gi, "");
        let d = i.from(u, "base64");
        return o.prototype.decode.call(this, d, t)
    }
}