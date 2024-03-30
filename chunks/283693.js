function(e, t, n) {
    "use strict";

    function i(e) {
        return e
    }

    function r(e, t) {
        return e.hasOwnProperty(t)
    }

    function s(e, t) {
        return Object.setPrototypeOf(e, t.prototype)
    }
    n.r(t), n.d(t, {
        dangerouslyCast: function() {
            return s
        },
        exact: function() {
            return i
        },
        hasOwnProperty: function() {
            return r
        }
    })
}