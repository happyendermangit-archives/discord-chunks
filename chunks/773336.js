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
            return i
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
        a = null != n ? n.process.platform : "";

    function i() {
        return /^win/.test(a)
    }

    function I() {
        return "darwin" === a
    }

    function s() {
        return "linux" === a
    }

    function T() {
        return i() || I() || s()
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
        return "android" === a
    }

    function R() {
        return "ios" === a
    }

    function l() {
        return i() ? "WINDOWS" : I() ? "OSX" : s() ? "LINUX" : "WEB"
    }

    function u() {
        return a
    }

    function L() {
        switch (a) {
            case "ios":
            case "android":
                return a;
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