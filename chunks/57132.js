function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getRootNavigationRefIfInExperiment: function() {
            return f
        },
        isInMainTabsExperiment: function() {
            return S
        },
        useInMainTabsExperiment: function() {
            return A
        }
    }), n("411104"), n("470079");
    var i, r, s = n("652874"),
        a = n("433517");
    n("353926");
    var o = n("695855");
    n("528097");
    var l = n("777639"),
        u = n("277530"),
        d = n("721877"),
        _ = n("146552"),
        c = n("488832");
    (r = i || (i = {}))[r.EXISTING_USERS = 0] = "EXISTING_USERS", r[r.NEW_USERS = 1] = "NEW_USERS";
    let E = "tabs-v2-experiment-key",
        I = (0, s.default)((e, t) => ({
            _experimentCacheInitialized: !1,
            _experimentEnabled: !1,
            getExperimentEnabled() {
                if (!(0, d.isMainTabsExperimentPlatformSupported)()) return !1;
                let {
                    _experimentCacheInitialized: e,
                    _experimentEnabled: n
                } = t();
                if (!e) throw Error("MainTabsV2ExperimentStore: Experiment cache not initialized");
                return n
            },
            setExperimentEnabled: t => {
                e({
                    _experimentEnabled: t
                }), a.Storage.set(E, t)
            },
            setInitialized: () => {
                e(e => e._experimentCacheInitialized ? e : {
                    _experimentCacheInitialized: !0,
                    _experimentEnabled: !0 === a.Storage.get(E)
                })
            }
        }));

    function T() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, u.isMobileRedesignDisabled)(),
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : I.getState().getExperimentEnabled(),
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : (0, _.isTabsUIEnabledManually)(),
            r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : (0, o.isRedesignToggleIgnored)();
        if (!(0, d.isMainTabsExperimentPlatformSupported)()) return !1;
        if (!r) {
            if (!t && e) return (0, c.updateIsInTabsUI)(!1), !1;
            if (i) return (0, c.updateIsInTabsUI)(!0), !0
        }
        return !t && (0, c.updateIsInTabsUI)(n), n
    }

    function f() {
        return S() ? (0, l.getRootNavigationRef)() : void 0
    }

    function S() {
        return T()
    }

    function A() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = (0, u.useMobileRedesignDisabled)(),
            n = I(e => e.getExperimentEnabled()),
            i = (0, _.useIsTabsUIEnabledManually)();
        return T(t, e, n, i, (0, o.useRedesignToggleIgnored)())
    }
}