function(e, t, n) {
    "use strict";

    function i(e, t) {
        return Math.floor(Math.random() * (t - e + 1) + e)
    }

    function s(e, t, n, i) {
        return i.tension * (e - t) - i.friction * n
    }
    n.r(t), n.d(t, {
        randomNumber: function() {
            return i
        },
        applySpringForce: function() {
            return s
        }
    })
}