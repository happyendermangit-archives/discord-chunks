function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useFrecencySettings: function() {
            return o
        }
    });
    var i = n("470079"),
        r = n("442837"),
        s = n("675478"),
        a = n("581883");

    function o() {
        return i.useEffect(() => {
            s.FrecencyUserSettingsActionCreators.loadIfNecessary()
        }, []), (0, r.useStateFromStores)([a.default], () => a.default.frecencyWithoutFetchingLatest)
    }
}