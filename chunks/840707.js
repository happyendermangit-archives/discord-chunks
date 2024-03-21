function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("872717"),
        s = n("599110");

    function r(e, t, n) {
        let {
            trackedActionData: i,
            ...r
        } = t, a = {
            url: r.url,
            request_method: n
        };
        return new Promise((t, n) => {
            e(r).then(e => {
                let n = i.properties;
                "function" == typeof i.properties && (n = i.properties(e)), (0, s.trackNetworkAction)(i.event, {
                    status_code: e.status,
                    ...a,
                    ...n
                }), t(e)
            }).catch(e => {
                var t, r;
                let o = i.properties;
                "function" == typeof i.properties && (o = i.properties(e)), (0, s.trackNetworkAction)(i.event, {
                    status_code: e.status,
                    error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                    error_message: null === (r = e.body) || void 0 === r ? void 0 : r.message,
                    ...a,
                    ...o
                }), n(e)
            })
        })
    }
    var a = {
        get: function(e) {
            return r(i.HTTP.get, e, "get")
        },
        post: function(e) {
            return r(i.HTTP.post, e, "post")
        },
        put: function(e) {
            return r(i.HTTP.put, e, "put")
        },
        patch: function(e) {
            return r(i.HTTP.patch, e, "patch")
        },
        delete: function(e) {
            return r(i.HTTP.del, e, "del")
        }
    }
}