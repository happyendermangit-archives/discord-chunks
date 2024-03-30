function(t, e) {
    var n, r;
    n = this, r = function() {
        "use strict";
        for (var t = function(t, e, n) {
                return void 0 === e && (e = 0), void 0 === n && (n = 1), t < e ? e : t > n ? n : t
            }, e = {}, n = 0, r = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Undefined", "Null"]; n < r.length; n += 1) {
            var i = r[n];
            e["[object " + i + "]"] = i.toLowerCase()
        }
        var a = function(t) {
                return e[Object.prototype.toString.call(t)] || "object"
            },
            o = Math.PI,
            s = {
                clip_rgb: function(e) {
                    e._clipped = !1, e._unclipped = e.slice(0);
                    for (var n = 0; n <= 3; n++) n < 3 ? ((e[n] < 0 || e[n] > 255) && (e._clipped = !0), e[n] = t(e[n], 0, 255)) : 3 === n && (e[n] = t(e[n], 0, 1));
                    return e
                },
                limit: t,
                type: a,
                unpack: function(t, e) {
                    return (void 0 === e && (e = null), t.length >= 3) ? Array.prototype.slice.call(t) : "object" == a(t[0]) && e ? e.split("").filter(function(e) {
                        return void 0 !== t[0][e]
                    }).map(function(e) {
                        return t[0][e]
                    }) : t[0]
                },
                last: function(t) {
                    if (t.length < 2) return null;
                    var e = t.length - 1;
                    return "string" == a(t[e]) ? t[e].toLowerCase() : null
                },
                TWOPI: 2 * o,
                PITHIRD: o / 3,
                DEG2RAD: o / 180,
                RAD2DEG: 180 / o
            },
            u = {
                format: {},
                autodetect: []
            },
            l = s.last,
            c = s.clip_rgb,
            d = s.type,
            f = function() {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                if ("object" === d(t[0]) && t[0].constructor && t[0].constructor === this.constructor) return t[0];
                var n = l(t),
                    r = !1;
                if (!n) {
                    r = !0, !u.sorted && (u.autodetect = u.autodetect.sort(function(t, e) {
                        return e.p - t.p
                    }), u.sorted = !0);
                    for (var i = 0, a = u.autodetect; i < a.length; i += 1) {
                        var o = a[i];
                        if (n = o.test.apply(o, t)) break
                    }
                }
                if (u.format[n]) {
                    var s = u.format[n].apply(null, r ? t : t.slice(0, -1));
                    this._rgb = c(s)
                } else throw Error("unknown format: " + t);
                3 === this._rgb.length && this._rgb.push(1)
            };
        f.prototype.toString = function() {
            return "function" == d(this.hex) ? this.hex() : "[" + this._rgb.join(",") + "]"
        };
        var p = function() {
            for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
            return new(Function.prototype.bind.apply(p.Color, [null].concat(t)))
        };
        p.Color = f, p.version = "2.4.2";
        var h = s.unpack,
            _ = Math.max,
            g = s.unpack,
            m = s.unpack,
            y = s.type,
            v = function() {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                var n = h(t, "rgb"),
                    r = n[0],
                    i = n[1],
                    a = n[2],
                    o = 1 - _(r /= 255, _(i /= 255, a /= 255)),
                    s = o < 1 ? 1 / (1 - o) : 0;
                return [(1 - r - o) * s, (1 - i - o) * s, (1 - a - o) * s, o]
            };
        f.prototype.cmyk = function() {
            return v(this._rgb)
        }, p.cmyk = function() {
            for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
            return new(Function.prototype.bind.apply(f, [null].concat(t, ["cmyk"])))
        }, u.format.cmyk = function() {
            for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
            var n = (t = g(t, "cmyk"))[0],
                r = t[1],
                i = t[2],
                a = t[3],
                o = t.length > 4 ? t[4] : 1;
            return 1 === a ? [0, 0, 0, o] : [n >= 1 ? 0 : 255 * (1 - n) * (1 - a), r >= 1 ? 0 : 255 * (1 - r) * (1 - a), i >= 1 ? 0 : 255 * (1 - i) * (1 - a), o]
        }, u.autodetect.push({
            p: 2,
            test: function() {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                if ("array" === y(t = m(t, "cmyk")) && 4 === t.length) return "cmyk"
            }
        });
        var b = s.unpack,
            E = s.last,
            S = function(t) {
                return Math.round(100 * t) / 100
            },
            w = s.unpack,
            T = function() {
                for (var t, e, n = [], r = arguments.length; r--;) n[r] = arguments[r];
                var i = (n = w(n, "rgba"))[0],
                    a = n[1],
                    o = n[2],
                    s = Math.min(i /= 255, a /= 255, o /= 255),
                    u = Math.max(i, a, o),
                    l = (u + s) / 2;
                return (u === s ? (t = 0, e = Number.NaN) : t = l < .5 ? (u - s) / (u + s) : (u - s) / (2 - u - s), i == u ? e = (a - o) / (u - s) : a == u ? e = 2 + (o - i) / (u - s) : o == u && (e = 4 + (i - a) / (u - s)), (e *= 60) < 0 && (e += 360), n.length > 3 && void 0 !== n[3]) ? [e, t, l, n[3]] : [e, t, l]
            },
            k = s.unpack,
            x = s.last,
            R = function() {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                var n = b(t, "hsla"),
                    r = E(t) || "lsa";
                return n[0] = S(n[0] || 0), n[1] = S(100 * n[1]) + "%", n[2] = S(100 * n[2]) + "%", "hsla" === r || n.length > 3 && n[3] < 1 ? (n[3] = n.length > 3 ? n[3] : 1, r = "hsla") : n.length = 3, r + "(" + n.join(",") + ")"
            },
            N = Math.round,
            D = s.unpack,
            I = Math.round,
            O = function() {
                for (var t, e, n, r, i = [], a = arguments.length; a--;) i[a] = arguments[a];
                var o = (i = D(i, "hsl"))[0],
                    s = i[1],
                    u = i[2];
                if (0 === s) e = n = r = 255 * u;
                else {
                    var l = [0, 0, 0],
                        c = [0, 0, 0],
                        d = u < .5 ? u * (1 + s) : u + s - u * s,
                        f = 2 * u - d,
                        p = o / 360;
                    l[0] = p + 1 / 3, l[1] = p, l[2] = p - 1 / 3;
                    for (var h = 0; h < 3; h++) l[h] < 0 && (l[h] += 1), l[h] > 1 && (l[h] -= 1), 6 * l[h] < 1 ? c[h] = f + (d - f) * 6 * l[h] : 2 * l[h] < 1 ? c[h] = d : 3 * l[h] < 2 ? c[h] = f + (d - f) * (2 / 3 - l[h]) * 6 : c[h] = f;
                    e = (t = [I(255 * c[0]), I(255 * c[1]), I(255 * c[2])])[0], n = t[1], r = t[2]
                }
                return i.length > 3 ? [e, n, r, i[3]] : [e, n, r, 1]
            },
            C = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,
            A = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,
            B = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
            U = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
            M = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
            L = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
            P = Math.round,
            G = function(t) {
                if (t = t.toLowerCase().trim(), u.format.named) try {
                    return u.format.named(t)
                } catch (t) {}
                if (e = t.match(C)) {
                    for (var e, n = e.slice(1, 4), r = 0; r < 3; r++) n[r] = +n[r];
                    return n[3] = 1, n
                }
                if (e = t.match(A)) {
                    for (var i = e.slice(1, 5), a = 0; a < 4; a++) i[a] = +i[a];
                    return i
                }
                if (e = t.match(B)) {
                    for (var o = e.slice(1, 4), s = 0; s < 3; s++) o[s] = P(2.55 * o[s]);
                    return o[3] = 1, o
                }
                if (e = t.match(U)) {
                    for (var l = e.slice(1, 5), c = 0; c < 3; c++) l[c] = P(2.55 * l[c]);
                    return l[3] = +l[3], l
                }
                if (e = t.match(M)) {
                    var d = e.slice(1, 4);
                    d[1] *= .01, d[2] *= .01;
                    var f = O(d);
                    return f[3] = 1, f
                }
                if (e = t.match(L)) {
                    var p = e.slice(1, 4);
                    p[1] *= .01, p[2] *= .01;
                    var h = O(p);
                    return h[3] = +e[4], h
                }
            };
        G.test = function(t) {
            return C.test(t) || A.test(t) || B.test(t) || U.test(t) || M.test(t) || L.test(t)
        };
        var F = s.type,
            Y = function() {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                var n = k(t, "rgba"),
                    r = x(t) || "rgb";
                return "hsl" == r.substr(0, 3) ? R(T(n), r) : (n[0] = N(n[0]), n[1] = N(n[1]), n[2] = N(n[2]), ("rgba" === r || n.length > 3 && n[3] < 1) && (n[3] = n.length > 3 ? n[3] : 1, r = "rgba"), r + "(" + n.slice(0, "rgb" === r ? 3 : 4).join(",") + ")")
            };
        f.prototype.css = function(t) {
            return Y(this._rgb, t)
        }, p.css = function() {
            for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
            return new(Function.prototype.bind.apply(f, [null].concat(t, ["css"])))
        }, u.format.css = G, u.autodetect.push({
            p: 5,
            test: function(t) {
                for (var e = [], n = arguments.length - 1; n-- > 0;) e[n] = arguments[n + 1];
                if (!e.length && "string" === F(t) && G.test(t)) return "css"
            }
        });
        var z = s.unpack;
        u.format.gl = function() {
            for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
            var n = z(t, "rgba");
            return n[0] *= 255, n[1] *= 255, n[2] *= 255, n
        }, p.gl = function() {
            for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
            return new(Function.prototype.bind.apply(f, [null].concat(t, ["gl"])))
        }, f.prototype.gl = function() {
            var t = this._rgb;
            return [t[0] / 255, t[1] / 255, t[2] / 255, t[3]]
        };
        var j = s.unpack,
            H = s.unpack,
            $ = Math.floor,
            W = s.unpack,
            q = s.type,
            Z = function() {
                for (var t, e = [], n = arguments.length; n--;) e[n] = arguments[n];
                var r = j(e, "rgb"),
                    i = r[0],
                    a = r[1],
                    o = r[2],
                    s = Math.min(i, a, o),
                    u = Math.max(i, a, o),
                    l = u - s;
                return 0 === l ? t = Number.NaN : (i === u && (t = (a - o) / l), a === u && (t = 2 + (o - i) / l), o === u && (t = 4 + (i - a) / l), (t *= 60) < 0 && (t += 360)), [t, 100 * l / 255, s / (255 - l) * 100]
            };
        f.prototype.hcg = function() {
            return Z(this._rgb)
        }, p.hcg = function() {
            for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
            return new(Function.prototype.bind.apply(f, [null].concat(t, ["hcg"])))
        }, u.format.hcg = function() {
            for (var t, e, n, r, i, a, o, s, u, l = [], c = arguments.length; c--;) l[c] = arguments[c];
            var d = (l = H(l, "hcg"))[0],
                f = l[1],
                p = l[2];
            p *= 255;
            var h = 255 * f;
            if (0 === f) o = s = u = p;
            else {
                360 === d && (d = 0), d > 360 && (d -= 360), d < 0 && (d += 360);
                var _ = $(d /= 60),
                    g = d - _,
                    m = p * (1 - f),
                    y = m + h * (1 - g),
                    v = m + h * g,
                    b = m + h;
                switch (_) {
                    case 0:
                        o = (t = [b, v, m])[0], s = t[1], u = t[2];
                        break;
                    case 1:
                        o = (e = [y, b, m])[0], s = e[1], u = e[2];
                        break;
                    case 2:
                        o = (n = [m, b, v])[0], s = n[1], u = n[2];
                        break;
                    case 3:
                        o = (r = [m, y, b])[0], s = r[1], u = r[2];
                        break;
                    case 4:
                        o = (i = [v, m, b])[0], s = i[1], u = i[2];
                        break;
                    case 5:
                        o = (a = [b, m, y])[0], s = a[1], u = a[2]
                }
            }
            return [o, s, u, l.length > 3 ? l[3] : 1]
        }, u.autodetect.push({
            p: 1,
            test: function() {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                if ("array" === q(t = W(t, "hcg")) && 3 === t.length) return "hcg"
            }
        });
        var V = s.unpack,
            J = s.last,
            K = Math.round,
            X = function() {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                var n = V(t, "rgba"),
                    r = n[0],
                    i = n[1],
                    a = n[2],
                    o = n[3],
                    s = J(t) || "auto";
                void 0 === o && (o = 1), "auto" === s && (s = o < 1 ? "rgba" : "rgb"), r = K(r), i = K(i);
                var u = "000000" + (r << 16 | i << 8 | (a = K(a))).toString(16);
                u = u.substr(u.length - 6);
                var l = "0" + K(255 * o).toString(16);
                switch (l = l.substr(l.length - 2), s.toLowerCase()) {
                    case "rgba":
                        return "#" + u + l;
                    case "argb":
                        return "#" + l + u;
                    default:
                        return "#" + u
                }
            },
            Q = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
            tt = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,
            te = function(t) {
                if (t.match(Q)) {
                    (4 === t.length || 7 === t.length) && (t = t.substr(1)), 3 === t.length && (t = (t = t.split(""))[0] + t[0] + t[1] + t[1] + t[2] + t[2]);
                    var e = parseInt(t, 16);
                    return [e >> 16, e >> 8 & 255, 255 & e, 1]
                }
                if (t.match(tt)) {
                    (5 === t.length || 9 === t.length) && (t = t.substr(1)), 4 === t.length && (t = (t = t.split(""))[0] + t[0] + t[1] + t[1] + t[2] + t[2] + t[3] + t[3]);
                    var n = parseInt(t, 16);
                    return [n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, Math.round((255 & n) / 255 * 100) / 100]
                }
                throw Error("unknown hex color: " + t)
            },
            tn = s.type;
        f.prototype.hex = function(t) {
            return X(this._rgb, t)
        }, p.hex = function() {
            for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
            return new(Function.prototype.bind.apply(f, [null].concat(t, ["hex"])))
        }, u.format.hex = te, u.autodetect.push({
            p: 4,
            test: function(t) {
                for (var e = [], n = arguments.length - 1; n-- > 0;) e[n] = arguments[n + 1];
                if (!e.length && "string" === tn(t) && [3, 4, 5, 6, 7, 8, 9].indexOf(t.length) >= 0) return "hex"
            }
        });
        var tr = s.unpack,
            ti = s.TWOPI,
            ta = Math.min,
            to = Math.sqrt,
            ts = Math.acos,
            tu = s.unpack,
            tl = s.limit,
            tc = s.TWOPI,
            td = s.PITHIRD,
            tf = Math.cos,
            tp = s.unpack,
            th = s.type,
            t_ = function() {
                for (var t, e = [], n = arguments.length; n--;) e[n] = arguments[n];
                var r = tr(e, "rgb"),
                    i = r[0],
                    a = r[1],
                    o = r[2],
                    s = ta(i /= 255, a /= 255, o /= 255),
                    u = (i + a + o) / 3,
                    l = u > 0 ? 1 - s / u : 0;
                return 0 === l ? t = NaN : (t = ts(t = (i - a + (i - o)) / 2 / to((i - a) * (i - a) + (i - o) * (a - o))), o > a && (t = ti - t), t /= ti), [360 * t, l, u]
            };
        f.prototype.hsi = function() {
            return t_(this._rgb)
        }, p.hsi = function() {
            for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
            return new(Function.prototype.bind.apply(f, [null].concat(t, ["hsi"])))
        }, u.format.hsi = function() {
            for (var t, e, n, r = [], i = arguments.length; i--;) r[i] = arguments[i];
            var a = (r = tu(r, "hsi"))[0],
                o = r[1],
                s = r[2];
            return isNaN(a) && (a = 0), isNaN(o) && (o = 0), a > 360 && (a -= 360), a < 0 && (a += 360), (a /= 360) < 1 / 3 ? e = 1 - ((n = (1 - o) / 3) + (t = (1 + o * tf(tc * a) / tf(td - tc * a)) / 3)) : a < 2 / 3 ? (a -= 1 / 3, n = 1 - ((t = (1 - o) / 3) + (e = (1 + o * tf(tc * a) / tf(td - tc * a)) / 3))) : (a -= 2 / 3, t = 1 - ((e = (1 - o) / 3) + (n = (1 + o * tf(tc * a) / tf(td - tc * a)) / 3))), t = tl(s * t * 3), e = tl(s * e * 3), [255 * t, 255 * e, 255 * (n = tl(s * n * 3)), r.length > 3 ? r[3] : 1]
        }, u.autodetect.push({
            p: 2,
            test: function() {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                if ("array" === th(t = tp(t, "hsi")) && 3 === t.length) return "hsi"
            }
        });
        var tg = s.unpack,
            tm = s.type;
        f.prototype.hsl = function() {
            return T(this._rgb)
        }, p.hsl = function() {
            for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
            return new(Function.prototype.bind.apply(f, [null].concat(t, ["hsl"])))
        }, u.format.hsl = O, u.autodetect.push({
            p: 2,
            test: function() {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                if ("array" === tm(t = tg(t, "hsl")) && 3 === t.length) return "hsl"
            }
        });
        var ty = s.unpack,
            tv = Math.min,
            tb = Math.max,
            tE = s.unpack,
            tS = Math.floor,
            tw = s.unpack,
            tT = s.type,
            tk = function() {
                for (var t, e, n = [], r = arguments.length; r--;) n[r] = arguments[r];
                var i = (n = ty(n, "rgb"))[0],
                    a = n[1],
                    o = n[2],
                    s = tv(i, a, o),
                    u = tb(i, a, o),
                    l = u - s;
                return 0 === u ? (t = Number.NaN, e = 0) : (e = l / u, i === u && (t = (a - o) / l), a === u && (t = 2 + (o - i) / l), o === u && (t = 4 + (i - a) / l), (t *= 60) < 0 && (t += 360)), [t, e, u / 255]
            };
        f.prototype.hsv = function() {
            return tk(this._rgb)
        }, p.hsv = function() {
            for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
            return new(Function.prototype.bind.apply(f, [null].concat(t, ["hsv"])))
        }, u.format.hsv = function() {
            for (var t, e, n, r, i, a, o, s, u, l = [], c = arguments.length; c--;) l[c] = arguments[c];
            var d = (l = tE(l, "hsv"))[0],
                f = l[1],
                p = l[2];
            if (p *= 255, 0 === f) o = s = u = p;
            else {
                360 === d && (d = 0), d > 360 && (d -= 360), d < 0 && (d += 360);
                var h = tS(d /= 60),
                    _ = d - h,
                    g = p * (1 - f),
                    m = p * (1 - f * _),
                    y = p * (1 - f * (1 - _));
                switch (h) {
                    case 0:
                        o = (t = [p, y, g])[0], s = t[1], u = t[2];
                        break;
                    case 1:
                        o = (e = [m, p, g])[0], s = e[1], u = e[2];
                        break;
                    case 2:
                        o = (n = [g, p, y])[0], s = n[1], u = n[2];
                        break;
                    case 3:
                        o = (r = [g, m, p])[0], s = r[1], u = r[2];
                        break;
                    case 4:
                        o = (i = [y, g, p])[0], s = i[1], u = i[2];
                        break;
                    case 5:
                        o = (a = [p, g, m])[0], s = a[1], u = a[2]
                }
            }
            return [o, s, u, l.length > 3 ? l[3] : 1]
        }, u.autodetect.push({
            p: 2,
            test: function() {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                if ("array" === tT(t = tw(t, "hsv")) && 3 === t.length) return "hsv"
            }
        });
        var tx = {
                Kn: 18,
                Xn: .95047,
                Yn: 1,
                Zn: 1.08883,
                t0: .137931034,
                t1: .206896552,
                t2: .12841855,
                t3: .008856452
            },
            tR = s.unpack,
            tN = Math.pow,
            tD = function(t) {
                return (t /= 255) <= .04045 ? t / 12.92 : tN((t + .055) / 1.055, 2.4)
            },
            tI = function(t) {
                return t > tx.t3 ? tN(t, 1 / 3) : t / tx.t2 + tx.t0
            },
            tO = function(t, e, n) {
                return t = tD(t), e = tD(e), [tI((.4124564 * t + .3575761 * e + .1804375 * (n = tD(n))) / tx.Xn), tI((.2126729 * t + .7151522 * e + .072175 * n) / tx.Yn), tI((.0193339 * t + .119192 * e + .9503041 * n) / tx.Zn)]
            },
            tC = function() {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                var n = tR(t, "rgb"),
                    r = tO(n[0], n[1], n[2]),
                    i = r[0],
                    a = r[1],
                    o = r[2],
                    s = 116 * a - 16;
                return [s < 0 ? 0 : s, 500 * (i - a), 200 * (a - o)]
            },
            tA = s.unpack,
            tB = Math.pow,
            tU = function(t) {
                return 255 * (t <= .00304 ? 12.92 * t : 1.055 * tB(t, 1 / 2.4) - .055)
            },
            tM = function(t) {
                return t > tx.t1 ? t * t * t : tx.t2 * (t - tx.t0)
            },
            tL = function() {
                for (var t, e, n, r, i, a = [], o = arguments.length; o--;) a[o] = arguments[o];
                var s = (a = tA(a, "lab"))[0],
                    u = a[1],
                    l = a[2];
                return e = (s + 16) / 116, t = isNaN(u) ? e : e + u / 500, n = isNaN(l) ? e : e - l / 200, e = tx.Yn * tM(e), t = tx.Xn * tM(t), r = tU(3.2404542 * t - 1.5371385 * e - .4985314 * (n = tx.Zn * tM(n))), i = tU(-.969266 * t + 1.8760108 * e + .041556 * n), [r, i, tU(.0556434 * t - .2040259 * e + 1.0572252 * n), a.length > 3 ? a[3] : 1]
            },
            tP = s.unpack,
            tG = s.type;
        f.prototype.lab = function() {
            return tC(this._rgb)
        }, p.lab = function() {
            for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
            return new(Function.prototype.bind.apply(f, [null].concat(t, ["lab"])))
        }, u.format.lab = tL, u.autodetect.push({
            p: 2,
            test: function() {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                if ("array" === tG(t = tP(t, "lab")) && 3 === t.length) return "lab"
            }
        });
        var tF = s.unpack,
            tY = s.RAD2DEG,
            tz = Math.sqrt,
            tj = Math.atan2,
            tH = Math.round,
            t$ = function() {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                var n = tF(t, "lab"),
                    r = n[0],
                    i = n[1],
                    a = n[2],
                    o = tz(i * i + a * a),
                    s = (tj(a, i) * tY + 360) % 360;
                return 0 === tH(1e4 * o) && (s = Number.NaN), [r, o, s]
            },
            tW = s.unpack,
            tq = s.unpack,
            tZ = s.DEG2RAD,
            tV = Math.sin,
            tJ = Math.cos,
            tK = function() {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                var n = tq(t, "lch"),
                    r = n[0],
                    i = n[1],
                    a = n[2];
                return isNaN(a) && (a = 0), [r, tJ(a *= tZ) * i, tV(a) * i]
            },
            tX = s.unpack,
            tQ = function() {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                var n = tK((t = tX(t, "lch"))[0], t[1], t[2]),
                    r = tL(n[0], n[1], n[2]);
                return [r[0], r[1], r[2], t.length > 3 ? t[3] : 1]
            },
            t0 = s.unpack,
            t1 = s.unpack,
            t2 = s.type,
            t5 = function() {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                var n = tW(t, "rgb"),
                    r = tC(n[0], n[1], n[2]);
                return t$(r[0], r[1], r[2])
            };
        f.prototype.lch = function() {
            return t5(this._rgb)
        }, f.prototype.hcl = function() {
            return t5(this._rgb).reverse()
        }, p.lch = function() {
            for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
            return new(Function.prototype.bind.apply(f, [null].concat(t, ["lch"])))
        }, p.hcl = function() {
            for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
            return new(Function.prototype.bind.apply(f, [null].concat(t, ["hcl"])))
        }, u.format.lch = tQ, u.format.hcl = function() {
            for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
            var n = t0(t, "hcl").reverse();
            return tQ.apply(void 0, n)
        }, ["lch", "hcl"].forEach(function(t) {
            return u.autodetect.push({
                p: 2,
                test: function() {
                    for (var e = [], n = arguments.length; n--;) e[n] = arguments[n];
                    if ("array" === t2(e = t1(e, t)) && 3 === e.length) return t
                }
            })
        });
        var t3 = {
                aliceblue: "#f0f8ff",
                antiquewhite: "#faebd7",
                aqua: "#00ffff",
                aquamarine: "#7fffd4",
                azure: "#f0ffff",
                beige: "#f5f5dc",
                bisque: "#ffe4c4",
                black: "#000000",
                blanchedalmond: "#ffebcd",
                blue: "#0000ff",
                blueviolet: "#8a2be2",
                brown: "#a52a2a",
                burlywood: "#deb887",
                cadetblue: "#5f9ea0",
                chartreuse: "#7fff00",
                chocolate: "#d2691e",
                coral: "#ff7f50",
                cornflower: "#6495ed",
                cornflowerblue: "#6495ed",
                cornsilk: "#fff8dc",
                crimson: "#dc143c",
                cyan: "#00ffff",
                darkblue: "#00008b",
                darkcyan: "#008b8b",
                darkgoldenrod: "#b8860b",
                darkgray: "#a9a9a9",
                darkgreen: "#006400",
                darkgrey: "#a9a9a9",
                darkkhaki: "#bdb76b",
                darkmagenta: "#8b008b",
                darkolivegreen: "#556b2f",
                darkorange: "#ff8c00",
                darkorchid: "#9932cc",
                darkred: "#8b0000",
                darksalmon: "#e9967a",
                darkseagreen: "#8fbc8f",
                darkslateblue: "#483d8b",
                darkslategray: "#2f4f4f",
                darkslategrey: "#2f4f4f",
                darkturquoise: "#00ced1",
                darkviolet: "#9400d3",
                deeppink: "#ff1493",
                deepskyblue: "#00bfff",
                dimgray: "#696969",
                dimgrey: "#696969",
                dodgerblue: "#1e90ff",
                firebrick: "#b22222",
                floralwhite: "#fffaf0",
                forestgreen: "#228b22",
                fuchsia: "#ff00ff",
                gainsboro: "#dcdcdc",
                ghostwhite: "#f8f8ff",
                gold: "#ffd700",
                goldenrod: "#daa520",
                gray: "#808080",
                green: "#008000",
                greenyellow: "#adff2f",
                grey: "#808080",
                honeydew: "#f0fff0",
                hotpink: "#ff69b4",
                indianred: "#cd5c5c",
                indigo: "#4b0082",
                ivory: "#fffff0",
                khaki: "#f0e68c",
                laserlemon: "#ffff54",
                lavender: "#e6e6fa",
                lavenderblush: "#fff0f5",
                lawngreen: "#7cfc00",
                lemonchiffon: "#fffacd",
                lightblue: "#add8e6",
                lightcoral: "#f08080",
                lightcyan: "#e0ffff",
                lightgoldenrod: "#fafad2",
                lightgoldenrodyellow: "#fafad2",
                lightgray: "#d3d3d3",
                lightgreen: "#90ee90",
                lightgrey: "#d3d3d3",
                lightpink: "#ffb6c1",
                lightsalmon: "#ffa07a",
                lightseagreen: "#20b2aa",
                lightskyblue: "#87cefa",
                lightslategray: "#778899",
                lightslategrey: "#778899",
                lightsteelblue: "#b0c4de",
                lightyellow: "#ffffe0",
                lime: "#00ff00",
                limegreen: "#32cd32",
                linen: "#faf0e6",
                magenta: "#ff00ff",
                maroon: "#800000",
                maroon2: "#7f0000",
                maroon3: "#b03060",
                mediumaquamarine: "#66cdaa",
                mediumblue: "#0000cd",
                mediumorchid: "#ba55d3",
                mediumpurple: "#9370db",
                mediumseagreen: "#3cb371",
                mediumslateblue: "#7b68ee",
                mediumspringgreen: "#00fa9a",
                mediumturquoise: "#48d1cc",
                mediumvioletred: "#c71585",
                midnightblue: "#191970",
                mintcream: "#f5fffa",
                mistyrose: "#ffe4e1",
                moccasin: "#ffe4b5",
                navajowhite: "#ffdead",
                navy: "#000080",
                oldlace: "#fdf5e6",
                olive: "#808000",
                olivedrab: "#6b8e23",
                orange: "#ffa500",
                orangered: "#ff4500",
                orchid: "#da70d6",
                palegoldenrod: "#eee8aa",
                palegreen: "#98fb98",
                paleturquoise: "#afeeee",
                palevioletred: "#db7093",
                papayawhip: "#ffefd5",
                peachpuff: "#ffdab9",
                peru: "#cd853f",
                pink: "#ffc0cb",
                plum: "#dda0dd",
                powderblue: "#b0e0e6",
                purple: "#800080",
                purple2: "#7f007f",
                purple3: "#a020f0",
                rebeccapurple: "#663399",
                red: "#ff0000",
                rosybrown: "#bc8f8f",
                royalblue: "#4169e1",
                saddlebrown: "#8b4513",
                salmon: "#fa8072",
                sandybrown: "#f4a460",
                seagreen: "#2e8b57",
                seashell: "#fff5ee",
                sienna: "#a0522d",
                silver: "#c0c0c0",
                skyblue: "#87ceeb",
                slateblue: "#6a5acd",
                slategray: "#708090",
                slategrey: "#708090",
                snow: "#fffafa",
                springgreen: "#00ff7f",
                steelblue: "#4682b4",
                tan: "#d2b48c",
                teal: "#008080",
                thistle: "#d8bfd8",
                tomato: "#ff6347",
                turquoise: "#40e0d0",
                violet: "#ee82ee",
                wheat: "#f5deb3",
                white: "#ffffff",
                whitesmoke: "#f5f5f5",
                yellow: "#ffff00",
                yellowgreen: "#9acd32"
            },
            t6 = s.type;
        f.prototype.name = function() {
            for (var t = X(this._rgb, "rgb"), e = 0, n = Object.keys(t3); e < n.length; e += 1) {
                var r = n[e];
                if (t3[r] === t) return r.toLowerCase()
            }
            return t
        }, u.format.named = function(t) {
            if (t3[t = t.toLowerCase()]) return te(t3[t]);
            throw Error("unknown color name: " + t)
        }, u.autodetect.push({
            p: 5,
            test: function(t) {
                for (var e = [], n = arguments.length - 1; n-- > 0;) e[n] = arguments[n + 1];
                if (!e.length && "string" === t6(t) && t3[t.toLowerCase()]) return "named"
            }
        });
        var t4 = s.unpack,
            t8 = s.type,
            t7 = s.type,
            t9 = function() {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                var n = t4(t, "rgb");
                return (n[0] << 16) + (n[1] << 8) + n[2]
            };
        f.prototype.num = function() {
            return t9(this._rgb)
        }, p.num = function() {
            for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
            return new(Function.prototype.bind.apply(f, [null].concat(t, ["num"])))
        }, u.format.num = function(t) {
            if ("number" == t8(t) && t >= 0 && t <= 16777215) return [t >> 16, t >> 8 & 255, 255 & t, 1];
            throw Error("unknown num color: " + t)
        }, u.autodetect.push({
            p: 5,
            test: function() {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                if (1 === t.length && "number" === t7(t[0]) && t[0] >= 0 && t[0] <= 16777215) return "num"
            }
        });
        var et = s.unpack,
            ee = s.type,
            en = Math.round;
        f.prototype.rgb = function(t) {
            return (void 0 === t && (t = !0), !1 === t) ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(en)
        }, f.prototype.rgba = function(t) {
            return void 0 === t && (t = !0), this._rgb.slice(0, 4).map(function(e, n) {
                return n < 3 ? !1 === t ? e : en(e) : e
            })
        }, p.rgb = function() {
            for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
            return new(Function.prototype.bind.apply(f, [null].concat(t, ["rgb"])))
        }, u.format.rgb = function() {
            for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
            var n = et(t, "rgba");
            return void 0 === n[3] && (n[3] = 1), n
        }, u.autodetect.push({
            p: 3,
            test: function() {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                if ("array" === ee(t = et(t, "rgba")) && (3 === t.length || 4 === t.length && "number" == ee(t[3]) && t[3] >= 0 && t[3] <= 1)) return "rgb"
            }
        });
        var er = Math.log,
            ei = function(t) {
                var e, n, r, i = t / 100;
                return i < 66 ? (e = 255, n = i < 6 ? 0 : -155.25485562709179 - .44596950469579133 * (n = i - 2) + 104.49216199393888 * er(n), r = i < 20 ? 0 : -254.76935184120902 + .8274096064007395 * (r = i - 10) + 115.67994401066147 * er(r)) : (e = 351.97690566805693 + .114206453784165 * (e = i - 55) - 40.25366309332127 * er(e), n = 325.4494125711974 + .07943456536662342 * (n = i - 50) - 28.0852963507957 * er(n), r = 255), [e, n, r, 1]
            },
            ea = s.unpack,
            eo = Math.round,
            es = function() {
                for (var t, e = [], n = arguments.length; n--;) e[n] = arguments[n];
                for (var r = ea(e, "rgb"), i = r[0], a = r[2], o = 1e3, s = 4e4; s - o > .4;) {
                    var u = ei(t = (s + o) * .5);
                    u[2] / u[0] >= a / i ? s = t : o = t
                }
                return eo(t)
            };
        f.prototype.temp = f.prototype.kelvin = f.prototype.temperature = function() {
            return es(this._rgb)
        }, p.temp = p.kelvin = p.temperature = function() {
            for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
            return new(Function.prototype.bind.apply(f, [null].concat(t, ["temp"])))
        }, u.format.temp = u.format.kelvin = u.format.temperature = ei;
        var eu = s.unpack,
            el = Math.cbrt,
            ec = Math.pow,
            ed = Math.sign,
            ef = function() {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                var n = eu(t, "rgb"),
                    r = n[0],
                    i = n[1],
                    a = n[2],
                    o = [ep(r / 255), ep(i / 255), ep(a / 255)],
                    s = o[0],
                    u = o[1],
                    l = o[2],
                    c = el(.4122214708 * s + .5363325363 * u + .0514459929 * l),
                    d = el(.2119034982 * s + .6806995451 * u + .1073969566 * l),
                    f = el(.0883024619 * s + .2817188376 * u + .6299787005 * l);
                return [.2104542553 * c + .793617785 * d - .0040720468 * f, 1.9779984951 * c - 2.428592205 * d + .4505937099 * f, .0259040371 * c + .7827717662 * d - .808675766 * f]
            };

        function ep(t) {
            var e = Math.abs(t);
            return e < .04045 ? t / 12.92 : (ed(t) || 1) * ec((e + .055) / 1.055, 2.4)
        }
        var eh = s.unpack,
            e_ = Math.pow,
            eg = Math.sign,
            em = function() {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                var n = (t = eh(t, "lab"))[0],
                    r = t[1],
                    i = t[2],
                    a = e_(n + .3963377774 * r + .2158037573 * i, 3),
                    o = e_(n - .1055613458 * r - .0638541728 * i, 3),
                    s = e_(n - .0894841775 * r - 1.291485548 * i, 3);
                return [255 * ey(4.0767416621 * a - 3.3077115913 * o + .2309699292 * s), 255 * ey(-1.2684380046 * a + 2.6097574011 * o - .3413193965 * s), 255 * ey(-.0041960863 * a - .7034186147 * o + 1.707614701 * s), t.length > 3 ? t[3] : 1]
            };

        function ey(t) {
            var e = Math.abs(t);
            return e > .0031308 ? (eg(t) || 1) * (1.055 * e_(e, 1 / 2.4) - .055) : 12.92 * t
        }
        var ev = s.unpack,
            eb = s.type;
        f.prototype.oklab = function() {
            return ef(this._rgb)
        }, p.oklab = function() {
            for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
            return new(Function.prototype.bind.apply(f, [null].concat(t, ["oklab"])))
        }, u.format.oklab = em, u.autodetect.push({
            p: 3,
            test: function() {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                if ("array" === eb(t = ev(t, "oklab")) && 3 === t.length) return "oklab"
            }
        });
        var eE = s.unpack,
            eS = s.unpack,
            ew = s.unpack,
            eT = s.type,
            ek = function() {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                var n = eE(t, "rgb"),
                    r = ef(n[0], n[1], n[2]);
                return t$(r[0], r[1], r[2])
            };
        f.prototype.oklch = function() {
            return ek(this._rgb)
        }, p.oklch = function() {
            for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
            return new(Function.prototype.bind.apply(f, [null].concat(t, ["oklch"])))
        }, u.format.oklch = function() {
            for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
            var n = tK((t = eS(t, "lch"))[0], t[1], t[2]),
                r = em(n[0], n[1], n[2]);
            return [r[0], r[1], r[2], t.length > 3 ? t[3] : 1]
        }, u.autodetect.push({
            p: 3,
            test: function() {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                if ("array" === eT(t = ew(t, "oklch")) && 3 === t.length) return "oklch"
            }
        });
        var ex = s.type;
        f.prototype.alpha = function(t, e) {
            if (void 0 === e && (e = !1), void 0 !== t && "number" === ex(t)) return e ? (this._rgb[3] = t, this) : new f([this._rgb[0], this._rgb[1], this._rgb[2], t], "rgb");
            return this._rgb[3]
        };
        f.prototype.clipped = function() {
            return this._rgb._clipped || !1
        };
        f.prototype.darken = function(t) {
            void 0 === t && (t = 1);
            var e = this.lab();
            return e[0] -= tx.Kn * t, new f(e, "lab").alpha(this.alpha(), !0)
        }, f.prototype.brighten = function(t) {
            return void 0 === t && (t = 1), this.darken(-t)
        }, f.prototype.darker = f.prototype.darken, f.prototype.brighter = f.prototype.brighten;
        f.prototype.get = function(t) {
            var e = t.split("."),
                n = e[0],
                r = e[1],
                i = this[n]();
            if (!r) return i;
            var a = n.indexOf(r) - ("ok" === n.substr(0, 2) ? 2 : 0);
            if (a > -1) return i[a];
            throw Error("unknown channel " + r + " in mode " + n)
        };
        var eR = s.type,
            eN = Math.pow;
        f.prototype.luminance = function(t) {
            if (void 0 !== t && "number" === eR(t)) {
                if (0 === t) return new f([0, 0, 0, this._rgb[3]], "rgb");
                if (1 === t) return new f([255, 255, 255, this._rgb[3]], "rgb");
                var e = this.luminance(),
                    n = 20,
                    r = function(e, i) {
                        var a = e.interpolate(i, .5, "rgb"),
                            o = a.luminance();
                        return !(1e-7 > Math.abs(t - o)) && n-- ? o > t ? r(e, a) : r(a, i) : a
                    },
                    i = (e > t ? r(new f([0, 0, 0]), this) : r(this, new f([255, 255, 255]))).rgb();
                return new f(i.concat([this._rgb[3]]))
            }
            return eD.apply(void 0, this._rgb.slice(0, 3))
        };
        var eD = function(t, e, n) {
                return t = eI(t), e = eI(e), .2126 * t + .7152 * e + .0722 * (n = eI(n))
            },
            eI = function(t) {
                return (t /= 255) <= .03928 ? t / 12.92 : eN((t + .055) / 1.055, 2.4)
            },
            eO = {},
            eC = s.type,
            eA = function(t, e, n) {
                void 0 === n && (n = .5);
                for (var r = [], i = arguments.length - 3; i-- > 0;) r[i] = arguments[i + 3];
                var a = r[0] || "lrgb";
                if (!eO[a] && !r.length && (a = Object.keys(eO)[0]), !eO[a]) throw Error("interpolation mode " + a + " is not defined");
                return "object" !== eC(t) && (t = new f(t)), "object" !== eC(e) && (e = new f(e)), eO[a](t, e, n).alpha(t.alpha() + n * (e.alpha() - t.alpha()))
            };
        f.prototype.mix = f.prototype.interpolate = function(t, e) {
            void 0 === e && (e = .5);
            for (var n = [], r = arguments.length - 2; r-- > 0;) n[r] = arguments[r + 2];
            return eA.apply(void 0, [this, t, e].concat(n))
        };
        f.prototype.premultiply = function(t) {
            void 0 === t && (t = !1);
            var e = this._rgb,
                n = e[3];
            return t ? (this._rgb = [e[0] * n, e[1] * n, e[2] * n, n], this) : new f([e[0] * n, e[1] * n, e[2] * n, n], "rgb")
        };
        f.prototype.saturate = function(t) {
            void 0 === t && (t = 1);
            var e = this.lch();
            return e[1] += tx.Kn * t, e[1] < 0 && (e[1] = 0), new f(e, "lch").alpha(this.alpha(), !0)
        }, f.prototype.desaturate = function(t) {
            return void 0 === t && (t = 1), this.saturate(-t)
        };
        var eB = s.type;
        f.prototype.set = function(t, e, n) {
            void 0 === n && (n = !1);
            var r = t.split("."),
                i = r[0],
                a = r[1],
                o = this[i]();
            if (!a) return o;
            var s = i.indexOf(a) - ("ok" === i.substr(0, 2) ? 2 : 0);
            if (s > -1) {
                if ("string" == eB(e)) switch (e.charAt(0)) {
                        case "+":
                        case "-":
                            o[s] += +e;
                            break;
                        case "*":
                            o[s] *= +e.substr(1);
                            break;
                        case "/":
                            o[s] /= +e.substr(1);
                            break;
                        default:
                            o[s] = +e
                    } else if ("number" === eB(e)) o[s] = e;
                    else throw Error("unsupported value for Color.set");
                var u = new f(o, i);
                return n ? (this._rgb = u._rgb, this) : u
            }
            throw Error("unknown channel " + a + " in mode " + i)
        };
        eO.rgb = function(t, e, n) {
            var r = t._rgb,
                i = e._rgb;
            return new f(r[0] + n * (i[0] - r[0]), r[1] + n * (i[1] - r[1]), r[2] + n * (i[2] - r[2]), "rgb")
        };
        var eU = Math.sqrt,
            eM = Math.pow;
        eO.lrgb = function(t, e, n) {
            var r = t._rgb,
                i = r[0],
                a = r[1],
                o = r[2],
                s = e._rgb,
                u = s[0],
                l = s[1],
                c = s[2];
            return new f(eU(eM(i, 2) * (1 - n) + eM(u, 2) * n), eU(eM(a, 2) * (1 - n) + eM(l, 2) * n), eU(eM(o, 2) * (1 - n) + eM(c, 2) * n), "rgb")
        };
        eO.lab = function(t, e, n) {
            var r = t.lab(),
                i = e.lab();
            return new f(r[0] + n * (i[0] - r[0]), r[1] + n * (i[1] - r[1]), r[2] + n * (i[2] - r[2]), "lab")
        };
        var eL = function(t, e, n, r) {
                var i, a, o, s, u, l, c, d, p, h, _, g, m, y;
                return "hsl" === r ? (o = t.hsl(), s = e.hsl()) : "hsv" === r ? (o = t.hsv(), s = e.hsv()) : "hcg" === r ? (o = t.hcg(), s = e.hcg()) : "hsi" === r ? (o = t.hsi(), s = e.hsi()) : "lch" === r || "hcl" === r ? (r = "hcl", o = t.hcl(), s = e.hcl()) : "oklch" === r && (o = t.oklch().reverse(), s = e.oklch().reverse()), ("h" === r.substr(0, 1) || "oklch" === r) && (u = (i = o)[0], c = i[1], p = i[2], l = (a = s)[0], d = a[1], h = a[2]), isNaN(u) || isNaN(l) ? isNaN(u) ? isNaN(l) ? g = Number.NaN : (g = l, (1 == p || 0 == p) && "hsv" != r && (_ = d)) : (g = u, (1 == h || 0 == h) && "hsv" != r && (_ = c)) : (y = l > u && l - u > 180 ? l - (u + 360) : l < u && u - l > 180 ? l + 360 - u : l - u, g = u + n * y), void 0 === _ && (_ = c + n * (d - c)), m = p + n * (h - p), "oklch" === r ? new f([m, _, g], r) : new f([g, _, m], r)
            },
            eP = function(t, e, n) {
                return eL(t, e, n, "lch")
            };
        eO.lch = eP, eO.hcl = eP;
        eO.num = function(t, e, n) {
            var r = t.num();
            return new f(r + n * (e.num() - r), "num")
        };
        eO.hcg = function(t, e, n) {
            return eL(t, e, n, "hcg")
        };
        eO.hsi = function(t, e, n) {
            return eL(t, e, n, "hsi")
        };
        eO.hsl = function(t, e, n) {
            return eL(t, e, n, "hsl")
        };
        eO.hsv = function(t, e, n) {
            return eL(t, e, n, "hsv")
        };
        eO.oklab = function(t, e, n) {
            var r = t.oklab(),
                i = e.oklab();
            return new f(r[0] + n * (i[0] - r[0]), r[1] + n * (i[1] - r[1]), r[2] + n * (i[2] - r[2]), "oklab")
        };
        eO.oklch = function(t, e, n) {
            return eL(t, e, n, "oklch")
        };
        var eG = s.clip_rgb,
            eF = Math.pow,
            eY = Math.sqrt,
            ez = Math.PI,
            ej = Math.cos,
            eH = Math.sin,
            e$ = Math.atan2,
            eW = function(t, e) {
                for (var n = t.length, r = [0, 0, 0, 0], i = 0; i < t.length; i++) {
                    var a = t[i],
                        o = e[i] / n,
                        s = a._rgb;
                    r[0] += eF(s[0], 2) * o, r[1] += eF(s[1], 2) * o, r[2] += eF(s[2], 2) * o, r[3] += s[3] * o
                }
                return r[0] = eY(r[0]), r[1] = eY(r[1]), r[2] = eY(r[2]), r[3] > .9999999 && (r[3] = 1), new f(eG(r))
            },
            eq = s.type,
            eZ = Math.pow,
            eV = function(t) {
                var e = "rgb",
                    n = p("#ccc"),
                    r = 0,
                    i = [0, 1],
                    a = [],
                    o = [0, 0],
                    s = !1,
                    u = [],
                    l = !1,
                    c = 0,
                    d = 1,
                    f = !1,
                    h = {},
                    _ = !0,
                    g = 1,
                    m = function(t) {
                        if (t = t || ["#fff", "#000"], "string" === eq(t) && p.brewer && p.brewer[t.toLowerCase()] && (t = p.brewer[t.toLowerCase()]), "array" === eq(t)) {
                            1 === t.length && (t = [t[0], t[0]]), t = t.slice(0);
                            for (var e = 0; e < t.length; e++) t[e] = p(t[e]);
                            a.length = 0;
                            for (var n = 0; n < t.length; n++) a.push(n / (t.length - 1))
                        }
                        return S(), u = t
                    },
                    y = function(t) {
                        if (null != s) {
                            for (var e = s.length - 1, n = 0; n < e && t >= s[n];) n++;
                            return n - 1
                        }
                        return 0
                    },
                    v = function(t) {
                        return t
                    },
                    b = function(t) {
                        return t
                    },
                    E = function(t, r) {
                        if (null == r && (r = !1), isNaN(t) || null === t) return n;
                        if (r) l = t;
                        else if (s && s.length > 2) {
                            var i, l;
                            l = y(t) / (s.length - 2)
                        } else l = d !== c ? (t - c) / (d - c) : 1;
                        l = b(l), !r && (l = v(l)), 1 !== g && (l = eZ(l, g));
                        var f = Math.floor(1e4 * (l = Math.min(1, Math.max(0, l = o[0] + l * (1 - o[0] - o[1])))));
                        if (_ && h[f]) i = h[f];
                        else {
                            if ("array" === eq(u))
                                for (var m = 0; m < a.length; m++) {
                                    var E = a[m];
                                    if (l <= E || l >= E && m === a.length - 1) {
                                        i = u[m];
                                        break
                                    }
                                    if (l > E && l < a[m + 1]) {
                                        l = (l - E) / (a[m + 1] - E), i = p.interpolate(u[m], u[m + 1], l, e);
                                        break
                                    }
                                } else "function" === eq(u) && (i = u(l));
                            _ && (h[f] = i)
                        }
                        return i
                    },
                    S = function() {
                        return h = {}
                    };
                m(t);
                var w = function(t) {
                    var e = p(E(t));
                    return l && e[l] ? e[l]() : e
                };
                return w.classes = function(t) {
                    if (null != t) {
                        if ("array" === eq(t)) s = t, i = [t[0], t[t.length - 1]];
                        else {
                            var e = p.analyze(i);
                            s = 0 === t ? [e.min, e.max] : p.limits(e, "e", t)
                        }
                        return w
                    }
                    return s
                }, w.domain = function(t) {
                    if (!arguments.length) return i;
                    c = t[0], d = t[t.length - 1], a = [];
                    var e = u.length;
                    if (t.length === e && c !== d)
                        for (var n = 0, r = Array.from(t); n < r.length; n += 1) {
                            var o = r[n];
                            a.push((o - c) / (d - c))
                        } else {
                            for (var s = 0; s < e; s++) a.push(s / (e - 1));
                            if (t.length > 2) {
                                var l = t.map(function(e, n) {
                                        return n / (t.length - 1)
                                    }),
                                    f = t.map(function(t) {
                                        return (t - c) / (d - c)
                                    });
                                !f.every(function(t, e) {
                                    return l[e] === t
                                }) && (b = function(t) {
                                    if (t <= 0 || t >= 1) return t;
                                    for (var e = 0; t >= f[e + 1];) e++;
                                    var n = (t - f[e]) / (f[e + 1] - f[e]);
                                    return l[e] + n * (l[e + 1] - l[e])
                                })
                            }
                        }
                    return i = [c, d], w
                }, w.mode = function(t) {
                    return arguments.length ? (e = t, S(), w) : e
                }, w.range = function(t, e) {
                    return m(t), w
                }, w.out = function(t) {
                    return l = t, w
                }, w.spread = function(t) {
                    return arguments.length ? (r = t, w) : r
                }, w.correctLightness = function(t) {
                    return null == t && (t = !0), f = t, S(), v = f ? function(t) {
                        for (var e = E(0, !0).lab()[0], n = E(1, !0).lab()[0], r = e > n, i = E(t, !0).lab()[0], a = e + (n - e) * t, o = i - a, s = 0, u = 1, l = 20; Math.abs(o) > .01 && l-- > 0;) r && (o *= -1), o < 0 ? (s = t, t += (u - t) * .5) : (u = t, t += (s - t) * .5), o = (i = E(t, !0).lab()[0]) - a;
                        return t
                    } : function(t) {
                        return t
                    }, w
                }, w.padding = function(t) {
                    return null != t ? ("number" === eq(t) && (t = [t, t]), o = t, w) : o
                }, w.colors = function(e, n) {
                    arguments.length < 2 && (n = "hex");
                    var r = [];
                    if (0 == arguments.length) r = u.slice(0);
                    else if (1 === e) r = [w(.5)];
                    else if (e > 1) {
                        var a = i[0],
                            o = i[1] - a;
                        r = (function(t, e, n) {
                            for (var r = [], i = t < e, a = n ? i ? e + 1 : e - 1 : e, o = t; i ? o < a : o > a; i ? o++ : o--) r.push(o);
                            return r
                        })(0, e, !1).map(function(t) {
                            return w(a + t / (e - 1) * o)
                        })
                    } else {
                        t = [];
                        var l = [];
                        if (s && s.length > 2)
                            for (var c = 1, d = s.length, f = 1 <= d; f ? c < d : c > d; f ? c++ : c--) l.push((s[c - 1] + s[c]) * .5);
                        else l = i;
                        r = l.map(function(t) {
                            return w(t)
                        })
                    }
                    return p[n] && (r = r.map(function(t) {
                        return t[n]()
                    })), r
                }, w.cache = function(t) {
                    return null != t ? (_ = t, w) : _
                }, w.gamma = function(t) {
                    return null != t ? (g = t, w) : g
                }, w.nodata = function(t) {
                    return null != t ? (n = p(t), w) : n
                }, w
            },
            eJ = function(t) {
                for (var e = [1, 1], n = 1; n < t; n++) {
                    for (var r = [1], i = 1; i <= e.length; i++) r[i] = (e[i] || 0) + e[i - 1];
                    e = r
                }
                return e
            },
            eK = function(t) {
                var e, n, r, i, a, o, s, u, l, c, d;
                if (2 === (t = t.map(function(t) {
                        return new f(t)
                    })).length) a = (e = t.map(function(t) {
                    return t.lab()
                }))[0], o = e[1], i = function(t) {
                    return new f([0, 1, 2].map(function(e) {
                        return a[e] + t * (o[e] - a[e])
                    }), "lab")
                };
                else if (3 === t.length) a = (n = t.map(function(t) {
                    return t.lab()
                }))[0], o = n[1], s = n[2], i = function(t) {
                    return new f([0, 1, 2].map(function(e) {
                        return (1 - t) * (1 - t) * a[e] + 2 * (1 - t) * t * o[e] + t * t * s[e]
                    }), "lab")
                };
                else if (4 === t.length) a = (r = t.map(function(t) {
                    return t.lab()
                }))[0], o = r[1], s = r[2], u = r[3], i = function(t) {
                    return new f([0, 1, 2].map(function(e) {
                        return (1 - t) * (1 - t) * (1 - t) * a[e] + 3 * (1 - t) * (1 - t) * t * o[e] + 3 * (1 - t) * t * t * s[e] + t * t * t * u[e]
                    }), "lab")
                };
                else if (t.length >= 5) l = t.map(function(t) {
                    return t.lab()
                }), c = eJ(d = t.length - 1), i = function(t) {
                    var e = 1 - t;
                    return new f([0, 1, 2].map(function(n) {
                        return l.reduce(function(r, i, a) {
                            return r + c[a] * Math.pow(e, d - a) * Math.pow(t, a) * i[n]
                        }, 0)
                    }), "lab")
                };
                else throw RangeError("No point in running bezier with only one color.");
                return i
            },
            eX = function(t, e, n) {
                if (!eX[n]) throw Error("unknown blend mode " + n);
                return eX[n](t, e)
            },
            eQ = function(t) {
                return function(e, n) {
                    var r = p(n).rgb(),
                        i = p(e).rgb();
                    return p.rgb(t(r, i))
                }
            },
            e0 = function(t) {
                return function(e, n) {
                    var r = [];
                    return r[0] = t(e[0], n[0]), r[1] = t(e[1], n[1]), r[2] = t(e[2], n[2]), r
                }
            };
        eX.normal = eQ(e0(function(t) {
            return t
        })), eX.multiply = eQ(e0(function(t, e) {
            return t * e / 255
        })), eX.screen = eQ(e0(function(t, e) {
            return 255 * (1 - (1 - t / 255) * (1 - e / 255))
        })), eX.overlay = eQ(e0(function(t, e) {
            return e < 128 ? 2 * t * e / 255 : 255 * (1 - 2 * (1 - t / 255) * (1 - e / 255))
        })), eX.darken = eQ(e0(function(t, e) {
            return t > e ? e : t
        })), eX.lighten = eQ(e0(function(t, e) {
            return t > e ? t : e
        })), eX.dodge = eQ(e0(function(t, e) {
            return 255 === t ? 255 : (t = e / 255 * 255 / (1 - t / 255)) > 255 ? 255 : t
        })), eX.burn = eQ(e0(function(t, e) {
            return 255 * (1 - (1 - e / 255) / (t / 255))
        }));
        for (var e1 = s.type, e2 = s.clip_rgb, e5 = s.TWOPI, e3 = Math.pow, e6 = Math.sin, e4 = Math.cos, e8 = Math.floor, e7 = Math.random, e9 = Math.log, nt = Math.pow, ne = Math.floor, nn = Math.abs, nr = function(t, e) {
                void 0 === e && (e = null);
                var n = {
                    min: Number.MAX_VALUE,
                    max: -1 * Number.MAX_VALUE,
                    sum: 0,
                    values: [],
                    count: 0
                };
                return "object" === a(t) && (t = Object.values(t)), t.forEach(function(t) {
                    e && "object" === a(t) && (t = t[e]), null != t && !isNaN(t) && (n.values.push(t), n.sum += t, t < n.min && (n.min = t), t > n.max && (n.max = t), n.count += 1)
                }), n.domain = [n.min, n.max], n.limits = function(t, e) {
                    return ni(n, t, e)
                }, n
            }, ni = function(t, e, n) {
                void 0 === e && (e = "equal"), void 0 === n && (n = 7), "array" == a(t) && (t = nr(t));
                var r = t.min,
                    i = t.max,
                    o = t.values.sort(function(t, e) {
                        return t - e
                    });
                if (1 === n) return [r, i];
                var s = [];
                if ("c" === e.substr(0, 1) && (s.push(r), s.push(i)), "e" === e.substr(0, 1)) {
                    s.push(r);
                    for (var u = 1; u < n; u++) s.push(r + u / n * (i - r));
                    s.push(i)
                } else if ("l" === e.substr(0, 1)) {
                    if (r <= 0) throw Error("Logarithmic scales are only possible for values > 0");
                    var l = Math.LOG10E * e9(r),
                        c = Math.LOG10E * e9(i);
                    s.push(r);
                    for (var d = 1; d < n; d++) s.push(nt(10, l + d / n * (c - l)));
                    s.push(i)
                } else if ("q" === e.substr(0, 1)) {
                    s.push(r);
                    for (var f = 1; f < n; f++) {
                        var p = (o.length - 1) * f / n,
                            h = ne(p);
                        if (h === p) s.push(o[h]);
                        else {
                            var _ = p - h;
                            s.push(o[h] * (1 - _) + o[h + 1] * _)
                        }
                    }
                    s.push(i)
                } else if ("k" === e.substr(0, 1)) {
                    var g, m = o.length,
                        y = Array(m),
                        v = Array(n),
                        b = !0,
                        E = 0,
                        S = null;
                    (S = []).push(r);
                    for (var w = 1; w < n; w++) S.push(r + w / n * (i - r));
                    for (S.push(i); b;) {
                        for (var T = 0; T < n; T++) v[T] = 0;
                        for (var k = 0; k < m; k++) {
                            for (var x = o[k], R = Number.MAX_VALUE, N = void 0, D = 0; D < n; D++) {
                                var I = nn(S[D] - x);
                                I < R && (R = I, N = D), v[N]++, y[k] = N
                            }
                        }
                        for (var O = Array(n), C = 0; C < n; C++) O[C] = null;
                        for (var A = 0; A < m; A++) null === O[g = y[A]] ? O[g] = o[A] : O[g] += o[A];
                        for (var B = 0; B < n; B++) O[B] *= 1 / v[B];
                        b = !1;
                        for (var U = 0; U < n; U++)
                            if (O[U] !== S[U]) {
                                b = !0;
                                break
                            } S = O, ++E > 200 && (b = !1)
                    }
                    for (var M = {}, L = 0; L < n; L++) M[L] = [];
                    for (var P = 0; P < m; P++) M[g = y[P]].push(o[P]);
                    for (var G = [], F = 0; F < n; F++) G.push(M[F][0]), G.push(M[F][M[F].length - 1]);
                    G = G.sort(function(t, e) {
                        return t - e
                    }), s.push(G[0]);
                    for (var Y = 1; Y < G.length; Y += 2) {
                        var z = G[Y];
                        !isNaN(z) && -1 === s.indexOf(z) && s.push(z)
                    }
                }
                return s
            }, na = {
                analyze: nr,
                limits: ni
            }, no = Math.sqrt, ns = Math.pow, nu = Math.min, nl = Math.max, nc = Math.atan2, nd = Math.abs, nf = Math.cos, np = Math.sin, nh = Math.exp, n_ = Math.PI, ng = {
                OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"],
                PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"],
                BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"],
                Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"],
                BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"],
                YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"],
                YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"],
                Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"],
                RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"],
                Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"],
                YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"],
                Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"],
                GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"],
                Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"],
                YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"],
                PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"],
                Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"],
                PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"],
                Viridis: ["#440154", "#482777", "#3f4a8a", "#31678e", "#26838f", "#1f9d8a", "#6cce5a", "#b6de2b", "#fee825"],
                Spectral: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"],
                RdYlGn: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"],
                RdBu: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"],
                PiYG: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"],
                PRGn: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"],
                RdYlBu: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"],
                BrBG: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"],
                RdGy: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"],
                PuOr: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"],
                Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"],
                Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"],
                Set1: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"],
                Set3: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"],
                Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"],
                Paired: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"],
                Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"],
                Pastel1: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"]
            }, nm = 0, ny = Object.keys(ng); nm < ny.length; nm += 1) {
            var nv = ny[nm];
            ng[nv.toLowerCase()] = ng[nv]
        }
        return p.average = function(t, e, n) {
            void 0 === e && (e = "lrgb"), void 0 === n && (n = null);
            var r = t.length;
            !n && (n = Array.from(Array(r)).map(function() {
                return 1
            }));
            var i = r / n.reduce(function(t, e) {
                return t + e
            });
            if (n.forEach(function(t, e) {
                    n[e] *= i
                }), t = t.map(function(t) {
                    return new f(t)
                }), "lrgb" === e) return eW(t, n);
            for (var a = t.shift(), o = a.get(e), s = [], u = 0, l = 0, c = 0; c < o.length; c++)
                if (o[c] = (o[c] || 0) * n[0], s.push(isNaN(o[c]) ? 0 : n[0]), "h" === e.charAt(c) && !isNaN(o[c])) {
                    var d = o[c] / 180 * ez;
                    u += ej(d) * n[0], l += eH(d) * n[0]
                } var p = a.alpha() * n[0];
            t.forEach(function(t, r) {
                var i = t.get(e);
                p += t.alpha() * n[r + 1];
                for (var a = 0; a < o.length; a++)
                    if (!isNaN(i[a])) {
                        if (s[a] += n[r + 1], "h" === e.charAt(a)) {
                            var c = i[a] / 180 * ez;
                            u += ej(c) * n[r + 1], l += eH(c) * n[r + 1]
                        } else o[a] += i[a] * n[r + 1]
                    }
            });
            for (var h = 0; h < o.length; h++)
                if ("h" === e.charAt(h)) {
                    for (var _ = e$(l / s[h], u / s[h]) / ez * 180; _ < 0;) _ += 360;
                    for (; _ >= 360;) _ -= 360;
                    o[h] = _
                } else o[h] = o[h] / s[h];
            return p /= r, new f(o, e).alpha(p > .99999 ? 1 : p, !0)
        }, p.bezier = function(t) {
            var e = eK(t);
            return e.scale = function() {
                return eV(e)
            }, e
        }, p.blend = eX, p.cubehelix = function(t, e, n, r, i) {
            void 0 === t && (t = 300), void 0 === e && (e = -1.5), void 0 === n && (n = 1), void 0 === r && (r = 1), void 0 === i && (i = [0, 1]);
            var a, o = 0;
            "array" === e1(i) ? a = i[1] - i[0] : (a = 0, i = [i, i]);
            var s = function(s) {
                var u = e5 * ((t + 120) / 360 + e * s),
                    l = e3(i[0] + a * s, r),
                    c = (0 !== o ? n[0] + s * o : n) * l * (1 - l) / 2,
                    d = e4(u),
                    f = e6(u);
                return p(e2([255 * (l + c * (-.14861 * d + 1.78277 * f)), 255 * (l + c * (-.29227 * d - .90649 * f)), 255 * (l + 1.97294 * d * c), 1]))
            };
            return s.start = function(e) {
                return null == e ? t : (t = e, s)
            }, s.rotations = function(t) {
                return null == t ? e : (e = t, s)
            }, s.gamma = function(t) {
                return null == t ? r : (r = t, s)
            }, s.hue = function(t) {
                return null == t ? n : ("array" === e1(n = t) ? 0 == (o = n[1] - n[0]) && (n = n[1]) : o = 0, s)
            }, s.lightness = function(t) {
                return null == t ? i : ("array" === e1(t) ? (i = t, a = t[1] - t[0]) : (i = [t, t], a = 0), s)
            }, s.scale = function() {
                return p.scale(s)
            }, s.hue(n), s
        }, p.mix = p.interpolate = eA, p.random = function() {
            for (var t = "#", e = 0; e < 6; e++) t += "0123456789abcdef".charAt(e8(16 * e7()));
            return new f(t, "hex")
        }, p.scale = eV, p.analyze = na.analyze, p.contrast = function(t, e) {
            t = new f(t), e = new f(e);
            var n = t.luminance(),
                r = e.luminance();
            return n > r ? (n + .05) / (r + .05) : (r + .05) / (n + .05)
        }, p.deltaE = function(t, e, n, r, i) {
            void 0 === n && (n = 1), void 0 === r && (r = 1), void 0 === i && (i = 1);
            var a = function(t) {
                    return 360 * t / (2 * n_)
                },
                o = function(t) {
                    return 2 * n_ * t / 360
                };
            t = new f(t), e = new f(e);
            var s = Array.from(t.lab()),
                u = s[0],
                l = s[1],
                c = s[2],
                d = Array.from(e.lab()),
                p = d[0],
                h = d[1],
                _ = d[2],
                g = (u + p) / 2,
                m = (no(ns(l, 2) + ns(c, 2)) + no(ns(h, 2) + ns(_, 2))) / 2,
                y = .5 * (1 - no(ns(m, 7) / (ns(m, 7) + ns(25, 7)))),
                v = l * (1 + y),
                b = h * (1 + y),
                E = no(ns(v, 2) + ns(c, 2)),
                S = no(ns(b, 2) + ns(_, 2)),
                w = (E + S) / 2,
                T = a(nc(c, v)),
                k = a(nc(_, b)),
                x = T >= 0 ? T : T + 360,
                R = k >= 0 ? k : k + 360,
                N = nd(x - R) > 180 ? (x + R + 360) / 2 : (x + R) / 2,
                D = 1 - .17 * nf(o(N - 30)) + .24 * nf(o(2 * N)) + .32 * nf(o(3 * N + 6)) - .2 * nf(o(4 * N - 63)),
                I = R - x;
            I = 180 >= nd(I) ? I : R <= x ? I + 360 : I - 360, I = 2 * no(E * S) * np(o(I) / 2);
            var O = S - E,
                C = 1 + .015 * ns(g - 50, 2) / no(20 + ns(g - 50, 2)),
                A = 1 + .045 * w,
                B = 1 + .015 * w * D,
                U = 30 * nh(-ns((N - 275) / 25, 2)),
                M = -(2 * no(ns(w, 7) / (ns(w, 7) + ns(25, 7)))) * np(2 * o(U));
            return nl(0, nu(100, no(ns((p - u) / (n * C), 2) + ns(O / (r * A), 2) + ns(I / (i * B), 2) + O / (r * A) * M * (I / (i * B)))))
        }, p.distance = function(t, e, n) {
            void 0 === n && (n = "lab"), t = new f(t), e = new f(e);
            var r = t.get(n),
                i = e.get(n),
                a = 0;
            for (var o in r) {
                var s = (r[o] || 0) - (i[o] || 0);
                a += s * s
            }
            return Math.sqrt(a)
        }, p.limits = na.limits, p.valid = function() {
            for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
            try {
                return new(Function.prototype.bind.apply(f, [null].concat(t))), !0
            } catch (t) {
                return !1
            }
        }, p.scales = {
            cool: function() {
                return eV([p.hsl(180, 1, .9), p.hsl(250, .7, .4)])
            },
            hot: function() {
                return eV(["#000", "#f00", "#ff0", "#fff"]).mode("rgb")
            }
        }, p.colors = t3, p.brewer = ng, p
    }, "object" == typeof e ? t.exports = r() : "function" == typeof define && define.amd ? define(r) : (n = "undefined" != typeof globalThis ? globalThis : n || self).chroma = r()
}