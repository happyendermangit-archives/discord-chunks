function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r, a, s, o = n("392711"),
        l = n.n(o),
        u = n("442837"),
        d = n("570140");
    let _ = {};
    class c extends(i = u.default.Store) {
        isConnected(e) {
            return null != _[e]
        }
        get connections() {
            return l().values(_)
        }
        getApplication(e) {
            return _[e]
        }
        getAllConnections() {
            return _
        }
    }
    s = "ConnectedAppsStore", (a = "displayName") in(r = c) ? Object.defineProperty(r, a, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[a] = s, t.default = new c(d.default, {
        OVERLAY_INITIALIZE: function(e) {
            let {
                connectedApps: t
            } = e;
            _ = {
                ...t
            }
        },
        RPC_APP_CONNECTED: function(e) {
            let {
                application: t
            } = e;
            if (null == t.id) return !1;
            let n = t.id;
            null == _[n] && (_[n] = {
                count: 0,
                id: t.id,
                name: t.name,
                icon: t.icon,
                coverImage: t.coverImage,
                authenticated: !1
            }), _[n].count++
        },
        RPC_APP_AUTHENTICATED: function(e) {
            let {
                application: t
            } = e;
            null != t.id && null != _[t.id] && (_[t.id].authenticated = !0)
        },
        RPC_APP_DISCONNECTED: function(e) {
            let {
                application: t
            } = e;
            null != t.id && null != _[t.id] && (_[t.id].count--, 0 === _[t.id].count && delete _[t.id])
        }
    })
}