function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        },
        generateAttemptId: function() {
            return l
        },
        parseDynamicLink: function() {
            return c
        }
    });
    var r = n("264344"),
        o = n.n(r),
        i = n("153832"),
        a = n("595832");

    function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var s = "https://discordapp.page.link";

    function l() {
        return (0, i.v4)()
    }

    function c(e) {
        if (!e.startsWith(s)) return null;
        try {
            var t = new URL(e).searchParams,
                n = t.get("link");
            if (null == n) return null;
            var r = decodeURIComponent(n),
                o = new URL(r).searchParams,
                i = {
                    utmSource: null !== (f = t.get("utm_source")) && void 0 !== f ? f : void 0
                },
                a = !0,
                l = !1,
                c = void 0;
            try {
                for (var f, d, _ = o.entries()[Symbol.iterator](); !(a = (d = _.next()).done); a = !0) {
                    var E, p, m = (E = d.value, p = 2, function(e) {
                            if (Array.isArray(e)) return e
                        }(E) || function(e, t) {
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
                        }(E, p) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return u(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
                            }
                        }(E, p) || function() {
                            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()),
                        y = m[0],
                        I = m[1];
                    i[y] = I
                }
            } catch (e) {
                l = !0, c = e
            } finally {
                try {
                    !a && null != _.return && _.return()
                } finally {
                    if (l) throw c
                }
            }
            return i
        } catch (e) {
            return null
        }
    }

    function f(e, t) {
        var n, r, i, u, l, c = t.utmSource,
            f = t.androidFallbackLink,
            d = t.iosFallbackLink,
            _ = function(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }(t, ["utmSource", "androidFallbackLink", "iosFallbackLink"]),
            E = new URL(e);
        for (var p in _) {
            var m = _[p];
            null != m && E.searchParams.set(p, m)
        }
        var y = encodeURIComponent(E.toString()),
            I = encodeURIComponent((0, a.default)());
        var h = (i = RegExp("(".concat("WebView|(iPhone|iPod|iPad)(?!.*Safari/)", ")"), "ig"), u = (null === o() || void 0 === o() ? void 0 : null === (n = o().ua) || void 0 === n ? void 0 : n.match(i)) != null, l = (null === o() || void 0 === o() ? void 0 : o().name) === "Safari" && !u, (null === o() || void 0 === o() ? void 0 : null === (r = o().os) || void 0 === r ? void 0 : r.family) !== "iOS" || l) ? 1 : 0,
            O = null != f ? encodeURIComponent(f) : null,
            T = null != d ? encodeURIComponent(d) : null,
            S = "".concat(s, "/?link=").concat(y, "&utm_source=").concat(c, "&apn=").concat("com.discord", "&isi=").concat(985746746, "&ibi=").concat("com.hammerandchisel.discord", "&sd=").concat(I, "&efr=").concat(h);
        return null != O && (S += "&afl=".concat(O)), null != T && (S += "&ifl=".concat(T)), S
    }
}