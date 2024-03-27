function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("818083");
    let r = (0, i.createExperiment)({
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
        getConfig(e, t) {
            let n = r.getCurrentConfig({
                location: "e1c55b_1"
            }, {
                autoTrackExposure: e
            });
            return !this.supportsBandwidthEstimationExperimentFullname(n.fullname, t) && (n.enabled = !1), n
        },
        supportsBandwidthEstimationExperimentFullname(e, t) {
            let n = this.getMediaEngineExperiments(e);
            if (null === n) return !1;
            for (let e of n)
                if (!t.includes(e)) return !1;
            return !0
        },
        getMediaEngineExperiments(e) {
            let t = e.split("/");
            return 3 !== t.length || "bandwidth_estimation" !== t[0] ? null : t[1].split(",").filter(e => 0 !== e.length)
        }
    }
}