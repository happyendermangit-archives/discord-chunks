function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getRunningGameAnalytics: function() {
            return a
        },
        isVerifiedGameExecutable: function() {
            return u
        },
        removeExecutablePathPrefix: function() {
            return i
        }
    });
    var r = n("950520"),
        o = n("374550");

    function i(e) {
        var t;
        return ((t = (t = e).toLowerCase()).endsWith("/") && (t = t.slice(0, -1)), t).split("/").slice(-2).join("/")
    }

    function a(e) {
        if (null == e) return {
            gameName: void 0,
            gameId: void 0,
            exe: void 0,
            distributor: void 0
        };
        var t, n, o = r.default.getGameByName(e.name),
            a = "exePath" in e ? e.exePath : e.exe;
        return {
            gameName: null !== (t = e.name) && void 0 !== t ? t : void 0,
            gameId: null == o ? void 0 : o.id,
            exe: null != a ? i(a) : void 0,
            distributor: null !== (n = e.distributor) && void 0 !== n ? n : void 0
        }
    }

    function u(e, t) {
        if (null == e || null == t) return !1;
        var n = (0, o.getPlatformName)();
        return t.some(function(t) {
            return t.os === n && t.name === i(e)
        })
    }
}