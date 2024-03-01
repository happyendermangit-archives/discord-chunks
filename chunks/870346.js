function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return P
        }
    }), n("222007"), n("70102");
    var s = n("627445"),
        i = n.n(s),
        r = n("917351"),
        a = n.n(r),
        o = n("288661"),
        d = n("446674"),
        u = n("913144"),
        l = n("605250"),
        f = n("773336"),
        _ = n("50885"),
        c = n("563680"),
        g = n("49111");
    let m = {},
        h = {},
        v = {},
        E = {},
        p = {},
        y = new Set,
        T = () => O.emitChange(),
        C = a.debounce(T, 150);

    function I(e) {
        let t = v[e];
        null != t && !t.closed && (m[e] = {
            x: t.screenX,
            y: t.screenY,
            width: t.innerWidth,
            height: t.innerHeight,
            alwaysOnTop: !!f.isPlatformEmbedded && h[e]
        })
    }

    function S(e) {
        let t = v[e];
        null != t && (!t.closed && I(e), t.close(), ! function(e) {
            let t = v[e];
            i(null != t, "Popout window was null during unmount"), t.removeEventListener("focus", T), t.removeEventListener("blur", T), t.removeEventListener("resize", C);
            let n = E[e];
            i(null != n, "Window root was null while unmounting"), n.unmount(), delete v[e], delete h[e], delete p[e], delete E[e]
        }(e), O.emitChange())
    }

    function A(e) {
        let {
            data: t
        } = e;
        if (!(t instanceof Object && t.discordPopoutEvent instanceof Object)) return;
        let n = t.discordPopoutEvent;
        if (null != n.key) switch (n.type) {
            case g.PopoutEventTypes.LOADED:
                var s;
                return s = n.key, void(y.has(s) && (! function(e) {
                    let t = v[e],
                        n = p[e];
                    if (null == t) {
                        new(0, l.default)("PopoutWindowStore").warn("Failed to open window", e);
                        return
                    }
                    let s = t.document;
                    (0, c.subscribeDocumentToFullScreenChange)(s, T), t.addEventListener("focus", T), t.addEventListener("blur", T), t.addEventListener("resize", C), ! function(e, t) {
                        let n = t.document,
                            s = document.querySelectorAll('link[rel="stylesheet"]'),
                            r = "".concat(window.location.protocol, "//").concat(window.location.host);
                        for (let e of s) {
                            if (!e.href.startsWith(r)) continue;
                            let t = n.createElement("link");
                            t.href = e.href, t.rel = e.rel, t.integrity = e.integrity, i(null != n.head, "Document head was null"), n.head.appendChild(t)
                        }
                    }(0, t);
                    let r = (0, o.createRoot)(s.getElementById("app-mount"));
                    i(null != r, "No render target for popout!"), E[e] = r, r.render(n(e))
                }(s), y.delete(s), O.emitChange()));
            case g.PopoutEventTypes.UNLOADED:
                return S(n.key)
        }
    }

    function D() {
        for (let e of Object.keys(v)) {
            let t = v[e];
            null != t && t.close()
        }
    }
    class N extends d.default.PersistedStore {
        initialize(e) {
            window.addEventListener("message", A), window.addEventListener("beforeunload", D), m = null != e ? e : {}
        }
        getWindow(e) {
            return v[e]
        }
        getWindowState(e) {
            return m[e]
        }
        getWindowKeys() {
            return Object.keys(v)
        }
        getWindowOpen(e) {
            let t = v[e];
            return null != t && !t.closed
        }
        getIsAlwaysOnTop(e) {
            return !!h[e]
        }
        getWindowFocused(e) {
            var t, n;
            let s = v[e];
            return null !== (n = null == s ? void 0 : null === (t = s.document) || void 0 === t ? void 0 : t.hasFocus()) && void 0 !== n && n
        }
        getWindowVisible(e) {
            var t;
            let n = v[e];
            return (null == n ? void 0 : null === (t = n.document) || void 0 === t ? void 0 : t.visibilityState) === "visible"
        }
        getState() {
            return m
        }
        unmountWindow(e) {
            return S(e)
        }
    }
    N.displayName = "PopoutWindowStore", N.persistKey = "PopoutWindowStore";
    let O = new N(u.default, {
        POPOUT_WINDOW_OPEN: function(e) {
            let {
                key: t,
                features: n,
                render: s
            } = e;
            if (f.isPlatformEmbedded && !_.default.supportsFeature(g.NativeFeatures.POPOUT_WINDOWS)) throw Error("Popout windows not supported on this native module version!");
            let i = v[t];
            if (null != i && !i.closed) return f.isPlatformEmbedded ? _.default.focus(t) : i.focus(), !1;
            let {
                defaultWidth: r,
                defaultHeight: a,
                defaultAlwaysOnTop: o = !1,
                ...d
            } = n, u = d, l = o, c = m[t];
            if (null != c) {
                let {
                    width: e,
                    height: t,
                    x: n,
                    y: s,
                    alwaysOnTop: i
                } = c;
                l = null != i ? i : o, u = {
                    width: null != e && 0 !== e ? e : r,
                    height: null != t && 0 !== t ? t : a,
                    left: n,
                    top: s,
                    ...u
                }
            }
            let E = window.open(g.Routes.POPOUT_WINDOW, t, function(e) {
                let t = "";
                for (let n of Object.keys(e)) {
                    let s = e[n];
                    void 0 !== s && ("boolean" == typeof s && (s = s ? "yes" : "no"), t += "".concat(n, "=").concat(s, ","))
                }
                return t
            }(u));
            E.windowKey = t, null == E || E.focus(), v[t] = E, p[t] = s, f.isPlatformEmbedded && (_.default.setAlwaysOnTop(t, l), h[t] = l, _.default.isAlwaysOnTop(t).then(e => h[t] = e)), y.add(t)
        },
        POPOUT_WINDOW_CLOSE: function(e) {
            let {
                key: t
            } = e, n = v[t];
            null != n && !n.closed && (I(t), n.close())
        },
        POPOUT_WINDOW_SET_ALWAYS_ON_TOP: function(e) {
            let {
                key: t,
                alwaysOnTop: n
            } = e;
            f.isPlatformEmbedded && (_.default.setAlwaysOnTop(t, n), h[t] = n, _.default.isAlwaysOnTop(t).then(e => h[t] = e))
        },
        LOGOUT: D
    });
    var P = O
}