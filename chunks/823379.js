function(e, t, n) {
    "use strict";

    function i(e) {
        throw Error("Unhandled value: ".concat(e))
    }

    function r(e) {
        return null != e
    }

    function a(e, t) {
        return e.size === t.size && (0 === e.size && 0 === t.size || Array.from(e).every(e => t.has(e)))
    }
    n.r(t), n.d(t, {
        areSetsEqual: function() {
            return a
        },
        assertNever: function() {
            return i
        },
        isNotNullish: function() {
            return r
        }
    }), n("411104")
}