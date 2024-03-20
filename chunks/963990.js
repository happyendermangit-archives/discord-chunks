function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        removeExecutablePathPrefix: function() {
            return s
        },
        getRunningGameAnalytics: function() {
            return r
        }
    });
    var i = n("546463");

    function s(e) {
        var t;
        let n = ((t = (t = e).toLowerCase()).endsWith("/") && (t = t.slice(0, -1)), t);
        return n.split("/").slice(-2).join("/")
    }

    function r(e) {
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
}