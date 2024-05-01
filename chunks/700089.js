function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useTopCommands: function() {
            return o
        }
    });
    var i = n("470079"),
        r = n("442837"),
        a = n("675478"),
        s = n("654455");

    function o(e) {
        i.useEffect(() => {
            a.FrecencyUserSettingsActionCreators.loadIfNecessary()
        }, []);
        let t = (0, r.useStateFromStores)([s.default], () => s.default.getTopCommandsWithoutLoadingLatest());
        return i.useMemo(() => (0, s.getFilteredTopCommands)(t, e), [t, e])
    }
}