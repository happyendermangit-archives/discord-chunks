function(e, t, n) {
    "use strict";
    let i, r;
    n.r(t), n.d(t, {
        DEV_PID: function() {
            return d
        },
        OVERLAY_DEFAULT_RESOLUTION: function() {
            return o
        },
        OVERLAY_LAYOUT_ID: function() {
            return u
        },
        OVERLAY_MIN_RESOLUTION: function() {
            return l
        },
        OVERLAY_VERSION: function() {
            return a
        },
        getPID: function() {
            return c
        },
        getRPCAuthToken: function() {
            return I
        },
        isOutOfProcess: function() {
            return h
        },
        setOutOfProcessSupport: function() {
            return f
        },
        setPID: function() {
            return E
        },
        supportsOutOfProcess: function() {
            return S
        },
        validResolution: function() {
            return T
        }
    }), n("610138"), n("216116"), n("78328"), n("815648"), n("47120"), n("490029");
    var s = n("358085");
    n("981631");
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
        _ = !1;

    function c() {
        var e;
        if (void 0 !== i) return i;
        let t = parseInt(null !== (e = new URLSearchParams(window.location.search).get("pid")) && void 0 !== e ? e : "", 10);
        return isNaN(t) && (t = -1), i = t
    }

    function E(e) {
        h() && (i = e)
    }

    function I() {
        return new URLSearchParams(window.location.search).get("rpc_auth_token")
    }

    function T(e) {
        return !s.isPlatformEmbedded || e.width >= l.width && e.height >= l.height
    }

    function f(e) {
        _ = e
    }

    function S() {
        return _
    }

    function h() {
        var e;
        return void 0 !== r ? r : r = (null !== (e = new URLSearchParams(window.location.search).get("oop")) && void 0 !== e ? e : "") === "true"
    }
}