function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("544891"),
        r = n("570140"),
        s = n("973616"),
        a = n("70956"),
        o = n("385845"),
        l = n("981631");
    let u = 5 * a.default.Millis.MINUTE;
    async function d(e, t) {
        let n = o.default.getLastFetchTimestamp(e);
        if (!(null != n && Date.now() - n < u)) {
            r.default.dispatch({
                type: "USER_RECENT_GAMES_FETCH_START",
                userId: e
            });
            try {
                let n = (await i.HTTP.get({
                    url: l.Endpoints.USER_RECENT_GAMES(e),
                    signal: t
                })).body.recent_games.map(e => ({
                    application: s.default.createFromServer(e.application),
                    duration: e.duration,
                    lastSessionId: e.last_session_id
                }));
                r.default.dispatch({
                    type: "USER_RECENT_GAMES_FETCH_SUCCESS",
                    userId: e,
                    recentGames: n
                })
            } catch (t) {
                r.default.dispatch({
                    type: "USER_RECENT_GAMES_FETCH_ERROR",
                    userId: e
                })
            }
        }
    }
    t.default = {
        fetchUserRecentGames: d
    }
}