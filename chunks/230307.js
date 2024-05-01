function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r, a, s, o = n("442837"),
        l = n("570140"),
        u = n("981631");
    let d = {},
        _ = null;
    class c extends(s = o.default.Store) {
        get applicationStatistics() {
            return d
        }
        get lastFetched() {
            return _
        }
        getGameDuration(e) {
            let t = d[e];
            return null != t ? t.total_duration : 0
        }
        getLastPlayedDateTime(e) {
            let t = d[e];
            return null != t ? new Date(t.last_played_at).getTime() : null
        }
        hasApplicationStatistic(e) {
            return null != d[e]
        }
        getCurrentUserStatisticsForApplication(e) {
            return d[e]
        }
        getQuickSwitcherScoreForApplication(e) {
            let t = d[e],
                n = 0;
            if (null != t) {
                let e = Date.now(),
                    i = Math.floor((e - new Date(t.last_played_at).getTime()) / 864e5),
                    r = Math.floor(1e3 * t.total_duration / 36e5);
                0 === i ? n += 50 : i >= 1 && i < 2 ? n += 40 : i >= 2 && i < 4 ? n += 30 : i >= 4 && i < 7 ? n += 20 : i >= 7 && (n += 10), 0 === r ? n += 0 : r >= 1 && r < 12 ? n += 10 : r >= 12 && r < 168 ? n += 20 : r >= 168 && r < 720 ? n += 40 : r >= 720 && (n += 50)
            }
            return n
        }
    }
    a = "LibraryApplicationStatisticsStore", (r = "displayName") in(i = c) ? Object.defineProperty(i, r, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = a, t.default = new c(l.default, {
        USER_ACTIVITY_STATISTICS_FETCH_SUCCESS: function(e) {
            let {
                statistics: t
            } = e;
            t.forEach(e => {
                d[e.application_id] = e
            }), _ = Date.now()
        },
        ACTIVITY_UPDATE_START: function(e) {
            let {
                duration: t,
                applicationId: n,
                distributor: i
            } = e, r = d[n], a = new Date().toISOString(), s = 0, o = 0;
            if (null != r) {
                var l;
                s = r.total_duration, o = null !== (l = r.total_discord_sku_duration) && void 0 !== l ? l : 0
            }
            s += t, i === u.Distributors.DISCORD && (o += t), d[n] = {
                application_id: n,
                total_duration: s,
                last_played_at: a,
                total_discord_sku_duration: o
            }
        },
        LOGOUT: function() {
            d = {}, _ = null
        }
    })
}