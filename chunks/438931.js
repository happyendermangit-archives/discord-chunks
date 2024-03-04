function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        updateFlags: function() {
            return a
        }
    });
    var i = n("872717"),
        s = n("913144"),
        r = n("49111");

    function a(e, t, n) {
        return s.default.dispatch({
            type: "LIBRARY_APPLICATION_FLAGS_UPDATE_START",
            applicationId: e,
            branchId: t,
            flags: n
        }), i.default.patch({
            url: r.Endpoints.LIBRARY_APPLICATION_BRANCH(e, t),
            body: {
                flags: n
            },
            oldFormErrors: !0
        }).then(e => {
            s.default.dispatch({
                type: "LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS",
                libraryApplication: e.body
            })
        })
    }
}