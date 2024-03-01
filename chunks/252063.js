function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        usePrivateChannelIntegrationState: function() {
            return u
        }
    }), n("222007");
    var i = n("884691"),
        l = n("446674"),
        a = n("201155"),
        o = n("21121"),
        r = n("970755"),
        s = n("140596");

    function u(e) {
        let {
            channelId: t
        } = e;
        (0, o.useInMainTabsExperiment)();
        let n = (0, a.useShowApplicationInGDM)(t),
            {
                installedIntegrations: u,
                applicationsShelf: d,
                integrationsFetchState: c,
                applicationsShelfFetchState: p
            } = (0, l.useStateFromStoresObject)([s.default], () => ({
                installedIntegrations: s.default.getIntegrations(t),
                applicationsShelf: s.default.getApplicationsShelf(),
                integrationsFetchState: s.default.getIntegrationsFetchState(t),
                applicationsShelfFetchState: s.default.getApplicationsShelfFetchState()
            }));
        i.useEffect(() => {
            n && ((c === s.FetchState.NOT_FETCHED || c === s.FetchState.FETCH_FAILED) && (0, r.fetchPrivateChannelIntegrations)(t), (p === s.FetchState.NOT_FETCHED || p === s.FetchState.FETCH_FAILED) && (0, r.fetchApplicationsShelf)())
        }, [n, t, c, p]);
        let f = new Set(u.map(e => e.application.id)),
            m = d.filter(e => !f.has(e.id));
        return {
            installedIntegrations: u,
            availableApplications: m,
            applicationsShelf: d,
            fetched: c !== s.FetchState.NOT_FETCHED && c !== s.FetchState.FETCHING && p !== s.FetchState.NOT_FETCHED && p !== s.FetchState.FETCHING,
            appsInGDMEnabled: n
        }
    }
}