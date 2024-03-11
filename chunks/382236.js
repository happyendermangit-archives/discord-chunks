function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return L
        }
    }), n("222007"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("506083");
    var s, a, r = n("37983"),
        l = n("884691"),
        i = n("730290"),
        o = n("391679"),
        u = n("446674"),
        d = n("872717"),
        c = n("95410"),
        f = n("77078"),
        E = n("913144"),
        h = n("437822"),
        _ = n("229353"),
        g = n("271938"),
        m = n("599110"),
        p = n("718517"),
        I = n("672630"),
        T = n("49111"),
        N = n("201763");
    let A = "mweb_handoff_nonce",
        S = "mweb_handoff_nonce_expiration",
        R = 1 * p.default.Millis.MINUTE;
    (a = s || (s = {})).NONCE_MISSING = "nonce_missing", a.NONCE_EXPIRED = "nonce_expired", a.NULL_HANDOFF_TOKEN = "deep_link_failed", a.HANDOFF_EXCHANGE = "handoff_exchange";
    let C = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
        O = new Set(["deep_link_failed"]),
        v = () => {
            c.default.remove(A), c.default.remove(S)
        };
    var L = () => {
        let e = (0, u.useStateFromStores)([g.default], () => g.default.getFingerprint()),
            {
                fingerprint: t,
                handoff_token: n
            } = (0, i.parse)(window.location.search),
            s = Array.isArray(t) ? t.length > 1 ? t[0] : null : t,
            a = null != s ? s : null !== e ? e : void 0;
        l.useEffect(() => {
            null !== s && e !== s && E.default.dispatch({
                type: "FINGERPRINT",
                fingerprint: s
            })
        }, [s, e]);
        let [p, L] = l.useState(null), M = l.useCallback(e => {
            L(e), m.default.track(T.AnalyticEvents.MOBILE_WEB_HANDOFF_FAILURE, {
                reason: e,
                fingerprint: (0, o.maybeExtractId)(a)
            }, {
                fingerprint: a
            })
        }, [L, a]), x = c.default.get(A);
        if ("null" === n && null === p && M("deep_link_failed"), null != n && "null" !== n && null == x && null === p && M("nonce_missing"), l.useEffect(() => {
                if (null != x) {
                    let e = c.default.get(S);
                    (null == e || Date.now() >= e) && (M("nonce_expired"), v())
                }
            }, [x, M]), l.useEffect(() => {
                null != n && "null" !== n && null != x && null == p && d.default.post({
                    url: T.Endpoints.HANDOFF_EXCHANGE,
                    body: {
                        key: x,
                        handoff_token: n
                    }
                }).then(e => h.default.loginToken(e.body.token, !1)).then(() => {
                    m.default.track(T.AnalyticEvents.LOGIN_SUCCESSFUL, {
                        source: T.LoginSuccessfulSources.MOBILE_WEB_HANDOFF,
                        is_new_user: !1,
                        fingerprint: (0, o.maybeExtractId)(a)
                    });
                    let e = new URL(window.location.href),
                        t = new URLSearchParams(e.search);
                    t.delete("handoff_token"), t.delete("fingerprint"), e.search = t.toString(), window.history.pushState(null, "", e)
                }).catch(() => {
                    M("handoff_exchange")
                }).finally(() => {
                    v()
                })
            }, [n, x, p, a, M]), null == a) return null;
        let y = (() => {
                if (null == p) return (0, r.jsxs)(r.Fragment, {
                    children: [_.MOBILE_WEB_HANDOFF_EXPLANATION_TEXT_LINE_1, (0, r.jsx)("br", {}), _.MOBILE_WEB_HANDOFF_EXPLANATION_TEXT_LINE_2]
                });
                if (O.has(p)) return _.MOBILE_WEB_HANDOFF_ERROR_NO_TRY_AGAIN;
                if (C.has(p)) return _.MOBILE_WEB_HANDOFF_ERROR_TRY_AGAIN
            })(),
            D = null != p && O.has(p);
        return D ? (0, r.jsx)("div", {
            className: N.errorContainer,
            children: (0, r.jsx)(f.Text, {
                color: "interactive-normal",
                variant: "text-sm/semibold",
                children: y
            })
        }) : (0, r.jsxs)("div", {
            className: N.container,
            children: [(0, r.jsx)(f.Text, {
                variant: "text-sm/semibold",
                children: y
            }), (0, r.jsx)(f.Button, {
                look: f.Button.Looks.INVERTED,
                color: f.Button.Colors.BRAND_NEW,
                onClick: () => {
                    let e = I.default.generateNonce();
                    c.default.set(A, e), c.default.set(S, Date.now() + R);
                    let t = new URL(T.MOBILE_WEB_HANDOFF_DEEP_LINK),
                        n = new URLSearchParams(window.location.search);
                    n.delete("fingerprint"), n.delete("handoff_token");
                    let s = new URLSearchParams;
                    s.set("redirect", encodeURIComponent(window.location.pathname + n.toString())), s.set("key", e), s.set("fingerprint", a), t.search = s.toString(), m.default.track(T.AnalyticEvents.DEEP_LINK_CLICKED, {
                        fingerprint: (0, o.maybeExtractId)(a),
                        source: "mobile_web_handoff",
                        destination: T.MOBILE_WEB_HANDOFF_DEEP_LINK
                    }, {
                        fingerprint: a,
                        flush: !0
                    }), window.location.href = t.toString()
                },
                children: (0, r.jsx)(f.Text, {
                    className: N.buttonText,
                    variant: "text-sm/semibold",
                    children: _.MOBILE_WEB_HANDOFF_BUTTON_TEXT
                })
            })]
        })
    }
}