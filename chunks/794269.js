function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("818083");
    t.default = (0, i.createExperiment)({
        kind: "user",
        id: "2023-11_video_quality_measurement_hwdec",
        label: "Video Quality Measurement Hardware Decoding",
        defaultConfig: {
            extraOptions: ""
        },
        treatments: [{
            id: 0,
            label: "Control",
            config: {
                extraOptions: ""
            }
        }, {
            id: 1,
            label: "Enabled, default 500ms buffer",
            config: {
                extraOptions: ",hwdec"
            }
        }, {
            id: 2,
            label: "Enabled, 750ms buffer",
            config: {
                extraOptions: ",hwdec,staleFrameThresholdMs:750"
            }
        }, {
            id: 3,
            label: "Enabled, 1s buffer",
            config: {
                extraOptions: ",hwdec,staleFrameThresholdMs:1000"
            }
        }, {
            id: 4,
            label: "Disabled, 750ms buffer",
            config: {
                extraOptions: ",staleFrameThresholdMs:750"
            }
        }, {
            id: 5,
            label: "Disabled, 1s buffer",
            config: {
                extraOptions: ",staleFrameThresholdMs:1000"
            }
        }]
    })
}