function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getRootNavigationRefIfInExperiment: function() {
            return d
        },
        isInMainTabsExperiment: function() {
            return _
        },
        useInMainTabsExperiment: function() {
            return c
        }
    }), n("411104"), n("470079");
    var i, r, s = n("652874"),
        a = n("433517");
    n("353926"), n("695855"), n("528097");
    var o = n("777639");
    n("277530");
    var l = n("721877");
    n("146552"), n("488832"), (r = i || (i = {}))[r.EXISTING_USERS = 0] = "EXISTING_USERS", r[r.NEW_USERS = 1] = "NEW_USERS";
    let u = "tabs-v2-experiment-key";

    function d() {
        return _() ? (0, o.getRootNavigationRef)() : void 0
    }

    function _() {
        return (0, l.isMainTabsExperimentPlatformSupported)()
    }

    function c() {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0], (0, l.isMainTabsExperimentPlatformSupported)()
    }(0, s.default)((e, t) => ({
        _experimentCacheInitialized: !1,
        _experimentEnabled: !1,
        getExperimentEnabled() {
            if (!(0, l.isMainTabsExperimentPlatformSupported)()) return !1;
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
            }), a.Storage.set(u, t)
        },
        setInitialized: () => {
            e(e => e._experimentCacheInitialized ? e : {
                _experimentCacheInitialized: !0,
                _experimentEnabled: !0 === a.Storage.get(u)
            })
        }
    }))
}