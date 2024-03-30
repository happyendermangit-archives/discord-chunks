function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r, s, a, o = n("442837"),
        l = n("846519"),
        u = n("570140"),
        d = n("981631");
    let _ = {},
        c = {};

    function E(e, t, n) {
        var i;
        let {
            applicationId: r
        } = n, s = null !== (i = _[r]) && void 0 !== i ? i : {};
        if (s[t] = e, _[r] = s, !__OVERLAY__ && e === d.ActivityActionStates.FAILED) {
            null != c[r] && c[r].stop();
            let e = new l.Timeout;
            e.start(12e4, () => u.default.dispatch({
                type: "ACTIVITY_LAUNCH_FAIL",
                applicationId: r,
                activityType: t
            })), c[r] = e
        }
    }

    function I(e) {
        return E(d.ActivityActionStates.COMPLETE, d.ActivityActionTypes.JOIN, e)
    }
    class T extends(a = o.default.Store) {
        getState(e, t) {
            let n = _[e];
            return null == n ? void 0 : n[t]
        }
        getStates() {
            return _
        }
    }
    s = "ActivityLauncherStore", (r = "displayName") in(i = T) ? Object.defineProperty(i, r, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = s, t.default = new T(u.default, {
        OVERLAY_INITIALIZE: function(e) {
            let {
                activityLauncherStates: t
            } = e;
            _ = {
                ...t
            }
        },
        ACTIVITY_JOIN_LOADING: e => E(d.ActivityActionStates.LOADING, d.ActivityActionTypes.JOIN, e),
        ACTIVITY_JOIN_FAILED: e => E(d.ActivityActionStates.FAILED, d.ActivityActionTypes.JOIN, e),
        ACTIVITY_JOIN: I,
        EMBEDDED_ACTIVITY_CLOSE: I,
        ACTIVITY_LAUNCH_FAIL: function(e) {
            let {
                applicationId: t,
                activityType: n
            } = e, i = _[t];
            if (null == i || i[n] !== d.ActivityActionStates.FAILED) return !1;
            delete i[n]
        }
    })
}