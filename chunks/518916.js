function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        socket: function() {
            return h
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
        _ = n("764867"),
        f = n("292892");
    let E = new r.default("ConnectionStore"),
        h = new d.default,
        g = new _.default(h),
        m = new f.default(h),
        p = new c.default(h);
    h.handleIdentify = () => {
        let e = a.default.getToken();
        return (E.verbose("handleIdentify called", {
            hasToken: null != e
        }), null == e) ? null : {
            token: e,
            properties: o.default.getSuperProperties(),
            presence: g.getState()
        }
    }, (0, u.isDesktop)() && s.default.remotePowerMonitor.on("resume", () => {
        h.expeditedHeartbeat(5e3, "power monitor resumed")
    }), l.default.addOfflineCallback(() => {
        h.networkStateChange(15e3, "network detected offline.", !1)
    }), l.default.addOnlineCallback(() => {
        h.networkStateChange(5e3, "network detected online.")
    }), h.on("disconnect", e => {
        let {
            code: t,
            reason: n
        } = e;
        i.default.dispatch({
            type: "CONNECTION_CLOSED",
            code: t,
            reason: n
        })
    }), h.on("close", e => {
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