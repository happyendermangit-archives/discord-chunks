function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        setClientOffset: function() {
            return i
        }
    });
    var r = n("897345");

    function i(e, t) {
        return {
            type: r.INIT_COORDS,
            payload: {
                sourceClientOffset: t || null,
                clientOffset: e || null
            }
        }
    }
}