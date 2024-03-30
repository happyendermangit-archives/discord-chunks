function(e, t, n) {
    "use strict";

    function r(e, t) {
        return Math.floor(Math.random() * (t - e + 1) + e)
    }

    function o(e, t, n, r) {
        return r.tension * (e - t) - r.friction * n
    }
    n.r(t), n.d(t, {
        applySpringForce: function() {
            return o
        },
        randomNumber: function() {
            return r
        }
    })
}