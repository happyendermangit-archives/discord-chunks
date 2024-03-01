function(t, e, s) {
    var r = s("446825").Buffer,
        i = s("839309"),
        n = new(s("925197")),
        c = new i(24),
        o = new i(11),
        f = new i(10),
        u = new i(3),
        a = new i(7),
        d = s("240163"),
        p = s("664813");

    function b(t, e) {
        return e = e || "utf8", !r.isBuffer(t) && (t = new r(t, e)), this._pub = new i(t), this
    }

    function h(t, e) {
        return e = e || "utf8", !r.isBuffer(t) && (t = new r(t, e)), this._priv = new i(t), this
    }
    t.exports = g;
    var l = {};

    function g(t, e, s) {
        this.setGenerator(e), this.__prime = new i(t), this._prime = i.mont(this.__prime), this._primeLen = t.length, this._pub = void 0, this._priv = void 0, this._primeCode = void 0, s ? (this.setPublicKey = b, this.setPrivateKey = h) : this._primeCode = 8
    }

    function v(t, e) {
        var s = new r(t.toArray());
        return e ? s.toString(e) : s
    }
    Object.defineProperty(g.prototype, "verifyError", {
        enumerable: !0,
        get: function() {
            return "number" != typeof this._primeCode && (this._primeCode = function(t, e) {
                var s, r = e.toString("hex"),
                    i = [r, t.toString(16)].join("_");
                if (i in l) return l[i];
                var p = 0;
                if (t.isEven() || !d.simpleSieve || !d.fermatTest(t) || !n.test(t)) return p += 1, "02" === r || "05" === r ? p += 8 : p += 4, l[i] = p, p;
                switch (!n.test(t.shrn(1)) && (p += 2), r) {
                    case "02":
                        t.mod(c).cmp(o) && (p += 8);
                        break;
                    case "05":
                        (s = t.mod(f)).cmp(u) && s.cmp(a) && (p += 8);
                        break;
                    default:
                        p += 4
                }
                return l[i] = p, p
            }(this.__prime, this.__gen)), this._primeCode
        }
    }), g.prototype.generateKeys = function() {
        return !this._priv && (this._priv = new i(p(this._primeLen))), this._pub = this._gen.toRed(this._prime).redPow(this._priv).fromRed(), this.getPublicKey()
    }, g.prototype.computeSecret = function(t) {
        var e = new r((t = (t = new i(t)).toRed(this._prime)).redPow(this._priv).fromRed().toArray()),
            s = this.getPrime();
        if (e.length < s.length) {
            var n = new r(s.length - e.length);
            n.fill(0), e = r.concat([n, e])
        }
        return e
    }, g.prototype.getPublicKey = function(t) {
        return v(this._pub, t)
    }, g.prototype.getPrivateKey = function(t) {
        return v(this._priv, t)
    }, g.prototype.getPrime = function(t) {
        return v(this.__prime, t)
    }, g.prototype.getGenerator = function(t) {
        return v(this._gen, t)
    }, g.prototype.setGenerator = function(t, e) {
        return e = e || "utf8", !r.isBuffer(t) && (t = new r(t, e)), this.__gen = t, this._gen = new i(t), this
    }
}