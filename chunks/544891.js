function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        HTTP: function() {
            return O
        },
        INVALID_FORM_BODY_ERROR_CODE: function() {
            return o.INVALID_FORM_BODY_ERROR_CODE
        },
        V6OrEarlierAPIError: function() {
            return u.APIError
        },
        V8APIError: function() {
            return o.APIError
        },
        convertSkemaError: function() {
            return l.convertSkemaError
        },
        getAPIBaseURL: function() {
            return R
        },
        setAwaitOnline: function() {
            return v
        },
        setRequestPatch: function() {
            return g
        }
    }), n("47120"), n("653041");
    var i = n("978713"),
        r = n.n(i),
        a = n("261470");
    n("17089");
    var s = n("259443"),
        o = n("343817"),
        l = n("357280");
    n("380094");
    var u = n("817109"),
        d = n("413135").Buffer;
    let _ = new s.Logger("HTTPUtils"),
        c = new Set([502, 504, 507, 598, 599, 522, 523, 524]);

    function E(e, t, n, i, s) {
        var u, _, I, T, S;
        let h = r()[e](t.url);
        if (null != t.onRequestCreated && t.onRequestCreated(h), null != t.query) {
            let e = t.query;
            if ("object" == typeof e) {
                let t = {
                    ...e
                };
                Object.keys(t).map(e => {
                    null == t[e] && delete t[e]
                }), e = t
            }
            h.query(e)
        }
        if (t.body && h.send(t.body), null != t.headers && h.set(t.headers), null != t.reason && h.set("X-Audit-Log-Reason", encodeURIComponent(t.reason)), null === (u = t.attachments) || void 0 === u || u.forEach(e => {
                h.attach(e.name, e.file, e.filename)
            }), null === (_ = t.fields) || void 0 === _ || _.forEach(e => {
                h.field(e.name, e.value)
            }), null != t.context) {
            let e = function(e) {
                try {
                    return d.from(JSON.stringify(e)).toString("base64")
                } catch (e) {
                    return null
                }
            }(t.context);
            null != e && h.set("X-Context-Properties", e)
        }
        null != t.retried && 0 !== t.retried && h.set("X-Failed-Requests", "".concat(t.retried)), null != t.timeout && 0 !== t.timeout && h.timeout(t.timeout), t.binary && h.responseType("blob"), null != t.onRequestProgress && h.on("progress", e => {
            var n;
            null === (n = t.onRequestProgress) || void 0 === n || n.call(t, e)
        });
        let A = () => {
            t.backoff = null != t.backoff ? t.backoff : new a.default, t.retried = (null != t.retried ? t.retried : 0) + 1, t.backoff.fail(() => L(t.url).then(() => E(e, t, n, i, s)))
        };
        null == C || null === (I = C.prepareRequest) || void 0 === I || I.call(C, h), h.ok(e => null != e.status), h.then(r => {
            var a, u, d;
            if (null != t.retries && t.retries-- > 0 && c.has(r.status)) return A();
            let _ = {
                ok: r.ok,
                headers: r.headers,
                body: r.body,
                text: r.text,
                status: r.status
            };
            f(t, _);
            let I = !1,
                T = (r, a) => {
                    let o = {
                        ...t,
                        headers: {
                            ...t.headers,
                            ...r
                        },
                        interceptResponse: a
                    };
                    I = !0, E(e, o, n, i, s)
                },
                S = e => {
                    !I && (i(e), null == s || s({
                        ok: !1,
                        hasErr: !0,
                        err: e
                    }))
                };
            if ((null == t ? void 0 : null === (a = t.interceptResponse) || void 0 === a ? void 0 : a.call(t, r, T, S)) !== !0) {
                if ((null == C ? void 0 : null === (u = C.interceptResponse) || void 0 === u ? void 0 : u.call(C, r, T, S)) !== !0) {
                    if (r.ok) n(_);
                    else {
                        if (t.oldFormErrors && (null == _ ? void 0 : null === (d = _.body) || void 0 === d ? void 0 : d.code) === o.INVALID_FORM_BODY_ERROR_CODE) {
                            let {
                                errors: e
                            } = _.body;
                            null != e && (_.body = (0, l.convertSkemaError)(e))
                        }
                        i(_)
                    }
                    null != s && s({
                        hasErr: !1,
                        ..._
                    })
                }
            }
        }, e => {
            null != t.retries && t.retries-- > 0 && "ABORTED" !== e.code ? A() : (f(t), i(e), null != s && s({
                ok: !1,
                hasErr: !0,
                err: e
            }))
        }), (null === (T = t.signal) || void 0 === T ? void 0 : T.aborted) ? h.abort() : null === (S = t.signal) || void 0 === S || S.addEventListener("abort", () => h.abort(), {
            once: !0
        })
    }
    let I = new Map;

    function T(e) {
        let t = I.get(e);
        if (null == t) {
            _.verbose("rateLimitExpirationHandler: rate limit for", e, "expired, but record was already removed");
            return
        }
        let n = t.queue.shift();
        if (null == n) {
            _.verbose("rateLimitExpirationHandler: removing key for", e), I.delete(e);
            return
        }
        _.verbose("rateLimitExpirationHandler: moving to next record for ", e), n()
    }

    function f(e, t) {
        let n = I.get(e.url);
        if (null != t && 429 === t.status) {
            var i, r;
            let a = (null === (i = t.body) || void 0 === i ? void 0 : i.retry_after) || 5,
                s = Date.now() + 1e3 * a;
            if (null != n) {
                if (n.retryAfterTimestamp < s) _.verbose("cleanupRequestEntry: extending rate limit for ", e.url), clearTimeout(n.timeoutId);
                else {
                    _.verbose("cleanupRequestEntry: already has rate limit for ", e.url);
                    return
                }
            }
            _.verbose("cleanupRequestEntry: rate limit for ".concat(e.url, " retry after ").concat(a, " seconds"));
            let o = setTimeout(() => T(e.url), 1e3 * a);
            I.set(e.url, {
                queue: null !== (r = null == n ? void 0 : n.queue) && void 0 !== r ? r : [],
                retryAfterTimestamp: s,
                timeoutId: o
            })
        } else null != n && n.retryAfterTimestamp < Date.now() && (_.verbose("cleanupRequestEntry: rate limit for ", e.url, "expired"), T(e.url))
    }

    function S(e, t, n) {
        return new Promise((i, r) => {
            "string" == typeof t && (t = {
                url: t
            });
            let a = I.get(t.url);
            null != a ? (_.verbose("makeRequest: queueing request for ", t.url), a.queue.push(E.bind(null, e, t, i, r, n))) : E(e, t, i, r, n)
        })
    }
    let h = S.bind(null, "get"),
        A = S.bind(null, "post"),
        m = S.bind(null, "put"),
        N = S.bind(null, "patch"),
        p = S.bind(null, "del"),
        O = {
            get: h,
            post: A,
            put: m,
            patch: N,
            del: p
        };
    if (n.g.isServerRendering) {
        let e = (e, t) => Promise.resolve({
            ok: !0,
            status: 200,
            headers: {},
            body: null,
            text: ""
        });
        h = e, A = e, m = e, N = e, p = e
    }

    function R() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return "https:" + window.GLOBAL_ENV.API_ENDPOINT + (e ? "/v".concat(window.GLOBAL_ENV.API_VERSION) : "")
    }
    let C = null;

    function g(e) {
        C = e
    }
    let L = () => Promise.resolve();

    function v(e) {
        L = e
    }
}