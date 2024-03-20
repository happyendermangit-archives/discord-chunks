function(N, I, A) {
    "use strict";

    function O(N) {
        throw Error("Unhandled value: ".concat(N))
    }

    function T(N) {
        return null != N
    }

    function _(N, I) {
        return N.size === I.size && (0 === N.size && 0 === I.size || Array.from(N).every(N => I.has(N)))
    }
    A.r(I), A.d(I, {
        assertNever: function() {
            return O
        },
        isNotNullish: function() {
            return T
        },
        areSetsEqual: function() {
            return _
        }
    }), A("70102")
}