function(e, t, n) {
    "use strict";
    var r = function() {
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
        i = n("28028"),
        a = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, e)
            }
            return r(e, null, [{
                key: "step0",
                value: function(e) {
                    return e > 0 ? 1 : 0
                }
            }, {
                key: "step1",
                value: function(e) {
                    return e >= 1 ? 1 : 0
                }
            }, {
                key: "linear",
                value: function(e) {
                    return e
                }
            }, {
                key: "ease",
                value: function(e) {
                    return o(e)
                }
            }, {
                key: "quad",
                value: function(e) {
                    return e * e
                }
            }, {
                key: "cubic",
                value: function(e) {
                    return e * e * e
                }
            }, {
                key: "poly",
                value: function(e) {
                    return function(t) {
                        return Math.pow(t, e)
                    }
                }
            }, {
                key: "sin",
                value: function(e) {
                    return 1 - Math.cos(e * Math.PI / 2)
                }
            }, {
                key: "circle",
                value: function(e) {
                    return 1 - Math.sqrt(1 - e * e)
                }
            }, {
                key: "exp",
                value: function(e) {
                    return Math.pow(2, 10 * (e - 1))
                }
            }, {
                key: "elastic",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                        t = e * Math.PI;
                    return function(e) {
                        return 1 - Math.pow(Math.cos(e * Math.PI / 2), 3) * Math.cos(e * t)
                    }
                }
            }, {
                key: "back",
                value: function(e) {
                    return void 0 === e && (e = 1.70158),
                        function(t) {
                            return t * t * ((e + 1) * t - e)
                        }
                }
            }, {
                key: "bounce",
                value: function(e) {
                    return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
                }
            }, {
                key: "bezier",
                value: function(e, t, n, r) {
                    return i(e, t, n, r)
                }
            }, {
                key: "in",
                value: function(e) {
                    return e
                }
            }, {
                key: "out",
                value: function(e) {
                    return function(t) {
                        return 1 - e(1 - t)
                    }
                }
            }, {
                key: "inOut",
                value: function(e) {
                    return function(t) {
                        return t < .5 ? e(2 * t) / 2 : 1 - e((1 - t) * 2) / 2
                    }
                }
            }]), e
        }(),
        o = a.bezier(.42, 0, 1, 1);
    e.exports = a
}