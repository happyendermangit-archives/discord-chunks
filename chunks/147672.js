function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useUserRecentGames: function() {
            return o
        }
    });
    var i = n("884691"),
        l = n("446674"),
        a = n("890537"),
        s = n("757457"),
        r = n("820081");

    function o(e) {
        let t = (0, r.useIsUserRecentGamesEnabled)(e),
            n = i.useRef(new AbortController),
            {
                recentGames: o,
                isFetching: u,
                hasError: d
            } = (0, l.useStateFromStoresObject)([s.default], () => ({
                recentGames: s.default.getRecentGames(e),
                isFetching: s.default.isFetching(e),
                hasError: s.default.hasError(e)
            })),
            c = i.useCallback(async () => {
                if (t && !u && !d) try {
                    await a.default.fetchUserRecentGames(e, n.current.signal)
                } catch (e) {}
            }, [d, t, u, e]);
        return i.useEffect(() => {
            c()
        }, [c]), i.useEffect(() => {
            let e = n.current;
            return () => {
                null == e || e.abort()
            }
        }, []), {
            hasError: d,
            recentGames: o,
            isFetching: u
        }
    }
}