function(e, t, a) {
    "use strict";
    a.r(t), a.d(t, {
        getCurrentPlatformDownloadURL: function() {
            return u
        },
        getMobileDownloadLink: function() {
            return b
        },
        getPlatformReadableName: function() {
            return s
        },
        makeDesktopDownloadURL: function() {
            return f
        }
    });
    var d = a("525654"),
        n = a.n(d),
        c = a("271579"),
        i = a("314897"),
        r = a("981631");
    let o = "linux";

    function f(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            a = arguments.length > 2 ? arguments[2] : void 0;
        return "".concat(r.DownloadLinks.DESKTOP).concat(t ? "/ptb" : "", "?platform=").concat(e).concat(null != a ? "&format=".concat(a) : "")
    }

    function l() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (e = n().os) || void 0 === e ? void 0 : e.family;
        return null == t ? "win" : -1 !== t.indexOf("Ubuntu") || -1 !== t.indexOf("Debian") || -1 !== t.indexOf("Fedora") || -1 !== t.indexOf("Red Hat") || -1 !== t.indexOf("SuSE") || -1 !== t.indexOf("Linux") ? o : -1 !== t.indexOf("OS X") ? "osx" : "win"
    }

    function s(e) {
        return ({
            win: "Windows",
            osx: "Mac",
            [o]: "Linux"
        })[l(e)]
    }

    function u() {
        let e = l();
        return f(e, !1, e === o ? "tar.gz" : null)
    }

    function b(e, t, a) {
        let d = null != a ? a.toString() : null;
        switch (t) {
            case "iOS":
                return (0, c.default)(null != d ? d : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
                    utmSource: e,
                    fingerprint: i.default.getFingerprint(),
                    attemptId: (0, c.generateAttemptId)()
                });
            case "Android":
                return (0, c.default)(null != d ? d : "https://play.google.com/store/apps/details", {
                    utmSource: e,
                    id: "com.discord",
                    fingerprint: i.default.getFingerprint(),
                    attemptId: (0, c.generateAttemptId)()
                });
            default:
                return null != d ? d : "https://www.discord.com"
        }
    }
}