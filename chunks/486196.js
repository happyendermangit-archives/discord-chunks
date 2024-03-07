function(e, _, E) {
    "use strict";
    var t, o, n;
    E.r(_), E.d(_, {
        INVALID_FORM_BODY_ERROR_CODE: function() {
            return r
        },
        CaptchaTypes: function() {
            return t
        },
        default: function() {
            return o
        }
    }), E("222007");
    let r = 50035;

    function a(e) {
        return e.map(e => ({
            code: "UNKNOWN",
            message: e
        }))
    }(n = t || (t = {})).HCAPTCHA = "hcaptcha", n.RECAPTCHA = "recaptcha";
    o = class {
        hasFieldErrors() {
            return null != this.errors && Object.keys(this.errors).length > 0
        }
        getFieldErrors(e) {
            "string" == typeof e && (e = [e]);
            let _ = this.errors;
            for (; e.length > 0 && null != _;) _ = _[e[0]], e = e.splice(1);
            return null == _ ? void 0 : _._errors
        }
        getFirstFieldErrorMessage(e) {
            let _ = this.getFieldErrors(e);
            return null == _ || _.length < 1 ? null : _[0].message
        }
        getAnyErrorMessage() {
            var e, _;
            return null !== (_ = null === (e = this.getAnyErrorMessageAndField()) || void 0 === e ? void 0 : e.error) && void 0 !== _ ? _ : this.message
        }
        getAnyErrorMessageAndField() {
            let e = this.errors,
                _ = null;
            for (; null != e;) {
                if (null != e._errors) return {
                    fieldName: _,
                    error: e._errors[0].message
                };
                _ = Object.keys(e)[0], e = e[_]
            }
            return null
        }
        constructor(e, _, E = "An unexpected error occurred.") {
            let {
                message: t,
                code: o,
                retryAfter: n,
                errors: i,
                status: I,
                captchaFields: s
            } = function(e, _) {
                if ("string" == typeof e) return {
                    message: e,
                    code: _
                };
                if (null == e.body) return {
                    status: e.status
                };
                let E = e.body;
                return null == e.body.message || Array.isArray(e.body.message) || null != e.body.code && Array.isArray(e.body.code) ? null != E && "captcha_key" in E ? {
                    code: -1,
                    captchaFields: E,
                    status: e.status,
                    message: E.captcha_key.length > 0 ? E.captcha_key[0] : void 0
                } : {
                    status: e.status,
                    code: r,
                    errors: function(e) {
                        let _ = {};
                        for (let [E, t] of Object.entries(e)) {
                            if ("_misc" === E) {
                                _._errors = a(t);
                                continue
                            }
                            let e = {};
                            e._errors = a(t), _[E] = e
                        }
                        return _
                    }(E)
                } : {
                    message: E.message,
                    code: E.code,
                    retryAfter: E.retry_after,
                    errors: E.errors,
                    status: e.status
                }
            }(e, _);
            this.message = null != t ? t : E, this.code = null != o ? o : -1, this.retryAfter = n, this.errors = i, this.status = I, this.captchaFields = null != s ? s : {}
        }
    }
}