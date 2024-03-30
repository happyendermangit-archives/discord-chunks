function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isVoiceUserGameActivityEnabled: function() {
            return i
        },
        useIsVoiceUserGameActivityEnabled: function() {
            return o
        }
    });
    var r = (0, n("94498").createExperiment)({
        kind: "user",
        id: "2024-01_voice_user_game_activity",
        label: "Voice User Game Activity",
        defaultConfig: {
            showGameIcon: !1
        },
        treatments: [{
            id: 1,
            label: "Show game icon next to the Voice User in VC",
            config: {
                showGameIcon: !0
            }
        }]
    });

    function o(e, t) {
        return r.useExperiment({
            location: e
        }, {
            autoTrackExposure: t
        }).showGameIcon
    }

    function i(e, t) {
        return r.getCurrentConfig({
            location: e
        }, {
            autoTrackExposure: t
        }).showGameIcon
    }
    t.default = r
}