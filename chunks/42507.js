function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        useFrecencySettings: function() {
            return a
        }
    });
    var r = i("884691"),
        n = i("446674"),
        s = i("872173"),
        l = i("374363");

    function a() {
        return r.useEffect(() => {
            s.FrecencyUserSettingsActionCreators.loadIfNecessary()
        }, []), (0, n.useStateFromStores)([l.default], () => l.default.frecencyWithoutFetchingLatest)
    }
}