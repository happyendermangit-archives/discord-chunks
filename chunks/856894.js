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
            query: t,
            guildId: n,
            page: i,
            categoryId: l
        } = e;
        return "query:'".concat(t, "' guildId:").concat(n, " page:").concat(i, " categoryId:").concat(l)
    }(i = l || (l = {}))[i.FETCHING = 0] = "FETCHING", i[i.FETCHED = 1] = "FETCHED", i[i.ERROR = 2] = "ERROR";
    let d = new s({
            max: 20
        }),
        c = {};
    class f extends r.default.Store {
        getSearchResults(e) {
            let {
                query: t,
                guildId: n,
                page: i,
                categoryId: l
            } = e, a = u({
                query: t,
                guildId: n,
                page: i,
                categoryId: l
            });
            return d.get(a)
        }
        getFetchState(e) {
            let {
                query: t,
                guildId: n,
                page: i,
                categoryId: l
            } = e, a = u({
                query: t,
                guildId: n,
                page: i,
                categoryId: l
            });
            return c[a]
        }
    }
    f.displayName = "ApplicationDirectorySearchStore";
    var m = new f(o.default, {
        APPLICATION_DIRECTORY_FETCH_SEARCH: function(e) {
            let {
                query: t,
                guildId: n,
                page: i,
                categoryId: l
            } = e, a = u({
                query: t,
                guildId: n,
                page: i,
                categoryId: l
            });
            c = {
                ...c,
                [a]: 0
            }
        },
        APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS: function(e) {
            let {
                query: t,
                guildId: n,
                page: i,
                categoryId: l,
                result: a
            } = e, s = u({
                query: t,
                guildId: n,
                page: i,
                categoryId: l
            });
            d.set(s, {
                lastFetchTimeMs: Date.now(),
                ...a
            }), c = {
                ...c,
                [s]: 1
            }
        },
        APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE: function(e) {
            let {
                query: t,
                guildId: n,
                page: i,
                categoryId: l
            } = e, a = u({
                query: t,
                guildId: n,
                page: i,
                categoryId: l
            });
            c = {
                ...c,
                [a]: 2
            }
        }
    })
}