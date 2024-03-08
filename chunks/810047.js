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
    var i, l, a = n("917351"),
        s = n.n(a),
        r = n("446674"),
        o = n("913144");
    (i = l || (l = {}))[i.FETCHING = 0] = "FETCHING", i[i.FETCHED = 1] = "FETCHED", i[i.ERROR = 2] = "ERROR";
    let u = {},
        d = {},
        c = {};

    function f(e) {
        let {
            includesInactive: t
        } = e;
        return "includes_inactive:".concat(t)
    }
    class p extends r.default.Store {
        getLastFetchTimeMs(e) {
            let {
                includesInactive: t
            } = e;
            return c[f({
                includesInactive: t
            })]
        }
        getFetchState(e) {
            let {
                includesInactive: t
            } = e;
            return d[f({
                includesInactive: t
            })]
        }
        getCollections(e) {
            let {
                includesInactive: t
            } = e;
            return u[f({
                includesInactive: t
            })]
        }
    }
    var m = new p(o.default, {
        APPLICATION_DIRECTORY_FETCH_COLLECTIONS: function(e) {
            let {
                includesInactive: t
            } = e;
            d = {
                ...d,
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
            } = e, l = f({
                includesInactive: i
            });
            let a = (t = n.map(e => {
                var t;
                return e.application_directory_collection_items = (t = e.application_directory_collection_items, s.sortBy(t, ["position", "id"])), e
            }), s.sortBy(t, ["position", "id"]));
            u = {
                ...u,
                [l]: a
            }, d = {
                ...d,
                [l]: 1
            };
            let r = Date.now();
            c = {
                ...c,
                [l]: r
            }
        },
        APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE: function(e) {
            let {
                includesInactive: t
            } = e;
            d = {
                ...d,
                [f({
                    includesInactive: t
                })]: 2
            }
        }
    })
}