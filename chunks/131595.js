function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("481060"),
        r = n("570140");

    function s(e, t) {
        null != t && (0, i.closeModal)(t), r.default.dispatch({
            type: "INTERACTION_IFRAME_MODAL_CLOSE",
            applicationId: e
        })
    }
}