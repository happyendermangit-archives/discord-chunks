function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useTopCommands: function() {
            return o
        }
    });
    var i = n("470079"),
        r = n("442837"),
        s = n("675478"),
        a = n("654455");

    function o(e) {
        i.useEffect(() => {
            s.FrecencyUserSettingsActionCreators.loadIfNecessary()
        }, []);
        let t = (0, r.useStateFromStores)([a.default], () => a.default.getTopCommandsWithoutLoadingLatest());
        return i.useMemo(() => (0, a.getFilteredTopCommands)(t, e), [t, e])
    }
}