function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    }), n("222007"), n("506083");
    var s = n("37983"),
        a = n("884691"),
        i = n("730290"),
        r = n("803182"),
        l = n("446674"),
        o = n("437822"),
        u = n("697796"),
        d = n("524824"),
        c = n("393414"),
        f = n("271938"),
        h = n("291850"),
        E = n("49111"),
        g = n("724210");

    function m(e) {
        let t = a.useCallback(t => {
                if (function(e) {
                        var t;
                        let n = (0, r.matchPath)(e, {
                            path: E.Routes.CHANNEL(":guildId", ":channelId")
                        });
                        return (null == n ? void 0 : null === (t = n.params) || void 0 === t ? void 0 : t.channelId) === g.StaticChannelRoute.ROLE_SUBSCRIPTIONS || !1
                    }(t)) c.replaceWith(t);
                else {
                    var n;
                    (null !== (n = e.transitionTo) && void 0 !== n ? n : c.transitionTo)(t)
                }
            }, [e.transitionTo]),
            {
                isAuthenticated: n,
                loginStatus: m
            } = (0, l.useStateFromStoresObject)([f.default], () => ({
                isAuthenticated: f.default.isAuthenticated(),
                loginStatus: f.default.getLoginStatus()
            })),
            {
                location: _,
                redirectTo: p
            } = e,
            [R, S] = a.useState(n);

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
            }), S(!1)
        }
        return (a.useEffect(() => {
            if (null != _) {
                let {
                    handoff_key: e,
                    handoff_token: t
                } = (0, i.parse)(_.search);
                if (null != e && null != t) {
                    let n = null != p ? (0, d.getLoginHandoffSourceFromRedirectTo)(p) : void 0;
                    R ? o.default.logout(null).finally(() => {
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
        }, []), R || m === E.LoginStates.LOGGING_IN) ? (0, s.jsx)(h.LoginSpinner, {}) : (0, s.jsx)(h.default, {
            ...e,
            transitionTo: t
        })
    }
}