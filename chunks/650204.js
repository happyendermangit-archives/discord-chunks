function(e, t, a) {
    "use strict";
    a.r(t), a("177593");
    var d, n, i, c, o, r = a("735250");
    a("92138"), a("470079");
    var f = a("202226"),
        s = a("512722"),
        l = a.n(s),
        u = a("832037"),
        b = a("464253"),
        h = a("485359"),
        p = a("395727"),
        m = a("471638"),
        _ = a("585275"),
        E = a("960048"),
        g = a("63063"),
        I = a("240849"),
        O = a("998502"),
        T = a("513566"),
        w = a("358085"),
        v = a("703656"),
        R = a("284737"),
        S = a("473159"),
        A = a("846519"),
        N = a("579806"),
        C = a("896361"),
        D = a("892254");
    a("442913");
    var P = a("587213"),
        L = a("44163"),
        y = a("710845");
    let M = 5 * a("70956").default.Millis.MINUTE,
        k = document.getElementById("app-mount");
    l()(null != k, "Could not find app-mount"), k.className = __OVERLAY__ ? "" : P.appMount;
    let U = (0, f.createRoot)(k),
        x = e => U.render((0, r.jsx)(D.default, {
            children: (0, r.jsx)(C.default, {
                children: (0, r.jsx)(e, {})
            })
        }));
    if (null != N.default) {
        null === (d = N.default.setUncaughtExceptionHandler) || void 0 === d || d.call(N.default, (e, t) => {
            setImmediate(() => {
                throw E.default.captureCrash(e), e
            })
        });
        let e = null === (n = (i = N.default.remoteApp).getVersion) || void 0 === n ? void 0 : n.call(i),
            t = null === (c = (o = N.default.remoteApp).getBuildNumber) || void 0 === c ? void 0 : c.call(o),
            a = {};
        null != N.default.remoteApp.getModuleVersions && (a = N.default.remoteApp.getModuleVersions()), E.default.setExtra({
            hostVersion: e,
            moduleVersions: a
        }), E.default.setTags({
            nativeBuildNumber: null == t ? void 0 : t.toString()
        });
        let r = Object.keys(a).filter(e => null != a[e]).map(e => "".concat(e, ": ").concat(a[e])).join(", ");
        new y.default().log("[NATIVE INFO] host ".concat(e, ", modules: ").concat(r, ", build: ").concat(t)), O.default.setBackgroundThrottling(!1), O.default.initializeExitHook()
    }
    if ((0, S.setupWindow)(window), __OVERLAY__) x(u.default.Overlay);
    else if (null != window.require && null == window.DiscordNative) x(u.default.OutdatedClient);
    else {
        if (document.addEventListener("scroll", e => e.preventDefault()), w.isPlatformEmbedded) {
            window.onbeforeunload = () => O.default.beforeUnload(), O.default.on("HELP_OPEN", () => window.open(g.default.getCommunityURL()));
            let e = new A.DelayedCall(M, () => O.default.purgeMemory());
            O.default.on("MAIN_WINDOW_BLUR", () => {
                e.delay(), O.default.setFocused(!1), (0, R.focus)(window, !1)
            }), O.default.on("MAIN_WINDOW_FOCUS", () => {
                e.cancel(), O.default.setFocused(!0), (0, R.focus)(window, !0)
            }), O.default.on("MAIN_WINDOW_PATH", (e, t) => (0, v.transitionTo)(t)), O.default.on("MAIN_WINDOW_HIDDEN", () => {
                (0, R.hidden)(window)
            })
        }
        p.default.initialize(), b.default.init(), _.default.init(), L.default.init(), h.default.initialize(), I.default.initialize(), T.default.initialize(), m.initialize(), x(u.default.App)
    }
}