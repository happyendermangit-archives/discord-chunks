function(e, t, n) {
    "use strict";
    var i, r;
    n.r(t), n.d(t, {
        PlatformTypes: function() {
            return i
        },
        getNativePlatform: function() {
            return h
        },
        getOS: function() {
            return m
        },
        getPlatform: function() {
            return S
        },
        getPlatformName: function() {
            return A
        },
        isAndroid: function() {
            return T
        },
        isAndroidChrome: function() {
            return E
        },
        isAndroidWeb: function() {
            return I
        },
        isDesktop: function() {
            return _
        },
        isIOS: function() {
            return f
        },
        isLinux: function() {
            return d
        },
        isMac: function() {
            return u
        },
        isPlatformEmbedded: function() {
            return a
        },
        isWeb: function() {
            return c
        },
        isWindows: function() {
            return l
        }
    }), (r = i || (i = {})).WINDOWS = "WINDOWS", r.OSX = "OSX", r.LINUX = "LINUX", r.WEB = "WEB";
    let s = window.DiscordNative,
        a = null != s,
        o = null != s ? s.process.platform : "";

    function l() {
        return /^win/.test(o)
    }

    function u() {
        return "darwin" === o
    }

    function d() {
        return "linux" === o
    }

    function _() {
        return l() || u() || d()
    }

    function c() {
        return "WEB" === S()
    }

    function E() {
        return null != navigator.userAgent && null != navigator.userAgent.toLowerCase().match("(android ).+chrome/[.0-9]* mobile")
    }

    function I() {
        var e;
        return (null === (e = navigator.userAgent) || void 0 === e ? void 0 : e.match(/android/i)) != null
    }

    function T() {
        return "android" === o
    }

    function f() {
        return "ios" === o
    }

    function S() {
        return l() ? "WINDOWS" : u() ? "OSX" : d() ? "LINUX" : "WEB"
    }

    function A() {
        return o
    }

    function h() {
        switch (o) {
            case "ios":
            case "android":
                return o;
            default:
                return "web"
        }
    }

    function m() {
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