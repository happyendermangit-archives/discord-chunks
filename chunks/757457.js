function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    }), n("222007");
    var i = n("446674"),
        l = n("913144");
    let a = new Map,
        s = new Set,
        r = new Set;
    class o extends i.default.Store {
        getRecentGames(e) {
            var t;
            return null === (t = a.get(e)) || void 0 === t ? void 0 : t.recentGames
        }
        getLastFetchTimestamp(e) {
            var t;
            return null === (t = a.get(e)) || void 0 === t ? void 0 : t.lastFetchTimestampMs
        }
        isFetching(e) {
            return s.has(e)
        }
        hasError(e) {
            return r.has(e)
        }
    }
    o.displayName = "UserRecentGamesStore";
    var u = new o(l.default, {
        CONNECTION_OPEN: function() {
            a = new Map, s = new Set, r = new Set
        },
        USER_RECENT_GAMES_FETCH_START: function(e) {
            let {
                userId: t
            } = e;
            s.add(t)
        },
        USER_RECENT_GAMES_FETCH_SUCCESS: function(e) {
            let {
                userId: t,
                recentGames: n
            } = e;
            s.delete(t), a.set(t, {
                recentGames: n,
                lastFetchTimestampMs: Date.now()
            })
        },
        USER_RECENT_GAMES_FETCH_ERROR: function(e) {
            let {
                userId: t
            } = e;
            s.delete(t), r.add(t)
        }
    })
}