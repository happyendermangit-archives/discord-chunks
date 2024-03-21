function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var i = n("872717"),
        l = n("913144"),
        a = n("318981"),
        s = n("49111"),
        r = {
            search(e, t) {
                null == a.default.getResults(e, t) && (l.default.dispatch({
                    type: "INTEGRATION_QUERY",
                    integration: e,
                    query: t
                }), i.HTTP.get({
                    url: s.Endpoints.INTEGRATION_SEARCH("tenor"),
                    query: {
                        q: t
                    },
                    oldFormErrors: !0
                }).then(n => {
                    l.default.dispatch({
                        type: "INTEGRATION_QUERY_SUCCESS",
                        integration: e,
                        query: t,
                        results: n.body
                    })
                }, () => l.default.dispatch({
                    type: "INTEGRATION_QUERY_FAILURE",
                    integration: e,
                    query: t
                })))
            }
        }
}