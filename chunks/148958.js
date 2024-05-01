function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useSortApplicationsViaFrecency: function() {
            return o
        }
    }), n("47120");
    var i = n("470079"),
        r = n("442837"),
        s = n("675478"),
        a = n("822245");

    function o(e) {
        i.useEffect(() => {
            s.FrecencyUserSettingsActionCreators.loadIfNecessary()
        }, []);
        let t = (0, r.useStateFromStores)([a.default], () => a.default.getApplicationFrecencyWithoutLoadingLatest());
        return i.useMemo(() => {
            let n = [...e];
            return n.sort((e, n) => {
                var i, r;
                let s = (null !== (i = t.getScore(n.id)) && void 0 !== i ? i : 0) - (null !== (r = t.getScore(e.id)) && void 0 !== r ? r : 0);
                return 0 !== s ? s : e.name.localeCompare(n.name)
            }), n
        }, [e, t])
    }
}