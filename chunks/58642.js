function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        updateFlags: function() {
            return s
        }
    });
    var i = n("544891"),
        r = n("570140"),
        a = n("981631");

    function s(e, t, n) {
        return r.default.dispatch({
            type: "LIBRARY_APPLICATION_FLAGS_UPDATE_START",
            applicationId: e,
            branchId: t,
            flags: n
        }), i.HTTP.patch({
            url: a.Endpoints.LIBRARY_APPLICATION_BRANCH(e, t),
            body: {
                flags: n
            },
            oldFormErrors: !0
        }).then(e => {
            r.default.dispatch({
                type: "LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS",
                libraryApplication: e.body
            })
        })
    }
}