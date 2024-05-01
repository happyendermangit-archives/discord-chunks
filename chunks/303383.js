function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FetchState: function() {
            return o
        }
    });
    var i, r, s, a, o, l, u = n("31775"),
        d = n.n(u),
        _ = n("442837"),
        c = n("570140");

    function E(e) {
        let {
            applicationId: t,
            guildId: n,
            page: i
        } = e;
        return "applicationId:".concat(t, " guildId:").concat(n, " page:").concat(i)
    }(i = o || (o = {}))[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED", i[i.ERROR = 3] = "ERROR";
    let I = new(d())({
            max: 20
        }),
        T = {};
    class f extends(l = _.default.Store) {
        getSimilarApplications(e) {
            let {
                applicationId: t,
                guildId: n,
                page: i
            } = e;
            if (null == t) return;
            let r = E({
                applicationId: t,
                guildId: n,
                page: i
            });
            return I.get(r)
        }
        getFetchState(e) {
            let {
                applicationId: t,
                guildId: n,
                page: i
            } = e;
            if (null != t) return T[E({
                applicationId: t,
                guildId: n,
                page: i
            })]
        }
    }
    a = "ApplicationDirectorySimilarApplicationsStore", (s = "displayName") in(r = f) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new f(c.default, {
        APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS: function(e) {
            let {
                applicationId: t,
                guildId: n,
                page: i
            } = e, r = E({
                applicationId: t,
                guildId: n,
                page: i
            });
            T = {
                ...T,
                [r]: 1
            }
        },
        APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS: function(e) {
            let {
                applicationId: t,
                guildId: n,
                similarApplications: i,
                loadId: r,
                page: s,
                totalPages: a
            } = e, o = E({
                applicationId: t,
                guildId: n,
                page: s
            });
            I.set(o, {
                lastFetchTimeMs: Date.now(),
                applications: i,
                loadId: r,
                page: s,
                totalPages: a
            }), T = {
                ...T,
                [o]: 2
            }
        },
        APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE: function(e) {
            let {
                applicationId: t,
                guildId: n,
                page: i
            } = e, r = E({
                applicationId: t,
                guildId: n,
                page: i
            });
            T = {
                ...T,
                [r]: 3
            }
        }
    })
}