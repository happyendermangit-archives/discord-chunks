function(e, t, n) {
    "use strict";

    function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });

    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
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
                if ("string" == typeof e) return r(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var u = /^#[0-9a-f]{3,8}$/i,
        s = /^((?:rgb|hsl)a?)\s*\(([^)]*)\)/i,
        l = function() {
            var e, t, n;

            function r(e, t, n, o) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, r), i(this, "red", void 0), i(this, "green", void 0), i(this, "blue", void 0), i(this, "alpha", void 0), this.red = e, this.green = t, this.blue = n, this.alpha = o
            }
            return e = r, t = [{
                key: "toHexString",
                value: function() {
                    var e = Math.round(this.red).toString(16),
                        t = Math.round(this.green).toString(16),
                        n = Math.round(this.blue).toString(16);
                    return "#" + (this.red > 15.5 ? e : "0" + e) + (this.green > 15.5 ? t : "0" + t) + (this.blue > 15.5 ? n : "0" + n)
                }
            }, {
                key: "toHSL",
                value: function() {
                    return function(e) {
                        var t = e.red,
                            n = e.green,
                            r = e.blue,
                            o = e.alpha,
                            i = t / 255,
                            a = n / 255,
                            u = r / 255,
                            s = Math.max(i, a, u),
                            l = Math.min(i, a, u),
                            c = s - l,
                            f = (s + l) / 2,
                            d = c > 0 ? c / (1 - Math.abs(2 * f - 1)) : 0;
                        if (0 === c) return {
                            hue: 0,
                            saturation: d,
                            lightness: f,
                            alpha: o
                        };
                        var _ = 0;
                        switch (s) {
                            case i:
                                _ = (a - u) / c % 6;
                                break;
                            case a:
                                _ = (u - i) / c + 2;
                                break;
                            case u:
                                _ = (a - u) / c + 4
                        }
                        return {
                            hue: 60 * _,
                            saturation: d,
                            lightness: f,
                            alpha: o
                        }
                    }({
                        red: this.red,
                        green: this.green,
                        blue: this.blue,
                        alpha: this.alpha
                    })
                }
            }, {
                key: "getRelativeLuminance",
                value: function() {
                    var e = this.red / 255,
                        t = this.green / 255,
                        n = this.blue / 255;
                    return .2126 * (e <= .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)) + .7152 * (t <= .03928 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)) + .0722 * (n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4))
                }
            }], n = [{
                key: "parseString",
                value: function(e) {
                    return null != e.match(s) ? this.parseColorFnString(e) : null != e.match(u) ? this.parseHexString(e) : void 0
                }
            }, {
                key: "parseRgbString",
                value: function(e) {
                    return "transparent" === e ? new r(0, 0, 0, 0) : this.parseColorFnString(e)
                }
            }, {
                key: "parseHexString",
                value: function(e) {
                    if (!(null == e.match(u) || [6, 8].includes(e.length))) {
                        if ((e = e.replace("#", "")).length < 6) {
                            var t = a(e, 4),
                                n = t[0],
                                o = t[1],
                                i = t[2],
                                s = t[3];
                            e = n + n + o + o + i + i, null != s && (e += s + s)
                        }
                        var l = e.match(/.{1,2}/g);
                        if (null != l) return new r(parseInt(l[0], 16), parseInt(l[1], 16), parseInt(l[2], 16), null != l[3] ? parseInt(l[3], 16) / 255 : 1)
                    }
                }
            }, {
                key: "parseColorFnString",
                value: function(e) {
                    var t, n = a(null !== (t = e.match(s)) && void 0 !== t ? t : [], 3),
                        o = n[1],
                        i = n[2];
                    if (null != o && null != i) {
                        var u = i.split(/\s*[,/\s]\s*/).map(function(e) {
                            return e.replace(",", "").trim()
                        }).filter(function(e) {
                            return "" !== e
                        }).map(function(e, t) {
                            return function(e, t, n) {
                                if (/%$/.test(t)) return 3 === n ? parseFloat(t) / 100 : 255 * parseFloat(t) / 100;
                                if ("h" === e[n]) {
                                    if (/turn$/.test(t)) return 360 * parseFloat(t);
                                    if (/rad$/.test(t)) return 57.3 * parseFloat(t)
                                }
                                return parseFloat(t)
                            }(o, e, t)
                        });
                        if ("hsl" === o.substr(0, 3)) {
                            var l, c, f, d, _, E, p, m, y, I, h = (f = (l = {
                                hue: u[0],
                                saturation: u[1],
                                lightness: u[2],
                                alpha: u[3]
                            }).hue, d = l.saturation, _ = l.lightness, E = l.alpha, m = (p = (1 - Math.abs(2 * (_ /= 255) - 1)) * (d /= 255)) * (1 - Math.abs(f / 60 % 2 - 1)), y = _ - p / 2, {
                                red: (I = (c = f < 60 ? [p, m, 0] : f < 120 ? [m, p, 0] : f < 180 ? [0, p, m] : f < 240 ? [0, m, p] : f < 300 ? [m, 0, p] : [p, 0, m]).map(function(e) {
                                    return Math.round((e + y) * 255)
                                }))[0],
                                green: I[1],
                                blue: I[2],
                                alpha: E
                            });
                            return new r(h.red, h.green, h.blue, h.alpha)
                        }
                        return new r(u[0], u[1], u[2], "number" == typeof u[3] ? u[3] : 1)
                    }
                }
            }], t && o(e.prototype, t), n && o(e, n), r
        }()
}