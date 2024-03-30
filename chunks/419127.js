function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useFrecencySettings: function() {
            return u
        }
    });
    var r = n("470079"),
        o = n("898511"),
        i = n("968574"),
        a = n("851285");

    function u() {
        return r.useEffect(function() {
            i.FrecencyUserSettingsActionCreators.loadIfNecessary()
        }, []), (0, o.useStateFromStores)([a.default], function() {
            return a.default.frecencyWithoutFetchingLatest
        })
    }
}