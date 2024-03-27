function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useUserRecentGames: function() {
            return l
        }
    });
    var i = n("470079"),
        r = n("442837"),
        s = n("454175"),
        a = n("385845"),
        o = n("201819");

    function l(e) {
        let t = (0, o.useIsUserRecentGamesFetchEnabled)(e),
            n = i.useRef(new AbortController),
            {
                recentGames: l,
                isFetching: u,
                hasError: d
            } = (0, r.useStateFromStoresObject)([a.default], () => ({
                recentGames: a.default.getRecentGames(e),
                isFetching: a.default.isFetching(e),
                hasError: a.default.hasError(e)
            })),
            _ = i.useCallback(async () => {
                if (t && !u && !d) try {
                    await s.default.fetchUserRecentGames(e, n.current.signal)
                } catch (e) {}
            }, [d, t, u, e]);
        return i.useEffect(() => {
            _()
        }, [_]), i.useEffect(() => {
            let e = n.current;
            return () => {
                null == e || e.abort()
            }
        }, []), {
            hasError: d,
            recentGames: l,
            isFetching: u
        }
    }
}