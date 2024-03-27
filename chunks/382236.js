function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return M
        }
    }), n("222007"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("506083");
    var s, a, r = n("37983"),
        l = n("884691"),
        i = n("730290"),
        o = n("391679"),
        u = n("446674"),
        d = n("872717"),
        c = n("95410"),
        E = n("77078"),
        f = n("913144"),
        _ = n("437822"),
        h = n("229353"),
        g = n("271938"),
        m = n("599110"),
        p = n("718517"),
        T = n("672630"),
        I = n("49111"),
        A = n("201763");
    let S = "mweb_handoff_nonce",
        R = "mweb_handoff_nonce_expiration",
        N = 1 * p.default.Millis.MINUTE;
    (a = s || (s = {})).NONCE_MISSING = "nonce_missing", a.NONCE_EXPIRED = "nonce_expired", a.NULL_HANDOFF_TOKEN = "deep_link_failed", a.HANDOFF_EXCHANGE = "handoff_exchange";
    let C = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
        O = new Set(["deep_link_failed"]),
        L = () => {
            c.Storage.remove(S), c.Storage.remove(R)
        };
    var M = () => {
        let e = (0, u.useStateFromStores)([g.default], () => g.default.getFingerprint()),
            {
                fingerprint: t,
                handoff_token: n
            } = (0, i.parse)(window.location.search),
            s = Array.isArray(t) ? t.length > 1 ? t[0] : null : t,
            a = null != s ? s : null !== e ? e : void 0;
        l.useEffect(() => {
            null !== s && e !== s && f.default.dispatch({
                type: "FINGERPRINT",
                fingerprint: s
            })
        }, [s, e]);
        let [p, M] = l.useState(null), v = l.useCallback(e => {
            M(e), m.default.track(I.AnalyticEvents.MOBILE_WEB_HANDOFF_FAILURE, {
                reason: e,
                fingerprint: (0, o.maybeExtractId)(a)
            }, {
                fingerprint: a
            })
        }, [M, a]), D = c.Storage.get(S);
        if ("null" === n && null === p && v("deep_link_failed"), null != n && "null" !== n && null == D && null === p && v("nonce_missing"), l.useEffect(() => {
                if (null != D) {
                    let e = c.Storage.get(R);
                    (null == e || Date.now() >= e) && (v("nonce_expired"), L())
                }
            }, [D, v]), l.useEffect(() => {
                null != n && "null" !== n && null != D && null == p && d.HTTP.post({
                    url: I.Endpoints.HANDOFF_EXCHANGE,
                    body: {
                        key: D,
                        handoff_token: n
                    }
                }).then(e => _.default.loginToken(e.body.token, !1)).then(() => {
                    m.default.track(I.AnalyticEvents.LOGIN_SUCCESSFUL, {
                        source: I.LoginSuccessfulSources.MOBILE_WEB_HANDOFF,
                        is_new_user: !1,
                        fingerprint: (0, o.maybeExtractId)(a)
                    });
                    let e = new URL(window.location.href),
                        t = new URLSearchParams(e.search);
                    t.delete("handoff_token"), t.delete("fingerprint"), e.search = t.toString(), window.history.pushState(null, "", e)
                }).catch(() => {
                    v("handoff_exchange")
                }).finally(() => {
                    L()
                })
            }, [n, D, p, a, v]), null == a) return null;
        let x = (() => {
                if (null == p) return (0, r.jsxs)(r.Fragment, {
                    children: [h.MOBILE_WEB_HANDOFF_EXPLANATION_TEXT_LINE_1, (0, r.jsx)("br", {}), h.MOBILE_WEB_HANDOFF_EXPLANATION_TEXT_LINE_2]
                });
                if (O.has(p)) return h.MOBILE_WEB_HANDOFF_ERROR_NO_TRY_AGAIN;
                if (C.has(p)) return h.MOBILE_WEB_HANDOFF_ERROR_TRY_AGAIN
            })(),
            U = null != p && O.has(p);
        return U ? (0, r.jsx)("div", {
            className: A.errorContainer,
            children: (0, r.jsx)(E.Text, {
                color: "interactive-normal",
                variant: "text-sm/semibold",
                children: x
            })
        }) : (0, r.jsxs)("div", {
            className: A.container,
            children: [(0, r.jsx)(E.Text, {
                variant: "text-sm/semibold",
                children: x
            }), (0, r.jsx)(E.Button, {
                look: E.Button.Looks.INVERTED,
                color: E.Button.Colors.BRAND_NEW,
                onClick: () => {
                    let e = T.default.generateNonce();
                    c.Storage.set(S, e), c.Storage.set(R, Date.now() + N);
                    let t = new URL(I.MOBILE_WEB_HANDOFF_DEEP_LINK),
                        n = new URLSearchParams(window.location.search);
                    n.delete("fingerprint"), n.delete("handoff_token");
                    let s = new URLSearchParams;
                    s.set("redirect", encodeURIComponent(window.location.pathname + n.toString())), s.set("key", e), s.set("fingerprint", a), t.search = s.toString(), m.default.track(I.AnalyticEvents.DEEP_LINK_CLICKED, {
                        fingerprint: (0, o.maybeExtractId)(a),
                        source: "mobile_web_handoff",
                        destination: I.MOBILE_WEB_HANDOFF_DEEP_LINK
                    }, {
                        fingerprint: a,
                        flush: !0
                    }), window.location.href = t.toString()
                },
                children: (0, r.jsx)(E.Text, {
                    className: A.buttonText,
                    variant: "text-sm/semibold",
                    children: h.MOBILE_WEB_HANDOFF_BUTTON_TEXT
                })
            })]
        })
    }
}