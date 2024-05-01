function(e, t, n) {
    "use strict";
    n.r(t), n("789020");
    var i, r = n("442837"),
        a = n("570140"),
        s = n("695346"),
        o = n("630388"),
        l = n("981631");

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function d() {
        return {
            lastUsedObject: {},
            useActivityUrlOverride: !1,
            activityUrlOverride: null,
            filter: ""
        }
    }
    let _ = d(),
        c = null,
        E = [];
    class I extends(i = r.default.PersistedStore) {
        initialize(e) {
            _ = {
                ...d(),
                ...null != e ? e : {}
            }
        }
        getState() {
            return _
        }
        getIsEnabled() {
            return s.DeveloperMode.getSetting() && E.length > 0
        }
        getLastUsedObject() {
            return _.lastUsedObject
        }
        getUseActivityUrlOverride() {
            return this.getIsEnabled() && _.useActivityUrlOverride
        }
        getActivityUrlOverride() {
            return this.getIsEnabled() ? _.activityUrlOverride : null
        }
        getFetchState() {
            return c
        }
        getFilter() {
            return this.getIsEnabled() ? _.filter : ""
        }
        getDeveloperShelfItems() {
            return this.getIsEnabled() ? E : []
        }
        inDevModeForApplication(e) {
            return this.getIsEnabled() && null != E.find(t => t.id === e)
        }
    }
    u(I, "displayName", "DeveloperActivityShelfStore"), u(I, "persistKey", "DeveloperActivityShelfStore"), u(I, "migrations", [e => (delete e.isEnabled, {
        ...e
    })]), t.default = new I(a.default, {
        LOGOUT: function() {
            _ = d(), c = null, E = []
        },
        DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE: function() {
            _.useActivityUrlOverride = !_.useActivityUrlOverride
        },
        DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE: function(e) {
            let {
                activityUrlOverride: t
            } = e;
            _.activityUrlOverride = t
        },
        DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED: function(e) {
            let {
                applicationId: t,
                timestamp: n
            } = e;
            if (null == E.find(e => e.id === t)) return !1;
            _.lastUsedObject[t] = n
        },
        DEVELOPER_ACTIVITY_SHELF_FETCH_START() {
            c = "loading"
        },
        DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS: function(e) {
            let {
                applications: t
            } = e;
            c = "loaded", E = t.filter(e => null != e.flags && (0, o.hasFlag)(e.flags, l.ApplicationFlags.EMBEDDED))
        },
        DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL: function(e) {
            let {
                type: t
            } = e;
            c = "errored"
        },
        DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER: function(e) {
            let {
                filter: t
            } = e;
            _.filter = t
        },
        USER_SETTINGS_PROTO_UPDATE() {}
    })
}