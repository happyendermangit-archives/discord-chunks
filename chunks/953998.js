function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        default: function() {
            return f
        }
    });
    var n = i("446674"),
        l = i("862337"),
        a = i("913144"),
        r = i("49111");
    let u = {},
        d = {};

    function s(t, e, i) {
        var n;
        let {
            applicationId: s
        } = i, o = null !== (n = u[s]) && void 0 !== n ? n : {};
        if (o[e] = t, u[s] = o, !__OVERLAY__ && t === r.ActivityActionStates.FAILED) {
            null != d[s] && d[s].stop();
            let t = new l.Timeout;
            t.start(12e4, () => a.default.dispatch({
                type: "ACTIVITY_LAUNCH_FAIL",
                applicationId: s,
                activityType: e
            })), d[s] = t
        }
    }

    function o(t) {
        return s(r.ActivityActionStates.COMPLETE, r.ActivityActionTypes.JOIN, t)
    }
    class c extends n.default.Store {
        getState(t, e) {
            let i = u[t];
            return null == i ? void 0 : i[e]
        }
        getStates() {
            return u
        }
    }
    c.displayName = "ActivityLauncherStore";
    var f = new c(a.default, {
        OVERLAY_INITIALIZE: function(t) {
            let {
                activityLauncherStates: e
            } = t;
            u = {
                ...e
            }
        },
        ACTIVITY_JOIN_LOADING: t => s(r.ActivityActionStates.LOADING, r.ActivityActionTypes.JOIN, t),
        ACTIVITY_JOIN_FAILED: t => s(r.ActivityActionStates.FAILED, r.ActivityActionTypes.JOIN, t),
        ACTIVITY_JOIN: o,
        EMBEDDED_ACTIVITY_CLOSE: o,
        ACTIVITY_LAUNCH_FAIL: function(t) {
            let {
                applicationId: e,
                activityType: i
            } = t, n = u[e];
            if (null == n || n[i] !== r.ActivityActionStates.FAILED) return !1;
            delete n[i]
        }
    })
}