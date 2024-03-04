function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var i = n("446674"),
        s = n("913144"),
        r = n("789563");
    class a extends i.default.Store {
        initialize() {
            this.waitFor(r.default)
        }
        get hasLoadedExperiments() {
            return r.default.hasLoadedExperiments
        }
        getExperimentBucket(e) {
            return r.default.getUserExperimentBucket(e)
        }
        getEligibleExperiment(e) {
            return r.default.getUserExperimentDescriptor(e)
        }
        getEligibleExperiments() {
            return r.default.getAllUserExperimentDescriptors()
        }
        getRegisteredExperiments() {
            return r.default.getRegisteredExperiments()
        }
        getExperimentOverrides() {
            return r.default.getAllExperimentOverrideDescriptors()
        }
        getOverrideExperimentDescriptor(e) {
            return r.default.getExperimentOverrideDescriptor(e)
        }
    }

    function o() {
        return !0
    }
    a.displayName = "LegacyExperimentStore";
    var l = new a(s.default, {
        LOGOUT: o,
        LOGIN_SUCCESS: o,
        CONNECTION_OPEN: o,
        EXPERIMENTS_FETCH_SUCCESS: o,
        OVERLAY_INITIALIZE: o,
        CACHE_LOADED: o,
        EXPERIMENTS_FETCH_FAILURE: o,
        EXPERIMENT_REGISTER_LEGACY: o,
        EXPERIMENT_OVERRIDE_BUCKET: o
    })
}