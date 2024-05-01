function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        LOGIN_REQUIRED_ACTIONS_MODAL_KEY: function() {
            return E
        }
    }), n("47120");
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        s = n("893776"),
        a = n("147913"),
        o = n("594174"),
        l = n("626135"),
        u = n("374023"),
        d = n("344532"),
        _ = n("981631"),
        c = n("231338");
    let E = "LOGIN_REQUIRED_ACTIONS_MODAL_KEY";
    class I extends a.default {
        handleConnectionOpen() {
            let e = o.default.getCurrentUser();
            if (null == e || u.ProcessArgs.isDisallowPopupsSet()) return;
            let t = d.default.requiredActionsIncludes(e.id, [_.LoginRequiredActions.UPDATE_PASSWORD]);
            d.default.wasLoginAttemptedInSession(e.id) && t ? (0, r.openModalLazy)(async () => {
                let {
                    default: e
                } = await Promise.all([n.e("99387"), n.e("48707")]).then(n.bind(n, "194530"));
                return function(t) {
                    return (0, i.jsx)(e, {
                        ...t,
                        onSuccess: () => {
                            l.default.track(_.AnalyticEvents.FORCED_UPDATE_PASSWORD_SUCCEEDED), t.onClose()
                        },
                        onClose: () => {
                            t.onClose(), s.default.logout(_.Routes.LOGIN)
                        },
                        requirementsUpdated: !0
                    })
                }
            }, {
                modalKey: E,
                onCloseRequest: c.NOOP_NULL,
                instant: !0
            }) : t && s.default.logout(_.Routes.LOGIN)
        }
        constructor(...e) {
            var t, n, i;
            super(...e), t = this, n = "actions", i = {
                POST_CONNECTION_OPEN: this.handleConnectionOpen
            }, n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i
        }
    }
    t.default = new I
}