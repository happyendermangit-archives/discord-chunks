function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("967888"),
        o = n("870331");

    function i(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }

    function a(e, t, n) {
        var r = t.trackedActionData,
            a = function(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }(t, ["trackedActionData"]),
            u = {
                url: a.url,
                request_method: n
            };
        return new Promise(function(t, n) {
            e(a).then(function(e) {
                var n = r.properties;
                "function" == typeof r.properties && (n = r.properties(e)), (0, o.trackNetworkAction)(r.event, i({
                    status_code: e.status
                }, u, n)), t(e)
            }).catch(function(e) {
                var t, a, s = r.properties;
                "function" == typeof r.properties && (s = r.properties(e)), (0, o.trackNetworkAction)(r.event, i({
                    status_code: e.status,
                    error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                    error_message: null === (a = e.body) || void 0 === a ? void 0 : a.message
                }, u, s)), n(e)
            })
        })
    }
    t.default = {
        get: function(e) {
            return a(r.HTTP.get, e, "get")
        },
        post: function(e) {
            return a(r.HTTP.post, e, "post")
        },
        put: function(e) {
            return a(r.HTTP.put, e, "put")
        },
        patch: function(e) {
            return a(r.HTTP.patch, e, "patch")
        },
        delete: function(e) {
            return a(r.HTTP.del, e, "del")
        }
    }
}