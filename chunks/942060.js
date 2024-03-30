function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        localLobbyVoiceStates: function() {
            return I
        },
        localPresenceState: function() {
            return m
        },
        localVoiceState: function() {
            return y
        },
        socket: function() {
            return p
        }
    });
    var r = n("629815"),
        o = n("517727"),
        i = n("35523"),
        a = n("217014"),
        u = n("870331"),
        s = n("637052"),
        l = n("374550"),
        c = n("176066"),
        f = n("705777"),
        d = n("151950"),
        _ = n("56360"),
        E = new i.default("ConnectionStore"),
        p = new c.default,
        m = new d.default(p),
        y = new _.default(p),
        I = new f.default(p);
    p.handleIdentify = function() {
        var e = a.default.getToken();
        return (E.verbose("handleIdentify called", {
            hasToken: null != e
        }), null == e) ? null : {
            token: e,
            properties: u.default.getSuperProperties(),
            presence: m.getState()
        }
    }, (0, l.isDesktop)() && o.default.remotePowerMonitor.on("resume", function() {
        p.expeditedHeartbeat(5e3, "power monitor resumed")
    }), s.default.addOfflineCallback(function() {
        p.networkStateChange(15e3, "network detected offline.", !1)
    }), s.default.addOnlineCallback(function() {
        p.networkStateChange(5e3, "network detected online.")
    }), p.on("disconnect", function(e) {
        var t = e.code,
            n = e.reason;
        r.default.dispatch({
            type: "CONNECTION_CLOSED",
            code: t,
            reason: n
        })
    }), p.on("close", function(e) {
        var t = e.code,
            n = e.reason;
        r.default.dispatch({
            type: "CONNECTION_INTERRUPTED",
            code: t,
            reason: n
        })
    })
}