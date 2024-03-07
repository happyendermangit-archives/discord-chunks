function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return T
        }
    }), E("808653");
    var t = E("446674"),
        o = E("913144");
    let n = {},
        r = null,
        a = null;

    function i(e, _) {
        null == _ ? e in n && delete n[e] : null != e && (n[e] = _)
    }

    function I(e) {
        let {
            user: _
        } = e;
        a = _.id
    }
    class s extends t.default.PersistedStore {
        initialize(e) {
            null != e && (n = e)
        }
        requiredActions(e) {
            var _;
            return null !== (_ = n[e]) && void 0 !== _ ? _ : null
        }
        requiredActionsIncludes(e, _) {
            let E = this.requiredActions(e);
            return null != E && _.reduce((e, _) => e || E.includes(_), !1)
        }
        wasLoginAttemptedInSession(e) {
            return r === e
        }
        getState() {
            return n
        }
    }
    s.displayName = "LoginRequiredActionStore", s.persistKey = "LoginRequiredActionStore";
    var T = new s(o.default, {
        LOGIN_ATTEMPTED: function(e) {
            let {
                required_actions: _,
                user_id: E
            } = e;
            i(r = E, _)
        },
        CONNECTION_OPEN: I,
        CURRENT_USER_UPDATE: I,
        LOGOUT: function(e) {
            let {
                isSwitchingAccount: _
            } = e;
            !_ && null != a && i(a, null)
        },
        PASSWORD_UPDATED: function(e) {
            let {
                userId: _
            } = e;
            i(_, null)
        },
        MULTI_ACCOUNT_REMOVE_ACCOUNT: function(e) {
            let {
                userId: _
            } = e;
            i(_, null)
        }
    })
}