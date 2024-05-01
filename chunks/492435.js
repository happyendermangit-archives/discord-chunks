function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        overrideBucket: function() {
            return u
        },
        registerGuildExperiment: function() {
            return l
        },
        registerUserExperiment: function() {
            return o
        },
        trackExposureToExperiment: function() {
            return s
        }
    });
    var i = n("570140"),
        r = n("353926"),
        a = n("987338");

    function s(e, t, n) {
        var i, a;
        r.default.trackExposure({
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
            buckets: s
        } = e;
        return (0, r.registerExperiment)({
            experimentId: t,
            experimentType: a.ExperimentTypes.USER,
            title: n,
            description: i,
            buckets: s
        }), {
            id: t
        }
    }

    function l(e) {
        let {
            id: t,
            title: n,
            description: i,
            buckets: s
        } = e;
        return (0, r.registerExperiment)({
            experimentId: t,
            experimentType: a.ExperimentTypes.GUILD,
            title: n,
            description: i,
            buckets: s
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