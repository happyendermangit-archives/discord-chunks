function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r, s, a, o = n("442837"),
        l = n("570140"),
        u = n("353926");
    class d extends(a = o.default.Store) {
        initialize() {
            this.waitFor(u.default)
        }
        get hasLoadedExperiments() {
            return u.default.hasLoadedExperiments
        }
        getExperimentBucket(e) {
            return u.default.getUserExperimentBucket(e)
        }
        getEligibleExperiment(e) {
            return u.default.getUserExperimentDescriptor(e)
        }
        getEligibleExperiments() {
            return u.default.getAllUserExperimentDescriptors()
        }
        getRegisteredExperiments() {
            return u.default.getRegisteredExperiments()
        }
        getExperimentOverrides() {
            return u.default.getAllExperimentOverrideDescriptors()
        }
        getOverrideExperimentDescriptor(e) {
            return u.default.getExperimentOverrideDescriptor(e)
        }
    }

    function _() {
        return !0
    }
    s = "LegacyExperimentStore", (r = "displayName") in(i = d) ? Object.defineProperty(i, r, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = s, t.default = new d(l.default, {
        LOGOUT: _,
        LOGIN_SUCCESS: _,
        CONNECTION_OPEN: _,
        EXPERIMENTS_FETCH_SUCCESS: _,
        OVERLAY_INITIALIZE: _,
        CACHE_LOADED: _,
        EXPERIMENTS_FETCH_FAILURE: _,
        EXPERIMENT_REGISTER_LEGACY: _,
        EXPERIMENT_OVERRIDE_BUCKET: _
    })
}