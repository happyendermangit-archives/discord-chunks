function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        usePrivateChannelIntegrationState: function() {
            return u
        }
    }), n("47120");
    var i = n("470079"),
        r = n("442837"),
        s = n("512751"),
        a = n("278147"),
        o = n("943209"),
        l = n("628566");

    function u(e) {
        let {
            channelId: t
        } = e;
        (0, a.useInMainTabsExperiment)();
        let n = (0, s.useShowApplicationInGDM)(t),
            {
                installedIntegrations: u,
                applicationsShelf: d,
                integrationsFetchState: _,
                applicationsShelfFetchState: c
            } = (0, r.useStateFromStoresObject)([l.default], () => ({
                installedIntegrations: l.default.getIntegrations(t),
                applicationsShelf: l.default.getApplicationsShelf(),
                integrationsFetchState: l.default.getIntegrationsFetchState(t),
                applicationsShelfFetchState: l.default.getApplicationsShelfFetchState()
            }));
        i.useEffect(() => {
            n && ((_ === l.FetchState.NOT_FETCHED || _ === l.FetchState.FETCH_FAILED) && (0, o.fetchPrivateChannelIntegrations)(t), (c === l.FetchState.NOT_FETCHED || c === l.FetchState.FETCH_FAILED) && (0, o.fetchApplicationsShelf)())
        }, [n, t, _, c]);
        let E = new Set(u.map(e => e.application.id));
        return {
            installedIntegrations: u,
            availableApplications: d.filter(e => !E.has(e.id)),
            applicationsShelf: d,
            fetched: _ !== l.FetchState.NOT_FETCHED && _ !== l.FetchState.FETCHING && c !== l.FetchState.NOT_FETCHED && c !== l.FetchState.FETCHING,
            appsInGDMEnabled: n
        }
    }
}