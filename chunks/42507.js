function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        useFrecencySettings: function() {
            return l
        }
    });
    var r = i("884691"),
        n = i("446674"),
        s = i("872173"),
        a = i("374363");

    function l() {
        return r.useEffect(() => {
            s.FrecencyUserSettingsActionCreators.loadIfNecessary()
        }, []), (0, n.useStateFromStores)([a.default], () => a.default.frecencyWithoutFetchingLatest)
    }
}