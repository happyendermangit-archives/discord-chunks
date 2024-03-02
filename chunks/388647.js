function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FetchState: function() {
            return i
        },
        default: function() {
            return m
        }
    });
    var l, i, a = n("693566"),
        s = n.n(a),
        r = n("446674"),
        o = n("913144");

    function u(e) {
        let {
            applicationId: t,
            guildId: n,
            page: l
        } = e;
        return "applicationId:".concat(t, " guildId:").concat(n, " page:").concat(l)
    }(l = i || (i = {}))[l.NOT_FETCHED = 0] = "NOT_FETCHED", l[l.FETCHING = 1] = "FETCHING", l[l.FETCHED = 2] = "FETCHED", l[l.ERROR = 3] = "ERROR";
    let d = new s({
            max: 20
        }),
        c = {};
    class f extends r.default.Store {
        getSimilarApplications(e) {
            let {
                applicationId: t,
                guildId: n,
                page: l
            } = e;
            if (null == t) return;
            let i = u({
                applicationId: t,
                guildId: n,
                page: l
            });
            return d.get(i)
        }
        getFetchState(e) {
            let {
                applicationId: t,
                guildId: n,
                page: l
            } = e;
            if (null == t) return;
            let i = u({
                applicationId: t,
                guildId: n,
                page: l
            });
            return c[i]
        }
    }
    f.displayName = "ApplicationDirectorySimilarApplicationsStore";
    var m = new f(o.default, {
        APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS: function(e) {
            let {
                applicationId: t,
                guildId: n,
                page: l
            } = e, i = u({
                applicationId: t,
                guildId: n,
                page: l
            });
            c = {
                ...c,
                [i]: 1
            }
        },
        APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS: function(e) {
            let {
                applicationId: t,
                guildId: n,
                similarApplications: l,
                loadId: i,
                page: a,
                totalPages: s
            } = e, r = u({
                applicationId: t,
                guildId: n,
                page: a
            });
            d.set(r, {
                lastFetchTimeMs: Date.now(),
                applications: l,
                loadId: i,
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
                page: l
            } = e, i = u({
                applicationId: t,
                guildId: n,
                page: l
            });
            c = {
                ...c,
                [i]: 3
            }
        }
    })
}