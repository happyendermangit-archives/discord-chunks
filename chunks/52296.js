function(t, e, n) {
    "use strict";
    n("70102");
    var r = function() {
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
        i = n("322819"),
        o = function() {
            function t() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                }(this, t)
            }
            return r(t, null, [{
                key: "step0",
                value: function(t) {
                    return t > 0 ? 1 : 0
                }
            }, {
                key: "step1",
                value: function(t) {
                    return t >= 1 ? 1 : 0
                }
            }, {
                key: "linear",
                value: function(t) {
                    return t
                }
            }, {
                key: "ease",
                value: function(t) {
                    return a(t)
                }
            }, {
                key: "quad",
                value: function(t) {
                    return t * t
                }
            }, {
                key: "cubic",
                value: function(t) {
                    return t * t * t
                }
            }, {
                key: "poly",
                value: function(t) {
                    return function(e) {
                        return Math.pow(e, t)
                    }
                }
            }, {
                key: "sin",
                value: function(t) {
                    return 1 - Math.cos(t * Math.PI / 2)
                }
            }, {
                key: "circle",
                value: function(t) {
                    return 1 - Math.sqrt(1 - t * t)
                }
            }, {
                key: "exp",
                value: function(t) {
                    return Math.pow(2, 10 * (t - 1))
                }
            }, {
                key: "elastic",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                        e = t * Math.PI;
                    return function(t) {
                        return 1 - Math.pow(Math.cos(t * Math.PI / 2), 3) * Math.cos(t * e)
                    }
                }
            }, {
                key: "back",
                value: function(t) {
                    return void 0 === t && (t = 1.70158),
                        function(e) {
                            return e * e * ((t + 1) * e - t)
                        }
                }
            }, {
                key: "bounce",
                value: function(t) {
                    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }
            }, {
                key: "bezier",
                value: function(t, e, n, r) {
                    return i(t, e, n, r)
                }
            }, {
                key: "in",
                value: function(t) {
                    return t
                }
            }, {
                key: "out",
                value: function(t) {
                    return function(e) {
                        return 1 - t(1 - e)
                    }
                }
            }, {
                key: "inOut",
                value: function(t) {
                    return function(e) {
                        return e < .5 ? t(2 * e) / 2 : 1 - t((1 - e) * 2) / 2
                    }
                }
            }]), t
        }(),
        a = o.bezier(.42, 0, 1, 1);
    t.exports = o
}