function(e, t, l) {
    "use strict";
    l.r(t), l.d(t, {
        default: function() {
            return o
        }
    });
    var n = l("872717"),
        r = l("599110");

    function d(e, t, l) {
        let {
            trackedActionData: n,
            ...d
        } = t, o = {
            url: d.url,
            request_method: l
        };
        return new Promise((t, l) => {
            e(d).then(e => {
                let l = n.properties;
                "function" == typeof n.properties && (l = n.properties(e)), (0, r.trackNetworkAction)(n.event, {
                    status_code: e.status,
                    ...o,
                    ...l
                }), t(e)
            }).catch(e => {
                var t, d;
                let a = n.properties;
                "function" == typeof n.properties && (a = n.properties(e)), (0, r.trackNetworkAction)(n.event, {
                    status_code: e.status,
                    error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                    error_message: null === (d = e.body) || void 0 === d ? void 0 : d.message,
                    ...o,
                    ...a
                }), l(e)
            })
        })
    }
    var o = {
        get: function(e) {
            return d(n.default.get, e, "get")
        },
        post: function(e) {
            return d(n.default.post, e, "post")
        },
        put: function(e) {
            return d(n.default.put, e, "put")
        },
        patch: function(e) {
            return d(n.default.patch, e, "patch")
        },
        delete: function(e) {
            return d(n.default.delete, e, "del")
        }
    }
}