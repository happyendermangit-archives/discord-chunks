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
        let t = (0, o.useIsUserRecentGamesFetchEnabled)({
                userId: e,
                location: "28tk0bf_4"
            }),
            n = i.useRef(new AbortController),
            {
                currentUserApplicationIds: l,
                recentGames: u,
                isFetching: d,
                isError: _
            } = (0, r.useStateFromStoresObject)([a.default], () => ({
                currentUserApplicationIds: a.default.getCurrentUserApplicationIds(),
                recentGames: a.default.getRecentGames(e),
                isFetching: a.default.isFetching(e),
                isError: a.default.isError(e)
            })),
            c = i.useCallback(async () => {
                if (t && !d && !_) try {
                    await s.default.fetchUserRecentGames(e, n.current.signal, !0)
                } catch (e) {}
            }, [_, t, d, e]);
        return i.useEffect(() => {
            c()
        }, [c]), i.useEffect(() => {
            let e = n.current;
            return () => {
                null == e || e.abort()
            }
        }, []), {
            isFetching: d,
            isError: _,
            recentGames: u,
            currentUserApplicationIds: l
        }
    }
}