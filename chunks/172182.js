function(e, t, n) {
    "use strict";
    var i;
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    }), n("781738"), n("222007");
    let s = /^#[0-9a-f]{3,8}$/i,
        r = /^((?:rgb|hsl)a?)\s*\(([^)]*)\)/i;
    i = class e {
        toHexString() {
            var e = Math.round(this.red).toString(16),
                t = Math.round(this.green).toString(16),
                n = Math.round(this.blue).toString(16);
            return "#" + (this.red > 15.5 ? e : "0" + e) + (this.green > 15.5 ? t : "0" + t) + (this.blue > 15.5 ? n : "0" + n)
        }
        static parseString(e) {
            return null != e.match(r) ? this.parseColorFnString(e) : null != e.match(s) ? this.parseHexString(e) : void 0
        }
        static parseRgbString(t) {
            return "transparent" === t ? new e(0, 0, 0, 0) : this.parseColorFnString(t)
        }
        static parseHexString(t) {
            if (!(null == t.match(s) || [6, 8].includes(t.length))) {
                if ((t = t.replace("#", "")).length < 6) {
                    let [e, n, i, s] = t;
                    t = e + e + n + n + i + i, null != s && (t += s + s)
                }
                var n = t.match(/.{1,2}/g);
                if (null != n) return new e(parseInt(n[0], 16), parseInt(n[1], 16), parseInt(n[2], 16), null != n[3] ? parseInt(n[3], 16) / 255 : 1)
            }
        }
        static parseColorFnString(t) {
            var n;
            let [, i, s] = null !== (n = t.match(r)) && void 0 !== n ? n : [];
            if (null == i || null == s) return;
            let a = s.split(/\s*[,/\s]\s*/).map(e => e.replace(",", "").trim()).filter(e => "" !== e),
                o = a.map((e, t) => (function(e, t, n) {
                    if (/%$/.test(t)) return 3 === n ? parseFloat(t) / 100 : 255 * parseFloat(t) / 100;
                    if ("h" === e[n]) {
                        if (/turn$/.test(t)) return 360 * parseFloat(t);
                        if (/rad$/.test(t)) return 57.3 * parseFloat(t)
                    }
                    return parseFloat(t)
                })(i, e, t));
            if ("hsl" === i.substr(0, 3)) {
                let t = function(e) {
                    let t, {
                        hue: n,
                        saturation: i,
                        lightness: s,
                        alpha: r
                    } = e;
                    i /= 255, s /= 255;
                    let a = (1 - Math.abs(2 * s - 1)) * i,
                        o = a * (1 - Math.abs(n / 60 % 2 - 1)),
                        l = s - a / 2;
                    t = n < 60 ? [a, o, 0] : n < 120 ? [o, a, 0] : n < 180 ? [0, a, o] : n < 240 ? [0, o, a] : n < 300 ? [o, 0, a] : [a, 0, o];
                    let u = t.map(e => Math.round((e + l) * 255));
                    return {
                        red: u[0],
                        green: u[1],
                        blue: u[2],
                        alpha: r
                    }
                }({
                    hue: o[0],
                    saturation: o[1],
                    lightness: o[2],
                    alpha: o[3]
                });
                return new e(t.red, t.green, t.blue, t.alpha)
            }
            return new e(o[0], o[1], o[2], "number" == typeof o[3] ? o[3] : 1)
        }
        toHSL() {
            return function(e) {
                let {
                    red: t,
                    green: n,
                    blue: i,
                    alpha: s
                } = e, r = t / 255, a = n / 255, o = i / 255, l = Math.max(r, a, o), u = Math.min(r, a, o), d = l - u, c = (l + u) / 2, f = d > 0 ? d / (1 - Math.abs(2 * c - 1)) : 0;
                if (0 === d) return {
                    hue: 0,
                    saturation: f,
                    lightness: c,
                    alpha: s
                };
                let _ = 0;
                switch (l) {
                    case r:
                        _ = (a - o) / d % 6;
                        break;
                    case a:
                        _ = (o - r) / d + 2;
                        break;
                    case o:
                        _ = (a - o) / d + 4
                }
                return {
                    hue: 60 * _,
                    saturation: f,
                    lightness: c,
                    alpha: s
                }
            }({
                red: this.red,
                green: this.green,
                blue: this.blue,
                alpha: this.alpha
            })
        }
        getRelativeLuminance() {
            var e = this.red / 255,
                t = this.green / 255,
                n = this.blue / 255;
            return .2126 * (e <= .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)) + .7152 * (t <= .03928 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)) + .0722 * (n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4))
        }
        constructor(e, t, n, i) {
            this.red = e, this.green = t, this.blue = n, this.alpha = i
        }
    }
}