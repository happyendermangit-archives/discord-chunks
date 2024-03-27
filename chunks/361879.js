function(e, t, n) {
    "use strict";
    var r = n("814033"),
        i = n("685053"),
        a = i.assert;

    function o(e, t) {
        if (e instanceof o) return e;
        !this._importDER(e, t) && (a(e.r && e.s, "Signature without r or s"), this.r = new r(e.r, 16), this.s = new r(e.s, 16), void 0 === e.recoveryParam ? this.recoveryParam = null : this.recoveryParam = e.recoveryParam)
    }

    function s() {
        this.place = 0
    }

    function u(e, t) {
        var n = e[t.place++];
        if (!(128 & n)) return n;
        var r = 15 & n;
        if (0 === r || r > 4) return !1;
        for (var i = 0, a = 0, o = t.place; a < r; a++, o++) i <<= 8, i |= e[o], i >>>= 0;
        return !(i <= 127) && (t.place = o, i)
    }

    function c(e) {
        for (var t = 0, n = e.length - 1; !e[t] && !(128 & e[t + 1]) && t < n;) t++;
        return 0 === t ? e : e.slice(t)
    }

    function l(e, t) {
        if (t < 128) {
            e.push(t);
            return
        }
        var n = 1 + (Math.log(t) / Math.LN2 >>> 3);
        for (e.push(128 | n); --n;) e.push(t >>> (n << 3) & 255);
        e.push(t)
    }
    e.exports = o, o.prototype._importDER = function(e, t) {
        e = i.toArray(e, t);
        var n = new s;
        if (48 !== e[n.place++]) return !1;
        var a = u(e, n);
        if (!1 === a || a + n.place !== e.length || 2 !== e[n.place++]) return !1;
        var o = u(e, n);
        if (!1 === o) return !1;
        var c = e.slice(n.place, o + n.place);
        if (n.place += o, 2 !== e[n.place++]) return !1;
        var l = u(e, n);
        if (!1 === l || e.length !== l + n.place) return !1;
        var d = e.slice(n.place, l + n.place);
        if (0 === c[0]) {
            if (!(128 & c[1])) return !1;
            c = c.slice(1)
        }
        if (0 === d[0]) {
            if (!(128 & d[1])) return !1;
            d = d.slice(1)
        }
        return this.r = new r(c), this.s = new r(d), this.recoveryParam = null, !0
    }, o.prototype.toDER = function(e) {
        var t = this.r.toArray(),
            n = this.s.toArray();
        for (128 & t[0] && (t = [0].concat(t)), 128 & n[0] && (n = [0].concat(n)), t = c(t), n = c(n); !n[0] && !(128 & n[1]);) n = n.slice(1);
        var r = [2];
        l(r, t.length), (r = r.concat(t)).push(2), l(r, n.length);
        var a = r.concat(n),
            o = [48];
        return l(o, a.length), o = o.concat(a), i.encode(o, e)
    }
}