function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return n
        }
    });
    var t = E("77078"),
        o = E("913144");

    function n(e, _) {
        null != _ && (0, t.closeModal)(_), o.default.dispatch({
            type: "INTERACTION_IFRAME_MODAL_CLOSE",
            applicationId: e
        })
    }
}