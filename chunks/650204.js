function(e, t, a) {
    "use strict";
    a.r(t), a("610138"), a("216116"), a("78328"), a("815648"), a("47120"), a("177593");
    var d, n, c, i, o, r = a("735250");
    a("92138"), a("470079");
    var f = a("202226"),
        l = a("512722"),
        s = a.n(l),
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
        v = a("534713"),
        R = a("358085"),
        w = a("703656"),
        S = a("284737"),
        A = a("473159"),
        N = a("846519"),
        C = a("579806"),
        D = a("896361"),
        P = a("892254");
    a("910281");
    var L = a("688334"),
        y = a("44163"),
        M = a("710845");
    let k = 5 * a("70956").default.Millis.MINUTE,
        U = document.getElementById("app-mount");
    s()(null != U, "Could not find app-mount"), U.className = __OVERLAY__ ? "" : L.appMount;
    let x = (0, f.createRoot)(U),
        j = {
            "/oauth2/authorize": v.default
        },
        V = e => x.render((0, r.jsx)(P.default, {
            children: (0, r.jsx)(D.default, {
                children: (0, r.jsx)(e, {})
            })
        }));
    if (null != C.default) {
        null === (d = C.default.setUncaughtExceptionHandler) || void 0 === d || d.call(C.default, (e, t) => {
            setImmediate(() => {
                throw E.default.captureCrash(e), e
            })
        });
        let e = null === (n = (c = C.default.remoteApp).getVersion) || void 0 === n ? void 0 : n.call(c),
            t = null === (i = (o = C.default.remoteApp).getBuildNumber) || void 0 === i ? void 0 : i.call(o),
            a = {};
        null != C.default.remoteApp.getModuleVersions && (a = C.default.remoteApp.getModuleVersions()), E.default.setExtra({
            hostVersion: e,
            moduleVersions: a
        }), E.default.setTags({
            nativeBuildNumber: null == t ? void 0 : t.toString()
        });
        let r = Object.keys(a).filter(e => null != a[e]).map(e => "".concat(e, ": ").concat(a[e])).join(", ");
        new M.default().log("[NATIVE INFO] host ".concat(e, ", modules: ").concat(r, ", build: ").concat(t)), O.default.initializeExitHook()
    }
    if ((0, A.setupWindow)(window), __OVERLAY__) V(u.default.Overlay);
    else if (null != window.require && null == window.DiscordNative) V(u.default.OutdatedClient);
    else {
        if (document.addEventListener("scroll", e => e.preventDefault()), R.isPlatformEmbedded) {
            window.onbeforeunload = () => O.default.beforeUnload(), O.default.on("HELP_OPEN", () => window.open(g.default.getCommunityURL()));
            let e = new N.DelayedCall(k, () => O.default.purgeMemory());
            O.default.on("MAIN_WINDOW_BLUR", () => {
                e.delay(), O.default.setFocused(!1), (0, S.focus)(window, !1)
            }), O.default.on("MAIN_WINDOW_FOCUS", () => {
                e.cancel(), O.default.setFocused(!0), (0, S.focus)(window, !0)
            }), O.default.on("MAIN_WINDOW_PATH", function(e, t, a) {
                var d;
                let n = null != a ? new URLSearchParams(a) : null;
                (null === (d = j[t]) || void 0 === d || !d.call(j, n)) && (0, w.transitionTo)(t)
            }), O.default.on("MAIN_WINDOW_HIDDEN", () => {
                (0, S.hidden)(window)
            })
        }
        p.default.initialize(), b.default.init(), _.default.init(), y.default.init(), h.default.initialize(), I.default.initialize(), T.default.initialize(), m.initialize(), V(u.default.App)
    }
}