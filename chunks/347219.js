function(e, t, n) {
    "use strict";

    function s(e, t) {
        return Math.floor(Math.random() * (t - e + 1) + e)
    }

    function i(e, t, n, s) {
        return s.tension * (e - t) - s.friction * n
    }
    n.r(t), n.d(t, {
        randomNumber: function() {
            return s
        },
        applySpringForce: function() {
            return i
        }
    })
}