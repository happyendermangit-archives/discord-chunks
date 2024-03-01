function(e, _, E) {
    "use strict";
    var t, o;
    E.r(_), E.d(_, {
        PlatformTypes: function() {
            return t
        },
        isPlatformEmbedded: function() {
            return r
        },
        isWindows: function() {
            return a
        },
        isMac: function() {
            return I
        },
        isLinux: function() {
            return s
        },
        isDesktop: function() {
            return T
        },
        isWeb: function() {
            return S
        },
        isAndroidChrome: function() {
            return N
        },
        isAndroidWeb: function() {
            return O
        },
        isAndroid: function() {
            return A
        },
        isIOS: function() {
            return R
        },
        getPlatform: function() {
            return l
        },
        getPlatformName: function() {
            return u
        },
        getNativePlatform: function() {
            return L
        },
        getOS: function() {
            return C
        }
    }), (o = t || (t = {})).WINDOWS = "WINDOWS", o.OSX = "OSX", o.LINUX = "LINUX", o.WEB = "WEB";
    let n = window.DiscordNative,
        r = null != n,
        i = null != n ? n.process.platform : "";

    function a() {
        return /^win/.test(i)
    }

    function I() {
        return "darwin" === i
    }

    function s() {
        return "linux" === i
    }

    function T() {
        return a() || I() || s()
    }

    function S() {
        return "WEB" === l()
    }

    function N() {
        return null != navigator.userAgent && null != navigator.userAgent.toLowerCase().match("(android ).+chrome/[.0-9]* mobile")
    }

    function O() {
        var e;
        return (null === (e = navigator.userAgent) || void 0 === e ? void 0 : e.match(/android/i)) != null
    }

    function A() {
        return "android" === i
    }

    function R() {
        return "ios" === i
    }

    function l() {
        return a() ? "WINDOWS" : I() ? "OSX" : s() ? "LINUX" : "WEB"
    }

    function u() {
        return i
    }

    function L() {
        switch (i) {
            case "ios":
            case "android":
                return i;
            default:
                return "web"
        }
    }

    function C() {
        let {
            userAgent: e
        } = window.navigator;
        if (/Windows/i.test(e)) return /Phone/.test(e) ? "windows mobile" : "windows";
        if (/(iPhone|iPad|iPod)/.test(e)) return "ios";
        if (/Android/.test(e)) return "android";
        else if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return "blackberry";
        else if (/Mac/i.test(e)) return null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2 ? "ios" : "macos";
        else if (/Linux/i.test(e)) return "linux"
    }
}