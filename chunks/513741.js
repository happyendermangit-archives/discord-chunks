function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        canUseWebp: function() {
            return y
        },
        getChromeVersion: function() {
            return d
        },
        getFirefoxVersion: function() {
            return p
        },
        supportsHEVCAlpha: function() {
            return I
        }
    });
    var r, o, i, a, u, s = n("525654"),
        l = n.n(s),
        c = (null !== (r = l().name) && void 0 !== r ? r : "unknown").toLowerCase(),
        f = "chrome" === c.toLowerCase() ? parseInt(null !== (o = l().version) && void 0 !== o ? o : "", 10) : -1;

    function d() {
        return f
    }
    var _ = "electron" === c.toLowerCase() ? parseInt(null !== (i = l().version) && void 0 !== i ? i : "", 10) : -1,
        E = "firefox" === c.toLowerCase() ? parseInt(null !== (a = l().version) && void 0 !== a ? a : "", 10) : -1;

    function p() {
        return E
    }
    var m = "edge" === c.toLowerCase() ? parseInt(null !== (u = l().version) && void 0 !== u ? u : "", 10) : -1;

    function y() {
        return -1 !== f || -1 !== _ || -1 !== E || -1 !== m
    }

    function I() {
        var e, t = window.navigator,
            n = t.userAgent.toLowerCase(),
            r = (null === (e = t.mediaCapabilities) || void 0 === e ? void 0 : e.decodingInfo) != null;
        return -1 !== n.indexOf("safari") && !(-1 !== n.indexOf("chrome")) && -1 !== n.indexOf("version/") && r
    }
}