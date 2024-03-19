function(e, a, t) {
    "use strict";
    t.r(a), t.d(a, {
        makeDesktopDownloadURL: function() {
            return o
        },
        getPlatformReadableName: function() {
            return l
        },
        getCurrentPlatformDownloadURL: function() {
            return u
        },
        getMobileDownloadLink: function() {
            return p
        }
    });
    var d = t("597755"),
        s = t.n(d),
        n = t("815157"),
        i = t("271938"),
        c = t("49111");
    let r = "linux";

    function o(e) {
        let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            t = arguments.length > 2 ? arguments[2] : void 0;
        return "".concat(c.DownloadLinks.DESKTOP).concat(a ? "/ptb" : "", "?platform=").concat(e).concat(null != t ? "&format=".concat(t) : "")
    }

    function f() {
        var e;
        let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (e = s.os) || void 0 === e ? void 0 : e.family;
        return null == a ? "win" : -1 !== a.indexOf("Ubuntu") || -1 !== a.indexOf("Debian") || -1 !== a.indexOf("Fedora") || -1 !== a.indexOf("Red Hat") || -1 !== a.indexOf("SuSE") || -1 !== a.indexOf("Linux") ? r : -1 !== a.indexOf("OS X") ? "osx" : "win"
    }

    function l(e) {
        return ({
            win: "Windows",
            osx: "Mac",
            [r]: "Linux"
        })[f(e)]
    }

    function u() {
        let e = f();
        return o(e, !1, e === r ? "tar.gz" : null)
    }

    function p(e, a, t) {
        let d = null != t ? t.toString() : null;
        switch (a) {
            case "iOS":
                return (0, n.default)(null != d ? d : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
                    utmSource: e,
                    fingerprint: i.default.getFingerprint(),
                    attemptId: (0, n.generateAttemptId)()
                });
            case "Android":
                return (0, n.default)(null != d ? d : "https://play.google.com/store/apps/details", {
                    utmSource: e,
                    id: "com.discord",
                    fingerprint: i.default.getFingerprint(),
                    attemptId: (0, n.generateAttemptId)()
                });
            default:
                return null != d ? d : "https://www.discord.com"
        }
    }
}