function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MonotonicInterpolant: function() {
            return a
        }
    });

    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var a = function() {
        var e, t, n;

        function a(e, t) {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, a), i(this, "xs", void 0), i(this, "ys", void 0), i(this, "c1s", void 0), i(this, "c2s", void 0), i(this, "c3s", void 0);
            for (var n, r, o, s = e.length, u = [], c = 0; c < s; c++) u.push(c);
            u.sort(function(t, n) {
                return e[t] < e[n] ? -1 : 1
            });
            for (var l = [], d = [], f = [], p = 0; p < s - 1; p++) n = e[p + 1] - e[p], r = t[p + 1] - t[p], d.push(n), l.push(r), f.push(r / n);
            for (var h = [f[0]], m = 0; m < d.length - 1; m++) {
                var g = f[m],
                    _ = f[m + 1];
                if (g * _ <= 0) h.push(0);
                else {
                    n = d[m];
                    var b = d[m + 1],
                        v = n + b;
                    h.push(3 * v / ((v + b) / g + (v + n) / _))
                }
            }
            h.push(f[f.length - 1]);
            for (var y = [], E = [], S = 0; S < h.length - 1; S++) {
                o = f[S];
                var x = h[S],
                    w = 1 / d[S],
                    T = x + h[S + 1] - o - o;
                y.push((o - x - T) * w), E.push(T * w * w)
            }
            this.xs = e, this.ys = t, this.c1s = h, this.c2s = y, this.c3s = E
        }
        return e = a, t = [{
            key: "interpolate",
            value: function(e) {
                var t, n = this.xs,
                    r = this.ys,
                    i = this.c1s,
                    a = this.c2s,
                    o = this.c3s,
                    s = n.length - 1;
                if (e === n[s]) return r[s];
                for (var u = 0, c = o.length - 1; u <= c;) {
                    var l = n[t = Math.floor(.5 * (u + c))];
                    if (l < e) u = t + 1;
                    else {
                        if (!(l > e)) return r[t];
                        c = t - 1
                    }
                }
                var d = e - n[s = Math.max(0, c)],
                    f = d * d;
                return r[s] + i[s] * d + a[s] * f + o[s] * d * f
            }
        }], r(e.prototype, t), n && r(e, n), a
    }()
}