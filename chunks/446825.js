function(e, t, n) {
    "use strict";
    n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("70102"), n("781738"), n("274635"), n("424973");
    var r = n("24815"),
        a = n("161318"),
        o = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
    t.Buffer = s, t.SlowBuffer = function(e) {
        return +e != e && (e = 0), s.alloc(+e)
    }, t.INSPECT_MAX_BYTES = 50;
    t.kMaxLength = 2147483647, s.TYPED_ARRAY_SUPPORT = function() {
        try {
            var e = new Uint8Array(1),
                t = {
                    foo: function() {
                        return 42
                    }
                };
            return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo()
        } catch (e) {
            return !1
        }
    }(), !s.TYPED_ARRAY_SUPPORT && "undefined" != typeof console && "function" == typeof console.error && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");

    function i(e) {
        if (e > 2147483647) throw RangeError('The value "' + e + '" is invalid for option "size"');
        var t = new Uint8Array(e);
        return Object.setPrototypeOf(t, s.prototype), t
    }

    function s(e, t, n) {
        if ("number" == typeof e) {
            if ("string" == typeof t) throw TypeError('The "string" argument must be of type string. Received type number');
            return c(e)
        }
        return u(e, t, n)
    }

    function u(e, t, n) {
        if ("string" == typeof e) return function(e, t) {
            if (("string" != typeof t || "" === t) && (t = "utf8"), !s.isEncoding(t)) throw TypeError("Unknown encoding: " + t);
            var n = 0 | m(e, t),
                r = i(n),
                a = r.write(e, t);
            return a !== n && (r = r.slice(0, a)), r
        }(e, t);
        if (ArrayBuffer.isView(e)) return d(e);
        if (null == e) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
        if (E(e, ArrayBuffer) || e && E(e.buffer, ArrayBuffer) || "undefined" != typeof SharedArrayBuffer && (E(e, SharedArrayBuffer) || e && E(e.buffer, SharedArrayBuffer))) return f(e, t, n);
        if ("number" == typeof e) throw TypeError('The "value" argument must not be of type number. Received type number');
        var r = e.valueOf && e.valueOf();
        if (null != r && r !== e) return s.from(r, t, n);
        var a = function(e) {
            if (s.isBuffer(e)) {
                var t = 0 | p(e.length),
                    n = i(t);
                return 0 === n.length ? n : (e.copy(n, 0, 0, t), n)
            }
            if (void 0 !== e.length) return "number" != typeof e.length || P(e.length) ? i(0) : d(e);
            if ("Buffer" === e.type && Array.isArray(e.data)) return d(e.data)
        }(e);
        if (a) return a;
        if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return s.from(e[Symbol.toPrimitive]("string"), t, n);
        throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e)
    }

    function l(e) {
        if ("number" != typeof e) throw TypeError('"size" argument must be of type number');
        if (e < 0) throw RangeError('The value "' + e + '" is invalid for option "size"')
    }
    Object.defineProperty(s.prototype, "parent", {
        enumerable: !0,
        get: function() {
            if (s.isBuffer(this)) return this.buffer
        }
    }), Object.defineProperty(s.prototype, "offset", {
        enumerable: !0,
        get: function() {
            if (s.isBuffer(this)) return this.byteOffset
        }
    }), s.poolSize = 8192, s.from = function(e, t, n) {
        return u(e, t, n)
    }, Object.setPrototypeOf(s.prototype, Uint8Array.prototype), Object.setPrototypeOf(s, Uint8Array);

    function c(e) {
        return l(e), i(e < 0 ? 0 : 0 | p(e))
    }
    s.alloc = function(e, t, n) {
        var r, a, o;
        return r = e, a = t, o = n, (l(r), r <= 0) ? i(r) : void 0 !== a ? "string" == typeof o ? i(r).fill(a, o) : i(r).fill(a) : i(r)
    }, s.allocUnsafe = function(e) {
        return c(e)
    }, s.allocUnsafeSlow = function(e) {
        return c(e)
    };

    function d(e) {
        for (var t = e.length < 0 ? 0 : 0 | p(e.length), n = i(t), r = 0; r < t; r += 1) n[r] = 255 & e[r];
        return n
    }

    function f(e, t, n) {
        var r;
        if (t < 0 || e.byteLength < t) throw RangeError('"offset" is outside of buffer bounds');
        if (e.byteLength < t + (n || 0)) throw RangeError('"length" is outside of buffer bounds');
        return Object.setPrototypeOf(r = void 0 === t && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, t) : new Uint8Array(e, t, n), s.prototype), r
    }

    function p(e) {
        if (e >= 2147483647) throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + "7fffffff bytes");
        return 0 | e
    }

    function m(e, t) {
        if (s.isBuffer(e)) return e.length;
        if (ArrayBuffer.isView(e) || E(e, ArrayBuffer)) return e.byteLength;
        if ("string" != typeof e) throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
        var n = e.length,
            r = arguments.length > 2 && !0 === arguments[2];
        if (!r && 0 === n) return 0;
        for (var a = !1;;) switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
                return n;
            case "utf8":
            case "utf-8":
                return S(e).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return 2 * n;
            case "hex":
                return n >>> 1;
            case "base64":
                return O(e).length;
            default:
                if (a) return r ? -1 : S(e).length;
                t = ("" + t).toLowerCase(), a = !0
        }
    }

    function h(e, t, n) {
        var a = !1;
        if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
        if ((void 0 === n || n > this.length) && (n = this.length), n <= 0 || (n >>>= 0) <= (t >>>= 0)) return "";
        for (!e && (e = "utf8");;) switch (e) {
            case "hex":
                return function(e, t, n) {
                    var r = e.length;
                    (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
                    for (var a = "", o = t; o < n; ++o) a += j[e[o]];
                    return a
                }(this, t, n);
            case "utf8":
            case "utf-8":
                return b(this, t, n);
            case "ascii":
                return function(e, t, n) {
                    var r = "";
                    n = Math.min(e.length, n);
                    for (var a = t; a < n; ++a) r += String.fromCharCode(127 & e[a]);
                    return r
                }(this, t, n);
            case "latin1":
            case "binary":
                return function(e, t, n) {
                    var r = "";
                    n = Math.min(e.length, n);
                    for (var a = t; a < n; ++a) r += String.fromCharCode(e[a]);
                    return r
                }(this, t, n);
            case "base64":
                return function(e, t, n) {
                    return 0 === t && n === e.length ? r.fromByteArray(e) : r.fromByteArray(e.slice(t, n))
                }(this, t, n);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return function(e, t, n) {
                    for (var r = e.slice(t, n), a = "", o = 0; o < r.length; o += 2) a += String.fromCharCode(r[o] + 256 * r[o + 1]);
                    return a
                }(this, t, n);
            default:
                if (a) throw TypeError("Unknown encoding: " + e);
                e = (e + "").toLowerCase(), a = !0
        }
    }

    function y(e, t, n) {
        var r = e[t];
        e[t] = e[n], e[n] = r
    }

    function _(e, t, n, r, a) {
        if (0 === e.length) return -1;
        if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), function(e) {
                return e != e
            }(n = +n) && (n = a ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
            if (a) return -1;
            n = e.length - 1
        } else if (n < 0) {
            if (!a) return -1;
            n = 0
        }
        if ("string" == typeof t && (t = s.from(t, r)), s.isBuffer(t)) return 0 === t.length ? -1 : g(e, t, n, r, a);
        if ("number" == typeof t) {
            if (t &= 255, "function" == typeof Uint8Array.prototype.indexOf) return a ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n);
            return g(e, [t], n, r, a)
        }
        throw TypeError("val must be string, number or Buffer")
    }

    function g(e, t, n, r, a) {
        var o, i = 1,
            s = e.length,
            u = t.length;
        if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
            if (e.length < 2 || t.length < 2) return -1;
            i = 2, s /= 2, u /= 2, n /= 2
        }

        function l(e, t) {
            return 1 === i ? e[t] : e.readUInt16BE(t * i)
        }
        if (a) {
            var c = -1;
            for (o = n; o < s; o++)
                if (l(e, o) === l(t, -1 === c ? 0 : o - c)) {
                    if (-1 === c && (c = o), o - c + 1 === u) return c * i
                } else - 1 !== c && (o -= o - c), c = -1
        } else
            for (n + u > s && (n = s - u), o = n; o >= 0; o--) {
                for (var d = !0, f = 0; f < u; f++)
                    if (l(e, o + f) !== l(t, f)) {
                        d = !1;
                        break
                    } if (d) return o
            }
        return -1
    }
    s.isBuffer = function(e) {
        return null != e && !0 === e._isBuffer && e !== s.prototype
    }, s.compare = function(e, t) {
        if (E(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), E(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), !s.isBuffer(e) || !s.isBuffer(t)) throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (e === t) return 0;
        for (var n = e.length, r = t.length, a = 0, o = Math.min(n, r); a < o; ++a)
            if (e[a] !== t[a]) {
                n = e[a], r = t[a];
                break
            } return n < r ? -1 : r < n ? 1 : 0
    }, s.isEncoding = function(e) {
        switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return !0;
            default:
                return !1
        }
    }, s.concat = function(e, t) {
        if (!Array.isArray(e)) throw TypeError('"list" argument must be an Array of Buffers');
        if (0 === e.length) return s.alloc(0);
        if (void 0 === t)
            for (n = 0, t = 0; n < e.length; ++n) t += e[n].length;
        var n, r = s.allocUnsafe(t),
            a = 0;
        for (n = 0; n < e.length; ++n) {
            var o = e[n];
            if (E(o, Uint8Array) && (o = s.from(o)), !s.isBuffer(o)) throw TypeError('"list" argument must be an Array of Buffers');
            o.copy(r, a), a += o.length
        }
        return r
    }, s.byteLength = m, s.prototype._isBuffer = !0, s.prototype.swap16 = function() {
        var e = this.length;
        if (e % 2 != 0) throw RangeError("Buffer size must be a multiple of 16-bits");
        for (var t = 0; t < e; t += 2) y(this, t, t + 1);
        return this
    }, s.prototype.swap32 = function() {
        var e = this.length;
        if (e % 4 != 0) throw RangeError("Buffer size must be a multiple of 32-bits");
        for (var t = 0; t < e; t += 4) y(this, t, t + 3), y(this, t + 1, t + 2);
        return this
    }, s.prototype.swap64 = function() {
        var e = this.length;
        if (e % 8 != 0) throw RangeError("Buffer size must be a multiple of 64-bits");
        for (var t = 0; t < e; t += 8) y(this, t, t + 7), y(this, t + 1, t + 6), y(this, t + 2, t + 5), y(this, t + 3, t + 4);
        return this
    }, s.prototype.toString = function() {
        var e = this.length;
        return 0 === e ? "" : 0 == arguments.length ? b(this, 0, e) : h.apply(this, arguments)
    }, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(e) {
        if (!s.isBuffer(e)) throw TypeError("Argument must be a Buffer");
        return this === e || 0 === s.compare(this, e)
    }, s.prototype.inspect = function() {
        var e = "",
            n = t.INSPECT_MAX_BYTES;
        return e = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (e += " ... "), "<Buffer " + e + ">"
    }, o && (s.prototype[o] = s.prototype.inspect), s.prototype.compare = function(e, t, n, r, a) {
        if (E(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(e)) throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
        if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === a && (a = this.length), t < 0 || n > e.length || r < 0 || a > this.length) throw RangeError("out of range index");
        if (r >= a && t >= n) return 0;
        if (r >= a) return -1;
        if (t >= n) return 1;
        if (t >>>= 0, n >>>= 0, r >>>= 0, a >>>= 0, this === e) return 0;
        for (var o = a - r, i = n - t, u = Math.min(o, i), l = this.slice(r, a), c = e.slice(t, n), d = 0; d < u; ++d)
            if (l[d] !== c[d]) {
                o = l[d], i = c[d];
                break
            } return o < i ? -1 : i < o ? 1 : 0
    }, s.prototype.includes = function(e, t, n) {
        return -1 !== this.indexOf(e, t, n)
    }, s.prototype.indexOf = function(e, t, n) {
        return _(this, e, t, n, !0)
    }, s.prototype.lastIndexOf = function(e, t, n) {
        return _(this, e, t, n, !1)
    };

    function v(e, t, n, r) {
        return x(Y(t), e, n, r)
    }
    s.prototype.write = function(e, t, n, r) {
        if (void 0 === t) r = "utf8", n = this.length, t = 0;
        else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;
        else if (isFinite(t)) t >>>= 0, isFinite(n) ? (n >>>= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0);
        else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        var a, o, i, s, u, l, c, d, f, p, m, h, y, _, g, v, b = this.length - t;
        if ((void 0 === n || n > b) && (n = b), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw RangeError("Attempt to write outside buffer bounds");
        !r && (r = "utf8");
        for (var M = !1;;) switch (r) {
            case "hex":
                return function(e, t, n, r) {
                    n = Number(n) || 0;
                    var a = e.length - n;
                    r ? (r = Number(r)) > a && (r = a) : r = a;
                    var o = t.length;
                    r > o / 2 && (r = o / 2);
                    for (var i = 0; i < r; ++i) {
                        var s = parseInt(t.substr(2 * i, 2), 16);
                        if (function(e) {
                                return e != e
                            }(s)) break;
                        e[n + i] = s
                    }
                    return i
                }(this, e, t, n);
            case "utf8":
            case "utf-8":
                ;
                return a = this, o = e, i = t, s = n, x(S(o, a.length - i), a, i, s);
            case "ascii":
                ;
                return u = this, l = e, c = t, d = n, x(Y(l), u, c, d);
            case "latin1":
            case "binary":
                return function(e, t, n, r) {
                    var a, o, i, s;
                    return a = e, o = t, i = n, s = r, x(Y(o), a, i, s)
                }(this, e, t, n);
            case "base64":
                ;
                return f = this, p = e, m = t, h = n, x(O(p), f, m, h);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                ;
                return y = this, _ = e, g = t, v = n, x(function(e, t) {
                    for (var n, r, a, o = [], i = 0; i < e.length && !((t -= 2) < 0); ++i) r = (n = e.charCodeAt(i)) >> 8, a = n % 256, o.push(a), o.push(r);
                    return o
                }(_, y.length - g), y, g, v);
            default:
                if (M) throw TypeError("Unknown encoding: " + r);
                r = ("" + r).toLowerCase(), M = !0
        }
    }, s.prototype.toJSON = function() {
        return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
        }
    };

    function b(e, t, n) {
        n = Math.min(e.length, n);
        for (var r = [], a = t; a < n;) {
            var o, i, s, u, l = e[a],
                c = null,
                d = l > 239 ? 4 : l > 223 ? 3 : l > 191 ? 2 : 1;
            if (a + d <= n) switch (d) {
                case 1:
                    l < 128 && (c = l);
                    break;
                case 2:
                    (192 & (o = e[a + 1])) == 128 && (u = (31 & l) << 6 | 63 & o) > 127 && (c = u);
                    break;
                case 3:
                    o = e[a + 1], i = e[a + 2], (192 & o) == 128 && (192 & i) == 128 && (u = (15 & l) << 12 | (63 & o) << 6 | 63 & i) > 2047 && (u < 55296 || u > 57343) && (c = u);
                    break;
                case 4:
                    o = e[a + 1], i = e[a + 2], s = e[a + 3], (192 & o) == 128 && (192 & i) == 128 && (192 & s) == 128 && (u = (15 & l) << 18 | (63 & o) << 12 | (63 & i) << 6 | 63 & s) > 65535 && u < 1114112 && (c = u)
            }
            null === c ? (c = 65533, d = 1) : c > 65535 && (c -= 65536, r.push(c >>> 10 & 1023 | 55296), c = 56320 | 1023 & c), r.push(c), a += d
        }
        return function(e) {
            var t = e.length;
            if (t <= 4096) return String.fromCharCode.apply(String, e);
            for (var n = "", r = 0; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += 4096));
            return n
        }(r)
    }

    function M(e, t, n) {
        if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
        if (e + t > n) throw RangeError("Trying to access beyond buffer length")
    }

    function w(e, t, n, r, a, o) {
        if (!s.isBuffer(e)) throw TypeError('"buffer" argument must be a Buffer instance');
        if (t > a || t < o) throw RangeError('"value" argument is out of bounds');
        if (n + r > e.length) throw RangeError("Index out of range")
    }

    function k(e, t, n, r, a, o) {
        if (n + r > e.length || n < 0) throw RangeError("Index out of range")
    }

    function L(e, t, n, r, o) {
        return t = +t, n >>>= 0, !o && k(e, t, n, 4, 34028234663852886e22, -34028234663852886e22), a.write(e, t, n, r, 23, 4), n + 4
    }

    function D(e, t, n, r, o) {
        return t = +t, n >>>= 0, !o && k(e, t, n, 8, 17976931348623157e292, -17976931348623157e292), a.write(e, t, n, r, 52, 8), n + 8
    }
    s.prototype.slice = function(e, t) {
        var n = this.length;
        e = ~~e, t = void 0 === t ? n : ~~t, e < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), t < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e);
        var r = this.subarray(e, t);
        return Object.setPrototypeOf(r, s.prototype), r
    }, s.prototype.readUIntLE = function(e, t, n) {
        e >>>= 0, t >>>= 0, !n && M(e, t, this.length);
        for (var r = this[e], a = 1, o = 0; ++o < t && (a *= 256);) r += this[e + o] * a;
        return r
    }, s.prototype.readUIntBE = function(e, t, n) {
        e >>>= 0, t >>>= 0, !n && M(e, t, this.length);
        for (var r = this[e + --t], a = 1; t > 0 && (a *= 256);) r += this[e + --t] * a;
        return r
    }, s.prototype.readUInt8 = function(e, t) {
        return e >>>= 0, !t && M(e, 1, this.length), this[e]
    }, s.prototype.readUInt16LE = function(e, t) {
        return e >>>= 0, !t && M(e, 2, this.length), this[e] | this[e + 1] << 8
    }, s.prototype.readUInt16BE = function(e, t) {
        return e >>>= 0, !t && M(e, 2, this.length), this[e] << 8 | this[e + 1]
    }, s.prototype.readUInt32LE = function(e, t) {
        return e >>>= 0, !t && M(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
    }, s.prototype.readUInt32BE = function(e, t) {
        return e >>>= 0, !t && M(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
    }, s.prototype.readIntLE = function(e, t, n) {
        e >>>= 0, t >>>= 0, !n && M(e, t, this.length);
        for (var r = this[e], a = 1, o = 0; ++o < t && (a *= 256);) r += this[e + o] * a;
        return r >= (a *= 128) && (r -= Math.pow(2, 8 * t)), r
    }, s.prototype.readIntBE = function(e, t, n) {
        e >>>= 0, t >>>= 0, !n && M(e, t, this.length);
        for (var r = t, a = 1, o = this[e + --r]; r > 0 && (a *= 256);) o += this[e + --r] * a;
        return o >= (a *= 128) && (o -= Math.pow(2, 8 * t)), o
    }, s.prototype.readInt8 = function(e, t) {
        return (e >>>= 0, !t && M(e, 1, this.length), 128 & this[e]) ? -((255 - this[e] + 1) * 1) : this[e]
    }, s.prototype.readInt16LE = function(e, t) {
        e >>>= 0, !t && M(e, 2, this.length);
        var n = this[e] | this[e + 1] << 8;
        return 32768 & n ? 4294901760 | n : n
    }, s.prototype.readInt16BE = function(e, t) {
        e >>>= 0, !t && M(e, 2, this.length);
        var n = this[e + 1] | this[e] << 8;
        return 32768 & n ? 4294901760 | n : n
    }, s.prototype.readInt32LE = function(e, t) {
        return e >>>= 0, !t && M(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
    }, s.prototype.readInt32BE = function(e, t) {
        return e >>>= 0, !t && M(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
    }, s.prototype.readFloatLE = function(e, t) {
        return e >>>= 0, !t && M(e, 4, this.length), a.read(this, e, !0, 23, 4)
    }, s.prototype.readFloatBE = function(e, t) {
        return e >>>= 0, !t && M(e, 4, this.length), a.read(this, e, !1, 23, 4)
    }, s.prototype.readDoubleLE = function(e, t) {
        return e >>>= 0, !t && M(e, 8, this.length), a.read(this, e, !0, 52, 8)
    }, s.prototype.readDoubleBE = function(e, t) {
        return e >>>= 0, !t && M(e, 8, this.length), a.read(this, e, !1, 52, 8)
    }, s.prototype.writeUIntLE = function(e, t, n, r) {
        if (e = +e, t >>>= 0, n >>>= 0, !r) {
            var a = Math.pow(2, 8 * n) - 1;
            w(this, e, t, n, a, 0)
        }
        var o = 1,
            i = 0;
        for (this[t] = 255 & e; ++i < n && (o *= 256);) this[t + i] = e / o & 255;
        return t + n
    }, s.prototype.writeUIntBE = function(e, t, n, r) {
        if (e = +e, t >>>= 0, n >>>= 0, !r) {
            var a = Math.pow(2, 8 * n) - 1;
            w(this, e, t, n, a, 0)
        }
        var o = n - 1,
            i = 1;
        for (this[t + o] = 255 & e; --o >= 0 && (i *= 256);) this[t + o] = e / i & 255;
        return t + n
    }, s.prototype.writeUInt8 = function(e, t, n) {
        return e = +e, t >>>= 0, !n && w(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1
    }, s.prototype.writeUInt16LE = function(e, t, n) {
        return e = +e, t >>>= 0, !n && w(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
    }, s.prototype.writeUInt16BE = function(e, t, n) {
        return e = +e, t >>>= 0, !n && w(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
    }, s.prototype.writeUInt32LE = function(e, t, n) {
        return e = +e, t >>>= 0, !n && w(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4
    }, s.prototype.writeUInt32BE = function(e, t, n) {
        return e = +e, t >>>= 0, !n && w(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
    }, s.prototype.writeIntLE = function(e, t, n, r) {
        if (e = +e, t >>>= 0, !r) {
            var a = Math.pow(2, 8 * n - 1);
            w(this, e, t, n, a - 1, -a)
        }
        var o = 0,
            i = 1,
            s = 0;
        for (this[t] = 255 & e; ++o < n && (i *= 256);) e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1), this[t + o] = (e / i >> 0) - s & 255;
        return t + n
    }, s.prototype.writeIntBE = function(e, t, n, r) {
        if (e = +e, t >>>= 0, !r) {
            var a = Math.pow(2, 8 * n - 1);
            w(this, e, t, n, a - 1, -a)
        }
        var o = n - 1,
            i = 1,
            s = 0;
        for (this[t + o] = 255 & e; --o >= 0 && (i *= 256);) e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1), this[t + o] = (e / i >> 0) - s & 255;
        return t + n
    }, s.prototype.writeInt8 = function(e, t, n) {
        return e = +e, t >>>= 0, !n && w(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
    }, s.prototype.writeInt16LE = function(e, t, n) {
        return e = +e, t >>>= 0, !n && w(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
    }, s.prototype.writeInt16BE = function(e, t, n) {
        return e = +e, t >>>= 0, !n && w(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
    }, s.prototype.writeInt32LE = function(e, t, n) {
        return e = +e, t >>>= 0, !n && w(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4
    }, s.prototype.writeInt32BE = function(e, t, n) {
        return e = +e, t >>>= 0, !n && w(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
    }, s.prototype.writeFloatLE = function(e, t, n) {
        return L(this, e, t, !0, n)
    }, s.prototype.writeFloatBE = function(e, t, n) {
        return L(this, e, t, !1, n)
    }, s.prototype.writeDoubleLE = function(e, t, n) {
        return D(this, e, t, !0, n)
    }, s.prototype.writeDoubleBE = function(e, t, n) {
        return D(this, e, t, !1, n)
    }, s.prototype.copy = function(e, t, n, r) {
        if (!s.isBuffer(e)) throw TypeError("argument should be a Buffer");
        if (!n && (n = 0), !r && 0 !== r && (r = this.length), t >= e.length && (t = e.length), !t && (t = 0), r > 0 && r < n && (r = n), r === n || 0 === e.length || 0 === this.length) return 0;
        if (t < 0) throw RangeError("targetStart out of bounds");
        if (n < 0 || n >= this.length) throw RangeError("Index out of range");
        if (r < 0) throw RangeError("sourceEnd out of bounds");
        r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
        var a = r - n;
        if (this === e && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(t, n, r);
        else if (this === e && n < t && t < r)
            for (var o = a - 1; o >= 0; --o) e[o + t] = this[o + n];
        else Uint8Array.prototype.set.call(e, this.subarray(n, r), t);
        return a
    }, s.prototype.fill = function(e, t, n, r) {
        if ("string" == typeof e) {
            if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), void 0 !== r && "string" != typeof r) throw TypeError("encoding must be a string");
            if ("string" == typeof r && !s.isEncoding(r)) throw TypeError("Unknown encoding: " + r);
            if (1 === e.length) {
                var a, o = e.charCodeAt(0);
                ("utf8" === r && o < 128 || "latin1" === r) && (e = o)
            }
        } else "number" == typeof e ? e &= 255 : "boolean" == typeof e && (e = Number(e));
        if (t < 0 || this.length < t || this.length < n) throw RangeError("Out of range index");
        if (n <= t) return this;
        if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, !e && (e = 0), "number" == typeof e)
            for (a = t; a < n; ++a) this[a] = e;
        else {
            var i = s.isBuffer(e) ? e : s.from(e, r),
                u = i.length;
            if (0 === u) throw TypeError('The value "' + e + '" is invalid for argument "value"');
            for (a = 0; a < n - t; ++a) this[a + t] = i[a % u]
        }
        return this
    };
    var T = /[^+/0-9A-Za-z-_]/g;

    function S(e, t) {
        t = t || 1 / 0;
        for (var n, r = e.length, a = null, o = [], i = 0; i < r; ++i) {
            if ((n = e.charCodeAt(i)) > 55295 && n < 57344) {
                if (!a) {
                    if (n > 56319) {
                        (t -= 3) > -1 && o.push(239, 191, 189);
                        continue
                    }
                    if (i + 1 === r) {
                        (t -= 3) > -1 && o.push(239, 191, 189);
                        continue
                    }
                    a = n;
                    continue
                }
                if (n < 56320) {
                    (t -= 3) > -1 && o.push(239, 191, 189), a = n;
                    continue
                }
                n = (a - 55296 << 10 | n - 56320) + 65536
            } else a && (t -= 3) > -1 && o.push(239, 191, 189);
            if (a = null, n < 128) {
                if ((t -= 1) < 0) break;
                o.push(n)
            } else if (n < 2048) {
                if ((t -= 2) < 0) break;
                o.push(n >> 6 | 192, 63 & n | 128)
            } else if (n < 65536) {
                if ((t -= 3) < 0) break;
                o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
            } else if (n < 1114112) {
                if ((t -= 4) < 0) break;
                o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
            } else throw Error("Invalid code point")
        }
        return o
    }

    function Y(e) {
        for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
        return t
    }

    function O(e) {
        return r.toByteArray(function(e) {
            if ((e = (e = e.split("=")[0]).trim().replace(T, "")).length < 2) return "";
            for (; e.length % 4 != 0;) e += "=";
            return e
        }(e))
    }

    function x(e, t, n, r) {
        for (var a = 0; a < r && !(a + n >= t.length) && !(a >= e.length); ++a) t[a + n] = e[a];
        return a
    }

    function E(e, t) {
        return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name
    }

    function P(e) {
        return e != e
    }
    var j = function() {
        for (var e = "0123456789abcdef", t = Array(256), n = 0; n < 16; ++n) {
            for (var r = 16 * n, a = 0; a < 16; ++a) t[r + a] = e[n] + e[a]
        }
        return t
    }()
}