function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PlatformTypes: function() {
            return o
        },
        getNativePlatform: function() {
            return h
        },
        getOS: function() {
            return O
        },
        getPlatform: function() {
            return y
        },
        getPlatformName: function() {
            return I
        },
        isAndroid: function() {
            return p
        },
        isAndroidChrome: function() {
            return _
        },
        isAndroidWeb: function() {
            return E
        },
        isDesktop: function() {
            return f
        },
        isIOS: function() {
            return m
        },
        isLinux: function() {
            return c
        },
        isMac: function() {
            return l
        },
        isPlatformEmbedded: function() {
            return a
        },
        isWeb: function() {
            return d
        },
        isWindows: function() {
            return s
        }
    }), (r = o || (o = {})).WINDOWS = "WINDOWS", r.OSX = "OSX", r.LINUX = "LINUX", r.WEB = "WEB";
    var r, o, i = window.DiscordNative,
        a = null != i,
        u = null != i ? i.process.platform : "";

    function s() {
        return /^win/.test(u)
    }

    function l() {
        return "darwin" === u
    }

    function c() {
        return "linux" === u
    }

    function f() {
        return s() || l() || c()
    }

    function d() {
        return "WEB" === y()
    }

    function _() {
        return null != navigator.userAgent && null != navigator.userAgent.toLowerCase().match("(android ).+chrome/[.0-9]* mobile")
    }

    function E() {
        var e;
        return (null === (e = navigator.userAgent) || void 0 === e ? void 0 : e.match(/android/i)) != null
    }

    function p() {
        return "android" === u
    }

    function m() {
        return "ios" === u
    }

    function y() {
        return s() ? "WINDOWS" : l() ? "OSX" : c() ? "LINUX" : "WEB"
    }

    function I() {
        return u
    }

    function h() {
        switch (u) {
            case "ios":
            case "android":
                return u;
            default:
                return "web"
        }
    }

    function O() {
        var e = window.navigator.userAgent;
        if (/Windows/i.test(e)) return /Phone/.test(e) ? "windows mobile" : "windows";
        if (/(iPhone|iPad|iPod)/.test(e)) return "ios";
        if (/Android/.test(e)) return "android";
        else if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return "blackberry";
        else if (/Mac/i.test(e)) return null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2 ? "ios" : "macos";
        else if (/Linux/i.test(e)) return "linux"
    }
}