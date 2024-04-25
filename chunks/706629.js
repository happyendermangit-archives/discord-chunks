function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("818083");
    t.default = (0, i.createExperiment)({
        kind: "guild",
        id: "2024-04_audio_short_circuit_guild",
        label: "Audio processing short circuiting (guild)",
        defaultConfig: {
            muteBeforeProcessing: !1,
            pttBeforeProcessing: !1,
            skipEncode: !1
        },
        treatments: [{
            id: 1,
            label: "Mute before processing",
            config: {
                muteBeforeProcessing: !0,
                pttBeforeProcessing: !1,
                skipEncode: !1
            }
        }, {
            id: 2,
            label: "PTT before processing",
            config: {
                muteBeforeProcessing: !1,
                pttBeforeProcessing: !0,
                skipEncode: !1
            }
        }, {
            id: 3,
            label: "Mute + PTT before processing",
            config: {
                muteBeforeProcessing: !0,
                pttBeforeProcessing: !0,
                skipEncode: !1
            }
        }, {
            id: 4,
            label: "Skip encode",
            config: {
                muteBeforeProcessing: !1,
                pttBeforeProcessing: !1,
                skipEncode: !0
            }
        }, {
            id: 5,
            label: "Mute before processing, skip encode",
            config: {
                muteBeforeProcessing: !0,
                pttBeforeProcessing: !1,
                skipEncode: !0
            }
        }, {
            id: 6,
            label: "PTT before processing, skip encode",
            config: {
                muteBeforeProcessing: !1,
                pttBeforeProcessing: !0,
                skipEncode: !0
            }
        }, {
            id: 7,
            label: "Mute + PTT before processing, skip encode",
            config: {
                muteBeforeProcessing: !0,
                pttBeforeProcessing: !0,
                skipEncode: !0
            }
        }]
    })
}