function(e, t, n) {
    "use strict";
    e = n.nmd(e), n("424973"), n("781738"), n("990131"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("311790");
    var r, i, o, s, a, c = {
        cipher: {},
        hash: {},
        keyexchange: {},
        mode: {},
        misc: {},
        codec: {},
        exception: {
            corrupt: function(e) {
                this.toString = function() {
                    return "CORRUPT: " + this.message
                }, this.message = e
            },
            invalid: function(e) {
                this.toString = function() {
                    return "INVALID: " + this.message
                }, this.message = e
            },
            bug: function(e) {
                this.toString = function() {
                    return "BUG: " + this.message
                }, this.message = e
            },
            notReady: function(e) {
                this.toString = function() {
                    return "NOT READY: " + this.message
                }, this.message = e
            }
        }
    };

    function u(e, t, n) {
        if (4 !== t.length) throw new c.exception.invalid("invalid aes block size");
        var r = e.b[n],
            i = t[0] ^ r[0],
            o = t[n ? 3 : 1] ^ r[1],
            s = t[2] ^ r[2];
        t = t[n ? 1 : 3] ^ r[3];
        var a, u, d, l, f = r.length / 4 - 2,
            p = 4,
            h = [0, 0, 0, 0];
        e = (a = e.s[n])[0];
        var v = a[1],
            g = a[2],
            b = a[3],
            m = a[4];
        for (l = 0; l < f; l++) a = e[i >>> 24] ^ v[o >> 16 & 255] ^ g[s >> 8 & 255] ^ b[255 & t] ^ r[p], u = e[o >>> 24] ^ v[s >> 16 & 255] ^ g[t >> 8 & 255] ^ b[255 & i] ^ r[p + 1], d = e[s >>> 24] ^ v[t >> 16 & 255] ^ g[i >> 8 & 255] ^ b[255 & o] ^ r[p + 2], t = e[t >>> 24] ^ v[i >> 16 & 255] ^ g[o >> 8 & 255] ^ b[255 & s] ^ r[p + 3], p += 4, i = a, o = u, s = d;
        for (l = 0; 4 > l; l++) h[n ? 3 & -l : l] = m[i >>> 24] << 24 ^ m[o >> 16 & 255] << 16 ^ m[s >> 8 & 255] << 8 ^ m[255 & t] ^ r[p++], a = i, i = o, o = s, s = t, t = a;
        return h
    }

    function d(e, t) {
        var n, r, i, o = e.F,
            s = e.b,
            a = o[0],
            c = o[1],
            u = o[2],
            d = o[3],
            l = o[4],
            f = o[5],
            p = o[6],
            h = o[7];
        for (n = 0; 64 > n; n++) 16 > n ? r = t[n] : (r = t[n + 1 & 15], i = t[n + 14 & 15], r = t[15 & n] = (r >>> 7 ^ r >>> 18 ^ r >>> 3 ^ r << 25 ^ r << 14) + (i >>> 17 ^ i >>> 19 ^ i >>> 10 ^ i << 15 ^ i << 13) + t[15 & n] + t[n + 9 & 15] | 0), r = r + h + (l >>> 6 ^ l >>> 11 ^ l >>> 25 ^ l << 26 ^ l << 21 ^ l << 7) + (p ^ l & (f ^ p)) + s[n], h = p, p = f, f = l, l = d + r | 0, d = u, u = c, a = r + ((c = a) & u ^ d & (c ^ u)) + (c >>> 2 ^ c >>> 13 ^ c >>> 22 ^ c << 30 ^ c << 19 ^ c << 10) | 0;
        o[0] = o[0] + a | 0, o[1] = o[1] + c | 0, o[2] = o[2] + u | 0, o[3] = o[3] + d | 0, o[4] = o[4] + l | 0, o[5] = o[5] + f | 0, o[6] = o[6] + p | 0, o[7] = o[7] + h | 0
    }

    function l(e, t) {
        var n, r = c.random.K[e],
            i = [];
        for (n in r) r.hasOwnProperty(n) && i.push(r[n]);
        for (n = 0; n < i.length; n++) i[n](t)
    }

    function f(e, t) {
        "undefined" != typeof window && window.performance && "function" == typeof window.performance.now ? e.addEntropy(window.performance.now(), t, "loadtime") : e.addEntropy((new Date).valueOf(), t, "loadtime")
    }

    function p(e) {
        e.b = h(e).concat(h(e)), e.L = new c.cipher.aes(e.b)
    }

    function h(e) {
        for (var t = 0; 4 > t && (e.h[t] = e.h[t] + 1 | 0, !e.h[t]); t++);
        return e.L.encrypt(e.h)
    }

    function v(e, t) {
        return function() {
            t.apply(e, arguments)
        }
    }
    c.cipher.aes = function(e) {
        this.s[0][0][0] || this.O();
        var t, n, r, i, o = this.s[0][4],
            s = this.s[1];
        t = e.length;
        var a = 1;
        if (4 !== t && 6 !== t && 8 !== t) throw new c.exception.invalid("invalid aes key size");
        for (this.b = [r = e.slice(0), i = []], e = t; e < 4 * t + 28; e++) n = r[e - 1], (0 == e % t || 8 === t && 4 == e % t) && (n = o[n >>> 24] << 24 ^ o[n >> 16 & 255] << 16 ^ o[n >> 8 & 255] << 8 ^ o[255 & n], 0 == e % t && (n = n << 8 ^ n >>> 24 ^ a << 24, a = a << 1 ^ 283 * (a >> 7))), r[e] = r[e - t] ^ n;
        for (t = 0; e; t++, e--) n = r[3 & t ? e : e - 4], i[t] = 4 >= e || 4 > t ? n : s[0][o[n >>> 24]] ^ s[1][o[n >> 16 & 255]] ^ s[2][o[n >> 8 & 255]] ^ s[3][o[255 & n]]
    }, c.cipher.aes.prototype = {
        encrypt: function(e) {
            return u(this, e, 0)
        },
        decrypt: function(e) {
            return u(this, e, 1)
        },
        s: [
            [
                [],
                [],
                [],
                [],
                []
            ],
            [
                [],
                [],
                [],
                [],
                []
            ]
        ],
        O: function() {
            var e, t, n, r, i, o, s, a = this.s[0],
                c = this.s[1],
                u = a[4],
                d = c[4],
                l = [],
                f = [];
            for (e = 0; 256 > e; e++) f[(l[e] = e << 1 ^ 283 * (e >> 7)) ^ e] = e;
            for (t = n = 0; !u[t]; t ^= r || 1, n = f[n] || 1)
                for (o = (o = n ^ n << 1 ^ n << 2 ^ n << 3 ^ n << 4) >> 8 ^ 255 & o ^ 99, u[t] = o, d[o] = t, s = 16843009 * (i = l[e = l[r = l[t]]]) ^ 65537 * e ^ 257 * r ^ 16843008 * t, i = 257 * l[o] ^ 16843008 * o, e = 0; 4 > e; e++) a[e][t] = i = i << 24 ^ i >>> 8, c[e][o] = s = s << 24 ^ s >>> 8;
            for (e = 0; 5 > e; e++) a[e] = a[e].slice(0), c[e] = c[e].slice(0)
        }
    }, c.bitArray = {
        bitSlice: function(e, t, n) {
            return e = c.bitArray.$(e.slice(t / 32), 32 - (31 & t)).slice(1), void 0 === n ? e : c.bitArray.clamp(e, n - t)
        },
        extract: function(e, t, n) {
            var r = Math.floor(-t - n & 31);
            return ((t + n - 1 ^ t) & -32 ? e[t / 32 | 0] << 32 - r ^ e[t / 32 + 1 | 0] >>> r : e[t / 32 | 0] >>> r) & (1 << n) - 1
        },
        concat: function(e, t) {
            if (0 === e.length || 0 === t.length) return e.concat(t);
            var n = e[e.length - 1],
                r = c.bitArray.getPartial(n);
            return 32 === r ? e.concat(t) : c.bitArray.$(t, r, 0 | n, e.slice(0, e.length - 1))
        },
        bitLength: function(e) {
            var t = e.length;
            return 0 === t ? 0 : 32 * (t - 1) + c.bitArray.getPartial(e[t - 1])
        },
        clamp: function(e, t) {
            if (32 * e.length < t) return e;
            var n = (e = e.slice(0, Math.ceil(t / 32))).length;
            return t &= 31, 0 < n && t && (e[n - 1] = c.bitArray.partial(t, e[n - 1] & 2147483648 >> t - 1, 1)), e
        },
        partial: function(e, t, n) {
            return 32 === e ? t : (n ? 0 | t : t << 32 - e) + 1099511627776 * e
        },
        getPartial: function(e) {
            return Math.round(e / 1099511627776) || 32
        },
        equal: function(e, t) {
            if (c.bitArray.bitLength(e) !== c.bitArray.bitLength(t)) return !1;
            var n, r = 0;
            for (n = 0; n < e.length; n++) r |= e[n] ^ t[n];
            return 0 === r
        },
        $: function(e, t, n, r) {
            var i;
            for (i = 0, void 0 === r && (r = []); 32 <= t; t -= 32) r.push(n), n = 0;
            if (0 === t) return r.concat(e);
            for (i = 0; i < e.length; i++) r.push(n | e[i] >>> t), n = e[i] << 32 - t;
            return i = e.length ? e[e.length - 1] : 0, e = c.bitArray.getPartial(i), r.push(c.bitArray.partial(t + e & 31, 32 < t + e ? n : r.pop(), 1)), r
        },
        i: function(e, t) {
            return [e[0] ^ t[0], e[1] ^ t[1], e[2] ^ t[2], e[3] ^ t[3]]
        },
        byteswapM: function(e) {
            var t, n;
            for (t = 0; t < e.length; ++t) n = e[t], e[t] = n >>> 24 | n >>> 8 & 65280 | (65280 & n) << 8 | n << 24;
            return e
        }
    }, c.codec.utf8String = {
        fromBits: function(e) {
            var t, n, r = "",
                i = c.bitArray.bitLength(e);
            for (t = 0; t < i / 8; t++) 0 == (3 & t) && (n = e[t / 4]), r += String.fromCharCode(n >>> 8 >>> 8 >>> 8), n <<= 8;
            return decodeURIComponent(escape(r))
        },
        toBits: function(e) {
            e = unescape(encodeURIComponent(e));
            var t, n = [],
                r = 0;
            for (t = 0; t < e.length; t++) r = r << 8 | e.charCodeAt(t), 3 == (3 & t) && (n.push(r), r = 0);
            return 3 & t && n.push(c.bitArray.partial(8 * (3 & t), r)), n
        }
    }, c.codec.hex = {
        fromBits: function(e) {
            var t, n = "";
            for (t = 0; t < e.length; t++) n += ((0 | e[t]) + 0xf00000000000).toString(16).substr(4);
            return n.substr(0, c.bitArray.bitLength(e) / 4)
        },
        toBits: function(e) {
            var t, n, r = [];
            for (n = (e = e.replace(/\s|0x/g, "")).length, e += "00000000", t = 0; t < e.length; t += 8) r.push(0 ^ parseInt(e.substr(t, 8), 16));
            return c.bitArray.clamp(r, 4 * n)
        }
    }, c.codec.base32 = {
        B: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
        X: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
        BITS: 32,
        BASE: 5,
        REMAINING: 27,
        fromBits: function(e, t, n) {
            var r = c.codec.base32.BASE,
                i = c.codec.base32.REMAINING,
                o = "",
                s = 0,
                a = c.codec.base32.B,
                u = 0,
                d = c.bitArray.bitLength(e);
            for (n && (a = c.codec.base32.X), n = 0; o.length * r < d;) o += a.charAt((u ^ e[n] >>> s) >>> i), s < r ? (u = e[n] << r - s, s += i, n++) : (u <<= r, s -= r);
            for (; 7 & o.length && !t;) o += "=";
            return o
        },
        toBits: function(e, t) {
            e = e.replace(/\s|=/g, "").toUpperCase();
            var n, r, i = c.codec.base32.BITS,
                o = c.codec.base32.BASE,
                s = c.codec.base32.REMAINING,
                a = [],
                u = 0,
                d = c.codec.base32.B,
                l = 0,
                f = "base32";
            for (t && (d = c.codec.base32.X, f = "base32hex"), n = 0; n < e.length; n++) {
                if (0 > (r = d.indexOf(e.charAt(n)))) {
                    if (!t) try {
                        return c.codec.base32hex.toBits(e)
                    } catch (e) {}
                    throw new c.exception.invalid("this isn't " + f + "!")
                }
                u > s ? (u -= s, a.push(l ^ r >>> u), l = r << i - u) : (u += o, l ^= r << i - u)
            }
            return 56 & u && a.push(c.bitArray.partial(56 & u, l, 1)), a
        }
    }, c.codec.base32hex = {
        fromBits: function(e, t) {
            return c.codec.base32.fromBits(e, t, 1)
        },
        toBits: function(e) {
            return c.codec.base32.toBits(e, 1)
        }
    }, c.codec.base64 = {
        B: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        fromBits: function(e, t, n) {
            var r = "",
                i = 0,
                o = c.codec.base64.B,
                s = 0,
                a = c.bitArray.bitLength(e);
            for (n && (o = o.substr(0, 62) + "-_"), n = 0; 6 * r.length < a;) r += o.charAt((s ^ e[n] >>> i) >>> 26), 6 > i ? (s = e[n] << 6 - i, i += 26, n++) : (s <<= 6, i -= 6);
            for (; 3 & r.length && !t;) r += "=";
            return r
        },
        toBits: function(e, t) {
            e = e.replace(/\s|=/g, "");
            var n, r, i = [],
                o = 0,
                s = c.codec.base64.B,
                a = 0;
            for (t && (s = s.substr(0, 62) + "-_"), n = 0; n < e.length; n++) {
                if (0 > (r = s.indexOf(e.charAt(n)))) throw new c.exception.invalid("this isn't base64!");
                26 < o ? (o -= 26, i.push(a ^ r >>> o), a = r << 32 - o) : (o += 6, a ^= r << 32 - o)
            }
            return 56 & o && i.push(c.bitArray.partial(56 & o, a, 1)), i
        }
    }, c.codec.base64url = {
        fromBits: function(e) {
            return c.codec.base64.fromBits(e, 1, 1)
        },
        toBits: function(e) {
            return c.codec.base64.toBits(e, 1)
        }
    }, c.hash.sha256 = function(e) {
        this.b[0] || this.O(), e ? (this.F = e.F.slice(0), this.A = e.A.slice(0), this.l = e.l) : this.reset()
    }, c.hash.sha256.hash = function(e) {
        return (new c.hash.sha256).update(e).finalize()
    }, c.hash.sha256.prototype = {
        blockSize: 512,
        reset: function() {
            return this.F = this.Y.slice(0), this.A = [], this.l = 0, this
        },
        update: function(e) {
            "string" == typeof e && (e = c.codec.utf8String.toBits(e));
            var t, n = this.A = c.bitArray.concat(this.A, e);
            if (t = this.l, 9007199254740991 < (e = this.l = t + c.bitArray.bitLength(e))) throw new c.exception.invalid("Cannot hash more than 2^53 - 1 bits");
            if ("undefined" != typeof Uint32Array) {
                var r = new Uint32Array(n),
                    i = 0;
                for (t = 512 + t - (512 + t & 511); t <= e; t += 512) d(this, r.subarray(16 * i, 16 * (i + 1))), i += 1;
                n.splice(0, 16 * i)
            } else
                for (t = 512 + t - (512 + t & 511); t <= e; t += 512) d(this, n.splice(0, 16));
            return this
        },
        finalize: function() {
            var e, t = this.A,
                n = this.F,
                t = c.bitArray.concat(t, [c.bitArray.partial(1, 1)]);
            for (e = t.length + 2; 15 & e; e++) t.push(0);
            for (t.push(Math.floor(this.l / 4294967296)), t.push(0 | this.l); t.length;) d(this, t.splice(0, 16));
            return this.reset(), n
        },
        Y: [],
        b: [],
        O: function() {
            function e(e) {
                return 4294967296 * (e - Math.floor(e)) | 0
            }
            for (var t, n, r = 0, i = 2; 64 > r; i++) {
                for (t = 2, n = !0; t * t <= i; t++)
                    if (0 == i % t) {
                        n = !1;
                        break
                    } n && (8 > r && (this.Y[r] = e(Math.pow(i, .5))), this.b[r] = e(Math.pow(i, 1 / 3)), r++)
            }
        }
    }, c.mode.ccm = {
        name: "ccm",
        G: [],
        listenProgress: function(e) {
            c.mode.ccm.G.push(e)
        },
        unListenProgress: function(e) {
            -1 < (e = c.mode.ccm.G.indexOf(e)) && c.mode.ccm.G.splice(e, 1)
        },
        fa: function(e) {
            var t, n = c.mode.ccm.G.slice();
            for (t = 0; t < n.length; t += 1) n[t](e)
        },
        encrypt: function(e, t, n, r, i) {
            var o, s = t.slice(0),
                a = c.bitArray,
                u = a.bitLength(n) / 8,
                d = a.bitLength(s) / 8;
            if (i = i || 64, r = r || [], 7 > u) throw new c.exception.invalid("ccm: iv must be at least 7 bytes");
            for (o = 2; 4 > o && d >>> 8 * o; o++);
            return o < 15 - u && (o = 15 - u), n = a.clamp(n, 8 * (15 - o)), t = c.mode.ccm.V(e, t, n, r, i, o), s = c.mode.ccm.C(e, s, n, t, i, o), a.concat(s.data, s.tag)
        },
        decrypt: function(e, t, n, r, i) {
            i = i || 64, r = r || [];
            var o = c.bitArray,
                s = o.bitLength(n) / 8,
                a = o.bitLength(t),
                u = o.clamp(t, a - i),
                d = o.bitSlice(t, a - i),
                a = (a - i) / 8;
            if (7 > s) throw new c.exception.invalid("ccm: iv must be at least 7 bytes");
            for (t = 2; 4 > t && a >>> 8 * t; t++);
            if (t < 15 - s && (t = 15 - s), n = o.clamp(n, 8 * (15 - t)), u = c.mode.ccm.C(e, u, n, d, i, t), e = c.mode.ccm.V(e, u.data, n, r, i, t), !o.equal(u.tag, e)) throw new c.exception.corrupt("ccm: tag doesn't match");
            return u.data
        },
        na: function(e, t, n, r, i, o) {
            var s = [],
                a = c.bitArray,
                u = a.i;
            if (r = [a.partial(8, (t.length ? 64 : 0) | r - 2 << 2 | o - 1)], r = a.concat(r, n), r[3] |= i, r = e.encrypt(r), t.length)
                for (65279 >= (n = a.bitLength(t) / 8) ? s = [a.partial(16, n)] : 4294967295 >= n && (s = a.concat([a.partial(16, 65534)], [n])), s = a.concat(s, t), t = 0; t < s.length; t += 4) r = e.encrypt(u(r, s.slice(t, t + 4).concat([0, 0, 0])));
            return r
        },
        V: function(e, t, n, r, i, o) {
            var s = c.bitArray,
                a = s.i;
            if ((i /= 8) % 2 || 4 > i || 16 < i) throw new c.exception.invalid("ccm: invalid tag length");
            if (4294967295 < r.length || 4294967295 < t.length) throw new c.exception.bug("ccm: can't deal with 4GiB or more data");
            for (n = c.mode.ccm.na(e, r, n, i, s.bitLength(t) / 8, o), r = 0; r < t.length; r += 4) n = e.encrypt(a(n, t.slice(r, r + 4).concat([0, 0, 0])));
            return s.clamp(n, 8 * i)
        },
        C: function(e, t, n, r, i, o) {
            var s, a = c.bitArray;
            s = a.i;
            var u = t.length,
                d = a.bitLength(t),
                l = u / 50,
                f = l;
            if (n = a.concat([a.partial(8, o - 1)], n).concat([0, 0, 0]).slice(0, 4), r = a.bitSlice(s(r, e.encrypt(n)), 0, i), !u) return {
                tag: r,
                data: []
            };
            for (s = 0; s < u; s += 4) s > l && (c.mode.ccm.fa(s / u), l += f), n[3]++, i = e.encrypt(n), t[s] ^= i[0], t[s + 1] ^= i[1], t[s + 2] ^= i[2], t[s + 3] ^= i[3];
            return {
                tag: r,
                data: a.clamp(t, d)
            }
        }
    }, c.mode.ocb2 = {
        name: "ocb2",
        encrypt: function(e, t, n, r, i, o) {
            if (128 !== c.bitArray.bitLength(n)) throw new c.exception.invalid("ocb iv must be 128 bits");
            var s, a = c.mode.ocb2.S,
                u = c.bitArray,
                d = u.i,
                l = [0, 0, 0, 0];
            n = a(e.encrypt(n));
            var f, p = [];
            for (s = 0, r = r || [], i = i || 64; s + 4 < t.length; s += 4) l = d(l, f = t.slice(s, s + 4)), p = p.concat(d(n, e.encrypt(d(n, f)))), n = a(n);
            return f = t.slice(s), t = u.bitLength(f), s = e.encrypt(d(n, [0, 0, 0, t])), f = u.clamp(d(f.concat([0, 0, 0]), s), t), l = d(l, d(f.concat([0, 0, 0]), s)), l = e.encrypt(d(l, d(n, a(n)))), r.length && (l = d(l, o ? r : c.mode.ocb2.pmac(e, r))), p.concat(u.concat(f, u.clamp(l, i)))
        },
        decrypt: function(e, t, n, r, i, o) {
            if (128 !== c.bitArray.bitLength(n)) throw new c.exception.invalid("ocb iv must be 128 bits");
            i = i || 64;
            var s, a, u = c.mode.ocb2.S,
                d = c.bitArray,
                l = d.i,
                f = [0, 0, 0, 0],
                p = u(e.encrypt(n)),
                h = c.bitArray.bitLength(t) - i,
                v = [];
            for (n = 0, r = r || []; n + 4 < h / 32; n += 4) s = l(p, e.decrypt(l(p, t.slice(n, n + 4)))), f = l(f, s), v = v.concat(s), p = u(p);
            if (a = h - 32 * n, s = e.encrypt(l(p, [0, 0, 0, a])), s = l(s, d.clamp(t.slice(n), a).concat([0, 0, 0])), f = l(f, s), f = e.encrypt(l(f, l(p, u(p)))), r.length && (f = l(f, o ? r : c.mode.ocb2.pmac(e, r))), !d.equal(d.clamp(f, i), d.bitSlice(t, h))) throw new c.exception.corrupt("ocb: tag doesn't match");
            return v.concat(d.clamp(s, a))
        },
        pmac: function(e, t) {
            var n, r = c.mode.ocb2.S,
                i = c.bitArray,
                o = i.i,
                s = [0, 0, 0, 0],
                a = e.encrypt([0, 0, 0, 0]),
                a = o(a, r(r(a)));
            for (n = 0; n + 4 < t.length; n += 4) a = r(a), s = o(s, e.encrypt(o(a, t.slice(n, n + 4))));
            return n = t.slice(n), 128 > i.bitLength(n) && (a = o(a, r(a)), n = i.concat(n, [-2147483648, 0, 0, 0])), s = o(s, n), e.encrypt(o(r(o(a, r(a))), s))
        },
        S: function(e) {
            return [e[0] << 1 ^ e[1] >>> 31, e[1] << 1 ^ e[2] >>> 31, e[2] << 1 ^ e[3] >>> 31, e[3] << 1 ^ 135 * (e[0] >>> 31)]
        }
    }, c.mode.gcm = {
        name: "gcm",
        encrypt: function(e, t, n, r, i) {
            var o = t.slice(0);
            return t = c.bitArray, r = r || [], e = c.mode.gcm.C(!0, e, o, r, n, i || 128), t.concat(e.data, e.tag)
        },
        decrypt: function(e, t, n, r, i) {
            var o = t.slice(0),
                s = c.bitArray,
                a = s.bitLength(o);
            if (r = r || [], (i = i || 128) <= a ? (t = s.bitSlice(o, a - i), o = s.bitSlice(o, 0, a - i)) : (t = o, o = []), e = c.mode.gcm.C(!1, e, o, r, n, i), !s.equal(e.tag, t)) throw new c.exception.corrupt("gcm: tag doesn't match");
            return e.data
        },
        ka: function(e, t) {
            var n, r, i, o, s, a = c.bitArray.i;
            for (n = 0, i = [0, 0, 0, 0], o = t.slice(0); 128 > n; n++) {
                for ((r = 0 != (e[Math.floor(n / 32)] & 1 << 31 - n % 32)) && (i = a(i, o)), s = 0 != (1 & o[3]), r = 3; 0 < r; r--) o[r] = o[r] >>> 1 | (1 & o[r - 1]) << 31;
                o[0] >>>= 1, s && (o[0] ^= -520093696)
            }
            return i
        },
        j: function(e, t, n) {
            var r, i = n.length;
            for (r = 0, t = t.slice(0); r < i; r += 4) t[0] ^= 4294967295 & n[r], t[1] ^= 4294967295 & n[r + 1], t[2] ^= 4294967295 & n[r + 2], t[3] ^= 4294967295 & n[r + 3], t = c.mode.gcm.ka(t, e);
            return t
        },
        C: function(e, t, n, r, i, o) {
            var s, a, u, d, l, f, p, h, v = c.bitArray;
            for (f = n.length, p = v.bitLength(n), h = v.bitLength(r), a = v.bitLength(i), s = t.encrypt([0, 0, 0, 0]), 96 === a ? (i = i.slice(0), i = v.concat(i, [1])) : (i = c.mode.gcm.j(s, [0, 0, 0, 0], i), i = c.mode.gcm.j(s, i, [0, 0, Math.floor(a / 4294967296), 4294967295 & a])), a = c.mode.gcm.j(s, [0, 0, 0, 0], r), l = i.slice(0), r = a.slice(0), e || (r = c.mode.gcm.j(s, a, n)), d = 0; d < f; d += 4) l[3]++, u = t.encrypt(l), n[d] ^= u[0], n[d + 1] ^= u[1], n[d + 2] ^= u[2], n[d + 3] ^= u[3];
            return n = v.clamp(n, p), e && (r = c.mode.gcm.j(s, a, n)), e = [Math.floor(h / 4294967296), 4294967295 & h, Math.floor(p / 4294967296), 4294967295 & p], r = c.mode.gcm.j(s, r, e), u = t.encrypt(i), r[0] ^= u[0], r[1] ^= u[1], r[2] ^= u[2], r[3] ^= u[3], {
                tag: v.bitSlice(r, 0, o),
                data: n
            }
        }
    }, c.misc.hmac = function(e, t) {
        this.W = t = t || c.hash.sha256;
        var n, r = [
                [],
                []
            ],
            i = t.prototype.blockSize / 32;
        for (this.w = [new t, new t], e.length > i && (e = t.hash(e)), n = 0; n < i; n++) r[0][n] = 909522486 ^ e[n], r[1][n] = 1549556828 ^ e[n];
        this.w[0].update(r[0]), this.w[1].update(r[1]), this.R = new t(this.w[0])
    }, c.misc.hmac.prototype.encrypt = c.misc.hmac.prototype.mac = function(e) {
        if (this.aa) throw new c.exception.invalid("encrypt on already updated hmac called!");
        return this.update(e), this.digest(e)
    }, c.misc.hmac.prototype.reset = function() {
        this.R = new this.W(this.w[0]), this.aa = !1
    }, c.misc.hmac.prototype.update = function(e) {
        this.aa = !0, this.R.update(e)
    }, c.misc.hmac.prototype.digest = function() {
        var e = this.R.finalize(),
            e = new this.W(this.w[1]).update(e).finalize();
        return this.reset(), e
    }, c.misc.pbkdf2 = function(e, t, n, r, i) {
        if (n = n || 1e4, 0 > r || 0 > n) throw new c.exception.invalid("invalid params to pbkdf2");
        "string" == typeof e && (e = c.codec.utf8String.toBits(e)), "string" == typeof t && (t = c.codec.utf8String.toBits(t)), e = new(i = i || c.misc.hmac)(e);
        var o, s, a, u, d = [],
            l = c.bitArray;
        for (u = 1; 32 * d.length < (r || 1); u++) {
            for (s = 1, i = o = e.encrypt(l.concat(t, [u])); s < n; s++)
                for (o = e.encrypt(o), a = 0; a < o.length; a++) i[a] ^= o[a];
            d = d.concat(i)
        }
        return r && (d = l.clamp(d, r)), d
    }, c.prng = function(e) {
        this.c = [new c.hash.sha256], this.m = [0], this.P = 0, this.H = {}, this.N = 0, this.U = {}, this.Z = this.f = this.o = this.ha = 0, this.b = [0, 0, 0, 0, 0, 0, 0, 0], this.h = [0, 0, 0, 0], this.L = void 0, this.M = e, this.D = !1, this.K = {
            progress: {},
            seeded: {}
        }, this.u = this.ga = 0, this.I = 1, this.J = 2, this.ca = 65536, this.T = [0, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024], this.da = 3e4, this.ba = 80
    }, c.prng.prototype = {
        randomWords: function(e, t) {
            var n, r = [];
            if ((n = this.isReady(t)) === this.u) throw new c.exception.notReady("generator isn't seeded");
            if (n & this.J) {
                n = !(n & this.I), i = [];
                var i, o, s = 0;
                for (o = 0, this.Z = i[0] = (new Date).valueOf() + this.da; 16 > o; o++) i.push(4294967296 * Math.random() | 0);
                for (o = 0; o < this.c.length && (i = i.concat(this.c[o].finalize()), s += this.m[o], this.m[o] = 0, n || !(this.P & 1 << o)); o++);
                for (this.P >= 1 << this.c.length && (this.c.push(new c.hash.sha256), this.m.push(0)), this.f -= s, s > this.o && (this.o = s), this.P++, this.b = c.hash.sha256.hash(this.b.concat(i)), this.L = new c.cipher.aes(this.b), n = 0; 4 > n && (this.h[n] = this.h[n] + 1 | 0, !this.h[n]); n++);
            }
            for (n = 0; n < e; n += 4) 0 == (n + 1) % this.ca && p(this), r.push((i = h(this))[0], i[1], i[2], i[3]);
            return p(this), r.slice(0, e)
        },
        setDefaultParanoia: function(e, t) {
            if (0 === e && "Setting paranoia=0 will ruin your security; use it only for testing" !== t) throw new c.exception.invalid("Setting paranoia=0 will ruin your security; use it only for testing");
            this.M = e
        },
        addEntropy: function(e, t, n) {
            n = n || "user";
            var r, i, o = (new Date).valueOf(),
                s = this.H[n],
                a = this.isReady(),
                u = 0;
            switch (void 0 === (r = this.U[n]) && (r = this.U[n] = this.ha++), void 0 === s && (s = this.H[n] = 0), this.H[n] = (this.H[n] + 1) % this.c.length, typeof e) {
                case "number":
                    void 0 === t && (t = 1), this.c[s].update([r, this.N++, 1, t, o, 1, 0 | e]);
                    break;
                case "object":
                    if ("[object Uint32Array]" === (n = Object.prototype.toString.call(e))) {
                        for (n = 0, i = []; n < e.length; n++) i.push(e[n]);
                        e = i
                    } else
                        for ("[object Array]" !== n && (u = 1), n = 0; n < e.length && !u; n++) "number" != typeof e[n] && (u = 1);
                    if (!u) {
                        if (void 0 === t)
                            for (n = t = 0; n < e.length; n++)
                                for (i = e[n]; 0 < i;) t++, i >>>= 1;
                        this.c[s].update([r, this.N++, 2, t, o, e.length].concat(e))
                    }
                    break;
                case "string":
                    void 0 === t && (t = e.length), this.c[s].update([r, this.N++, 3, t, o, e.length]), this.c[s].update(e);
                    break;
                default:
                    u = 1
            }
            if (u) throw new c.exception.bug("random: addEntropy only supports number, array of numbers or string");
            this.m[s] += t, this.f += t, a === this.u && (this.isReady() !== this.u && l("seeded", Math.max(this.o, this.f)), l("progress", this.getProgress()))
        },
        isReady: function(e) {
            return e = this.T[void 0 !== e ? e : this.M], this.o && this.o >= e ? this.m[0] > this.ba && (new Date).valueOf() > this.Z ? this.J | this.I : this.I : this.f >= e ? this.J | this.u : this.u
        },
        getProgress: function(e) {
            return e = this.T[e || this.M], this.o >= e ? 1 : this.f > e ? 1 : this.f / e
        },
        startCollectors: function() {
            if (!this.D) {
                if (this.a = {
                        loadTimeCollector: v(this, this.ma),
                        mouseCollector: v(this, this.oa),
                        keyboardCollector: v(this, this.la),
                        accelerometerCollector: v(this, this.ea),
                        touchCollector: v(this, this.qa)
                    }, window.addEventListener) window.addEventListener("load", this.a.loadTimeCollector, !1), window.addEventListener("mousemove", this.a.mouseCollector, !1), window.addEventListener("keypress", this.a.keyboardCollector, !1), window.addEventListener("devicemotion", this.a.accelerometerCollector, !1), window.addEventListener("touchmove", this.a.touchCollector, !1);
                else if (document.attachEvent) document.attachEvent("onload", this.a.loadTimeCollector), document.attachEvent("onmousemove", this.a.mouseCollector), document.attachEvent("keypress", this.a.keyboardCollector);
                else throw new c.exception.bug("can't attach event");
                this.D = !0
            }
        },
        stopCollectors: function() {
            this.D && (window.removeEventListener ? (window.removeEventListener("load", this.a.loadTimeCollector, !1), window.removeEventListener("mousemove", this.a.mouseCollector, !1), window.removeEventListener("keypress", this.a.keyboardCollector, !1), window.removeEventListener("devicemotion", this.a.accelerometerCollector, !1), window.removeEventListener("touchmove", this.a.touchCollector, !1)) : document.detachEvent && (document.detachEvent("onload", this.a.loadTimeCollector), document.detachEvent("onmousemove", this.a.mouseCollector), document.detachEvent("keypress", this.a.keyboardCollector)), this.D = !1)
        },
        addEventListener: function(e, t) {
            this.K[e][this.ga++] = t
        },
        removeEventListener: function(e, t) {
            var n, r, i = this.K[e],
                o = [];
            for (r in i) i.hasOwnProperty(r) && i[r] === t && o.push(r);
            for (n = 0; n < o.length; n++) r = o[n], delete i[r]
        },
        la: function() {
            f(this, 1)
        },
        oa: function(e) {
            var t, n;
            try {
                t = e.x || e.clientX || e.offsetX || 0, n = e.y || e.clientY || e.offsetY || 0
            } catch (e) {
                n = t = 0
            }
            0 != t && 0 != n && this.addEntropy([t, n], 2, "mouse"), f(this, 0)
        },
        qa: function(e) {
            e = e.touches[0] || e.changedTouches[0], this.addEntropy([e.pageX || e.clientX, e.pageY || e.clientY], 1, "touch"), f(this, 0)
        },
        ma: function() {
            f(this, 2)
        },
        ea: function(e) {
            if (e = e.accelerationIncludingGravity.x || e.accelerationIncludingGravity.y || e.accelerationIncludingGravity.z, window.orientation) {
                var t = window.orientation;
                "number" == typeof t && this.addEntropy(t, 1, "accelerometer")
            }
            e && this.addEntropy(e, 2, "accelerometer"), f(this, 0)
        }
    }, c.random = new c.prng(6);
    r: try {
        if (s = void 0 !== e && e.exports) {
            try {
                a = n("919886")
            } catch (e) {
                a = null
            }
            s = i = a
        }
        if (s && i.randomBytes) r = i.randomBytes(128), r = new Uint32Array(new Uint8Array(r).buffer), c.random.addEntropy(r, 1024, "crypto['randomBytes']");
        else if ("undefined" != typeof window && "undefined" != typeof Uint32Array) {
            if (o = new Uint32Array(32), window.crypto && window.crypto.getRandomValues) window.crypto.getRandomValues(o);
            else if (window.msCrypto && window.msCrypto.getRandomValues) window.msCrypto.getRandomValues(o);
            else break r;
            c.random.addEntropy(o, 1024, "crypto['getRandomValues']")
        }
    } catch (e) {
        "undefined" != typeof window && window.console && (console.log("There was an error collecting entropy from the browser:"), console.log(e))
    }
    c.json = {
        defaults: {
            v: 1,
            iter: 1e4,
            ks: 128,
            ts: 64,
            mode: "ccm",
            adata: "",
            cipher: "aes"
        },
        ja: function(e, t, n, r) {
            n = n || {}, r = r || {};
            var i, o = c.json,
                s = o.g({
                    iv: c.random.randomWords(4, 0)
                }, o.defaults);
            if (o.g(s, n), n = s.adata, "string" == typeof s.salt && (s.salt = c.codec.base64.toBits(s.salt)), "string" == typeof s.iv && (s.iv = c.codec.base64.toBits(s.iv)), !c.mode[s.mode] || !c.cipher[s.cipher] || "string" == typeof e && 100 >= s.iter || 64 !== s.ts && 96 !== s.ts && 128 !== s.ts || 128 !== s.ks && 192 !== s.ks && 256 !== s.ks || 2 > s.iv.length || 4 < s.iv.length) throw new c.exception.invalid("json encrypt: invalid parameters");
            return "string" == typeof e ? (e = (i = c.misc.cachedPbkdf2(e, s)).key.slice(0, s.ks / 32), s.salt = i.salt) : c.ecc && e instanceof c.ecc.elGamal.publicKey && (i = e.kem(), s.kemtag = i.tag, e = i.key.slice(0, s.ks / 32)), "string" == typeof t && (t = c.codec.utf8String.toBits(t)), "string" == typeof n && (s.adata = n = c.codec.utf8String.toBits(n)), i = new c.cipher[s.cipher](e), o.g(r, s), r.key = e, s.ct = "ccm" === s.mode && c.arrayBuffer && c.arrayBuffer.ccm && t instanceof ArrayBuffer ? c.arrayBuffer.ccm.encrypt(i, t, s.iv, n, s.ts) : c.mode[s.mode].encrypt(i, t, s.iv, n, s.ts), s
        },
        encrypt: function(e, t, n, r) {
            var i = c.json,
                o = i.ja.apply(i, arguments);
            return i.encode(o)
        },
        ia: function(e, t, n, r) {
            n = n || {}, r = r || {};
            var i, o, s = c.json;
            if (i = (t = s.g(s.g(s.g({}, s.defaults), t), n, !0)).adata, "string" == typeof t.salt && (t.salt = c.codec.base64.toBits(t.salt)), "string" == typeof t.iv && (t.iv = c.codec.base64.toBits(t.iv)), !c.mode[t.mode] || !c.cipher[t.cipher] || "string" == typeof e && 100 >= t.iter || 64 !== t.ts && 96 !== t.ts && 128 !== t.ts || 128 !== t.ks && 192 !== t.ks && 256 !== t.ks || !t.iv || 2 > t.iv.length || 4 < t.iv.length) throw new c.exception.invalid("json decrypt: invalid parameters");
            return "string" == typeof e ? (e = (o = c.misc.cachedPbkdf2(e, t)).key.slice(0, t.ks / 32), t.salt = o.salt) : c.ecc && e instanceof c.ecc.elGamal.secretKey && (e = e.unkem(c.codec.base64.toBits(t.kemtag)).slice(0, t.ks / 32)), "string" == typeof i && (i = c.codec.utf8String.toBits(i)), o = new c.cipher[t.cipher](e), i = "ccm" === t.mode && c.arrayBuffer && c.arrayBuffer.ccm && t.ct instanceof ArrayBuffer ? c.arrayBuffer.ccm.decrypt(o, t.ct, t.iv, t.tag, i, t.ts) : c.mode[t.mode].decrypt(o, t.ct, t.iv, i, t.ts), s.g(r, t), r.key = e, 1 === n.raw ? i : c.codec.utf8String.fromBits(i)
        },
        decrypt: function(e, t, n, r) {
            var i = c.json;
            return i.ia(e, i.decode(t), n, r)
        },
        encode: function(e) {
            var t, n = "{",
                r = "";
            for (t in e)
                if (e.hasOwnProperty(t)) {
                    if (!t.match(/^[a-z0-9]+$/i)) throw new c.exception.invalid("json encode: invalid property name");
                    switch (n += r + '"' + t + '":', r = ",", typeof e[t]) {
                        case "number":
                        case "boolean":
                            n += e[t];
                            break;
                        case "string":
                            n += '"' + escape(e[t]) + '"';
                            break;
                        case "object":
                            n += '"' + c.codec.base64.fromBits(e[t], 0) + '"';
                            break;
                        default:
                            throw new c.exception.bug("json encode: unsupported type")
                    }
                } return n + "}"
        },
        decode: function(e) {
            if (!(e = e.replace(/\s/g, "")).match(/^\{.*\}$/)) throw new c.exception.invalid("json decode: this isn't json!");
            e = e.replace(/^\{|\}$/g, "").split(/,/);
            var t, n, r = {};
            for (t = 0; t < e.length; t++) {
                if (!(n = e[t].match(/^\s*(?:(["']?)([a-z][a-z0-9]*)\1)\s*:\s*(?:(-?\d+)|"([a-z0-9+\/%*_.@=\-]*)"|(true|false))$/i))) throw new c.exception.invalid("json decode: this isn't json!");
                null != n[3] ? r[n[2]] = parseInt(n[3], 10) : null != n[4] ? r[n[2]] = n[2].match(/^(ct|adata|salt|iv)$/) ? c.codec.base64.toBits(n[4]) : unescape(n[4]) : null != n[5] && (r[n[2]] = "true" === n[5])
            }
            return r
        },
        g: function(e, t, n) {
            if (void 0 === e && (e = {}), void 0 === t) return e;
            for (var r in t)
                if (t.hasOwnProperty(r)) {
                    if (n && void 0 !== e[r] && e[r] !== t[r]) throw new c.exception.invalid("required parameter overridden");
                    e[r] = t[r]
                } return e
        },
        sa: function(e, t) {
            var n, r = {};
            for (n in e) e.hasOwnProperty(n) && e[n] !== t[n] && (r[n] = e[n]);
            return r
        },
        ra: function(e, t) {
            var n, r = {};
            for (n = 0; n < t.length; n++) void 0 !== e[t[n]] && (r[t[n]] = e[t[n]]);
            return r
        }
    }, c.encrypt = c.json.encrypt, c.decrypt = c.json.decrypt, c.misc.pa = {}, c.misc.cachedPbkdf2 = function(e, t) {
        var n, r = c.misc.pa;
        return n = (t = t || {}).iter || 1e3, n = (r = r[e] = r[e] || {})[n] = r[n] || {
            firstSalt: t.salt && t.salt.length ? t.salt.slice(0) : c.random.randomWords(2, 0)
        }, r = void 0 === t.salt ? n.firstSalt : t.salt, n[r] = n[r] || c.misc.pbkdf2(e, r, t.iter), {
            key: n[r].slice(0),
            salt: r.slice(0)
        }
    }, void 0 !== e && e.exports && (e.exports = c), "function" == typeof define && define([], function() {
        return c
    })
}