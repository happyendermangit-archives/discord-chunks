function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        OAuth2Modal: function() {
            return I
        },
        OAuth2Page: function() {
            return y
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("147391"),
        u = n("784184"),
        s = n("738700"),
        l = n("59807"),
        c = n("514848"),
        f = n("153732"),
        d = n("281767"),
        _ = n("450112"),
        E = n("941504"),
        p = n("160516");

    function m(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function y(e) {
        var t, n, o = e.children,
            a = e.wrapperClassName,
            y = e.embedded;
        var I = (t = r.useState(_.WaveStates.INITIAL), n = 2, function(e) {
                if (Array.isArray(e)) return e
            }(t) || function(e, t) {
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
            }(t, n) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return m(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return m(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            h = I[0],
            O = I[1],
            T = r.useCallback(function(e) {
                O(function(t) {
                    return Math.max(t, e)
                })
            }, []);
        return (0, s.usePageTitle)({
            location: E.default.Messages.OAUTH2_TITLE
        }), r.createElement(u.ThemeContextProvider, {
            theme: d.ThemeTypes.DARK
        }, r.createElement(l.default, {
            embedded: y,
            className: i()((0, f.getThemeClass)(d.ThemeTypes.DARK), p.wave),
            splash: (0, c.getArtForPath)(),
            waveState: h,
            showLogo: !0,
            updateWaveState: T
        }, r.createElement("div", {
            className: i()(p.oauth2Wrapper, a)
        }, o)))
    }

    function I(e) {
        var t = e.children,
            n = e.transitionState,
            o = function(e, t) {
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
            }(e, ["children", "transitionState"]);
        return r.createElement(a.ModalRoot, function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    var r, o, i;
                    r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[o] = i
                })
            }
            return e
        }({
            size: a.ModalSize.DYNAMIC,
            transitionState: n,
            className: p.oauth2Wrapper
        }, o), t)
    }
}