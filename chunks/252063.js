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
        s = n("21121"),
        r = n("970755"),
        o = n("140596");

    function u(e) {
        let {
            channelId: t
        } = e;
        (0, s.useInMainTabsExperiment)();
        let n = (0, a.useShowApplicationInGDM)(t),
            {
                installedIntegrations: u,
                applicationsShelf: d,
                integrationsFetchState: c,
                applicationsShelfFetchState: f
            } = (0, l.useStateFromStoresObject)([o.default], () => ({
                installedIntegrations: o.default.getIntegrations(t),
                applicationsShelf: o.default.getApplicationsShelf(),
                integrationsFetchState: o.default.getIntegrationsFetchState(t),
                applicationsShelfFetchState: o.default.getApplicationsShelfFetchState()
            }));
        i.useEffect(() => {
            n && ((c === o.FetchState.NOT_FETCHED || c === o.FetchState.FETCH_FAILED) && (0, r.fetchPrivateChannelIntegrations)(t), (f === o.FetchState.NOT_FETCHED || f === o.FetchState.FETCH_FAILED) && (0, r.fetchApplicationsShelf)())
        }, [n, t, c, f]);
        let m = new Set(u.map(e => e.application.id)),
            p = d.filter(e => !m.has(e.id));
        return {
            installedIntegrations: u,
            availableApplications: p,
            applicationsShelf: d,
            fetched: c !== o.FetchState.NOT_FETCHED && c !== o.FetchState.FETCHING && f !== o.FetchState.NOT_FETCHED && f !== o.FetchState.FETCHING,
            appsInGDMEnabled: n
        }
    }
}