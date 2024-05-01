function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    }), n("47120"), n("773603");
    var s = n("735250"),
        a = n("470079"),
        i = n("593473"),
        r = n("266067"),
        l = n("442837"),
        o = n("893776"),
        u = n("899742"),
        d = n("743142"),
        c = n("703656"),
        f = n("314897"),
        h = n("781428"),
        E = n("981631"),
        g = n("176505");

    function _(e) {
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
                loginStatus: _
            } = (0, l.useStateFromStoresObject)([f.default], () => ({
                isAuthenticated: f.default.isAuthenticated(),
                loginStatus: f.default.getLoginStatus()
            })),
            {
                location: m,
                redirectTo: p
            } = e,
            [T, A] = a.useState(n);

        function I(e) {
            let {
                handoffKey: t,
                handoffToken: n,
                handoffSource: s
            } = e;
            (0, u.handoffFromApp)({
                handoffKey: t,
                handoffToken: n,
                handoffSource: s
            }), A(!1)
        }
        return (a.useEffect(() => {
            if (null != m) {
                let {
                    handoff_key: e,
                    handoff_token: t
                } = (0, i.parse)(m.search);
                if (null != e && null != t) {
                    let n = null != p ? (0, d.getLoginHandoffSourceFromRedirectTo)(p) : void 0;
                    T ? o.default.logout(null).finally(() => {
                        I({
                            handoffKey: e,
                            handoffToken: t,
                            handoffSource: n
                        })
                    }) : I({
                        handoffKey: e,
                        handoffToken: t,
                        handoffSource: n
                    })
                }
            }
        }, []), T || _ === E.LoginStates.LOGGING_IN) ? (0, s.jsx)(h.LoginSpinner, {}) : (0, s.jsx)(h.default, {
            ...e,
            transitionTo: t
        })
    }
}