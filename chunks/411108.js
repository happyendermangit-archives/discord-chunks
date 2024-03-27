function(e, t, n) {
    "use strict";
    var r = n("546299").rotr32;

    function i(e, t, n) {
        return e & t ^ ~e & n
    }

    function a(e, t, n) {
        return e & t ^ e & n ^ t & n
    }

    function o(e, t, n) {
        return e ^ t ^ n
    }
    t.ft_1 = function(e, t, n, r) {
        return 0 === e ? function(e, t, n) {
            return e & t ^ ~e & n
        }(t, n, r) : 1 === e || 3 === e ? function(e, t, n) {
            return e ^ t ^ n
        }(t, n, r) : 2 === e ? a(t, n, r) : void 0
    }, t.ch32 = i, t.maj32 = a, t.p32 = o;
    t.s0_256 = function(e) {
        return r(e, 2) ^ r(e, 13) ^ r(e, 22)
    };
    t.s1_256 = function(e) {
        return r(e, 6) ^ r(e, 11) ^ r(e, 25)
    };
    t.g0_256 = function(e) {
        return r(e, 7) ^ r(e, 18) ^ e >>> 3
    };
    t.g1_256 = function(e) {
        return r(e, 17) ^ r(e, 19) ^ e >>> 10
    }
}