function(e, t, n) {
    "use strict";
    var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        a = n("161796"),
        o = n("512722"),
        s = function(e) {
            return e
        },
        u = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, e)
            }
            return i(e, null, [{
                key: "create",
                value: function(e) {
                    if (e.outputRange && "string" == typeof e.outputRange[0]) return function(e) {
                        var t = e.outputRange;
                        o(t.length >= 2, "Bad output range"),
                            function(e) {
                                for (var t = e[0].replace(l, ""), n = 1; n < e.length; ++n) o(t === e[n].replace(l, ""), "invalid pattern " + e[0] + " and " + e[n])
                            }(t = t.map(c));
                        var n = t[0].match(l).map(function() {
                            return []
                        });
                        t.forEach(function(e) {
                            e.match(l).forEach(function(e, t) {
                                n[t].push(+e)
                            })
                        });
                        var i = t[0].match(l).map(function(t, i) {
                                return u.create(r({}, e, {
                                    outputRange: n[i]
                                }))
                            }),
                            a = /^rgb/.test(t[0]);
                        return function(e) {
                            var n = 0;
                            return t[0].replace(l, function() {
                                var t = i[n++](e);
                                return String(a && n < 4 ? Math.round(t) : t)
                            })
                        }
                    }(e);
                    var t = e.outputRange;
                    d("outputRange", t);
                    var n = e.inputRange;
                    d("inputRange", n),
                        function(e) {
                            o(e.length >= 2, "inputRange must have at least 2 elements");
                            for (var t = 1; t < e.length; ++t) o(e[t] >= e[t - 1], "inputRange must be monotonically increasing " + e)
                        }(n), o(n.length === t.length, "inputRange (" + n.length + ") and outputRange (" + t.length + ") must have the same length");
                    var i = e.easing || s,
                        a = "extend";
                    void 0 !== e.extrapolateLeft ? a = e.extrapolateLeft : void 0 !== e.extrapolate && (a = e.extrapolate);
                    var f = "extend";
                    return void 0 !== e.extrapolateRight ? f = e.extrapolateRight : void 0 !== e.extrapolate && (f = e.extrapolate),
                        function(e) {
                            o("number" == typeof e, "Cannot interpolation an input which is not a number");
                            var r = function(e, t) {
                                for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
                                return n - 1
                            }(e, n);
                            return function(e, t, n, r, i, a, o, s) {
                                var u = e;
                                if (u < t) {
                                    if ("identity" === o) return u;
                                    "clamp" === o && (u = t)
                                }
                                if (u > n) {
                                    if ("identity" === s) return u;
                                    "clamp" === s && (u = n)
                                }
                                if (r === i) return r;
                                if (t === n) return e <= t ? r : i;
                                return t === -1 / 0 ? u = -u : n === 1 / 0 ? u -= t : u = (u - t) / (n - t), u = a(u), r === -1 / 0 ? u = -u : i === 1 / 0 ? u += r : u = u * (i - r) + r, u
                            }(e, n[r], n[r + 1], t[r], t[r + 1], i, a, f)
                        }
                }
            }]), e
        }();

    function c(e) {
        var t = a(e);
        return null === t ? e : "rgba(" + ((4278190080 & (t = t || 0)) >>> 24) + ", " + ((16711680 & t) >>> 16) + ", " + ((65280 & t) >>> 8) + ", " + (255 & t) / 255 + ")"
    }
    var l = /[0-9\.-]+/g;

    function d(e, t) {
        o(t.length >= 2, e + " must have at least 2 elements"), o(2 !== t.length || t[0] !== -1 / 0 || t[1] !== 1 / 0, e + "cannot be ]-infinity;+infinity[ " + t)
    }
    e.exports = u
}