function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        updateFlags: function() {
            return a
        }
    });
    var r = n("967888"),
        o = n("629815"),
        i = n("281767");

    function a(e, t, n) {
        return o.default.dispatch({
            type: "LIBRARY_APPLICATION_FLAGS_UPDATE_START",
            applicationId: e,
            branchId: t,
            flags: n
        }), r.HTTP.patch({
            url: i.Endpoints.LIBRARY_APPLICATION_BRANCH(e, t),
            body: {
                flags: n
            },
            oldFormErrors: !0
        }).then(function(e) {
            o.default.dispatch({
                type: "LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS",
                libraryApplication: e.body
            })
        })
    }
}