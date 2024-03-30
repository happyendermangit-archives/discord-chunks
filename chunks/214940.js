function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        trustDomain: function() {
            return o
        },
        trustProtocol: function() {
            return i
        }
    });
    var r = n("629815");

    function o(e) {
        r.default.dispatch({
            type: "MASKED_LINK_ADD_TRUSTED_DOMAIN",
            url: e
        })
    }

    function i(e) {
        r.default.dispatch({
            type: "MASKED_LINK_ADD_TRUSTED_PROTOCOL",
            url: e
        })
    }
}