function(e, a, t) {
    "use strict";
    t.r(a), t.d(a, {
        makeDesktopDownloadURL: function() {
            return o
        },
        getPlatformReadableName: function() {
            return f
        },
        getCurrentPlatformDownloadURL: function() {
            return u
        },
        getMobileDownloadLink: function() {
            return b
        }
    });
    var s = t("597755"),
        d = t.n(s),
        n = t("815157"),
        i = t("271938"),
        c = t("49111");
    let r = "linux";

    function o(e) {
        let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            t = arguments.length > 2 ? arguments[2] : void 0;
        return "".concat(c.DownloadLinks.DESKTOP).concat(a ? "/ptb" : "", "?platform=").concat(e).concat(null != t ? "&format=".concat(t) : "")
    }

    function l() {
        var e;
        let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (e = d.os) || void 0 === e ? void 0 : e.family;
        return null == a ? "win" : -1 !== a.indexOf("Ubuntu") || -1 !== a.indexOf("Debian") || -1 !== a.indexOf("Fedora") || -1 !== a.indexOf("Red Hat") || -1 !== a.indexOf("SuSE") || -1 !== a.indexOf("Linux") ? r : -1 !== a.indexOf("OS X") ? "osx" : "win"
    }

    function f(e) {
        return ({
            win: "Windows",
            osx: "Mac",
            [r]: "Linux"
        })[l(e)]
    }

    function u() {
        let e = l();
        return o(e, !1, e === r ? "tar.gz" : null)
    }

    function b(e, a, t) {
        let s = null != t ? t.toString() : null;
        switch (a) {
            case "iOS":
                return (0, n.default)(null != s ? s : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
                    utmSource: e,
                    fingerprint: i.default.getFingerprint(),
                    attemptId: (0, n.generateAttemptId)()
                });
            case "Android":
                return (0, n.default)(null != s ? s : "https://play.google.com/store/apps/details", {
                    utmSource: e,
                    id: "com.discord",
                    fingerprint: i.default.getFingerprint(),
                    attemptId: (0, n.generateAttemptId)()
                });
            default:
                return null != s ? s : "https://www.discord.com"
        }
    }
}