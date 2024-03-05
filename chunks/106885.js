function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        updateAuthInvite: function() {
            return a
        }
    });
    var s = n("913144");

    function a(e) {
        s.default.dispatch({
            type: "AUTH_INVITE_UPDATE",
            invite: e
        })
    }
}