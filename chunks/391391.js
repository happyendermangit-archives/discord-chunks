function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("967888"),
        o = n("629815"),
        i = n("323280"),
        a = n("281767");
    t.default = {
        search: function(e, t) {
            null == i.default.getResults(e, t) && (o.default.dispatch({
                type: "INTEGRATION_QUERY",
                integration: e,
                query: t
            }), r.HTTP.get({
                url: a.Endpoints.INTEGRATION_SEARCH("tenor"),
                query: {
                    q: t
                },
                oldFormErrors: !0
            }).then(function(n) {
                o.default.dispatch({
                    type: "INTEGRATION_QUERY_SUCCESS",
                    integration: e,
                    query: t,
                    results: n.body
                })
            }, function() {
                return o.default.dispatch({
                    type: "INTEGRATION_QUERY_FAILURE",
                    integration: e,
                    query: t
                })
            }))
        }
    }
}