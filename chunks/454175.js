function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("544891"),
        r = n("570140"),
        s = n("70956"),
        a = n("385845"),
        o = n("981631");
    let l = 5 * s.default.Millis.MINUTE;
    async function u(e, t) {
        let n = a.default.getLastFetchTimestamp(e);
        if (!(null != n && Date.now() - n < l)) {
            r.default.dispatch({
                type: "USER_RECENT_GAMES_FETCH_START",
                userId: e
            });
            try {
                let n = await i.HTTP.get({
                    url: o.Endpoints.USER_RECENT_GAMES(e),
                    signal: t
                });
                r.default.dispatch({
                    type: "USER_RECENT_GAMES_FETCH_SUCCESS",
                    userId: e,
                    recentGames: n.body.recent_games
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
        fetchUserRecentGames: u,
        updateUserRecentGamesLocal: function(e, t) {
            r.default.dispatch({
                type: "USER_RECENT_GAMES_UPDATE_LOCAL",
                applicationId: e,
                duration: t
            })
        }
    }
}