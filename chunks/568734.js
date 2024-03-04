function(e, t, n) {
    "use strict";

    function i(e, t) {
        return (e & t) === t
    }

    function s(e, t) {
        return e | t
    }

    function r(e, t) {
        return e & ~t
    }

    function a(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
        return n.reduce((e, t) => e & ~t, e)
    }

    function o(e, t, n) {
        if (n) return e | t;
        return e & ~t
    }

    function l(e, t) {
        if (i(e, t)) return e & ~t;
        return e | t
    }
    n.r(t), n.d(t, {
        hasFlag: function() {
            return i
        },
        addFlag: function() {
            return s
        },
        removeFlag: function() {
            return r
        },
        removeFlags: function() {
            return a
        },
        setFlag: function() {
            return o
        },
        toggleFlag: function() {
            return l
        }
    }), n("808653")
}