function(e, t, n) {
    "use strict";
    let i, r;
    n.r(t), n.d(t, {
        OVERLAY_VERSION: function() {
            return a
        },
        OVERLAY_DEFAULT_RESOLUTION: function() {
            return o
        },
        OVERLAY_MIN_RESOLUTION: function() {
            return l
        },
        OVERLAY_LAYOUT_ID: function() {
            return u
        },
        DEV_PID: function() {
            return c
        },
        getPID: function() {
            return f
        },
        setPID: function() {
            return E
        },
        getRPCAuthToken: function() {
            return p
        },
        validResolution: function() {
            return h
        },
        setOutOfProcessSupport: function() {
            return _
        },
        supportsOutOfProcess: function() {
            return S
        },
        isOutOfProcess: function() {
            return m
        }
    }), n("313619"), n("654714"), n("287168"), n("956660"), n("222007"), n("121338");
    var s = n("773336");
    n("49111");
    let a = 2,
        o = {
            width: 3840,
            height: 2160
        },
        l = {
            width: 768,
            height: 432
        },
        u = "overlay_default",
        c = -2,
        d = !1;

    function f() {
        var e;
        if (void 0 !== i) return i;
        let t = new URLSearchParams(window.location.search),
            n = null !== (e = t.get("pid")) && void 0 !== e ? e : "",
            r = parseInt(n, 10);
        return isNaN(r) && (r = -1), i = r
    }

    function E(e) {
        m() && (i = e)
    }

    function p() {
        let e = new URLSearchParams(window.location.search);
        return e.get("rpc_auth_token")
    }

    function h(e) {
        return !s.isPlatformEmbedded || e.width >= l.width && e.height >= l.height
    }

    function _(e) {
        d = e
    }

    function S() {
        return d
    }

    function m() {
        var e;
        if (void 0 !== r) return r;
        let t = new URLSearchParams(window.location.search);
        return r = (null !== (e = t.get("oop")) && void 0 !== e ? e : "") === "true"
    }
}