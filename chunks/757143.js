function(t, e, r) {
    "use strict";
    var n = r("197187"),
        i = r("926515"),
        o = r("581031"),
        u = r("527221"),
        c = r("936940"),
        a = r("24033"),
        s = r("354848"),
        f = r("35179"),
        l = r("959318"),
        v = r("552028"),
        p = r("714050"),
        d = r("676125"),
        x = r("344597"),
        g = r("995739"),
        h = r("115726"),
        b = r("651673"),
        y = r("641236")("replace"),
        I = Math.max,
        m = Math.min,
        E = o([].concat),
        $ = o([].push),
        O = o("".indexOf),
        R = o("".slice),
        j = "$0" === "a".replace(/./, "$0"),
        S = !!/./ [y] && "" === /./ [y]("a", "$0");
    u("replace", function(t, e, r) {
        var o = S ? "$" : "$0";
        return [function(t, r) {
            var n = d(this),
                o = f(t) ? void 0 : g(t, y);
            return o ? i(o, t, n, r) : i(e, p(n), t, r)
        }, function(t, i) {
            var u = a(this),
                c = p(t);
            if ("string" == typeof i && -1 === O(i, o) && -1 === O(i, "$<")) {
                var f = r(e, u, c, i);
                if (f.done) return f.value
            }
            var d = s(i);
            !d && (i = p(i));
            var g = u.global;
            g && (k = u.unicode, u.lastIndex = 0);
            for (var y = []; null !== (C = b(u, c));) {
                ;
                if ($(y, C), !g) break;
                "" === p(C[0]) && (u.lastIndex = x(c, v(u.lastIndex), k))
            }
            for (var j = "", S = 0, T = 0; T < y.length; T++) {
                for (var A, k, C, w, M = p((C = y[T])[0]), _ = I(m(l(C.index), c.length), 0), N = [], D = 1; D < C.length; D++) {
                    ;
                    $(N, void 0 === (A = C[D]) ? A : String(A))
                }
                var K = C.groups;
                if (d) {
                    var P = E([M], N, _, c);
                    void 0 !== K && $(P, K), w = p(n(i, void 0, P))
                } else w = h(M, c, _, N, K, i);
                _ >= S && (j += R(c, S, _) + w, S = _ + M.length)
            }
            return j + R(c, S)
        }]
    }, !!c(function() {
        var t = /./;
        return t.exec = function() {
            var t = [];
            return t.groups = {
                a: "7"
            }, t
        }, "7" !== "".replace(t, "$<a>")
    }) || !j || S)
}