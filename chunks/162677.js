function(e, t, n) {
    "use strict";

    function r(e) {
        throw Error("Unhandled value: ".concat(e))
    }

    function o(e) {
        return null != e
    }

    function i(e, t) {
        return e.size === t.size && (0 === e.size && 0 === t.size || Array.from(e).every(function(e) {
            return t.has(e)
        }))
    }
    n.r(t), n.d(t, {
        areSetsEqual: function() {
            return i
        },
        assertNever: function() {
            return r
        },
        isNotNullish: function() {
            return o
        }
    })
}