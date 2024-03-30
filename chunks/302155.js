function(e, t, n) {
    "use strict";
    let i, r;
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    });
    var s = n("213919"),
        a = n("570140"),
        o = n("147913"),
        l = n("594174"),
        u = n("626135"),
        d = n("726745"),
        _ = n("981631");

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class E extends o.default {
        _initialize() {
            a.default.subscribe("CONNECTION_OPEN", () => this.handleConnectionOpen()), this.handleConnectionOpen()
        }
        _terminate() {
            a.default.unsubscribe("CONNECTION_OPEN", () => this.handleConnectionOpen())
        }
        constructor({
            onSwitchStart: e,
            onSwitchSuccess: t,
            onSwitchError: n,
            onTokenSet: a
        }) {
            super(), c(this, "onSwitchStart", void 0), c(this, "onSwitchSuccess", void 0), c(this, "onSwitchError", void 0), c(this, "onTokenSet", void 0), c(this, "actions", {
                LOGOUT: e => this.handleLogout(e)
            }), c(this, "handleConnectionOpen", () => {
                var e, t, n;
                let a = l.default.getCurrentUser();
                if (null == a) return;
                if (null != r) {
                    if (r !== i) {
                        let e = d.default.getUsers().map(e => {
                            let {
                                id: t
                            } = e;
                            return t
                        });
                        u.default.track(_.AnalyticEvents.MULTI_ACCOUNT_SWITCH_SUCCESS, {
                            from_user_id: r,
                            linked_user_ids: e
                        }), null === (t = this.onSwitchSuccess) || void 0 === t || t.call(this, a)
                    } else u.default.track(_.AnalyticEvents.MULTI_ACCOUNT_SWITCH_FAILURE), null === (n = this.onSwitchError) || void 0 === n || n.call(this, a);
                    r = null
                }
                i = a.id;
                let o = s.getToken();
                null != o && "" !== o && s.setToken(o, a.id), null === (e = this.onTokenSet) || void 0 === e || e.call(this, a)
            }), c(this, "handleLogout", e => {
                if (e.isSwitchingAccount) {
                    var t;
                    r = i, null === (t = this.onSwitchStart) || void 0 === t || t.call(this)
                } else s.removeToken(i);
                i = null
            }), this.onSwitchStart = e, this.onSwitchSuccess = t, this.onSwitchError = n, this.onTokenSet = a
        }
    }
}