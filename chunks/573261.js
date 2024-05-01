function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("544891"),
        r = n("626135");

    function a(e, t, n) {
        let {
            trackedActionData: i,
            ...a
        } = t, s = {
            url: a.url,
            request_method: n
        };
        return new Promise((t, n) => {
            e(a).then(e => {
                let n = i.properties;
                "function" == typeof i.properties && (n = i.properties(e)), (0, r.trackNetworkAction)(i.event, {
                    status_code: e.status,
                    ...s,
                    ...n
                }), t(e)
            }).catch(e => {
                var t, a;
                let o = i.properties;
                "function" == typeof i.properties && (o = i.properties(e)), (0, r.trackNetworkAction)(i.event, {
                    status_code: e.status,
                    error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                    error_message: null === (a = e.body) || void 0 === a ? void 0 : a.message,
                    ...s,
                    ...o
                }), n(e)
            })
        })
    }
    t.default = {
        get: function(e) {
            return a(i.HTTP.get, e, "get")
        },
        post: function(e) {
            return a(i.HTTP.post, e, "post")
        },
        put: function(e) {
            return a(i.HTTP.put, e, "put")
        },
        patch: function(e) {
            return a(i.HTTP.patch, e, "patch")
        },
        delete: function(e) {
            return a(i.HTTP.del, e, "del")
        }
    }
}