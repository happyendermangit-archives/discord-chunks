function(e, t, n) {
    "use strict";

    function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    n.r(t), n.d(t, {
        APIError: function() {
            return r
        }
    }), n("411104");
    class r {
        getFieldMessage(e) {
            return null != this.fields[e] ? this.fields[e][0] : null
        }
        constructor(e, t, n = "An unexpected error occurred.") {
            i(this, "message", void 0), i(this, "code", void 0), i(this, "retryAfter", void 0), i(this, "fields", void 0), i(this, "error", void 0), i(this, "status", void 0);
            let {
                message: r,
                code: a,
                retryAfter: s,
                fields: o,
                status: l
            } = function(e, t) {
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
                    {
                        let t = e.body,
                            n = null != t ? Object.values(t)[0] : null;
                        return {
                            message: null != n ? n[0] : void 0,
                            fields: t,
                            status: e.status
                        }
                    }
                }
                return {}
            }(e, t);
            this.message = r || n, this.retryAfter = s, this.code = a || -1, this.fields = o || {}, this.status = l, this.error = Error(r)
        }
    }
}