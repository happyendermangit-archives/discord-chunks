function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        addBit: function() {
            return r
        },
        hasBit: function() {
            return i
        },
        isSerializedUint8Array: function() {
            return o
        },
        isUint8Array: function() {
            return s
        },
        removeBit: function() {
            return a
        }
    }), n("518263"), n("970173"), n("520712"), n("268111"), n("941497"), n("32026"), n("480839"), n("744285"), n("492257"), n("873817");

    function i(e, t) {
        if (0 === e.length) return !1;
        let n = e[Math.floor(t / 8)];
        return (n & 1 << t % 8) != 0
    }

    function r(e, t) {
        let n = Math.floor(t / 8);
        if (e.length <= n) {
            let t = new Uint8Array(n + 1);
            t.set(e, 0), e = t
        }
        return e[n] |= 1 << t % 8, e
    }

    function a(e, t) {
        if (i(e, t)) {
            let n = Math.floor(t / 8),
                i = t % 8;
            e[n] &= ~(1 << i)
        }
        return e
    }

    function s(e) {
        return e instanceof Uint8Array
    }

    function o(e) {
        return null != e && "object" == typeof e && "uint8array" === e.__tag__
    }
}