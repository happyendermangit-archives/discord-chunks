function(e, t, n) {
    "use strict";

    function r(e, t) {
        if (!e) throw Error(t)
    }
    n.r(t), n.d(t, {
        assert: function() {
            return r
        },
        assertFloat32: function() {
            return o
        },
        assertInt32: function() {
            return i
        },
        assertUInt32: function() {
            return a
        }
    });

    function i(e) {
        if ("number" != typeof e) throw Error("invalid int 32: " + typeof e);
        if (!Number.isInteger(e) || e > 2147483647 || e < -2147483648) throw Error("invalid int 32: " + e)
    }

    function a(e) {
        if ("number" != typeof e) throw Error("invalid uint 32: " + typeof e);
        if (!Number.isInteger(e) || e > 4294967295 || e < 0) throw Error("invalid uint 32: " + e)
    }

    function o(e) {
        if ("number" != typeof e) throw Error("invalid float 32: " + typeof e);
        if (Number.isFinite(e) && (e > 34028234663852886e22 || e < -34028234663852886e22)) throw Error("invalid float 32: " + e)
    }
}