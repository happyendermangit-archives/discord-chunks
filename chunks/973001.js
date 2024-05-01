function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FetchState: function() {
            return i
        }
    }), n("47120");
    var i, r, s, a = n("442837"),
        o = n("570140"),
        l = n("70956");

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }(s = i || (i = {}))[s.NOT_FETCHED = 0] = "NOT_FETCHED", s[s.FETCHING = 1] = "FETCHING", s[s.FETCHED = 2] = "FETCHED", s[s.ERROR = 3] = "ERROR";
    let d = {
        applicationIdToGuildIds: {},
        lastFetchTimeMs: null,
        nextFetchRetryTimeMs: null,
        fetchState: 0
    };

    function _(e) {
        let {
            applicationId: t,
            guildId: n
        } = e;
        null == d.applicationIdToGuildIds[t] && (d.applicationIdToGuildIds[t] = new Set), d.applicationIdToGuildIds[t].add(n), d.applicationIdToGuildIds[t] = new Set(d.applicationIdToGuildIds[t])
    }
    class c extends(r = a.default.PersistedStore) {
        initialize(e) {
            if (null != e)
                for (let t in d.lastFetchTimeMs = e.lastFetchTimeMs, d.nextFetchRetryTimeMs = e.nextFetchRetryTimeMs, d.fetchState = e.fetchState, e.applicationIdToGuildIds) d.applicationIdToGuildIds[t] = new Set(e.applicationIdToGuildIds[t])
        }
        getState() {
            return d
        }
        getGuildIdsForApplication(e) {
            if (null != e) return d.applicationIdToGuildIds[e]
        }
        getLastFetchTimeMs() {
            return d.lastFetchTimeMs
        }
        getNextFetchRetryTimeMs() {
            return d.nextFetchRetryTimeMs
        }
        getFetchState() {
            return d.fetchState
        }
    }
    u(c, "displayName", "MyGuildApplicationsStore"), u(c, "persistKey", "MyGuildApplicationsStore"), t.default = new c(o.default, {
        LOGOUT: function() {
            d.applicationIdToGuildIds = {}, d.lastFetchTimeMs = null, d.nextFetchRetryTimeMs = null, d.fetchState = 0
        },
        FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS: function() {
            d.fetchState = 1
        },
        FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS: function(e) {
            let {
                guildIdToApplicationIds: t
            } = e;
            for (let e in d.fetchState = 2, d.lastFetchTimeMs = Date.now(), d.applicationIdToGuildIds = {}, d.nextFetchRetryTimeMs = null, t)
                for (let n of t[e]) _({
                    applicationId: n,
                    guildId: e
                })
        },
        FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE: function(e) {
            let {
                retryAfterSeconds: t
            } = e;
            if (d.fetchState = 3, null != t) {
                let e = t * l.default.Millis.SECOND;
                d.nextFetchRetryTimeMs = Date.now() + e
            }
        },
        INTEGRATION_CREATE: function(e) {
            let {
                application: t,
                guildId: n
            } = e;
            null != t && _({
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
                null != d.applicationIdToGuildIds[t] && (d.applicationIdToGuildIds[t].delete(n), d.applicationIdToGuildIds[t] = new Set(d.applicationIdToGuildIds[t]))
            }({
                applicationId: t,
                guildId: n
            })
        }
    })
}