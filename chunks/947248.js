function(e, t, n) {
    "use strict";

    function r(e, t) {
        return (e & t) === t
    }

    function o(e, t) {
        return e | t
    }

    function i(e, t) {
        return e & ~t
    }

    function a(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return n.reduce(function(e, t) {
            return e & ~t
        }, e)
    }

    function u(e, t, n) {
        if (n) return e | t;
        return e & ~t
    }

    function s(e, t) {
        if (r(e, t)) return e & ~t;
        return e | t
    }
    n.r(t), n.d(t, {
        addFlag: function() {
            return o
        },
        hasFlag: function() {
            return r
        },
        removeFlag: function() {
            return i
        },
        removeFlags: function() {
            return a
        },
        setFlag: function() {
            return u
        },
        toggleFlag: function() {
            return s
        }
    })
}