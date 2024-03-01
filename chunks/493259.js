function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    }), n("222007");
    var s, i, r = n("917351"),
        a = n.n(r),
        o = n("446674"),
        d = n("913144");
    (i = s || (s = {}))[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCH_SUCCESS = 2] = "FETCH_SUCCESS";
    let u = {},
        l = {};
    class f extends o.default.Store {
        getApplicationAssetFetchState(e) {
            var t;
            return null !== (t = u[e]) && void 0 !== t ? t : 0
        }
        getFetchingIds() {
            return [...Object.entries(u).filter(e => {
                let [, t] = e;
                return 1 === t
            }).map(e => {
                let [t] = e;
                return t
            })]
        }
        getApplicationAssets(e) {
            return l[e]
        }
    }
    f.displayName = "ApplicationAssetsStore";
    var _ = new f(d.default, {
        APPLICATION_ASSETS_FETCH: function(e) {
            let {
                applicationId: t
            } = e;
            u = {
                ...u,
                [t]: 1
            }
        },
        APPLICATION_ASSETS_FETCH_SUCCESS: function(e) {
            let {
                applicationId: t
            } = e;
            u = {
                ...u,
                [t]: 2
            }
        },
        APPLICATION_ASSETS_UPDATE: function(e) {
            let {
                applicationId: t,
                assets: n
            } = e;
            if (null != n) {
                var s;
                l[t] = {
                    assets: null !== (s = a.keyBy(n, "name")) && void 0 !== s ? s : {},
                    lastUpdated: Date.now()
                }
            } else delete l[t]
        },
        EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: function(e) {
            let {
                assets: t
            } = e, n = {
                ...u
            };
            for (let e in t) {
                var s;
                let i = t[e];
                n[e] = 2, l[e] = {
                    assets: null !== (s = a.keyBy(i, "name")) && void 0 !== s ? s : {},
                    lastUpdated: Date.now()
                }
            }
            u = n
        }
    })
}