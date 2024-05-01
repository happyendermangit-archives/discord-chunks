function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isGamingVoiceActivityEnabled: function() {
            return a
        },
        useIsGamingVoiceActivityEnabled: function() {
            return r
        }
    });
    let i = (0, n("818083").createExperiment)({
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

    function r(e, t) {
        let {
            showGamingVoiceActivity: n
        } = i.useExperiment({
            location: e
        }, {
            autoTrackExposure: t
        });
        return n
    }

    function a(e, t) {
        let {
            showGamingVoiceActivity: n
        } = i.getCurrentConfig({
            location: e
        }, {
            autoTrackExposure: t
        });
        return n
    }
    t.default = i
}