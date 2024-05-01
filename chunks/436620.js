function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BROWSER_SUPPORTS_CONNECTION_STATE: function() {
            return E
        },
        BROWSER_SUPPORTS_DIAGNOSTICS: function() {
            return c
        },
        BROWSER_SUPPORTS_UNIFIED_PLAN: function() {
            return _
        },
        BROWSER_SUPPORTS_VIDEO: function() {
            return d
        },
        BROWSER_SUPPORTS_VOICE: function() {
            return u
        },
        IS_APP_COMPATIBLE_BROWSER: function() {
            return l
        }
    });
    var i, r = n("264344"),
        a = n.n(r);
    let s = parseInt(null !== (i = a().version) && void 0 !== i ? i : "0", 10),
        o = void 0 !== a().ua && a().ua.indexOf("OculusBrowser") > -1,
        l = (() => {
            if (null == window.WebSocket) return !1;
            switch (a().name) {
                case "IE":
                case "Microsoft Edge":
                    return s >= 15;
                default:
                    return !0
            }
        })(),
        u = o || "Firefox" === a().name && s >= 80 || "Chrome" === a().name && s >= 37 || "Opera" === a().name && s >= 66 || "Node.js" === a().name && s >= 6 || "Electron" === a().name && s >= 1 || "Safari" === a().name && s >= 13 || "Microsoft Edge" === a().name && s >= 37,
        d = "Chrome" === a().name || "Safari" === a().name || "Firefox" === a().name && s >= 80 || "Opera" === a().name || "Microsoft Edge" === a().name,
        _ = o || "Firefox" === a().name && s >= 73 || "Safari" === a().name && s >= 13 || "Chrome" === a().name && s >= 80 || "Microsoft Edge" === a().name && s >= 80,
        c = "Chrome" === a().name && s >= 58 || "Safari" === a().name && s >= 15 || "Firefox" === a().name && s >= 108,
        E = "Chrome" === a().name && s >= 72 || "Safari" === a().name && s >= 11 || "Opera" === a().name && s >= 60 || "Microsoft Edge" === a().name && s >= 79
}