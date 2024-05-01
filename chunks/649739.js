function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isVoiceUserGameActivityEnabled: function() {
            return a
        },
        useIsVoiceUserGameActivityEnabled: function() {
            return r
        }
    });
    let i = (0, n("818083").createExperiment)({
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

    function r(e, t) {
        let {
            showGameIcon: n
        } = i.useExperiment({
            location: e
        }, {
            autoTrackExposure: t
        });
        return n
    }

    function a(e, t) {
        let {
            showGameIcon: n
        } = i.getCurrentConfig({
            location: e
        }, {
            autoTrackExposure: t
        });
        return n
    }
    t.default = i
}