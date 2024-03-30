function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("512722"),
        i = n.n(o),
        a = n("392711"),
        u = n.n(a),
        s = n("202226"),
        l = n("898511"),
        c = n("629815"),
        f = n("35523"),
        d = n("374550"),
        _ = n("131900"),
        E = n("172637"),
        p = n("281767");

    function m(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function y(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function I(e) {
        return (I = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function h(e, t) {
        return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t
    }

    function O(e, t) {
        return (O = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var T = {},
        S = {},
        v = {},
        g = {},
        A = {},
        b = new Set,
        N = function() {
            return U.emitChange()
        },
        R = u().debounce(N, 150);

    function C(e) {
        var t = v[e];
        null != t && !t.closed && (T[e] = {
            x: t.screenX,
            y: t.screenY,
            width: t.innerWidth,
            height: t.innerHeight,
            alwaysOnTop: !!d.isPlatformEmbedded && S[e]
        })
    }

    function P(e) {
        var t, n, r, o = v[e];
        if (null != o) {
            ;
            !o.closed && C(e), o.close(), n = v[t = e], i()(null != n, "Popout window was null during unmount"), n.removeEventListener("focus", N), n.removeEventListener("blur", N), n.removeEventListener("resize", R), r = g[t], i()(null != r, "Window root was null while unmounting"), r.unmount(), delete v[t], delete S[t], delete A[t], delete g[t], U.emitChange()
        }
    }

    function D(e) {
        var t = e.data;
        if (h(t, Object) && h(t.discordPopoutEvent, Object)) {
            var n, r = t.discordPopoutEvent;
            if (null != r.key) switch (r.type) {
                case p.PopoutEventTypes.LOADED:
                    ;
                    return n = r.key, void(b.has(n) && (! function(e) {
                        var t = v[e],
                            n = A[e];
                        if (null == t) {
                            new f.default("PopoutWindowStore").warn("Failed to open window", e);
                            return
                        }
                        var r = t.document;
                        (0, E.subscribeDocumentToFullScreenChange)(r, N), t.addEventListener("focus", N), t.addEventListener("blur", N), t.addEventListener("resize", R), ! function(e, t) {
                            var n = t.document,
                                r = document.querySelectorAll('link[rel="stylesheet"]'),
                                o = "".concat(window.location.protocol, "//").concat(window.location.host),
                                a = !0,
                                u = !1,
                                s = void 0;
                            try {
                                for (var l, c = r[Symbol.iterator](); !(a = (l = c.next()).done); a = !0) {
                                    var f = l.value;
                                    if (f.href.startsWith(o)) {
                                        var d = n.createElement("link");
                                        d.href = f.href, d.rel = f.rel, d.integrity = f.integrity, i()(null != n.head, "Document head was null"), n.head.appendChild(d)
                                    }
                                }
                            } catch (e) {
                                u = !0, s = e
                            } finally {
                                try {
                                    !a && null != c.return && c.return()
                                } finally {
                                    if (u) throw s
                                }
                            }
                        }(0, t);
                        var o = (0, s.createRoot)(r.getElementById("app-mount"));
                        i()(null != o, "No render target for popout!"), g[e] = o, o.render(n(e))
                    }(n), b.delete(n), U.emitChange()));
                case p.PopoutEventTypes.UNLOADED:
                    return P(r.key)
            }
        }
    }

    function L() {
        var e = !0,
            t = !1,
            n = void 0;
        try {
            for (var r, o = Object.keys(v)[Symbol.iterator](); !(e = (r = o.next()).done); e = !0) {
                var i = v[r.value];
                null != i && i.close()
            }
        } catch (e) {
            t = !0, n = e
        } finally {
            try {
                !e && null != o.return && o.return()
            } finally {
                if (t) throw n
            }
        }
    }
    var M = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && O(e, t)
        }(u, e);
        var t, n, r, o, i, a = (t = u, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = I(t);
            if (n) {
                var a = I(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function u() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, u), a.apply(this, arguments)
        }
        return r = u, o = [{
            key: "initialize",
            value: function(e) {
                window.addEventListener("message", D), window.addEventListener("beforeunload", L), T = null != e ? e : {}
            }
        }, {
            key: "getWindow",
            value: function(e) {
                return v[e]
            }
        }, {
            key: "getWindowState",
            value: function(e) {
                return T[e]
            }
        }, {
            key: "getWindowKeys",
            value: function() {
                return Object.keys(v)
            }
        }, {
            key: "getWindowOpen",
            value: function(e) {
                var t = v[e];
                return null != t && !t.closed
            }
        }, {
            key: "getIsAlwaysOnTop",
            value: function(e) {
                return !!S[e]
            }
        }, {
            key: "getWindowFocused",
            value: function(e) {
                var t, n, r = v[e];
                return null !== (n = null == r ? void 0 : null === (t = r.document) || void 0 === t ? void 0 : t.hasFocus()) && void 0 !== n && n
            }
        }, {
            key: "getWindowVisible",
            value: function(e) {
                var t, n = v[e];
                return (null == n ? void 0 : null === (t = n.document) || void 0 === t ? void 0 : t.visibilityState) === "visible"
            }
        }, {
            key: "getState",
            value: function() {
                return T
            }
        }, {
            key: "unmountWindow",
            value: function(e) {
                return P(e)
            }
        }], m(r.prototype, o), i && m(r, i), u
    }(l.default.PersistedStore);
    y(M, "displayName", "PopoutWindowStore"), y(M, "persistKey", "PopoutWindowStore");
    var U = new M(c.default, {
        POPOUT_WINDOW_OPEN: function(e) {
            var t = e.key,
                n = e.features,
                r = e.render;
            if (d.isPlatformEmbedded && !_.default.supportsFeature(p.NativeFeatures.POPOUT_WINDOWS)) throw Error("Popout windows not supported on this native module version!");
            var o = v[t];
            if (null != o && !o.closed) return d.isPlatformEmbedded ? _.default.focus(t) : o.focus(), !1;
            var i = n.defaultWidth,
                a = n.defaultHeight,
                u = n.defaultAlwaysOnTop,
                s = void 0 !== u && u,
                l = function(e, t) {
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
                }(n, ["defaultWidth", "defaultHeight", "defaultAlwaysOnTop"]),
                c = s,
                f = T[t];
            if (null != f) {
                var E = f.width,
                    m = f.height,
                    I = f.x,
                    h = f.y,
                    O = f.alwaysOnTop;
                c = null != O ? O : s, l = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            y(e, t, n[t])
                        })
                    }
                    return e
                }({
                    width: null != E && 0 !== E ? E : i,
                    height: null != m && 0 !== m ? m : a,
                    left: I,
                    top: h
                }, l)
            }
            var g = window.open(p.Routes.POPOUT_WINDOW, t, function(e) {
                var t = "",
                    n = !0,
                    r = !1,
                    o = void 0;
                try {
                    for (var i, a = Object.keys(e)[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                        var u = i.value,
                            s = e[u];
                        void 0 !== s && ("boolean" == typeof s && (s = s ? "yes" : "no"), t += "".concat(u, "=").concat(s, ","))
                    }
                } catch (e) {
                    r = !0, o = e
                } finally {
                    try {
                        !n && null != a.return && a.return()
                    } finally {
                        if (r) throw o
                    }
                }
                return t
            }(l));
            g.windowKey = t, null == g || g.focus(), v[t] = g, A[t] = r, d.isPlatformEmbedded && (_.default.setAlwaysOnTop(t, c), S[t] = c, _.default.isAlwaysOnTop(t).then(function(e) {
                return S[t] = e
            })), b.add(t)
        },
        POPOUT_WINDOW_CLOSE: function(e) {
            var t = e.key,
                n = v[t];
            null != n && !n.closed && (C(t), n.close())
        },
        POPOUT_WINDOW_SET_ALWAYS_ON_TOP: function(e) {
            var t = e.key,
                n = e.alwaysOnTop;
            d.isPlatformEmbedded && (_.default.setAlwaysOnTop(t, n), S[t] = n, _.default.isAlwaysOnTop(t).then(function(e) {
                return S[t] = e
            }))
        },
        LOGOUT: L
    });
    t.default = U
}