function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    }), n("222007");
    var i = n("862205");
    let s = (0, i.createExperiment)({
        kind: "user",
        id: "2023-10_bandwidth_estimation_v1",
        label: "Bandwidth Estimation",
        defaultConfig: {
            enabled: !1,
            fullname: ""
        },
        treatments: [{
            id: 1,
            label: "Sender: Loss-Based BWE V2",
            config: {
                enabled: !0,
                fullname: "bandwidth_estimation/loss-based-bwe-v2/"
            }
        }, {
            id: 2,
            label: "Sender: Robust Estimator",
            config: {
                enabled: !0,
                fullname: "bandwidth_estimation/robust-estimator/"
            }
        }, {
            id: 3,
            label: "Sender: Loss-Based BWE V2 + Robust Estimator",
            config: {
                enabled: !0,
                fullname: "bandwidth_estimation/loss-based-bwe-v2,robust-estimator/"
            }
        }, {
            id: 4,
            label: "Sender: Trendline Window Size",
            config: {
                enabled: !0,
                fullname: "bandwidth_estimation/trendline-window-size/"
            }
        }, {
            id: 5,
            label: "Sender: Trendline Window Size + Robust Estimator",
            config: {
                enabled: !0,
                fullname: "bandwidth_estimation/trendline-window-size,robust-estimator/"
            }
        }, {
            id: 6,
            label: "Worker: Loss-Based BWE V2",
            config: {
                enabled: !0,
                fullname: "bandwidth_estimation//loss-based-bwe-v2"
            }
        }, {
            id: 7,
            label: "Worker: Robust Estimator",
            config: {
                enabled: !0,
                fullname: "bandwidth_estimation//robust-estimator"
            }
        }, {
            id: 8,
            label: "Worker: Loss-Based BWE V2 + Robust Estimator",
            config: {
                enabled: !0,
                fullname: "bandwidth_estimation//loss-based-bwe-v2,robust-estimator"
            }
        }, {
            id: 9,
            label: "Worker: Trendline Window Size",
            config: {
                enabled: !0,
                fullname: "bandwidth_estimation//trendline-window-size"
            }
        }, {
            id: 10,
            label: "Worker: Trendline Window Size + Robust Estimator",
            config: {
                enabled: !0,
                fullname: "bandwidth_estimation//trendline-window-size,robust-estimator"
            }
        }, {
            id: 11,
            label: "Sender + Worker: Trendline Window Size",
            config: {
                enabled: !0,
                fullname: "bandwidth_estimation/trendline-window-size/trendline-window-size"
            }
        }, {
            id: 12,
            label: "Sender + Worker: Trendline Window Size + Robust Estimator",
            config: {
                enabled: !0,
                fullname: "bandwidth_estimation/trendline-window-size,robust-estimator/trendline-window-size,robust-estimator"
            }
        }, {
            id: 13,
            label: "Sender + Worker: Loss-Based-BWE V2 + Trendline Window Size + Robust Estimator",
            config: {
                enabled: !0,
                fullname: "bandwidth_estimation/loss-based-bwe-v2,trendline-window-size,robust-estimator/loss-based-bwe-v2,trendline-window-size,robust-estimator"
            }
        }, {
            id: 14,
            label: "Sender + Worker: Trendline Window Duration 50ms + Robust Estimator",
            config: {
                enabled: !0,
                fullname: "bandwidth_estimation/trendline-window-duration-50,robust-estimator/trendline-window-duration-50,robust-estimator"
            }
        }, {
            id: 15,
            label: "Sender + Worker: Trendline Window Duration 100ms + Robust Estimator",
            config: {
                enabled: !0,
                fullname: "bandwidth_estimation/trendline-window-duration-100,robust-estimator/trendline-window-duration-100,robust-estimator"
            }
        }, {
            id: 16,
            label: "Sender + Worker: Trendline Window Duration 250ms + Robust Estimator",
            config: {
                enabled: !0,
                fullname: "bandwidth_estimation/trendline-window-duration-250,robust-estimator/trendline-window-duration-250,robust-estimator"
            }
        }, {
            id: 17,
            label: "Sender + Worker: Trendline Window Duration 500ms + Robust Estimator",
            config: {
                enabled: !0,
                fullname: "bandwidth_estimation/trendline-window-duration-500,robust-estimator/trendline-window-duration-500,robust-estimator"
            }
        }, {
            id: 18,
            label: "Sender + Worker: Trendline Window Duration 1000ms + Robust Estimator",
            config: {
                enabled: !0,
                fullname: "bandwidth_estimation/trendline-window-duration-1000,robust-estimator/trendline-window-duration-1000,robust-estimator"
            }
        }, {
            id: 19,
            label: "Sender + Worker: Trendline Window Duration 2500ms + Robust Estimator",
            config: {
                enabled: !0,
                fullname: "bandwidth_estimation/trendline-window-duration-2500,robust-estimator/trendline-window-duration-2500,robust-estimator"
            }
        }, {
            id: 20,
            label: "Sender + Worker: Trendline Window Duration 3750ms + Robust Estimator",
            config: {
                enabled: !0,
                fullname: "bandwidth_estimation/trendline-window-duration-3750,robust-estimator/trendline-window-duration-3750,robust-estimator"
            }
        }, {
            id: 21,
            label: "Sender + Worker: Trendline Window Duration 5000ms + Robust Estimator",
            config: {
                enabled: !0,
                fullname: "bandwidth_estimation/trendline-window-duration-5000,robust-estimator/trendline-window-duration-5000,robust-estimator"
            }
        }, {
            id: 22,
            label: "Sender + Worker: Trendline Window Duration 6250ms + Robust Estimator",
            config: {
                enabled: !0,
                fullname: "bandwidth_estimation/trendline-window-duration-6250,robust-estimator/trendline-window-duration-6250,robust-estimator"
            }
        }, {
            id: 23,
            label: "Sender + Worker: Trendline Window Duration 7500ms + Robust Estimator",
            config: {
                enabled: !0,
                fullname: "bandwidth_estimation/trendline-window-duration-7500,robust-estimator/trendline-window-duration-7500,robust-estimator"
            }
        }, {
            id: 24,
            label: "Sender + Worker: Trendline Window Duration 3750ms + Robust Estimator + RC Link Capacity Fix (Worker-only)",
            config: {
                enabled: !0,
                fullname: "bandwidth_estimation/trendline-window-duration-3750,robust-estimator/trendline-window-duration-3750,robust-estimator,rate-control-link-capacity-fix"
            }
        }]
    });
    var r = {
        getConfig(e, t) {
            let n = s.getCurrentConfig({
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