function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isGamingVoiceActivityEnabled: function() {
            return i
        },
        useIsGamingVoiceActivityEnabled: function() {
            return o
        }
    });
    var r = (0, n("94498").createExperiment)({
        kind: "user",
        id: "2024-01_guild_gaming_voice_activity",
        label: "Guild Gaming Voice Activity",
        defaultConfig: {
            shouldSubscribeToGuildMemberUpdates: !1,
            showGamingVoiceActivity: !1
        },
        treatments: [{
            id: 0,
            label: "Control",
            config: {
                shouldSubscribeToGuildMemberUpdates: !0,
                showGamingVoiceActivity: !1
            }
        }, {
            id: 1,
            label: "Badge the server icon & show gamers in the tooltip if gamers are in VC",
            config: {
                shouldSubscribeToGuildMemberUpdates: !0,
                showGamingVoiceActivity: !0
            }
        }]
    });

    function o(e, t) {
        return r.useExperiment({
            location: e
        }, {
            autoTrackExposure: t
        }).showGamingVoiceActivity
    }

    function i(e, t) {
        return r.getCurrentConfig({
            location: e
        }, {
            autoTrackExposure: t
        }).showGamingVoiceActivity
    }
    t.default = r
}