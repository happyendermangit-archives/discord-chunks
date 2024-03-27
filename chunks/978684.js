function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GUEST_INVITE_KEY: function() {
            return _
        }
    }), n("47120");
    var i = n("298444"),
        r = n("570140"),
        s = n("447543"),
        a = n("147913"),
        o = n("314897"),
        l = n("358085"),
        u = n("981631");

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let _ = "guestInviteToAccept";
    class c extends a.default {
        constructor(...e) {
            super(...e), d(this, "actions", {
                POST_CONNECTION_OPEN: () => this.handleConnectionOpen()
            }), d(this, "handleConnectionOpen", async () => {
                if ((0, l.isWeb)()) {
                    let e = i.SessionStorage.get(_);
                    if (null != e && "string" == typeof e && o.default.isAuthenticated()) {
                        let {
                            invite: t
                        } = await s.default.resolveInvite(e, "Desktop Modal");
                        null != t && (r.default.dispatch({
                            type: "INVITE_MODAL_OPEN",
                            invite: t,
                            code: e,
                            context: u.AppContext.APP
                        }), i.SessionStorage.remove(_))
                    }
                }
            })
        }
    }
    t.default = new c
}