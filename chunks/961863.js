function(e, t, n) {
    var r = n("441270"),
        i = n("944026"),
        o = n("599235"),
        s = n("912065").Buffer,
        a = {
            "des-ede3-cbc": i.CBC.instantiate(i.EDE),
            "des-ede3": i.EDE,
            "des-ede-cbc": i.CBC.instantiate(i.EDE),
            "des-ede": i.EDE,
            "des-cbc": i.CBC.instantiate(i.DES),
            "des-ecb": i.DES
        };

    function c(e) {
        r.call(this);
        var t, n = e.mode.toLowerCase(),
            i = a[n];
        t = e.decrypt ? "decrypt" : "encrypt";
        var o = e.key;
        !s.isBuffer(o) && (o = s.from(o)), ("des-ede" === n || "des-ede-cbc" === n) && (o = s.concat([o, o.slice(0, 8)]));
        var c = e.iv;
        !s.isBuffer(c) && (c = s.from(c)), this._des = i.create({
            key: o,
            iv: c,
            type: t
        })
    }
    a.des = a["des-cbc"], a.des3 = a["des-ede3-cbc"], e.exports = c, o(c, r), c.prototype._update = function(e) {
        return s.from(this._des.update(e))
    }, c.prototype._final = function() {
        return s.from(this._des.final())
    }
}