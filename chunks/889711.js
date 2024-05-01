function(e, t, n) {
    "use strict";

    function i(e) {
        return new ResizeObserver(e)
    }

    function r(e, t) {
        e.observe(t)
    }

    function a(e, t) {
        e.unobserve(t)
    }
    n.r(t), n.d(t, {
        getResizeObserver: function() {
            return i
        },
        unwatch: function() {
            return a
        },
        watch: function() {
            return r
        }
    })
}