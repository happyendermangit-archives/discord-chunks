function(t, e, s) {
    "use strict";
    s("424973");
    var r = s("839309"),
        i = s("463483"),
        n = s("789294");
    e.assert = i, e.toArray = n.toArray, e.zero2 = n.zero2, e.toHex = n.toHex, e.encode = n.encode;
    e.getNAF = function(t, e, s) {
        var r = Array(Math.max(t.bitLength(), s) + 1);
        r.fill(0);
        for (var i = 1 << e + 1, n = t.clone(), c = 0; c < r.length; c++) {
            var o, f = n.andln(i - 1);
            n.isOdd() ? (o = f > (i >> 1) - 1 ? (i >> 1) - f : f, n.isubn(o)) : o = 0, r[c] = o, n.iushrn(1)
        }
        return r
    };
    e.getJSF = function(t, e) {
        var s = [
            [],
            []
        ];
        t = t.clone(), e = e.clone();
        for (var r = 0, i = 0; t.cmpn(-r) > 0 || e.cmpn(-i) > 0;) {
            var n, c, o, f = t.andln(3) + r & 3,
                u = e.andln(3) + i & 3;
            3 === f && (f = -1), 3 === u && (u = -1), c = (1 & f) == 0 ? 0 : (3 == (n = t.andln(7) + r & 7) || 5 === n) && 2 === u ? -f : f, s[0].push(c), o = (1 & u) == 0 ? 0 : (3 == (n = e.andln(7) + i & 7) || 5 === n) && 2 === f ? -u : u, s[1].push(o), 2 * r === c + 1 && (r = 1 - r), 2 * i === o + 1 && (i = 1 - i), t.iushrn(1), e.iushrn(1)
        }
        return s
    };
    e.cachedProperty = function(t, e, s) {
        var r = "_" + e;
        t.prototype[e] = function() {
            return void 0 !== this[r] ? this[r] : this[r] = s.call(this)
        }
    };
    e.parseBytes = function(t) {
        return "string" == typeof t ? e.toArray(t, "hex") : t
    };
    e.intFromLE = function(t) {
        return new r(t, "hex", "le")
    }
}