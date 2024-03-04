function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var i = n("446674"),
        s = n("913144"),
        r = n("49111");
    let a = {},
        o = null;
    class l extends i.default.Store {
        get applicationStatistics() {
            return a
        }
        get lastFetched() {
            return o
        }
        getGameDuration(e) {
            let t = a[e];
            return null != t ? t.total_duration : 0
        }
        getLastPlayedDateTime(e) {
            let t = a[e];
            return null != t ? new Date(t.last_played_at).getTime() : null
        }
        hasApplicationStatistic(e) {
            return null != a[e]
        }
        getCurrentUserStatisticsForApplication(e) {
            return a[e]
        }
        getQuickSwitcherScoreForApplication(e) {
            let t = a[e],
                n = 0;
            if (null != t) {
                let e = Date.now(),
                    i = new Date(t.last_played_at).getTime(),
                    s = Math.floor((e - i) / 864e5),
                    r = Math.floor(1e3 * t.total_duration / 36e5);
                0 === s ? n += 50 : s >= 1 && s < 2 ? n += 40 : s >= 2 && s < 4 ? n += 30 : s >= 4 && s < 7 ? n += 20 : s >= 7 && (n += 10), 0 === r ? n += 0 : r >= 1 && r < 12 ? n += 10 : r >= 12 && r < 168 ? n += 20 : r >= 168 && r < 720 ? n += 40 : r >= 720 && (n += 50)
            }
            return n
        }
    }
    l.displayName = "LibraryApplicationStatisticsStore";
    var u = new l(s.default, {
        USER_ACTIVITY_STATISTICS_FETCH_SUCCESS: function(e) {
            let {
                statistics: t
            } = e;
            t.forEach(e => {
                a[e.application_id] = e
            }), o = Date.now()
        },
        ACTIVITY_UPDATE_START: function(e) {
            let {
                duration: t,
                applicationId: n,
                distributor: i
            } = e, s = a[n], o = new Date().toISOString(), l = 0, u = 0;
            if (null != s) {
                var d;
                l = s.total_duration, u = null !== (d = s.total_discord_sku_duration) && void 0 !== d ? d : 0
            }
            l += t, i === r.Distributors.DISCORD && (u += t), a[n] = {
                application_id: n,
                total_duration: l,
                last_played_at: o,
                total_discord_sku_duration: u
            }
        },
        LOGOUT: function() {
            a = {}, o = null
        }
    })
}