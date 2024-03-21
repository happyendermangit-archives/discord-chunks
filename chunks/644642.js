function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        APIError: function() {
            return t
        }
    }), E("70102");
    class t {
        getFieldMessage(e) {
            return null != this.fields[e] ? this.fields[e][0] : null
        }
        constructor(e, _, E = "An unexpected error occurred.") {
            let {
                message: t,
                code: o,
                retryAfter: n,
                fields: r,
                status: a
            } = function(e, _) {
                if ("string" == typeof e) return {
                    message: e,
                    code: _
                };
                if (null != e.body) {
                    if (null != e.body.message && !Array.isArray(e.body.message) && (null == e.body.code || !Array.isArray(e.body.code))) return {
                        message: e.body.message,
                        code: e.body.code,
                        retryAfter: e.body.retry_after,
                        status: e.status
                    };
                    {
                        let _ = e.body,
                            E = null != _ ? Object.values(_)[0] : null;
                        return {
                            message: null != E ? E[0] : void 0,
                            fields: _,
                            status: e.status
                        }
                    }
                }
                return {}
            }(e, _);
            this.message = t || E, this.retryAfter = n, this.code = o || -1, this.fields = r || {}, this.status = a, this.error = Error(t)
        }
    }
}