function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getRootNavigationRefIfInExperiment: function() {
            return m
        },
        isInMainTabsExperiment: function() {
            return y
        },
        useInMainTabsExperiment: function() {
            return I
        }
    }), n("470079");
    var r, o, i = n("652874"),
        a = n("242880");
    n("963041");
    var u = n("856391");
    n("807696");
    var s = n("681446"),
        l = n("27969"),
        c = n("560748"),
        f = n("525138"),
        d = n("998309");
    (o = r || (r = {}))[o.EXISTING_USERS = 0] = "EXISTING_USERS", o[o.NEW_USERS = 1] = "NEW_USERS";
    var _ = "tabs-v2-experiment-key",
        E = (0, i.default)(function(e, t) {
            return {
                _experimentCacheInitialized: !1,
                _experimentEnabled: !1,
                getExperimentEnabled: function() {
                    if (!(0, c.isMainTabsExperimentPlatformSupported)()) return !1;
                    var e = t(),
                        n = e._experimentCacheInitialized,
                        r = e._experimentEnabled;
                    if (!n) throw Error("MainTabsV2ExperimentStore: Experiment cache not initialized");
                    return r
                },
                setExperimentEnabled: function(t) {
                    e({
                        _experimentEnabled: t
                    }), a.Storage.set(_, t)
                },
                setInitialized: function() {
                    e(function(e) {
                        return e._experimentCacheInitialized ? e : {
                            _experimentCacheInitialized: !0,
                            _experimentEnabled: !0 === a.Storage.get(_)
                        }
                    })
                }
            }
        });

    function p() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, l.isMobileRedesignDisabled)(),
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E.getState().getExperimentEnabled(),
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : (0, f.isTabsUIEnabledManually)(),
            o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : (0, u.isRedesignToggleIgnored)();
        if (!(0, c.isMainTabsExperimentPlatformSupported)()) return !1;
        if (!o) {
            if (!t && e) return (0, d.updateIsInTabsUI)(!1), !1;
            if (r) return (0, d.updateIsInTabsUI)(!0), !0
        }
        return !t && (0, d.updateIsInTabsUI)(n), n
    }

    function m() {
        return y() ? (0, s.getRootNavigationRef)() : void 0
    }

    function y() {
        return p()
    }

    function I() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return p((0, l.useMobileRedesignDisabled)(), e, E(function(e) {
            return e.getExperimentEnabled()
        }), (0, f.useIsTabsUIEnabledManually)(), (0, u.useRedesignToggleIgnored)())
    }
}