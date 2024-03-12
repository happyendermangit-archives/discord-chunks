function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return h
        }
    }), n("222007");
    var s = n("872717"),
        a = n("913144"),
        r = n("437822"),
        l = n("697796"),
        i = n("524824"),
        o = n("72177"),
        u = n("599110"),
        d = n("316272"),
        c = n("49111");

    function f(e, t) {
        u.default.track(c.AnalyticEvents.BROWSER_HANDOFF_SUCCEEDED, {
            authenticated: e,
            handoff_source: t
        })
    }
    class E extends d.default {
        _initialize() {
            a.default.subscribe("BROWSER_HANDOFF_END", this.handleEnd), a.default.subscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff)
        }
        _terminate() {
            a.default.unsubscribe("BROWSER_HANDOFF_END", this.handleEnd), a.default.unsubscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff)
        }
        handleHandoff(e) {
            let {
                handoffKey: t,
                handoffToken: n,
                fingerprint: a,
                handoffSource: o
            } = e;
            null != n ? s.default.post({
                url: c.Endpoints.HANDOFF_EXCHANGE,
                body: {
                    key: t,
                    handoff_token: n
                }
            }).then(e => {
                let {
                    body: t
                } = e;
                (0, l.handoffSetUser)(t.user), r.default.loginToken(t.token, !1), f(!0, o)
            }, e => {
                if (null != a && f(!1, o), r.default.setFingerprint(a), (0, l.handoffEnd)(), o === i.LoginHandoffSource.ROLE_SUBSCRIPTION) {
                    var t;
                    u.default.track(c.AnalyticEvents.MOBILE_WEB_HANDOFF_FAILURE, {
                        reason: null !== (t = e.message) && void 0 !== t ? t : e.text,
                        handoff_source: o
                    })
                }
            }) : null != a ? (r.default.setFingerprint(a), f(!1, o), (0, l.handoffEnd)()) : (r.default.setFingerprint(a), (0, l.handoffUnavailable)())
        }
        constructor(...e) {
            super(...e), this.handleEnd = e => {
                let {
                    handoffToken: t,
                    fingerprint: n
                } = e, s = o.default.key;
                null != s && o.default.isHandoffAvailable() ? this.handleHandoff({
                    handoffKey: s,
                    handoffToken: t,
                    fingerprint: n,
                    handoffSource: void 0
                }) : (r.default.setFingerprint(null), (0, l.handoffUnavailable)())
            }
        }
    }
    var h = new E
}