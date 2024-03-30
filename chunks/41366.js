function(e, t, n) {
    "use strict";

    function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    n.r(t), n.d(t, {
        APIError: function() {
            return c
        },
        CaptchaTypes: function() {
            return u
        },
        INVALID_FORM_BODY_ERROR_CODE: function() {
            return s
        }
    });

    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var a, u, s = 50035;

    function l(e) {
        return e.map(function(e) {
            return {
                code: "UNKNOWN",
                message: e
            }
        })
    }(a = u || (u = {})).HCAPTCHA = "hcaptcha", a.RECAPTCHA = "recaptcha";
    var c = function() {
        var e, t, n;

        function a(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "An unexpected error occurred.";
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, a), i(this, "message", void 0), i(this, "code", void 0), i(this, "retryAfter", void 0), i(this, "errors", void 0), i(this, "status", void 0), i(this, "captchaFields", void 0);
            var o = function(e, t) {
                    if ("string" == typeof e) return {
                        message: e,
                        code: t
                    };
                    if (null == e.body) return {
                        status: e.status
                    };
                    var n = e.body;
                    return null == e.body.message || Array.isArray(e.body.message) || null != e.body.code && Array.isArray(e.body.code) ? null != n && "captcha_key" in n ? {
                        code: -1,
                        captchaFields: n,
                        status: e.status,
                        message: n.captcha_key.length > 0 ? n.captcha_key[0] : void 0
                    } : {
                        status: e.status,
                        code: s,
                        errors: function(e) {
                            var t = {},
                                n = !0,
                                o = !1,
                                i = void 0;
                            try {
                                for (var a, u = Object.entries(e)[Symbol.iterator](); !(n = (a = u.next()).done); n = !0) {
                                    var s, c, f = (s = a.value, c = 2, function(e) {
                                            if (Array.isArray(e)) return e
                                        }(s) || function(e, t) {
                                            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                            if (null != o) {
                                                var i = [],
                                                    a = !0,
                                                    u = !1;
                                                try {
                                                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                                                } catch (e) {
                                                    u = !0, r = e
                                                } finally {
                                                    try {
                                                        !a && null != o.return && o.return()
                                                    } finally {
                                                        if (u) throw r
                                                    }
                                                }
                                                return i
                                            }
                                        }(s, c) || function(e, t) {
                                            if (e) {
                                                if ("string" == typeof e) return r(e, t);
                                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t)
                                            }
                                        }(s, c) || function() {
                                            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                        }()),
                                        d = f[0],
                                        _ = f[1];
                                    if ("_misc" === d) {
                                        t._errors = l(_);
                                        continue
                                    }
                                    var E = {};
                                    E._errors = l(_), t[d] = E
                                }
                            } catch (e) {
                                o = !0, i = e
                            } finally {
                                try {
                                    !n && null != u.return && u.return()
                                } finally {
                                    if (o) throw i
                                }
                            }
                            return t
                        }(n)
                    } : {
                        message: n.message,
                        code: n.code,
                        retryAfter: n.retry_after,
                        errors: n.errors,
                        status: e.status
                    }
                }(e, t),
                u = o.message,
                c = o.code,
                f = o.retryAfter,
                d = o.errors,
                _ = o.status,
                E = o.captchaFields;
            this.message = null != u ? u : n, this.code = null != c ? c : -1, this.retryAfter = f, this.errors = d, this.status = _, this.captchaFields = null != E ? E : {}
        }
        return e = a, t = [{
            key: "hasFieldErrors",
            value: function() {
                return null != this.errors && Object.keys(this.errors).length > 0
            }
        }, {
            key: "getFieldErrors",
            value: function(e) {
                "string" == typeof e && (e = [e]);
                for (var t = this.errors; e.length > 0 && null != t;) t = t[e[0]], e = e.splice(1);
                return null == t ? void 0 : t._errors
            }
        }, {
            key: "getFirstFieldErrorMessage",
            value: function(e) {
                var t = this.getFieldErrors(e);
                return null == t || t.length < 1 ? null : t[0].message
            }
        }, {
            key: "getAnyErrorMessage",
            value: function() {
                var e, t;
                return null !== (t = null === (e = this.getAnyErrorMessageAndField()) || void 0 === e ? void 0 : e.error) && void 0 !== t ? t : this.message
            }
        }, {
            key: "getAnyErrorMessageAndField",
            value: function() {
                for (var e = this.errors, t = null; null != e;) {
                    if (null != e._errors) return {
                        fieldName: t,
                        error: e._errors[0].message
                    };
                    t = Object.keys(e)[0], e = e[t]
                }
                return null
            }
        }], o(e.prototype, t), n && o(e, n), a
    }()
}