function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return L
        }
    }), n("222007"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("506083");
    var s, a, i = n("37983"),
        r = n("884691"),
        l = n("730290"),
        o = n("391679"),
        u = n("446674"),
        d = n("872717"),
        c = n("95410"),
        f = n("77078"),
        h = n("913144"),
        E = n("437822"),
        g = n("229353"),
        m = n("271938"),
        _ = n("599110"),
        p = n("718517"),
        R = n("672630"),
        S = n("49111"),
        A = n("201763");
    let T = "mweb_handoff_nonce",
        N = "mweb_handoff_nonce_expiration",
        I = 1 * p.default.Millis.MINUTE;
    (a = s || (s = {})).NONCE_MISSING = "nonce_missing", a.NONCE_EXPIRED = "nonce_expired", a.NULL_HANDOFF_TOKEN = "deep_link_failed", a.HANDOFF_EXCHANGE = "handoff_exchange";
    let C = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
        O = new Set(["deep_link_failed"]),
        v = () => {
            c.default.remove(T), c.default.remove(N)
        };
    var L = () => {
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
        let [p, L] = r.useState(null), x = r.useCallback(e => {
            L(e), _.default.track(S.AnalyticEvents.MOBILE_WEB_HANDOFF_FAILURE, {
                reason: e,
                fingerprint: (0, o.maybeExtractId)(a)
            }, {
                fingerprint: a
            })
        }, [L, a]), M = c.default.get(T);
        if ("null" === n && null === p && x("deep_link_failed"), null != n && "null" !== n && null == M && null === p && x("nonce_missing"), r.useEffect(() => {
                if (null != M) {
                    let e = c.default.get(N);
                    (null == e || Date.now() >= e) && (x("nonce_expired"), v())
                }
            }, [M, x]), r.useEffect(() => {
                null != n && "null" !== n && null != M && null == p && d.default.post({
                    url: S.Endpoints.HANDOFF_EXCHANGE,
                    body: {
                        key: M,
                        handoff_token: n
                    }
                }).then(e => E.default.loginToken(e.body.token, !1)).then(() => {
                    _.default.track(S.AnalyticEvents.LOGIN_SUCCESSFUL, {
                        source: S.LoginSuccessfulSources.MOBILE_WEB_HANDOFF,
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
            }, [n, M, p, a, x]), null == a) return null;
        let y = (() => {
                if (null == p) return (0, i.jsxs)(i.Fragment, {
                    children: [g.MOBILE_WEB_HANDOFF_EXPLANATION_TEXT_LINE_1, (0, i.jsx)("br", {}), g.MOBILE_WEB_HANDOFF_EXPLANATION_TEXT_LINE_2]
                });
                if (O.has(p)) return g.MOBILE_WEB_HANDOFF_ERROR_NO_TRY_AGAIN;
                if (C.has(p)) return g.MOBILE_WEB_HANDOFF_ERROR_TRY_AGAIN
            })(),
            b = null != p && O.has(p);
        return b ? (0, i.jsx)("div", {
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
                    let e = R.default.generateNonce();
                    c.default.set(T, e), c.default.set(N, Date.now() + I);
                    let t = new URL(S.MOBILE_WEB_HANDOFF_DEEP_LINK),
                        n = new URLSearchParams(window.location.search);
                    n.delete("fingerprint"), n.delete("handoff_token");
                    let s = new URLSearchParams;
                    s.set("redirect", encodeURIComponent(window.location.pathname + n.toString())), s.set("key", e), s.set("fingerprint", a), t.search = s.toString(), _.default.track(S.AnalyticEvents.DEEP_LINK_CLICKED, {
                        fingerprint: (0, o.maybeExtractId)(a),
                        source: "mobile_web_handoff",
                        destination: S.MOBILE_WEB_HANDOFF_DEEP_LINK
                    }, {
                        fingerprint: a,
                        flush: !0
                    }), window.location.href = t.toString()
                },
                children: (0, i.jsx)(f.Text, {
                    className: A.buttonText,
                    variant: "text-sm/semibold",
                    children: g.MOBILE_WEB_HANDOFF_BUTTON_TEXT
                })
            })]
        })
    }
}