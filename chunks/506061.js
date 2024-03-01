function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FetchState: function() {
            return l
        },
        default: function() {
            return c
        }
    }), n("222007");
    var l, i, a = n("446674"),
        s = n("913144"),
        r = n("718517");
    (i = l || (l = {}))[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED", i[i.ERROR = 3] = "ERROR";
    let o = {
        applicationIdToGuildIds: {},
        lastFetchTimeMs: null,
        nextFetchRetryTimeMs: null,
        fetchState: 0
    };

    function u(e) {
        let {
            applicationId: t,
            guildId: n
        } = e;
        null == o.applicationIdToGuildIds[t] && (o.applicationIdToGuildIds[t] = new Set), o.applicationIdToGuildIds[t].add(n), o.applicationIdToGuildIds[t] = new Set(o.applicationIdToGuildIds[t])
    }
    class d extends a.default.PersistedStore {
        initialize(e) {
            if (null != e)
                for (let t in o.lastFetchTimeMs = e.lastFetchTimeMs, o.nextFetchRetryTimeMs = e.nextFetchRetryTimeMs, o.fetchState = e.fetchState, e.applicationIdToGuildIds) o.applicationIdToGuildIds[t] = new Set(e.applicationIdToGuildIds[t])
        }
        getState() {
            return o
        }
        getGuildIdsForApplication(e) {
            if (null != e) return o.applicationIdToGuildIds[e]
        }
        getLastFetchTimeMs() {
            return o.lastFetchTimeMs
        }
        getNextFetchRetryTimeMs() {
            return o.nextFetchRetryTimeMs
        }
        getFetchState() {
            return o.fetchState
        }
    }
    d.displayName = "MyGuildApplicationsStore", d.persistKey = "MyGuildApplicationsStore";
    var c = new d(s.default, {
        LOGOUT: function() {
            o.applicationIdToGuildIds = {}, o.lastFetchTimeMs = null, o.nextFetchRetryTimeMs = null, o.fetchState = 0
        },
        FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS: function() {
            o.fetchState = 1
        },
        FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS: function(e) {
            let {
                guildIdToApplicationIds: t
            } = e;
            for (let e in o.fetchState = 2, o.lastFetchTimeMs = Date.now(), o.applicationIdToGuildIds = {}, o.nextFetchRetryTimeMs = null, t)
                for (let n of t[e]) u({
                    applicationId: n,
                    guildId: e
                })
        },
        FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE: function(e) {
            let {
                retryAfterSeconds: t
            } = e;
            if (o.fetchState = 3, null != t) {
                let e = t * r.default.Millis.SECOND;
                o.nextFetchRetryTimeMs = Date.now() + e
            }
        },
        INTEGRATION_CREATE: function(e) {
            let {
                application: t,
                guildId: n
            } = e;
            null != t && u({
                applicationId: t.id,
                guildId: n
            })
        },
        INTEGRATION_DELETE: function(e) {
            let {
                applicationId: t,
                guildId: n
            } = e;
            null != t && ! function(e) {
                let {
                    applicationId: t,
                    guildId: n
                } = e;
                null != o.applicationIdToGuildIds[t] && (o.applicationIdToGuildIds[t].delete(n), o.applicationIdToGuildIds[t] = new Set(o.applicationIdToGuildIds[t]))
            }({
                applicationId: t,
                guildId: n
            })
        }
    })
}