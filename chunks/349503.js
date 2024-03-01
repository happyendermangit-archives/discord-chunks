function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FetchState: function() {
            return s
        },
        default: function() {
            return _
        }
    }), n("222007");
    var s, i, r = n("446674"),
        a = n("913144");
    (i = s || (s = {}))[i.FETCHING = 0] = "FETCHING", i[i.FETCHED = 1] = "FETCHED", i[i.ERROR = 2] = "ERROR";
    let o = {},
        d = {},
        u = new Set,
        l = {};
    class f extends r.default.Store {
        getApplication(e) {
            if (null != e) return o[e]
        }
        getApplications() {
            return o
        }
        getApplicationFetchState(e) {
            if (null != e) return d[e]
        }
        getApplicationFetchStates() {
            return d
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
            if (null != e) return l[e]
        }
    }
    f.displayName = "ApplicationDirectoryApplicationsStore";
    var _ = new f(a.default, {
        APPLICATION_DIRECTORY_FETCH_APPLICATION: function(e) {
            let {
                applicationId: t
            } = e;
            d = {
                ...d,
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
            }, d = {
                ...d,
                [t.id]: 1
            };
            let n = Date.now();
            l = {
                ...l,
                [t.id]: n
            }, u.has(t.id) && (u.delete(t.id), u = new Set(u))
        },
        APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE: function(e) {
            let {
                applicationId: t,
                isInvalidApplication: n
            } = e;
            d = {
                ...d,
                [t]: 2
            }, n && (u.add(t), u = new Set(u))
        }
    })
}