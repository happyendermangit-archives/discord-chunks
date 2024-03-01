function(t, e, s) {
    "use strict";
    var r = s("555671").rotr32;

    function i(t, e, s) {
        return t & e ^ ~t & s
    }

    function n(t, e, s) {
        return t & e ^ t & s ^ e & s
    }

    function c(t, e, s) {
        return t ^ e ^ s
    }
    e.ft_1 = function(t, e, s, r) {
        return 0 === t ? function(t, e, s) {
            return t & e ^ ~t & s
        }(e, s, r) : 1 === t || 3 === t ? function(t, e, s) {
            return t ^ e ^ s
        }(e, s, r) : 2 === t ? n(e, s, r) : void 0
    }, e.ch32 = i, e.maj32 = n, e.p32 = c;
    e.s0_256 = function(t) {
        return r(t, 2) ^ r(t, 13) ^ r(t, 22)
    };
    e.s1_256 = function(t) {
        return r(t, 6) ^ r(t, 11) ^ r(t, 25)
    };
    e.g0_256 = function(t) {
        return r(t, 7) ^ r(t, 18) ^ t >>> 3
    };
    e.g1_256 = function(t) {
        return r(t, 17) ^ r(t, 19) ^ t >>> 10
    }
}