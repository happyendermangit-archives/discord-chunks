function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var i = n("446674"),
        l = n("913144"),
        a = n("49111");
    let s = {},
        r = {
            integration: "",
            query: ""
        };
    class o extends i.default.Store {
        getResults(e, t) {
            if (null == e || null == t) return null;
            let n = s[e];
            return null != n && null != n[t] ? n[t] : null
        }
        getQuery() {
            return r
        }
    }
    o.displayName = "IntegrationQueryStore";
    var u = new o(l.default, {
        INTEGRATION_QUERY: function(e) {
            var t;
            let {
                integration: n,
                query: i
            } = e;
            s[n] = null !== (t = s[n]) && void 0 !== t ? t : {}, s[n][i] = {
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
            s[t][n] = {
                loading: !1,
                results: i.map(e => ({
                    type: a.ChannelTextAreaIntegrations[t].type,
                    meta: e
                }))
            }, r = {
                query: n,
                integration: t
            }
        },
        INTEGRATION_QUERY_FAILURE: function(e) {
            let {
                integration: t,
                query: n
            } = e;
            delete s[t][n]
        }
    })
}