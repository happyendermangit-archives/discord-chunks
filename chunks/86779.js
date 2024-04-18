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
        g = n("893776"),
        E = n("375964"),
        m = n("314897"),
        p = n("626135"),
        _ = n("70956"),
        S = n("970648"),
        R = n("981631"),
        A = n("691621");
    let N = "mweb_handoff_nonce",
        T = "mweb_handoff_nonce_expiration",
        I = 1 * _.default.Millis.MINUTE;
    (a = s || (s = {})).NONCE_MISSING = "nonce_missing", a.NONCE_EXPIRED = "nonce_expired", a.NULL_HANDOFF_TOKEN = "deep_link_failed", a.HANDOFF_EXCHANGE = "handoff_exchange";
    let C = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
        O = new Set(["deep_link_failed"]),
        v = () => {
            c.Storage.remove(N), c.Storage.remove(T)
        };
    t.default = () => {
        let e = (0, u.useStateFromStores)([m.default], () => m.default.getFingerprint()),
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
        let [_, L] = r.useState(null), x = r.useCallback(e => {
            L(e), p.default.track(R.AnalyticEvents.MOBILE_WEB_HANDOFF_FAILURE, {
                reason: e,
                fingerprint: (0, o.maybeExtractId)(a)
            }, {
                fingerprint: a
            })
        }, [L, a]), b = c.Storage.get(N);
        if ("null" === n && null === _ && x("deep_link_failed"), null != n && "null" !== n && null == b && null === _ && x("nonce_missing"), r.useEffect(() => {
                if (null != b) {
                    let e = c.Storage.get(T);
                    (null == e || Date.now() >= e) && (x("nonce_expired"), v())
                }
            }, [b, x]), r.useEffect(() => {
                null != n && "null" !== n && null != b && null == _ && d.HTTP.post({
                    url: R.Endpoints.HANDOFF_EXCHANGE,
                    body: {
                        key: b,
                        handoff_token: n
                    }
                }).then(e => g.default.loginToken(e.body.token, !1)).then(() => {
                    p.default.track(R.AnalyticEvents.LOGIN_SUCCESSFUL, {
                        source: R.LoginSuccessfulSources.MOBILE_WEB_HANDOFF,
                        is_new_user: !1,
                        fingerprint: (0, o.maybeExtractId)(a)
                    });
                    let e = new URL(window.location.href),
                        t = new URLSearchParams(e.search);
                    t.delete("handoff_token"), t.delete("fingerprint"), e.search = t.toString(), window.history.pushState(null, "", e)
                }).catch(() => {
                    x("handoff_exchange")
                }).finally(() => {
                    v()
                })
            }, [n, b, _, a, x]), null == a) return null;
        let y = (() => {
            if (null == _) return (0, i.jsxs)(i.Fragment, {
                children: [E.MOBILE_WEB_HANDOFF_EXPLANATION_TEXT_LINE_1, (0, i.jsx)("br", {}), E.MOBILE_WEB_HANDOFF_EXPLANATION_TEXT_LINE_2]
            });
            if (O.has(_)) return E.MOBILE_WEB_HANDOFF_ERROR_NO_TRY_AGAIN;
            if (C.has(_)) return E.MOBILE_WEB_HANDOFF_ERROR_TRY_AGAIN
        })();
        return null != _ && O.has(_) ? (0, i.jsx)("div", {
            className: A.errorContainer,
            children: (0, i.jsx)(f.Text, {
                color: "interactive-normal",
                variant: "text-sm/semibold",
                children: y
            })
        }) : (0, i.jsxs)("div", {
            className: A.container,
            children: [(0, i.jsx)(f.Text, {
                variant: "text-sm/semibold",
                children: y
            }), (0, i.jsx)(f.Button, {
                look: f.Button.Looks.INVERTED,
                color: f.Button.Colors.BRAND_NEW,
                onClick: () => {
                    let e = S.default.generateNonce();
                    c.Storage.set(N, e), c.Storage.set(T, Date.now() + I);
                    let t = new URL(R.MOBILE_WEB_HANDOFF_DEEP_LINK),
                        n = new URLSearchParams(window.location.search);
                    n.delete("fingerprint"), n.delete("handoff_token");
                    let s = new URLSearchParams;
                    s.set("redirect", encodeURIComponent(window.location.pathname + n.toString())), s.set("key", e), s.set("fingerprint", a), t.search = s.toString(), p.default.track(R.AnalyticEvents.DEEP_LINK_CLICKED, {
                        fingerprint: (0, o.maybeExtractId)(a),
                        source: "mobile_web_handoff",
                        destination: R.MOBILE_WEB_HANDOFF_DEEP_LINK
                    }, {
                        fingerprint: a,
                        flush: !0
                    }), window.location.href = t.toString()
                },
                children: (0, i.jsx)(f.Text, {
                    className: A.buttonText,
                    variant: "text-sm/semibold",
                    children: E.MOBILE_WEB_HANDOFF_BUTTON_TEXT
                })
            })]
        })
    }
}