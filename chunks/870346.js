function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return D
        }
    }), n("222007"), n("70102");
    var i = n("627445"),
        s = n.n(i),
        r = n("917351"),
        a = n.n(r),
        o = n("288661"),
        l = n("446674"),
        u = n("913144"),
        d = n("605250"),
        c = n("773336"),
        f = n("50885"),
        _ = n("563680"),
        h = n("49111");
    let E = {},
        g = {},
        m = {},
        p = {},
        S = {},
        v = new Set,
        T = () => O.emitChange(),
        I = a.debounce(T, 150);

    function C(e) {
        let t = m[e];
        null != t && !t.closed && (E[e] = {
            x: t.screenX,
            y: t.screenY,
            width: t.innerWidth,
            height: t.innerHeight,
            alwaysOnTop: !!c.isPlatformEmbedded && g[e]
        })
    }

    function A(e) {
        let t = m[e];
        null != t && (!t.closed && C(e), t.close(), ! function(e) {
            let t = m[e];
            s(null != t, "Popout window was null during unmount"), t.removeEventListener("focus", T), t.removeEventListener("blur", T), t.removeEventListener("resize", I);
            let n = p[e];
            s(null != n, "Window root was null while unmounting"), n.unmount(), delete m[e], delete g[e], delete S[e], delete p[e]
        }(e), O.emitChange())
    }

    function y(e) {
        let {
            data: t
        } = e;
        if (!(t instanceof Object && t.discordPopoutEvent instanceof Object)) return;
        let n = t.discordPopoutEvent;
        if (null != n.key) switch (n.type) {
            case h.PopoutEventTypes.LOADED:
                var i;
                return i = n.key, void(v.has(i) && (! function(e) {
                    let t = m[e],
                        n = S[e];
                    if (null == t) {
                        new(0, d.default)("PopoutWindowStore").warn("Failed to open window", e);
                        return
                    }
                    let i = t.document;
                    (0, _.subscribeDocumentToFullScreenChange)(i, T), t.addEventListener("focus", T), t.addEventListener("blur", T), t.addEventListener("resize", I), ! function(e, t) {
                        let n = t.document,
                            i = document.querySelectorAll('link[rel="stylesheet"]'),
                            r = "".concat(window.location.protocol, "//").concat(window.location.host);
                        for (let e of i) {
                            if (!e.href.startsWith(r)) continue;
                            let t = n.createElement("link");
                            t.href = e.href, t.rel = e.rel, t.integrity = e.integrity, s(null != n.head, "Document head was null"), n.head.appendChild(t)
                        }
                    }(0, t);
                    let r = (0, o.createRoot)(i.getElementById("app-mount"));
                    s(null != r, "No render target for popout!"), p[e] = r, r.render(n(e))
                }(i), v.delete(i), O.emitChange()));
            case h.PopoutEventTypes.UNLOADED:
                return A(n.key)
        }
    }

    function N() {
        for (let e of Object.keys(m)) {
            let t = m[e];
            null != t && t.close()
        }
    }
    class R extends l.default.PersistedStore {
        initialize(e) {
            window.addEventListener("message", y), window.addEventListener("beforeunload", N), E = null != e ? e : {}
        }
        getWindow(e) {
            return m[e]
        }
        getWindowState(e) {
            return E[e]
        }
        getWindowKeys() {
            return Object.keys(m)
        }
        getWindowOpen(e) {
            let t = m[e];
            return null != t && !t.closed
        }
        getIsAlwaysOnTop(e) {
            return !!g[e]
        }
        getWindowFocused(e) {
            var t, n;
            let i = m[e];
            return null !== (n = null == i ? void 0 : null === (t = i.document) || void 0 === t ? void 0 : t.hasFocus()) && void 0 !== n && n
        }
        getWindowVisible(e) {
            var t;
            let n = m[e];
            return (null == n ? void 0 : null === (t = n.document) || void 0 === t ? void 0 : t.visibilityState) === "visible"
        }
        getState() {
            return E
        }
        unmountWindow(e) {
            return A(e)
        }
    }
    R.displayName = "PopoutWindowStore", R.persistKey = "PopoutWindowStore";
    let O = new R(u.default, {
        POPOUT_WINDOW_OPEN: function(e) {
            let {
                key: t,
                features: n,
                render: i
            } = e;
            if (c.isPlatformEmbedded && !f.default.supportsFeature(h.NativeFeatures.POPOUT_WINDOWS)) throw Error("Popout windows not supported on this native module version!");
            let s = m[t];
            if (null != s && !s.closed) return c.isPlatformEmbedded ? f.default.focus(t) : s.focus(), !1;
            let {
                defaultWidth: r,
                defaultHeight: a,
                defaultAlwaysOnTop: o = !1,
                ...l
            } = n, u = l, d = o, _ = E[t];
            if (null != _) {
                let {
                    width: e,
                    height: t,
                    x: n,
                    y: i,
                    alwaysOnTop: s
                } = _;
                d = null != s ? s : o, u = {
                    width: null != e && 0 !== e ? e : r,
                    height: null != t && 0 !== t ? t : a,
                    left: n,
                    top: i,
                    ...u
                }
            }
            let p = window.open(h.Routes.POPOUT_WINDOW, t, function(e) {
                let t = "";
                for (let n of Object.keys(e)) {
                    let i = e[n];
                    void 0 !== i && ("boolean" == typeof i && (i = i ? "yes" : "no"), t += "".concat(n, "=").concat(i, ","))
                }
                return t
            }(u));
            p.windowKey = t, null == p || p.focus(), m[t] = p, S[t] = i, c.isPlatformEmbedded && (f.default.setAlwaysOnTop(t, d), g[t] = d, f.default.isAlwaysOnTop(t).then(e => g[t] = e)), v.add(t)
        },
        POPOUT_WINDOW_CLOSE: function(e) {
            let {
                key: t
            } = e, n = m[t];
            null != n && !n.closed && (C(t), n.close())
        },
        POPOUT_WINDOW_SET_ALWAYS_ON_TOP: function(e) {
            let {
                key: t,
                alwaysOnTop: n
            } = e;
            c.isPlatformEmbedded && (f.default.setAlwaysOnTop(t, n), g[t] = n, f.default.isAlwaysOnTop(t).then(e => g[t] = e))
        },
        LOGOUT: N
    });
    var D = O
}