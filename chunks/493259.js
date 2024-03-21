function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    }), n("222007");
    var i, s, r = n("917351"),
        a = n.n(r),
        o = n("446674"),
        l = n("913144");
    (s = i || (i = {}))[s.NOT_FETCHED = 0] = "NOT_FETCHED", s[s.FETCHING = 1] = "FETCHING", s[s.FETCH_SUCCESS = 2] = "FETCH_SUCCESS";
    let u = {},
        d = {};
    class c extends o.default.Store {
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
            return d[e]
        }
    }
    c.displayName = "ApplicationAssetsStore";
    var _ = new c(l.default, {
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
                var i;
                d[t] = {
                    assets: null !== (i = a.keyBy(n, "name")) && void 0 !== i ? i : {},
                    lastUpdated: Date.now()
                }
            } else delete d[t]
        },
        EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: function(e) {
            let {
                assets: t
            } = e, n = {
                ...u
            };
            for (let e in t) {
                var i;
                let s = t[e];
                n[e] = 2, d[e] = {
                    assets: null !== (i = a.keyBy(s, "name")) && void 0 !== i ? i : {},
                    lastUpdated: Date.now()
                }
            }
            u = n
        }
    })
}