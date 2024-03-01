function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        trustDomain: function() {
            return i
        },
        trustProtocol: function() {
            return r
        }
    });
    var s = n("913144");

    function i(e) {
        s.default.dispatch({
            type: "MASKED_LINK_ADD_TRUSTED_DOMAIN",
            url: e
        })
    }

    function r(e) {
        s.default.dispatch({
            type: "MASKED_LINK_ADD_TRUSTED_PROTOCOL",
            url: e
        })
    }
}