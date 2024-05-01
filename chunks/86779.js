function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("315314"), n("610138"), n("216116"), n("78328"), n("815648"), n("773603");
    var s, a, i = n("735250"),
        r = n("470079"),
        l = n("593473"),
        o = n("756647"),
        u = n("442837"),
        d = n("544891"),
        c = n("433517"),
        f = n("481060"),
        h = n("570140"),
        E = n("893776"),
        g = n("375964"),
        _ = n("314897"),
        m = n("626135"),
        p = n("70956"),
        T = n("970648"),
        A = n("981631"),
        I = n("945472");
    let S = "mweb_handoff_nonce",
        N = "mweb_handoff_nonce_expiration",
        R = 1 * p.default.Millis.MINUTE;
    (a = s || (s = {})).NONCE_MISSING = "nonce_missing", a.NONCE_EXPIRED = "nonce_expired", a.NULL_HANDOFF_TOKEN = "deep_link_failed", a.HANDOFF_EXCHANGE = "handoff_exchange";
    let C = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
        O = new Set(["deep_link_failed"]),
        L = () => {
            c.Storage.remove(S), c.Storage.remove(N)
        };
    t.default = () => {
        let e = (0, u.useStateFromStores)([_.default], () => _.default.getFingerprint()),
            {
                fingerprint: t,
                handoff_token: n
            } = (0, l.parse)(window.location.search),
            s = Array.isArray(t) ? t.length > 1 ? t[0] : null : t,
            a = null != s ? s : null !== e ? e : void 0;
        r.useEffect(() => {
            null !== s && e !== s && h.default.dispatch({
                type: "FINGERPRINT",
                fingerprint: s
            })
        }, [s, e]);
        let [p, v] = r.useState(null), M = r.useCallback(e => {
            v(e), m.default.track(A.AnalyticEvents.MOBILE_WEB_HANDOFF_FAILURE, {
                reason: e,
                fingerprint: (0, o.maybeExtractId)(a)
            }, {
                fingerprint: a
            })
        }, [v, a]), x = c.Storage.get(S);
        if ("null" === n && null === p && M("deep_link_failed"), null != n && "null" !== n && null == x && null === p && M("nonce_missing"), r.useEffect(() => {
                if (null != x) {
                    let e = c.Storage.get(N);
                    (null == e || Date.now() >= e) && (M("nonce_expired"), L())
                }
            }, [x, M]), r.useEffect(() => {
                null != n && "null" !== n && null != x && null == p && d.HTTP.post({
                    url: A.Endpoints.HANDOFF_EXCHANGE,
                    body: {
                        key: x,
                        handoff_token: n
                    }
                }).then(e => E.default.loginToken(e.body.token, !1)).then(() => {
                    m.default.track(A.AnalyticEvents.LOGIN_SUCCESSFUL, {
                        source: A.LoginSuccessfulSources.MOBILE_WEB_HANDOFF,
                        is_new_user: !1,
                        fingerprint: (0, o.maybeExtractId)(a)
                    });
                    let e = new URL(window.location.href),
                        t = new URLSearchParams(e.search);
                    t.delete("handoff_token"), t.delete("fingerprint"), e.search = t.toString(), window.history.pushState(null, "", e)
                }).catch(() => {
                    M("handoff_exchange")
                }).finally(() => {
                    L()
                })
            }, [n, x, p, a, M]), null == a) return null;
        let b = (() => {
            if (null == p) return (0, i.jsxs)(i.Fragment, {
                children: [g.MOBILE_WEB_HANDOFF_EXPLANATION_TEXT_LINE_1, (0, i.jsx)("br", {}), g.MOBILE_WEB_HANDOFF_EXPLANATION_TEXT_LINE_2]
            });
            if (O.has(p)) return g.MOBILE_WEB_HANDOFF_ERROR_NO_TRY_AGAIN;
            if (C.has(p)) return g.MOBILE_WEB_HANDOFF_ERROR_TRY_AGAIN
        })();
        return null != p && O.has(p) ? (0, i.jsx)("div", {
            className: I.errorContainer,
            children: (0, i.jsx)(f.Text, {
                color: "interactive-normal",
                variant: "text-sm/semibold",
                children: b
            })
        }) : (0, i.jsxs)("div", {
            className: I.container,
            children: [(0, i.jsx)(f.Text, {
                variant: "text-sm/semibold",
                children: b
            }), (0, i.jsx)(f.Button, {
                look: f.Button.Looks.INVERTED,
                color: f.Button.Colors.BRAND_NEW,
                onClick: () => {
                    let e = T.default.generateNonce();
                    c.Storage.set(S, e), c.Storage.set(N, Date.now() + R);
                    let t = new URL(A.MOBILE_WEB_HANDOFF_DEEP_LINK),
                        n = new URLSearchParams(window.location.search);
                    n.delete("fingerprint"), n.delete("handoff_token");
                    let s = new URLSearchParams;
                    s.set("redirect", encodeURIComponent(window.location.pathname + n.toString())), s.set("key", e), s.set("fingerprint", a), t.search = s.toString(), m.default.track(A.AnalyticEvents.DEEP_LINK_CLICKED, {
                        fingerprint: (0, o.maybeExtractId)(a),
                        source: "mobile_web_handoff",
                        destination: A.MOBILE_WEB_HANDOFF_DEEP_LINK
                    }, {
                        fingerprint: a,
                        flush: !0
                    }), window.location.href = t.toString()
                },
                children: (0, i.jsx)(f.Text, {
                    className: I.buttonText,
                    variant: "text-sm/semibold",
                    children: g.MOBILE_WEB_HANDOFF_BUTTON_TEXT
                })
            })]
        })
    }
}