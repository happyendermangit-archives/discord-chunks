function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useTopCommands: function() {
            return r
        },
        useTopRealCommands: function() {
            return s
        }
    });
    var i = n("884691"),
        l = n("446674"),
        a = n("872173"),
        o = n("342564");

    function r(e) {
        i.useEffect(() => {
            a.FrecencyUserSettingsActionCreators.loadIfNecessary()
        }, []);
        let t = (0, l.useStateFromStores)([o.default], () => o.default.getTopCommandsWithoutLoadingLatest()),
            n = i.useMemo(() => (0, o.getFilteredTopCommands)(t, e), [t, e]);
        return n
    }

    function s(e) {
        i.useEffect(() => {
            a.FrecencyUserSettingsActionCreators.loadIfNecessary()
        }, []);
        let t = (0, l.useStateFromStores)([o.default], () => o.default.getTopCommandsWithoutLoadingLatest()),
            n = i.useMemo(() => {
                let n = (0, o.getFilteredTopCommands)(t, e);
                return (0, o.getTopRealCommands)(n)
            }, [t, e]);
        return n
    }
}