function(e, t, n) {
    "use strict";
    let i, s;
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
            return d
        },
        getPID: function() {
            return f
        },
        setPID: function() {
            return _
        },
        getRPCAuthToken: function() {
            return h
        },
        validResolution: function() {
            return E
        },
        setOutOfProcessSupport: function() {
            return g
        },
        supportsOutOfProcess: function() {
            return m
        },
        isOutOfProcess: function() {
            return p
        }
    }), n("313619"), n("654714"), n("287168"), n("956660"), n("222007"), n("121338");
    var r = n("773336");
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
        d = -2,
        c = !1;

    function f() {
        var e;
        if (void 0 !== i) return i;
        let t = new URLSearchParams(window.location.search),
            n = null !== (e = t.get("pid")) && void 0 !== e ? e : "",
            s = parseInt(n, 10);
        return isNaN(s) && (s = -1), i = s
    }

    function _(e) {
        p() && (i = e)
    }

    function h() {
        let e = new URLSearchParams(window.location.search);
        return e.get("rpc_auth_token")
    }

    function E(e) {
        return !r.isPlatformEmbedded || e.width >= l.width && e.height >= l.height
    }

    function g(e) {
        c = e
    }

    function m() {
        return c
    }

    function p() {
        var e;
        if (void 0 !== s) return s;
        let t = new URLSearchParams(window.location.search);
        return s = (null !== (e = t.get("oop")) && void 0 !== e ? e : "") === "true"
    }
}