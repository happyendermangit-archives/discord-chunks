function(e) {
    ! function(t) {
        var n, r, i, a = /^\s+/,
            o = /\s+$/,
            s = 0,
            u = t.round,
            c = t.min,
            l = t.max,
            d = t.random;

        function f(e, n) {
            if (n = n || {}, (e = e || "") instanceof f) return e;
            if (!(this instanceof f)) return new f(e, n);
            var r = function(e) {
                var n = {
                        r: 0,
                        g: 0,
                        b: 0
                    },
                    r = 1,
                    i = null,
                    s = null,
                    u = null,
                    d = !1,
                    f = !1;
                return "string" == typeof e && (e = function(e) {
                    e = e.replace(a, "").replace(o, "").toLowerCase();
                    var t, n = !1;
                    if (A[e]) e = A[e], n = !0;
                    else if ("transparent" == e) return {
                        r: 0,
                        g: 0,
                        b: 0,
                        a: 0,
                        format: "name"
                    };
                    if (t = Y.rgb.exec(e)) return {
                        r: t[1],
                        g: t[2],
                        b: t[3]
                    };
                    if (t = Y.rgba.exec(e)) return {
                        r: t[1],
                        g: t[2],
                        b: t[3],
                        a: t[4]
                    };
                    if (t = Y.hsl.exec(e)) return {
                        h: t[1],
                        s: t[2],
                        l: t[3]
                    };
                    if (t = Y.hsla.exec(e)) return {
                        h: t[1],
                        s: t[2],
                        l: t[3],
                        a: t[4]
                    };
                    if (t = Y.hsv.exec(e)) return {
                        h: t[1],
                        s: t[2],
                        v: t[3]
                    };
                    if (t = Y.hsva.exec(e)) return {
                        h: t[1],
                        s: t[2],
                        v: t[3],
                        a: t[4]
                    };
                    if (t = Y.hex8.exec(e)) return {
                        r: L(t[1]),
                        g: L(t[2]),
                        b: L(t[3]),
                        a: L(t[4]) / 255,
                        format: n ? "name" : "hex8"
                    };
                    if (t = Y.hex6.exec(e)) return {
                        r: L(t[1]),
                        g: L(t[2]),
                        b: L(t[3]),
                        format: n ? "name" : "hex"
                    };
                    if (t = Y.hex4.exec(e)) return {
                        r: L(t[1] + "" + t[1]),
                        g: L(t[2] + "" + t[2]),
                        b: L(t[3] + "" + t[3]),
                        a: L(t[4] + "" + t[4]) / 255,
                        format: n ? "name" : "hex8"
                    };
                    return !!(t = Y.hex3.exec(e)) && {
                        r: L(t[1] + "" + t[1]),
                        g: L(t[2] + "" + t[2]),
                        b: L(t[3] + "" + t[3]),
                        format: n ? "name" : "hex"
                    }
                }(e)), "object" == typeof e && (j(e.r) && j(e.g) && j(e.b) ? (n = function(e, t, n) {
                    return {
                        r: 255 * N(e, 255),
                        g: 255 * N(t, 255),
                        b: 255 * N(n, 255)
                    }
                }(e.r, e.g, e.b), d = !0, f = "%" === String(e.r).substr(-1) ? "prgb" : "rgb") : j(e.h) && j(e.s) && j(e.v) ? (i = F(e.s), s = F(e.v), n = function(e, n, r) {
                    e = 6 * N(e, 360), n = N(n, 100), r = N(r, 100);
                    var i = t.floor(e),
                        a = e - i,
                        o = r * (1 - n),
                        s = r * (1 - a * n),
                        u = r * (1 - (1 - a) * n),
                        c = i % 6;
                    return {
                        r: 255 * [r, s, o, o, u, r][c],
                        g: 255 * [u, r, r, s, o, o][c],
                        b: 255 * [o, o, u, r, r, s][c]
                    }
                }(e.h, i, s), d = !0, f = "hsv") : j(e.h) && j(e.s) && j(e.l) && (i = F(e.s), u = F(e.l), n = function(e, t, n) {
                    var r, i, a;

                    function o(e, t, n) {
                        return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6) ? e + (t - e) * 6 * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
                    }
                    if (e = N(e, 360), t = N(t, 100), n = N(n, 100), 0 === t) r = i = a = n;
                    else {
                        var s = n < .5 ? n * (1 + t) : n + t - n * t,
                            u = 2 * n - s;
                        r = o(u, s, e + 1 / 3), i = o(u, s, e), a = o(u, s, e - 1 / 3)
                    }
                    return {
                        r: 255 * r,
                        g: 255 * i,
                        b: 255 * a
                    }
                }(e.h, i, u), d = !0, f = "hsl"), e.hasOwnProperty("a") && (r = e.a)), r = R(r), {
                    ok: d,
                    format: e.format || f,
                    r: c(255, l(n.r, 0)),
                    g: c(255, l(n.g, 0)),
                    b: c(255, l(n.b, 0)),
                    a: r
                }
            }(e);
            this._originalInput = e, this._r = r.r, this._g = r.g, this._b = r.b, this._a = r.a, this._roundA = u(100 * this._a) / 100, this._format = n.format || r.format, this._gradientType = n.gradientType, this._r < 1 && (this._r = u(this._r)), this._g < 1 && (this._g = u(this._g)), this._b < 1 && (this._b = u(this._b)), this._ok = r.ok, this._tc_id = s++
        }
        f.prototype = {
            isDark: function() {
                return 128 > this.getBrightness()
            },
            isLight: function() {
                return !this.isDark()
            },
            isValid: function() {
                return this._ok
            },
            getOriginalInput: function() {
                return this._originalInput
            },
            getFormat: function() {
                return this._format
            },
            getAlpha: function() {
                return this._a
            },
            getBrightness: function() {
                var e = this.toRgb();
                return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3
            },
            getLuminance: function() {
                var e, n, r, i, a, o, s = this.toRgb();
                return e = s.r / 255, n = s.g / 255, r = s.b / 255, i = e <= .03928 ? e / 12.92 : t.pow((e + .055) / 1.055, 2.4), a = n <= .03928 ? n / 12.92 : t.pow((n + .055) / 1.055, 2.4), .2126 * i + .7152 * a + .0722 * (o = r <= .03928 ? r / 12.92 : t.pow((r + .055) / 1.055, 2.4))
            },
            setAlpha: function(e) {
                return this._a = R(e), this._roundA = u(100 * this._a) / 100, this
            },
            toHsv: function() {
                var e = h(this._r, this._g, this._b);
                return {
                    h: 360 * e.h,
                    s: e.s,
                    v: e.v,
                    a: this._a
                }
            },
            toHsvString: function() {
                var e = h(this._r, this._g, this._b),
                    t = u(360 * e.h),
                    n = u(100 * e.s),
                    r = u(100 * e.v);
                return 1 == this._a ? "hsv(" + t + ", " + n + "%, " + r + "%)" : "hsva(" + t + ", " + n + "%, " + r + "%, " + this._roundA + ")"
            },
            toHsl: function() {
                var e = p(this._r, this._g, this._b);
                return {
                    h: 360 * e.h,
                    s: e.s,
                    l: e.l,
                    a: this._a
                }
            },
            toHslString: function() {
                var e = p(this._r, this._g, this._b),
                    t = u(360 * e.h),
                    n = u(100 * e.s),
                    r = u(100 * e.l);
                return 1 == this._a ? "hsl(" + t + ", " + n + "%, " + r + "%)" : "hsla(" + t + ", " + n + "%, " + r + "%, " + this._roundA + ")"
            },
            toHex: function(e) {
                return m(this._r, this._g, this._b, e)
            },
            toHexString: function(e) {
                return "#" + this.toHex(e)
            },
            toHex8: function(e) {
                return function(e, t, n, r, i) {
                    var a = [P(u(e).toString(16)), P(u(t).toString(16)), P(u(n).toString(16)), P(B(r))];
                    return i && a[0].charAt(0) == a[0].charAt(1) && a[1].charAt(0) == a[1].charAt(1) && a[2].charAt(0) == a[2].charAt(1) && a[3].charAt(0) == a[3].charAt(1) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0) : a.join("")
                }(this._r, this._g, this._b, this._a, e)
            },
            toHex8String: function(e) {
                return "#" + this.toHex8(e)
            },
            toRgb: function() {
                return {
                    r: u(this._r),
                    g: u(this._g),
                    b: u(this._b),
                    a: this._a
                }
            },
            toRgbString: function() {
                return 1 == this._a ? "rgb(" + u(this._r) + ", " + u(this._g) + ", " + u(this._b) + ")" : "rgba(" + u(this._r) + ", " + u(this._g) + ", " + u(this._b) + ", " + this._roundA + ")"
            },
            toPercentageRgb: function() {
                return {
                    r: u(100 * N(this._r, 255)) + "%",
                    g: u(100 * N(this._g, 255)) + "%",
                    b: u(100 * N(this._b, 255)) + "%",
                    a: this._a
                }
            },
            toPercentageRgbString: function() {
                return 1 == this._a ? "rgb(" + u(100 * N(this._r, 255)) + "%, " + u(100 * N(this._g, 255)) + "%, " + u(100 * N(this._b, 255)) + "%)" : "rgba(" + u(100 * N(this._r, 255)) + "%, " + u(100 * N(this._g, 255)) + "%, " + u(100 * N(this._b, 255)) + "%, " + this._roundA + ")"
            },
            toName: function() {
                return 0 === this._a ? "transparent" : !(this._a < 1) && (k[m(this._r, this._g, this._b, !0)] || !1)
            },
            toFilter: function(e) {
                var t = "#" + g(this._r, this._g, this._b, this._a),
                    n = t,
                    r = this._gradientType ? "GradientType = 1, " : "";
                if (e) {
                    var i = f(e);
                    n = "#" + g(i._r, i._g, i._b, i._a)
                }
                return "progid:DXImageTransform.Microsoft.gradient(" + r + "startColorstr=" + t + ",endColorstr=" + n + ")"
            },
            toString: function(e) {
                var t = !!e;
                e = e || this._format;
                var n = !1,
                    r = this._a < 1 && this._a >= 0;
                if (!t && r && ("hex" === e || "hex6" === e || "hex3" === e || "hex4" === e || "hex8" === e || "name" === e)) return "name" === e && 0 === this._a ? this.toName() : this.toRgbString();
                return "rgb" === e && (n = this.toRgbString()), "prgb" === e && (n = this.toPercentageRgbString()), ("hex" === e || "hex6" === e) && (n = this.toHexString()), "hex3" === e && (n = this.toHexString(!0)), "hex4" === e && (n = this.toHex8String(!0)), "hex8" === e && (n = this.toHex8String()), "name" === e && (n = this.toName()), "hsl" === e && (n = this.toHslString()), "hsv" === e && (n = this.toHsvString()), n || this.toHexString()
            },
            clone: function() {
                return f(this.toString())
            },
            _applyModification: function(e, t) {
                var n = e.apply(null, [this].concat([].slice.call(t)));
                return this._r = n._r, this._g = n._g, this._b = n._b, this.setAlpha(n._a), this
            },
            lighten: function() {
                return this._applyModification(y, arguments)
            },
            brighten: function() {
                return this._applyModification(E, arguments)
            },
            darken: function() {
                return this._applyModification(S, arguments)
            },
            desaturate: function() {
                return this._applyModification(_, arguments)
            },
            saturate: function() {
                return this._applyModification(b, arguments)
            },
            greyscale: function() {
                return this._applyModification(v, arguments)
            },
            spin: function() {
                return this._applyModification(x, arguments)
            },
            _applyCombination: function(e, t) {
                return e.apply(null, [this].concat([].slice.call(t)))
            },
            analogous: function() {
                return this._applyCombination(O, arguments)
            },
            complement: function() {
                return this._applyCombination(w, arguments)
            },
            monochromatic: function() {
                return this._applyCombination(M, arguments)
            },
            splitcomplement: function() {
                return this._applyCombination(D, arguments)
            },
            triad: function() {
                return this._applyCombination(T, arguments)
            },
            tetrad: function() {
                return this._applyCombination(C, arguments)
            }
        }, f.fromRatio = function(e, t) {
            if ("object" == typeof e) {
                var n = {};
                for (var r in e) e.hasOwnProperty(r) && ("a" === r ? n[r] = e[r] : n[r] = F(e[r]));
                e = n
            }
            return f(e, t)
        };

        function p(e, t, n) {
            e = N(e, 255), t = N(t, 255);
            var r = l(e, t, n = N(n, 255)),
                i = c(e, t, n),
                a, o, s = (r + i) / 2;
            if (r == i) a = o = 0;
            else {
                var u = r - i;
                switch (o = s > .5 ? u / (2 - r - i) : u / (r + i), r) {
                    case e:
                        a = (t - n) / u + (t < n ? 6 : 0);
                        break;
                    case t:
                        a = (n - e) / u + 2;
                        break;
                    case n:
                        a = (e - t) / u + 4
                }
                a /= 6
            }
            return {
                h: a,
                s: o,
                l: s
            }
        }

        function h(e, t, n) {
            e = N(e, 255), t = N(t, 255);
            var r, i = l(e, t, n = N(n, 255)),
                a = c(e, t, n);
            var o = i - a;
            if (i == a) r = 0;
            else {
                switch (i) {
                    case e:
                        r = (t - n) / o + (t < n ? 6 : 0);
                        break;
                    case t:
                        r = (n - e) / o + 2;
                        break;
                    case n:
                        r = (e - t) / o + 4
                }
                r /= 6
            }
            return {
                h: r,
                s: 0 === i ? 0 : o / i,
                v: i
            }
        }

        function m(e, t, n, r) {
            var i = [P(u(e).toString(16)), P(u(t).toString(16)), P(u(n).toString(16))];
            return r && i[0].charAt(0) == i[0].charAt(1) && i[1].charAt(0) == i[1].charAt(1) && i[2].charAt(0) == i[2].charAt(1) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join("")
        }

        function g(e, t, n, r) {
            return [P(B(r)), P(u(e).toString(16)), P(u(t).toString(16)), P(u(n).toString(16))].join("")
        }

        function _(e, t) {
            t = 0 === t ? 0 : t || 10;
            var n = f(e).toHsl();
            return n.s -= t / 100, n.s = I(n.s), f(n)
        }

        function b(e, t) {
            t = 0 === t ? 0 : t || 10;
            var n = f(e).toHsl();
            return n.s += t / 100, n.s = I(n.s), f(n)
        }

        function v(e) {
            return f(e).desaturate(100)
        }

        function y(e, t) {
            t = 0 === t ? 0 : t || 10;
            var n = f(e).toHsl();
            return n.l += t / 100, n.l = I(n.l), f(n)
        }

        function E(e, t) {
            t = 0 === t ? 0 : t || 10;
            var n = f(e).toRgb();
            return n.r = l(0, c(255, n.r - u(-(t / 100 * 255)))), n.g = l(0, c(255, n.g - u(-(t / 100 * 255)))), n.b = l(0, c(255, n.b - u(-(t / 100 * 255)))), f(n)
        }

        function S(e, t) {
            t = 0 === t ? 0 : t || 10;
            var n = f(e).toHsl();
            return n.l -= t / 100, n.l = I(n.l), f(n)
        }

        function x(e, t) {
            var n = f(e).toHsl(),
                r = (n.h + t) % 360;
            return n.h = r < 0 ? 360 + r : r, f(n)
        }

        function w(e) {
            var t = f(e).toHsl();
            return t.h = (t.h + 180) % 360, f(t)
        }

        function T(e) {
            var t = f(e).toHsl(),
                n = t.h;
            return [f(e), f({
                h: (n + 120) % 360,
                s: t.s,
                l: t.l
            }), f({
                h: (n + 240) % 360,
                s: t.s,
                l: t.l
            })]
        }

        function C(e) {
            var t = f(e).toHsl(),
                n = t.h;
            return [f(e), f({
                h: (n + 90) % 360,
                s: t.s,
                l: t.l
            }), f({
                h: (n + 180) % 360,
                s: t.s,
                l: t.l
            }), f({
                h: (n + 270) % 360,
                s: t.s,
                l: t.l
            })]
        }

        function D(e) {
            var t = f(e).toHsl(),
                n = t.h;
            return [f(e), f({
                h: (n + 72) % 360,
                s: t.s,
                l: t.l
            }), f({
                h: (n + 216) % 360,
                s: t.s,
                l: t.l
            })]
        }

        function O(e, t, n) {
            t = t || 6, n = n || 30;
            var r = f(e).toHsl(),
                i = 360 / n,
                a = [f(e)];
            for (r.h = (r.h - (i * t >> 1) + 720) % 360; --t;) r.h = (r.h + i) % 360, a.push(f(r));
            return a
        }

        function M(e, t) {
            t = t || 6;
            for (var n = f(e).toHsv(), r = n.h, i = n.s, a = n.v, o = [], s = 1 / t; t--;) o.push(f({
                h: r,
                s: i,
                v: a
            })), a = (a + s) % 1;
            return o
        }
        f.equals = function(e, t) {
            return !!e && !!t && f(e).toRgbString() == f(t).toRgbString()
        }, f.random = function() {
            return f.fromRatio({
                r: d(),
                g: d(),
                b: d()
            })
        }, f.mix = function(e, t, n) {
            n = 0 === n ? 0 : n || 50;
            var r = f(e).toRgb(),
                i = f(t).toRgb(),
                a = n / 100;
            return f({
                r: (i.r - r.r) * a + r.r,
                g: (i.g - r.g) * a + r.g,
                b: (i.b - r.b) * a + r.b,
                a: (i.a - r.a) * a + r.a
            })
        }, f.readability = function(e, n) {
            var r = f(e),
                i = f(n);
            return (t.max(r.getLuminance(), i.getLuminance()) + .05) / (t.min(r.getLuminance(), i.getLuminance()) + .05)
        }, f.isReadable = function(e, t, n) {
            var r, i, a = f.readability(e, t);
            switch (i = !1, (r = function(e) {
                    var t, n;
                    return t = ((e = e || {
                        level: "AA",
                        size: "small"
                    }).level || "AA").toUpperCase(), n = (e.size || "small").toLowerCase(), "AA" !== t && "AAA" !== t && (t = "AA"), "small" !== n && "large" !== n && (n = "small"), {
                        level: t,
                        size: n
                    }
                }(n)).level + r.size) {
                case "AAsmall":
                case "AAAlarge":
                    i = a >= 4.5;
                    break;
                case "AAlarge":
                    i = a >= 3;
                    break;
                case "AAAsmall":
                    i = a >= 7
            }
            return i
        }, f.mostReadable = function(e, t, n) {
            var r, i, a, o, s = null,
                u = 0;
            i = (n = n || {}).includeFallbackColors, a = n.level, o = n.size;
            for (var c = 0; c < t.length; c++)(r = f.readability(e, t[c])) > u && (u = r, s = f(t[c]));
            return f.isReadable(e, s, {
                level: a,
                size: o
            }) || !i ? s : (n.includeFallbackColors = !1, f.mostReadable(e, ["#fff", "#000"], n))
        };
        var A = f.names = {
                aliceblue: "f0f8ff",
                antiquewhite: "faebd7",
                aqua: "0ff",
                aquamarine: "7fffd4",
                azure: "f0ffff",
                beige: "f5f5dc",
                bisque: "ffe4c4",
                black: "000",
                blanchedalmond: "ffebcd",
                blue: "00f",
                blueviolet: "8a2be2",
                brown: "a52a2a",
                burlywood: "deb887",
                burntsienna: "ea7e5d",
                cadetblue: "5f9ea0",
                chartreuse: "7fff00",
                chocolate: "d2691e",
                coral: "ff7f50",
                cornflowerblue: "6495ed",
                cornsilk: "fff8dc",
                crimson: "dc143c",
                cyan: "0ff",
                darkblue: "00008b",
                darkcyan: "008b8b",
                darkgoldenrod: "b8860b",
                darkgray: "a9a9a9",
                darkgreen: "006400",
                darkgrey: "a9a9a9",
                darkkhaki: "bdb76b",
                darkmagenta: "8b008b",
                darkolivegreen: "556b2f",
                darkorange: "ff8c00",
                darkorchid: "9932cc",
                darkred: "8b0000",
                darksalmon: "e9967a",
                darkseagreen: "8fbc8f",
                darkslateblue: "483d8b",
                darkslategray: "2f4f4f",
                darkslategrey: "2f4f4f",
                darkturquoise: "00ced1",
                darkviolet: "9400d3",
                deeppink: "ff1493",
                deepskyblue: "00bfff",
                dimgray: "696969",
                dimgrey: "696969",
                dodgerblue: "1e90ff",
                firebrick: "b22222",
                floralwhite: "fffaf0",
                forestgreen: "228b22",
                fuchsia: "f0f",
                gainsboro: "dcdcdc",
                ghostwhite: "f8f8ff",
                gold: "ffd700",
                goldenrod: "daa520",
                gray: "808080",
                green: "008000",
                greenyellow: "adff2f",
                grey: "808080",
                honeydew: "f0fff0",
                hotpink: "ff69b4",
                indianred: "cd5c5c",
                indigo: "4b0082",
                ivory: "fffff0",
                khaki: "f0e68c",
                lavender: "e6e6fa",
                lavenderblush: "fff0f5",
                lawngreen: "7cfc00",
                lemonchiffon: "fffacd",
                lightblue: "add8e6",
                lightcoral: "f08080",
                lightcyan: "e0ffff",
                lightgoldenrodyellow: "fafad2",
                lightgray: "d3d3d3",
                lightgreen: "90ee90",
                lightgrey: "d3d3d3",
                lightpink: "ffb6c1",
                lightsalmon: "ffa07a",
                lightseagreen: "20b2aa",
                lightskyblue: "87cefa",
                lightslategray: "789",
                lightslategrey: "789",
                lightsteelblue: "b0c4de",
                lightyellow: "ffffe0",
                lime: "0f0",
                limegreen: "32cd32",
                linen: "faf0e6",
                magenta: "f0f",
                maroon: "800000",
                mediumaquamarine: "66cdaa",
                mediumblue: "0000cd",
                mediumorchid: "ba55d3",
                mediumpurple: "9370db",
                mediumseagreen: "3cb371",
                mediumslateblue: "7b68ee",
                mediumspringgreen: "00fa9a",
                mediumturquoise: "48d1cc",
                mediumvioletred: "c71585",
                midnightblue: "191970",
                mintcream: "f5fffa",
                mistyrose: "ffe4e1",
                moccasin: "ffe4b5",
                navajowhite: "ffdead",
                navy: "000080",
                oldlace: "fdf5e6",
                olive: "808000",
                olivedrab: "6b8e23",
                orange: "ffa500",
                orangered: "ff4500",
                orchid: "da70d6",
                palegoldenrod: "eee8aa",
                palegreen: "98fb98",
                paleturquoise: "afeeee",
                palevioletred: "db7093",
                papayawhip: "ffefd5",
                peachpuff: "ffdab9",
                peru: "cd853f",
                pink: "ffc0cb",
                plum: "dda0dd",
                powderblue: "b0e0e6",
                purple: "800080",
                rebeccapurple: "663399",
                red: "f00",
                rosybrown: "bc8f8f",
                royalblue: "4169e1",
                saddlebrown: "8b4513",
                salmon: "fa8072",
                sandybrown: "f4a460",
                seagreen: "2e8b57",
                seashell: "fff5ee",
                sienna: "a0522d",
                silver: "c0c0c0",
                skyblue: "87ceeb",
                slateblue: "6a5acd",
                slategray: "708090",
                slategrey: "708090",
                snow: "fffafa",
                springgreen: "00ff7f",
                steelblue: "4682b4",
                tan: "d2b48c",
                teal: "008080",
                thistle: "d8bfd8",
                tomato: "ff6347",
                turquoise: "40e0d0",
                violet: "ee82ee",
                wheat: "f5deb3",
                white: "fff",
                whitesmoke: "f5f5f5",
                yellow: "ff0",
                yellowgreen: "9acd32"
            },
            k = f.hexNames = function(e) {
                var t = {};
                for (var n in e) e.hasOwnProperty(n) && (t[e[n]] = n);
                return t
            }(A);

        function R(e) {
            return (isNaN(e = parseFloat(e)) || e < 0 || e > 1) && (e = 1), e
        }

        function N(e, n) {
            (function(e) {
                return "string" == typeof e && -1 != e.indexOf(".") && 1 === parseFloat(e)
            })(e) && (e = "100%");
            var r = function(e) {
                return "string" == typeof e && -1 != e.indexOf("%")
            }(e);
            return (e = c(n, l(0, parseFloat(e))), r && (e = parseInt(e * n, 10) / 100), 1e-6 > t.abs(e - n)) ? 1 : e % n / parseFloat(n)
        }

        function I(e) {
            return c(1, l(0, e))
        }

        function L(e) {
            return parseInt(e, 16)
        }

        function P(e) {
            return 1 == e.length ? "0" + e : "" + e
        }

        function F(e) {
            return e <= 1 && (e = 100 * e + "%"), e
        }

        function B(e) {
            return t.round(255 * parseFloat(e)).toString(16)
        }

        function U(e) {
            return L(e) / 255
        }
        var Y = (r = "[\\s|\\(]+(" + (n = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)") + ")[,|\\s]+(" + n + ")[,|\\s]+(" + n + ")\\s*\\)?", i = "[\\s|\\(]+(" + n + ")[,|\\s]+(" + n + ")[,|\\s]+(" + n + ")[,|\\s]+(" + n + ")\\s*\\)?", {
            CSS_UNIT: new RegExp(n),
            rgb: RegExp("rgb" + r),
            rgba: RegExp("rgba" + i),
            hsl: RegExp("hsl" + r),
            hsla: RegExp("hsla" + i),
            hsv: RegExp("hsv" + r),
            hsva: RegExp("hsva" + i),
            hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
        });

        function j(e) {
            return !!Y.CSS_UNIT.exec(e)
        }
        e.exports ? e.exports = f : "function" == typeof define && define.amd ? define(function() {
            return f
        }) : window.tinycolor = f
    }(Math)
}