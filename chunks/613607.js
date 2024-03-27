function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        buildPoslist: function() {
            return a
        }
    });
    var r = n("695170"),
        i = n("686942");

    function a(e, t, n, a, o, s) {
        for (var u = [], c = 0; c < e.length; c++) {
            var l = void 0,
                d = void 0,
                f = e[c];
            f < 0 ? (l = Math.floor(f / t.length), d = (0, i.pymod)(f, t.length)) : (l = Math.floor((f - 1) / t.length), d = (0, i.pymod)(f - 1, t.length));
            for (var p = [], h = n; h < a; h++) {
                var m = s[h];
                (0, i.isPresent)(m) && p.push(m)
            }
            var g = void 0;
            g = l < 0 ? p.slice(l)[0] : p[l];
            var _ = t[d],
                b = (0, r.fromOrdinal)(o.yearordinal + g),
                v = (0, r.combine)(b, _);
            !(0, i.includes)(u, v) && u.push(v)
        }
        return (0, r.sort)(u), u
    }
}