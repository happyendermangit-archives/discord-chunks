function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        setNewUser: function() {
            return a
        },
        setNewUserFlowCompleted: function() {
            return u
        }
    });
    var l = n("913144");

    function a(e) {
        l.default.wait(() => l.default.dispatch({
            type: "NUF_NEW_USER",
            newUserType: e
        }))
    }

    function u() {
        l.default.wait(() => l.default.dispatch({
            type: "NUF_COMPLETE"
        }))
    }
}