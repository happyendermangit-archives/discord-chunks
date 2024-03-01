function(t, r, n) {
    var e, i;
    t = n.nmd(t), n("854508"), n("70102"), n("424973"), n("808653"), n("222007"), e = this, i = function() {
        "use strict";
        for (var t = function(t, r, n) {
                return void 0 === r && (r = 0), void 0 === n && (n = 1), t < r ? r : t > n ? n : t
            }, r = {}, n = 0, e = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Undefined", "Null"]; n < e.length; n += 1) {
            var i = e[n];
            r["[object " + i + "]"] = i.toLowerCase()
        }
        var o = function(t) {
                return r[Object.prototype.toString.call(t)] || "object"
            },
            u = Math.PI,
            a = {
                clip_rgb: function(r) {
                    r._clipped = !1, r._unclipped = r.slice(0);
                    for (var n = 0; n <= 3; n++) n < 3 ? ((r[n] < 0 || r[n] > 255) && (r._clipped = !0), r[n] = t(r[n], 0, 255)) : 3 === n && (r[n] = t(r[n], 0, 1));
                    return r
                },
                limit: t,
                type: o,
                unpack: function(t, r) {
                    return (void 0 === r && (r = null), t.length >= 3) ? Array.prototype.slice.call(t) : "object" == o(t[0]) && r ? r.split("").filter(function(r) {
                        return void 0 !== t[0][r]
                    }).map(function(r) {
                        return t[0][r]
                    }) : t[0]
                },
                last: function(t) {
                    if (t.length < 2) return null;
                    var r = t.length - 1;
                    return "string" == o(t[r]) ? t[r].toLowerCase() : null
                },
                TWOPI: 2 * u,
                PITHIRD: u / 3,
                DEG2RAD: u / 180,
                RAD2DEG: 180 / u
            },
            f = {
                format: {},
                autodetect: []
            },
            c = a.last,
            s = a.clip_rgb,
            l = a.type,
            h = function() {
                for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
                if ("object" === l(t[0]) && t[0].constructor && t[0].constructor === this.constructor) return t[0];
                var n = c(t),
                    e = !1;
                if (!n) {
                    e = !0, !f.sorted && (f.autodetect = f.autodetect.sort(function(t, r) {
                        return r.p - t.p
                    }), f.sorted = !0);
                    for (var i = 0, o = f.autodetect; i < o.length; i += 1) {
                        var u = o[i];
                        if (n = u.test.apply(u, t)) break
                    }
                }
                if (f.format[n]) {
                    var a = f.format[n].apply(null, e ? t : t.slice(0, -1));
                    this._rgb = s(a)
                } else throw Error("unknown format: " + t);
                3 === this._rgb.length && this._rgb.push(1)
            };
        h.prototype.toString = function() {
            return "function" == l(this.hex) ? this.hex() : "[" + this._rgb.join(",") + "]"
        };
        var p = function() {
            for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
            return new(Function.prototype.bind.apply(p.Color, [null].concat(t)))
        };
        p.Color = h, p.version = "2.4.2";
        var v = a.unpack,
            g = Math.max,
            d = a.unpack,
            y = a.unpack,
            b = a.type,
            m = function() {
                for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
                var n = v(t, "rgb"),
                    e = n[0],
                    i = n[1],
                    o = n[2],
                    u = 1 - g(e /= 255, g(i /= 255, o /= 255)),
                    a = u < 1 ? 1 / (1 - u) : 0;
                return [(1 - e - u) * a, (1 - i - u) * a, (1 - o - u) * a, u]
            };
        h.prototype.cmyk = function() {
            return m(this._rgb)
        }, p.cmyk = function() {
            for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
            return new(Function.prototype.bind.apply(h, [null].concat(t, ["cmyk"])))
        }, f.format.cmyk = function() {
            for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
            var n = (t = d(t, "cmyk"))[0],
                e = t[1],
                i = t[2],
                o = t[3],
                u = t.length > 4 ? t[4] : 1;
            return 1 === o ? [0, 0, 0, u] : [n >= 1 ? 0 : 255 * (1 - n) * (1 - o), e >= 1 ? 0 : 255 * (1 - e) * (1 - o), i >= 1 ? 0 : 255 * (1 - i) * (1 - o), u]
        }, f.autodetect.push({
            p: 2,
            test: function() {
                for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
                if ("array" === b(t = y(t, "cmyk")) && 4 === t.length) return "cmyk"
            }
        });
        var _ = a.unpack,
            w = a.last,
            k = function(t) {
                return Math.round(100 * t) / 100
            },
            E = a.unpack,
            R = function() {
                for (var t, r, n = [], e = arguments.length; e--;) n[e] = arguments[e];
                var i = (n = E(n, "rgba"))[0],
                    o = n[1],
                    u = n[2],
                    a = Math.min(i /= 255, o /= 255, u /= 255),
                    f = Math.max(i, o, u),
                    c = (f + a) / 2;
                return (f === a ? (t = 0, r = Number.NaN) : t = c < .5 ? (f - a) / (f + a) : (f - a) / (2 - f - a), i == f ? r = (o - u) / (f - a) : o == f ? r = 2 + (u - i) / (f - a) : u == f && (r = 4 + (i - o) / (f - a)), (r *= 60) < 0 && (r += 360), n.length > 3 && void 0 !== n[3]) ? [r, t, c, n[3]] : [r, t, c]
            },
            x = a.unpack,
            A = a.last,
            S = function() {
                for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
                var n = _(t, "hsla"),
                    e = w(t) || "lsa";
                return n[0] = k(n[0] || 0), n[1] = k(100 * n[1]) + "%", n[2] = k(100 * n[2]) + "%", "hsla" === e || n.length > 3 && n[3] < 1 ? (n[3] = n.length > 3 ? n[3] : 1, e = "hsla") : n.length = 3, e + "(" + n.join(",") + ")"
            },
            M = Math.round,
            I = a.unpack,
            O = Math.round,
            N = function() {
                for (var t, r, n, e, i = [], o = arguments.length; o--;) i[o] = arguments[o];
                var u = (i = I(i, "hsl"))[0],
                    a = i[1],
                    f = i[2];
                if (0 === a) r = n = e = 255 * f;
                else {
                    var c = [0, 0, 0],
                        s = [0, 0, 0],
                        l = f < .5 ? f * (1 + a) : f + a - f * a,
                        h = 2 * f - l,
                        p = u / 360;
                    c[0] = p + 1 / 3, c[1] = p, c[2] = p - 1 / 3;
                    for (var v = 0; v < 3; v++) c[v] < 0 && (c[v] += 1), c[v] > 1 && (c[v] -= 1), 6 * c[v] < 1 ? s[v] = h + (l - h) * 6 * c[v] : 2 * c[v] < 1 ? s[v] = l : 3 * c[v] < 2 ? s[v] = h + (l - h) * (2 / 3 - c[v]) * 6 : s[v] = h;
                    r = (t = [O(255 * s[0]), O(255 * s[1]), O(255 * s[2])])[0], n = t[1], e = t[2]
                }
                return i.length > 3 ? [r, n, e, i[3]] : [r, n, e, 1]
            },
            L = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,
            j = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,
            P = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
            U = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
            q = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
            B = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
            C = Math.round,
            T = function(t) {
                if (t = t.toLowerCase().trim(), f.format.named) try {
                    return f.format.named(t)
                } catch (t) {}
                if (r = t.match(L)) {
                    for (var r, n = r.slice(1, 4), e = 0; e < 3; e++) n[e] = +n[e];
                    return n[3] = 1, n
                }
                if (r = t.match(j)) {
                    for (var i = r.slice(1, 5), o = 0; o < 4; o++) i[o] = +i[o];
                    return i
                }
                if (r = t.match(P)) {
                    for (var u = r.slice(1, 4), a = 0; a < 3; a++) u[a] = C(2.55 * u[a]);
                    return u[3] = 1, u
                }
                if (r = t.match(U)) {
                    for (var c = r.slice(1, 5), s = 0; s < 3; s++) c[s] = C(2.55 * c[s]);
                    return c[3] = +c[3], c
                }
                if (r = t.match(q)) {
                    var l = r.slice(1, 4);
                    l[1] *= .01, l[2] *= .01;
                    var h = N(l);
                    return h[3] = 1, h
                }
                if (r = t.match(B)) {
                    var p = r.slice(1, 4);
                    p[1] *= .01, p[2] *= .01;
                    var v = N(p);
                    return v[3] = +r[4], v
                }
            };
        T.test = function(t) {
            return L.test(t) || j.test(t) || P.test(t) || U.test(t) || q.test(t) || B.test(t)
        };
        var z = a.type,
            D = function() {
                for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
                var n = x(t, "rgba"),
                    e = A(t) || "rgb";
                return "hsl" == e.substr(0, 3) ? S(R(n), e) : (n[0] = M(n[0]), n[1] = M(n[1]), n[2] = M(n[2]), ("rgba" === e || n.length > 3 && n[3] < 1) && (n[3] = n.length > 3 ? n[3] : 1, e = "rgba"), e + "(" + n.slice(0, "rgb" === e ? 3 : 4).join(",") + ")")
            };
        h.prototype.css = function(t) {
            return D(this._rgb, t)
        }, p.css = function() {
            for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
            return new(Function.prototype.bind.apply(h, [null].concat(t, ["css"])))
        }, f.format.css = T, f.autodetect.push({
            p: 5,
            test: function(t) {
                for (var r = [], n = arguments.length - 1; n-- > 0;) r[n] = arguments[n + 1];
                if (!r.length && "string" === z(t) && T.test(t)) return "css"
            }
        });
        var F = a.unpack;
        f.format.gl = function() {
            for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
            var n = F(t, "rgba");
            return n[0] *= 255, n[1] *= 255, n[2] *= 255, n
        }, p.gl = function() {
            for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
            return new(Function.prototype.bind.apply(h, [null].concat(t, ["gl"])))
        }, h.prototype.gl = function() {
            var t = this._rgb;
            return [t[0] / 255, t[1] / 255, t[2] / 255, t[3]]
        };
        var W = a.unpack,
            $ = a.unpack,
            H = Math.floor,
            Z = a.unpack,
            G = a.type,
            J = function() {
                for (var t, r = [], n = arguments.length; n--;) r[n] = arguments[n];
                var e = W(r, "rgb"),
                    i = e[0],
                    o = e[1],
                    u = e[2],
                    a = Math.min(i, o, u),
                    f = Math.max(i, o, u),
                    c = f - a;
                return 0 === c ? t = Number.NaN : (i === f && (t = (o - u) / c), o === f && (t = 2 + (u - i) / c), u === f && (t = 4 + (i - o) / c), (t *= 60) < 0 && (t += 360)), [t, 100 * c / 255, a / (255 - c) * 100]
            };
        h.prototype.hcg = function() {
            return J(this._rgb)
        }, p.hcg = function() {
            for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
            return new(Function.prototype.bind.apply(h, [null].concat(t, ["hcg"])))
        }, f.format.hcg = function() {
            for (var t, r, n, e, i, o, u, a, f, c = [], s = arguments.length; s--;) c[s] = arguments[s];
            var l = (c = $(c, "hcg"))[0],
                h = c[1],
                p = c[2];
            p *= 255;
            var v = 255 * h;
            if (0 === h) u = a = f = p;
            else {
                360 === l && (l = 0), l > 360 && (l -= 360), l < 0 && (l += 360);
                var g = H(l /= 60),
                    d = l - g,
                    y = p * (1 - h),
                    b = y + v * (1 - d),
                    m = y + v * d,
                    _ = y + v;
                switch (g) {
                    case 0:
                        u = (t = [_, m, y])[0], a = t[1], f = t[2];
                        break;
                    case 1:
                        u = (r = [b, _, y])[0], a = r[1], f = r[2];
                        break;
                    case 2:
                        u = (n = [y, _, m])[0], a = n[1], f = n[2];
                        break;
                    case 3:
                        u = (e = [y, b, _])[0], a = e[1], f = e[2];
                        break;
                    case 4:
                        u = (i = [m, y, _])[0], a = i[1], f = i[2];
                        break;
                    case 5:
                        u = (o = [_, y, b])[0], a = o[1], f = o[2]
                }
            }
            return [u, a, f, c.length > 3 ? c[3] : 1]
        }, f.autodetect.push({
            p: 1,
            test: function() {
                for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
                if ("array" === G(t = Z(t, "hcg")) && 3 === t.length) return "hcg"
            }
        });
        var V = a.unpack,
            Y = a.last,
            K = Math.round,
            X = function() {
                for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
                var n = V(t, "rgba"),
                    e = n[0],
                    i = n[1],
                    o = n[2],
                    u = n[3],
                    a = Y(t) || "auto";
                void 0 === u && (u = 1), "auto" === a && (a = u < 1 ? "rgba" : "rgb"), e = K(e), i = K(i);
                var f = "000000" + (e << 16 | i << 8 | (o = K(o))).toString(16);
                f = f.substr(f.length - 6);
                var c = "0" + K(255 * u).toString(16);
                switch (c = c.substr(c.length - 2), a.toLowerCase()) {
                    case "rgba":
                        return "#" + f + c;
                    case "argb":
                        return "#" + c + f;
                    default:
                        return "#" + f
                }
            },
            Q = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
            tt = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,
            tr = function(t) {
                if (t.match(Q)) {
                    (4 === t.length || 7 === t.length) && (t = t.substr(1)), 3 === t.length && (t = (t = t.split(""))[0] + t[0] + t[1] + t[1] + t[2] + t[2]);
                    var r = parseInt(t, 16);
                    return [r >> 16, r >> 8 & 255, 255 & r, 1]
                }
                if (t.match(tt)) {
                    (5 === t.length || 9 === t.length) && (t = t.substr(1)), 4 === t.length && (t = (t = t.split(""))[0] + t[0] + t[1] + t[1] + t[2] + t[2] + t[3] + t[3]);
                    var n = parseInt(t, 16);
                    return [n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, Math.round((255 & n) / 255 * 100) / 100]
                }
                throw Error("unknown hex color: " + t)
            },
            tn = a.type;
        h.prototype.hex = function(t) {
            return X(this._rgb, t)
        }, p.hex = function() {
            for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
            return new(Function.prototype.bind.apply(h, [null].concat(t, ["hex"])))
        }, f.format.hex = tr, f.autodetect.push({
            p: 4,
            test: function(t) {
                for (var r = [], n = arguments.length - 1; n-- > 0;) r[n] = arguments[n + 1];
                if (!r.length && "string" === tn(t) && [3, 4, 5, 6, 7, 8, 9].indexOf(t.length) >= 0) return "hex"
            }
        });
        var te = a.unpack,
            ti = a.TWOPI,
            to = Math.min,
            tu = Math.sqrt,
            ta = Math.acos,
            tf = a.unpack,
            tc = a.limit,
            ts = a.TWOPI,
            tl = a.PITHIRD,
            th = Math.cos,
            tp = a.unpack,
            tv = a.type,
            tg = function() {
                for (var t, r = [], n = arguments.length; n--;) r[n] = arguments[n];
                var e = te(r, "rgb"),
                    i = e[0],
                    o = e[1],
                    u = e[2],
                    a = to(i /= 255, o /= 255, u /= 255),
                    f = (i + o + u) / 3,
                    c = f > 0 ? 1 - a / f : 0;
                return 0 === c ? t = NaN : (t = ta(t = (i - o + (i - u)) / 2 / tu((i - o) * (i - o) + (i - u) * (o - u))), u > o && (t = ti - t), t /= ti), [360 * t, c, f]
            };
        h.prototype.hsi = function() {
            return tg(this._rgb)
        }, p.hsi = function() {
            for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
            return new(Function.prototype.bind.apply(h, [null].concat(t, ["hsi"])))
        }, f.format.hsi = function() {
            for (var t, r, n, e = [], i = arguments.length; i--;) e[i] = arguments[i];
            var o = (e = tf(e, "hsi"))[0],
                u = e[1],
                a = e[2];
            return isNaN(o) && (o = 0), isNaN(u) && (u = 0), o > 360 && (o -= 360), o < 0 && (o += 360), (o /= 360) < 1 / 3 ? r = 1 - ((n = (1 - u) / 3) + (t = (1 + u * th(ts * o) / th(tl - ts * o)) / 3)) : o < 2 / 3 ? (o -= 1 / 3, n = 1 - ((t = (1 - u) / 3) + (r = (1 + u * th(ts * o) / th(tl - ts * o)) / 3))) : (o -= 2 / 3, t = 1 - ((r = (1 - u) / 3) + (n = (1 + u * th(ts * o) / th(tl - ts * o)) / 3))), t = tc(a * t * 3), r = tc(a * r * 3), [255 * t, 255 * r, 255 * (n = tc(a * n * 3)), e.length > 3 ? e[3] : 1]
        }, f.autodetect.push({
            p: 2,
            test: function() {
                for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
                if ("array" === tv(t = tp(t, "hsi")) && 3 === t.length) return "hsi"
            }
        });
        var td = a.unpack,
            ty = a.type;
        h.prototype.hsl = function() {
            return R(this._rgb)
        }, p.hsl = function() {
            for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
            return new(Function.prototype.bind.apply(h, [null].concat(t, ["hsl"])))
        }, f.format.hsl = N, f.autodetect.push({
            p: 2,
            test: function() {
                for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
                if ("array" === ty(t = td(t, "hsl")) && 3 === t.length) return "hsl"
            }
        });
        var tb = a.unpack,
            tm = Math.min,
            t_ = Math.max,
            tw = a.unpack,
            tk = Math.floor,
            tE = a.unpack,
            tR = a.type,
            tx = function() {
                for (var t, r, n = [], e = arguments.length; e--;) n[e] = arguments[e];
                var i = (n = tb(n, "rgb"))[0],
                    o = n[1],
                    u = n[2],
                    a = tm(i, o, u),
                    f = t_(i, o, u),
                    c = f - a;
                return 0 === f ? (t = Number.NaN, r = 0) : (r = c / f, i === f && (t = (o - u) / c), o === f && (t = 2 + (u - i) / c), u === f && (t = 4 + (i - o) / c), (t *= 60) < 0 && (t += 360)), [t, r, f / 255]
            };
        h.prototype.hsv = function() {
            return tx(this._rgb)
        }, p.hsv = function() {
            for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
            return new(Function.prototype.bind.apply(h, [null].concat(t, ["hsv"])))
        }, f.format.hsv = function() {
            for (var t, r, n, e, i, o, u, a, f, c = [], s = arguments.length; s--;) c[s] = arguments[s];
            var l = (c = tw(c, "hsv"))[0],
                h = c[1],
                p = c[2];
            if (p *= 255, 0 === h) u = a = f = p;
            else {
                360 === l && (l = 0), l > 360 && (l -= 360), l < 0 && (l += 360);
                var v = tk(l /= 60),
                    g = l - v,
                    d = p * (1 - h),
                    y = p * (1 - h * g),
                    b = p * (1 - h * (1 - g));
                switch (v) {
                    case 0:
                        u = (t = [p, b, d])[0], a = t[1], f = t[2];
                        break;
                    case 1:
                        u = (r = [y, p, d])[0], a = r[1], f = r[2];
                        break;
                    case 2:
                        u = (n = [d, p, b])[0], a = n[1], f = n[2];
                        break;
                    case 3:
                        u = (e = [d, y, p])[0], a = e[1], f = e[2];
                        break;
                    case 4:
                        u = (i = [b, d, p])[0], a = i[1], f = i[2];
                        break;
                    case 5:
                        u = (o = [p, d, y])[0], a = o[1], f = o[2]
                }
            }
            return [u, a, f, c.length > 3 ? c[3] : 1]
        }, f.autodetect.push({
            p: 2,
            test: function() {
                for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
                if ("array" === tR(t = tE(t, "hsv")) && 3 === t.length) return "hsv"
            }
        });
        var tA = {
                Kn: 18,
                Xn: .95047,
                Yn: 1,
                Zn: 1.08883,
                t0: .137931034,
                t1: .206896552,
                t2: .12841855,
                t3: .008856452
            },
            tS = a.unpack,
            tM = Math.pow,
            tI = function(t) {
                return (t /= 255) <= .04045 ? t / 12.92 : tM((t + .055) / 1.055, 2.4)
            },
            tO = function(t) {
                return t > tA.t3 ? tM(t, 1 / 3) : t / tA.t2 + tA.t0
            },
            tN = function(t, r, n) {
                return t = tI(t), r = tI(r), [tO((.4124564 * t + .3575761 * r + .1804375 * (n = tI(n))) / tA.Xn), tO((.2126729 * t + .7151522 * r + .072175 * n) / tA.Yn), tO((.0193339 * t + .119192 * r + .9503041 * n) / tA.Zn)]
            },
            tL = function() {
                for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
                var n = tS(t, "rgb"),
                    e = tN(n[0], n[1], n[2]),
                    i = e[0],
                    o = e[1],
                    u = e[2],
                    a = 116 * o - 16;
                return [a < 0 ? 0 : a, 500 * (i - o), 200 * (o - u)]
            },
            tj = a.unpack,
            tP = Math.pow,
            tU = function(t) {
                return 255 * (t <= .00304 ? 12.92 * t : 1.055 * tP(t, 1 / 2.4) - .055)
            },
            tq = function(t) {
                return t > tA.t1 ? t * t * t : tA.t2 * (t - tA.t0)
            },
            tB = function() {
                for (var t, r, n, e, i, o = [], u = arguments.length; u--;) o[u] = arguments[u];
                var a = (o = tj(o, "lab"))[0],
                    f = o[1],
                    c = o[2];
                return r = (a + 16) / 116, t = isNaN(f) ? r : r + f / 500, n = isNaN(c) ? r : r - c / 200, r = tA.Yn * tq(r), t = tA.Xn * tq(t), e = tU(3.2404542 * t - 1.5371385 * r - .4985314 * (n = tA.Zn * tq(n))), i = tU(-.969266 * t + 1.8760108 * r + .041556 * n), [e, i, tU(.0556434 * t - .2040259 * r + 1.0572252 * n), o.length > 3 ? o[3] : 1]
            },
            tC = a.unpack,
            tT = a.type;
        h.prototype.lab = function() {
            return tL(this._rgb)
        }, p.lab = function() {
            for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
            return new(Function.prototype.bind.apply(h, [null].concat(t, ["lab"])))
        }, f.format.lab = tB, f.autodetect.push({
            p: 2,
            test: function() {
                for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
                if ("array" === tT(t = tC(t, "lab")) && 3 === t.length) return "lab"
            }
        });
        var tz = a.unpack,
            tD = a.RAD2DEG,
            tF = Math.sqrt,
            tW = Math.atan2,
            t$ = Math.round,
            tH = function() {
                for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
                var n = tz(t, "lab"),
                    e = n[0],
                    i = n[1],
                    o = n[2],
                    u = tF(i * i + o * o),
                    a = (tW(o, i) * tD + 360) % 360;
                return 0 === t$(1e4 * u) && (a = Number.NaN), [e, u, a]
            },
            tZ = a.unpack,
            tG = a.unpack,
            tJ = a.DEG2RAD,
            tV = Math.sin,
            tY = Math.cos,
            tK = function() {
                for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
                var n = tG(t, "lch"),
                    e = n[0],
                    i = n[1],
                    o = n[2];
                return isNaN(o) && (o = 0), [e, tY(o *= tJ) * i, tV(o) * i]
            },
            tX = a.unpack,
            tQ = function() {
                for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
                var n = tK((t = tX(t, "lch"))[0], t[1], t[2]),
                    e = tB(n[0], n[1], n[2]);
                return [e[0], e[1], e[2], t.length > 3 ? t[3] : 1]
            },
            t0 = a.unpack,
            t1 = a.unpack,
            t2 = a.type,
            t5 = function() {
                for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
                var n = tZ(t, "rgb"),
                    e = tL(n[0], n[1], n[2]);
                return tH(e[0], e[1], e[2])
            };
        h.prototype.lch = function() {
            return t5(this._rgb)
        }, h.prototype.hcl = function() {
            return t5(this._rgb).reverse()
        }, p.lch = function() {
            for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
            return new(Function.prototype.bind.apply(h, [null].concat(t, ["lch"])))
        }, p.hcl = function() {
            for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
            return new(Function.prototype.bind.apply(h, [null].concat(t, ["hcl"])))
        }, f.format.lch = tQ, f.format.hcl = function() {
            for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
            var n = t0(t, "hcl").reverse();
            return tQ.apply(void 0, n)
        }, ["lch", "hcl"].forEach(function(t) {
            return f.autodetect.push({
                p: 2,
                test: function() {
                    for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                    if ("array" === t2(r = t1(r, t)) && 3 === r.length) return t
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
            t4 = a.type;
        h.prototype.name = function() {
            for (var t = X(this._rgb, "rgb"), r = 0, n = Object.keys(t3); r < n.length; r += 1) {
                var e = n[r];
                if (t3[e] === t) return e.toLowerCase()
            }
            return t
        }, f.format.named = function(t) {
            if (t3[t = t.toLowerCase()]) return tr(t3[t]);
            throw Error("unknown color name: " + t)
        }, f.autodetect.push({
            p: 5,
            test: function(t) {
                for (var r = [], n = arguments.length - 1; n-- > 0;) r[n] = arguments[n + 1];
                if (!r.length && "string" === t4(t) && t3[t.toLowerCase()]) return "named"
            }
        });
        var t7 = a.unpack,
            t6 = a.type,
            t9 = a.type,
            t8 = function() {
                for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
                var n = t7(t, "rgb");
                return (n[0] << 16) + (n[1] << 8) + n[2]
            };
        h.prototype.num = function() {
            return t8(this._rgb)
        }, p.num = function() {
            for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
            return new(Function.prototype.bind.apply(h, [null].concat(t, ["num"])))
        }, f.format.num = function(t) {
            if ("number" == t6(t) && t >= 0 && t <= 16777215) return [t >> 16, t >> 8 & 255, 255 & t, 1];
            throw Error("unknown num color: " + t)
        }, f.autodetect.push({
            p: 5,
            test: function() {
                for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
                if (1 === t.length && "number" === t9(t[0]) && t[0] >= 0 && t[0] <= 16777215) return "num"
            }
        });
        var rt = a.unpack,
            rr = a.type,
            rn = Math.round;
        h.prototype.rgb = function(t) {
            return (void 0 === t && (t = !0), !1 === t) ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(rn)
        }, h.prototype.rgba = function(t) {
            return void 0 === t && (t = !0), this._rgb.slice(0, 4).map(function(r, n) {
                return n < 3 ? !1 === t ? r : rn(r) : r
            })
        }, p.rgb = function() {
            for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
            return new(Function.prototype.bind.apply(h, [null].concat(t, ["rgb"])))
        }, f.format.rgb = function() {
            for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
            var n = rt(t, "rgba");
            return void 0 === n[3] && (n[3] = 1), n
        }, f.autodetect.push({
            p: 3,
            test: function() {
                for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
                if ("array" === rr(t = rt(t, "rgba")) && (3 === t.length || 4 === t.length && "number" == rr(t[3]) && t[3] >= 0 && t[3] <= 1)) return "rgb"
            }
        });
        var re = Math.log,
            ri = function(t) {
                var r, n, e, i = t / 100;
                return i < 66 ? (r = 255, n = i < 6 ? 0 : -155.25485562709179 - .44596950469579133 * (n = i - 2) + 104.49216199393888 * re(n), e = i < 20 ? 0 : -254.76935184120902 + .8274096064007395 * (e = i - 10) + 115.67994401066147 * re(e)) : (r = 351.97690566805693 + .114206453784165 * (r = i - 55) - 40.25366309332127 * re(r), n = 325.4494125711974 + .07943456536662342 * (n = i - 50) - 28.0852963507957 * re(n), e = 255), [r, n, e, 1]
            },
            ro = a.unpack,
            ru = Math.round,
            ra = function() {
                for (var t, r = [], n = arguments.length; n--;) r[n] = arguments[n];
                for (var e = ro(r, "rgb"), i = e[0], o = e[2], u = 1e3, a = 4e4; a - u > .4;) {
                    var f = ri(t = (a + u) * .5);
                    f[2] / f[0] >= o / i ? a = t : u = t
                }
                return ru(t)
            };
        h.prototype.temp = h.prototype.kelvin = h.prototype.temperature = function() {
            return ra(this._rgb)
        }, p.temp = p.kelvin = p.temperature = function() {
            for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
            return new(Function.prototype.bind.apply(h, [null].concat(t, ["temp"])))
        }, f.format.temp = f.format.kelvin = f.format.temperature = ri;
        var rf = a.unpack,
            rc = Math.cbrt,
            rs = Math.pow,
            rl = Math.sign,
            rh = function() {
                for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
                var n = rf(t, "rgb"),
                    e = n[0],
                    i = n[1],
                    o = n[2],
                    u = [rp(e / 255), rp(i / 255), rp(o / 255)],
                    a = u[0],
                    f = u[1],
                    c = u[2],
                    s = rc(.4122214708 * a + .5363325363 * f + .0514459929 * c),
                    l = rc(.2119034982 * a + .6806995451 * f + .1073969566 * c),
                    h = rc(.0883024619 * a + .2817188376 * f + .6299787005 * c);
                return [.2104542553 * s + .793617785 * l - .0040720468 * h, 1.9779984951 * s - 2.428592205 * l + .4505937099 * h, .0259040371 * s + .7827717662 * l - .808675766 * h]
            };

        function rp(t) {
            var r = Math.abs(t);
            return r < .04045 ? t / 12.92 : (rl(t) || 1) * rs((r + .055) / 1.055, 2.4)
        }
        var rv = a.unpack,
            rg = Math.pow,
            rd = Math.sign,
            ry = function() {
                for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
                var n = (t = rv(t, "lab"))[0],
                    e = t[1],
                    i = t[2],
                    o = rg(n + .3963377774 * e + .2158037573 * i, 3),
                    u = rg(n - .1055613458 * e - .0638541728 * i, 3),
                    a = rg(n - .0894841775 * e - 1.291485548 * i, 3);
                return [255 * rb(4.0767416621 * o - 3.3077115913 * u + .2309699292 * a), 255 * rb(-1.2684380046 * o + 2.6097574011 * u - .3413193965 * a), 255 * rb(-.0041960863 * o - .7034186147 * u + 1.707614701 * a), t.length > 3 ? t[3] : 1]
            };

        function rb(t) {
            var r = Math.abs(t);
            return r > .0031308 ? (rd(t) || 1) * (1.055 * rg(r, 1 / 2.4) - .055) : 12.92 * t
        }
        var rm = a.unpack,
            r_ = a.type;
        h.prototype.oklab = function() {
            return rh(this._rgb)
        }, p.oklab = function() {
            for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
            return new(Function.prototype.bind.apply(h, [null].concat(t, ["oklab"])))
        }, f.format.oklab = ry, f.autodetect.push({
            p: 3,
            test: function() {
                for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
                if ("array" === r_(t = rm(t, "oklab")) && 3 === t.length) return "oklab"
            }
        });
        var rw = a.unpack,
            rk = a.unpack,
            rE = a.unpack,
            rR = a.type,
            rx = function() {
                for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
                var n = rw(t, "rgb"),
                    e = rh(n[0], n[1], n[2]);
                return tH(e[0], e[1], e[2])
            };
        h.prototype.oklch = function() {
            return rx(this._rgb)
        }, p.oklch = function() {
            for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
            return new(Function.prototype.bind.apply(h, [null].concat(t, ["oklch"])))
        }, f.format.oklch = function() {
            for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
            var n = tK((t = rk(t, "lch"))[0], t[1], t[2]),
                e = ry(n[0], n[1], n[2]);
            return [e[0], e[1], e[2], t.length > 3 ? t[3] : 1]
        }, f.autodetect.push({
            p: 3,
            test: function() {
                for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
                if ("array" === rR(t = rE(t, "oklch")) && 3 === t.length) return "oklch"
            }
        });
        var rA = a.type;
        h.prototype.alpha = function(t, r) {
            if (void 0 === r && (r = !1), void 0 !== t && "number" === rA(t)) return r ? (this._rgb[3] = t, this) : new h([this._rgb[0], this._rgb[1], this._rgb[2], t], "rgb");
            return this._rgb[3]
        };
        h.prototype.clipped = function() {
            return this._rgb._clipped || !1
        };
        h.prototype.darken = function(t) {
            void 0 === t && (t = 1);
            var r = this.lab();
            return r[0] -= tA.Kn * t, new h(r, "lab").alpha(this.alpha(), !0)
        }, h.prototype.brighten = function(t) {
            return void 0 === t && (t = 1), this.darken(-t)
        }, h.prototype.darker = h.prototype.darken, h.prototype.brighter = h.prototype.brighten;
        h.prototype.get = function(t) {
            var r = t.split("."),
                n = r[0],
                e = r[1],
                i = this[n]();
            if (!e) return i;
            var o = n.indexOf(e) - ("ok" === n.substr(0, 2) ? 2 : 0);
            if (o > -1) return i[o];
            throw Error("unknown channel " + e + " in mode " + n)
        };
        var rS = a.type,
            rM = Math.pow;
        h.prototype.luminance = function(t) {
            if (void 0 !== t && "number" === rS(t)) {
                if (0 === t) return new h([0, 0, 0, this._rgb[3]], "rgb");
                if (1 === t) return new h([255, 255, 255, this._rgb[3]], "rgb");
                var r = this.luminance(),
                    n = 20,
                    e = function(r, i) {
                        var o = r.interpolate(i, .5, "rgb"),
                            u = o.luminance();
                        return !(1e-7 > Math.abs(t - u)) && n-- ? u > t ? e(r, o) : e(o, i) : o
                    },
                    i = (r > t ? e(new h([0, 0, 0]), this) : e(this, new h([255, 255, 255]))).rgb();
                return new h(i.concat([this._rgb[3]]))
            }
            return rI.apply(void 0, this._rgb.slice(0, 3))
        };
        var rI = function(t, r, n) {
                return t = rO(t), r = rO(r), .2126 * t + .7152 * r + .0722 * (n = rO(n))
            },
            rO = function(t) {
                return (t /= 255) <= .03928 ? t / 12.92 : rM((t + .055) / 1.055, 2.4)
            },
            rN = {},
            rL = a.type,
            rj = function(t, r, n) {
                void 0 === n && (n = .5);
                for (var e = [], i = arguments.length - 3; i-- > 0;) e[i] = arguments[i + 3];
                var o = e[0] || "lrgb";
                if (!rN[o] && !e.length && (o = Object.keys(rN)[0]), !rN[o]) throw Error("interpolation mode " + o + " is not defined");
                return "object" !== rL(t) && (t = new h(t)), "object" !== rL(r) && (r = new h(r)), rN[o](t, r, n).alpha(t.alpha() + n * (r.alpha() - t.alpha()))
            };
        h.prototype.mix = h.prototype.interpolate = function(t, r) {
            void 0 === r && (r = .5);
            for (var n = [], e = arguments.length - 2; e-- > 0;) n[e] = arguments[e + 2];
            return rj.apply(void 0, [this, t, r].concat(n))
        };
        h.prototype.premultiply = function(t) {
            void 0 === t && (t = !1);
            var r = this._rgb,
                n = r[3];
            return t ? (this._rgb = [r[0] * n, r[1] * n, r[2] * n, n], this) : new h([r[0] * n, r[1] * n, r[2] * n, n], "rgb")
        };
        h.prototype.saturate = function(t) {
            void 0 === t && (t = 1);
            var r = this.lch();
            return r[1] += tA.Kn * t, r[1] < 0 && (r[1] = 0), new h(r, "lch").alpha(this.alpha(), !0)
        }, h.prototype.desaturate = function(t) {
            return void 0 === t && (t = 1), this.saturate(-t)
        };
        var rP = a.type;
        h.prototype.set = function(t, r, n) {
            void 0 === n && (n = !1);
            var e = t.split("."),
                i = e[0],
                o = e[1],
                u = this[i]();
            if (!o) return u;
            var a = i.indexOf(o) - ("ok" === i.substr(0, 2) ? 2 : 0);
            if (a > -1) {
                if ("string" == rP(r)) switch (r.charAt(0)) {
                        case "+":
                        case "-":
                            u[a] += +r;
                            break;
                        case "*":
                            u[a] *= +r.substr(1);
                            break;
                        case "/":
                            u[a] /= +r.substr(1);
                            break;
                        default:
                            u[a] = +r
                    } else if ("number" === rP(r)) u[a] = r;
                    else throw Error("unsupported value for Color.set");
                var f = new h(u, i);
                return n ? (this._rgb = f._rgb, this) : f
            }
            throw Error("unknown channel " + o + " in mode " + i)
        };
        rN.rgb = function(t, r, n) {
            var e = t._rgb,
                i = r._rgb;
            return new h(e[0] + n * (i[0] - e[0]), e[1] + n * (i[1] - e[1]), e[2] + n * (i[2] - e[2]), "rgb")
        };
        var rU = Math.sqrt,
            rq = Math.pow;
        rN.lrgb = function(t, r, n) {
            var e = t._rgb,
                i = e[0],
                o = e[1],
                u = e[2],
                a = r._rgb,
                f = a[0],
                c = a[1],
                s = a[2];
            return new h(rU(rq(i, 2) * (1 - n) + rq(f, 2) * n), rU(rq(o, 2) * (1 - n) + rq(c, 2) * n), rU(rq(u, 2) * (1 - n) + rq(s, 2) * n), "rgb")
        };
        rN.lab = function(t, r, n) {
            var e = t.lab(),
                i = r.lab();
            return new h(e[0] + n * (i[0] - e[0]), e[1] + n * (i[1] - e[1]), e[2] + n * (i[2] - e[2]), "lab")
        };
        var rB = function(t, r, n, e) {
                var i, o, u, a, f, c, s, l, p, v, g, d, y, b;
                return "hsl" === e ? (u = t.hsl(), a = r.hsl()) : "hsv" === e ? (u = t.hsv(), a = r.hsv()) : "hcg" === e ? (u = t.hcg(), a = r.hcg()) : "hsi" === e ? (u = t.hsi(), a = r.hsi()) : "lch" === e || "hcl" === e ? (e = "hcl", u = t.hcl(), a = r.hcl()) : "oklch" === e && (u = t.oklch().reverse(), a = r.oklch().reverse()), ("h" === e.substr(0, 1) || "oklch" === e) && (f = (i = u)[0], s = i[1], p = i[2], c = (o = a)[0], l = o[1], v = o[2]), isNaN(f) || isNaN(c) ? isNaN(f) ? isNaN(c) ? d = Number.NaN : (d = c, (1 == p || 0 == p) && "hsv" != e && (g = l)) : (d = f, (1 == v || 0 == v) && "hsv" != e && (g = s)) : (b = c > f && c - f > 180 ? c - (f + 360) : c < f && f - c > 180 ? c + 360 - f : c - f, d = f + n * b), void 0 === g && (g = s + n * (l - s)), y = p + n * (v - p), "oklch" === e ? new h([y, g, d], e) : new h([d, g, y], e)
            },
            rC = function(t, r, n) {
                return rB(t, r, n, "lch")
            };
        rN.lch = rC, rN.hcl = rC;
        rN.num = function(t, r, n) {
            var e = t.num();
            return new h(e + n * (r.num() - e), "num")
        };
        rN.hcg = function(t, r, n) {
            return rB(t, r, n, "hcg")
        };
        rN.hsi = function(t, r, n) {
            return rB(t, r, n, "hsi")
        };
        rN.hsl = function(t, r, n) {
            return rB(t, r, n, "hsl")
        };
        rN.hsv = function(t, r, n) {
            return rB(t, r, n, "hsv")
        };
        rN.oklab = function(t, r, n) {
            var e = t.oklab(),
                i = r.oklab();
            return new h(e[0] + n * (i[0] - e[0]), e[1] + n * (i[1] - e[1]), e[2] + n * (i[2] - e[2]), "oklab")
        };
        rN.oklch = function(t, r, n) {
            return rB(t, r, n, "oklch")
        };
        var rT = a.clip_rgb,
            rz = Math.pow,
            rD = Math.sqrt,
            rF = Math.PI,
            rW = Math.cos,
            r$ = Math.sin,
            rH = Math.atan2,
            rZ = function(t, r) {
                for (var n = t.length, e = [0, 0, 0, 0], i = 0; i < t.length; i++) {
                    var o = t[i],
                        u = r[i] / n,
                        a = o._rgb;
                    e[0] += rz(a[0], 2) * u, e[1] += rz(a[1], 2) * u, e[2] += rz(a[2], 2) * u, e[3] += a[3] * u
                }
                return e[0] = rD(e[0]), e[1] = rD(e[1]), e[2] = rD(e[2]), e[3] > .9999999 && (e[3] = 1), new h(rT(e))
            },
            rG = a.type,
            rJ = Math.pow,
            rV = function(t) {
                var r = "rgb",
                    n = p("#ccc"),
                    e = 0,
                    i = [0, 1],
                    o = [],
                    u = [0, 0],
                    a = !1,
                    f = [],
                    c = !1,
                    s = 0,
                    l = 1,
                    h = !1,
                    v = {},
                    g = !0,
                    d = 1,
                    y = function(t) {
                        if (t = t || ["#fff", "#000"], "string" === rG(t) && p.brewer && p.brewer[t.toLowerCase()] && (t = p.brewer[t.toLowerCase()]), "array" === rG(t)) {
                            1 === t.length && (t = [t[0], t[0]]), t = t.slice(0);
                            for (var r = 0; r < t.length; r++) t[r] = p(t[r]);
                            o.length = 0;
                            for (var n = 0; n < t.length; n++) o.push(n / (t.length - 1))
                        }
                        return k(), f = t
                    },
                    b = function(t) {
                        if (null != a) {
                            for (var r = a.length - 1, n = 0; n < r && t >= a[n];) n++;
                            return n - 1
                        }
                        return 0
                    },
                    m = function(t) {
                        return t
                    },
                    _ = function(t) {
                        return t
                    },
                    w = function(t, e) {
                        if (null == e && (e = !1), isNaN(t) || null === t) return n;
                        if (e) c = t;
                        else if (a && a.length > 2) {
                            var i, c;
                            c = b(t) / (a.length - 2)
                        } else c = l !== s ? (t - s) / (l - s) : 1;
                        c = _(c), !e && (c = m(c)), 1 !== d && (c = rJ(c, d));
                        var h = Math.floor(1e4 * (c = Math.min(1, Math.max(0, c = u[0] + c * (1 - u[0] - u[1])))));
                        if (g && v[h]) i = v[h];
                        else {
                            if ("array" === rG(f))
                                for (var y = 0; y < o.length; y++) {
                                    var w = o[y];
                                    if (c <= w || c >= w && y === o.length - 1) {
                                        i = f[y];
                                        break
                                    }
                                    if (c > w && c < o[y + 1]) {
                                        c = (c - w) / (o[y + 1] - w), i = p.interpolate(f[y], f[y + 1], c, r);
                                        break
                                    }
                                } else "function" === rG(f) && (i = f(c));
                            g && (v[h] = i)
                        }
                        return i
                    },
                    k = function() {
                        return v = {}
                    };
                y(t);
                var E = function(t) {
                    var r = p(w(t));
                    return c && r[c] ? r[c]() : r
                };
                return E.classes = function(t) {
                    if (null != t) {
                        if ("array" === rG(t)) a = t, i = [t[0], t[t.length - 1]];
                        else {
                            var r = p.analyze(i);
                            a = 0 === t ? [r.min, r.max] : p.limits(r, "e", t)
                        }
                        return E
                    }
                    return a
                }, E.domain = function(t) {
                    if (!arguments.length) return i;
                    s = t[0], l = t[t.length - 1], o = [];
                    var r = f.length;
                    if (t.length === r && s !== l)
                        for (var n = 0, e = Array.from(t); n < e.length; n += 1) {
                            var u = e[n];
                            o.push((u - s) / (l - s))
                        } else {
                            for (var a = 0; a < r; a++) o.push(a / (r - 1));
                            if (t.length > 2) {
                                var c = t.map(function(r, n) {
                                        return n / (t.length - 1)
                                    }),
                                    h = t.map(function(t) {
                                        return (t - s) / (l - s)
                                    });
                                !h.every(function(t, r) {
                                    return c[r] === t
                                }) && (_ = function(t) {
                                    if (t <= 0 || t >= 1) return t;
                                    for (var r = 0; t >= h[r + 1];) r++;
                                    var n = (t - h[r]) / (h[r + 1] - h[r]);
                                    return c[r] + n * (c[r + 1] - c[r])
                                })
                            }
                        }
                    return i = [s, l], E
                }, E.mode = function(t) {
                    return arguments.length ? (r = t, k(), E) : r
                }, E.range = function(t, r) {
                    return y(t), E
                }, E.out = function(t) {
                    return c = t, E
                }, E.spread = function(t) {
                    return arguments.length ? (e = t, E) : e
                }, E.correctLightness = function(t) {
                    return null == t && (t = !0), h = t, k(), m = h ? function(t) {
                        for (var r = w(0, !0).lab()[0], n = w(1, !0).lab()[0], e = r > n, i = w(t, !0).lab()[0], o = r + (n - r) * t, u = i - o, a = 0, f = 1, c = 20; Math.abs(u) > .01 && c-- > 0;) e && (u *= -1), u < 0 ? (a = t, t += (f - t) * .5) : (f = t, t += (a - t) * .5), u = (i = w(t, !0).lab()[0]) - o;
                        return t
                    } : function(t) {
                        return t
                    }, E
                }, E.padding = function(t) {
                    return null != t ? ("number" === rG(t) && (t = [t, t]), u = t, E) : u
                }, E.colors = function(r, n) {
                    arguments.length < 2 && (n = "hex");
                    var e = [];
                    if (0 == arguments.length) e = f.slice(0);
                    else if (1 === r) e = [E(.5)];
                    else if (r > 1) {
                        var o = i[0],
                            u = i[1] - o;
                        e = (function(t, r, n) {
                            for (var e = [], i = t < r, o = n ? i ? r + 1 : r - 1 : r, u = t; i ? u < o : u > o; i ? u++ : u--) e.push(u);
                            return e
                        })(0, r, !1).map(function(t) {
                            return E(o + t / (r - 1) * u)
                        })
                    } else {
                        t = [];
                        var c = [];
                        if (a && a.length > 2)
                            for (var s = 1, l = a.length, h = 1 <= l; h ? s < l : s > l; h ? s++ : s--) c.push((a[s - 1] + a[s]) * .5);
                        else c = i;
                        e = c.map(function(t) {
                            return E(t)
                        })
                    }
                    return p[n] && (e = e.map(function(t) {
                        return t[n]()
                    })), e
                }, E.cache = function(t) {
                    return null != t ? (g = t, E) : g
                }, E.gamma = function(t) {
                    return null != t ? (d = t, E) : d
                }, E.nodata = function(t) {
                    return null != t ? (n = p(t), E) : n
                }, E
            },
            rY = function(t) {
                for (var r = [1, 1], n = 1; n < t; n++) {
                    for (var e = [1], i = 1; i <= r.length; i++) e[i] = (r[i] || 0) + r[i - 1];
                    r = e
                }
                return r
            },
            rK = function(t) {
                var r, n, e, i, o, u, a, f, c, s, l;
                if (2 === (t = t.map(function(t) {
                        return new h(t)
                    })).length) o = (r = t.map(function(t) {
                    return t.lab()
                }))[0], u = r[1], i = function(t) {
                    return new h([0, 1, 2].map(function(r) {
                        return o[r] + t * (u[r] - o[r])
                    }), "lab")
                };
                else if (3 === t.length) o = (n = t.map(function(t) {
                    return t.lab()
                }))[0], u = n[1], a = n[2], i = function(t) {
                    return new h([0, 1, 2].map(function(r) {
                        return (1 - t) * (1 - t) * o[r] + 2 * (1 - t) * t * u[r] + t * t * a[r]
                    }), "lab")
                };
                else if (4 === t.length) o = (e = t.map(function(t) {
                    return t.lab()
                }))[0], u = e[1], a = e[2], f = e[3], i = function(t) {
                    return new h([0, 1, 2].map(function(r) {
                        return (1 - t) * (1 - t) * (1 - t) * o[r] + 3 * (1 - t) * (1 - t) * t * u[r] + 3 * (1 - t) * t * t * a[r] + t * t * t * f[r]
                    }), "lab")
                };
                else if (t.length >= 5) c = t.map(function(t) {
                    return t.lab()
                }), s = rY(l = t.length - 1), i = function(t) {
                    var r = 1 - t;
                    return new h([0, 1, 2].map(function(n) {
                        return c.reduce(function(e, i, o) {
                            return e + s[o] * Math.pow(r, l - o) * Math.pow(t, o) * i[n]
                        }, 0)
                    }), "lab")
                };
                else throw RangeError("No point in running bezier with only one color.");
                return i
            },
            rX = function(t, r, n) {
                if (!rX[n]) throw Error("unknown blend mode " + n);
                return rX[n](t, r)
            },
            rQ = function(t) {
                return function(r, n) {
                    var e = p(n).rgb(),
                        i = p(r).rgb();
                    return p.rgb(t(e, i))
                }
            },
            r0 = function(t) {
                return function(r, n) {
                    var e = [];
                    return e[0] = t(r[0], n[0]), e[1] = t(r[1], n[1]), e[2] = t(r[2], n[2]), e
                }
            };
        rX.normal = rQ(r0(function(t) {
            return t
        })), rX.multiply = rQ(r0(function(t, r) {
            return t * r / 255
        })), rX.screen = rQ(r0(function(t, r) {
            return 255 * (1 - (1 - t / 255) * (1 - r / 255))
        })), rX.overlay = rQ(r0(function(t, r) {
            return r < 128 ? 2 * t * r / 255 : 255 * (1 - 2 * (1 - t / 255) * (1 - r / 255))
        })), rX.darken = rQ(r0(function(t, r) {
            return t > r ? r : t
        })), rX.lighten = rQ(r0(function(t, r) {
            return t > r ? t : r
        })), rX.dodge = rQ(r0(function(t, r) {
            return 255 === t ? 255 : (t = 255 * (r / 255) / (1 - t / 255)) > 255 ? 255 : t
        })), rX.burn = rQ(r0(function(t, r) {
            return 255 * (1 - (1 - r / 255) / (t / 255))
        }));
        for (var r1 = a.type, r2 = a.clip_rgb, r5 = a.TWOPI, r3 = Math.pow, r4 = Math.sin, r7 = Math.cos, r6 = Math.floor, r9 = Math.random, r8 = Math.log, nt = Math.pow, nr = Math.floor, nn = Math.abs, ne = function(t, r) {
                void 0 === r && (r = null);
                var n = {
                    min: Number.MAX_VALUE,
                    max: -1 * Number.MAX_VALUE,
                    sum: 0,
                    values: [],
                    count: 0
                };
                return "object" === o(t) && (t = Object.values(t)), t.forEach(function(t) {
                    r && "object" === o(t) && (t = t[r]), null != t && !isNaN(t) && (n.values.push(t), n.sum += t, t < n.min && (n.min = t), t > n.max && (n.max = t), n.count += 1)
                }), n.domain = [n.min, n.max], n.limits = function(t, r) {
                    return ni(n, t, r)
                }, n
            }, ni = function(t, r, n) {
                void 0 === r && (r = "equal"), void 0 === n && (n = 7), "array" == o(t) && (t = ne(t));
                var e = t.min,
                    i = t.max,
                    u = t.values.sort(function(t, r) {
                        return t - r
                    });
                if (1 === n) return [e, i];
                var a = [];
                if ("c" === r.substr(0, 1) && (a.push(e), a.push(i)), "e" === r.substr(0, 1)) {
                    a.push(e);
                    for (var f = 1; f < n; f++) a.push(e + f / n * (i - e));
                    a.push(i)
                } else if ("l" === r.substr(0, 1)) {
                    if (e <= 0) throw Error("Logarithmic scales are only possible for values > 0");
                    var c = Math.LOG10E * r8(e),
                        s = Math.LOG10E * r8(i);
                    a.push(e);
                    for (var l = 1; l < n; l++) a.push(nt(10, c + l / n * (s - c)));
                    a.push(i)
                } else if ("q" === r.substr(0, 1)) {
                    a.push(e);
                    for (var h = 1; h < n; h++) {
                        var p = (u.length - 1) * h / n,
                            v = nr(p);
                        if (v === p) a.push(u[v]);
                        else {
                            var g = p - v;
                            a.push(u[v] * (1 - g) + u[v + 1] * g)
                        }
                    }
                    a.push(i)
                } else if ("k" === r.substr(0, 1)) {
                    var d, y = u.length,
                        b = Array(y),
                        m = Array(n),
                        _ = !0,
                        w = 0,
                        k = null;
                    (k = []).push(e);
                    for (var E = 1; E < n; E++) k.push(e + E / n * (i - e));
                    for (k.push(i); _;) {
                        for (var R = 0; R < n; R++) m[R] = 0;
                        for (var x = 0; x < y; x++) {
                            for (var A = u[x], S = Number.MAX_VALUE, M = void 0, I = 0; I < n; I++) {
                                var O = nn(k[I] - A);
                                O < S && (S = O, M = I), m[M]++, b[x] = M
                            }
                        }
                        for (var N = Array(n), L = 0; L < n; L++) N[L] = null;
                        for (var j = 0; j < y; j++) null === N[d = b[j]] ? N[d] = u[j] : N[d] += u[j];
                        for (var P = 0; P < n; P++) N[P] *= 1 / m[P];
                        _ = !1;
                        for (var U = 0; U < n; U++)
                            if (N[U] !== k[U]) {
                                _ = !0;
                                break
                            } k = N, ++w > 200 && (_ = !1)
                    }
                    for (var q = {}, B = 0; B < n; B++) q[B] = [];
                    for (var C = 0; C < y; C++) q[d = b[C]].push(u[C]);
                    for (var T = [], z = 0; z < n; z++) T.push(q[z][0]), T.push(q[z][q[z].length - 1]);
                    T = T.sort(function(t, r) {
                        return t - r
                    }), a.push(T[0]);
                    for (var D = 1; D < T.length; D += 2) {
                        var F = T[D];
                        !isNaN(F) && -1 === a.indexOf(F) && a.push(F)
                    }
                }
                return a
            }, no = {
                analyze: ne,
                limits: ni
            }, nu = Math.sqrt, na = Math.pow, nf = Math.min, nc = Math.max, ns = Math.atan2, nl = Math.abs, nh = Math.cos, np = Math.sin, nv = Math.exp, ng = Math.PI, nd = {
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
            }, ny = 0, nb = Object.keys(nd); ny < nb.length; ny += 1) {
            var nm = nb[ny];
            nd[nm.toLowerCase()] = nd[nm]
        }
        return p.average = function(t, r, n) {
            void 0 === r && (r = "lrgb"), void 0 === n && (n = null);
            var e = t.length;
            !n && (n = Array.from(Array(e)).map(function() {
                return 1
            }));
            var i = e / n.reduce(function(t, r) {
                return t + r
            });
            if (n.forEach(function(t, r) {
                    n[r] *= i
                }), t = t.map(function(t) {
                    return new h(t)
                }), "lrgb" === r) return rZ(t, n);
            for (var o = t.shift(), u = o.get(r), a = [], f = 0, c = 0, s = 0; s < u.length; s++)
                if (u[s] = (u[s] || 0) * n[0], a.push(isNaN(u[s]) ? 0 : n[0]), "h" === r.charAt(s) && !isNaN(u[s])) {
                    var l = u[s] / 180 * rF;
                    f += rW(l) * n[0], c += r$(l) * n[0]
                } var p = o.alpha() * n[0];
            t.forEach(function(t, e) {
                var i = t.get(r);
                p += t.alpha() * n[e + 1];
                for (var o = 0; o < u.length; o++)
                    if (!isNaN(i[o])) {
                        if (a[o] += n[e + 1], "h" === r.charAt(o)) {
                            var s = i[o] / 180 * rF;
                            f += rW(s) * n[e + 1], c += r$(s) * n[e + 1]
                        } else u[o] += i[o] * n[e + 1]
                    }
            });
            for (var v = 0; v < u.length; v++)
                if ("h" === r.charAt(v)) {
                    for (var g = rH(c / a[v], f / a[v]) / rF * 180; g < 0;) g += 360;
                    for (; g >= 360;) g -= 360;
                    u[v] = g
                } else u[v] = u[v] / a[v];
            return p /= e, new h(u, r).alpha(p > .99999 ? 1 : p, !0)
        }, p.bezier = function(t) {
            var r = rK(t);
            return r.scale = function() {
                return rV(r)
            }, r
        }, p.blend = rX, p.cubehelix = function(t, r, n, e, i) {
            void 0 === t && (t = 300), void 0 === r && (r = -1.5), void 0 === n && (n = 1), void 0 === e && (e = 1), void 0 === i && (i = [0, 1]);
            var o, u = 0;
            "array" === r1(i) ? o = i[1] - i[0] : (o = 0, i = [i, i]);
            var a = function(a) {
                var f = r5 * ((t + 120) / 360 + r * a),
                    c = r3(i[0] + o * a, e),
                    s = (0 !== u ? n[0] + a * u : n) * c * (1 - c) / 2,
                    l = r7(f),
                    h = r4(f);
                return p(r2([255 * (c + s * (-.14861 * l + 1.78277 * h)), 255 * (c + s * (-.29227 * l - .90649 * h)), 255 * (c + s * (1.97294 * l)), 1]))
            };
            return a.start = function(r) {
                return null == r ? t : (t = r, a)
            }, a.rotations = function(t) {
                return null == t ? r : (r = t, a)
            }, a.gamma = function(t) {
                return null == t ? e : (e = t, a)
            }, a.hue = function(t) {
                return null == t ? n : ("array" === r1(n = t) ? 0 == (u = n[1] - n[0]) && (n = n[1]) : u = 0, a)
            }, a.lightness = function(t) {
                return null == t ? i : ("array" === r1(t) ? (i = t, o = t[1] - t[0]) : (i = [t, t], o = 0), a)
            }, a.scale = function() {
                return p.scale(a)
            }, a.hue(n), a
        }, p.mix = p.interpolate = rj, p.random = function() {
            for (var t = "#", r = 0; r < 6; r++) t += "0123456789abcdef".charAt(r6(16 * r9()));
            return new h(t, "hex")
        }, p.scale = rV, p.analyze = no.analyze, p.contrast = function(t, r) {
            t = new h(t), r = new h(r);
            var n = t.luminance(),
                e = r.luminance();
            return n > e ? (n + .05) / (e + .05) : (e + .05) / (n + .05)
        }, p.deltaE = function(t, r, n, e, i) {
            void 0 === n && (n = 1), void 0 === e && (e = 1), void 0 === i && (i = 1);
            var o = function(t) {
                    return 360 * t / (2 * ng)
                },
                u = function(t) {
                    return 2 * ng * t / 360
                };
            t = new h(t), r = new h(r);
            var a = Array.from(t.lab()),
                f = a[0],
                c = a[1],
                s = a[2],
                l = Array.from(r.lab()),
                p = l[0],
                v = l[1],
                g = l[2],
                d = (f + p) / 2,
                y = (nu(na(c, 2) + na(s, 2)) + nu(na(v, 2) + na(g, 2))) / 2,
                b = .5 * (1 - nu(na(y, 7) / (na(y, 7) + na(25, 7)))),
                m = c * (1 + b),
                _ = v * (1 + b),
                w = nu(na(m, 2) + na(s, 2)),
                k = nu(na(_, 2) + na(g, 2)),
                E = (w + k) / 2,
                R = o(ns(s, m)),
                x = o(ns(g, _)),
                A = R >= 0 ? R : R + 360,
                S = x >= 0 ? x : x + 360,
                M = nl(A - S) > 180 ? (A + S + 360) / 2 : (A + S) / 2,
                I = 1 - .17 * nh(u(M - 30)) + .24 * nh(u(2 * M)) + .32 * nh(u(3 * M + 6)) - .2 * nh(u(4 * M - 63)),
                O = S - A;
            O = 180 >= nl(O) ? O : S <= A ? O + 360 : O - 360, O = 2 * nu(w * k) * np(u(O) / 2);
            var N = k - w,
                L = 1 + .015 * na(d - 50, 2) / nu(20 + na(d - 50, 2)),
                j = 1 + .045 * E,
                P = 1 + .015 * E * I,
                U = 30 * nv(-na((M - 275) / 25, 2)),
                q = -(2 * nu(na(E, 7) / (na(E, 7) + na(25, 7)))) * np(2 * u(U));
            return nc(0, nf(100, nu(na((p - f) / (n * L), 2) + na(N / (e * j), 2) + na(O / (i * P), 2) + q * (N / (e * j)) * (O / (i * P)))))
        }, p.distance = function(t, r, n) {
            void 0 === n && (n = "lab"), t = new h(t), r = new h(r);
            var e = t.get(n),
                i = r.get(n),
                o = 0;
            for (var u in e) {
                var a = (e[u] || 0) - (i[u] || 0);
                o += a * a
            }
            return Math.sqrt(o)
        }, p.limits = no.limits, p.valid = function() {
            for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
            try {
                return new(Function.prototype.bind.apply(h, [null].concat(t))), !0
            } catch (t) {
                return !1
            }
        }, p.scales = {
            cool: function() {
                return rV([p.hsl(180, 1, .9), p.hsl(250, .7, .4)])
            },
            hot: function() {
                return rV(["#000", "#f00", "#ff0", "#fff"]).mode("rgb")
            }
        }, p.colors = t3, p.brewer = nd, p
    }, "object" == typeof r && void 0 !== t ? t.exports = i() : "function" == typeof define && define.amd ? define(i) : (e = "undefined" != typeof globalThis ? globalThis : e || self).chroma = i()
}