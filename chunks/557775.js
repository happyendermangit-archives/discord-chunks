function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useTopCommands: function() {
            return u
        }
    });
    var r = n("470079"),
        o = n("898511"),
        i = n("968574"),
        a = n("855286");

    function u(e) {
        r.useEffect(function() {
            i.FrecencyUserSettingsActionCreators.loadIfNecessary()
        }, []);
        var t = (0, o.useStateFromStores)([a.default], function() {
            return a.default.getTopCommandsWithoutLoadingLatest()
        });
        return r.useMemo(function() {
            return (0, a.getFilteredTopCommands)(t, e)
        }, [t, e])
    }
}