function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        makeDesktopDownloadURL: function() {
            return d
        },
        getPlatformReadableName: function() {
            return _
        },
        getCurrentPlatformDownloadURL: function() {
            return L
        },
        getMobileDownloadLink: function() {
            return c
        }
    });
    var a = s("597755"),
        l = s.n(a),
        n = s("815157"),
        r = s("271938"),
        u = s("49111");
    let E = "linux";

    function d(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            s = arguments.length > 2 ? arguments[2] : void 0;
        return "".concat(u.DownloadLinks.DESKTOP).concat(t ? "/ptb" : "", "?platform=").concat(e).concat(null != s ? "&format=".concat(s) : "")
    }

    function i() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (e = l.os) || void 0 === e ? void 0 : e.family;
        return null == t ? "win" : -1 !== t.indexOf("Ubuntu") || -1 !== t.indexOf("Debian") || -1 !== t.indexOf("Fedora") || -1 !== t.indexOf("Red Hat") || -1 !== t.indexOf("SuSE") || -1 !== t.indexOf("Linux") ? E : -1 !== t.indexOf("OS X") ? "osx" : "win"
    }

    function _(e) {
        return ({
            win: "Windows",
            osx: "Mac",
            [E]: "Linux"
        })[i(e)]
    }

    function L() {
        let e = i();
        return d(e, !1, e === E ? "tar.gz" : null)
    }

    function c(e, t, s) {
        let a = null != s ? s.toString() : null;
        switch (t) {
            case "iOS":
                return (0, n.default)(null != a ? a : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
                    utmSource: e,
                    fingerprint: r.default.getFingerprint(),
                    attemptId: (0, n.generateAttemptId)()
                });
            case "Android":
                return (0, n.default)(null != a ? a : "https://play.google.com/store/apps/details", {
                    utmSource: e,
                    id: "com.discord",
                    fingerprint: r.default.getFingerprint(),
                    attemptId: (0, n.generateAttemptId)()
                });
            default:
                return null != a ? a : "https://www.discord.com"
        }
    }
}