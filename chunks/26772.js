function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    }), n("222007");
    var s = n("872717"),
        a = n("913144"),
        l = n("437822"),
        r = n("697796"),
        i = n("524824"),
        o = n("72177"),
        u = n("599110"),
        d = n("316272"),
        c = n("49111");

    function E(e, t) {
        u.default.track(c.AnalyticEvents.BROWSER_HANDOFF_SUCCEEDED, {
            authenticated: e,
            handoff_source: t
        })
    }
    class f extends d.default {
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
                (0, r.handoffSetUser)(t.user), l.default.loginToken(t.token, !1), E(!0, o)
            }, e => {
                if (null != a && E(!1, o), l.default.setFingerprint(a), (0, r.handoffEnd)(), o === i.LoginHandoffSource.ROLE_SUBSCRIPTION) {
                    var t;
                    u.default.track(c.AnalyticEvents.MOBILE_WEB_HANDOFF_FAILURE, {
                        reason: null !== (t = e.message) && void 0 !== t ? t : e.text,
                        handoff_source: o
                    })
                }
            }) : null != a ? (l.default.setFingerprint(a), E(!1, o), (0, r.handoffEnd)()) : (l.default.setFingerprint(a), (0, r.handoffUnavailable)())
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
                }) : (l.default.setFingerprint(null), (0, r.handoffUnavailable)())
            }
        }
    }
    var _ = new f
}