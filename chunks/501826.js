function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        overrideBucket: function() {
            return l
        },
        registerGuildExperiment: function() {
            return s
        },
        registerUserExperiment: function() {
            return u
        },
        trackExposureToExperiment: function() {
            return a
        }
    });
    var r = n("629815"),
        o = n("963041"),
        i = n("147746");

    function a(e, t, n) {
        var r, i, a, u, s;
        o.default.trackExposure({
            experimentId: e,
            descriptor: t,
            location: null == n ? void 0 : n.location,
            location_stack: null == n ? void 0 : n.analyticsLocations,
            fingerprint: null == n ? void 0 : n.fingerprint,
            excluded: null == n ? void 0 : n.excluded,
            exposureType: null == n ? void 0 : n.exposureType
        })
    }

    function u(e) {
        var t = e.id,
            n = e.title,
            r = e.description,
            a = e.buckets;
        return (0, o.registerExperiment)({
            experimentId: t,
            experimentType: i.ExperimentTypes.USER,
            title: n,
            description: r,
            buckets: a
        }), {
            id: t
        }
    }

    function s(e) {
        var t = e.id,
            n = e.title,
            r = e.description,
            a = e.buckets;
        return (0, o.registerExperiment)({
            experimentId: t,
            experimentType: i.ExperimentTypes.GUILD,
            title: n,
            description: r,
            buckets: a
        }), {
            id: t
        }
    }

    function l(e, t) {
        r.default.dispatch({
            type: "EXPERIMENT_OVERRIDE_BUCKET",
            experimentId: e,
            experimentBucket: t
        })
    }
}