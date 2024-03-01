function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getChromeVersion: function() {
            return f
        },
        getFirefoxVersion: function() {
            return h
        },
        canUseWebp: function() {
            return S
        },
        supportsHEVCAlpha: function() {
            return m
        }
    });
    var i, r, s, a, o, l = n("597755"),
        u = n.n(l);
    let c = (null !== (i = u.name) && void 0 !== i ? i : "unknown").toLowerCase(),
        d = "chrome" === c.toLowerCase() ? parseInt(null !== (r = u.version) && void 0 !== r ? r : "", 10) : -1;

    function f() {
        return d
    }
    let E = "electron" === c.toLowerCase() ? parseInt(null !== (s = u.version) && void 0 !== s ? s : "", 10) : -1,
        p = "firefox" === c.toLowerCase() ? parseInt(null !== (a = u.version) && void 0 !== a ? a : "", 10) : -1;

    function h() {
        return p
    }
    let _ = "edge" === c.toLowerCase() ? parseInt(null !== (o = u.version) && void 0 !== o ? o : "", 10) : -1;

    function S() {
        return -1 !== d || -1 !== E || -1 !== p || -1 !== _
    }

    function m() {
        var e;
        let t = window.navigator,
            n = t.userAgent.toLowerCase(),
            i = (null === (e = t.mediaCapabilities) || void 0 === e ? void 0 : e.decodingInfo) != null,
            r = -1 !== n.indexOf("safari") && !(-1 !== n.indexOf("chrome")) && -1 !== n.indexOf("version/");
        return r && i
    }
}