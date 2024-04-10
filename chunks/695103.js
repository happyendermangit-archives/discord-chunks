function(e, t, n) {
    "use strict";
    let i, r, s;
    n.r(t), n("47120"), n("177593");
    var a, o = n("442837"),
        l = n("570140"),
        u = n("238514"),
        d = n("695346"),
        _ = n("581883"),
        c = n("283595");

    function E(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let I = {
            applicationId: null,
            originURL: null
        },
        T = I,
        f = new Set,
        S = !1;

    function A() {
        s = null
    }

    function h() {
        i = null, r = null, f = new Set, T.applicationId = null, T.originURL = null, A()
    }
    class m extends(a = o.default.PersistedStore) {
        initialize(e) {
            i = (T = {
                ...null != e ? e : I
            }).applicationId, r = T.originURL, this.waitFor(_.default, u.default), this.syncWith([_.default, u.default], () => !0), c.default.whenInitialized(() => {
                S = !0
            })
        }
        inTestModeForApplication(e) {
            return i === e
        }
        inTestModeForEmbeddedApplication(e) {
            return i === e && null != r
        }
        shouldDisplayTestMode(e) {
            return d.DeveloperMode.getSetting() && this.inTestModeForApplication(e)
        }
        getState() {
            return T
        }
        get isTestMode() {
            return null != i
        }
        get isFetchingAuthorization() {
            return f.size > 0
        }
        get testModeEmbeddedApplicationId() {
            return null != r ? i : null
        }
        get testModeApplicationId() {
            return i
        }
        get testModeOriginURL() {
            return r
        }
        get error() {
            return s
        }
        whenInitialized(e) {
            this.addConditionalChangeListener(() => {
                if (S) return setImmediate(e), !1
            })
        }
    }
    E(m, "displayName", "TestModeStore"), E(m, "persistKey", "TestModeStore"), t.default = new m(l.default, {
        DEVELOPER_TEST_MODE_AUTHORIZATION_START: function(e) {
            let {
                applicationId: t
            } = e;
            f.add(t), s = null
        },
        DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: function(e) {
            let {
                applicationId: t,
                originURL: n
            } = e;
            i = t, r = n, f.delete(t), s = null, T.applicationId = t, T.originURL = n
        },
        DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: function(e) {
            let {
                applicationId: t,
                error: n
            } = e;
            f.delete(t), s = n
        },
        OVERLAY_INITIALIZE: function(e) {
            let {
                testModeApplicationId: t
            } = e;
            i = t
        },
        DEVELOPER_TEST_MODE_RESET_ERROR: A,
        LOGOUT: h,
        DEVELOPER_TEST_MODE_RESET: h
    })
}