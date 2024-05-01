function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useUserRecentGames: function() {
            return u
        }
    }), n("47120");
    var i = n("470079"),
        r = n("442837"),
        a = n("314897"),
        s = n("454175"),
        o = n("385845"),
        l = n("761174");

    function u(e) {
        let t = (0, l.useIsUserRecentGamesEnabled)({
                userId: e,
                location: "28tk0bf_4"
            }),
            n = i.useRef(new AbortController),
            u = (0, r.useStateFromStores)([a.default], () => a.default.getId()),
            {
                recentGames: d,
                currentUserRecentGames: _,
                isFetching: c,
                isError: E
            } = (0, r.useStateFromStoresObject)([o.default], () => ({
                recentGames: o.default.getRecentGames(e),
                currentUserRecentGames: o.default.getRecentGames(u),
                isFetching: o.default.isFetching(e),
                isError: o.default.isError(e)
            })),
            I = i.useMemo(() => {
                var e;
                let t = null !== (e = null == _ ? void 0 : _.map(e => {
                    let {
                        applicationId: t
                    } = e;
                    return t
                })) && void 0 !== e ? e : [];
                return 0 === t.length ? null : new Set(t)
            }, [_]),
            T = i.useCallback(async () => {
                if (t && !c && !E) try {
                    await s.default.fetchUserRecentGames(e, n.current.signal, !0)
                } catch (e) {}
            }, [E, t, c, e]);
        return i.useEffect(() => {
            T()
        }, [T]), i.useEffect(() => {
            let e = n.current;
            return () => {
                null == e || e.abort()
            }
        }, []), {
            isFetching: c,
            isError: E,
            recentGames: d,
            currentUserApplicationIds: I
        }
    }
}