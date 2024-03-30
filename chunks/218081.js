function(_, E, e) {
    "use strict";
    e.r(E), e.d(E, {
        transformColorContrast: function() {
            return c
        },
        transformColorForReducedSaturation: function() {
            return A
        }
    });
    var o = e("688619"),
        t = e.n(o);

    function I(_, E) {
        (null == E || E > _.length) && (E = _.length);
        for (var e = 0, o = Array(E); e < E; e++) o[e] = _[e];
        return o
    }

    function a(_, E) {
        return function(_) {
            if (Array.isArray(_)) return _
        }(_) || function(_, E) {
            var e, o, t = null == _ ? null : "undefined" != typeof Symbol && _[Symbol.iterator] || _["@@iterator"];
            if (null != t) {
                var I = [],
                    a = !0,
                    r = !1;
                try {
                    for (t = t.call(_); !(a = (e = t.next()).done) && (I.push(e.value), !E || I.length !== E); a = !0);
                } catch (_) {
                    r = !0, o = _
                } finally {
                    try {
                        !a && null != t.return && t.return()
                    } finally {
                        if (r) throw o
                    }
                }
                return I
            }
        }(_, E) || function(_, E) {
            if (_) {
                if ("string" == typeof _) return I(_, E);
                var e = Object.prototype.toString.call(_).slice(8, -1);
                if ("Object" === e && _.constructor && (e = _.constructor.name), "Map" === e || "Set" === e) return Array.from(e);
                if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return I(_, E)
            }
        }(_, E) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function r(_, E, e) {
        var o = a(_, 2),
            t = o[0],
            I = o[1],
            r = a(E, 2),
            R = r[0],
            A = r[1],
            T = (t + I) / 2;
        return e === T ? T : e < T ? R + (e - t) / (T - t) * (T - R) : T + (e - T) / (I - T) * (A - T)
    }
    var R = [0, 2];

    function A(_, E, e) {
        var o, I, r, R, A, T, n, N, i = t()(_);
        if ("background" !== E) return i.set("hsl.s", "*".concat(e)).hex();
        var c = (o = [0, 1], I = [.25, 1], r = e, A = (R = a(o, 2))[0], T = R[1], (N = (n = a(I, 2))[0]) + (r - A) / (T - A) * (n[1] - N));
        return i.set("hsl.s", "*".concat(c)).hex()
    }
    var T = [1.3, .7],
        n = [.98, 1],
        N = [.75, 1.5],
        i = [1.45, .45];

    function c(_, E, e, o) {
        switch (E) {
            case "background":
            case "border":
                return t()(_).set("hsl.l", "*".concat(r(R, "light" === e ? n : T, o))).hex();
            case "text":
                return t()(_).set("hsl.l", "*".concat(r(R, "light" === e ? i : N, o))).hex();
            default:
                return _
        }
    }
}