function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("411104");
    var i, r = n("512722"),
        s = n.n(r),
        a = n("392711"),
        o = n.n(a),
        l = n("202226"),
        u = n("442837"),
        d = n("570140"),
        _ = n("710845"),
        c = n("358085"),
        E = n("998502"),
        I = n("228488"),
        T = n("981631");

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let S = {},
        A = {},
        h = {},
        m = {},
        N = {},
        O = new Set,
        p = () => M.emitChange(),
        R = o().debounce(p, 150);

    function C(e) {
        let t = h[e];
        null != t && !t.closed && (S[e] = {
            x: t.screenX,
            y: t.screenY,
            width: t.innerWidth,
            height: t.innerHeight,
            alwaysOnTop: !!c.isPlatformEmbedded && A[e]
        })
    }

    function g(e) {
        let t = h[e];
        null != t && (!t.closed && C(e), t.close(), ! function(e) {
            let t = h[e];
            s()(null != t, "Popout window was null during unmount"), t.removeEventListener("focus", p), t.removeEventListener("blur", p), t.removeEventListener("resize", R);
            let n = m[e];
            s()(null != n, "Window root was null while unmounting"), n.unmount(), delete h[e], delete A[e], delete N[e], delete m[e]
        }(e), M.emitChange())
    }

    function L(e) {
        let {
            data: t
        } = e;
        if (!(t instanceof Object && t.discordPopoutEvent instanceof Object)) return;
        let n = t.discordPopoutEvent;
        if (null != n.key) switch (n.type) {
            case T.PopoutEventTypes.LOADED:
                var i;
                return i = n.key, void(O.has(i) && (! function(e) {
                    let t = h[e],
                        n = N[e];
                    if (null == t) {
                        new _.default("PopoutWindowStore").warn("Failed to open window", e);
                        return
                    }
                    let i = t.document;
                    (0, I.subscribeDocumentToFullScreenChange)(i, p), t.addEventListener("focus", p), t.addEventListener("blur", p), t.addEventListener("resize", R), ! function(e, t) {
                        let n = t.document,
                            i = document.querySelectorAll('link[rel="stylesheet"]'),
                            r = "".concat(window.location.protocol, "//").concat(window.location.host);
                        for (let e of i) {
                            if (!e.href.startsWith(r)) continue;
                            let t = n.createElement("link");
                            t.href = e.href, t.rel = e.rel, t.integrity = e.integrity, s()(null != n.head, "Document head was null"), n.head.appendChild(t)
                        }
                    }(0, t);
                    let r = (0, l.createRoot)(i.getElementById("app-mount"));
                    s()(null != r, "No render target for popout!"), m[e] = r, r.render(n(e))
                }(i), O.delete(i), M.emitChange()));
            case T.PopoutEventTypes.UNLOADED:
                return g(n.key)
        }
    }

    function D() {
        for (let e of Object.keys(h)) {
            let t = h[e];
            null != t && t.close()
        }
    }
    class v extends(i = u.default.PersistedStore) {
        initialize(e) {
            window.addEventListener("message", L), window.addEventListener("beforeunload", D), S = null != e ? e : {}
        }
        getWindow(e) {
            return h[e]
        }
        getWindowState(e) {
            return S[e]
        }
        getWindowKeys() {
            return Object.keys(h)
        }
        getWindowOpen(e) {
            let t = h[e];
            return null != t && !t.closed
        }
        getIsAlwaysOnTop(e) {
            return !!A[e]
        }
        getWindowFocused(e) {
            var t, n;
            let i = h[e];
            return null !== (n = null == i ? void 0 : null === (t = i.document) || void 0 === t ? void 0 : t.hasFocus()) && void 0 !== n && n
        }
        getWindowVisible(e) {
            var t;
            let n = h[e];
            return (null == n ? void 0 : null === (t = n.document) || void 0 === t ? void 0 : t.visibilityState) === "visible"
        }
        getState() {
            return S
        }
        unmountWindow(e) {
            return g(e)
        }
    }
    f(v, "displayName", "PopoutWindowStore"), f(v, "persistKey", "PopoutWindowStore");
    let M = new v(d.default, {
        POPOUT_WINDOW_OPEN: function(e) {
            let {
                key: t,
                features: n,
                render: i
            } = e;
            if (c.isPlatformEmbedded && !E.default.supportsFeature(T.NativeFeatures.POPOUT_WINDOWS)) throw Error("Popout windows not supported on this native module version!");
            let r = h[t];
            if (null != r && !r.closed) return c.isPlatformEmbedded ? E.default.focus(t) : r.focus(), !1;
            let {
                defaultWidth: s,
                defaultHeight: a,
                defaultAlwaysOnTop: o = !1,
                ...l
            } = n, u = l, d = o, _ = S[t];
            if (null != _) {
                let {
                    width: e,
                    height: t,
                    x: n,
                    y: i,
                    alwaysOnTop: r
                } = _;
                d = null != r ? r : o, u = {
                    width: null != e && 0 !== e ? e : s,
                    height: null != t && 0 !== t ? t : a,
                    left: n,
                    top: i,
                    ...u
                }
            }
            let I = window.open(T.Routes.POPOUT_WINDOW, t, function(e) {
                let t = "";
                for (let n of Object.keys(e)) {
                    let i = e[n];
                    void 0 !== i && ("boolean" == typeof i && (i = i ? "yes" : "no"), t += "".concat(n, "=").concat(i, ","))
                }
                return t
            }(u));
            I.windowKey = t, null == I || I.focus(), h[t] = I, N[t] = i, c.isPlatformEmbedded && (E.default.setAlwaysOnTop(t, d), A[t] = d, E.default.isAlwaysOnTop(t).then(e => A[t] = e)), O.add(t)
        },
        POPOUT_WINDOW_CLOSE: function(e) {
            let {
                key: t
            } = e, n = h[t];
            null != n && !n.closed && (C(t), n.close())
        },
        POPOUT_WINDOW_SET_ALWAYS_ON_TOP: function(e) {
            let {
                key: t,
                alwaysOnTop: n
            } = e;
            c.isPlatformEmbedded && (E.default.setAlwaysOnTop(t, n), A[t] = n, E.default.isAlwaysOnTop(t).then(e => A[t] = e))
        },
        LOGOUT: D
    });
    t.default = M
}