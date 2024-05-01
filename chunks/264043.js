function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FetchState: function() {
            return i
        }
    }), n("47120");
    var i, r, a, s, o, l, u = n("442837"),
        d = n("570140");
    (a = i || (i = {}))[a.FETCHING = 0] = "FETCHING", a[a.FETCHED = 1] = "FETCHED", a[a.ERROR = 2] = "ERROR";
    let _ = {},
        c = {},
        E = new Set,
        I = {};
    class T extends(r = u.default.Store) {
        getApplication(e) {
            if (null != e) return _[e]
        }
        getApplications() {
            return _
        }
        getApplicationFetchState(e) {
            if (null != e) return c[e]
        }
        getApplicationFetchStates() {
            return c
        }
        isInvalidApplication(e) {
            return null != e && E.has(e)
        }
        getInvalidApplicationIds() {
            return E
        }
        isFetching(e) {
            return 0 === this.getApplicationFetchState(e)
        }
        getApplicationLastFetchTime(e) {
            if (null != e) return I[e]
        }
    }
    l = "ApplicationDirectoryApplicationsStore", (o = "displayName") in(s = T) ? Object.defineProperty(s, o, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : s[o] = l, t.default = new T(d.default, {
        APPLICATION_DIRECTORY_FETCH_APPLICATION: function(e) {
            let {
                applicationId: t
            } = e;
            c = {
                ...c,
                [t]: 0
            }
        },
        APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS: function(e) {
            let {
                application: t
            } = e;
            _ = {
                ..._,
                [t.id]: t
            }, c = {
                ...c,
                [t.id]: 1
            };
            let n = Date.now();
            I = {
                ...I,
                [t.id]: n
            }, E.has(t.id) && (E.delete(t.id), E = new Set(E))
        },
        APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE: function(e) {
            let {
                applicationId: t,
                isInvalidApplication: n
            } = e;
            c = {
                ...c,
                [t]: 2
            }, n && (E.add(t), E = new Set(E))
        }
    })
}