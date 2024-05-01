function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useFrecencySettings: function() {
            return o
        }
    });
    var i = n("470079"),
        r = n("442837"),
        a = n("675478"),
        s = n("581883");

    function o() {
        return i.useEffect(() => {
            a.FrecencyUserSettingsActionCreators.loadIfNecessary()
        }, []), (0, r.useStateFromStores)([s.default], () => s.default.frecencyWithoutFetchingLatest)
    }
}