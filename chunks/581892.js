function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var i = n("446674"),
        s = n("913144"),
        r = n("599110"),
        a = n("180524"),
        o = n("49111");
    let l = {
        permissionStates: {}
    };
    class u extends i.default.DeviceSettingsStore {
        initialize(e) {
            l = null != e ? e : l
        }
        getUserAgnosticState() {
            return l
        }
        hasPermission(e) {
            let t = l.permissionStates,
                n = t[e];
            return null != n && n === a.NativePermissionStates.ACCEPTED
        }
        handleSetNativePermission(e) {
            let {
                state: t,
                permissionType: n
            } = e, i = l.permissionStates, s = i[n];
            i[n] = t, s !== t && r.default.track(o.AnalyticEvents.PERMISSIONS_ACKED, {
                type: n,
                action: t,
                previous_action: null != s ? s : a.NativePermissionStates.NONE
            })
        }
        constructor() {
            super(s.default, {
                SET_NATIVE_PERMISSION: e => this.handleSetNativePermission(e)
            })
        }
    }
    u.displayName = "NativePermissionStore", u.persistKey = "NativePermissionsStore";
    var d = u
}