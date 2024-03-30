function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        canUseWebp: function() {
            return S
        },
        getChromeVersion: function() {
            return c
        },
        getFirefoxVersion: function() {
            return T
        },
        supportsHEVCAlpha: function() {
            return h
        }
    });
    var i, r, s, a, o, l = n("525654"),
        u = n.n(l);
    let d = (null !== (i = u().name) && void 0 !== i ? i : "unknown").toLowerCase(),
        _ = "chrome" === d.toLowerCase() ? parseInt(null !== (r = u().version) && void 0 !== r ? r : "", 10) : -1;

    function c() {
        return _
    }
    let E = "electron" === d.toLowerCase() ? parseInt(null !== (s = u().version) && void 0 !== s ? s : "", 10) : -1,
        I = "firefox" === d.toLowerCase() ? parseInt(null !== (a = u().version) && void 0 !== a ? a : "", 10) : -1;

    function T() {
        return I
    }
    let f = "edge" === d.toLowerCase() ? parseInt(null !== (o = u().version) && void 0 !== o ? o : "", 10) : -1;

    function S() {
        return -1 !== _ || -1 !== E || -1 !== I || -1 !== f
    }

    function h() {
        var e;
        let t = window.navigator,
            n = t.userAgent.toLowerCase(),
            i = (null === (e = t.mediaCapabilities) || void 0 === e ? void 0 : e.decodingInfo) != null;
        return -1 !== n.indexOf("safari") && !(-1 !== n.indexOf("chrome")) && -1 !== n.indexOf("version/") && i
    }
}