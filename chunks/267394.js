function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        updateAuthInvite: function() {
            return a
        }
    });
    var n = s("570140");

    function a(e) {
        n.default.dispatch({
            type: "AUTH_INVITE_UPDATE",
            invite: e
        })
    }
}