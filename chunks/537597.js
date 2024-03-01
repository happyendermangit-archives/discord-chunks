function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        showTakeoverModal: function() {
            return i
        }
    });
    var t = E("37983");
    E("884691");
    var o = E("77078"),
        n = E("892974"),
        r = E("761771");

    function i(e) {
        (0, r.isEligibleForInappropriateConversationWarning)({
            location: "takeover-modal"
        }) && (0, o.openModalLazy)(async () => {
            let {
                default: _
            } = await E.el("33320").then(E.bind(E, "33320"));
            return E => (0, t.jsx)(_, {
                ...e,
                modalProps: E
            })
        }, {
            backdropStyle: n.BackdropStyles.BLUR
        })
    }
}