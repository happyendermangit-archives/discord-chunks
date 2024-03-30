function(e, t, n) {
    "use strict";
    n.r(t), n("329909");
    var a = n("470079"),
        r = n("202226"),
        c = n("512722"),
        o = n.n(c),
        i = n("268042"),
        f = n("642726"),
        d = n("519595"),
        u = n("234987"),
        l = n("424276"),
        s = n("71739"),
        b = n("285910"),
        p = n("481971"),
        h = n("413777"),
        m = n("131900"),
        v = n("496943"),
        y = n("374550"),
        E = n("163291"),
        _ = n("619378"),
        g = n("986232"),
        O = n("945816"),
        I = n("517727"),
        w = n("366251"),
        R = n("809216");
    n("442913");
    var T = n("587213"),
        S = n("133804"),
        P = n("35523"),
        A = 5 * n("388990").default.Millis.MINUTE,
        N = document.getElementById("app-mount");
    o()(null != N, "Could not find app-mount"), N.className = __OVERLAY__ ? "" : T.appMount;
    var C = (0, r.createRoot)(N),
        D = function(e) {
            return C.render(a.createElement(R.default, null, a.createElement(w.default, null, a.createElement(e, null))))
        };
    if (null != I.default) {
        null === (k = I.default.setUncaughtExceptionHandler) || void 0 === k || k.call(I.default, function(e, t) {
            setImmediate(function() {
                throw b.default.captureCrash(e), e
            })
        });
        var k, L, M, j, U, G = null === (L = (M = I.default.remoteApp).getVersion) || void 0 === L ? void 0 : L.call(M),
            x = null === (j = (U = I.default.remoteApp).getBuildNumber) || void 0 === j ? void 0 : j.call(U),
            V = {};
        null != I.default.remoteApp.getModuleVersions && (V = I.default.remoteApp.getModuleVersions()), b.default.setExtra({
            hostVersion: G,
            moduleVersions: V
        }), b.default.setTags({
            nativeBuildNumber: null == x ? void 0 : x.toString()
        });
        var H = Object.keys(V).filter(function(e) {
            return null != V[e]
        }).map(function(e) {
            return "".concat(e, ": ").concat(V[e])
        }).join(", ");
        new P.default().log("[NATIVE INFO] host ".concat(G, ", modules: ").concat(H, ", build: ").concat(x)), m.default.setBackgroundThrottling(!1), m.default.initializeExitHook()
    }
    if ((0, g.setupWindow)(window), __OVERLAY__) D(i.default.Overlay);
    else if (null != window.require && null == window.DiscordNative) D(i.default.OutdatedClient);
    else {
        if (document.addEventListener("scroll", function(e) {
                return e.preventDefault()
            }), y.isPlatformEmbedded) {
            window.onbeforeunload = function() {
                return m.default.beforeUnload()
            }, m.default.on("HELP_OPEN", function() {
                return window.open(p.default.getCommunityURL())
            });
            var B = new O.DelayedCall(A, function() {
                return m.default.purgeMemory()
            });
            m.default.on("MAIN_WINDOW_BLUR", function() {
                B.delay(), m.default.setFocused(!1), (0, _.focus)(window, !1)
            }), m.default.on("MAIN_WINDOW_FOCUS", function() {
                B.cancel(), m.default.setFocused(!0), (0, _.focus)(window, !0)
            }), m.default.on("MAIN_WINDOW_PATH", function(e, t) {
                return (0, E.transitionTo)(t)
            }), m.default.on("MAIN_WINDOW_HIDDEN", function() {
                (0, _.hidden)(window)
            })
        }
        u.default.initialize(), f.default.init(), s.default.init(), S.default.init(), d.default.initialize(), h.default.initialize(), v.default.initialize(), l.initialize(), D(i.default.App)
    }
}