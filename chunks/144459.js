function(e, t, n) {
    "use strict";

    function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function i(e, t, n) {
        return t.split(".").reduce(function(e, t) {
            return e && e[t] ? e[t] : n || null
        }, e)
    }

    function a(e, t) {
        return e.filter(function(e) {
            return e !== t
        })
    }

    function o(e) {
        return "object" === r(e)
    }

    function s(e, t) {
        var n = new Map,
            r = function(e) {
                n.set(e, n.has(e) ? n.get(e) + 1 : 1)
            };
        e.forEach(r), t.forEach(r);
        var i = [];
        return n.forEach(function(e, t) {
            1 === e && i.push(t)
        }), i
    }

    function u(e, t) {
        return e.filter(function(e) {
            return t.indexOf(e) > -1
        })
    }
    n.r(t), n.d(t, {
        get: function() {
            return i
        },
        intersection: function() {
            return u
        },
        isObject: function() {
            return o
        },
        without: function() {
            return a
        },
        xor: function() {
            return s
        }
    })
}