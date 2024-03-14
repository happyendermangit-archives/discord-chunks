function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        useFrecencySettings: function() {
            return a
        }
    });
    var n = r("884691"),
        i = r("446674"),
        s = r("872173"),
        l = r("374363");

    function a() {
        return n.useEffect(() => {
            s.FrecencyUserSettingsActionCreators.loadIfNecessary()
        }, []), (0, i.useStateFromStores)([l.default], () => l.default.frecencyWithoutFetchingLatest)
    }
}