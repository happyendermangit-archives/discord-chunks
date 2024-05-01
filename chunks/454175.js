function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("544891"),
        r = n("570140"),
        a = n("314897"),
        s = n("70956"),
        o = n("385845"),
        l = n("981631");
    let u = 5 * s.default.Millis.MINUTE;
    async function d(e, t) {
        r.default.dispatch({
            type: "USER_RECENT_GAMES_FETCH_START",
            userId: e
        });
        try {
            let n = await i.HTTP.get({
                url: l.Endpoints.USER_RECENT_GAMES(e),
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
    async function _(e, t, n) {
        let i = o.default.getLastFetchTimestamp(e);
        if (!(null != i && Date.now() - i < u)) {
            if (n) {
                let n = a.default.getId(),
                    i = o.default.getLastFetchTimestamp(n);
                n !== e && null == i && await d(n, t)
            }
            await d(e, t)
        }
    }
    t.default = {
        fetchUserRecentGames: _,
        updateUserRecentGamesLocal: function(e, t) {
            r.default.dispatch({
                type: "USER_RECENT_GAMES_UPDATE_LOCAL",
                applicationId: e,
                duration: t
            })
        }
    }
}