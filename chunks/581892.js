function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var i = n("446674"),
        r = n("913144"),
        s = n("599110"),
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
            } = e, i = l.permissionStates, r = i[n];
            i[n] = t, r !== t && s.default.track(o.AnalyticEvents.PERMISSIONS_ACKED, {
                type: n,
                action: t,
                previous_action: null != r ? r : a.NativePermissionStates.NONE
            })
        }
        constructor() {
            super(r.default, {
                SET_NATIVE_PERMISSION: e => this.handleSetNativePermission(e)
            })
        }
    }
    u.displayName = "NativePermissionStore", u.persistKey = "NativePermissionsStore";
    var c = u
}