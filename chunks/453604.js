function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        addBit: function() {
            return o
        },
        hasBit: function() {
            return r
        },
        isSerializedUint8Array: function() {
            return u
        },
        isUint8Array: function() {
            return a
        },
        removeBit: function() {
            return i
        }
    });

    function r(e, t) {
        if (0 === e.length) return !1;
        var n = e[Math.floor(t / 8)];
        return (n & 1 << t % 8) != 0
    }

    function o(e, t) {
        var n = Math.floor(t / 8);
        if (e.length <= n) {
            var r = new Uint8Array(n + 1);
            r.set(e, 0), e = r
        }
        return e[n] |= 1 << t % 8, e
    }

    function i(e, t) {
        if (r(e, t)) {
            var n = Math.floor(t / 8),
                o = t % 8;
            e[n] &= ~(1 << o)
        }
        return e
    }

    function a(e) {
        var t, n;
        return t = e, null != (n = Uint8Array) && "undefined" != typeof Symbol && n[Symbol.hasInstance] ? !!n[Symbol.hasInstance](t) : t instanceof n
    }

    function u(e) {
        return null != e && "object" == typeof e && "uint8array" === e.__tag__
    }
}