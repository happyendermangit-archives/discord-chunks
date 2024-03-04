function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    }), n("222007");
    var i = n("917351"),
        s = n.n(i),
        r = n("446674"),
        a = n("913144");
    let o = {};
    class l extends r.default.Store {
        isConnected(e) {
            return null != o[e]
        }
        get connections() {
            return s.values(o)
        }
        getApplication(e) {
            return o[e]
        }
        getAllConnections() {
            return o
        }
    }
    l.displayName = "ConnectedAppsStore";
    var u = new l(a.default, {
        OVERLAY_INITIALIZE: function(e) {
            let {
                connectedApps: t
            } = e;
            o = {
                ...t
            }
        },
        RPC_APP_CONNECTED: function(e) {
            let {
                application: t
            } = e;
            if (null == t.id) return !1;
            let n = t.id;
            null == o[n] && (o[n] = {
                count: 0,
                id: t.id,
                name: t.name,
                icon: t.icon,
                coverImage: t.coverImage,
                authenticated: !1
            }), o[n].count++
        },
        RPC_APP_AUTHENTICATED: function(e) {
            let {
                application: t
            } = e;
            null != t.id && null != o[t.id] && (o[t.id].authenticated = !0)
        },
        RPC_APP_DISCONNECTED: function(e) {
            let {
                application: t
            } = e;
            null != t.id && null != o[t.id] && (o[t.id].count--, 0 === o[t.id].count && delete o[t.id])
        }
    })
}