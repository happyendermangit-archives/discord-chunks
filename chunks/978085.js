function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createTestModeLibraryApplications: function() {
            return u
        },
        fetchLibrary: function() {
            return l
        },
        setActiveLaunchOptionId: function() {
            return d
        }
    });
    var i = n("544891"),
        r = n("570140"),
        a = n("85521"),
        s = n("73346"),
        o = n("981631");
    async function l() {
        try {
            let e = await (0, s.httpGetWithCountryCodeQuery)({
                url: o.Endpoints.LIBRARY,
                oldFormErrors: !0
            }, !1);
            r.default.dispatch({
                type: "LIBRARY_FETCH_SUCCESS",
                libraryApplications: e.body
            })
        } catch (e) {
            r.default.dispatch({
                type: "LIBRARY_FETCH_FAIL",
                error: e
            })
        }
    }
    async function u(e) {
        let t = e.primarySkuId;
        if (null == t) return;
        let n = (await i.HTTP.get({
            url: o.Endpoints.APPLICATION_BRANCH_LIST(e.id),
            oldFormErrors: !0
        }).then(e => e.body)).map(n => a.default.createForTestMode({
            id: e.id,
            skuId: t,
            branch: n
        }));
        r.default.dispatch({
            type: "LIBRARY_APPLICATIONS_TEST_MODE_ENABLED",
            libraryApplications: n
        })
    }

    function d(e, t, n) {
        r.default.dispatch({
            type: "LIBRARY_APPLICATION_ACTIVE_LAUNCH_OPTION_UPDATE",
            applicationId: e,
            branchId: t,
            launchOptionId: n
        })
    }
}