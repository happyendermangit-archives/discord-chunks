function(t, e, n) {
    n("370692"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("70102");
    var r = .1,
        i = "function" == typeof Float32Array;

    function o(t, e) {
        return 1 - 3 * e + 3 * t
    }

    function a(t, e) {
        return 3 * e - 6 * t
    }

    function u(t) {
        return 3 * t
    }

    function s(t, e, n) {
        return (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t
    }

    function c(t, e, n) {
        return 3 * (1 - 3 * n + 3 * e) * t * t + 2 * (3 * n - 6 * e) * t + 3 * e
    }
    t.exports = function(t, e, n, o) {
        if (!(0 <= t && t <= 1 && 0 <= n && n <= 1)) throw Error("bezier x values must be in [0, 1] range");
        var a = i ? new Float32Array(11) : Array(11);
        if (t !== e || n !== o)
            for (var u = 0; u < 11; ++u) a[u] = s(u * r, t, n);
        return function(i) {
            return t === e && n === o ? i : 0 === i ? 0 : 1 === i ? 1 : s(function(e) {
                for (var i = 0, o = 1, u = 10; o !== u && a[o] <= e; ++o) i += r;
                var l = i + (e - a[--o]) / (a[o + 1] - a[o]) * r,
                    f = c(l, t, n);
                return f >= .001 ? function(t, e, n, r) {
                    for (var i = 0; i < 4; ++i) {
                        var o = c(e, n, r);
                        if (0 === o) break;
                        var a = s(e, n, r) - t;
                        e -= a / o
                    }
                    return e
                }(e, l, t, n) : 0 === f ? l : function(t, e, n, r, i) {
                    var o, a, u = 0;
                    do(o = s(a = e + (n - e) / 2, r, i) - t) > 0 ? n = a : e = a; while (Math.abs(o) > 1e-7 && ++u < 10);
                    return a
                }(e, i, i + r, t, n)
            }(i), e, o)
        }
    }
}