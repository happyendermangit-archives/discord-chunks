function(e, t, n) {
    "use strict";
    n("424973"), n("70102");
    var r = n("890741"),
        a = n("380756"),
        o = n("280973"),
        i = Object.prototype.hasOwnProperty,
        s = {
            brackets: function(e) {
                return e + "[]"
            },
            comma: "comma",
            indices: function(e, t) {
                return e + "[" + t + "]"
            },
            repeat: function(e) {
                return e
            }
        },
        u = Array.isArray,
        l = Array.prototype.push,
        c = function(e, t) {
            l.apply(e, u(t) ? t : [t])
        },
        d = Date.prototype.toISOString,
        f = o.default,
        p = {
            addQueryPrefix: !1,
            allowDots: !1,
            charset: "utf-8",
            charsetSentinel: !1,
            delimiter: "&",
            encode: !0,
            encoder: a.encode,
            encodeValuesOnly: !1,
            format: f,
            formatter: o.formatters[f],
            indices: !1,
            serializeDate: function(e) {
                return d.call(e)
            },
            skipNulls: !1,
            strictNullHandling: !1
        },
        m = {},
        h = function e(t, n, o, i, s, l, d, f, h, y, _, g, v, b, M, w) {
            for (var k, L, D = t, T = w, S = 0, Y = !1; void 0 !== (T = T.get(m)) && !Y;) {
                var O = T.get(t);
                if (S += 1, void 0 !== O) {
                    if (O === S) throw RangeError("Cyclic object value");
                    Y = !0
                }
                void 0 === T.get(m) && (S = 0)
            }
            if ("function" == typeof f ? D = f(n, D) : D instanceof Date ? D = _(D) : "comma" === o && u(D) && (D = a.maybeMap(D, function(e) {
                    return e instanceof Date ? _(e) : e
                })), null === D) {
                if (s) return d && !b ? d(n, p.encoder, M, "key", g) : n;
                D = ""
            }
            if ("string" == typeof(k = D) || "number" == typeof k || "boolean" == typeof k || "symbol" == typeof k || "bigint" == typeof k || a.isBuffer(D)) return d ? [v(b ? n : d(n, p.encoder, M, "key", g)) + "=" + v(d(D, p.encoder, M, "value", g))] : [v(n) + "=" + v(String(D))];
            var x = [];
            if (void 0 === D) return x;
            if ("comma" === o && u(D)) b && d && (D = a.maybeMap(D, d)), L = [{
                value: D.length > 0 ? D.join(",") || null : void 0
            }];
            else if (u(f)) L = f;
            else {
                var E = Object.keys(D);
                L = h ? E.sort(h) : E
            }
            for (var P = i && u(D) && 1 === D.length ? n + "[]" : n, j = 0; j < L.length; ++j) {
                var C = L[j],
                    H = "object" == typeof C && void 0 !== C.value ? C.value : D[C];
                if (!l || null !== H) {
                    var F = u(D) ? "function" == typeof o ? o(P, C) : P : P + (y ? "." + C : "[" + C + "]");
                    w.set(t, S);
                    var A = r();
                    A.set(m, w), c(x, e(H, F, o, i, s, l, "comma" === o && b && u(D) ? null : d, f, h, y, _, g, v, b, M, A))
                }
            }
            return x
        },
        y = function(e) {
            if (!e) return p;
            if (null !== e.encoder && void 0 !== e.encoder && "function" != typeof e.encoder) throw TypeError("Encoder has to be a function.");
            var t = e.charset || p.charset;
            if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
            var n = o.default;
            if (void 0 !== e.format) {
                if (!i.call(o.formatters, e.format)) throw TypeError("Unknown format option provided.");
                n = e.format
            }
            var r = o.formatters[n],
                a = p.filter;
            return ("function" == typeof e.filter || u(e.filter)) && (a = e.filter), {
                addQueryPrefix: "boolean" == typeof e.addQueryPrefix ? e.addQueryPrefix : p.addQueryPrefix,
                allowDots: void 0 === e.allowDots ? p.allowDots : !!e.allowDots,
                charset: t,
                charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : p.charsetSentinel,
                delimiter: void 0 === e.delimiter ? p.delimiter : e.delimiter,
                encode: "boolean" == typeof e.encode ? e.encode : p.encode,
                encoder: "function" == typeof e.encoder ? e.encoder : p.encoder,
                encodeValuesOnly: "boolean" == typeof e.encodeValuesOnly ? e.encodeValuesOnly : p.encodeValuesOnly,
                filter: a,
                format: n,
                formatter: r,
                serializeDate: "function" == typeof e.serializeDate ? e.serializeDate : p.serializeDate,
                skipNulls: "boolean" == typeof e.skipNulls ? e.skipNulls : p.skipNulls,
                sort: "function" == typeof e.sort ? e.sort : null,
                strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : p.strictNullHandling
            }
        };
    e.exports = function(e, t) {
        var n, a, o, i = e,
            l = y(t);
        "function" == typeof l.filter ? i = (a = l.filter)("", i) : u(l.filter) && (n = a = l.filter);
        var d = [];
        if ("object" != typeof i || null === i) return "";
        o = t && t.arrayFormat in s ? t.arrayFormat : t && "indices" in t ? t.indices ? "indices" : "repeat" : "indices";
        var f = s[o];
        if (t && "commaRoundTrip" in t && "boolean" != typeof t.commaRoundTrip) throw TypeError("`commaRoundTrip` must be a boolean, or absent");
        var p = "comma" === f && t && t.commaRoundTrip;
        !n && (n = Object.keys(i)), l.sort && n.sort(l.sort);
        for (var m = r(), _ = 0; _ < n.length; ++_) {
            var g = n[_];
            (!l.skipNulls || null !== i[g]) && c(d, h(i[g], g, f, p, l.strictNullHandling, l.skipNulls, l.encode ? l.encoder : null, l.filter, l.sort, l.allowDots, l.serializeDate, l.format, l.formatter, l.encodeValuesOnly, l.charset, m))
        }
        var v = d.join(l.delimiter),
            b = !0 === l.addQueryPrefix ? "?" : "";
        return l.charsetSentinel && ("iso-8859-1" === l.charset ? b += "utf8=%26%2310003%3B&" : b += "utf8=%E2%9C%93&"), v.length > 0 ? b + v : ""
    }
}