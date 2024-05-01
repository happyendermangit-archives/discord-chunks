function(e, t, n) {
    "use strict";
    n.r(t), n("724458");
    var i, r = n("442837"),
        s = n("570140");

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let o = {},
        l = null,
        u = null;

    function d(e, t) {
        null == t ? e in o && delete o[e] : null != e && (o[e] = t)
    }

    function _(e) {
        let {
            user: t
        } = e;
        u = t.id
    }
    class c extends(i = r.default.PersistedStore) {
        initialize(e) {
            null != e && (o = e)
        }
        requiredActions(e) {
            var t;
            return null !== (t = o[e]) && void 0 !== t ? t : null
        }
        requiredActionsIncludes(e, t) {
            let n = this.requiredActions(e);
            return null != n && t.reduce((e, t) => e || n.includes(t), !1)
        }
        wasLoginAttemptedInSession(e) {
            return l === e
        }
        getState() {
            return o
        }
    }
    a(c, "displayName", "LoginRequiredActionStore"), a(c, "persistKey", "LoginRequiredActionStore"), t.default = new c(s.default, {
        LOGIN_ATTEMPTED: function(e) {
            let {
                required_actions: t,
                user_id: n
            } = e;
            d(l = n, t)
        },
        CONNECTION_OPEN: _,
        CURRENT_USER_UPDATE: _,
        LOGOUT: function(e) {
            let {
                isSwitchingAccount: t
            } = e;
            !t && null != u && d(u, null)
        },
        PASSWORD_UPDATED: function(e) {
            let {
                userId: t
            } = e;
            d(t, null)
        },
        MULTI_ACCOUNT_REMOVE_ACCOUNT: function(e) {
            let {
                userId: t
            } = e;
            d(t, null)
        }
    })
}