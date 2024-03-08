function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    }), n("222007");
    var s = n("872717"),
        a = n("913144"),
        i = n("437822"),
        r = n("697796"),
        l = n("524824"),
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
    class h extends d.default {
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
                (0, r.handoffSetUser)(t.user), i.default.loginToken(t.token, !1), f(!0, o)
            }, e => {
                if (null != a && f(!1, o), i.default.setFingerprint(a), (0, r.handoffEnd)(), o === l.LoginHandoffSource.ROLE_SUBSCRIPTION) {
                    var t;
                    u.default.track(c.AnalyticEvents.MOBILE_WEB_HANDOFF_FAILURE, {
                        reason: null !== (t = e.message) && void 0 !== t ? t : e.text,
                        handoff_source: o
                    })
                }
            }) : null != a ? (i.default.setFingerprint(a), f(!1, o), (0, r.handoffEnd)()) : (i.default.setFingerprint(a), (0, r.handoffUnavailable)())
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
                }) : (i.default.setFingerprint(null), (0, r.handoffUnavailable)())
            }
        }
    }
    var E = new h
}