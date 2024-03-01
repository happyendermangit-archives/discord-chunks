function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        socket: function() {
            return m
        },
        localPresenceState: function() {
            return h
        },
        localVoiceState: function() {
            return v
        },
        localLobbyVoiceStates: function() {
            return E
        }
    });
    var s = n("913144"),
        i = n("49671"),
        r = n("605250"),
        a = n("271938"),
        o = n("599110"),
        d = n("35468"),
        u = n("773336"),
        l = n("447214"),
        f = n("413196"),
        _ = n("764867"),
        c = n("292892");
    let g = new r.default("ConnectionStore"),
        m = new l.default,
        h = new _.default(m),
        v = new c.default(m),
        E = new f.default(m);
    m.handleIdentify = () => {
        let e = a.default.getToken();
        return (g.verbose("handleIdentify called", {
            hasToken: null != e
        }), null == e) ? null : {
            token: e,
            properties: o.default.getSuperProperties(),
            presence: h.getState()
        }
    }, (0, u.isDesktop)() && i.default.remotePowerMonitor.on("resume", () => {
        m.expeditedHeartbeat(5e3, "power monitor resumed")
    }), d.default.addOfflineCallback(() => {
        m.networkStateChange(15e3, "network detected offline.", !1)
    }), d.default.addOnlineCallback(() => {
        m.networkStateChange(5e3, "network detected online.")
    }), m.on("disconnect", e => {
        let {
            code: t,
            reason: n
        } = e;
        s.default.dispatch({
            type: "CONNECTION_CLOSED",
            code: t,
            reason: n
        })
    }), m.on("close", e => {
        let {
            code: t,
            reason: n
        } = e;
        s.default.dispatch({
            type: "CONNECTION_INTERRUPTED",
            code: t,
            reason: n
        })
    })
}