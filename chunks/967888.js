function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        HTTP: function() {
            return g
        },
        INVALID_FORM_BODY_ERROR_CODE: function() {
            return u.INVALID_FORM_BODY_ERROR_CODE
        },
        V6OrEarlierAPIError: function() {
            return l.APIError
        },
        V8APIError: function() {
            return u.APIError
        },
        convertSkemaError: function() {
            return s.convertSkemaError
        },
        getAPIBaseURL: function() {
            return b
        },
        setAwaitOnline: function() {
            return P
        },
        setRequestPatch: function() {
            return R
        }
    });
    var r = n("978713"),
        o = n.n(r),
        i = n("235923");
    n("179870");
    var a = n("188129"),
        u = n("41366"),
        s = n("118858");
    n("186564");
    var l = n("139667"),
        c = n("413135").Buffer;

    function f(e) {
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
    var d = new a.Logger("HTTPUtils"),
        _ = new Set([502, 504, 507, 598, 599, 522, 523, 524]);

    function E(e, t, n, r, a) {
        var l, d, p, m, I, h = o()[e](t.url);
        if (null != t.onRequestCreated && t.onRequestCreated(h), null != t.query) {
            var O = t.query;
            if ("object" == typeof O) {
                var T = f({}, O);
                Object.keys(T).map(function(e) {
                    null == T[e] && delete T[e]
                }), O = T
            }
            h.query(O)
        }
        if (t.body && h.send(t.body), null != t.headers && h.set(t.headers), null != t.reason && h.set("X-Audit-Log-Reason", encodeURIComponent(t.reason)), null === (l = t.attachments) || void 0 === l || l.forEach(function(e) {
                h.attach(e.name, e.file, e.filename)
            }), null === (d = t.fields) || void 0 === d || d.forEach(function(e) {
                h.field(e.name, e.value)
            }), null != t.context) {
            var S = function(e) {
                try {
                    return c.from(JSON.stringify(e)).toString("base64")
                } catch (e) {
                    return null
                }
            }(t.context);
            null != S && h.set("X-Context-Properties", S)
        }
        null != t.retried && 0 !== t.retried && h.set("X-Failed-Requests", "".concat(t.retried)), null != t.timeout && 0 !== t.timeout && h.timeout(t.timeout), t.binary && h.responseType("blob"), null != t.onRequestProgress && h.on("progress", function(e) {
            var n;
            null === (n = t.onRequestProgress) || void 0 === n || n.call(t, e)
        });
        var v = function() {
            t.backoff = null != t.backoff ? t.backoff : new i.default, t.retried = (null != t.retried ? t.retried : 0) + 1, t.backoff.fail(function() {
                return C(t.url).then(function() {
                    return E(e, t, n, r, a)
                })
            })
        };
        null == N || null === (p = N.prepareRequest) || void 0 === p || p.call(N, h), h.ok(function(e) {
            return null != e.status
        }), h.then(function(o) {
            if (null != t.retries && t.retries-- > 0 && _.has(o.status)) return v();
            var i, l, c, d = {
                ok: o.ok,
                headers: o.headers,
                body: o.body,
                text: o.text,
                status: o.status
            };
            y(t, d);
            var p = !1,
                m = function(o, i) {
                    var u, s, l = (u = f({}, t), s = (s = {
                        headers: f({}, t.headers, o),
                        interceptResponse: i
                    }, s), Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r)
                        }
                        return n
                    })(Object(s)).forEach(function(e) {
                        Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(s, e))
                    }), u);
                    p = !0, E(e, l, n, r, a)
                },
                I = function(e) {
                    !p && (r(e), null == a || a({
                        ok: !1,
                        hasErr: !0,
                        err: e
                    }))
                };
            if ((null == t ? void 0 : null === (i = t.interceptResponse) || void 0 === i ? void 0 : i.call(t, o, m, I)) !== !0) {
                if ((null == N ? void 0 : null === (l = N.interceptResponse) || void 0 === l ? void 0 : l.call(N, o, m, I)) !== !0) {
                    if (o.ok) n(d);
                    else {
                        if (t.oldFormErrors && (null == d ? void 0 : null === (c = d.body) || void 0 === c ? void 0 : c.code) === u.INVALID_FORM_BODY_ERROR_CODE) {
                            var h = d.body.errors;
                            null != h && (d.body = (0, s.convertSkemaError)(h))
                        }
                        r(d)
                    }
                    null != a && a(f({
                        hasErr: !1
                    }, d))
                }
            }
        }, function(e) {
            null != t.retries && t.retries-- > 0 && "ABORTED" !== e.code ? v() : (y(t), r(e), null != a && a({
                ok: !1,
                hasErr: !0,
                err: e
            }))
        }), (null === (m = t.signal) || void 0 === m ? void 0 : m.aborted) ? h.abort() : null === (I = t.signal) || void 0 === I || I.addEventListener("abort", function() {
            return h.abort()
        }, {
            once: !0
        })
    }
    var p = new Map;

    function m(e) {
        var t = p.get(e);
        if (null == t) {
            d.verbose("rateLimitExpirationHandler: rate limit for", e, "expired, but record was already removed");
            return
        }
        var n = t.queue.shift();
        if (null == n) {
            d.verbose("rateLimitExpirationHandler: removing key for", e), p.delete(e);
            return
        }
        d.verbose("rateLimitExpirationHandler: moving to next record for ", e), n()
    }

    function y(e, t) {
        var n = p.get(e.url);
        if (null != t && 429 === t.status) {
            var r, o, i = (null === (r = t.body) || void 0 === r ? void 0 : r.retry_after) || 5,
                a = Date.now() + 1e3 * i;
            if (null != n) {
                if (n.retryAfterTimestamp < a) d.verbose("cleanupRequestEntry: extending rate limit for ", e.url), clearTimeout(n.timeoutId);
                else {
                    d.verbose("cleanupRequestEntry: already has rate limit for ", e.url);
                    return
                }
            }
            d.verbose("cleanupRequestEntry: rate limit for ".concat(e.url, " retry after ").concat(i, " seconds"));
            var u = setTimeout(function() {
                return m(e.url)
            }, 1e3 * i);
            p.set(e.url, {
                queue: null !== (o = null == n ? void 0 : n.queue) && void 0 !== o ? o : [],
                retryAfterTimestamp: a,
                timeoutId: u
            })
        } else null != n && n.retryAfterTimestamp < Date.now() && (d.verbose("cleanupRequestEntry: rate limit for ", e.url, "expired"), m(e.url))
    }

    function I(e, t, n) {
        return new Promise(function(r, o) {
            "string" == typeof t && (t = {
                url: t
            });
            var i = p.get(t.url);
            null != i ? (d.verbose("makeRequest: queueing request for ", t.url), i.queue.push(E.bind(null, e, t, r, o, n))) : E(e, t, r, o, n)
        })
    }
    var h = I.bind(null, "get"),
        O = I.bind(null, "post"),
        T = I.bind(null, "put"),
        S = I.bind(null, "patch"),
        v = I.bind(null, "del"),
        g = {
            get: h,
            post: O,
            put: T,
            patch: S,
            del: v
        };
    if (n.g.isServerRendering) {
        var A = function(e, t) {
            return Promise.resolve({
                ok: !0,
                status: 200,
                headers: {},
                body: null,
                text: ""
            })
        };
        h = A, O = A, T = A, S = A, v = A
    }

    function b() {
        var e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return "https:" + window.GLOBAL_ENV.API_ENDPOINT + (e ? "/v".concat(window.GLOBAL_ENV.API_VERSION) : "")
    }
    var N = null;

    function R(e) {
        N = e
    }
    var C = function() {
        return Promise.resolve()
    };

    function P(e) {
        C = e
    }
}