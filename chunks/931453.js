function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var r = n("784184"),
        o = n("629815");

    function i(e, t) {
        null != t && (0, r.closeModal)(t), o.default.dispatch({
            type: "INTERACTION_IFRAME_MODAL_CLOSE",
            applicationId: e
        })
    }
}