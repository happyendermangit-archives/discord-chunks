function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r = n("442837"),
        s = n("570140"),
        a = n("626135"),
        o = n("761274"),
        l = n("981631");

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let d = {
        permissionStates: {}
    };
    class _ extends(i = r.default.DeviceSettingsStore) {
        initialize(e) {
            d = null != e ? e : d
        }
        getUserAgnosticState() {
            return d
        }
        hasPermission(e) {
            let t = d.permissionStates[e];
            return null != t && t === o.NativePermissionStates.ACCEPTED
        }
        handleSetNativePermission(e) {
            let {
                state: t,
                permissionType: n
            } = e, i = d.permissionStates, r = i[n];
            i[n] = t, r !== t && a.default.track(l.AnalyticEvents.PERMISSIONS_ACKED, {
                type: n,
                action: t,
                previous_action: null != r ? r : o.NativePermissionStates.NONE
            })
        }
        constructor() {
            super(s.default, {
                SET_NATIVE_PERMISSION: e => this.handleSetNativePermission(e)
            })
        }
    }
    u(_, "displayName", "NativePermissionStore"), u(_, "persistKey", "NativePermissionsStore"), t.default = _
}