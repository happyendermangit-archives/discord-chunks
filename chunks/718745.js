function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r, s, a, o = n("442837"),
        l = n("570140"),
        u = n("981631");
    let d = {},
        _ = {
            integration: "",
            query: ""
        };
    class c extends(a = o.default.Store) {
        getResults(e, t) {
            if (null == e || null == t) return null;
            let n = d[e];
            return null != n && null != n[t] ? n[t] : null
        }
        getQuery() {
            return _
        }
    }
    s = "IntegrationQueryStore", (r = "displayName") in(i = c) ? Object.defineProperty(i, r, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = s, t.default = new c(l.default, {
        INTEGRATION_QUERY: function(e) {
            var t;
            let {
                integration: n,
                query: i
            } = e;
            d[n] = null !== (t = d[n]) && void 0 !== t ? t : {}, d[n][i] = {
                loading: !0,
                results: []
            }
        },
        INTEGRATION_QUERY_SUCCESS: function(e) {
            let {
                integration: t,
                query: n,
                results: i
            } = e;
            d[t][n] = {
                loading: !1,
                results: i.map(e => ({
                    type: u.ChannelTextAreaIntegrations[t].type,
                    meta: e
                }))
            }, _ = {
                query: n,
                integration: t
            }
        },
        INTEGRATION_QUERY_FAILURE: function(e) {
            let {
                integration: t,
                query: n
            } = e;
            delete d[t][n]
        }
    })
}