function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FetchState: function() {
            return o
        }
    });
    var i, r, s, a, o, l, u = n("392711"),
        d = n.n(u),
        _ = n("442837"),
        c = n("570140");
    (i = o || (o = {}))[i.FETCHING = 0] = "FETCHING", i[i.FETCHED = 1] = "FETCHED", i[i.ERROR = 2] = "ERROR";
    let E = {},
        I = {},
        T = {};

    function f(e) {
        let {
            includesInactive: t
        } = e;
        return "includes_inactive:".concat(t)
    }
    class S extends(l = _.default.Store) {
        getLastFetchTimeMs(e) {
            let {
                includesInactive: t
            } = e;
            return T[f({
                includesInactive: t
            })]
        }
        getFetchState(e) {
            let {
                includesInactive: t
            } = e;
            return I[f({
                includesInactive: t
            })]
        }
        getCollections(e) {
            let {
                includesInactive: t
            } = e;
            return E[f({
                includesInactive: t
            })]
        }
    }
    a = void 0, (s = "displayName") in(r = S) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new S(c.default, {
        APPLICATION_DIRECTORY_FETCH_COLLECTIONS: function(e) {
            let {
                includesInactive: t
            } = e;
            I = {
                ...I,
                [f({
                    includesInactive: t
                })]: 0
            }
        },
        APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS: function(e) {
            var t;
            let {
                collections: n,
                includesInactive: i
            } = e, r = f({
                includesInactive: i
            });
            let s = (t = n.map(e => {
                var t;
                return e.application_directory_collection_items = (t = e.application_directory_collection_items, d().sortBy(t, ["position", "id"])), e
            }), d().sortBy(t, ["position", "id"]));
            E = {
                ...E,
                [r]: s
            }, I = {
                ...I,
                [r]: 1
            };
            let a = Date.now();
            T = {
                ...T,
                [r]: a
            }
        },
        APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE: function(e) {
            let {
                includesInactive: t
            } = e;
            I = {
                ...I,
                [f({
                    includesInactive: t
                })]: 2
            }
        }
    })
}