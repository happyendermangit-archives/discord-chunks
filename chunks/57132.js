function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getRootNavigationRefIfInExperiment: function() {
            return c
        },
        isInMainTabsExperiment: function() {
            return E
        },
        useInMainTabsExperiment: function() {
            return I
        }
    }), n("411104"), n("470079");
    var i, r, a = n("652874"),
        s = n("433517");
    n("353926"), n("311089");
    var o = n("777639"),
        l = n("721877"),
        u = n("488832");
    (r = i || (i = {}))[r.EXISTING_USERS = 0] = "EXISTING_USERS", r[r.NEW_USERS = 1] = "NEW_USERS";
    let d = "tabs-v2-experiment-key",
        _ = (0, a.default)((e, t) => ({
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
                }), s.Storage.set(d, t)
            },
            setInitialized: () => {
                e(e => e._experimentCacheInitialized ? e : {
                    _experimentCacheInitialized: !0,
                    _experimentEnabled: !0 === s.Storage.get(d)
                })
            }
        }));

    function c() {
        return E() ? (0, o.getRootNavigationRef)() : void 0
    }

    function E() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _.getState().getExperimentEnabled();
        return (0, u.updateIsInTabsUI)(e), e
    }

    function I() {
        return E(_(e => e.getExperimentEnabled()))
    }
}