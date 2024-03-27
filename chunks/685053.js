function(e, t, n) {
    "use strict";
    var r = n("814033"),
        i = n("21841"),
        a = n("847651");
    t.assert = i, t.toArray = a.toArray, t.zero2 = a.zero2, t.toHex = a.toHex, t.encode = a.encode;
    t.getNAF = function(e, t, n) {
        var r = Array(Math.max(e.bitLength(), n) + 1);
        r.fill(0);
        for (var i = 1 << t + 1, a = e.clone(), o = 0; o < r.length; o++) {
            var s, u = a.andln(i - 1);
            a.isOdd() ? (s = u > (i >> 1) - 1 ? (i >> 1) - u : u, a.isubn(s)) : s = 0, r[o] = s, a.iushrn(1)
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
            var a, o, s, u = e.andln(3) + r & 3,
                c = t.andln(3) + i & 3;
            3 === u && (u = -1), 3 === c && (c = -1), o = (1 & u) == 0 ? 0 : (3 == (a = e.andln(7) + r & 7) || 5 === a) && 2 === c ? -u : u, n[0].push(o), s = (1 & c) == 0 ? 0 : (3 == (a = t.andln(7) + i & 7) || 5 === a) && 2 === u ? -c : c, n[1].push(s), 2 * r === o + 1 && (r = 1 - r), 2 * i === s + 1 && (i = 1 - i), e.iushrn(1), t.iushrn(1)
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