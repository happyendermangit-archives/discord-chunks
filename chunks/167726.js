function(e, t, n) {
    "use strict";
    let s, i, r;
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    }), n("222007"), n("860677");
    var a = n("446674"),
        o = n("913144"),
        d = n("737292"),
        u = n("845579"),
        l = n("374363"),
        f = n("686470");
    let _ = {
            applicationId: null,
            originURL: null
        },
        c = _,
        g = new Set,
        m = !1;

    function h() {
        r = null
    }

    function v() {
        s = null, i = null, g = new Set, c.applicationId = null, c.originURL = null, h()
    }
    class E extends a.default.PersistedStore {
        initialize(e) {
            s = (c = {
                ...null != e ? e : _
            }).applicationId, i = c.originURL, this.waitFor(l.default, d.default), this.syncWith([l.default, d.default], () => !0), f.default.whenInitialized(() => {
                m = !0
            })
        }
        inTestModeForApplication(e) {
            return s === e
        }
        inTestModeForEmbeddedApplication(e) {
            return s === e && null != i
        }
        shouldDisplayTestMode(e) {
            return u.DeveloperMode.getSetting() && this.inTestModeForApplication(e)
        }
        getState() {
            return c
        }
        get isTestMode() {
            return null != s
        }
        get isFetchingAuthorization() {
            return g.size > 0
        }
        get testModeEmbeddedApplicationId() {
            return null != i ? s : null
        }
        get testModeApplicationId() {
            return s
        }
        get testModeOriginURL() {
            return i
        }
        get error() {
            return r
        }
        whenInitialized(e) {
            this.addConditionalChangeListener(() => {
                if (m) return setImmediate(e), !1
            })
        }
    }
    E.displayName = "TestModeStore", E.persistKey = "TestModeStore";
    var p = new E(o.default, {
        DEVELOPER_TEST_MODE_AUTHORIZATION_START: function(e) {
            let {
                applicationId: t
            } = e;
            g.add(t), r = null
        },
        DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: function(e) {
            let {
                applicationId: t,
                originURL: n
            } = e;
            s = t, i = n, g.delete(t), r = null, c.applicationId = t, c.originURL = n
        },
        DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: function(e) {
            let {
                applicationId: t,
                error: n
            } = e;
            g.delete(t), r = n
        },
        OVERLAY_INITIALIZE: function(e) {
            let {
                testModeApplicationId: t
            } = e;
            s = t
        },
        DEVELOPER_TEST_MODE_RESET_ERROR: h,
        LOGOUT: v,
        DEVELOPER_TEST_MODE_RESET: v
    })
}