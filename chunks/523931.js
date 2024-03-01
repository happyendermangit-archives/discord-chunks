function(t, e, n) {
    "use strict";
    n("70102"), n("424973"), n("781738");
    var r = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        },
        i = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        o = n("789383"),
        a = n("627445"),
        u = function(t) {
            return t
        },
        s = function() {
            function t() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                }(this, t)
            }
            return i(t, null, [{
                key: "create",
                value: function(t) {
                    if (t.outputRange && "string" == typeof t.outputRange[0]) return function(t) {
                        var e = t.outputRange;
                        a(e.length >= 2, "Bad output range"),
                            function(t) {
                                for (var e = t[0].replace(l, ""), n = 1; n < t.length; ++n) a(e === t[n].replace(l, ""), "invalid pattern " + t[0] + " and " + t[n])
                            }(e = e.map(c));
                        var n = e[0].match(l).map(function() {
                            return []
                        });
                        e.forEach(function(t) {
                            t.match(l).forEach(function(t, e) {
                                n[e].push(+t)
                            })
                        });
                        var i = e[0].match(l).map(function(e, i) {
                                return s.create(r({}, t, {
                                    outputRange: n[i]
                                }))
                            }),
                            o = /^rgb/.test(e[0]);
                        return function(t) {
                            var n = 0;
                            return e[0].replace(l, function() {
                                var e = i[n++](t);
                                return String(o && n < 4 ? Math.round(e) : e)
                            })
                        }
                    }(t);
                    var e = t.outputRange;
                    f("outputRange", e);
                    var n = t.inputRange;
                    f("inputRange", n),
                        function(t) {
                            a(t.length >= 2, "inputRange must have at least 2 elements");
                            for (var e = 1; e < t.length; ++e) a(t[e] >= t[e - 1], "inputRange must be monotonically increasing " + t)
                        }(n), a(n.length === e.length, "inputRange (" + n.length + ") and outputRange (" + e.length + ") must have the same length");
                    var i = t.easing || u,
                        o = "extend";
                    void 0 !== t.extrapolateLeft ? o = t.extrapolateLeft : void 0 !== t.extrapolate && (o = t.extrapolate);
                    var h = "extend";
                    return void 0 !== t.extrapolateRight ? h = t.extrapolateRight : void 0 !== t.extrapolate && (h = t.extrapolate),
                        function(t) {
                            a("number" == typeof t, "Cannot interpolation an input which is not a number");
                            var r = function(t, e) {
                                for (var n = 1; n < e.length - 1 && !(e[n] >= t); ++n);
                                return n - 1
                            }(t, n);
                            return function(t, e, n, r, i, o, a, u) {
                                var s = t;
                                if (s < e) {
                                    if ("identity" === a) return s;
                                    "clamp" === a && (s = e)
                                }
                                if (s > n) {
                                    if ("identity" === u) return s;
                                    "clamp" === u && (s = n)
                                }
                                if (r === i) return r;
                                if (e === n) return t <= e ? r : i;
                                return e === -1 / 0 ? s = -s : n === 1 / 0 ? s -= e : s = (s - e) / (n - e), s = o(s), r === -1 / 0 ? s = -s : i === 1 / 0 ? s += r : s = s * (i - r) + r, s
                            }(t, n[r], n[r + 1], e[r], e[r + 1], i, o, h)
                        }
                }
            }]), t
        }();

    function c(t) {
        var e = o(t);
        return null === e ? t : "rgba(" + ((4278190080 & (e = e || 0)) >>> 24) + ", " + ((16711680 & e) >>> 16) + ", " + ((65280 & e) >>> 8) + ", " + (255 & e) / 255 + ")"
    }
    var l = /[0-9\.-]+/g;

    function f(t, e) {
        a(e.length >= 2, t + " must have at least 2 elements"), a(2 !== e.length || e[0] !== -1 / 0 || e[1] !== 1 / 0, t + "cannot be ]-infinity;+infinity[ " + e)
    }
    t.exports = s
}