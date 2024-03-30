function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        findColorByHsv: function() {
            return h
        },
        getAccessibleColor: function() {
            return I
        },
        getColorLightnessAdjusted: function() {
            return y
        },
        getComplimentaryPaletteForColor: function() {
            return d
        },
        getSaturatedColorHex: function() {
            return T
        },
        hexOpacityToRgba: function() {
            return c
        },
        hexToRgb: function() {
            return l
        },
        hexWithOpacity: function() {
            return s
        },
        interpolateColor: function() {
            return S
        },
        rawRgbToHsl: function() {
            return p
        },
        rgbToHex: function() {
            return f
        }
    });
    var r, o, i = n("194926");
    n("35523");
    var a = n("622908"),
        u = n("941504");

    function s(e, t) {
        var n, r = e;
        9 === e.length ? (r = e.slice(0, 7), n = Math.round(parseInt(e.slice(7, 9), 16) / 255 * t * 255)) : n = Math.round(255 * t);
        var o = n.toString(16).toUpperCase().padStart(2, "0");
        return "".concat(r).concat(o).padEnd(9, "0")
    }

    function l(e) {
        "#" === e[0] && (e = e.slice(1));
        var t = parseInt(e, 16);
        return {
            r: t >> 16 & 255,
            g: t >> 8 & 255,
            b: 255 & t
        }
    }

    function c(e, t) {
        var n = l(e),
            r = n.r,
            o = n.g,
            i = n.b;
        return "rgba(".concat(r, ", ").concat(o, ", ").concat(i, ", ").concat(t, ")")
    }

    function f(e, t, n) {
        return "#" + (16777216 + (e << 16) + (t << 8) + n).toString(16).slice(1)
    }
    r = function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }({}, {
        "#1abc9c": function() {
            return u.default.Messages.TEAL
        },
        "#2ecc71": function() {
            return u.default.Messages.LIGHT_GREEN
        },
        "#3498db": function() {
            return u.default.Messages.SKY_BLUE
        },
        "#9b59b6": function() {
            return u.default.Messages.PURPLE
        },
        "#e91e63": function() {
            return u.default.Messages.MAGENTA
        },
        "#11806a": function() {
            return u.default.Messages.DARK_TEAL
        },
        "#1f8b4c": function() {
            return u.default.Messages.GREEN
        },
        "#206694": function() {
            return u.default.Messages.BLUE
        },
        "#71368a": function() {
            return u.default.Messages.DARK_PURPLE
        },
        "#ad1457": function() {
            return u.default.Messages.BURGUNDY
        },
        "#f1c40f": function() {
            return u.default.Messages.YELLOW
        },
        "#e67e22": function() {
            return u.default.Messages.ORANGE
        },
        "#e74c3c": function() {
            return u.default.Messages.SALMON
        },
        "#95a5a6": function() {
            return u.default.Messages.LIGHT_GREY
        },
        "#607d8b": function() {
            return u.default.Messages.DARK_GREY
        },
        "#c27c0e": function() {
            return u.default.Messages.TAN
        },
        "#a84300": function() {
            return u.default.Messages.BROWN
        },
        "#992d22": function() {
            return u.default.Messages.TERRACOTTA
        },
        "#979c9f": function() {
            return u.default.Messages.GREY
        },
        "#546e7a": function() {
            return u.default.Messages.DARK_BLUE
        },
        "#99aab5": function() {
            return u.default.Messages.LIGHT_BLUE
        }
    }), o = (o = {
        "#5865f2": function() {
            return u.default.Messages.REMIXING_DRAWING_COLOR_BRAND500
        }
    }, o), Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(o)).forEach(function(e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e))
    });

    function d(e) {
        var t, n, r, o, i, a, u, s, c, f = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
            d = [];
        var _ = (t = e[0], n = e[1], o = Math.min(t /= 255, n /= 255, r = e[2] / 255), a = (i = Math.max(t, n, r)) - o, u = 0, s = 0, c = 0, (u = Math.round(60 * (u = 0 === a ? 0 : i === t ? (n - r) / a % 6 : i === n ? (r - t) / a + 2 : (t - n) / a + 4))) < 0 && (u += 360), c = (i + o) / 2, {
                h: u,
                s: s = +(100 * (s = 0 === a ? 0 : a / (1 - Math.abs(2 * c - 1)))).toFixed(1),
                l: c = +(100 * c).toFixed(1)
            }),
            E = _.h,
            p = _.s,
            m = _.l,
            y = E,
            I = p,
            h = m;
        I < 30 && (I += 30), h > 80 && (h -= 40), h < 20 && (h += 15);
        for (var O = 360 / (f + 1); d.length < f;) {
            (y -= O) < 0 && (y += 360);
            var T = function(e, t, n) {
                    var r, o, i, a;
                    return l((r = e, i = t * Math.min(o = n / 100, 1 - o) / 100, a = function(e) {
                        var t = (e + r / 30) % 12;
                        return Math.round(255 * (o - i * Math.max(Math.min(t - 3, 9 - t, 1), -1))).toString(16).padStart(2, "0")
                    }, "#".concat(a(0)).concat(a(8)).concat(a(4))))
                }(y, I, h),
                S = T.r,
                v = T.g,
                g = T.b;
            d.push([S, v, g])
        }
        return d
    }

    function _(e) {
        var t = [e.red, e.green, e.blue].map(function(e) {
            return (e /= 255) <= .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)
        });
        return .2126 * t[0] + .7152 * t[1] + .0722 * t[2]
    }

    function E(e) {
        var t = e[0],
            n = e[1],
            r = _(t),
            o = _(n);
        return (Math.max(r, o) + .05) / (Math.min(r, o) + .05)
    }

    function p(e, t, n) {
        var r, o, i = Math.max(e /= 255, t /= 255, n /= 255),
            a = Math.min(e, t, n),
            u = (i + a) / 2;
        if (i === a) r = o = 0;
        else {
            var s = i - a;
            switch (o = u > .5 ? s / (2 - i - a) : s / (i + a), i) {
                case e:
                    r = (t - n) / s + (t < n ? 6 : 0);
                    break;
                case t:
                    r = (n - e) / s + 2;
                    break;
                case n:
                    r = (e - t) / s + 4
            }
            null == r ? r = 0 : r /= 6
        }
        return {
            hue: 360 * r,
            saturation: o,
            lightness: u,
            alpha: 1
        }
    }

    function m(e, t, n) {
        if (e /= 360, 0 === t) r = o = i = n;
        else {
            var r, o, i, u = function(e, t, n) {
                    return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6) ? e + (t - e) * 6 * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
                },
                s = n < .5 ? n * (1 + t) : n + t - n * t,
                l = 2 * n - s;
            r = u(l, s, e + 1 / 3), o = u(l, s, e), i = u(l, s, e - 1 / 3)
        }
        return new a.default(Math.round(255 * r), Math.round(255 * o), Math.round(255 * i), 1)
    }

    function y(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = p(e.red, e.green, e.blue);
        return n ? r.lightness = r.lightness + t > 1 ? .9 : r.lightness + t : r.lightness = r.lightness - t < 0 ? .1 : r.lightness - t, m(r.hue, r.saturation, r.lightness)
    }

    function I(e) {
        var t = e.colors,
            n = e.ratio,
            r = void 0 === n ? 5 : n,
            o = e.saturationFactor;
        if (!(t.length < 2)) {
            var a = t[0],
                u = t[1];
            if (null != u && null != a) {
                var s = (0, i.hex2int)(u.toHexString()),
                    l = (0, i.getDarkness)(s) > .5,
                    c = E([a, u]),
                    f = p(a.red, a.green, a.blue);
                for (f.saturation *= void 0 === o ? 1 : o; c < r && null != f;) {
                    ;
                    if (l) {
                        if (f.lightness < .95) f.lightness += .05;
                        else break
                    } else if (f.lightness > .05) f.lightness -= .05;
                    else break;
                    c = E([m(f.hue, f.saturation, f.lightness), t[1]])
                }
                return m(f.hue, f.saturation, f.lightness)
            }
        }
    }

    function h(e) {
        return e.slice(0, 3).map(function(e) {
            var t;
            return {
                hex: e,
                hsv: null !== (t = function(e) {
                    var t, n, r, o, i, a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                    if (null == a) return null;
                    var u = parseInt(a[1], 16),
                        s = parseInt(a[2], 16),
                        l = parseInt(a[3], 16),
                        c = u / 255,
                        f = s / 255,
                        d = l / 255,
                        _ = Math.max(c, f, d),
                        E = _ - Math.min(c, f, d),
                        p = function(e) {
                            return (_ - e) / 6 / E + .5
                        },
                        m = function(e) {
                            return Math.round(100 * e) / 100
                        };
                    return 0 === E ? o = i = 0 : (i = E / _, t = p(c), n = p(f), r = p(d), (o = c === _ ? r - n : f === _ ? 1 / 3 + t - r : d === _ ? 2 / 3 + n - t : 0) < 0 ? o += 1 : o > 1 && (o -= 1)), {
                        h: Math.round(360 * o),
                        s: m(100 * i),
                        v: m(100 * _)
                    }
                }(e)) && void 0 !== t ? t : {
                    h: 0,
                    s: 0,
                    v: 0
                }
            }
        }).sort(O)[0].hex
    }

    function O(e, t) {
        var n = e.hsv,
            r = t.hsv;
        return r.s + r.v - (n.s + n.v)
    }

    function T(e) {
        var t, n = e.colorRGB,
            r = e.saturationFactor;
        if (null == n) return n;
        var o = p(n.red, n.green, n.blue);
        return null == o ? null == n ? void 0 : n.toHexString() : null === (t = m(o.hue, o.saturation * (void 0 === r ? 1 : r), o.lightness)) || void 0 === t ? void 0 : t.toHexString()
    }

    function S(e, t, n) {
        var r = parseInt(e.substring(1, 3), 16),
            o = parseInt(e.substring(3, 5), 16),
            i = parseInt(e.substring(5, 7), 16),
            a = parseInt(t.substring(1, 3), 16),
            u = parseInt(t.substring(3, 5), 16),
            s = parseInt(t.substring(5, 7), 16),
            l = Math.round(r + (a - r) * n).toString(16).padStart(2, "0"),
            c = Math.round(o + (u - o) * n).toString(16).padStart(2, "0"),
            f = Math.round(i + (s - i) * n).toString(16).padStart(2, "0");
        return "#".concat(l).concat(c).concat(f)
    }
}