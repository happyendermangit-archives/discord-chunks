function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        useFrecencySettings: function() {
            return l
        }
    });
    var i = r("884691"),
        n = r("446674"),
        s = r("872173"),
        a = r("374363");

    function l() {
        return i.useEffect(() => {
            s.FrecencyUserSettingsActionCreators.loadIfNecessary()
        }, []), (0, n.useStateFromStores)([a.default], () => a.default.frecencyWithoutFetchingLatest)
    }
}