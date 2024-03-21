function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchLibrary: function() {
            return l
        },
        createTestModeLibraryApplications: function() {
            return o
        },
        setActiveLaunchOptionId: function() {
            return d
        }
    });
    var s = n("872717"),
        i = n("913144"),
        r = n("370999"),
        a = n("271560"),
        u = n("49111");
    async function l() {
        try {
            let e = await (0, a.httpGetWithCountryCodeQuery)({
                url: u.Endpoints.LIBRARY,
                oldFormErrors: !0
            }, !1);
            i.default.dispatch({
                type: "LIBRARY_FETCH_SUCCESS",
                libraryApplications: e.body
            })
        } catch (e) {
            i.default.dispatch({
                type: "LIBRARY_FETCH_FAIL",
                error: e
            })
        }
    }
    async function o(e) {
        let t = e.primarySkuId;
        if (null == t) return;
        let n = await s.HTTP.get({
                url: u.Endpoints.APPLICATION_BRANCH_LIST(e.id),
                oldFormErrors: !0
            }).then(e => e.body),
            a = n.map(n => r.default.createForTestMode({
                id: e.id,
                skuId: t,
                branch: n
            }));
        i.default.dispatch({
            type: "LIBRARY_APPLICATIONS_TEST_MODE_ENABLED",
            libraryApplications: a
        })
    }

    function d(e, t, n) {
        i.default.dispatch({
            type: "LIBRARY_APPLICATION_ACTIVE_LAUNCH_OPTION_UPDATE",
            applicationId: e,
            branchId: t,
            launchOptionId: n
        })
    }
}