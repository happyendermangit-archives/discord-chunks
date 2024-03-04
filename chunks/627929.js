function(e, t, n) {
    "use strict";

    function i(e) {
        return e
    }

    function s(e, t) {
        return e.hasOwnProperty(t)
    }

    function r(e, t) {
        return Object.setPrototypeOf(e, t.prototype)
    }
    n.r(t), n.d(t, {
        exact: function() {
            return i
        },
        hasOwnProperty: function() {
            return s
        },
        dangerouslyCast: function() {
            return r
        }
    })
}