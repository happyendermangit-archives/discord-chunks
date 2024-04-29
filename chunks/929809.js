function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        setNewUser: function() {
            return a
        },
        setNewUserFlowCompleted: function() {
            return i
        }
    });
    var s = n("570140");

    function a(e) {
        s.default.wait(() => s.default.dispatch({
            type: "NUF_NEW_USER",
            newUserType: e
        }))
    }

    function i() {
        s.default.wait(() => s.default.dispatch({
            type: "NUF_COMPLETE"
        }))
    }
}