function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        trackExposureToExperiment: function() {
            return a
        },
        registerUserExperiment: function() {
            return o
        },
        registerGuildExperiment: function() {
            return l
        },
        overrideBucket: function() {
            return u
        }
    });
    var i = n("913144"),
        s = n("789563"),
        r = n("565034");

    function a(e, t, n) {
        var i, r;
        s.default.trackExposure({
            experimentId: e,
            descriptor: t,
            location: null == n ? void 0 : n.location,
            location_stack: null == n ? void 0 : n.analyticsLocations,
            fingerprint: null == n ? void 0 : n.fingerprint,
            excluded: null == n ? void 0 : n.excluded,
            exposureType: null == n ? void 0 : n.exposureType
        })
    }

    function o(e) {
        let {
            id: t,
            title: n,
            description: i,
            buckets: a
        } = e;
        return (0, s.registerExperiment)({
            experimentId: t,
            experimentType: r.ExperimentTypes.USER,
            title: n,
            description: i,
            buckets: a
        }), {
            id: t
        }
    }

    function l(e) {
        let {
            id: t,
            title: n,
            description: i,
            buckets: a
        } = e;
        return (0, s.registerExperiment)({
            experimentId: t,
            experimentType: r.ExperimentTypes.GUILD,
            title: n,
            description: i,
            buckets: a
        }), {
            id: t
        }
    }

    function u(e, t) {
        i.default.dispatch({
            type: "EXPERIMENT_OVERRIDE_BUCKET",
            experimentId: e,
            experimentBucket: t
        })
    }
}