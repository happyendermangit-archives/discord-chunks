function(e, t, n) {
    "use strict";
    n("424973");
    var r = n("839309"),
        i = n("463483"),
        o = n("789294");
    t.assert = i, t.toArray = o.toArray, t.zero2 = o.zero2, t.toHex = o.toHex, t.encode = o.encode;
    t.getNAF = function(e, t, n) {
        var r = Array(Math.max(e.bitLength(), n) + 1);
        r.fill(0);
        for (var i = 1 << t + 1, o = e.clone(), s = 0; s < r.length; s++) {
            var a, c = o.andln(i - 1);
            o.isOdd() ? (a = c > (i >> 1) - 1 ? (i >> 1) - c : c, o.isubn(a)) : a = 0, r[s] = a, o.iushrn(1)
        }
        return r
    };
    t.getJSF = function(e, t) {
        var n = [
            [],
            []
        ];
        e = e.clone(), t = t.clone();
        for (var r = 0, i = 0; e.cmpn(-r) > 0 || t.cmpn(-i) > 0;) {
            var o, s, a, c = e.andln(3) + r & 3,
                u = t.andln(3) + i & 3;
            3 === c && (c = -1), 3 === u && (u = -1), s = (1 & c) == 0 ? 0 : (3 == (o = e.andln(7) + r & 7) || 5 === o) && 2 === u ? -c : c, n[0].push(s), a = (1 & u) == 0 ? 0 : (3 == (o = t.andln(7) + i & 7) || 5 === o) && 2 === c ? -u : u, n[1].push(a), 2 * r === s + 1 && (r = 1 - r), 2 * i === a + 1 && (i = 1 - i), e.iushrn(1), t.iushrn(1)
        }
        return n
    };
    t.cachedProperty = function(e, t, n) {
        var r = "_" + t;
        e.prototype[t] = function() {
            return void 0 !== this[r] ? this[r] : this[r] = n.call(this)
        }
    };
    t.parseBytes = function(e) {
        return "string" == typeof e ? t.toArray(e, "hex") : e
    };
    t.intFromLE = function(e) {
        return new r(e, "hex", "le")
    }
}