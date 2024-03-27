function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FetchState: function() {
            return l
        },
        default: function() {
            return m
        }
    });
    var i, l, a = n("693566"),
        s = n.n(a),
        r = n("446674"),
        o = n("913144");

    function u(e) {
        let {
            applicationId: t,
            guildId: n,
            page: i
        } = e;
        return "applicationId:".concat(t, " guildId:").concat(n, " page:").concat(i)
    }(i = l || (l = {}))[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED", i[i.ERROR = 3] = "ERROR";
    let d = new s({
            max: 20
        }),
        c = {};
    class f extends r.default.Store {
        getSimilarApplications(e) {
            let {
                applicationId: t,
                guildId: n,
                page: i
            } = e;
            if (null == t) return;
            let l = u({
                applicationId: t,
                guildId: n,
                page: i
            });
            return d.get(l)
        }
        getFetchState(e) {
            let {
                applicationId: t,
                guildId: n,
                page: i
            } = e;
            if (null == t) return;
            let l = u({
                applicationId: t,
                guildId: n,
                page: i
            });
            return c[l]
        }
    }
    f.displayName = "ApplicationDirectorySimilarApplicationsStore";
    var m = new f(o.default, {
        APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS: function(e) {
            let {
                applicationId: t,
                guildId: n,
                page: i
            } = e, l = u({
                applicationId: t,
                guildId: n,
                page: i
            });
            c = {
                ...c,
                [l]: 1
            }
        },
        APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS: function(e) {
            let {
                applicationId: t,
                guildId: n,
                similarApplications: i,
                loadId: l,
                page: a,
                totalPages: s
            } = e, r = u({
                applicationId: t,
                guildId: n,
                page: a
            });
            d.set(r, {
                lastFetchTimeMs: Date.now(),
                applications: i,
                loadId: l,
                page: a,
                totalPages: s
            }), c = {
                ...c,
                [r]: 2
            }
        },
        APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE: function(e) {
            let {
                applicationId: t,
                guildId: n,
                page: i
            } = e, l = u({
                applicationId: t,
                guildId: n,
                page: i
            });
            c = {
                ...c,
                [l]: 3
            }
        }
    })
}