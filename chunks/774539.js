function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useIsVoiceUserGameActivityEnabled: function() {
            return s
        },
        isVoiceUserGameActivityEnabled: function() {
            return i
        },
        default: function() {
            return l
        }
    });
    var a = n("862205");
    let r = (0, a.createExperiment)({
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

    function s(e, t) {
        let {
            showGameIcon: n
        } = r.useExperiment({
            location: e
        }, {
            autoTrackExposure: t
        });
        return n
    }

    function i(e, t) {
        let {
            showGameIcon: n
        } = r.getCurrentConfig({
            location: e
        }, {
            autoTrackExposure: t
        });
        return n
    }
    var l = r
}