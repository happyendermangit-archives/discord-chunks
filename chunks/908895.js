function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("94498"),
        o = (0, r.createExperiment)({
            kind: "user",
            id: "2024-03_remb_experiment",
            label: "Bandwidth Estimation - REMB",
            defaultConfig: {
                enabled: !0,
                fullname: "bandwidth_estimation/trendline-window-duration-3750,robust-estimator/trendline-window-duration-3750,robust-estimator"
            },
            treatments: [{
                id: 1,
                label: "Sender + Worker: Trendline Window Duration 7500ms + Robust Estimator, worker REMB PLI only",
                config: {
                    enabled: !0,
                    fullname: "bandwidth_estimation/trendline-window-duration-3750,robust-estimator/trendline-window-duration-3750,robust-estimator,worker-bitrate-remb-pli"
                }
            }, {
                id: 2,
                label: "Sender + Worker: Trendline Window Duration 7500ms + Robust Estimator, worker continuous REMB only",
                config: {
                    enabled: !0,
                    fullname: "bandwidth_estimation/trendline-window-duration-3750,robust-estimator/trendline-window-duration-3750,robust-estimator,worker-bitrate-remb-preemption-v1"
                }
            }, {
                id: 3,
                label: "Sender + Worker: Trendline Window Duration 7500ms + Robust Estimator, worker REMB PLI with continuous",
                config: {
                    enabled: !0,
                    fullname: "bandwidth_estimation/trendline-window-duration-3750,robust-estimator/trendline-window-duration-3750,robust-estimator,worker-bitrate-remb-preemption-v1,worker-bitrate-remb-pli"
                }
            }]
        });
    t.default = {
        getConfig: function(e, t) {
            var n = o.getCurrentConfig({
                location: "e1c55b_1"
            }, {
                autoTrackExposure: e
            });
            return !this.supportsBandwidthEstimationExperimentFullname(n.fullname, t) && (n.enabled = !1), n
        },
        supportsBandwidthEstimationExperimentFullname: function(e, t) {
            var n = this.getMediaEngineExperiments(e);
            if (null === n) return !1;
            var r = !0,
                o = !1,
                i = void 0;
            try {
                for (var a, u = n[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                    var s = a.value;
                    if (!t.includes(s)) return !1
                }
            } catch (e) {
                o = !0, i = e
            } finally {
                try {
                    !r && null != u.return && u.return()
                } finally {
                    if (o) throw i
                }
            }
            return !0
        },
        getMediaEngineExperiments: function(e) {
            var t = e.split("/");
            return 3 !== t.length || "bandwidth_estimation" !== t[0] ? null : t[1].split(",").filter(function(e) {
                return 0 !== e.length
            })
        }
    }
}