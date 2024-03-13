function(e, a, t) {
    "use strict";
    t.r(a), t("860677");
    var s, d, n, c, i, r = t("37983");
    t("320777"), t("884691");
    var o = t("288661"),
        f = t("627445"),
        l = t.n(f),
        u = t("521143"),
        b = t("938460"),
        p = t("156820"),
        h = t("878175"),
        j = t("13616"),
        m = t("436948"),
        _ = t("286235"),
        E = t("701909"),
        g = t("518684"),
        I = t("50885"),
        T = t("956966"),
        O = t("773336"),
        R = t("393414"),
        w = t("741148"),
        v = t("336921"),
        A = t("862337"),
        S = t("49671"),
        N = t("60608"),
        C = t("928741");
    t("837211");
    var D = t("333525"),
        L = t("117041"),
        P = t("605250"),
        y = t("718517");
    let M = 5 * y.default.Millis.MINUTE,
        k = document.getElementById("app-mount");
    l(null != k, "Could not find app-mount"), k.className = __OVERLAY__ ? "" : D.appMount;
    let x = (0, o.createRoot)(k),
        U = e => x.render((0, r.jsx)(C.default, {
            children: (0, r.jsx)(N.default, {
                children: (0, r.jsx)(e, {})
            })
        }));
    if (null != S.default) {
        null === (s = S.default.setUncaughtExceptionHandler) || void 0 === s || s.call(S.default, (e, a) => {
            setImmediate(() => {
                throw _.default.captureCrash(e), e
            })
        });
        let e = null === (d = (n = S.default.remoteApp).getVersion) || void 0 === d ? void 0 : d.call(n),
            a = null === (c = (i = S.default.remoteApp).getBuildNumber) || void 0 === c ? void 0 : c.call(i),
            t = {};
        null != S.default.remoteApp.getModuleVersions && (t = S.default.remoteApp.getModuleVersions()), _.default.setExtra({
            hostVersion: e,
            moduleVersions: t
        }), _.default.setTags({
            nativeBuildNumber: null == a ? void 0 : a.toString()
        });
        let r = Object.keys(t).filter(e => null != t[e]).map(e => "".concat(e, ": ").concat(t[e])).join(", ");
        new(0, P.default)().log("[NATIVE INFO] host ".concat(e, ", modules: ").concat(r, ", build: ").concat(a)), I.default.setBackgroundThrottling(!1), I.default.initializeExitHook()
    }
    if ((0, v.setupWindow)(window), __OVERLAY__) U(u.default.Overlay);
    else if (null != window.require && null == window.DiscordNative) U(u.default.OutdatedClient);
    else {
        if (document.addEventListener("scroll", e => e.preventDefault()), O.isPlatformEmbedded) {
            window.onbeforeunload = () => I.default.beforeUnload(), I.default.on("HELP_OPEN", () => window.open(E.default.getCommunityURL()));
            let e = new A.DelayedCall(M, () => I.default.purgeMemory());
            I.default.on("MAIN_WINDOW_BLUR", () => {
                e.delay(), I.default.setFocused(!1), (0, w.focus)(window, !1)
            }), I.default.on("MAIN_WINDOW_FOCUS", () => {
                e.cancel(), I.default.setFocused(!0), (0, w.focus)(window, !0)
            }), I.default.on("MAIN_WINDOW_PATH", (e, a) => (0, R.transitionTo)(a)), I.default.on("MAIN_WINDOW_HIDDEN", () => {
                (0, w.hidden)(window)
            })
        }
        h.default.initialize(), b.default.init(), m.default.init(), L.default.init(), p.default.initialize(), g.default.initialize(), T.default.initialize(), j.initialize(), U(u.default.App)
    }
}