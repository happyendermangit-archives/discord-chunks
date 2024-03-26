function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return g
        }
    }), n("222007"), n("506083");
    var s = n("37983"),
        a = n("884691"),
        r = n("730290"),
        l = n("803182"),
        i = n("446674"),
        o = n("437822"),
        u = n("697796"),
        d = n("524824"),
        c = n("393414"),
        E = n("271938"),
        f = n("291850"),
        _ = n("49111"),
        h = n("724210");

    function g(e) {
        let t = a.useCallback(t => {
                if (function(e) {
                        var t;
                        let n = (0, l.matchPath)(e, {
                            path: _.Routes.CHANNEL(":guildId", ":channelId")
                        });
                        return (null == n ? void 0 : null === (t = n.params) || void 0 === t ? void 0 : t.channelId) === h.StaticChannelRoute.ROLE_SUBSCRIPTIONS || !1
                    }(t)) c.replaceWith(t);
                else {
                    var n;
                    (null !== (n = e.transitionTo) && void 0 !== n ? n : c.transitionTo)(t)
                }
            }, [e.transitionTo]),
            {
                isAuthenticated: n,
                loginStatus: g
            } = (0, i.useStateFromStoresObject)([E.default], () => ({
                isAuthenticated: E.default.isAuthenticated(),
                loginStatus: E.default.getLoginStatus()
            })),
            {
                location: m,
                redirectTo: p
            } = e,
            [T, I] = a.useState(n);

        function A(e) {
            let {
                handoffKey: t,
                handoffToken: n,
                handoffSource: s
            } = e;
            (0, u.handoffFromApp)({
                handoffKey: t,
                handoffToken: n,
                handoffSource: s
            }), I(!1)
        }
        return (a.useEffect(() => {
            if (null != m) {
                let {
                    handoff_key: e,
                    handoff_token: t
                } = (0, r.parse)(m.search);
                if (null != e && null != t) {
                    let n = null != p ? (0, d.getLoginHandoffSourceFromRedirectTo)(p) : void 0;
                    T ? o.default.logout(null).finally(() => {
                        A({
                            handoffKey: e,
                            handoffToken: t,
                            handoffSource: n
                        })
                    }) : A({
                        handoffKey: e,
                        handoffToken: t,
                        handoffSource: n
                    })
                }
            }
        }, []), T || g === _.LoginStates.LOGGING_IN) ? (0, s.jsx)(f.LoginSpinner, {}) : (0, s.jsx)(f.default, {
            ...e,
            transitionTo: t
        })
    }
}