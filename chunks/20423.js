function(e, a, t) {
    "use strict";
    t.r(a), t("860677");
    var s, d, n, i, c, r = t("37983");
    t("320777"), t("884691");
    var o = t("288661"),
        l = t("627445"),
        f = t.n(l),
        u = t("521143"),
        b = t("938460"),
        p = t("156820"),
        h = t("878175"),
        j = t("864088"),
        m = t("13616"),
        _ = t("436948"),
        E = t("286235"),
        g = t("701909"),
        I = t("518684"),
        T = t("50885"),
        O = t("956966"),
        S = t("773336"),
        A = t("393414"),
        R = t("741148"),
        w = t("336921"),
        v = t("862337"),
        N = t("49671"),
        C = t("60608"),
        D = t("928741");
    t("837211");
    var L = t("333525"),
        P = t("117041"),
        y = t("605250"),
        M = t("718517");
    let x = 5 * M.default.Millis.MINUTE,
        k = document.getElementById("app-mount");
    f(null != k, "Could not find app-mount"), k.className = __OVERLAY__ ? "" : L.appMount;
    let U = (0, o.createRoot)(k),
        G = e => U.render((0, r.jsx)(D.default, {
            children: (0, r.jsx)(C.default, {
                children: (0, r.jsx)(e, {})
            })
        }));
    if (null != N.default) {
        null === (s = N.default.setUncaughtExceptionHandler) || void 0 === s || s.call(N.default, (e, a) => {
            setImmediate(() => {
                throw E.default.captureCrash(e), e
            })
        });
        let e = null === (d = (n = N.default.remoteApp).getVersion) || void 0 === d ? void 0 : d.call(n),
            a = null === (i = (c = N.default.remoteApp).getBuildNumber) || void 0 === i ? void 0 : i.call(c),
            t = {};
        null != N.default.remoteApp.getModuleVersions && (t = N.default.remoteApp.getModuleVersions()), E.default.setExtra({
            hostVersion: e,
            moduleVersions: t
        }), E.default.setTags({
            nativeBuildNumber: null == a ? void 0 : a.toString()
        });
        let r = Object.keys(t).filter(e => null != t[e]).map(e => "".concat(e, ": ").concat(t[e])).join(", ");
        new(0, y.default)().log("[NATIVE INFO] host ".concat(e, ", modules: ").concat(r, ", build: ").concat(a)), T.default.setBackgroundThrottling(!1), T.default.initializeExitHook()
    }
    if ((0, w.setupWindow)(window), __OVERLAY__) G(u.default.Overlay);
    else if (null != window.require && null == window.DiscordNative) G(u.default.OutdatedClient);
    else {
        if (document.addEventListener("scroll", e => e.preventDefault()), S.isPlatformEmbedded) {
            window.onbeforeunload = () => T.default.beforeUnload(), T.default.on("HELP_OPEN", () => window.open(g.default.getCommunityURL()));
            let e = new v.DelayedCall(x, () => T.default.purgeMemory());
            T.default.on("MAIN_WINDOW_BLUR", () => {
                e.delay(), T.default.setFocused(!1), (0, R.focus)(window, !1)
            }), T.default.on("MAIN_WINDOW_FOCUS", () => {
                e.cancel(), T.default.setFocused(!0), (0, R.focus)(window, !0)
            }), T.default.on("MAIN_WINDOW_PATH", (e, a) => (0, A.transitionTo)(a)), T.default.on("MAIN_WINDOW_HIDDEN", () => {
                (0, R.hidden)(window)
            })
        }
        h.default.initialize(), b.default.init(), _.default.init(), j.default.init(), P.default.init(), p.default.initialize(), I.default.initialize(), O.default.initialize(), m.initialize(), G(u.default.App)
    }
}