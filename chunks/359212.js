function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DEV_PID: function() {
            return c
        },
        OVERLAY_DEFAULT_RESOLUTION: function() {
            return u
        },
        OVERLAY_LAYOUT_ID: function() {
            return l
        },
        OVERLAY_MIN_RESOLUTION: function() {
            return s
        },
        OVERLAY_VERSION: function() {
            return a
        },
        getPID: function() {
            return d
        },
        getRPCAuthToken: function() {
            return E
        },
        isOutOfProcess: function() {
            return I
        },
        setOutOfProcessSupport: function() {
            return m
        },
        setPID: function() {
            return _
        },
        supportsOutOfProcess: function() {
            return y
        },
        validResolution: function() {
            return p
        }
    }), n("559264");
    var r, o, i = n("374550");
    n("281767");
    var a = 2,
        u = {
            width: 3840,
            height: 2160
        },
        s = {
            width: 768,
            height: 432
        },
        l = "overlay_default",
        c = -2,
        f = !1;

    function d() {
        if (void 0 !== r) return r;
        var e, t = parseInt(null !== (e = new URLSearchParams(window.location.search).get("pid")) && void 0 !== e ? e : "", 10);
        return isNaN(t) && (t = -1), r = t
    }

    function _(e) {
        I() && (r = e)
    }

    function E() {
        return new URLSearchParams(window.location.search).get("rpc_auth_token")
    }

    function p(e) {
        return !i.isPlatformEmbedded || e.width >= s.width && e.height >= s.height
    }

    function m(e) {
        f = e
    }

    function y() {
        return f
    }

    function I() {
        var e;
        if (void 0 !== o) return o;
        return o = (null !== (e = new URLSearchParams(window.location.search).get("oop")) && void 0 !== e ? e : "") === "true"
    }
}