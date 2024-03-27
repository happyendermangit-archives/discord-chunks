function(e, t, n) {
    var r = n("764900"),
        i = n("170088"),
        a = n("689118"),
        o = n("957578").Buffer,
        s = {
            "des-ede3-cbc": i.CBC.instantiate(i.EDE),
            "des-ede3": i.EDE,
            "des-ede-cbc": i.CBC.instantiate(i.EDE),
            "des-ede": i.EDE,
            "des-cbc": i.CBC.instantiate(i.DES),
            "des-ecb": i.DES
        };

    function u(e) {
        r.call(this);
        var t, n = e.mode.toLowerCase(),
            i = s[n];
        t = e.decrypt ? "decrypt" : "encrypt";
        var a = e.key;
        !o.isBuffer(a) && (a = o.from(a)), ("des-ede" === n || "des-ede-cbc" === n) && (a = o.concat([a, a.slice(0, 8)]));
        var u = e.iv;
        !o.isBuffer(u) && (u = o.from(u)), this._des = i.create({
            key: a,
            iv: u,
            type: t
        })
    }
    s.des = s["des-cbc"], s.des3 = s["des-ede3-cbc"], e.exports = u, a(u, r), u.prototype._update = function(e) {
        return o.from(this._des.update(e))
    }, u.prototype._final = function() {
        return o.from(this._des.final())
    }
}