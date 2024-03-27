function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r, s, a, o = n("442837"),
        l = n("570140");
    let u = new Map,
        d = new Set,
        _ = new Set;
    class c extends(i = o.default.Store) {
        getRecentGames(e) {
            var t;
            return null === (t = u.get(e)) || void 0 === t ? void 0 : t.recentGames
        }
        getLastFetchTimestamp(e) {
            var t;
            return null === (t = u.get(e)) || void 0 === t ? void 0 : t.lastFetchTimestampMs
        }
        isFetching(e) {
            return d.has(e)
        }
        hasError(e) {
            return _.has(e)
        }
    }
    a = "UserRecentGamesStore", (s = "displayName") in(r = c) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new c(l.default, {
        CONNECTION_OPEN: function() {
            u = new Map, d = new Set, _ = new Set
        },
        USER_RECENT_GAMES_FETCH_START: function(e) {
            let {
                userId: t
            } = e;
            d.add(t)
        },
        USER_RECENT_GAMES_FETCH_SUCCESS: function(e) {
            let {
                userId: t,
                recentGames: n
            } = e;
            d.delete(t), u.set(t, {
                recentGames: n,
                lastFetchTimestampMs: Date.now()
            })
        },
        USER_RECENT_GAMES_FETCH_ERROR: function(e) {
            let {
                userId: t
            } = e;
            d.delete(t), _.add(t)
        }
    })
}