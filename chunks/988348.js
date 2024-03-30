function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getFastConnectZstd: function() {
            return s
        },
        setFastConnectZstd: function() {
            return a
        },
        supportsZstd: function() {
            return r
        }
    });
    let i = new(n("259443")).Logger("FAST CONNECT");

    function r() {
        return !1
    }

    function s() {
        return !1
    }

    function a(e) {
        i.error("Attempting to set fast connect zstd when unsupported")
    }
}