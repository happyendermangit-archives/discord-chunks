function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    }), n("702976");
    var i = n("446674"),
        s = n("913144"),
        r = n("845579"),
        a = n("568734"),
        o = n("49111");

    function l() {
        return {
            lastUsedObject: {},
            useActivityUrlOverride: !1,
            activityUrlOverride: null,
            filter: ""
        }
    }
    let u = l(),
        d = null,
        c = [];
    class f extends i.default.PersistedStore {
        initialize(e) {
            u = {
                ...l(),
                ...null != e ? e : {}
            }
        }
        getState() {
            return u
        }
        getIsEnabled() {
            return r.DeveloperMode.getSetting() && c.length > 0
        }
        getLastUsedObject() {
            return u.lastUsedObject
        }
        getUseActivityUrlOverride() {
            return this.getIsEnabled() && u.useActivityUrlOverride
        }
        getActivityUrlOverride() {
            return this.getIsEnabled() ? u.activityUrlOverride : null
        }
        getFetchState() {
            return d
        }
        getFilter() {
            return this.getIsEnabled() ? u.filter : ""
        }
        getDeveloperShelfItems() {
            return this.getIsEnabled() ? c : []
        }
        inDevModeForApplication(e) {
            return this.getIsEnabled() && null != c.find(t => t.id === e)
        }
    }
    f.displayName = "DeveloperActivityShelfStore", f.persistKey = "DeveloperActivityShelfStore", f.migrations = [e => (delete e.isEnabled, {
        ...e
    })];
    var _ = new f(s.default, {
        LOGOUT: function() {
            u = l(), d = null, c = []
        },
        DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE: function() {
            u.useActivityUrlOverride = !u.useActivityUrlOverride
        },
        DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE: function(e) {
            let {
                activityUrlOverride: t
            } = e;
            u.activityUrlOverride = t
        },
        DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED: function(e) {
            let {
                applicationId: t,
                timestamp: n
            } = e;
            if (null == c.find(e => e.id === t)) return !1;
            u.lastUsedObject[t] = n
        },
        DEVELOPER_ACTIVITY_SHELF_FETCH_START() {
            d = "loading"
        },
        DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS: function(e) {
            let {
                items: t
            } = e;
            d = "loaded", c = t.filter(e => null != e.flags && (0, a.hasFlag)(e.flags, o.ApplicationFlags.EMBEDDED))
        },
        DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL: function(e) {
            let {
                type: t
            } = e;
            d = "errored"
        },
        DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER: function(e) {
            let {
                filter: t
            } = e;
            u.filter = t
        },
        USER_SETTINGS_PROTO_UPDATE() {}
    })
}