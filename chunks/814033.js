function(e, t, n) {
    ! function(e, t) {
        "use strict";

        function r(e, t) {
            if (!e) throw Error(t || "Assertion failed")
        }

        function i(e, t) {
            e.super_ = t;
            var n = function() {};
            n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
        }

        function a(e, t, n) {
            if (a.isBN(e)) return e;
            this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== e && (("le" === t || "be" === t) && (n = t, t = 10), this._init(e || 0, t || 10, n || "be"))
        }
        "object" == typeof e ? e.exports = a : t.BN = a, a.BN = a, a.wordSize = 26;
        try {
            c = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : n("603882").Buffer
        } catch (e) {}

        function o(e, t) {
            var n = e.charCodeAt(t);
            return n >= 65 && n <= 70 ? n - 55 : n >= 97 && n <= 102 ? n - 87 : n - 48 & 15
        }

        function s(e, t, n) {
            var r = o(e, n);
            return n - 1 >= t && (r |= o(e, n - 1) << 4), r
        }

        function u(e, t, n, r) {
            for (var i = 0, a = Math.min(e.length, n), o = t; o < a; o++) {
                var s = e.charCodeAt(o) - 48;
                i *= r, s >= 49 ? i += s - 49 + 10 : s >= 17 ? i += s - 17 + 10 : i += s
            }
            return i
        }
        a.isBN = function(e) {
            return e instanceof a || null !== e && "object" == typeof e && e.constructor.wordSize === a.wordSize && Array.isArray(e.words)
        }, a.max = function(e, t) {
            return e.cmp(t) > 0 ? e : t
        }, a.min = function(e, t) {
            return 0 > e.cmp(t) ? e : t
        }, a.prototype._init = function(e, t, n) {
            if ("number" == typeof e) return this._initNumber(e, t, n);
            if ("object" == typeof e) return this._initArray(e, t, n);
            "hex" === t && (t = 16), r(t === (0 | t) && t >= 2 && t <= 36), e = e.toString().replace(/\s+/g, "");
            var i = 0;
            "-" === e[0] && (i++, this.negative = 1), i < e.length && (16 === t ? this._parseHex(e, i, n) : (this._parseBase(e, t, i), "le" === n && this._initArray(this.toArray(), t, n)))
        }, a.prototype._initNumber = function(e, t, n) {
            e < 0 && (this.negative = 1, e = -e), e < 67108864 ? (this.words = [67108863 & e], this.length = 1) : e < 4503599627370496 ? (this.words = [67108863 & e, e / 67108864 & 67108863], this.length = 2) : (r(e < 9007199254740992), this.words = [67108863 & e, e / 67108864 & 67108863, 1], this.length = 3), "le" === n && this._initArray(this.toArray(), t, n)
        }, a.prototype._initArray = function(e, t, n) {
            if (r("number" == typeof e.length), e.length <= 0) return this.words = [0], this.length = 1, this;
            this.length = Math.ceil(e.length / 3), this.words = Array(this.length);
            for (var i, a, o = 0; o < this.length; o++) this.words[o] = 0;
            var s = 0;
            if ("be" === n)
                for (o = e.length - 1, i = 0; o >= 0; o -= 3) a = e[o] | e[o - 1] << 8 | e[o - 2] << 16, this.words[i] |= a << s & 67108863, this.words[i + 1] = a >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, i++);
            else if ("le" === n)
                for (o = 0, i = 0; o < e.length; o += 3) a = e[o] | e[o + 1] << 8 | e[o + 2] << 16, this.words[i] |= a << s & 67108863, this.words[i + 1] = a >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, i++);
            return this.strip()
        }, a.prototype._parseHex = function(e, t, n) {
            this.length = Math.ceil((e.length - t) / 6), this.words = Array(this.length);
            for (var r, i = 0; i < this.length; i++) this.words[i] = 0;
            var a = 0,
                o = 0;
            if ("be" === n)
                for (i = e.length - 1; i >= t; i -= 2) r = s(e, t, i) << a, this.words[o] |= 67108863 & r, a >= 18 ? (a -= 18, o += 1, this.words[o] |= r >>> 26) : a += 8;
            else
                for (i = (e.length - t) % 2 == 0 ? t + 1 : t; i < e.length; i += 2) r = s(e, t, i) << a, this.words[o] |= 67108863 & r, a >= 18 ? (a -= 18, o += 1, this.words[o] |= r >>> 26) : a += 8;
            this.strip()
        }, a.prototype._parseBase = function(e, t, n) {
            this.words = [0], this.length = 1;
            for (var r = 0, i = 1; i <= 67108863; i *= t) r++;
            r--, i = i / t | 0;
            for (var a = e.length - n, o = a % r, s = Math.min(a, a - o) + n, c = 0, l = n; l < s; l += r) c = u(e, l, l + r, t), this.imuln(i), this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c);
            if (0 !== o) {
                var d = 1;
                for (c = u(e, l, e.length, t), l = 0; l < o; l++) d *= t;
                this.imuln(d), this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c)
            }
            this.strip()
        }, a.prototype.copy = function(e) {
            e.words = Array(this.length);
            for (var t = 0; t < this.length; t++) e.words[t] = this.words[t];
            e.length = this.length, e.negative = this.negative, e.red = this.red
        }, a.prototype.clone = function() {
            var e = new a(null);
            return this.copy(e), e
        }, a.prototype._expand = function(e) {
            for (; this.length < e;) this.words[this.length++] = 0;
            return this
        }, a.prototype.strip = function() {
            for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
            return this._normSign()
        }, a.prototype._normSign = function() {
            return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
        }, a.prototype.inspect = function() {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
        };
        var c, l = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
            d = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
            f = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
        a.prototype.toString = function(e, t) {
            if (t = 0 | t || 1, 16 === (e = e || 10) || "hex" === e) {
                n = "";
                for (var n, i = 0, a = 0, o = 0; o < this.length; o++) {
                    var s = this.words[o],
                        u = ((s << i | a) & 16777215).toString(16);
                    n = 0 != (a = s >>> 24 - i & 16777215) || o !== this.length - 1 ? l[6 - u.length] + u + n : u + n, (i += 2) >= 26 && (i -= 26, o--)
                }
                for (0 !== a && (n = a.toString(16) + n); n.length % t != 0;) n = "0" + n;
                return 0 !== this.negative && (n = "-" + n), n
            }
            if (e === (0 | e) && e >= 2 && e <= 36) {
                var c = d[e],
                    p = f[e];
                n = "";
                var h = this.clone();
                for (h.negative = 0; !h.isZero();) {
                    var m = h.modn(p).toString(e);
                    n = (h = h.idivn(p)).isZero() ? m + n : l[c - m.length] + m + n
                }
                for (this.isZero() && (n = "0" + n); n.length % t != 0;) n = "0" + n;
                return 0 !== this.negative && (n = "-" + n), n
            }
            r(!1, "Base should be between 2 and 36")
        }, a.prototype.toNumber = function() {
            var e = this.words[0];
            return 2 === this.length ? e += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? e += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && r(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -e : e
        }, a.prototype.toJSON = function() {
            return this.toString(16)
        }, a.prototype.toBuffer = function(e, t) {
            return r(void 0 !== c), this.toArrayLike(c, e, t)
        }, a.prototype.toArray = function(e, t) {
            return this.toArrayLike(Array, e, t)
        }, a.prototype.toArrayLike = function(e, t, n) {
            var i, a, o = this.byteLength(),
                s = n || Math.max(1, o);
            r(o <= s, "byte array longer than desired length"), r(s > 0, "Requested array length <= 0"), this.strip();
            var u = new e(s),
                c = this.clone();
            if ("le" === t) {
                for (a = 0; !c.isZero(); a++) i = c.andln(255), c.iushrn(8), u[a] = i;
                for (; a < s; a++) u[a] = 0
            } else {
                for (a = 0; a < s - o; a++) u[a] = 0;
                for (a = 0; !c.isZero(); a++) i = c.andln(255), c.iushrn(8), u[s - a - 1] = i
            }
            return u
        }, Math.clz32 ? a.prototype._countBits = function(e) {
            return 32 - Math.clz32(e)
        } : a.prototype._countBits = function(e) {
            var t = e,
                n = 0;
            return t >= 4096 && (n += 13, t >>>= 13), t >= 64 && (n += 7, t >>>= 7), t >= 8 && (n += 4, t >>>= 4), t >= 2 && (n += 2, t >>>= 2), n + t
        }, a.prototype._zeroBits = function(e) {
            if (0 === e) return 26;
            var t = e,
                n = 0;
            return (8191 & t) == 0 && (n += 13, t >>>= 13), (127 & t) == 0 && (n += 7, t >>>= 7), (15 & t) == 0 && (n += 4, t >>>= 4), (3 & t) == 0 && (n += 2, t >>>= 2), (1 & t) == 0 && n++, n
        }, a.prototype.bitLength = function() {
            var e = this.words[this.length - 1],
                t = this._countBits(e);
            return (this.length - 1) * 26 + t
        };

        function p(e, t, n) {
            n.negative = t.negative ^ e.negative;
            var r = e.length + t.length | 0;
            n.length = r, r = r - 1 | 0;
            var i = 0 | e.words[0],
                a = 0 | t.words[0],
                o = i * a,
                s = 67108863 & o,
                u = o / 67108864 | 0;
            n.words[0] = s;
            for (var c = 1; c < r; c++) {
                for (var l = u >>> 26, d = 67108863 & u, f = Math.min(c, t.length - 1), p = Math.max(0, c - e.length + 1); p <= f; p++) {
                    var h = c - p | 0;
                    i = 0 | e.words[h], l += (o = i * (a = 0 | t.words[p]) + d) / 67108864 | 0, d = 67108863 & o
                }
                n.words[c] = 0 | d, u = 0 | l
            }
            return 0 !== u ? n.words[c] = 0 | u : n.length--, n.strip()
        }
        a.prototype.zeroBits = function() {
            if (this.isZero()) return 0;
            for (var e = 0, t = 0; t < this.length; t++) {
                var n = this._zeroBits(this.words[t]);
                if (e += n, 26 !== n) break
            }
            return e
        }, a.prototype.byteLength = function() {
            return Math.ceil(this.bitLength() / 8)
        }, a.prototype.toTwos = function(e) {
            return 0 !== this.negative ? this.abs().inotn(e).iaddn(1) : this.clone()
        }, a.prototype.fromTwos = function(e) {
            return this.testn(e - 1) ? this.notn(e).iaddn(1).ineg() : this.clone()
        }, a.prototype.isNeg = function() {
            return 0 !== this.negative
        }, a.prototype.neg = function() {
            return this.clone().ineg()
        }, a.prototype.ineg = function() {
            return !this.isZero() && (this.negative ^= 1), this
        }, a.prototype.iuor = function(e) {
            for (; this.length < e.length;) this.words[this.length++] = 0;
            for (var t = 0; t < e.length; t++) this.words[t] = this.words[t] | e.words[t];
            return this.strip()
        }, a.prototype.ior = function(e) {
            return r((this.negative | e.negative) == 0), this.iuor(e)
        }, a.prototype.or = function(e) {
            return this.length > e.length ? this.clone().ior(e) : e.clone().ior(this)
        }, a.prototype.uor = function(e) {
            return this.length > e.length ? this.clone().iuor(e) : e.clone().iuor(this)
        }, a.prototype.iuand = function(e) {
            var t;
            t = this.length > e.length ? e : this;
            for (var n = 0; n < t.length; n++) this.words[n] = this.words[n] & e.words[n];
            return this.length = t.length, this.strip()
        }, a.prototype.iand = function(e) {
            return r((this.negative | e.negative) == 0), this.iuand(e)
        }, a.prototype.and = function(e) {
            return this.length > e.length ? this.clone().iand(e) : e.clone().iand(this)
        }, a.prototype.uand = function(e) {
            return this.length > e.length ? this.clone().iuand(e) : e.clone().iuand(this)
        }, a.prototype.iuxor = function(e) {
            this.length > e.length ? (t = this, n = e) : (t = e, n = this);
            for (var t, n, r = 0; r < n.length; r++) this.words[r] = t.words[r] ^ n.words[r];
            if (this !== t)
                for (; r < t.length; r++) this.words[r] = t.words[r];
            return this.length = t.length, this.strip()
        }, a.prototype.ixor = function(e) {
            return r((this.negative | e.negative) == 0), this.iuxor(e)
        }, a.prototype.xor = function(e) {
            return this.length > e.length ? this.clone().ixor(e) : e.clone().ixor(this)
        }, a.prototype.uxor = function(e) {
            return this.length > e.length ? this.clone().iuxor(e) : e.clone().iuxor(this)
        }, a.prototype.inotn = function(e) {
            r("number" == typeof e && e >= 0);
            var t = 0 | Math.ceil(e / 26),
                n = e % 26;
            this._expand(t), n > 0 && t--;
            for (var i = 0; i < t; i++) this.words[i] = 67108863 & ~this.words[i];
            return n > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - n), this.strip()
        }, a.prototype.notn = function(e) {
            return this.clone().inotn(e)
        }, a.prototype.setn = function(e, t) {
            r("number" == typeof e && e >= 0);
            var n = e / 26 | 0,
                i = e % 26;
            return this._expand(n + 1), t ? this.words[n] = this.words[n] | 1 << i : this.words[n] = this.words[n] & ~(1 << i), this.strip()
        }, a.prototype.iadd = function(e) {
            if (0 !== this.negative && 0 === e.negative) return this.negative = 0, t = this.isub(e), this.negative ^= 1, this._normSign();
            if (0 === this.negative && 0 !== e.negative) return e.negative = 0, t = this.isub(e), e.negative = 1, t._normSign();
            this.length > e.length ? (n = this, r = e) : (n = e, r = this);
            for (var t, n, r, i = 0, a = 0; a < r.length; a++) t = (0 | n.words[a]) + (0 | r.words[a]) + i, this.words[a] = 67108863 & t, i = t >>> 26;
            for (; 0 !== i && a < n.length; a++) t = (0 | n.words[a]) + i, this.words[a] = 67108863 & t, i = t >>> 26;
            if (this.length = n.length, 0 !== i) this.words[this.length] = i, this.length++;
            else if (n !== this)
                for (; a < n.length; a++) this.words[a] = n.words[a];
            return this
        }, a.prototype.add = function(e) {
            var t;
            return 0 !== e.negative && 0 === this.negative ? (e.negative = 0, t = this.sub(e), e.negative ^= 1, t) : 0 === e.negative && 0 !== this.negative ? (this.negative = 0, t = e.sub(this), this.negative = 1, t) : this.length > e.length ? this.clone().iadd(e) : e.clone().iadd(this)
        }, a.prototype.isub = function(e) {
            if (0 !== e.negative) {
                e.negative = 0;
                var t, n, r = this.iadd(e);
                return e.negative = 1, r._normSign()
            }
            if (0 !== this.negative) return this.negative = 0, this.iadd(e), this.negative = 1, this._normSign();
            var i = this.cmp(e);
            if (0 === i) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
            i > 0 ? (t = this, n = e) : (t = e, n = this);
            for (var a = 0, o = 0; o < n.length; o++) a = (r = (0 | t.words[o]) - (0 | n.words[o]) + a) >> 26, this.words[o] = 67108863 & r;
            for (; 0 !== a && o < t.length; o++) a = (r = (0 | t.words[o]) + a) >> 26, this.words[o] = 67108863 & r;
            if (0 === a && o < t.length && t !== this)
                for (; o < t.length; o++) this.words[o] = t.words[o];
            return this.length = Math.max(this.length, o), t !== this && (this.negative = 1), this.strip()
        }, a.prototype.sub = function(e) {
            return this.clone().isub(e)
        };
        var h = function(e, t, n) {
            var r, i, a, o = e.words,
                s = t.words,
                u = n.words,
                c = 0,
                l = 0 | o[0],
                d = 8191 & l,
                f = l >>> 13,
                p = 0 | o[1],
                h = 8191 & p,
                m = p >>> 13,
                g = 0 | o[2],
                _ = 8191 & g,
                b = g >>> 13,
                v = 0 | o[3],
                y = 8191 & v,
                E = v >>> 13,
                S = 0 | o[4],
                x = 8191 & S,
                w = S >>> 13,
                T = 0 | o[5],
                C = 8191 & T,
                D = T >>> 13,
                O = 0 | o[6],
                M = 8191 & O,
                A = O >>> 13,
                k = 0 | o[7],
                R = 8191 & k,
                N = k >>> 13,
                I = 0 | o[8],
                L = 8191 & I,
                P = I >>> 13,
                F = 0 | o[9],
                B = 8191 & F,
                U = F >>> 13,
                Y = 0 | s[0],
                j = 8191 & Y,
                z = Y >>> 13,
                H = 0 | s[1],
                G = 8191 & H,
                V = H >>> 13,
                $ = 0 | s[2],
                W = 8191 & $,
                K = $ >>> 13,
                q = 0 | s[3],
                Q = 8191 & q,
                Z = q >>> 13,
                X = 0 | s[4],
                J = 8191 & X,
                ee = X >>> 13,
                et = 0 | s[5],
                en = 8191 & et,
                er = et >>> 13,
                ei = 0 | s[6],
                ea = 8191 & ei,
                eo = ei >>> 13,
                es = 0 | s[7],
                eu = 8191 & es,
                ec = es >>> 13,
                el = 0 | s[8],
                ed = 8191 & el,
                ef = el >>> 13,
                ep = 0 | s[9],
                eh = 8191 & ep,
                em = ep >>> 13;
            n.negative = e.negative ^ t.negative, n.length = 19, r = Math.imul(d, j), i = (i = Math.imul(d, z)) + Math.imul(f, j) | 0;
            var eg = (c + r | 0) + ((8191 & i) << 13) | 0;
            c = ((a = Math.imul(f, z)) + (i >>> 13) | 0) + (eg >>> 26) | 0, eg &= 67108863, r = Math.imul(h, j), i = (i = Math.imul(h, z)) + Math.imul(m, j) | 0, a = Math.imul(m, z), r = r + Math.imul(d, G) | 0, i = (i = i + Math.imul(d, V) | 0) + Math.imul(f, G) | 0;
            var e_ = (c + r | 0) + ((8191 & i) << 13) | 0;
            c = ((a = a + Math.imul(f, V) | 0) + (i >>> 13) | 0) + (e_ >>> 26) | 0, e_ &= 67108863, r = Math.imul(_, j), i = (i = Math.imul(_, z)) + Math.imul(b, j) | 0, a = Math.imul(b, z), r = r + Math.imul(h, G) | 0, i = (i = i + Math.imul(h, V) | 0) + Math.imul(m, G) | 0, a = a + Math.imul(m, V) | 0, r = r + Math.imul(d, W) | 0, i = (i = i + Math.imul(d, K) | 0) + Math.imul(f, W) | 0;
            var eb = (c + r | 0) + ((8191 & i) << 13) | 0;
            c = ((a = a + Math.imul(f, K) | 0) + (i >>> 13) | 0) + (eb >>> 26) | 0, eb &= 67108863, r = Math.imul(y, j), i = (i = Math.imul(y, z)) + Math.imul(E, j) | 0, a = Math.imul(E, z), r = r + Math.imul(_, G) | 0, i = (i = i + Math.imul(_, V) | 0) + Math.imul(b, G) | 0, a = a + Math.imul(b, V) | 0, r = r + Math.imul(h, W) | 0, i = (i = i + Math.imul(h, K) | 0) + Math.imul(m, W) | 0, a = a + Math.imul(m, K) | 0, r = r + Math.imul(d, Q) | 0, i = (i = i + Math.imul(d, Z) | 0) + Math.imul(f, Q) | 0;
            var ev = (c + r | 0) + ((8191 & i) << 13) | 0;
            c = ((a = a + Math.imul(f, Z) | 0) + (i >>> 13) | 0) + (ev >>> 26) | 0, ev &= 67108863, r = Math.imul(x, j), i = (i = Math.imul(x, z)) + Math.imul(w, j) | 0, a = Math.imul(w, z), r = r + Math.imul(y, G) | 0, i = (i = i + Math.imul(y, V) | 0) + Math.imul(E, G) | 0, a = a + Math.imul(E, V) | 0, r = r + Math.imul(_, W) | 0, i = (i = i + Math.imul(_, K) | 0) + Math.imul(b, W) | 0, a = a + Math.imul(b, K) | 0, r = r + Math.imul(h, Q) | 0, i = (i = i + Math.imul(h, Z) | 0) + Math.imul(m, Q) | 0, a = a + Math.imul(m, Z) | 0, r = r + Math.imul(d, J) | 0, i = (i = i + Math.imul(d, ee) | 0) + Math.imul(f, J) | 0;
            var ey = (c + r | 0) + ((8191 & i) << 13) | 0;
            c = ((a = a + Math.imul(f, ee) | 0) + (i >>> 13) | 0) + (ey >>> 26) | 0, ey &= 67108863, r = Math.imul(C, j), i = (i = Math.imul(C, z)) + Math.imul(D, j) | 0, a = Math.imul(D, z), r = r + Math.imul(x, G) | 0, i = (i = i + Math.imul(x, V) | 0) + Math.imul(w, G) | 0, a = a + Math.imul(w, V) | 0, r = r + Math.imul(y, W) | 0, i = (i = i + Math.imul(y, K) | 0) + Math.imul(E, W) | 0, a = a + Math.imul(E, K) | 0, r = r + Math.imul(_, Q) | 0, i = (i = i + Math.imul(_, Z) | 0) + Math.imul(b, Q) | 0, a = a + Math.imul(b, Z) | 0, r = r + Math.imul(h, J) | 0, i = (i = i + Math.imul(h, ee) | 0) + Math.imul(m, J) | 0, a = a + Math.imul(m, ee) | 0, r = r + Math.imul(d, en) | 0, i = (i = i + Math.imul(d, er) | 0) + Math.imul(f, en) | 0;
            var eE = (c + r | 0) + ((8191 & i) << 13) | 0;
            c = ((a = a + Math.imul(f, er) | 0) + (i >>> 13) | 0) + (eE >>> 26) | 0, eE &= 67108863, r = Math.imul(M, j), i = (i = Math.imul(M, z)) + Math.imul(A, j) | 0, a = Math.imul(A, z), r = r + Math.imul(C, G) | 0, i = (i = i + Math.imul(C, V) | 0) + Math.imul(D, G) | 0, a = a + Math.imul(D, V) | 0, r = r + Math.imul(x, W) | 0, i = (i = i + Math.imul(x, K) | 0) + Math.imul(w, W) | 0, a = a + Math.imul(w, K) | 0, r = r + Math.imul(y, Q) | 0, i = (i = i + Math.imul(y, Z) | 0) + Math.imul(E, Q) | 0, a = a + Math.imul(E, Z) | 0, r = r + Math.imul(_, J) | 0, i = (i = i + Math.imul(_, ee) | 0) + Math.imul(b, J) | 0, a = a + Math.imul(b, ee) | 0, r = r + Math.imul(h, en) | 0, i = (i = i + Math.imul(h, er) | 0) + Math.imul(m, en) | 0, a = a + Math.imul(m, er) | 0, r = r + Math.imul(d, ea) | 0, i = (i = i + Math.imul(d, eo) | 0) + Math.imul(f, ea) | 0;
            var eS = (c + r | 0) + ((8191 & i) << 13) | 0;
            c = ((a = a + Math.imul(f, eo) | 0) + (i >>> 13) | 0) + (eS >>> 26) | 0, eS &= 67108863, r = Math.imul(R, j), i = (i = Math.imul(R, z)) + Math.imul(N, j) | 0, a = Math.imul(N, z), r = r + Math.imul(M, G) | 0, i = (i = i + Math.imul(M, V) | 0) + Math.imul(A, G) | 0, a = a + Math.imul(A, V) | 0, r = r + Math.imul(C, W) | 0, i = (i = i + Math.imul(C, K) | 0) + Math.imul(D, W) | 0, a = a + Math.imul(D, K) | 0, r = r + Math.imul(x, Q) | 0, i = (i = i + Math.imul(x, Z) | 0) + Math.imul(w, Q) | 0, a = a + Math.imul(w, Z) | 0, r = r + Math.imul(y, J) | 0, i = (i = i + Math.imul(y, ee) | 0) + Math.imul(E, J) | 0, a = a + Math.imul(E, ee) | 0, r = r + Math.imul(_, en) | 0, i = (i = i + Math.imul(_, er) | 0) + Math.imul(b, en) | 0, a = a + Math.imul(b, er) | 0, r = r + Math.imul(h, ea) | 0, i = (i = i + Math.imul(h, eo) | 0) + Math.imul(m, ea) | 0, a = a + Math.imul(m, eo) | 0, r = r + Math.imul(d, eu) | 0, i = (i = i + Math.imul(d, ec) | 0) + Math.imul(f, eu) | 0;
            var ex = (c + r | 0) + ((8191 & i) << 13) | 0;
            c = ((a = a + Math.imul(f, ec) | 0) + (i >>> 13) | 0) + (ex >>> 26) | 0, ex &= 67108863, r = Math.imul(L, j), i = (i = Math.imul(L, z)) + Math.imul(P, j) | 0, a = Math.imul(P, z), r = r + Math.imul(R, G) | 0, i = (i = i + Math.imul(R, V) | 0) + Math.imul(N, G) | 0, a = a + Math.imul(N, V) | 0, r = r + Math.imul(M, W) | 0, i = (i = i + Math.imul(M, K) | 0) + Math.imul(A, W) | 0, a = a + Math.imul(A, K) | 0, r = r + Math.imul(C, Q) | 0, i = (i = i + Math.imul(C, Z) | 0) + Math.imul(D, Q) | 0, a = a + Math.imul(D, Z) | 0, r = r + Math.imul(x, J) | 0, i = (i = i + Math.imul(x, ee) | 0) + Math.imul(w, J) | 0, a = a + Math.imul(w, ee) | 0, r = r + Math.imul(y, en) | 0, i = (i = i + Math.imul(y, er) | 0) + Math.imul(E, en) | 0, a = a + Math.imul(E, er) | 0, r = r + Math.imul(_, ea) | 0, i = (i = i + Math.imul(_, eo) | 0) + Math.imul(b, ea) | 0, a = a + Math.imul(b, eo) | 0, r = r + Math.imul(h, eu) | 0, i = (i = i + Math.imul(h, ec) | 0) + Math.imul(m, eu) | 0, a = a + Math.imul(m, ec) | 0, r = r + Math.imul(d, ed) | 0, i = (i = i + Math.imul(d, ef) | 0) + Math.imul(f, ed) | 0;
            var ew = (c + r | 0) + ((8191 & i) << 13) | 0;
            c = ((a = a + Math.imul(f, ef) | 0) + (i >>> 13) | 0) + (ew >>> 26) | 0, ew &= 67108863, r = Math.imul(B, j), i = (i = Math.imul(B, z)) + Math.imul(U, j) | 0, a = Math.imul(U, z), r = r + Math.imul(L, G) | 0, i = (i = i + Math.imul(L, V) | 0) + Math.imul(P, G) | 0, a = a + Math.imul(P, V) | 0, r = r + Math.imul(R, W) | 0, i = (i = i + Math.imul(R, K) | 0) + Math.imul(N, W) | 0, a = a + Math.imul(N, K) | 0, r = r + Math.imul(M, Q) | 0, i = (i = i + Math.imul(M, Z) | 0) + Math.imul(A, Q) | 0, a = a + Math.imul(A, Z) | 0, r = r + Math.imul(C, J) | 0, i = (i = i + Math.imul(C, ee) | 0) + Math.imul(D, J) | 0, a = a + Math.imul(D, ee) | 0, r = r + Math.imul(x, en) | 0, i = (i = i + Math.imul(x, er) | 0) + Math.imul(w, en) | 0, a = a + Math.imul(w, er) | 0, r = r + Math.imul(y, ea) | 0, i = (i = i + Math.imul(y, eo) | 0) + Math.imul(E, ea) | 0, a = a + Math.imul(E, eo) | 0, r = r + Math.imul(_, eu) | 0, i = (i = i + Math.imul(_, ec) | 0) + Math.imul(b, eu) | 0, a = a + Math.imul(b, ec) | 0, r = r + Math.imul(h, ed) | 0, i = (i = i + Math.imul(h, ef) | 0) + Math.imul(m, ed) | 0, a = a + Math.imul(m, ef) | 0, r = r + Math.imul(d, eh) | 0, i = (i = i + Math.imul(d, em) | 0) + Math.imul(f, eh) | 0;
            var eT = (c + r | 0) + ((8191 & i) << 13) | 0;
            c = ((a = a + Math.imul(f, em) | 0) + (i >>> 13) | 0) + (eT >>> 26) | 0, eT &= 67108863, r = Math.imul(B, G), i = (i = Math.imul(B, V)) + Math.imul(U, G) | 0, a = Math.imul(U, V), r = r + Math.imul(L, W) | 0, i = (i = i + Math.imul(L, K) | 0) + Math.imul(P, W) | 0, a = a + Math.imul(P, K) | 0, r = r + Math.imul(R, Q) | 0, i = (i = i + Math.imul(R, Z) | 0) + Math.imul(N, Q) | 0, a = a + Math.imul(N, Z) | 0, r = r + Math.imul(M, J) | 0, i = (i = i + Math.imul(M, ee) | 0) + Math.imul(A, J) | 0, a = a + Math.imul(A, ee) | 0, r = r + Math.imul(C, en) | 0, i = (i = i + Math.imul(C, er) | 0) + Math.imul(D, en) | 0, a = a + Math.imul(D, er) | 0, r = r + Math.imul(x, ea) | 0, i = (i = i + Math.imul(x, eo) | 0) + Math.imul(w, ea) | 0, a = a + Math.imul(w, eo) | 0, r = r + Math.imul(y, eu) | 0, i = (i = i + Math.imul(y, ec) | 0) + Math.imul(E, eu) | 0, a = a + Math.imul(E, ec) | 0, r = r + Math.imul(_, ed) | 0, i = (i = i + Math.imul(_, ef) | 0) + Math.imul(b, ed) | 0, a = a + Math.imul(b, ef) | 0, r = r + Math.imul(h, eh) | 0, i = (i = i + Math.imul(h, em) | 0) + Math.imul(m, eh) | 0;
            var eC = (c + r | 0) + ((8191 & i) << 13) | 0;
            c = ((a = a + Math.imul(m, em) | 0) + (i >>> 13) | 0) + (eC >>> 26) | 0, eC &= 67108863, r = Math.imul(B, W), i = (i = Math.imul(B, K)) + Math.imul(U, W) | 0, a = Math.imul(U, K), r = r + Math.imul(L, Q) | 0, i = (i = i + Math.imul(L, Z) | 0) + Math.imul(P, Q) | 0, a = a + Math.imul(P, Z) | 0, r = r + Math.imul(R, J) | 0, i = (i = i + Math.imul(R, ee) | 0) + Math.imul(N, J) | 0, a = a + Math.imul(N, ee) | 0, r = r + Math.imul(M, en) | 0, i = (i = i + Math.imul(M, er) | 0) + Math.imul(A, en) | 0, a = a + Math.imul(A, er) | 0, r = r + Math.imul(C, ea) | 0, i = (i = i + Math.imul(C, eo) | 0) + Math.imul(D, ea) | 0, a = a + Math.imul(D, eo) | 0, r = r + Math.imul(x, eu) | 0, i = (i = i + Math.imul(x, ec) | 0) + Math.imul(w, eu) | 0, a = a + Math.imul(w, ec) | 0, r = r + Math.imul(y, ed) | 0, i = (i = i + Math.imul(y, ef) | 0) + Math.imul(E, ed) | 0, a = a + Math.imul(E, ef) | 0, r = r + Math.imul(_, eh) | 0, i = (i = i + Math.imul(_, em) | 0) + Math.imul(b, eh) | 0;
            var eD = (c + r | 0) + ((8191 & i) << 13) | 0;
            c = ((a = a + Math.imul(b, em) | 0) + (i >>> 13) | 0) + (eD >>> 26) | 0, eD &= 67108863, r = Math.imul(B, Q), i = (i = Math.imul(B, Z)) + Math.imul(U, Q) | 0, a = Math.imul(U, Z), r = r + Math.imul(L, J) | 0, i = (i = i + Math.imul(L, ee) | 0) + Math.imul(P, J) | 0, a = a + Math.imul(P, ee) | 0, r = r + Math.imul(R, en) | 0, i = (i = i + Math.imul(R, er) | 0) + Math.imul(N, en) | 0, a = a + Math.imul(N, er) | 0, r = r + Math.imul(M, ea) | 0, i = (i = i + Math.imul(M, eo) | 0) + Math.imul(A, ea) | 0, a = a + Math.imul(A, eo) | 0, r = r + Math.imul(C, eu) | 0, i = (i = i + Math.imul(C, ec) | 0) + Math.imul(D, eu) | 0, a = a + Math.imul(D, ec) | 0, r = r + Math.imul(x, ed) | 0, i = (i = i + Math.imul(x, ef) | 0) + Math.imul(w, ed) | 0, a = a + Math.imul(w, ef) | 0, r = r + Math.imul(y, eh) | 0, i = (i = i + Math.imul(y, em) | 0) + Math.imul(E, eh) | 0;
            var eO = (c + r | 0) + ((8191 & i) << 13) | 0;
            c = ((a = a + Math.imul(E, em) | 0) + (i >>> 13) | 0) + (eO >>> 26) | 0, eO &= 67108863, r = Math.imul(B, J), i = (i = Math.imul(B, ee)) + Math.imul(U, J) | 0, a = Math.imul(U, ee), r = r + Math.imul(L, en) | 0, i = (i = i + Math.imul(L, er) | 0) + Math.imul(P, en) | 0, a = a + Math.imul(P, er) | 0, r = r + Math.imul(R, ea) | 0, i = (i = i + Math.imul(R, eo) | 0) + Math.imul(N, ea) | 0, a = a + Math.imul(N, eo) | 0, r = r + Math.imul(M, eu) | 0, i = (i = i + Math.imul(M, ec) | 0) + Math.imul(A, eu) | 0, a = a + Math.imul(A, ec) | 0, r = r + Math.imul(C, ed) | 0, i = (i = i + Math.imul(C, ef) | 0) + Math.imul(D, ed) | 0, a = a + Math.imul(D, ef) | 0, r = r + Math.imul(x, eh) | 0, i = (i = i + Math.imul(x, em) | 0) + Math.imul(w, eh) | 0;
            var eM = (c + r | 0) + ((8191 & i) << 13) | 0;
            c = ((a = a + Math.imul(w, em) | 0) + (i >>> 13) | 0) + (eM >>> 26) | 0, eM &= 67108863, r = Math.imul(B, en), i = (i = Math.imul(B, er)) + Math.imul(U, en) | 0, a = Math.imul(U, er), r = r + Math.imul(L, ea) | 0, i = (i = i + Math.imul(L, eo) | 0) + Math.imul(P, ea) | 0, a = a + Math.imul(P, eo) | 0, r = r + Math.imul(R, eu) | 0, i = (i = i + Math.imul(R, ec) | 0) + Math.imul(N, eu) | 0, a = a + Math.imul(N, ec) | 0, r = r + Math.imul(M, ed) | 0, i = (i = i + Math.imul(M, ef) | 0) + Math.imul(A, ed) | 0, a = a + Math.imul(A, ef) | 0, r = r + Math.imul(C, eh) | 0, i = (i = i + Math.imul(C, em) | 0) + Math.imul(D, eh) | 0;
            var eA = (c + r | 0) + ((8191 & i) << 13) | 0;
            c = ((a = a + Math.imul(D, em) | 0) + (i >>> 13) | 0) + (eA >>> 26) | 0, eA &= 67108863, r = Math.imul(B, ea), i = (i = Math.imul(B, eo)) + Math.imul(U, ea) | 0, a = Math.imul(U, eo), r = r + Math.imul(L, eu) | 0, i = (i = i + Math.imul(L, ec) | 0) + Math.imul(P, eu) | 0, a = a + Math.imul(P, ec) | 0, r = r + Math.imul(R, ed) | 0, i = (i = i + Math.imul(R, ef) | 0) + Math.imul(N, ed) | 0, a = a + Math.imul(N, ef) | 0, r = r + Math.imul(M, eh) | 0, i = (i = i + Math.imul(M, em) | 0) + Math.imul(A, eh) | 0;
            var ek = (c + r | 0) + ((8191 & i) << 13) | 0;
            c = ((a = a + Math.imul(A, em) | 0) + (i >>> 13) | 0) + (ek >>> 26) | 0, ek &= 67108863, r = Math.imul(B, eu), i = (i = Math.imul(B, ec)) + Math.imul(U, eu) | 0, a = Math.imul(U, ec), r = r + Math.imul(L, ed) | 0, i = (i = i + Math.imul(L, ef) | 0) + Math.imul(P, ed) | 0, a = a + Math.imul(P, ef) | 0, r = r + Math.imul(R, eh) | 0, i = (i = i + Math.imul(R, em) | 0) + Math.imul(N, eh) | 0;
            var eR = (c + r | 0) + ((8191 & i) << 13) | 0;
            c = ((a = a + Math.imul(N, em) | 0) + (i >>> 13) | 0) + (eR >>> 26) | 0, eR &= 67108863, r = Math.imul(B, ed), i = (i = Math.imul(B, ef)) + Math.imul(U, ed) | 0, a = Math.imul(U, ef), r = r + Math.imul(L, eh) | 0, i = (i = i + Math.imul(L, em) | 0) + Math.imul(P, eh) | 0;
            var eN = (c + r | 0) + ((8191 & i) << 13) | 0;
            c = ((a = a + Math.imul(P, em) | 0) + (i >>> 13) | 0) + (eN >>> 26) | 0, eN &= 67108863, r = Math.imul(B, eh), i = (i = Math.imul(B, em)) + Math.imul(U, eh) | 0;
            var eI = (c + r | 0) + ((8191 & i) << 13) | 0;
            return c = ((a = Math.imul(U, em)) + (i >>> 13) | 0) + (eI >>> 26) | 0, eI &= 67108863, u[0] = eg, u[1] = e_, u[2] = eb, u[3] = ev, u[4] = ey, u[5] = eE, u[6] = eS, u[7] = ex, u[8] = ew, u[9] = eT, u[10] = eC, u[11] = eD, u[12] = eO, u[13] = eM, u[14] = eA, u[15] = ek, u[16] = eR, u[17] = eN, u[18] = eI, 0 !== c && (u[19] = c, n.length++), n
        };
        !Math.imul && (h = p);

        function m(e, t, n) {
            return new g().mulp(e, t, n)
        }

        function g(e, t) {
            this.x = e, this.y = t
        }
        a.prototype.mulTo = function(e, t) {
            var n, r = this.length + e.length;
            return n = 10 === this.length && 10 === e.length ? h(this, e, t) : r < 63 ? p(this, e, t) : r < 1024 ? function(e, t, n) {
                n.negative = t.negative ^ e.negative, n.length = e.length + t.length;
                for (var r = 0, i = 0, a = 0; a < n.length - 1; a++) {
                    var o = i;
                    i = 0;
                    for (var s = 67108863 & r, u = Math.min(a, t.length - 1), c = Math.max(0, a - e.length + 1); c <= u; c++) {
                        var l = a - c,
                            d = (0 | e.words[l]) * (0 | t.words[c]),
                            f = 67108863 & d;
                        o = o + (d / 67108864 | 0) | 0, s = 67108863 & (f = f + s | 0), i += (o = o + (f >>> 26) | 0) >>> 26, o &= 67108863
                    }
                    n.words[a] = s, r = o, o = i
                }
                return 0 !== r ? n.words[a] = r : n.length--, n.strip()
            }(this, e, t) : m(this, e, t)
        }, g.prototype.makeRBT = function(e) {
            for (var t = Array(e), n = a.prototype._countBits(e) - 1, r = 0; r < e; r++) t[r] = this.revBin(r, n, e);
            return t
        }, g.prototype.revBin = function(e, t, n) {
            if (0 === e || e === n - 1) return e;
            for (var r = 0, i = 0; i < t; i++) r |= (1 & e) << t - i - 1, e >>= 1;
            return r
        }, g.prototype.permute = function(e, t, n, r, i, a) {
            for (var o = 0; o < a; o++) r[o] = t[e[o]], i[o] = n[e[o]]
        }, g.prototype.transform = function(e, t, n, r, i, a) {
            this.permute(a, e, t, n, r, i);
            for (var o = 1; o < i; o <<= 1) {
                for (var s = o << 1, u = Math.cos(2 * Math.PI / s), c = Math.sin(2 * Math.PI / s), l = 0; l < i; l += s) {
                    for (var d = u, f = c, p = 0; p < o; p++) {
                        var h = n[l + p],
                            m = r[l + p],
                            g = n[l + p + o],
                            _ = r[l + p + o],
                            b = d * g - f * _;
                        _ = d * _ + f * g, g = b, n[l + p] = h + g, r[l + p] = m + _, n[l + p + o] = h - g, r[l + p + o] = m - _, p !== s && (b = u * d - c * f, f = u * f + c * d, d = b)
                    }
                }
            }
        }, g.prototype.guessLen13b = function(e, t) {
            var n = 1 | Math.max(t, e),
                r = 1 & n,
                i = 0;
            for (n = n / 2 | 0; n; n >>>= 1) i++;
            return 1 << i + 1 + r
        }, g.prototype.conjugate = function(e, t, n) {
            if (!(n <= 1))
                for (var r = 0; r < n / 2; r++) {
                    var i = e[r];
                    e[r] = e[n - r - 1], e[n - r - 1] = i, i = t[r], t[r] = -t[n - r - 1], t[n - r - 1] = -i
                }
        }, g.prototype.normalize13b = function(e, t) {
            for (var n = 0, r = 0; r < t / 2; r++) {
                var i = 8192 * Math.round(e[2 * r + 1] / t) + Math.round(e[2 * r] / t) + n;
                e[r] = 67108863 & i, n = i < 67108864 ? 0 : i / 67108864 | 0
            }
            return e
        }, g.prototype.convert13b = function(e, t, n, i) {
            for (var a = 0, o = 0; o < t; o++) a += 0 | e[o], n[2 * o] = 8191 & a, a >>>= 13, n[2 * o + 1] = 8191 & a, a >>>= 13;
            for (o = 2 * t; o < i; ++o) n[o] = 0;
            r(0 === a), r((-8192 & a) == 0)
        }, g.prototype.stub = function(e) {
            for (var t = Array(e), n = 0; n < e; n++) t[n] = 0;
            return t
        }, g.prototype.mulp = function(e, t, n) {
            var r = 2 * this.guessLen13b(e.length, t.length),
                i = this.makeRBT(r),
                a = this.stub(r),
                o = Array(r),
                s = Array(r),
                u = Array(r),
                c = Array(r),
                l = Array(r),
                d = Array(r),
                f = n.words;
            f.length = r, this.convert13b(e.words, e.length, o, r), this.convert13b(t.words, t.length, c, r), this.transform(o, a, s, u, r, i), this.transform(c, a, l, d, r, i);
            for (var p = 0; p < r; p++) {
                var h = s[p] * l[p] - u[p] * d[p];
                u[p] = s[p] * d[p] + u[p] * l[p], s[p] = h
            }
            return this.conjugate(s, u, r), this.transform(s, u, f, a, r, i), this.conjugate(f, a, r), this.normalize13b(f, r), n.negative = e.negative ^ t.negative, n.length = e.length + t.length, n.strip()
        }, a.prototype.mul = function(e) {
            var t = new a(null);
            return t.words = Array(this.length + e.length), this.mulTo(e, t)
        }, a.prototype.mulf = function(e) {
            var t = new a(null);
            return t.words = Array(this.length + e.length), m(this, e, t)
        }, a.prototype.imul = function(e) {
            return this.clone().mulTo(e, this)
        }, a.prototype.imuln = function(e) {
            r("number" == typeof e), r(e < 67108864);
            for (var t = 0, n = 0; n < this.length; n++) {
                var i = (0 | this.words[n]) * e,
                    a = (67108863 & i) + (67108863 & t);
                t >>= 26, t += (i / 67108864 | 0) + (a >>> 26), this.words[n] = 67108863 & a
            }
            return 0 !== t && (this.words[n] = t, this.length++), this
        }, a.prototype.muln = function(e) {
            return this.clone().imuln(e)
        }, a.prototype.sqr = function() {
            return this.mul(this)
        }, a.prototype.isqr = function() {
            return this.imul(this.clone())
        }, a.prototype.pow = function(e) {
            var t = function(e) {
                for (var t = Array(e.bitLength()), n = 0; n < t.length; n++) {
                    var r = n / 26 | 0,
                        i = n % 26;
                    t[n] = (e.words[r] & 1 << i) >>> i
                }
                return t
            }(e);
            if (0 === t.length) return new a(1);
            for (var n = this, r = 0; r < t.length && 0 === t[r]; r++, n = n.sqr());
            if (++r < t.length)
                for (var i = n.sqr(); r < t.length; r++, i = i.sqr()) 0 !== t[r] && (n = n.mul(i));
            return n
        }, a.prototype.iushln = function(e) {
            r("number" == typeof e && e >= 0);
            var t, n = e % 26,
                i = (e - n) / 26,
                a = 67108863 >>> 26 - n << 26 - n;
            if (0 !== n) {
                var o = 0;
                for (t = 0; t < this.length; t++) {
                    var s = this.words[t] & a,
                        u = (0 | this.words[t]) - s << n;
                    this.words[t] = u | o, o = s >>> 26 - n
                }
                o && (this.words[t] = o, this.length++)
            }
            if (0 !== i) {
                for (t = this.length - 1; t >= 0; t--) this.words[t + i] = this.words[t];
                for (t = 0; t < i; t++) this.words[t] = 0;
                this.length += i
            }
            return this.strip()
        }, a.prototype.ishln = function(e) {
            return r(0 === this.negative), this.iushln(e)
        }, a.prototype.iushrn = function(e, t, n) {
            r("number" == typeof e && e >= 0), i = t ? (t - t % 26) / 26 : 0;
            var i, a = e % 26,
                o = Math.min((e - a) / 26, this.length),
                s = 67108863 ^ 67108863 >>> a << a;
            if (i -= o, i = Math.max(0, i), n) {
                for (var u = 0; u < o; u++) n.words[u] = this.words[u];
                n.length = o
            }
            if (0 === o);
            else if (this.length > o)
                for (this.length -= o, u = 0; u < this.length; u++) this.words[u] = this.words[u + o];
            else this.words[0] = 0, this.length = 1;
            var c = 0;
            for (u = this.length - 1; u >= 0 && (0 !== c || u >= i); u--) {
                var l = 0 | this.words[u];
                this.words[u] = c << 26 - a | l >>> a, c = l & s
            }
            return n && 0 !== c && (n.words[n.length++] = c), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip()
        }, a.prototype.ishrn = function(e, t, n) {
            return r(0 === this.negative), this.iushrn(e, t, n)
        }, a.prototype.shln = function(e) {
            return this.clone().ishln(e)
        }, a.prototype.ushln = function(e) {
            return this.clone().iushln(e)
        }, a.prototype.shrn = function(e) {
            return this.clone().ishrn(e)
        }, a.prototype.ushrn = function(e) {
            return this.clone().iushrn(e)
        }, a.prototype.testn = function(e) {
            r("number" == typeof e && e >= 0);
            var t = e % 26,
                n = (e - t) / 26;
            return !(this.length <= n) && !!(this.words[n] & 1 << t)
        }, a.prototype.imaskn = function(e) {
            r("number" == typeof e && e >= 0);
            var t = e % 26,
                n = (e - t) / 26;
            return (r(0 === this.negative, "imaskn works only with positive numbers"), this.length <= n) ? this : (0 !== t && n++, this.length = Math.min(n, this.length), 0 !== t && (this.words[this.length - 1] &= 67108863 ^ 67108863 >>> t << t), this.strip())
        }, a.prototype.maskn = function(e) {
            return this.clone().imaskn(e)
        }, a.prototype.iaddn = function(e) {
            if (r("number" == typeof e), r(e < 67108864), e < 0) return this.isubn(-e);
            if (0 !== this.negative) return 1 === this.length && (0 | this.words[0]) < e ? (this.words[0] = e - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(e), this.negative = 1, this);
            return this._iaddn(e)
        }, a.prototype._iaddn = function(e) {
            this.words[0] += e;
            for (var t = 0; t < this.length && this.words[t] >= 67108864; t++) this.words[t] -= 67108864, t === this.length - 1 ? this.words[t + 1] = 1 : this.words[t + 1]++;
            return this.length = Math.max(this.length, t + 1), this
        }, a.prototype.isubn = function(e) {
            if (r("number" == typeof e), r(e < 67108864), e < 0) return this.iaddn(-e);
            if (0 !== this.negative) return this.negative = 0, this.iaddn(e), this.negative = 1, this;
            if (this.words[0] -= e, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
            else
                for (var t = 0; t < this.length && this.words[t] < 0; t++) this.words[t] += 67108864, this.words[t + 1] -= 1;
            return this.strip()
        }, a.prototype.addn = function(e) {
            return this.clone().iaddn(e)
        }, a.prototype.subn = function(e) {
            return this.clone().isubn(e)
        }, a.prototype.iabs = function() {
            return this.negative = 0, this
        }, a.prototype.abs = function() {
            return this.clone().iabs()
        }, a.prototype._ishlnsubmul = function(e, t, n) {
            var i, a, o = e.length + n;
            this._expand(o);
            var s = 0;
            for (i = 0; i < e.length; i++) {
                a = (0 | this.words[i + n]) + s;
                var u = (0 | e.words[i]) * t;
                a -= 67108863 & u, s = (a >> 26) - (u / 67108864 | 0), this.words[i + n] = 67108863 & a
            }
            for (; i < this.length - n; i++) s = (a = (0 | this.words[i + n]) + s) >> 26, this.words[i + n] = 67108863 & a;
            if (0 === s) return this.strip();
            for (r(-1 === s), s = 0, i = 0; i < this.length; i++) s = (a = -(0 | this.words[i]) + s) >> 26, this.words[i] = 67108863 & a;
            return this.negative = 1, this.strip()
        }, a.prototype._wordDiv = function(e, t) {
            var n, r = this.length - e.length,
                i = this.clone(),
                o = e,
                s = 0 | o.words[o.length - 1];
            0 != (r = 26 - this._countBits(s)) && (o = o.ushln(r), i.iushln(r), s = 0 | o.words[o.length - 1]);
            var u = i.length - o.length;
            if ("mod" !== t) {
                (n = new a(null)).length = u + 1, n.words = Array(n.length);
                for (var c = 0; c < n.length; c++) n.words[c] = 0
            }
            var l = i.clone()._ishlnsubmul(o, 1, u);
            0 === l.negative && (i = l, n && (n.words[u] = 1));
            for (var d = u - 1; d >= 0; d--) {
                var f = (0 | i.words[o.length + d]) * 67108864 + (0 | i.words[o.length + d - 1]);
                for (f = Math.min(f / s | 0, 67108863), i._ishlnsubmul(o, f, d); 0 !== i.negative;) f--, i.negative = 0, i._ishlnsubmul(o, 1, d), !i.isZero() && (i.negative ^= 1);
                n && (n.words[d] = f)
            }
            return n && n.strip(), i.strip(), "div" !== t && 0 !== r && i.iushrn(r), {
                div: n || null,
                mod: i
            }
        }, a.prototype.divmod = function(e, t, n) {
            var i, o, s;
            if (r(!e.isZero()), this.isZero()) return {
                div: new a(0),
                mod: new a(0)
            };
            if (0 !== this.negative && 0 === e.negative) return s = this.neg().divmod(e, t), "mod" !== t && (i = s.div.neg()), "div" !== t && (o = s.mod.neg(), n && 0 !== o.negative && o.iadd(e)), {
                div: i,
                mod: o
            };
            if (0 === this.negative && 0 !== e.negative) return s = this.divmod(e.neg(), t), "mod" !== t && (i = s.div.neg()), {
                div: i,
                mod: s.mod
            };
            if ((this.negative & e.negative) != 0) return s = this.neg().divmod(e.neg(), t), "div" !== t && (o = s.mod.neg(), n && 0 !== o.negative && o.isub(e)), {
                div: s.div,
                mod: o
            };
            if (e.length > this.length || 0 > this.cmp(e)) return {
                div: new a(0),
                mod: this
            };
            if (1 === e.length) return "div" === t ? {
                div: this.divn(e.words[0]),
                mod: null
            } : "mod" === t ? {
                div: null,
                mod: new a(this.modn(e.words[0]))
            } : {
                div: this.divn(e.words[0]),
                mod: new a(this.modn(e.words[0]))
            };
            return this._wordDiv(e, t)
        }, a.prototype.div = function(e) {
            return this.divmod(e, "div", !1).div
        }, a.prototype.mod = function(e) {
            return this.divmod(e, "mod", !1).mod
        }, a.prototype.umod = function(e) {
            return this.divmod(e, "mod", !0).mod
        }, a.prototype.divRound = function(e) {
            var t = this.divmod(e);
            if (t.mod.isZero()) return t.div;
            var n = 0 !== t.div.negative ? t.mod.isub(e) : t.mod,
                r = e.ushrn(1),
                i = e.andln(1),
                a = n.cmp(r);
            return a < 0 || 1 === i && 0 === a ? t.div : 0 !== t.div.negative ? t.div.isubn(1) : t.div.iaddn(1)
        }, a.prototype.modn = function(e) {
            r(e <= 67108863);
            for (var t = 67108864 % e, n = 0, i = this.length - 1; i >= 0; i--) n = (t * n + (0 | this.words[i])) % e;
            return n
        }, a.prototype.idivn = function(e) {
            r(e <= 67108863);
            for (var t = 0, n = this.length - 1; n >= 0; n--) {
                var i = (0 | this.words[n]) + 67108864 * t;
                this.words[n] = i / e | 0, t = i % e
            }
            return this.strip()
        }, a.prototype.divn = function(e) {
            return this.clone().idivn(e)
        }, a.prototype.egcd = function(e) {
            r(0 === e.negative), r(!e.isZero());
            var t = this,
                n = e.clone();
            t = 0 !== t.negative ? t.umod(e) : t.clone();
            for (var i = new a(1), o = new a(0), s = new a(0), u = new a(1), c = 0; t.isEven() && n.isEven();) t.iushrn(1), n.iushrn(1), ++c;
            for (var l = n.clone(), d = t.clone(); !t.isZero();) {
                for (var f = 0, p = 1;
                    (t.words[0] & p) == 0 && f < 26; ++f, p <<= 1);
                if (f > 0)
                    for (t.iushrn(f); f-- > 0;)(i.isOdd() || o.isOdd()) && (i.iadd(l), o.isub(d)), i.iushrn(1), o.iushrn(1);
                for (var h = 0, m = 1;
                    (n.words[0] & m) == 0 && h < 26; ++h, m <<= 1);
                if (h > 0)
                    for (n.iushrn(h); h-- > 0;)(s.isOdd() || u.isOdd()) && (s.iadd(l), u.isub(d)), s.iushrn(1), u.iushrn(1);
                t.cmp(n) >= 0 ? (t.isub(n), i.isub(s), o.isub(u)) : (n.isub(t), s.isub(i), u.isub(o))
            }
            return {
                a: s,
                b: u,
                gcd: n.iushln(c)
            }
        }, a.prototype._invmp = function(e) {
            r(0 === e.negative), r(!e.isZero());
            var t, n = this,
                i = e.clone();
            n = 0 !== n.negative ? n.umod(e) : n.clone();
            for (var o = new a(1), s = new a(0), u = i.clone(); n.cmpn(1) > 0 && i.cmpn(1) > 0;) {
                for (var c = 0, l = 1;
                    (n.words[0] & l) == 0 && c < 26; ++c, l <<= 1);
                if (c > 0)
                    for (n.iushrn(c); c-- > 0;) o.isOdd() && o.iadd(u), o.iushrn(1);
                for (var d = 0, f = 1;
                    (i.words[0] & f) == 0 && d < 26; ++d, f <<= 1);
                if (d > 0)
                    for (i.iushrn(d); d-- > 0;) s.isOdd() && s.iadd(u), s.iushrn(1);
                n.cmp(i) >= 0 ? (n.isub(i), o.isub(s)) : (i.isub(n), s.isub(o))
            }
            return 0 > (t = 0 === n.cmpn(1) ? o : s).cmpn(0) && t.iadd(e), t
        }, a.prototype.gcd = function(e) {
            if (this.isZero()) return e.abs();
            if (e.isZero()) return this.abs();
            var t = this.clone(),
                n = e.clone();
            t.negative = 0, n.negative = 0;
            for (var r = 0; t.isEven() && n.isEven(); r++) t.iushrn(1), n.iushrn(1);
            for (;;) {
                for (; t.isEven();) t.iushrn(1);
                for (; n.isEven();) n.iushrn(1);
                var i = t.cmp(n);
                if (i < 0) {
                    var a = t;
                    t = n, n = a
                } else if (0 === i || 0 === n.cmpn(1)) break;
                t.isub(n)
            }
            return n.iushln(r)
        }, a.prototype.invm = function(e) {
            return this.egcd(e).a.umod(e)
        }, a.prototype.isEven = function() {
            return (1 & this.words[0]) == 0
        }, a.prototype.isOdd = function() {
            return (1 & this.words[0]) == 1
        }, a.prototype.andln = function(e) {
            return this.words[0] & e
        }, a.prototype.bincn = function(e) {
            r("number" == typeof e);
            var t = e % 26,
                n = (e - t) / 26,
                i = 1 << t;
            if (this.length <= n) return this._expand(n + 1), this.words[n] |= i, this;
            for (var a = i, o = n; 0 !== a && o < this.length; o++) {
                var s = 0 | this.words[o];
                s += a, a = s >>> 26, s &= 67108863, this.words[o] = s
            }
            return 0 !== a && (this.words[o] = a, this.length++), this
        }, a.prototype.isZero = function() {
            return 1 === this.length && 0 === this.words[0]
        }, a.prototype.cmpn = function(e) {
            var t, n = e < 0;
            if (0 !== this.negative && !n) return -1;
            if (0 === this.negative && n) return 1;
            if (this.strip(), this.length > 1) t = 1;
            else {
                n && (e = -e), r(e <= 67108863, "Number is too big");
                var i = 0 | this.words[0];
                t = i === e ? 0 : i < e ? -1 : 1
            }
            return 0 !== this.negative ? 0 | -t : t
        }, a.prototype.cmp = function(e) {
            if (0 !== this.negative && 0 === e.negative) return -1;
            if (0 === this.negative && 0 !== e.negative) return 1;
            var t = this.ucmp(e);
            return 0 !== this.negative ? 0 | -t : t
        }, a.prototype.ucmp = function(e) {
            if (this.length > e.length) return 1;
            if (this.length < e.length) return -1;
            for (var t = 0, n = this.length - 1; n >= 0; n--) {
                var r = 0 | this.words[n],
                    i = 0 | e.words[n];
                if (r !== i) {
                    r < i ? t = -1 : r > i && (t = 1);
                    break
                }
            }
            return t
        }, a.prototype.gtn = function(e) {
            return 1 === this.cmpn(e)
        }, a.prototype.gt = function(e) {
            return 1 === this.cmp(e)
        }, a.prototype.gten = function(e) {
            return this.cmpn(e) >= 0
        }, a.prototype.gte = function(e) {
            return this.cmp(e) >= 0
        }, a.prototype.ltn = function(e) {
            return -1 === this.cmpn(e)
        }, a.prototype.lt = function(e) {
            return -1 === this.cmp(e)
        }, a.prototype.lten = function(e) {
            return 0 >= this.cmpn(e)
        }, a.prototype.lte = function(e) {
            return 0 >= this.cmp(e)
        }, a.prototype.eqn = function(e) {
            return 0 === this.cmpn(e)
        }, a.prototype.eq = function(e) {
            return 0 === this.cmp(e)
        }, a.red = function(e) {
            return new x(e)
        }, a.prototype.toRed = function(e) {
            return r(!this.red, "Already a number in reduction context"), r(0 === this.negative, "red works only with positives"), e.convertTo(this)._forceRed(e)
        }, a.prototype.fromRed = function() {
            return r(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
        }, a.prototype._forceRed = function(e) {
            return this.red = e, this
        }, a.prototype.forceRed = function(e) {
            return r(!this.red, "Already a number in reduction context"), this._forceRed(e)
        }, a.prototype.redAdd = function(e) {
            return r(this.red, "redAdd works only with red numbers"), this.red.add(this, e)
        }, a.prototype.redIAdd = function(e) {
            return r(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, e)
        }, a.prototype.redSub = function(e) {
            return r(this.red, "redSub works only with red numbers"), this.red.sub(this, e)
        }, a.prototype.redISub = function(e) {
            return r(this.red, "redISub works only with red numbers"), this.red.isub(this, e)
        }, a.prototype.redShl = function(e) {
            return r(this.red, "redShl works only with red numbers"), this.red.shl(this, e)
        }, a.prototype.redMul = function(e) {
            return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.mul(this, e)
        }, a.prototype.redIMul = function(e) {
            return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.imul(this, e)
        }, a.prototype.redSqr = function() {
            return r(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
        }, a.prototype.redISqr = function() {
            return r(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
        }, a.prototype.redSqrt = function() {
            return r(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
        }, a.prototype.redInvm = function() {
            return r(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
        }, a.prototype.redNeg = function() {
            return r(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
        }, a.prototype.redPow = function(e) {
            return r(this.red && !e.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, e)
        };
        var _ = {
            k256: null,
            p224: null,
            p192: null,
            p25519: null
        };

        function b(e, t) {
            this.name = e, this.p = new a(t, 16), this.n = this.p.bitLength(), this.k = new a(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
        }

        function v() {
            b.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
        }

        function y() {
            b.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
        }

        function E() {
            b.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
        }

        function S() {
            b.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
        }

        function x(e) {
            if ("string" == typeof e) {
                var t = a._prime(e);
                this.m = t.p, this.prime = t
            } else r(e.gtn(1), "modulus must be greater than 1"), this.m = e, this.prime = null
        }

        function w(e) {
            x.call(this, e), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new a(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
        }
        b.prototype._tmp = function() {
            var e = new a(null);
            return e.words = Array(Math.ceil(this.n / 13)), e
        }, b.prototype.ireduce = function(e) {
            var t, n = e;
            do this.split(n, this.tmp), t = (n = (n = this.imulK(n)).iadd(this.tmp)).bitLength(); while (t > this.n);
            var r = t < this.n ? -1 : n.ucmp(this.p);
            return 0 === r ? (n.words[0] = 0, n.length = 1) : r > 0 ? n.isub(this.p) : void 0 !== n.strip ? n.strip() : n._strip(), n
        }, b.prototype.split = function(e, t) {
            e.iushrn(this.n, 0, t)
        }, b.prototype.imulK = function(e) {
            return e.imul(this.k)
        }, i(v, b), v.prototype.split = function(e, t) {
            for (var n = Math.min(e.length, 9), r = 0; r < n; r++) t.words[r] = e.words[r];
            if (t.length = n, e.length <= 9) {
                e.words[0] = 0, e.length = 1;
                return
            }
            var i = e.words[9];
            for (r = 10, t.words[t.length++] = 4194303 & i; r < e.length; r++) {
                var a = 0 | e.words[r];
                e.words[r - 10] = (4194303 & a) << 4 | i >>> 22, i = a
            }
            i >>>= 22, e.words[r - 10] = i, 0 === i && e.length > 10 ? e.length -= 10 : e.length -= 9
        }, v.prototype.imulK = function(e) {
            e.words[e.length] = 0, e.words[e.length + 1] = 0, e.length += 2;
            for (var t = 0, n = 0; n < e.length; n++) {
                var r = 0 | e.words[n];
                t += 977 * r, e.words[n] = 67108863 & t, t = 64 * r + (t / 67108864 | 0)
            }
            return 0 === e.words[e.length - 1] && (e.length--, 0 === e.words[e.length - 1] && e.length--), e
        }, i(y, b), i(E, b), i(S, b), S.prototype.imulK = function(e) {
            for (var t = 0, n = 0; n < e.length; n++) {
                var r = (0 | e.words[n]) * 19 + t,
                    i = 67108863 & r;
                r >>>= 26, e.words[n] = i, t = r
            }
            return 0 !== t && (e.words[e.length++] = t), e
        }, a._prime = function(e) {
            var t;
            if (_[e]) return _[e];
            if ("k256" === e) t = new v;
            else if ("p224" === e) t = new y;
            else if ("p192" === e) t = new E;
            else if ("p25519" === e) t = new S;
            else throw Error("Unknown prime " + e);
            return _[e] = t, t
        }, x.prototype._verify1 = function(e) {
            r(0 === e.negative, "red works only with positives"), r(e.red, "red works only with red numbers")
        }, x.prototype._verify2 = function(e, t) {
            r((e.negative | t.negative) == 0, "red works only with positives"), r(e.red && e.red === t.red, "red works only with red numbers")
        }, x.prototype.imod = function(e) {
            return this.prime ? this.prime.ireduce(e)._forceRed(this) : e.umod(this.m)._forceRed(this)
        }, x.prototype.neg = function(e) {
            return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this)
        }, x.prototype.add = function(e, t) {
            this._verify2(e, t);
            var n = e.add(t);
            return n.cmp(this.m) >= 0 && n.isub(this.m), n._forceRed(this)
        }, x.prototype.iadd = function(e, t) {
            this._verify2(e, t);
            var n = e.iadd(t);
            return n.cmp(this.m) >= 0 && n.isub(this.m), n
        }, x.prototype.sub = function(e, t) {
            this._verify2(e, t);
            var n = e.sub(t);
            return 0 > n.cmpn(0) && n.iadd(this.m), n._forceRed(this)
        }, x.prototype.isub = function(e, t) {
            this._verify2(e, t);
            var n = e.isub(t);
            return 0 > n.cmpn(0) && n.iadd(this.m), n
        }, x.prototype.shl = function(e, t) {
            return this._verify1(e), this.imod(e.ushln(t))
        }, x.prototype.imul = function(e, t) {
            return this._verify2(e, t), this.imod(e.imul(t))
        }, x.prototype.mul = function(e, t) {
            return this._verify2(e, t), this.imod(e.mul(t))
        }, x.prototype.isqr = function(e) {
            return this.imul(e, e.clone())
        }, x.prototype.sqr = function(e) {
            return this.mul(e, e)
        }, x.prototype.sqrt = function(e) {
            if (e.isZero()) return e.clone();
            var t = this.m.andln(3);
            if (r(t % 2 == 1), 3 === t) {
                var n = this.m.add(new a(1)).iushrn(2);
                return this.pow(e, n)
            }
            for (var i = this.m.subn(1), o = 0; !i.isZero() && 0 === i.andln(1);) o++, i.iushrn(1);
            r(!i.isZero());
            var s = new a(1).toRed(this),
                u = s.redNeg(),
                c = this.m.subn(1).iushrn(1),
                l = this.m.bitLength();
            for (l = new a(2 * l * l).toRed(this); 0 !== this.pow(l, c).cmp(u);) l.redIAdd(u);
            for (var d = this.pow(l, i), f = this.pow(e, i.addn(1).iushrn(1)), p = this.pow(e, i), h = o; 0 !== p.cmp(s);) {
                for (var m = p, g = 0; 0 !== m.cmp(s); g++) m = m.redSqr();
                r(g < h);
                var _ = this.pow(d, new a(1).iushln(h - g - 1));
                f = f.redMul(_), d = _.redSqr(), p = p.redMul(d), h = g
            }
            return f
        }, x.prototype.invm = function(e) {
            var t = e._invmp(this.m);
            return 0 !== t.negative ? (t.negative = 0, this.imod(t).redNeg()) : this.imod(t)
        }, x.prototype.pow = function(e, t) {
            if (t.isZero()) return new a(1).toRed(this);
            if (0 === t.cmpn(1)) return e.clone();
            var n = Array(16);
            n[0] = new a(1).toRed(this), n[1] = e;
            for (var r = 2; r < n.length; r++) n[r] = this.mul(n[r - 1], e);
            var i = n[0],
                o = 0,
                s = 0,
                u = t.bitLength() % 26;
            for (0 === u && (u = 26), r = t.length - 1; r >= 0; r--) {
                for (var c = t.words[r], l = u - 1; l >= 0; l--) {
                    var d = c >> l & 1;
                    if (i !== n[0] && (i = this.sqr(i)), 0 === d && 0 === o) {
                        s = 0;
                        continue
                    }
                    o <<= 1, o |= d, (4 == ++s || 0 === r && 0 === l) && (i = this.mul(i, n[o]), s = 0, o = 0)
                }
                u = 26
            }
            return i
        }, x.prototype.convertTo = function(e) {
            var t = e.umod(this.m);
            return t === e ? t.clone() : t
        }, x.prototype.convertFrom = function(e) {
            var t = e.clone();
            return t.red = null, t
        }, a.mont = function(e) {
            return new w(e)
        }, i(w, x), w.prototype.convertTo = function(e) {
            return this.imod(e.ushln(this.shift))
        }, w.prototype.convertFrom = function(e) {
            var t = this.imod(e.mul(this.rinv));
            return t.red = null, t
        }, w.prototype.imul = function(e, t) {
            if (e.isZero() || t.isZero()) return e.words[0] = 0, e.length = 1, e;
            var n = e.imul(t),
                r = n.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                i = n.isub(r).iushrn(this.shift),
                a = i;
            return i.cmp(this.m) >= 0 ? a = i.isub(this.m) : 0 > i.cmpn(0) && (a = i.iadd(this.m)), a._forceRed(this)
        }, w.prototype.mul = function(e, t) {
            if (e.isZero() || t.isZero()) return new a(0)._forceRed(this);
            var n = e.mul(t),
                r = n.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                i = n.isub(r).iushrn(this.shift),
                o = i;
            return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : 0 > i.cmpn(0) && (o = i.iadd(this.m)), o._forceRed(this)
        }, w.prototype.invm = function(e) {
            return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this)
        }
    }(e = n.nmd(e), this)
}