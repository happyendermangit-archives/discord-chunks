function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useSortApplicationsViaFrecency: function() {
            return r
        }
    }), n("222007");
    var l = n("884691"),
        i = n("446674"),
        a = n("872173"),
        s = n("605393");

    function r(e) {
        l.useEffect(() => {
            a.FrecencyUserSettingsActionCreators.loadIfNecessary()
        }, []);
        let t = (0, i.useStateFromStores)([s.default], () => s.default.getApplicationFrecencyWithoutLoadingLatest()),
            n = l.useMemo(() => {
                let n = [...e];
                return n.sort((e, n) => {
                    var l, i;
                    let a = (null !== (l = t.getScore(n.id)) && void 0 !== l ? l : 0) - (null !== (i = t.getScore(e.id)) && void 0 !== i ? i : 0);
                    return 0 !== a ? a : e.name.localeCompare(n.name)
                }), n
            }, [e, t]);
        return n
    }
}