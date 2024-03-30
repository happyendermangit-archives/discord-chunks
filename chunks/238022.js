function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        shouldReadWriteAudioSettings: function() {
            return o
        }
    });
    var r = (0, n("94498").createExperiment)({
        kind: "user",
        id: "2022-09_remote_audio_settings",
        label: "Remote Audio Settings",
        defaultConfig: {
            readWriteRemoteSettings: !1
        },
        treatments: [{
            id: 1,
            label: "Read/write remote audio settings",
            config: {
                readWriteRemoteSettings: !0
            }
        }]
    });

    function o() {
        return r.getCurrentConfig({
            location: "da0fa6_1"
        }, {
            autoTrackExposure: !1
        }).readWriteRemoteSettings
    }
}