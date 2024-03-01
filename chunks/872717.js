function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return d
        },
        setRequestPatch: function() {
            return M
        },
        setAwaitOnline: function() {
            return P
        }
    }), E("222007"), E("424973");
    var t = E("726581"),
        o = E.n(t),
        n = E("981980");
    E("704744");
    var r = E("811022"),
        i = E("644642"),
        a = E("486196"),
        I = E("614247"),
        s = E("446825").Buffer;
    let T = new r.default("HTTPUtils"),
        S = new Set([502, 504, 507, 598, 599, 522, 523, 524]);

    function N(e, _, E, t, r) {
        var i, T, O, A, l;
        let u = o[e](_.url);
        if (null != _.onRequestCreated && _.onRequestCreated(u), null != _.query) {
            let e = _.query;
            if ("object" == typeof e) {
                let _ = {
                    ...e
                };
                Object.keys(_).map(e => {
                    null == _[e] && delete _[e]
                }), e = _
            }
            u.query(e)
        }
        if (_.body && u.send(_.body), null != _.headers && u.set(_.headers), null != _.reason && u.set("X-Audit-Log-Reason", encodeURIComponent(_.reason)), null === (i = _.attachments) || void 0 === i || i.forEach(e => {
                u.attach(e.name, e.file, e.filename)
            }), null === (T = _.fields) || void 0 === T || T.forEach(e => {
                u.field(e.name, e.value)
            }), null != _.context) {
            let e = function(e) {
                try {
                    return s.from(JSON.stringify(e)).toString("base64")
                } catch (e) {
                    return null
                }
            }(_.context);
            null != e && u.set("X-Context-Properties", e)
        }
        null != _.retried && 0 !== _.retried && u.set("X-Failed-Requests", "".concat(_.retried)), null != _.timeout && 0 !== _.timeout && u.timeout(_.timeout), _.binary && u.responseType("blob"), null != _.onRequestProgress && u.on("progress", e => {
            var E;
            null === (E = _.onRequestProgress) || void 0 === E || E.call(_, e)
        });
        let L = () => {
            _.backoff = null != _.backoff ? _.backoff : new n.default, _.retried = (null != _.retried ? _.retried : 0) + 1, _.backoff.fail(() => h(_.url).then(() => N(e, _, E, t, r)))
        };
        null == U || null === (O = U.prepareRequest) || void 0 === O || O.call(U, u), u.ok(e => null != e.status), u.then(o => {
            var n, i, s;
            if (null != _.retries && _.retries-- > 0 && S.has(o.status)) return L();
            let T = {
                ok: o.ok,
                headers: o.headers,
                body: o.body,
                text: o.text,
                status: o.status
            };
            R(_, T);
            let O = !1,
                A = (o, n) => {
                    let i = {
                        ..._,
                        headers: {
                            ..._.headers,
                            ...o
                        },
                        interceptResponse: n
                    };
                    O = !0, N(e, i, E, t, r)
                },
                l = e => {
                    !O && (t(e), null == r || r({
                        ok: !1,
                        hasErr: !0,
                        err: e
                    }))
                };
            if ((null == _ ? void 0 : null === (n = _.interceptResponse) || void 0 === n ? void 0 : n.call(_, o, A, l)) !== !0) {
                if ((null == U ? void 0 : null === (i = U.interceptResponse) || void 0 === i ? void 0 : i.call(U, o, A, l)) !== !0) {
                    if (o.ok) E(T);
                    else {
                        if (_.oldFormErrors && (null == T ? void 0 : null === (s = T.body) || void 0 === s ? void 0 : s.code) === a.INVALID_FORM_BODY_ERROR_CODE) {
                            let {
                                errors: e
                            } = T.body;
                            null != e && (T.body = (0, I.default)(e))
                        }
                        t(T)
                    }
                    null != r && r({
                        hasErr: !1,
                        ...T
                    })
                }
            }
        }, e => {
            null != _.retries && _.retries-- > 0 && "ABORTED" !== e.code ? L() : (R(_), t(e), null != r && r({
                ok: !1,
                hasErr: !0,
                err: e
            }))
        }), (null === (A = _.signal) || void 0 === A ? void 0 : A.aborted) ? u.abort() : null === (l = _.signal) || void 0 === l || l.addEventListener("abort", () => u.abort(), {
            once: !0
        })
    }
    let O = new Map;

    function A(e) {
        let _ = O.get(e);
        if (null == _) {
            T.verbose("rateLimitExpirationHandler: rate limit for", e, "expired, but record was already removed");
            return
        }
        let E = _.queue.shift();
        if (null == E) {
            T.verbose("rateLimitExpirationHandler: removing key for", e), O.delete(e);
            return
        }
        T.verbose("rateLimitExpirationHandler: moving to next record for ", e), E()
    }

    function R(e, _) {
        let E = O.get(e.url);
        if (null != _ && 429 === _.status) {
            var t, o;
            let n = (null === (t = _.body) || void 0 === t ? void 0 : t.retry_after) || 5,
                r = Date.now() + 1e3 * n;
            if (null != E) {
                if (E.retryAfterTimestamp < r) T.verbose("cleanupRequestEntry: extending rate limit for ", e.url), clearTimeout(E.timeoutId);
                else {
                    T.verbose("cleanupRequestEntry: already has rate limit for ", e.url);
                    return
                }
            }
            T.verbose("cleanupRequestEntry: rate limit for ".concat(e.url, " retry after ").concat(n, " seconds"));
            let i = setTimeout(() => A(e.url), 1e3 * n);
            O.set(e.url, {
                queue: null !== (o = null == E ? void 0 : E.queue) && void 0 !== o ? o : [],
                retryAfterTimestamp: r,
                timeoutId: i
            })
        } else null != E && E.retryAfterTimestamp < Date.now() && (T.verbose("cleanupRequestEntry: rate limit for ", e.url, "expired"), A(e.url))
    }

    function l(e, _, E) {
        return new Promise((t, o) => {
            "string" == typeof _ && (_ = {
                url: _
            });
            let n = O.get(_.url);
            null != n ? (T.verbose("makeRequest: queueing request for ", _.url), n.queue.push(N.bind(null, e, _, t, o, E))) : N(e, _, t, o, E)
        })
    }
    let u = l.bind(null, "get"),
        L = l.bind(null, "post"),
        C = l.bind(null, "put"),
        D = l.bind(null, "patch"),
        c = l.bind(null, "del");
    if (E.g.isServerRendering) {
        let e = (e, _) => Promise.resolve({
            ok: !0,
            status: 200,
            headers: {},
            body: null,
            text: ""
        });
        u = e, L = e, C = e, D = e, c = e
    }
    var d = {
        get: u,
        post: L,
        put: C,
        patch: D,
        delete: c,
        V6OrEarlierAPIError: i.default,
        V8APIError: a.default,
        getAPIBaseURL() {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            return "https:" + window.GLOBAL_ENV.API_ENDPOINT + (e ? "/v".concat(window.GLOBAL_ENV.API_VERSION) : "")
        }
    };
    let U = null;

    function M(e) {
        U = e
    }
    let h = () => Promise.resolve();

    function P(e) {
        h = e
    }
}