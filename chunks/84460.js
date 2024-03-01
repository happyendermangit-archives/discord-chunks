function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    }), n("702976");
    var s = n("446674"),
        i = n("913144"),
        r = n("845579"),
        a = n("568734"),
        o = n("49111");

    function d() {
        return {
            lastUsedObject: {},
            useActivityUrlOverride: !1,
            activityUrlOverride: null,
            filter: ""
        }
    }
    let u = d(),
        l = null,
        f = [];
    class _ extends s.default.PersistedStore {
        initialize(e) {
            u = {
                ...d(),
                ...null != e ? e : {}
            }
        }
        getState() {
            return u
        }
        getIsEnabled() {
            return r.DeveloperMode.getSetting() && f.length > 0
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
            return l
        }
        getFilter() {
            return this.getIsEnabled() ? u.filter : ""
        }
        getDeveloperShelfItems() {
            return this.getIsEnabled() ? f : []
        }
        inDevModeForApplication(e) {
            return this.getIsEnabled() && null != f.find(t => t.id === e)
        }
    }
    _.displayName = "DeveloperActivityShelfStore", _.persistKey = "DeveloperActivityShelfStore", _.migrations = [e => (delete e.isEnabled, {
        ...e
    })];
    var c = new _(i.default, {
        LOGOUT: function() {
            u = d(), l = null, f = []
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
            if (null == f.find(e => e.id === t)) return !1;
            u.lastUsedObject[t] = n
        },
        DEVELOPER_ACTIVITY_SHELF_FETCH_START() {
            l = "loading"
        },
        DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS: function(e) {
            let {
                items: t
            } = e;
            l = "loaded", f = t.filter(e => null != e.flags && (0, a.hasFlag)(e.flags, o.ApplicationFlags.EMBEDDED))
        },
        DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL: function(e) {
            let {
                type: t
            } = e;
            l = "errored"
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