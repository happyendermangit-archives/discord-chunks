function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        localLobbyVoiceStates: function() {
            return A
        },
        localPresenceState: function() {
            return f
        },
        localVoiceState: function() {
            return S
        },
        socket: function() {
            return T
        }
    });
    var i = n("570140"),
        r = n("579806"),
        s = n("710845"),
        a = n("314897"),
        o = n("626135"),
        l = n("931619"),
        u = n("358085"),
        d = n("548570"),
        _ = n("490528"),
        c = n("616810"),
        E = n("755278");
    let I = new s.default("ConnectionStore"),
        T = new d.default,
        f = new c.default(T),
        S = new E.default(T),
        A = new _.default(T);
    T.handleIdentify = () => {
        let e = a.default.getToken();
        return (I.verbose("handleIdentify called", {
            hasToken: null != e
        }), null == e) ? null : {
            token: e,
            properties: o.default.getSuperProperties(),
            presence: f.getState()
        }
    }, (0, u.isDesktop)() && r.default.remotePowerMonitor.on("resume", () => {
        T.expeditedHeartbeat(5e3, "power monitor resumed")
    }), l.default.addOfflineCallback(() => {
        T.networkStateChange(15e3, "network detected offline.", !1)
    }), l.default.addOnlineCallback(() => {
        T.networkStateChange(5e3, "network detected online.")
    }), T.on("disconnect", e => {
        let {
            code: t,
            reason: n
        } = e;
        i.default.dispatch({
            type: "CONNECTION_CLOSED",
            code: t,
            reason: n
        })
    }), T.on("close", e => {
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