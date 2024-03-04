function(e, t, n) {
    "use strict";
    n("781738"), n("424973"), n("70102");
    var r = n("380756"),
        a = Object.prototype.hasOwnProperty,
        o = Array.isArray,
        i = {
            allowDots: !1,
            allowPrototypes: !1,
            allowSparse: !1,
            arrayLimit: 20,
            charset: "utf-8",
            charsetSentinel: !1,
            comma: !1,
            decoder: r.decode,
            delimiter: "&",
            depth: 5,
            ignoreQueryPrefix: !1,
            interpretNumericEntities: !1,
            parameterLimit: 1e3,
            parseArrays: !0,
            plainObjects: !1,
            strictNullHandling: !1
        },
        s = function(e, t) {
            return e && "string" == typeof e && t.comma && e.indexOf(",") > -1 ? e.split(",") : e
        },
        u = function(e, t) {
            var n = {
                    __proto__: null
                },
                u = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
                l = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit,
                c = u.split(t.delimiter, l),
                d = -1,
                f = t.charset;
            if (t.charsetSentinel)
                for (p = 0; p < c.length; ++p) 0 === c[p].indexOf("utf8=") && ("utf8=%E2%9C%93" === c[p] ? f = "utf-8" : "utf8=%26%2310003%3B" === c[p] && (f = "iso-8859-1"), d = p, p = c.length);
            for (p = 0; p < c.length; ++p)
                if (p !== d) {
                    var p, m, h, y = c[p],
                        _ = y.indexOf("]="),
                        g = -1 === _ ? y.indexOf("=") : _ + 1;
                    if (-1 === g ? (m = t.decoder(y, i.decoder, f, "key"), h = t.strictNullHandling ? null : "") : (m = t.decoder(y.slice(0, g), i.decoder, f, "key"), h = r.maybeMap(s(y.slice(g + 1), t), function(e) {
                            return t.decoder(e, i.decoder, f, "value")
                        })), h && t.interpretNumericEntities && "iso-8859-1" === f) h = h.replace(/&#(\d+);/g, function(e, t) {
                        return String.fromCharCode(parseInt(t, 10))
                    });
                    y.indexOf("[]=") > -1 && (h = o(h) ? [h] : h), a.call(n, m) ? n[m] = r.combine(n[m], h) : n[m] = h
                } return n
        },
        l = function(e, t, n, r) {
            for (var a = r ? t : s(t, n), o = e.length - 1; o >= 0; --o) {
                var i, u = e[o];
                if ("[]" === u && n.parseArrays) i = [].concat(a);
                else {
                    i = n.plainObjects ? Object.create(null) : {};
                    var l = "[" === u.charAt(0) && "]" === u.charAt(u.length - 1) ? u.slice(1, -1) : u,
                        c = parseInt(l, 10);
                    n.parseArrays || "" !== l ? !isNaN(c) && u !== l && String(c) === l && c >= 0 && n.parseArrays && c <= n.arrayLimit ? (i = [])[c] = a : "__proto__" !== l && (i[l] = a) : i = {
                        0: a
                    }
                }
                a = i
            }
            return a
        },
        c = function(e, t, n, r) {
            if (e) {
                var o = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
                    i = /(\[[^[\]]*])/g,
                    s = n.depth > 0 && /(\[[^[\]]*])/.exec(o),
                    u = s ? o.slice(0, s.index) : o,
                    c = [];
                if (u) {
                    if (!n.plainObjects && a.call(Object.prototype, u) && !n.allowPrototypes) return;
                    c.push(u)
                }
                for (var d = 0; n.depth > 0 && null !== (s = i.exec(o)) && d < n.depth;) {
                    if (d += 1, !n.plainObjects && a.call(Object.prototype, s[1].slice(1, -1)) && !n.allowPrototypes) return;
                    c.push(s[1])
                }
                return s && c.push("[" + o.slice(s.index) + "]"), l(c, t, n, r)
            }
        },
        d = function(e) {
            if (!e) return i;
            if (null !== e.decoder && void 0 !== e.decoder && "function" != typeof e.decoder) throw TypeError("Decoder has to be a function.");
            if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
            var t = void 0 === e.charset ? i.charset : e.charset;
            return {
                allowDots: void 0 === e.allowDots ? i.allowDots : !!e.allowDots,
                allowPrototypes: "boolean" == typeof e.allowPrototypes ? e.allowPrototypes : i.allowPrototypes,
                allowSparse: "boolean" == typeof e.allowSparse ? e.allowSparse : i.allowSparse,
                arrayLimit: "number" == typeof e.arrayLimit ? e.arrayLimit : i.arrayLimit,
                charset: t,
                charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : i.charsetSentinel,
                comma: "boolean" == typeof e.comma ? e.comma : i.comma,
                decoder: "function" == typeof e.decoder ? e.decoder : i.decoder,
                delimiter: "string" == typeof e.delimiter || r.isRegExp(e.delimiter) ? e.delimiter : i.delimiter,
                depth: "number" == typeof e.depth || !1 === e.depth ? +e.depth : i.depth,
                ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
                interpretNumericEntities: "boolean" == typeof e.interpretNumericEntities ? e.interpretNumericEntities : i.interpretNumericEntities,
                parameterLimit: "number" == typeof e.parameterLimit ? e.parameterLimit : i.parameterLimit,
                parseArrays: !1 !== e.parseArrays,
                plainObjects: "boolean" == typeof e.plainObjects ? e.plainObjects : i.plainObjects,
                strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : i.strictNullHandling
            }
        };
    e.exports = function(e, t) {
        var n = d(t);
        if ("" === e || null == e) return n.plainObjects ? Object.create(null) : {};
        for (var a = "string" == typeof e ? u(e, n) : e, o = n.plainObjects ? Object.create(null) : {}, i = Object.keys(a), s = 0; s < i.length; ++s) {
            var l = i[s],
                f = c(l, a[l], n, "string" == typeof e);
            o = r.merge(o, f, n)
        }
        return !0 === n.allowSparse ? o : r.compact(o)
    }
}