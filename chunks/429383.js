function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        usePrivateChannelIntegrationState: function() {
            return l
        }
    });
    var r = n("470079"),
        o = n("898511"),
        i = n("734375"),
        a = n("895517"),
        u = n("52913"),
        s = n("458827");

    function l(e) {
        var t = e.channelId;
        (0, a.useInMainTabsExperiment)();
        var n = (0, i.useShowApplicationInGDM)(t),
            l = (0, o.useStateFromStoresObject)([s.default], function() {
                return {
                    installedIntegrations: s.default.getIntegrations(t),
                    applicationsShelf: s.default.getApplicationsShelf(),
                    integrationsFetchState: s.default.getIntegrationsFetchState(t),
                    applicationsShelfFetchState: s.default.getApplicationsShelfFetchState()
                }
            }),
            c = l.installedIntegrations,
            f = l.applicationsShelf,
            d = l.integrationsFetchState,
            _ = l.applicationsShelfFetchState;
        r.useEffect(function() {
            n && ((d === s.FetchState.NOT_FETCHED || d === s.FetchState.FETCH_FAILED) && (0, u.fetchPrivateChannelIntegrations)(t), (_ === s.FetchState.NOT_FETCHED || _ === s.FetchState.FETCH_FAILED) && (0, u.fetchApplicationsShelf)())
        }, [n, t, d, _]);
        var E = new Set(c.map(function(e) {
            return e.application.id
        }));
        return {
            installedIntegrations: c,
            availableApplications: f.filter(function(e) {
                return !E.has(e.id)
            }),
            applicationsShelf: f,
            fetched: d !== s.FetchState.NOT_FETCHED && d !== s.FetchState.FETCHING && _ !== s.FetchState.NOT_FETCHED && _ !== s.FetchState.FETCHING,
            appsInGDMEnabled: n
        }
    }
}