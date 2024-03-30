function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getCurrentPlatformDownloadURL: function() {
            return b
        },
        getMobileDownloadLink: function() {
            return p
        },
        getPlatformReadableName: function() {
            return s
        },
        makeDesktopDownloadURL: function() {
            return u
        }
    });
    var a = n("525654"),
        r = n.n(a),
        c = n("296890"),
        o = n("217014"),
        i = n("281767");

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var d = "linux";

    function u(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0;
        return "".concat(i.DownloadLinks.DESKTOP).concat(t ? "/ptb" : "", "?platform=").concat(e).concat(null != n ? "&format=".concat(n) : "")
    }

    function l() {
        var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (e = r().os) || void 0 === e ? void 0 : e.family;
        return null == t ? "win" : -1 !== t.indexOf("Ubuntu") || -1 !== t.indexOf("Debian") || -1 !== t.indexOf("Fedora") || -1 !== t.indexOf("Red Hat") || -1 !== t.indexOf("SuSE") || -1 !== t.indexOf("Linux") ? d : -1 !== t.indexOf("OS X") ? "osx" : "win"
    }

    function s(e) {
        var t;
        return (f(t = {}, "win", "Windows"), f(t, "osx", "Mac"), f(t, d, "Linux"), t)[l(e)]
    }

    function b() {
        var e = l();
        return u(e, !1, e === d ? "tar.gz" : null)
    }

    function p(e, t, n) {
        var a = null != n ? n.toString() : null;
        switch (t) {
            case "iOS":
                return (0, c.default)(null != a ? a : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
                    utmSource: e,
                    fingerprint: o.default.getFingerprint(),
                    attemptId: (0, c.generateAttemptId)()
                });
            case "Android":
                return (0, c.default)(null != a ? a : "https://play.google.com/store/apps/details", {
                    utmSource: e,
                    id: "com.discord",
                    fingerprint: o.default.getFingerprint(),
                    attemptId: (0, c.generateAttemptId)()
                });
            default:
                return null != a ? a : "https://www.discord.com"
        }
    }
}