function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("653041");
    var i, r, s, a, o = n("512722"),
        l = n.n(o),
        u = n("127437"),
        d = n("442837"),
        _ = n("570140"),
        c = n("314897"),
        E = n("77498"),
        I = n("709054");
    let T = new Map,
        f = new Set,
        S = new Set;
    class h extends(i = d.default.Store) {
        getRecentGames(e) {
            var t;
            return null === (t = T.get(e)) || void 0 === t ? void 0 : t.recentGames
        }
        getLastFetchTimestamp(e) {
            var t;
            return null === (t = T.get(e)) || void 0 === t ? void 0 : t.lastFetchTimestampMs
        }
        isFetching(e) {
            return f.has(e)
        }
        hasError(e) {
            return S.has(e)
        }
    }
    a = "UserRecentGamesStore", (s = "displayName") in(r = h) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new h(_.default, {
        CONNECTION_OPEN: function() {
            T = new Map, f = new Set, S = new Set
        },
        USER_RECENT_GAMES_FETCH_START: function(e) {
            let {
                userId: t
            } = e;
            f.add(t)
        },
        USER_RECENT_GAMES_FETCH_SUCCESS: function(e) {
            let {
                userId: t,
                recentGames: n
            } = e;
            f.delete(t), T.set(t, {
                recentGames: n.map(e => ({
                    applicationId: e.application.id,
                    duration: e.duration,
                    lastSessionId: e.last_session_id
                })).sort((e, t) => I.default.compare(t.lastSessionId, e.lastSessionId)),
                lastFetchTimestampMs: Date.now()
            })
        },
        USER_RECENT_GAMES_FETCH_ERROR: function(e) {
            let {
                userId: t
            } = e;
            f.delete(t), S.add(t)
        },
        USER_RECENT_GAMES_UPDATE_LOCAL: function(e) {
            let {
                applicationId: t,
                duration: n
            } = e;
            if (null == E.default.getDetectableGame(t) || n < u.UserGameApplicationSessionDuration.MIN_DURATION_SECS) return !1;
            ! function(e, t) {
                var n, i;
                let r = T.get(e);
                if (null == r) return;
                let s = [],
                    a = null;
                r.recentGames.forEach(e => {
                    e.applicationId === t.applicationId ? a = e : s.push(e)
                });
                let o = null != a ? (n = a, i = t, l()(n.applicationId === i.applicationId, "[UserRecentGamesStore] Games must have same application for merge."), {
                    applicationId: n.applicationId,
                    duration: n.duration + i.duration,
                    lastSessionId: I.default.compare(n.lastSessionId, i.lastSessionId) > 0 ? n.lastSessionId : i.lastSessionId
                }) : t;
                T.set(e, {
                    lastFetchTimestampMs: Date.now(),
                    recentGames: [o, ...s]
                })
            }(c.default.getId(), {
                applicationId: t,
                duration: n,
                lastSessionId: I.default.fromTimestamp(Date.now())
            })
        }
    })
}