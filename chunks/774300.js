function(e, t, n) {
    "use strict";

    function r(e) {
        return e
    }

    function o(e, t) {
        return e.hasOwnProperty(t)
    }

    function i(e, t) {
        return Object.setPrototypeOf(e, t.prototype)
    }
    n.r(t), n.d(t, {
        dangerouslyCast: function() {
            return i
        },
        exact: function() {
            return r
        },
        hasOwnProperty: function() {
            return o
        }
    })
}