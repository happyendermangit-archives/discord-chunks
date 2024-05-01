function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        localPresenceState: function() {
            return T
        },
        localVoiceState: function() {
            return f
        },
        socket: function() {
            return I
        }
    });
    var i = n("570140"),
        r = n("579806"),
        a = n("710845"),
        s = n("314897"),
        o = n("626135"),
        l = n("931619"),
        u = n("358085"),
        d = n("548570"),
        _ = n("616810"),
        c = n("755278");
    let E = new a.default("ConnectionStore"),
        I = new d.default,
        T = new _.default(I),
        f = new c.default(I);
    I.handleIdentify = () => {
        let e = s.default.getToken();
        return (E.verbose("handleIdentify called", {
            hasToken: null != e
        }), null == e) ? null : {
            token: e,
            properties: o.default.getSuperProperties(),
            presence: T.getInitialState()
        }
    }, (0, u.isDesktop)() && r.default.remotePowerMonitor.on("resume", () => {
        I.expeditedHeartbeat(5e3, "power monitor resumed")
    }), l.default.addOfflineCallback(() => {
        I.networkStateChange(15e3, "network detected offline.", !1)
    }), l.default.addOnlineCallback(() => {
        I.networkStateChange(5e3, "network detected online.")
    }), I.on("disconnect", e => {
        let {
            code: t,
            reason: n
        } = e;
        i.default.dispatch({
            type: "CONNECTION_CLOSED",
            code: t,
            reason: n
        })
    }), I.on("close", e => {
        let {
            code: t,
            reason: n
        } = e;
        i.default.dispatch({
            type: "CONNECTION_INTERRUPTED",
            code: t,
            reason: n
        })
    })
}