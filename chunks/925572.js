function(e, t, n) {
    "use strict";
    n("424973");
    var r = n("839309"),
        i = n("550511"),
        o = i.assert;

    function s(e, t) {
        if (e instanceof s) return e;
        !this._importDER(e, t) && (o(e.r && e.s, "Signature without r or s"), this.r = new r(e.r, 16), this.s = new r(e.s, 16), void 0 === e.recoveryParam ? this.recoveryParam = null : this.recoveryParam = e.recoveryParam)
    }

    function a() {
        this.place = 0
    }

    function c(e, t) {
        var n = e[t.place++];
        if (!(128 & n)) return n;
        var r = 15 & n;
        if (0 === r || r > 4) return !1;
        for (var i = 0, o = 0, s = t.place; o < r; o++, s++) i <<= 8, i |= e[s], i >>>= 0;
        return !(i <= 127) && (t.place = s, i)
    }

    function u(e) {
        for (var t = 0, n = e.length - 1; !e[t] && !(128 & e[t + 1]) && t < n;) t++;
        return 0 === t ? e : e.slice(t)
    }

    function d(e, t) {
        if (t < 128) {
            e.push(t);
            return
        }
        var n = 1 + (Math.log(t) / Math.LN2 >>> 3);
        for (e.push(128 | n); --n;) e.push(t >>> (n << 3) & 255);
        e.push(t)
    }
    e.exports = s, s.prototype._importDER = function(e, t) {
        e = i.toArray(e, t);
        var n = new a;
        if (48 !== e[n.place++]) return !1;
        var o = c(e, n);
        if (!1 === o || o + n.place !== e.length || 2 !== e[n.place++]) return !1;
        var s = c(e, n);
        if (!1 === s) return !1;
        var u = e.slice(n.place, s + n.place);
        if (n.place += s, 2 !== e[n.place++]) return !1;
        var d = c(e, n);
        if (!1 === d || e.length !== d + n.place) return !1;
        var l = e.slice(n.place, d + n.place);
        if (0 === u[0]) {
            if (!(128 & u[1])) return !1;
            u = u.slice(1)
        }
        if (0 === l[0]) {
            if (!(128 & l[1])) return !1;
            l = l.slice(1)
        }
        return this.r = new r(u), this.s = new r(l), this.recoveryParam = null, !0
    }, s.prototype.toDER = function(e) {
        var t = this.r.toArray(),
            n = this.s.toArray();
        for (128 & t[0] && (t = [0].concat(t)), 128 & n[0] && (n = [0].concat(n)), t = u(t), n = u(n); !n[0] && !(128 & n[1]);) n = n.slice(1);
        var r = [2];
        d(r, t.length), (r = r.concat(t)).push(2), d(r, n.length);
        var o = r.concat(n),
            s = [48];
        return d(s, o.length), s = s.concat(o), i.encode(s, e)
    }
}