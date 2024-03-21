function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var i = n("872717"),
        l = n("913144"),
        a = n("653047"),
        s = n("718517"),
        r = n("757457"),
        o = n("49111");
    let u = 5 * s.default.Millis.MINUTE;
    var d = {
        fetchUserRecentGames: async function e(e, t) {
            let n = r.default.getLastFetchTimestamp(e);
            if (!(null != n && Date.now() - n < u)) {
                l.default.dispatch({
                    type: "USER_RECENT_GAMES_FETCH_START",
                    userId: e
                });
                try {
                    let n = await i.HTTP.get({
                            url: o.Endpoints.USER_RECENT_GAMES(e),
                            signal: t
                        }),
                        s = n.body.recent_games.map(e => ({
                            application: a.default.createFromServer(e.application),
                            duration: e.duration,
                            lastSessionId: e.last_session_id
                        }));
                    l.default.dispatch({
                        type: "USER_RECENT_GAMES_FETCH_SUCCESS",
                        userId: e,
                        recentGames: s
                    })
                } catch (t) {
                    l.default.dispatch({
                        type: "USER_RECENT_GAMES_FETCH_ERROR",
                        userId: e
                    })
                }
            }
        }
    }
}