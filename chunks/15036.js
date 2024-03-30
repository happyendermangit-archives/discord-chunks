function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getFastConnectZstd: function() {
            return i
        },
        setFastConnectZstd: function() {
            return a
        },
        supportsZstd: function() {
            return o
        }
    });
    var r = new(n("188129")).Logger("FAST CONNECT");

    function o() {
        return !1
    }

    function i() {
        return !1
    }

    function a(e) {
        r.error("Attempting to set fast connect zstd when unsupported")
    }
}