function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useUserRecentGames: function() {
            return d
        }
    });
    var i = n("470079"),
        r = n("442837"),
        s = n("695346"),
        a = n("314897"),
        o = n("454175"),
        l = n("385845"),
        u = n("201819");

    function d(e) {
        let t = (0, u.useIsUserRecentGamesFetchEnabled)({
                userId: e,
                location: "28tk0bf_4"
            }),
            n = i.useRef(new AbortController),
            {
                recentGames: d,
                isFetching: _,
                hasError: c
            } = (0, r.useStateFromStoresObject)([l.default], () => ({
                recentGames: l.default.getRecentGames(e),
                isFetching: l.default.isFetching(e),
                hasError: l.default.hasError(e)
            })),
            E = i.useCallback(async () => {
                if (!!t && !_ && !c) {
                    if (e !== a.default.getId() || s.RecentGamesEnabled.getSetting()) try {
                        await o.default.fetchUserRecentGames(e, n.current.signal)
                    } catch (e) {}
                }
            }, [c, t, _, e]);
        return i.useEffect(() => {
            E()
        }, [E]), i.useEffect(() => {
            let e = n.current;
            return () => {
                null == e || e.abort()
            }
        }, []), {
            hasError: c,
            recentGames: d,
            isFetching: _
        }
    }
}