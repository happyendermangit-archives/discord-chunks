function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        hasVoiceChannelActivityNotifsEnabled: function() {
            return s
        },
        useVoiceActivityNotificationSettingsExperiment: function() {
            return u
        }
    });
    var r = n("94498"),
        o = n("281767"),
        i = (0, r.createExperiment)({
            kind: "user",
            id: "2023-11_voice_activity_notification_user",
            label: "Voice Activity Notifications for User",
            defaultConfig: {
                enabled: !1
            },
            treatments: [{
                id: 1,
                label: "Voice Activity Notifications are enabled for user",
                config: {
                    enabled: !0
                }
            }, {
                id: 2,
                label: "Control for AA test. Voice Activity Notifications are NOT enabled for user.",
                config: {
                    enabled: !1
                }
            }]
        }),
        a = (0, r.createExperiment)({
            kind: "guild",
            id: "2023-11_voice_activity_notification_guild",
            label: "General Voice Channel Notifications for Guild",
            defaultConfig: {
                voiceChannelActivityNotifsEnabled: !1
            },
            treatments: [{
                id: 2,
                label: "Deadchat notifs disabled, voice channel activity notifs enabled",
                config: {
                    voiceChannelActivityNotifsEnabled: !0
                }
            }]
        });

    function u(e) {
        var t, n = a.useExperiment({
                location: "useVoiceActivityNotificationSettingsExperiment",
                guildId: null !== (t = null == e ? void 0 : e.getGuildId()) && void 0 !== t ? t : o.EMPTY_STRING_SNOWFLAKE_ID
            }, {
                disable: (null == e ? void 0 : e.type) !== o.ChannelTypes.GUILD_VOICE,
                autoTrackExposure: !1
            }).voiceChannelActivityNotifsEnabled,
            r = i.useExperiment({
                location: "useVoiceActivityNotificationSettingsExperiment"
            }, {
                disable: (null == e ? void 0 : e.type) !== o.ChannelTypes.GUILD_VOICE || !n,
                autoTrackExposure: !0
            }).enabled;
        return (null == e ? void 0 : e.type) === o.ChannelTypes.GUILD_VOICE && n && r
    }

    function s(e) {
        var t;
        return a.getCurrentConfig({
            guildId: null !== (t = null == e ? void 0 : e.getGuildId()) && void 0 !== t ? t : o.EMPTY_STRING_SNOWFLAKE_ID,
            location: "hasVoiceChannelActivityNotifsEnabled"
        }).voiceChannelActivityNotifsEnabled
    }
}