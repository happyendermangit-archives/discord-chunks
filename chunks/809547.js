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
            query: t,
            guildId: n,
            page: i,
            categoryId: r
        } = e;
        return "query:'".concat(t, "' guildId:").concat(n, " page:").concat(i, " categoryId:").concat(r)
    }(i = o || (o = {}))[i.FETCHING = 0] = "FETCHING", i[i.FETCHED = 1] = "FETCHED", i[i.ERROR = 2] = "ERROR";
    let I = new(d())({
            max: 20
        }),
        T = {};
    class f extends(l = _.default.Store) {
        getSearchResults(e) {
            let {
                query: t,
                guildId: n,
                page: i,
                categoryId: r
            } = e, s = E({
                query: t,
                guildId: n,
                page: i,
                categoryId: r
            });
            return I.get(s)
        }
        getFetchState(e) {
            let {
                query: t,
                guildId: n,
                page: i,
                categoryId: r
            } = e;
            return T[E({
                query: t,
                guildId: n,
                page: i,
                categoryId: r
            })]
        }
    }
    a = "ApplicationDirectorySearchStore", (s = "displayName") in(r = f) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new f(c.default, {
        APPLICATION_DIRECTORY_FETCH_SEARCH: function(e) {
            let {
                query: t,
                guildId: n,
                page: i,
                categoryId: r
            } = e, s = E({
                query: t,
                guildId: n,
                page: i,
                categoryId: r
            });
            T = {
                ...T,
                [s]: 0
            }
        },
        APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS: function(e) {
            let {
                query: t,
                guildId: n,
                page: i,
                categoryId: r,
                result: s
            } = e, a = E({
                query: t,
                guildId: n,
                page: i,
                categoryId: r
            });
            I.set(a, {
                lastFetchTimeMs: Date.now(),
                ...s
            }), T = {
                ...T,
                [a]: 1
            }
        },
        APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE: function(e) {
            let {
                query: t,
                guildId: n,
                page: i,
                categoryId: r
            } = e, s = E({
                query: t,
                guildId: n,
                page: i,
                categoryId: r
            });
            T = {
                ...T,
                [s]: 2
            }
        }
    })
}