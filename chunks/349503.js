function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FetchState: function() {
            return i
        },
        default: function() {
            return _
        }
    }), n("222007");
    var i, s, r = n("446674"),
        a = n("913144");
    (s = i || (i = {}))[s.FETCHING = 0] = "FETCHING", s[s.FETCHED = 1] = "FETCHED", s[s.ERROR = 2] = "ERROR";
    let o = {},
        l = {},
        u = new Set,
        d = {};
    class c extends r.default.Store {
        getApplication(e) {
            if (null != e) return o[e]
        }
        getApplications() {
            return o
        }
        getApplicationFetchState(e) {
            if (null != e) return l[e]
        }
        getApplicationFetchStates() {
            return l
        }
        isInvalidApplication(e) {
            return null != e && u.has(e)
        }
        getInvalidApplicationIds() {
            return u
        }
        isFetching(e) {
            return 0 === this.getApplicationFetchState(e)
        }
        getApplicationLastFetchTime(e) {
            if (null != e) return d[e]
        }
    }
    c.displayName = "ApplicationDirectoryApplicationsStore";
    var _ = new c(a.default, {
        APPLICATION_DIRECTORY_FETCH_APPLICATION: function(e) {
            let {
                applicationId: t
            } = e;
            l = {
                ...l,
                [t]: 0
            }
        },
        APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS: function(e) {
            let {
                application: t
            } = e;
            o = {
                ...o,
                [t.id]: t
            }, l = {
                ...l,
                [t.id]: 1
            };
            let n = Date.now();
            d = {
                ...d,
                [t.id]: n
            }, u.has(t.id) && (u.delete(t.id), u = new Set(u))
        },
        APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE: function(e) {
            let {
                applicationId: t,
                isInvalidApplication: n
            } = e;
            l = {
                ...l,
                [t]: 2
            }, n && (u.add(t), u = new Set(u))
        }
    })
}