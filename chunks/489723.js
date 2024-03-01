function(t, e, s) {
    "use strict";
    s("70102"), s("781738");
    let r = s("599235"),
        i = s("415005").Buffer,
        n = s("348793");

    function c(t) {
        n.call(this, t), this.enc = "pem"
    }
    r(c, n), t.exports = c, c.prototype.decode = function(t, e) {
        let s = t.toString().split(/[\r\n]+/g),
            r = e.label.toUpperCase(),
            c = /^-----(BEGIN|END) ([^-]+)-----$/,
            o = -1,
            f = -1;
        for (let t = 0; t < s.length; t++) {
            let e = s[t].match(c);
            if (null !== e) {
                if (e[2] === r) {
                    if (-1 === o) {
                        if ("BEGIN" !== e[1]) break;
                        o = t
                    } else {
                        if ("END" !== e[1]) break;
                        f = t;
                        break
                    }
                }
            }
        }
        if (-1 === o || -1 === f) throw Error("PEM section not found for: " + r);
        let u = s.slice(o + 1, f).join("");
        u.replace(/[^a-z0-9+/=]+/gi, "");
        let a = i.from(u, "base64");
        return n.prototype.decode.call(this, a, e)
    }
}