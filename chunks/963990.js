function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        removeExecutablePathPrefix: function() {
            return r
        },
        getRunningGameAnalytics: function() {
            return a
        },
        isVerifiedGameExecutable: function() {
            return o
        }
    });
    var i = n("546463"),
        s = n("773336");

    function r(e) {
        var t;
        let n = ((t = (t = e).toLowerCase()).endsWith("/") && (t = t.slice(0, -1)), t);
        return n.split("/").slice(-2).join("/")
    }

    function a(e) {
        var t, n;
        if (null == e) return {
            gameName: void 0,
            gameId: void 0,
            exe: void 0,
            distributor: void 0
        };
        let s = i.default.getGameByName(e.name),
            a = "exePath" in e ? e.exePath : e.exe;
        return {
            gameName: null !== (t = e.name) && void 0 !== t ? t : void 0,
            gameId: null == s ? void 0 : s.id,
            exe: null != a ? r(a) : void 0,
            distributor: null !== (n = e.distributor) && void 0 !== n ? n : void 0
        }
    }

    function o(e, t) {
        if (null == e || null == t) return !1;
        let n = (0, s.getPlatformName)();
        return t.some(t => t.os === n && t.name === r(e))
    }
}