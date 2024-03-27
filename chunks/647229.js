function(e, t, n) {
    "use strict";
    var r, i, a, o, s, u = {
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

    function c(e, t, n) {
        if (4 !== t.length) throw new u.exception.invalid("invalid aes block size");
        var r = e.b[n],
            i = t[0] ^ r[0],
            a = t[n ? 3 : 1] ^ r[1],
            o = t[2] ^ r[2];
        t = t[n ? 1 : 3] ^ r[3];
        var s, c, l, d, f = r.length / 4 - 2,
            p = 4,
            h = [0, 0, 0, 0];
        e = (s = e.s[n])[0];
        var m = s[1],
            g = s[2],
            _ = s[3],
            b = s[4];
        for (d = 0; d < f; d++) s = e[i >>> 24] ^ m[a >> 16 & 255] ^ g[o >> 8 & 255] ^ _[255 & t] ^ r[p], c = e[a >>> 24] ^ m[o >> 16 & 255] ^ g[t >> 8 & 255] ^ _[255 & i] ^ r[p + 1], l = e[o >>> 24] ^ m[t >> 16 & 255] ^ g[i >> 8 & 255] ^ _[255 & a] ^ r[p + 2], t = e[t >>> 24] ^ m[i >> 16 & 255] ^ g[a >> 8 & 255] ^ _[255 & o] ^ r[p + 3], p += 4, i = s, a = c, o = l;
        for (d = 0; 4 > d; d++) h[n ? 3 & -d : d] = b[i >>> 24] << 24 ^ b[a >> 16 & 255] << 16 ^ b[o >> 8 & 255] << 8 ^ b[255 & t] ^ r[p++], s = i, i = a, a = o, o = t, t = s;
        return h
    }

    function l(e, t) {
        var n, r, i, a = e.F,
            o = e.b,
            s = a[0],
            u = a[1],
            c = a[2],
            l = a[3],
            d = a[4],
            f = a[5],
            p = a[6],
            h = a[7];
        for (n = 0; 64 > n; n++) 16 > n ? r = t[n] : (r = t[n + 1 & 15], i = t[n + 14 & 15], r = t[15 & n] = (r >>> 7 ^ r >>> 18 ^ r >>> 3 ^ r << 25 ^ r << 14) + (i >>> 17 ^ i >>> 19 ^ i >>> 10 ^ i << 15 ^ i << 13) + t[15 & n] + t[n + 9 & 15] | 0), r = r + h + (d >>> 6 ^ d >>> 11 ^ d >>> 25 ^ d << 26 ^ d << 21 ^ d << 7) + (p ^ d & (f ^ p)) + o[n], h = p, p = f, f = d, d = l + r | 0, l = c, c = u, s = r + ((u = s) & c ^ l & (u ^ c)) + (u >>> 2 ^ u >>> 13 ^ u >>> 22 ^ u << 30 ^ u << 19 ^ u << 10) | 0;
        a[0] = a[0] + s | 0, a[1] = a[1] + u | 0, a[2] = a[2] + c | 0, a[3] = a[3] + l | 0, a[4] = a[4] + d | 0, a[5] = a[5] + f | 0, a[6] = a[6] + p | 0, a[7] = a[7] + h | 0
    }

    function d(e, t) {
        var n, r = u.random.K[e],
            i = [];
        for (n in r) r.hasOwnProperty(n) && i.push(r[n]);
        for (n = 0; n < i.length; n++) i[n](t)
    }

    function f(e, t) {
        "undefined" != typeof window && window.performance && "function" == typeof window.performance.now ? e.addEntropy(window.performance.now(), t, "loadtime") : e.addEntropy((new Date).valueOf(), t, "loadtime")
    }

    function p(e) {
        e.b = h(e).concat(h(e)), e.L = new u.cipher.aes(e.b)
    }

    function h(e) {
        for (var t = 0; 4 > t && (e.h[t] = e.h[t] + 1 | 0, !e.h[t]); t++);
        return e.L.encrypt(e.h)
    }

    function m(e, t) {
        return function() {
            t.apply(e, arguments)
        }
    }
    u.cipher.aes = function(e) {
        this.s[0][0][0] || this.O();
        var t, n, r, i, a = this.s[0][4],
            o = this.s[1];
        t = e.length;
        var s = 1;
        if (4 !== t && 6 !== t && 8 !== t) throw new u.exception.invalid("invalid aes key size");
        for (this.b = [r = e.slice(0), i = []], e = t; e < 4 * t + 28; e++) n = r[e - 1], (0 == e % t || 8 === t && 4 == e % t) && (n = a[n >>> 24] << 24 ^ a[n >> 16 & 255] << 16 ^ a[n >> 8 & 255] << 8 ^ a[255 & n], 0 == e % t && (n = n << 8 ^ n >>> 24 ^ s << 24, s = s << 1 ^ 283 * (s >> 7))), r[e] = r[e - t] ^ n;
        for (t = 0; e; t++, e--) n = r[3 & t ? e : e - 4], i[t] = 4 >= e || 4 > t ? n : o[0][a[n >>> 24]] ^ o[1][a[n >> 16 & 255]] ^ o[2][a[n >> 8 & 255]] ^ o[3][a[255 & n]]
    }, u.cipher.aes.prototype = {
        encrypt: function(e) {
            return c(this, e, 0)
        },
        decrypt: function(e) {
            return c(this, e, 1)
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
            var e, t, n, r, i, a, o, s = this.s[0],
                u = this.s[1],
                c = s[4],
                l = u[4],
                d = [],
                f = [];
            for (e = 0; 256 > e; e++) f[(d[e] = e << 1 ^ 283 * (e >> 7)) ^ e] = e;
            for (t = n = 0; !c[t]; t ^= r || 1, n = f[n] || 1)
                for (a = (a = n ^ n << 1 ^ n << 2 ^ n << 3 ^ n << 4) >> 8 ^ 255 & a ^ 99, c[t] = a, l[a] = t, o = 16843009 * (i = d[e = d[r = d[t]]]) ^ 65537 * e ^ 257 * r ^ 16843008 * t, i = 257 * d[a] ^ 16843008 * a, e = 0; 4 > e; e++) s[e][t] = i = i << 24 ^ i >>> 8, u[e][a] = o = o << 24 ^ o >>> 8;
            for (e = 0; 5 > e; e++) s[e] = s[e].slice(0), u[e] = u[e].slice(0)
        }
    }, u.bitArray = {
        bitSlice: function(e, t, n) {
            return e = u.bitArray.$(e.slice(t / 32), 32 - (31 & t)).slice(1), void 0 === n ? e : u.bitArray.clamp(e, n - t)
        },
        extract: function(e, t, n) {
            var r = Math.floor(-t - n & 31);
            return ((t + n - 1 ^ t) & -32 ? e[t / 32 | 0] << 32 - r ^ e[t / 32 + 1 | 0] >>> r : e[t / 32 | 0] >>> r) & (1 << n) - 1
        },
        concat: function(e, t) {
            if (0 === e.length || 0 === t.length) return e.concat(t);
            var n = e[e.length - 1],
                r = u.bitArray.getPartial(n);
            return 32 === r ? e.concat(t) : u.bitArray.$(t, r, 0 | n, e.slice(0, e.length - 1))
        },
        bitLength: function(e) {
            var t = e.length;
            return 0 === t ? 0 : 32 * (t - 1) + u.bitArray.getPartial(e[t - 1])
        },
        clamp: function(e, t) {
            if (32 * e.length < t) return e;
            var n = (e = e.slice(0, Math.ceil(t / 32))).length;
            return t &= 31, 0 < n && t && (e[n - 1] = u.bitArray.partial(t, e[n - 1] & 2147483648 >> t - 1, 1)), e
        },
        partial: function(e, t, n) {
            return 32 === e ? t : (n ? 0 | t : t << 32 - e) + 1099511627776 * e
        },
        getPartial: function(e) {
            return Math.round(e / 1099511627776) || 32
        },
        equal: function(e, t) {
            if (u.bitArray.bitLength(e) !== u.bitArray.bitLength(t)) return !1;
            var n, r = 0;
            for (n = 0; n < e.length; n++) r |= e[n] ^ t[n];
            return 0 === r
        },
        $: function(e, t, n, r) {
            var i;
            for (i = 0, void 0 === r && (r = []); 32 <= t; t -= 32) r.push(n), n = 0;
            if (0 === t) return r.concat(e);
            for (i = 0; i < e.length; i++) r.push(n | e[i] >>> t), n = e[i] << 32 - t;
            return i = e.length ? e[e.length - 1] : 0, e = u.bitArray.getPartial(i), r.push(u.bitArray.partial(t + e & 31, 32 < t + e ? n : r.pop(), 1)), r
        },
        i: function(e, t) {
            return [e[0] ^ t[0], e[1] ^ t[1], e[2] ^ t[2], e[3] ^ t[3]]
        },
        byteswapM: function(e) {
            var t, n;
            for (t = 0; t < e.length; ++t) n = e[t], e[t] = n >>> 24 | n >>> 8 & 65280 | (65280 & n) << 8 | n << 24;
            return e
        }
    }, u.codec.utf8String = {
        fromBits: function(e) {
            var t, n, r = "",
                i = u.bitArray.bitLength(e);
            for (t = 0; t < i / 8; t++) 0 == (3 & t) && (n = e[t / 4]), r += String.fromCharCode(n >>> 8 >>> 8 >>> 8), n <<= 8;
            return decodeURIComponent(escape(r))
        },
        toBits: function(e) {
            e = unescape(encodeURIComponent(e));
            var t, n = [],
                r = 0;
            for (t = 0; t < e.length; t++) r = r << 8 | e.charCodeAt(t), 3 == (3 & t) && (n.push(r), r = 0);
            return 3 & t && n.push(u.bitArray.partial(8 * (3 & t), r)), n
        }
    }, u.codec.hex = {
        fromBits: function(e) {
            var t, n = "";
            for (t = 0; t < e.length; t++) n += ((0 | e[t]) + 0xf00000000000).toString(16).substr(4);
            return n.substr(0, u.bitArray.bitLength(e) / 4)
        },
        toBits: function(e) {
            var t, n, r = [];
            for (n = (e = e.replace(/\s|0x/g, "")).length, e += "00000000", t = 0; t < e.length; t += 8) r.push(0 ^ parseInt(e.substr(t, 8), 16));
            return u.bitArray.clamp(r, 4 * n)
        }
    }, u.codec.base32 = {
        B: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
        X: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
        BITS: 32,
        BASE: 5,
        REMAINING: 27,
        fromBits: function(e, t, n) {
            var r = u.codec.base32.BASE,
                i = u.codec.base32.REMAINING,
                a = "",
                o = 0,
                s = u.codec.base32.B,
                c = 0,
                l = u.bitArray.bitLength(e);
            for (n && (s = u.codec.base32.X), n = 0; a.length * r < l;) a += s.charAt((c ^ e[n] >>> o) >>> i), o < r ? (c = e[n] << r - o, o += i, n++) : (c <<= r, o -= r);
            for (; 7 & a.length && !t;) a += "=";
            return a
        },
        toBits: function(e, t) {
            e = e.replace(/\s|=/g, "").toUpperCase();
            var n, r, i = u.codec.base32.BITS,
                a = u.codec.base32.BASE,
                o = u.codec.base32.REMAINING,
                s = [],
                c = 0,
                l = u.codec.base32.B,
                d = 0,
                f = "base32";
            for (t && (l = u.codec.base32.X, f = "base32hex"), n = 0; n < e.length; n++) {
                if (0 > (r = l.indexOf(e.charAt(n)))) {
                    if (!t) try {
                        return u.codec.base32hex.toBits(e)
                    } catch (e) {}
                    throw new u.exception.invalid("this isn't " + f + "!")
                }
                c > o ? (c -= o, s.push(d ^ r >>> c), d = r << i - c) : (c += a, d ^= r << i - c)
            }
            return 56 & c && s.push(u.bitArray.partial(56 & c, d, 1)), s
        }
    }, u.codec.base32hex = {
        fromBits: function(e, t) {
            return u.codec.base32.fromBits(e, t, 1)
        },
        toBits: function(e) {
            return u.codec.base32.toBits(e, 1)
        }
    }, u.codec.base64 = {
        B: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        fromBits: function(e, t, n) {
            var r = "",
                i = 0,
                a = u.codec.base64.B,
                o = 0,
                s = u.bitArray.bitLength(e);
            for (n && (a = a.substr(0, 62) + "-_"), n = 0; 6 * r.length < s;) r += a.charAt((o ^ e[n] >>> i) >>> 26), 6 > i ? (o = e[n] << 6 - i, i += 26, n++) : (o <<= 6, i -= 6);
            for (; 3 & r.length && !t;) r += "=";
            return r
        },
        toBits: function(e, t) {
            e = e.replace(/\s|=/g, "");
            var n, r, i = [],
                a = 0,
                o = u.codec.base64.B,
                s = 0;
            for (t && (o = o.substr(0, 62) + "-_"), n = 0; n < e.length; n++) {
                if (0 > (r = o.indexOf(e.charAt(n)))) throw new u.exception.invalid("this isn't base64!");
                26 < a ? (a -= 26, i.push(s ^ r >>> a), s = r << 32 - a) : (a += 6, s ^= r << 32 - a)
            }
            return 56 & a && i.push(u.bitArray.partial(56 & a, s, 1)), i
        }
    }, u.codec.base64url = {
        fromBits: function(e) {
            return u.codec.base64.fromBits(e, 1, 1)
        },
        toBits: function(e) {
            return u.codec.base64.toBits(e, 1)
        }
    }, u.hash.sha256 = function(e) {
        this.b[0] || this.O(), e ? (this.F = e.F.slice(0), this.A = e.A.slice(0), this.l = e.l) : this.reset()
    }, u.hash.sha256.hash = function(e) {
        return (new u.hash.sha256).update(e).finalize()
    }, u.hash.sha256.prototype = {
        blockSize: 512,
        reset: function() {
            return this.F = this.Y.slice(0), this.A = [], this.l = 0, this
        },
        update: function(e) {
            "string" == typeof e && (e = u.codec.utf8String.toBits(e));
            var t, n = this.A = u.bitArray.concat(this.A, e);
            if (t = this.l, 9007199254740991 < (e = this.l = t + u.bitArray.bitLength(e))) throw new u.exception.invalid("Cannot hash more than 2^53 - 1 bits");
            if ("undefined" != typeof Uint32Array) {
                var r = new Uint32Array(n),
                    i = 0;
                for (t = 512 + t - (512 + t & 511); t <= e; t += 512) l(this, r.subarray(16 * i, 16 * (i + 1))), i += 1;
                n.splice(0, 16 * i)
            } else
                for (t = 512 + t - (512 + t & 511); t <= e; t += 512) l(this, n.splice(0, 16));
            return this
        },
        finalize: function() {
            var e, t = this.A,
                n = this.F,
                t = u.bitArray.concat(t, [u.bitArray.partial(1, 1)]);
            for (e = t.length + 2; 15 & e; e++) t.push(0);
            for (t.push(Math.floor(this.l / 4294967296)), t.push(0 | this.l); t.length;) l(this, t.splice(0, 16));
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
    }, u.mode.ccm = {
        name: "ccm",
        G: [],
        listenProgress: function(e) {
            u.mode.ccm.G.push(e)
        },
        unListenProgress: function(e) {
            -1 < (e = u.mode.ccm.G.indexOf(e)) && u.mode.ccm.G.splice(e, 1)
        },
        fa: function(e) {
            var t, n = u.mode.ccm.G.slice();
            for (t = 0; t < n.length; t += 1) n[t](e)
        },
        encrypt: function(e, t, n, r, i) {
            var a, o = t.slice(0),
                s = u.bitArray,
                c = s.bitLength(n) / 8,
                l = s.bitLength(o) / 8;
            if (i = i || 64, r = r || [], 7 > c) throw new u.exception.invalid("ccm: iv must be at least 7 bytes");
            for (a = 2; 4 > a && l >>> 8 * a; a++);
            return a < 15 - c && (a = 15 - c), n = s.clamp(n, 8 * (15 - a)), t = u.mode.ccm.V(e, t, n, r, i, a), o = u.mode.ccm.C(e, o, n, t, i, a), s.concat(o.data, o.tag)
        },
        decrypt: function(e, t, n, r, i) {
            i = i || 64, r = r || [];
            var a = u.bitArray,
                o = a.bitLength(n) / 8,
                s = a.bitLength(t),
                c = a.clamp(t, s - i),
                l = a.bitSlice(t, s - i),
                s = (s - i) / 8;
            if (7 > o) throw new u.exception.invalid("ccm: iv must be at least 7 bytes");
            for (t = 2; 4 > t && s >>> 8 * t; t++);
            if (t < 15 - o && (t = 15 - o), n = a.clamp(n, 8 * (15 - t)), c = u.mode.ccm.C(e, c, n, l, i, t), e = u.mode.ccm.V(e, c.data, n, r, i, t), !a.equal(c.tag, e)) throw new u.exception.corrupt("ccm: tag doesn't match");
            return c.data
        },
        na: function(e, t, n, r, i, a) {
            var o = [],
                s = u.bitArray,
                c = s.i;
            if (r = [s.partial(8, (t.length ? 64 : 0) | r - 2 << 2 | a - 1)], r = s.concat(r, n), r[3] |= i, r = e.encrypt(r), t.length)
                for (65279 >= (n = s.bitLength(t) / 8) ? o = [s.partial(16, n)] : 4294967295 >= n && (o = s.concat([s.partial(16, 65534)], [n])), o = s.concat(o, t), t = 0; t < o.length; t += 4) r = e.encrypt(c(r, o.slice(t, t + 4).concat([0, 0, 0])));
            return r
        },
        V: function(e, t, n, r, i, a) {
            var o = u.bitArray,
                s = o.i;
            if ((i /= 8) % 2 || 4 > i || 16 < i) throw new u.exception.invalid("ccm: invalid tag length");
            if (4294967295 < r.length || 4294967295 < t.length) throw new u.exception.bug("ccm: can't deal with 4GiB or more data");
            for (n = u.mode.ccm.na(e, r, n, i, o.bitLength(t) / 8, a), r = 0; r < t.length; r += 4) n = e.encrypt(s(n, t.slice(r, r + 4).concat([0, 0, 0])));
            return o.clamp(n, 8 * i)
        },
        C: function(e, t, n, r, i, a) {
            var o, s = u.bitArray;
            o = s.i;
            var c = t.length,
                l = s.bitLength(t),
                d = c / 50,
                f = d;
            if (n = s.concat([s.partial(8, a - 1)], n).concat([0, 0, 0]).slice(0, 4), r = s.bitSlice(o(r, e.encrypt(n)), 0, i), !c) return {
                tag: r,
                data: []
            };
            for (o = 0; o < c; o += 4) o > d && (u.mode.ccm.fa(o / c), d += f), n[3]++, i = e.encrypt(n), t[o] ^= i[0], t[o + 1] ^= i[1], t[o + 2] ^= i[2], t[o + 3] ^= i[3];
            return {
                tag: r,
                data: s.clamp(t, l)
            }
        }
    }, u.mode.ocb2 = {
        name: "ocb2",
        encrypt: function(e, t, n, r, i, a) {
            if (128 !== u.bitArray.bitLength(n)) throw new u.exception.invalid("ocb iv must be 128 bits");
            var o, s = u.mode.ocb2.S,
                c = u.bitArray,
                l = c.i,
                d = [0, 0, 0, 0];
            n = s(e.encrypt(n));
            var f, p = [];
            for (o = 0, r = r || [], i = i || 64; o + 4 < t.length; o += 4) d = l(d, f = t.slice(o, o + 4)), p = p.concat(l(n, e.encrypt(l(n, f)))), n = s(n);
            return f = t.slice(o), t = c.bitLength(f), o = e.encrypt(l(n, [0, 0, 0, t])), f = c.clamp(l(f.concat([0, 0, 0]), o), t), d = l(d, l(f.concat([0, 0, 0]), o)), d = e.encrypt(l(d, l(n, s(n)))), r.length && (d = l(d, a ? r : u.mode.ocb2.pmac(e, r))), p.concat(c.concat(f, c.clamp(d, i)))
        },
        decrypt: function(e, t, n, r, i, a) {
            if (128 !== u.bitArray.bitLength(n)) throw new u.exception.invalid("ocb iv must be 128 bits");
            i = i || 64;
            var o, s, c = u.mode.ocb2.S,
                l = u.bitArray,
                d = l.i,
                f = [0, 0, 0, 0],
                p = c(e.encrypt(n)),
                h = u.bitArray.bitLength(t) - i,
                m = [];
            for (n = 0, r = r || []; n + 4 < h / 32; n += 4) o = d(p, e.decrypt(d(p, t.slice(n, n + 4)))), f = d(f, o), m = m.concat(o), p = c(p);
            if (s = h - 32 * n, o = e.encrypt(d(p, [0, 0, 0, s])), o = d(o, l.clamp(t.slice(n), s).concat([0, 0, 0])), f = d(f, o), f = e.encrypt(d(f, d(p, c(p)))), r.length && (f = d(f, a ? r : u.mode.ocb2.pmac(e, r))), !l.equal(l.clamp(f, i), l.bitSlice(t, h))) throw new u.exception.corrupt("ocb: tag doesn't match");
            return m.concat(l.clamp(o, s))
        },
        pmac: function(e, t) {
            var n, r = u.mode.ocb2.S,
                i = u.bitArray,
                a = i.i,
                o = [0, 0, 0, 0],
                s = e.encrypt([0, 0, 0, 0]),
                s = a(s, r(r(s)));
            for (n = 0; n + 4 < t.length; n += 4) s = r(s), o = a(o, e.encrypt(a(s, t.slice(n, n + 4))));
            return n = t.slice(n), 128 > i.bitLength(n) && (s = a(s, r(s)), n = i.concat(n, [-2147483648, 0, 0, 0])), o = a(o, n), e.encrypt(a(r(a(s, r(s))), o))
        },
        S: function(e) {
            return [e[0] << 1 ^ e[1] >>> 31, e[1] << 1 ^ e[2] >>> 31, e[2] << 1 ^ e[3] >>> 31, e[3] << 1 ^ 135 * (e[0] >>> 31)]
        }
    }, u.mode.gcm = {
        name: "gcm",
        encrypt: function(e, t, n, r, i) {
            var a = t.slice(0);
            return t = u.bitArray, r = r || [], e = u.mode.gcm.C(!0, e, a, r, n, i || 128), t.concat(e.data, e.tag)
        },
        decrypt: function(e, t, n, r, i) {
            var a = t.slice(0),
                o = u.bitArray,
                s = o.bitLength(a);
            if (r = r || [], (i = i || 128) <= s ? (t = o.bitSlice(a, s - i), a = o.bitSlice(a, 0, s - i)) : (t = a, a = []), e = u.mode.gcm.C(!1, e, a, r, n, i), !o.equal(e.tag, t)) throw new u.exception.corrupt("gcm: tag doesn't match");
            return e.data
        },
        ka: function(e, t) {
            var n, r, i, a, o, s = u.bitArray.i;
            for (n = 0, i = [0, 0, 0, 0], a = t.slice(0); 128 > n; n++) {
                for ((r = 0 != (e[Math.floor(n / 32)] & 1 << 31 - n % 32)) && (i = s(i, a)), o = 0 != (1 & a[3]), r = 3; 0 < r; r--) a[r] = a[r] >>> 1 | (1 & a[r - 1]) << 31;
                a[0] >>>= 1, o && (a[0] ^= -520093696)
            }
            return i
        },
        j: function(e, t, n) {
            var r, i = n.length;
            for (r = 0, t = t.slice(0); r < i; r += 4) t[0] ^= 4294967295 & n[r], t[1] ^= 4294967295 & n[r + 1], t[2] ^= 4294967295 & n[r + 2], t[3] ^= 4294967295 & n[r + 3], t = u.mode.gcm.ka(t, e);
            return t
        },
        C: function(e, t, n, r, i, a) {
            var o, s, c, l, d, f, p, h, m = u.bitArray;
            for (f = n.length, p = m.bitLength(n), h = m.bitLength(r), s = m.bitLength(i), o = t.encrypt([0, 0, 0, 0]), 96 === s ? (i = i.slice(0), i = m.concat(i, [1])) : (i = u.mode.gcm.j(o, [0, 0, 0, 0], i), i = u.mode.gcm.j(o, i, [0, 0, Math.floor(s / 4294967296), 4294967295 & s])), s = u.mode.gcm.j(o, [0, 0, 0, 0], r), d = i.slice(0), r = s.slice(0), e || (r = u.mode.gcm.j(o, s, n)), l = 0; l < f; l += 4) d[3]++, c = t.encrypt(d), n[l] ^= c[0], n[l + 1] ^= c[1], n[l + 2] ^= c[2], n[l + 3] ^= c[3];
            return n = m.clamp(n, p), e && (r = u.mode.gcm.j(o, s, n)), e = [Math.floor(h / 4294967296), 4294967295 & h, Math.floor(p / 4294967296), 4294967295 & p], r = u.mode.gcm.j(o, r, e), c = t.encrypt(i), r[0] ^= c[0], r[1] ^= c[1], r[2] ^= c[2], r[3] ^= c[3], {
                tag: m.bitSlice(r, 0, a),
                data: n
            }
        }
    }, u.misc.hmac = function(e, t) {
        this.W = t = t || u.hash.sha256;
        var n, r = [
                [],
                []
            ],
            i = t.prototype.blockSize / 32;
        for (this.w = [new t, new t], e.length > i && (e = t.hash(e)), n = 0; n < i; n++) r[0][n] = 909522486 ^ e[n], r[1][n] = 1549556828 ^ e[n];
        this.w[0].update(r[0]), this.w[1].update(r[1]), this.R = new t(this.w[0])
    }, u.misc.hmac.prototype.encrypt = u.misc.hmac.prototype.mac = function(e) {
        if (this.aa) throw new u.exception.invalid("encrypt on already updated hmac called!");
        return this.update(e), this.digest(e)
    }, u.misc.hmac.prototype.reset = function() {
        this.R = new this.W(this.w[0]), this.aa = !1
    }, u.misc.hmac.prototype.update = function(e) {
        this.aa = !0, this.R.update(e)
    }, u.misc.hmac.prototype.digest = function() {
        var e = this.R.finalize(),
            e = new this.W(this.w[1]).update(e).finalize();
        return this.reset(), e
    }, u.misc.pbkdf2 = function(e, t, n, r, i) {
        if (n = n || 1e4, 0 > r || 0 > n) throw new u.exception.invalid("invalid params to pbkdf2");
        "string" == typeof e && (e = u.codec.utf8String.toBits(e)), "string" == typeof t && (t = u.codec.utf8String.toBits(t)), e = new(i = i || u.misc.hmac)(e);
        var a, o, s, c, l = [],
            d = u.bitArray;
        for (c = 1; 32 * l.length < (r || 1); c++) {
            for (o = 1, i = a = e.encrypt(d.concat(t, [c])); o < n; o++)
                for (a = e.encrypt(a), s = 0; s < a.length; s++) i[s] ^= a[s];
            l = l.concat(i)
        }
        return r && (l = d.clamp(l, r)), l
    }, u.prng = function(e) {
        this.c = [new u.hash.sha256], this.m = [0], this.P = 0, this.H = {}, this.N = 0, this.U = {}, this.Z = this.f = this.o = this.ha = 0, this.b = [0, 0, 0, 0, 0, 0, 0, 0], this.h = [0, 0, 0, 0], this.L = void 0, this.M = e, this.D = !1, this.K = {
            progress: {},
            seeded: {}
        }, this.u = this.ga = 0, this.I = 1, this.J = 2, this.ca = 65536, this.T = [0, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024], this.da = 3e4, this.ba = 80
    }, u.prng.prototype = {
        randomWords: function(e, t) {
            var n, r = [];
            if ((n = this.isReady(t)) === this.u) throw new u.exception.notReady("generator isn't seeded");
            if (n & this.J) {
                n = !(n & this.I), i = [];
                var i, a, o = 0;
                for (a = 0, this.Z = i[0] = (new Date).valueOf() + this.da; 16 > a; a++) i.push(4294967296 * Math.random() | 0);
                for (a = 0; a < this.c.length && (i = i.concat(this.c[a].finalize()), o += this.m[a], this.m[a] = 0, n || !(this.P & 1 << a)); a++);
                for (this.P >= 1 << this.c.length && (this.c.push(new u.hash.sha256), this.m.push(0)), this.f -= o, o > this.o && (this.o = o), this.P++, this.b = u.hash.sha256.hash(this.b.concat(i)), this.L = new u.cipher.aes(this.b), n = 0; 4 > n && (this.h[n] = this.h[n] + 1 | 0, !this.h[n]); n++);
            }
            for (n = 0; n < e; n += 4) 0 == (n + 1) % this.ca && p(this), r.push((i = h(this))[0], i[1], i[2], i[3]);
            return p(this), r.slice(0, e)
        },
        setDefaultParanoia: function(e, t) {
            if (0 === e && "Setting paranoia=0 will ruin your security; use it only for testing" !== t) throw new u.exception.invalid("Setting paranoia=0 will ruin your security; use it only for testing");
            this.M = e
        },
        addEntropy: function(e, t, n) {
            n = n || "user";
            var r, i, a = (new Date).valueOf(),
                o = this.H[n],
                s = this.isReady(),
                c = 0;
            switch (void 0 === (r = this.U[n]) && (r = this.U[n] = this.ha++), void 0 === o && (o = this.H[n] = 0), this.H[n] = (this.H[n] + 1) % this.c.length, typeof e) {
                case "number":
                    void 0 === t && (t = 1), this.c[o].update([r, this.N++, 1, t, a, 1, 0 | e]);
                    break;
                case "object":
                    if ("[object Uint32Array]" === (n = Object.prototype.toString.call(e))) {
                        for (n = 0, i = []; n < e.length; n++) i.push(e[n]);
                        e = i
                    } else
                        for ("[object Array]" !== n && (c = 1), n = 0; n < e.length && !c; n++) "number" != typeof e[n] && (c = 1);
                    if (!c) {
                        if (void 0 === t)
                            for (n = t = 0; n < e.length; n++)
                                for (i = e[n]; 0 < i;) t++, i >>>= 1;
                        this.c[o].update([r, this.N++, 2, t, a, e.length].concat(e))
                    }
                    break;
                case "string":
                    void 0 === t && (t = e.length), this.c[o].update([r, this.N++, 3, t, a, e.length]), this.c[o].update(e);
                    break;
                default:
                    c = 1
            }
            if (c) throw new u.exception.bug("random: addEntropy only supports number, array of numbers or string");
            this.m[o] += t, this.f += t, s === this.u && (this.isReady() !== this.u && d("seeded", Math.max(this.o, this.f)), d("progress", this.getProgress()))
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
                        loadTimeCollector: m(this, this.ma),
                        mouseCollector: m(this, this.oa),
                        keyboardCollector: m(this, this.la),
                        accelerometerCollector: m(this, this.ea),
                        touchCollector: m(this, this.qa)
                    }, window.addEventListener) window.addEventListener("load", this.a.loadTimeCollector, !1), window.addEventListener("mousemove", this.a.mouseCollector, !1), window.addEventListener("keypress", this.a.keyboardCollector, !1), window.addEventListener("devicemotion", this.a.accelerometerCollector, !1), window.addEventListener("touchmove", this.a.touchCollector, !1);
                else if (document.attachEvent) document.attachEvent("onload", this.a.loadTimeCollector), document.attachEvent("onmousemove", this.a.mouseCollector), document.attachEvent("keypress", this.a.keyboardCollector);
                else throw new u.exception.bug("can't attach event");
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
                a = [];
            for (r in i) i.hasOwnProperty(r) && i[r] === t && a.push(r);
            for (n = 0; n < a.length; n++) r = a[n], delete i[r]
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
    }, u.random = new u.prng(6);
    r: try {
        if (o = e.exports) {
            try {
                s = n("444982")
            } catch (e) {
                s = null
            }
            o = i = s
        }
        if (o && i.randomBytes) r = i.randomBytes(128), r = new Uint32Array(new Uint8Array(r).buffer), u.random.addEntropy(r, 1024, "crypto['randomBytes']");
        else if ("undefined" != typeof window && "undefined" != typeof Uint32Array) {
            if (a = new Uint32Array(32), window.crypto && window.crypto.getRandomValues) window.crypto.getRandomValues(a);
            else if (window.msCrypto && window.msCrypto.getRandomValues) window.msCrypto.getRandomValues(a);
            else break r;
            u.random.addEntropy(a, 1024, "crypto['getRandomValues']")
        }
    } catch (e) {
        "undefined" != typeof window && window.console && (console.log("There was an error collecting entropy from the browser:"), console.log(e))
    }
    u.json = {
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
            var i, a = u.json,
                o = a.g({
                    iv: u.random.randomWords(4, 0)
                }, a.defaults);
            if (a.g(o, n), n = o.adata, "string" == typeof o.salt && (o.salt = u.codec.base64.toBits(o.salt)), "string" == typeof o.iv && (o.iv = u.codec.base64.toBits(o.iv)), !u.mode[o.mode] || !u.cipher[o.cipher] || "string" == typeof e && 100 >= o.iter || 64 !== o.ts && 96 !== o.ts && 128 !== o.ts || 128 !== o.ks && 192 !== o.ks && 256 !== o.ks || 2 > o.iv.length || 4 < o.iv.length) throw new u.exception.invalid("json encrypt: invalid parameters");
            return "string" == typeof e ? (e = (i = u.misc.cachedPbkdf2(e, o)).key.slice(0, o.ks / 32), o.salt = i.salt) : u.ecc && e instanceof u.ecc.elGamal.publicKey && (i = e.kem(), o.kemtag = i.tag, e = i.key.slice(0, o.ks / 32)), "string" == typeof t && (t = u.codec.utf8String.toBits(t)), "string" == typeof n && (o.adata = n = u.codec.utf8String.toBits(n)), i = new u.cipher[o.cipher](e), a.g(r, o), r.key = e, o.ct = "ccm" === o.mode && u.arrayBuffer && u.arrayBuffer.ccm && t instanceof ArrayBuffer ? u.arrayBuffer.ccm.encrypt(i, t, o.iv, n, o.ts) : u.mode[o.mode].encrypt(i, t, o.iv, n, o.ts), o
        },
        encrypt: function(e, t, n, r) {
            var i = u.json,
                a = i.ja.apply(i, arguments);
            return i.encode(a)
        },
        ia: function(e, t, n, r) {
            n = n || {}, r = r || {};
            var i, a, o = u.json;
            if (i = (t = o.g(o.g(o.g({}, o.defaults), t), n, !0)).adata, "string" == typeof t.salt && (t.salt = u.codec.base64.toBits(t.salt)), "string" == typeof t.iv && (t.iv = u.codec.base64.toBits(t.iv)), !u.mode[t.mode] || !u.cipher[t.cipher] || "string" == typeof e && 100 >= t.iter || 64 !== t.ts && 96 !== t.ts && 128 !== t.ts || 128 !== t.ks && 192 !== t.ks && 256 !== t.ks || !t.iv || 2 > t.iv.length || 4 < t.iv.length) throw new u.exception.invalid("json decrypt: invalid parameters");
            return "string" == typeof e ? (e = (a = u.misc.cachedPbkdf2(e, t)).key.slice(0, t.ks / 32), t.salt = a.salt) : u.ecc && e instanceof u.ecc.elGamal.secretKey && (e = e.unkem(u.codec.base64.toBits(t.kemtag)).slice(0, t.ks / 32)), "string" == typeof i && (i = u.codec.utf8String.toBits(i)), a = new u.cipher[t.cipher](e), i = "ccm" === t.mode && u.arrayBuffer && u.arrayBuffer.ccm && t.ct instanceof ArrayBuffer ? u.arrayBuffer.ccm.decrypt(a, t.ct, t.iv, t.tag, i, t.ts) : u.mode[t.mode].decrypt(a, t.ct, t.iv, i, t.ts), o.g(r, t), r.key = e, 1 === n.raw ? i : u.codec.utf8String.fromBits(i)
        },
        decrypt: function(e, t, n, r) {
            var i = u.json;
            return i.ia(e, i.decode(t), n, r)
        },
        encode: function(e) {
            var t, n = "{",
                r = "";
            for (t in e)
                if (e.hasOwnProperty(t)) {
                    if (!t.match(/^[a-z0-9]+$/i)) throw new u.exception.invalid("json encode: invalid property name");
                    switch (n += r + '"' + t + '":', r = ",", typeof e[t]) {
                        case "number":
                        case "boolean":
                            n += e[t];
                            break;
                        case "string":
                            n += '"' + escape(e[t]) + '"';
                            break;
                        case "object":
                            n += '"' + u.codec.base64.fromBits(e[t], 0) + '"';
                            break;
                        default:
                            throw new u.exception.bug("json encode: unsupported type")
                    }
                } return n + "}"
        },
        decode: function(e) {
            if (!(e = e.replace(/\s/g, "")).match(/^\{.*\}$/)) throw new u.exception.invalid("json decode: this isn't json!");
            e = e.replace(/^\{|\}$/g, "").split(/,/);
            var t, n, r = {};
            for (t = 0; t < e.length; t++) {
                if (!(n = e[t].match(/^\s*(?:(["']?)([a-z][a-z0-9]*)\1)\s*:\s*(?:(-?\d+)|"([a-z0-9+\/%*_.@=\-]*)"|(true|false))$/i))) throw new u.exception.invalid("json decode: this isn't json!");
                null != n[3] ? r[n[2]] = parseInt(n[3], 10) : null != n[4] ? r[n[2]] = n[2].match(/^(ct|adata|salt|iv)$/) ? u.codec.base64.toBits(n[4]) : unescape(n[4]) : null != n[5] && (r[n[2]] = "true" === n[5])
            }
            return r
        },
        g: function(e, t, n) {
            if (void 0 === e && (e = {}), void 0 === t) return e;
            for (var r in t)
                if (t.hasOwnProperty(r)) {
                    if (n && void 0 !== e[r] && e[r] !== t[r]) throw new u.exception.invalid("required parameter overridden");
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
    }, u.encrypt = u.json.encrypt, u.decrypt = u.json.decrypt, u.misc.pa = {}, u.misc.cachedPbkdf2 = function(e, t) {
        var n, r = u.misc.pa;
        return n = (t = t || {}).iter || 1e3, n = (r = r[e] = r[e] || {})[n] = r[n] || {
            firstSalt: t.salt && t.salt.length ? t.salt.slice(0) : u.random.randomWords(2, 0)
        }, r = void 0 === t.salt ? n.firstSalt : t.salt, n[r] = n[r] || u.misc.pbkdf2(e, r, t.iter), {
            key: n[r].slice(0),
            salt: r.slice(0)
        }
    }, e.exports && (e.exports = u), "function" == typeof define && define([], function() {
        return u
    })
}