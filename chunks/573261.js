function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("544891"),
        r = n("626135");

    function s(e, t, n) {
        let {
            trackedActionData: i,
            ...s
        } = t, a = {
            url: s.url,
            request_method: n
        };
        return new Promise((t, n) => {
            e(s).then(e => {
                let n = i.properties;
                "function" == typeof i.properties && (n = i.properties(e)), (0, r.trackNetworkAction)(i.event, {
                    status_code: e.status,
                    ...a,
                    ...n
                }), t(e)
            }).catch(e => {
                var t, s;
                let o = i.properties;
                "function" == typeof i.properties && (o = i.properties(e)), (0, r.trackNetworkAction)(i.event, {
                    status_code: e.status,
                    error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                    error_message: null === (s = e.body) || void 0 === s ? void 0 : s.message,
                    ...a,
                    ...o
                }), n(e)
            })
        })
    }
    t.default = {
        get: function(e) {
            return s(i.HTTP.get, e, "get")
        },
        post: function(e) {
            return s(i.HTTP.post, e, "post")
        },
        put: function(e) {
            return s(i.HTTP.put, e, "put")
        },
        patch: function(e) {
            return s(i.HTTP.patch, e, "patch")
        },
        delete: function(e) {
            return s(i.HTTP.del, e, "del")
        }
    }
}