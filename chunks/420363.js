function(e, t, n) {
    "use strict";
    n.r(t);
    let i = (0, n("818083").createExperiment)({
        kind: "user",
        id: "2023-08_video_quality_measurement_v1",
        label: "Video Quality Measurement",
        defaultConfig: {
            enabled: !1,
            measurement: ""
        },
        treatments: [{
            id: 1,
            label: "Measure PSNR [DEPRECATED DO NOT USE]",
            config: {
                enabled: !0,
                measurement: "psnr"
            }
        }, {
            id: 2,
            label: "Measure PSNR Only",
            config: {
                enabled: !0,
                measurement: "imageQualityWebrtcPsnrDb"
            }
        }, {
            id: 3,
            label: "Measure VMAF Only",
            config: {
                enabled: !0,
                measurement: "imageQualityVmaf_v061"
            }
        }, {
            id: 4,
            label: "Measure PSNR and VMAF",
            config: {
                enabled: !0,
                measurement: "imageQualityWebrtcPsnrDb,imageQualityVmaf_v061"
            }
        }, {
            id: 5,
            label: "Measure PSNR Only, 5000ms",
            config: {
                enabled: !0,
                measurement: "imageQualityWebrtcPsnrDb:5000"
            }
        }, {
            id: 6,
            label: "Measure VMAF Only, 5000ms",
            config: {
                enabled: !0,
                measurement: "imageQualityVmaf_v061:5000"
            }
        }, {
            id: 7,
            label: "Measure PSNR and VMAF, 5000ms",
            config: {
                enabled: !0,
                measurement: "imageQualityWebrtcPsnrDb:5000,imageQualityVmaf_v061:5000"
            }
        }, {
            id: 8,
            label: "Measure PSNR Only, 10000ms",
            config: {
                enabled: !0,
                measurement: "imageQualityWebrtcPsnrDb:10000"
            }
        }, {
            id: 9,
            label: "Measure VMAF Only, 10000ms",
            config: {
                enabled: !0,
                measurement: "imageQualityVmaf_v061:10000"
            }
        }, {
            id: 10,
            label: "Measure PSNR and VMAF, 10000ms",
            config: {
                enabled: !0,
                measurement: "imageQualityWebrtcPsnrDb:10000,imageQualityVmaf_v061:10000"
            }
        }, {
            id: 11,
            label: "Measure PSNR Only, 30000ms",
            config: {
                enabled: !0,
                measurement: "imageQualityWebrtcPsnrDb:30000"
            }
        }, {
            id: 12,
            label: "Measure VMAF Only, 30000ms",
            config: {
                enabled: !0,
                measurement: "imageQualityVmaf_v061:30000"
            }
        }, {
            id: 13,
            label: "Measure PSNR and VMAF, 30000ms",
            config: {
                enabled: !0,
                measurement: "imageQualityWebrtcPsnrDb:30000,imageQualityVmaf_v061:30000"
            }
        }]
    });
    t.default = {
        isFeatureSupportedOnPlatform: () => !0,
        getConfig(e) {
            let t = i.getCurrentConfig({
                location: "e1c55b_1"
            }, {
                autoTrackExposure: e
            });
            return !this.isFeatureSupportedOnPlatform() && (t.enabled = !1), t
        }
    }
}