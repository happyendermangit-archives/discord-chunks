function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BROWSER_SUPPORTS_CONNECTION_STATE: function() {
            return _
        },
        BROWSER_SUPPORTS_DIAGNOSTICS: function() {
            return d
        },
        BROWSER_SUPPORTS_UNIFIED_PLAN: function() {
            return f
        },
        BROWSER_SUPPORTS_VIDEO: function() {
            return c
        },
        BROWSER_SUPPORTS_VOICE: function() {
            return l
        },
        IS_APP_COMPATIBLE_BROWSER: function() {
            return s
        }
    });
    var r, o = n("264344"),
        i = n.n(o),
        a = parseInt(null !== (r = i().version) && void 0 !== r ? r : "0", 10),
        u = void 0 !== i().ua && i().ua.indexOf("OculusBrowser") > -1,
        s = function() {
            if (null == window.WebSocket) return !1;
            switch (i().name) {
                case "IE":
                case "Microsoft Edge":
                    return a >= 15;
                default:
                    return !0
            }
        }(),
        l = u || "Firefox" === i().name && a >= 80 || "Chrome" === i().name && a >= 37 || "Opera" === i().name && a >= 66 || "Node.js" === i().name && a >= 6 || "Electron" === i().name && a >= 1 || "Safari" === i().name && a >= 13 || "Microsoft Edge" === i().name && a >= 37,
        c = "Chrome" === i().name || "Safari" === i().name || "Firefox" === i().name && a >= 80 || "Opera" === i().name || "Microsoft Edge" === i().name,
        f = u || "Firefox" === i().name && a >= 73 || "Safari" === i().name && a >= 13 || "Chrome" === i().name && a >= 80 || "Microsoft Edge" === i().name && a >= 80,
        d = "Chrome" === i().name && a >= 58 || "Safari" === i().name && a >= 15 || "Firefox" === i().name && a >= 108,
        _ = "Chrome" === i().name && a >= 72 || "Safari" === i().name && a >= 11 || "Opera" === i().name && a >= 60 || "Microsoft Edge" === i().name && a >= 79
}