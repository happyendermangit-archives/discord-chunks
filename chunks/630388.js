function(e, t, n) {
    "use strict";

    function i(e, t) {
        return (e & t) === t
    }

    function r(e, t) {
        return e | t
    }

    function a(e, t) {
        return e & ~t
    }

    function s(e) {
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
        addFlag: function() {
            return r
        },
        hasFlag: function() {
            return i
        },
        removeFlag: function() {
            return a
        },
        removeFlags: function() {
            return s
        },
        setFlag: function() {
            return o
        },
        toggleFlag: function() {
            return l
        }
    }), n("724458")
}