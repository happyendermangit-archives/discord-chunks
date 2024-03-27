function(e) {
    var t = .1,
        n = "function" == typeof Float32Array;

    function r(e, t) {
        return 1 - 3 * t + 3 * e
    }

    function i(e, t) {
        return 3 * t - 6 * e
    }

    function a(e) {
        return 3 * e
    }

    function o(e, t, n) {
        return (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
    }

    function s(e, t, n) {
        return 3 * (1 - 3 * n + 3 * t) * e * e + 2 * (3 * n - 6 * t) * e + 3 * t
    }
    e.exports = function(e, r, i, a) {
        if (!(0 <= e && e <= 1 && 0 <= i && i <= 1)) throw Error("bezier x values must be in [0, 1] range");
        var u = n ? new Float32Array(11) : Array(11);
        if (e !== r || i !== a)
            for (var c = 0; c < 11; ++c) u[c] = o(c * t, e, i);
        return function(n) {
            return e === r && i === a ? n : 0 === n ? 0 : 1 === n ? 1 : o(function(n) {
                for (var r = 0, a = 1, c = 10; a !== c && u[a] <= n; ++a) r += t;
                var l = r + (n - u[--a]) / (u[a + 1] - u[a]) * t,
                    d = s(l, e, i);
                return d >= .001 ? function(e, t, n, r) {
                    for (var i = 0; i < 4; ++i) {
                        var a = s(t, n, r);
                        if (0 === a) break;
                        var u = o(t, n, r) - e;
                        t -= u / a
                    }
                    return t
                }(n, l, e, i) : 0 === d ? l : function(e, t, n, r, i) {
                    var a, s, u = 0;
                    do(a = o(s = t + (n - t) / 2, r, i) - e) > 0 ? n = s : t = s; while (Math.abs(a) > 1e-7 && ++u < 10);
                    return s
                }(n, r, r + t, e, i)
            }(n), r, a)
        }
    }
}