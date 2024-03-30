function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        WCAGContrastRatios: function() {
            return a
        },
        getContrastingColor: function() {
            return u
        }
    });
    var r = n("688619"),
        o = n.n(r);

    function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var a = {
        NonText: 3,
        Text: 4.5,
        HighContrastText: 7
    };

    function u(e) {
        for (var t, n, r, u, s, l, c, f, d, _, E = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, p = null !== (f = E.contrastRatio) && void 0 !== f ? f : a.NonText, m = null !== (d = E.tolerance) && void 0 !== d ? d : 3, y = o()(null !== (_ = E.base) && void 0 !== _ ? _ : e), I = o()(e), h = y.luminance(), O = I, T = p + m, S = o().contrast(y, I), v = 100; v-- > 0;) {
            var g = S < p,
                A = S > T;
            if (!g && !A) break;
            var b = O.luminance() > h;
            O = A && b || g && !b ? O.darken() : O.brighten(), S = o().contrast(y, O)
        }
        return u = (r = (t = O.rgba(), n = 4, function(e) {
            if (Array.isArray(e)) return e
        }(t) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(t, n) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return i(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
            }
        }(t, n) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()))[0], s = r[1], l = r[2], c = r[3], "rgba(".concat(u, ", ").concat(s, ", ").concat(l, ", ").concat(c, ")")
    }
}