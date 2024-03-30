function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getComboPercentage: function() {
            return d
        },
        getComboScore: function() {
            return E
        },
        getComboShakeIntensity: function() {
            return s
        },
        getComboStyles: function() {
            return _
        }
    });
    var r = n("582258"),
        o = n("281767");

    function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function a(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
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
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return i(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var u = function(e, t) {
            var n = e.multiplier,
                r = e.value,
                o = a(t, 2),
                i = o[0],
                u = o[1],
                s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                l = r * n;
            return l <= 0 ? 0 : Math.min(s, i.reduce(function(e, t, n) {
                if (l > t) {
                    var r = u[n];
                    if (n + 1 === i.length) return u[n];
                    var o = i[n + 1],
                        a = u[n + 1];
                    return (l - t) / (o - t) * (a - r) + r
                }
                return l === t ? u[n] : e
            }, 0))
        },
        s = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.ShakeLevel.LEVEL_3;
            return u(e, [r.SHAKE_STEPS[t], r.SHAKE_STEP_DIVIDER[t]], 1e5)
        },
        l = [
            [1, .001],
            [25, .3],
            [100, .5],
            [250, .8],
            [500, .9],
            [2500, .95],
            [9001, 1]
        ],
        c = l.map(function(e) {
            return a(e, 1)[0]
        }),
        f = l.map(function(e) {
            var t = a(e, 2);
            return t[0], t[1]
        }),
        d = function(e) {
            return u(e, [c, f], 1)
        },
        _ = function(e) {
            return 1 === e ? {
                color: o.Color.BRAND_500
            } : 2 === e || 3 === e ? {
                color: o.Color.GREEN_360
            } : 4 === e || 5 === e ? {
                color: o.Color.YELLOW_300,
                square: !0
            } : 6 === e ? {
                color: o.Color.RED_400,
                square: !0
            } : {
                color: o.Color.ORANGE_345,
                flair: !0
            }
        };

    function E(e) {
        var t;
        return e.value * (null !== (t = e.multiplier) && void 0 !== t ? t : 1)
    }
}