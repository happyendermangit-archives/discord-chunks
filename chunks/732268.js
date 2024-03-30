function(e, t, n) {
    "use strict";

    function r(e) {
        return e.split(".")[0]
    }

    function o(e) {
        return null == e ? null : r(e)
    }
    n.r(t), n.d(t, {
        extractId: function() {
            return r
        },
        maybeExtractId: function() {
            return o
        }
    })
}