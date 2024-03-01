function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        LOGIN_REQUIRED_ACTIONS_MODAL_KEY: function() {
            return N
        },
        default: function() {
            return A
        }
    }), E("222007");
    var t = E("37983");
    E("884691");
    var o = E("77078"),
        n = E("437822"),
        r = E("689988"),
        i = E("697218"),
        a = E("599110"),
        I = E("197881"),
        s = E("56676"),
        T = E("49111"),
        S = E("843455");
    let N = "LOGIN_REQUIRED_ACTIONS_MODAL_KEY";
    class O extends r.default {
        handleConnectionOpen() {
            let e = i.default.getCurrentUser();
            if (null == e || I.ProcessArgs.isDisallowPopupsSet()) return;
            let _ = s.default.requiredActionsIncludes(e.id, [T.LoginRequiredActions.UPDATE_PASSWORD]),
                r = s.default.wasLoginAttemptedInSession(e.id);
            r && _ ? (0, o.openModalLazy)(async () => {
                let {
                    default: e
                } = await E.el("969927").then(E.bind(E, "969927"));
                return function(_) {
                    return (0, t.jsx)(e, {
                        ..._,
                        onSuccess: () => {
                            a.default.track(T.AnalyticEvents.FORCED_UPDATE_PASSWORD_SUCCEEDED), _.onClose()
                        },
                        onClose: () => {
                            _.onClose(), n.default.logout(T.Routes.LOGIN)
                        },
                        requirementsUpdated: !0
                    })
                }
            }, {
                modalKey: N,
                onCloseRequest: S.NOOP_NULL,
                instant: !0
            }) : _ && n.default.logout(T.Routes.LOGIN)
        }
        constructor(...e) {
            super(...e), this.actions = {
                POST_CONNECTION_OPEN: this.handleConnectionOpen
            }
        }
    }
    var A = new O
}