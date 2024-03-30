function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        APIError: function() {
            return i
        }
    });

    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var i = function() {
        var e, t, n;

        function i(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "An unexpected error occurred.";
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, i), o(this, "message", void 0), o(this, "code", void 0), o(this, "retryAfter", void 0), o(this, "fields", void 0), o(this, "error", void 0), o(this, "status", void 0);
            var r = function(e, t) {
                    if ("string" == typeof e) return {
                        message: e,
                        code: t
                    };
                    if (null != e.body) {
                        if (null != e.body.message && !Array.isArray(e.body.message) && (null == e.body.code || !Array.isArray(e.body.code))) return {
                            message: e.body.message,
                            code: e.body.code,
                            retryAfter: e.body.retry_after,
                            status: e.status
                        };
                        var n = e.body,
                            r = null != n ? Object.values(n)[0] : null;
                        return {
                            message: null != r ? r[0] : void 0,
                            fields: n,
                            status: e.status
                        }
                    }
                    return {}
                }(e, t),
                a = r.message,
                u = r.code,
                s = r.retryAfter,
                l = r.fields,
                c = r.status;
            this.message = a || n, this.retryAfter = s, this.code = u || -1, this.fields = l || {}, this.status = c, this.error = Error(a)
        }
        return e = i, t = [{
            key: "getFieldMessage",
            value: function(e) {
                return null != this.fields[e] ? this.fields[e][0] : null
            }
        }], r(e.prototype, t), n && r(e, n), i
    }()
}