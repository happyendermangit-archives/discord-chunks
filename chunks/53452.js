function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        IS_APP_COMPATIBLE_BROWSER: function() {
            return l
        },
        BROWSER_SUPPORTS_VOICE: function() {
            return u
        },
        BROWSER_SUPPORTS_VIDEO: function() {
            return d
        },
        BROWSER_SUPPORTS_UNIFIED_PLAN: function() {
            return c
        },
        BROWSER_SUPPORTS_DIAGNOSTICS: function() {
            return f
        },
        BROWSER_SUPPORTS_CONNECTION_STATE: function() {
            return _
        }
    });
    var i, s = n("383536"),
        r = n.n(s);
    let a = parseInt(null !== (i = r.version) && void 0 !== i ? i : "0", 10),
        o = void 0 !== r.ua && r.ua.indexOf("OculusBrowser") > -1,
        l = (() => {
            if (null == window.WebSocket) return !1;
            switch (r.name) {
                case "IE":
                case "Microsoft Edge":
                    return a >= 15;
                default:
                    return !0
            }
        })(),
        u = o || "Firefox" === r.name && a >= 80 || "Chrome" === r.name && a >= 37 || "Opera" === r.name && a >= 66 || "Node.js" === r.name && a >= 6 || "Electron" === r.name && a >= 1 || "Safari" === r.name && a >= 13 || "Microsoft Edge" === r.name && a >= 37,
        d = "Chrome" === r.name || "Safari" === r.name || "Firefox" === r.name && a >= 80 || "Opera" === r.name || "Microsoft Edge" === r.name,
        c = o || "Firefox" === r.name && a >= 73 || "Safari" === r.name && a >= 13 || "Chrome" === r.name && a >= 80 || "Microsoft Edge" === r.name && a >= 80,
        f = "Chrome" === r.name && a >= 58 || "Safari" === r.name && a >= 15 || "Firefox" === r.name && a >= 108,
        _ = "Chrome" === r.name && a >= 72 || "Safari" === r.name && a >= 11 || "Opera" === r.name && a >= 60 || "Microsoft Edge" === r.name && a >= 79
}