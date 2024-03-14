function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        socket: function() {
            return E
        },
        localPresenceState: function() {
            return g
        },
        localVoiceState: function() {
            return m
        },
        localLobbyVoiceStates: function() {
            return p
        }
    });
    var i = n("913144"),
        s = n("49671"),
        r = n("605250"),
        a = n("271938"),
        o = n("599110"),
        l = n("35468"),
        u = n("773336"),
        d = n("447214"),
        c = n("413196"),
        f = n("764867"),
        _ = n("292892");
    let h = new r.default("ConnectionStore"),
        E = new d.default,
        g = new f.default(E),
        m = new _.default(E),
        p = new c.default(E);
    E.handleIdentify = () => {
        let e = a.default.getToken();
        return (h.verbose("handleIdentify called", {
            hasToken: null != e
        }), null == e) ? null : {
            token: e,
            properties: o.default.getSuperProperties(),
            presence: g.getState()
        }
    }, (0, u.isDesktop)() && s.default.remotePowerMonitor.on("resume", () => {
        E.expeditedHeartbeat(5e3, "power monitor resumed")
    }), l.default.addOfflineCallback(() => {
        E.networkStateChange(15e3, "network detected offline.", !1)
    }), l.default.addOnlineCallback(() => {
        E.networkStateChange(5e3, "network detected online.")
    }), E.on("disconnect", e => {
        let {
            code: t,
            reason: n
        } = e;
        i.default.dispatch({
            type: "CONNECTION_CLOSED",
            code: t,
            reason: n
        })
    }), E.on("close", e => {
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