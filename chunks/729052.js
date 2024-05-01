function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        hasVoiceChannelActivityNotifsEnabled: function() {
            return l
        },
        useVoiceActivityNotificationSettingsExperiment: function() {
            return o
        }
    });
    var i = n("818083"),
        r = n("981631");
    let s = (0, i.createExperiment)({
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
        a = (0, i.createExperiment)({
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

    function o(e) {
        var t;
        let {
            voiceChannelActivityNotifsEnabled: n
        } = a.useExperiment({
            location: "useVoiceActivityNotificationSettingsExperiment",
            guildId: null !== (t = null == e ? void 0 : e.getGuildId()) && void 0 !== t ? t : r.EMPTY_STRING_SNOWFLAKE_ID
        }, {
            disable: (null == e ? void 0 : e.type) !== r.ChannelTypes.GUILD_VOICE,
            autoTrackExposure: !1
        }), {
            enabled: i
        } = s.useExperiment({
            location: "useVoiceActivityNotificationSettingsExperiment"
        }, {
            disable: (null == e ? void 0 : e.type) !== r.ChannelTypes.GUILD_VOICE || !n,
            autoTrackExposure: !0
        });
        return (null == e ? void 0 : e.type) === r.ChannelTypes.GUILD_VOICE && n && i
    }

    function l(e) {
        var t;
        let {
            voiceChannelActivityNotifsEnabled: n
        } = a.getCurrentConfig({
            guildId: null !== (t = null == e ? void 0 : e.getGuildId()) && void 0 !== t ? t : r.EMPTY_STRING_SNOWFLAKE_ID,
            location: "hasVoiceChannelActivityNotifsEnabled"
        });
        return n
    }
}