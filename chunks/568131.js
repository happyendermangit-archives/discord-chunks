function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchLibrary: function() {
            return o
        },
        createTestModeLibraryApplications: function() {
            return u
        },
        setActiveLaunchOptionId: function() {
            return d
        }
    });
    var i = n("872717"),
        s = n("913144"),
        l = n("370999"),
        a = n("271560"),
        r = n("49111");
    async function o() {
        try {
            let e = await (0, a.httpGetWithCountryCodeQuery)({
                url: r.Endpoints.LIBRARY,
                oldFormErrors: !0
            }, !1);
            s.default.dispatch({
                type: "LIBRARY_FETCH_SUCCESS",
                libraryApplications: e.body
            })
        } catch (e) {
            s.default.dispatch({
                type: "LIBRARY_FETCH_FAIL",
                error: e
            })
        }
    }
    async function u(e) {
        let t = e.primarySkuId;
        if (null == t) return;
        let n = await i.HTTP.get({
                url: r.Endpoints.APPLICATION_BRANCH_LIST(e.id),
                oldFormErrors: !0
            }).then(e => e.body),
            a = n.map(n => l.default.createForTestMode({
                id: e.id,
                skuId: t,
                branch: n
            }));
        s.default.dispatch({
            type: "LIBRARY_APPLICATIONS_TEST_MODE_ENABLED",
            libraryApplications: a
        })
    }

    function d(e, t, n) {
        s.default.dispatch({
            type: "LIBRARY_APPLICATION_ACTIVE_LAUNCH_OPTION_UPDATE",
            applicationId: e,
            branchId: t,
            launchOptionId: n
        })
    }
}