function(e, t, n) {
    "use strict";

    function i(e, t) {
        return Math.floor(Math.random() * (t - e + 1) + e)
    }

    function r(e, t, n, i) {
        return i.tension * (e - t) - i.friction * n
    }
    n.r(t), n.d(t, {
        applySpringForce: function() {
            return r
        },
        randomNumber: function() {
            return i
        }
    })
}