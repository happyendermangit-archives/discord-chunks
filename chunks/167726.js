function(e, t, n) {
    "use strict";
    let i, s, r;
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    }), n("222007"), n("860677");
    var a = n("446674"),
        o = n("913144"),
        l = n("737292"),
        u = n("845579"),
        d = n("374363"),
        c = n("686470");
    let f = {
            applicationId: null,
            originURL: null
        },
        _ = f,
        h = new Set,
        E = !1;

    function g() {
        r = null
    }

    function m() {
        i = null, s = null, h = new Set, _.applicationId = null, _.originURL = null, g()
    }
    class p extends a.default.PersistedStore {
        initialize(e) {
            i = (_ = {
                ...null != e ? e : f
            }).applicationId, s = _.originURL, this.waitFor(d.default, l.default), this.syncWith([d.default, l.default], () => !0), c.default.whenInitialized(() => {
                E = !0
            })
        }
        inTestModeForApplication(e) {
            return i === e
        }
        inTestModeForEmbeddedApplication(e) {
            return i === e && null != s
        }
        shouldDisplayTestMode(e) {
            return u.DeveloperMode.getSetting() && this.inTestModeForApplication(e)
        }
        getState() {
            return _
        }
        get isTestMode() {
            return null != i
        }
        get isFetchingAuthorization() {
            return h.size > 0
        }
        get testModeEmbeddedApplicationId() {
            return null != s ? i : null
        }
        get testModeApplicationId() {
            return i
        }
        get testModeOriginURL() {
            return s
        }
        get error() {
            return r
        }
        whenInitialized(e) {
            this.addConditionalChangeListener(() => {
                if (E) return setImmediate(e), !1
            })
        }
    }
    p.displayName = "TestModeStore", p.persistKey = "TestModeStore";
    var S = new p(o.default, {
        DEVELOPER_TEST_MODE_AUTHORIZATION_START: function(e) {
            let {
                applicationId: t
            } = e;
            h.add(t), r = null
        },
        DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: function(e) {
            let {
                applicationId: t,
                originURL: n
            } = e;
            i = t, s = n, h.delete(t), r = null, _.applicationId = t, _.originURL = n
        },
        DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: function(e) {
            let {
                applicationId: t,
                error: n
            } = e;
            h.delete(t), r = n
        },
        OVERLAY_INITIALIZE: function(e) {
            let {
                testModeApplicationId: t
            } = e;
            i = t
        },
        DEVELOPER_TEST_MODE_RESET_ERROR: g,
        LOGOUT: m,
        DEVELOPER_TEST_MODE_RESET: m
    })
}