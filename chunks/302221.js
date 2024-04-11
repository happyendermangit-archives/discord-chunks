function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        findColorByHsv: function() {
            return S
        },
        getAccessibleColor: function() {
            return f
        },
        getColorLightnessAdjusted: function() {
            return T
        },
        getComplimentaryPaletteForColor: function() {
            return d
        },
        getSaturatedColorHex: function() {
            return A
        },
        hexOpacityToRgba: function() {
            return l
        },
        hexToRgb: function() {
            return o
        },
        hexWithOpacity: function() {
            return a
        },
        interpolateColor: function() {
            return m
        },
        rawRgbToHsl: function() {
            return E
        },
        rgbToHex: function() {
            return u
        }
    }), n("653041");
    var i = n("866442");
    n("710845");
    var r = n("564334"),
        s = n("689938");

    function a(e, t) {
        let n;
        let i = e;
        9 === e.length ? (i = e.slice(0, 7), n = Math.round(parseInt(e.slice(7, 9), 16) / 255 * t * 255)) : n = Math.round(255 * t);
        let r = n.toString(16).toUpperCase().padStart(2, "0");
        return "".concat(i).concat(r).padEnd(9, "0")
    }

    function o(e) {
        "#" === e[0] && (e = e.slice(1));
        let t = parseInt(e, 16);
        return {
            r: t >> 16 & 255,
            g: t >> 8 & 255,
            b: 255 & t
        }
    }

    function l(e, t) {
        let {
            r: n,
            g: i,
            b: r
        } = o(e);
        return "rgba(".concat(n, ", ").concat(i, ", ").concat(r, ", ").concat(t, ")")
    }

    function u(e, t, n) {
        return "#" + (16777216 + (e << 16) + (t << 8) + n).toString(16).slice(1)
    }

    function d(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
            n = [],
            {
                h: i,
                s: r,
                l: s
            } = function(e, t, n) {
                let i = Math.min(e /= 255, t /= 255, n /= 255),
                    r = Math.max(e, t, n),
                    s = r - i,
                    a = 0,
                    o = 0,
                    l = 0;
                return (a = Math.round(60 * (a = 0 === s ? 0 : r === e ? (t - n) / s % 6 : r === t ? (n - e) / s + 2 : (e - t) / s + 4))) < 0 && (a += 360), l = (r + i) / 2, o = +(100 * (o = 0 === s ? 0 : s / (1 - Math.abs(2 * l - 1)))).toFixed(1), {
                    h: a,
                    s: o,
                    l: l = +(100 * l).toFixed(1)
                }
            }(e[0], e[1], e[2]),
            a = i,
            l = r,
            u = s;
        l < 30 && (l += 30), u > 80 && (u -= 40), u < 20 && (u += 15);
        let d = 360 / (t + 1);
        for (; n.length < t;) {
            (a -= d) < 0 && (a += 360);
            let {
                r: e,
                g: t,
                b: i
            } = o(function(e, t, n) {
                let i = t * Math.min(n /= 100, 1 - n) / 100,
                    r = t => {
                        let r = (t + e / 30) % 12;
                        return Math.round(255 * (n - i * Math.max(Math.min(r - 3, 9 - r, 1), -1))).toString(16).padStart(2, "0")
                    };
                return "#".concat(r(0)).concat(r(8)).concat(r(4))
            }(a, l, u));
            n.push([e, t, i])
        }
        return n
    }

    function _(e) {
        let {
            red: t,
            green: n,
            blue: i
        } = e, r = [t, n, i].map(e => (e /= 255) <= .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4));
        return .2126 * r[0] + .7152 * r[1] + .0722 * r[2]
    }

    function c(e) {
        let t = e[0],
            n = e[1],
            i = _(t),
            r = _(n);
        return (Math.max(i, r) + .05) / (Math.min(i, r) + .05)
    }

    function E(e, t, n) {
        let i, r;
        let s = Math.max(e /= 255, t /= 255, n /= 255),
            a = Math.min(e, t, n),
            o = (s + a) / 2;
        if (s === a) i = r = 0;
        else {
            let l = s - a;
            switch (r = o > .5 ? l / (2 - s - a) : l / (s + a), s) {
                case e:
                    i = (t - n) / l + (t < n ? 6 : 0);
                    break;
                case t:
                    i = (n - e) / l + 2;
                    break;
                case n:
                    i = (e - t) / l + 4
            }
            null == i ? i = 0 : i /= 6
        }
        return {
            hue: 360 * i,
            saturation: r,
            lightness: o,
            alpha: 1
        }
    }

    function I(e, t, n) {
        let i, s, a;
        if (e /= 360, 0 === t) i = s = a = n;
        else {
            let r = function(e, t, n) {
                    return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6) ? e + (t - e) * 6 * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
                },
                o = n < .5 ? n * (1 + t) : n + t - n * t,
                l = 2 * n - o;
            i = r(l, o, e + 1 / 3), s = r(l, o, e), a = r(l, o, e - 1 / 3)
        }
        return new r.default(Math.round(255 * i), Math.round(255 * s), Math.round(255 * a), 1)
    }

    function T(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = E(e.red, e.green, e.blue);
        return n ? i.lightness = i.lightness + t > 1 ? .9 : i.lightness + t : i.lightness = i.lightness - t < 0 ? .1 : i.lightness - t, I(i.hue, i.saturation, i.lightness)
    }

    function f(e) {
        let {
            colors: t,
            ratio: n = 5,
            saturationFactor: r = 1
        } = e;
        if (t.length < 2) return;
        let s = t[0],
            a = t[1];
        if (null == a || null == s) return;
        let o = (0, i.hex2int)(a.toHexString()),
            l = (0, i.getDarkness)(o) > .5,
            u = c([s, a]),
            d = E(s.red, s.green, s.blue);
        for (d.saturation *= r; u < n && null != d;) {
            ;
            if (l) {
                if (d.lightness < .95) d.lightness += .05;
                else break
            } else if (d.lightness > .05) d.lightness -= .05;
            else break;
            u = c([I(d.hue, d.saturation, d.lightness), t[1]])
        }
        return I(d.hue, d.saturation, d.lightness)
    }

    function S(e) {
        return e.slice(0, 3).map(e => {
            var t;
            return {
                hex: e,
                hsv: null !== (t = function(e) {
                    let t, n, i, r, s;
                    var a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                    if (null == a) return null;
                    var o = parseInt(a[1], 16),
                        l = parseInt(a[2], 16),
                        u = parseInt(a[3], 16);
                    let d = o / 255,
                        _ = l / 255,
                        c = u / 255,
                        E = Math.max(d, _, c),
                        I = E - Math.min(d, _, c),
                        T = e => Math.round(100 * e) / 100;
                    if (0 === I) r = s = 0;
                    else {
                        s = I / E;
                        t = (E - d) / 6 / I + .5;
                        n = (E - _) / 6 / I + .5;
                        i = (E - c) / 6 / I + .5, (r = d === E ? i - n : _ === E ? 1 / 3 + t - i : c === E ? 2 / 3 + n - t : 0) < 0 ? r += 1 : r > 1 && (r -= 1)
                    }
                    return {
                        h: Math.round(360 * r),
                        s: T(100 * s),
                        v: T(100 * E)
                    }
                }(e)) && void 0 !== t ? t : {
                    h: 0,
                    s: 0,
                    v: 0
                }
            }
        }).sort(h)[0].hex
    }

    function h(e, t) {
        let n = e.hsv,
            i = t.hsv;
        return i.s + i.v - (n.s + n.v)
    }

    function A(e) {
        var t;
        let {
            colorRGB: n,
            saturationFactor: i = 1
        } = e;
        if (null == n) return n;
        let r = E(n.red, n.green, n.blue);
        if (null == r) return null == n ? void 0 : n.toHexString();
        return null === (t = I(r.hue, r.saturation * i, r.lightness)) || void 0 === t ? void 0 : t.toHexString()
    }

    function m(e, t, n) {
        let i = parseInt(e.substring(1, 3), 16),
            r = parseInt(e.substring(3, 5), 16),
            s = parseInt(e.substring(5, 7), 16),
            a = parseInt(t.substring(1, 3), 16),
            o = parseInt(t.substring(3, 5), 16),
            l = parseInt(t.substring(5, 7), 16),
            u = Math.round(i + (a - i) * n).toString(16).padStart(2, "0"),
            d = Math.round(r + (o - r) * n).toString(16).padStart(2, "0"),
            _ = Math.round(s + (l - s) * n).toString(16).padStart(2, "0");
        return "#".concat(u).concat(d).concat(_)
    }
}