function(e, t, n) {
    "use strict";

    function r(e) {
        var t = null;
        return function() {
            return null == t && (t = e()), t
        }
    }

    function i(e, t) {
        return e.filter(function(e) {
            return e !== t
        })
    }

    function a(e, t) {
        var n = new Set,
            r = function(e) {
                return n.add(e)
            };
        e.forEach(r), t.forEach(r);
        var i = [];
        return n.forEach(function(e) {
            return i.push(e)
        }), i
    }
    n.r(t), n.d(t, {
        memoize: function() {
            return r
        },
        union: function() {
            return a
        },
        without: function() {
            return i
        }
    })
}