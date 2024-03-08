function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useSortApplicationsViaFrecency: function() {
            return r
        }
    }), n("222007");
    var i = n("884691"),
        l = n("446674"),
        a = n("872173"),
        s = n("605393");

    function r(e) {
        i.useEffect(() => {
            a.FrecencyUserSettingsActionCreators.loadIfNecessary()
        }, []);
        let t = (0, l.useStateFromStores)([s.default], () => s.default.getApplicationFrecencyWithoutLoadingLatest()),
            n = i.useMemo(() => {
                let n = [...e];
                return n.sort((e, n) => {
                    var i, l;
                    let a = (null !== (i = t.getScore(n.id)) && void 0 !== i ? i : 0) - (null !== (l = t.getScore(e.id)) && void 0 !== l ? l : 0);
                    return 0 !== a ? a : e.name.localeCompare(n.name)
                }), n
            }, [e, t]);
        return n
    }
}