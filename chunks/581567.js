function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getRunningGameAnalytics: function() {
            return a
        },
        isVerifiedGameExecutable: function() {
            return o
        },
        removeExecutablePathPrefix: function() {
            return s
        }
    });
    var i = n("77498"),
        r = n("358085");

    function s(e) {
        var t;
        return ((t = (t = e).toLowerCase()).endsWith("/") && (t = t.slice(0, -1)), t).split("/").slice(-2).join("/")
    }

    function a(e) {
        var t, n;
        if (null == e) return {
            gameName: void 0,
            gameId: void 0,
            exe: void 0,
            distributor: void 0
        };
        let r = i.default.getGameByName(e.name),
            a = "exePath" in e ? e.exePath : e.exe;
        return {
            gameName: null !== (t = e.name) && void 0 !== t ? t : void 0,
            gameId: null == r ? void 0 : r.id,
            exe: null != a ? s(a) : void 0,
            distributor: null !== (n = e.distributor) && void 0 !== n ? n : void 0
        }
    }

    function o(e, t) {
        if (null == e || null == t) return !1;
        let n = (0, r.getPlatformName)();
        return t.some(t => t.os === n && t.name === s(e))
    }
}