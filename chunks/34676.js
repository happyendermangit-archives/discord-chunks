function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        NotificationLabels: function() {
            return a
        },
        NotificationLabel: function() {
            return g
        },
        MessageNotificationSettings: function() {
            return m
        },
        trackGuildNotificationSettingsUpdate: function() {
            return A
        },
        muteConfigToTimestamp: function() {
            return p
        },
        trackChannelNotificationSettingsUpdate: function() {
            return S
        },
        getCurrentGuildSettings: function() {
            return M
        },
        getManyCurrentGuildSettings: function() {
            return N
        },
        getCurrentChannelSettings: function() {
            return v
        },
        getManyCurrentChannelSettings: function() {
            return C
        },
        trackAccountNotificationSettingUpdated: function() {
            return O
        }
    }), n("702976"), n("222007");
    var i, a, l, s, r = n("716241"),
        u = n("637929"),
        d = n("42203"),
        o = n("282109"),
        c = n("599110"),
        _ = n("568734"),
        f = n("49111"),
        h = n("133335"),
        E = n("397336");
    (l = i || (i = {})).GUILD = "guild", l.CHANNEL = "channel", l.ACCOUNT = "account", (s = a || (a = {})).ForumThreadsCreatedOn = "enabled forum thread created notifs", s.ForumThreadsCreatedOff = "disabled forum thread created notifs", s.SuppressEveryoneOn = "enabled suppress everyone", s.SuppressEveryoneOff = "disabled suppress everyone", s.SuppressRolesOn = "enabled suppress roles", s.SuppressRolesOff = "disabled suppress roles", s.HighlightsOn = "enabled highlights", s.HighlightsOff = "disabled highlights", s.MobilePushOn = "enabled mobile push notifications", s.MobilePushOff = "disabled mobile push notifications", s.UnreadsAll = "unreads set to all messages", s.UnreadsMentions = "unreads set to mentions", s.UnreadsDefault = "unreads set to the default", s.NotificationsAll = "notifications set to all messages", s.NotificationsMentions = "notifications set to mentions", s.NotificationsNothing = "notifications set to nothing", s.NotificationsDefault = "notifications set to the default", s.PresetAll = "notification preset set to all messages", s.PresetMentions = "notification preset set to mentions", s.PresetNothing = "notification preset set to nothing", s.PresetDefault = "notification preset set to the default", s.OptedIn = "opted in to entity", s.OptedOut = "opted out from entity", s.Favorited = "favorited", s.UnFavorited = "unfavorited", s.Muted = "muted", s.Unmuted = "unmuted", s.MutedScheduledEvents = "muted scheduled events", s.UnmutedScheduledEvents = "unmuted scheduled events", s.OverrideCreated = "channel override created", s.OverrideDeleted = "channel override deleted";
    let g = {
            forumThreadsCreated: e => e ? "enabled forum thread created notifs" : "disabled forum thread created notifs",
            suppressEveryone: e => e ? "enabled suppress everyone" : "disabled suppress everyone",
            suppressRoles: e => e ? "enabled suppress roles" : "disabled suppress roles",
            highlights: e => e ? "enabled highlights" : "disabled highlights",
            mobilePush: e => e ? "enabled mobile push notifications" : "disabled mobile push notifications",
            optedIn: e => e ? "opted in to entity" : "opted out from entity",
            favorited: e => e ? "favorited" : "unfavorited",
            muted: e => e ? "muted" : "unmuted",
            mutedEvents: e => e ? "muted scheduled events" : "unmuted scheduled events",
            unreads: e => e === h.UnreadSetting.ALL_MESSAGES ? "unreads set to all messages" : e === h.UnreadSetting.ONLY_MENTIONS ? "unreads set to mentions" : "unreads set to the default",
            notifications: e => e === f.UserNotificationSettings.ALL_MESSAGES ? "notifications set to all messages" : e === f.UserNotificationSettings.ONLY_MENTIONS ? "notifications set to mentions" : e === f.UserNotificationSettings.NO_MESSAGES ? "notifications set to nothing" : "notifications set to the default"
        },
        m = Object.freeze({
            [f.UserNotificationSettings.ALL_MESSAGES]: "All",
            [f.UserNotificationSettings.ONLY_MENTIONS]: "Mentions",
            [f.UserNotificationSettings.NO_MESSAGES]: "Nothing",
            [f.UserNotificationSettings.NULL]: null
        });

    function A(e, t, n, i, a) {
        var l, s;
        let d = function(e) {
                var t, n, i, a, l, s, r;
                let u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    d = null != u.mute_config && null != u.mute_config.end_time ? new Date(u.mute_config.end_time).getTime() : e.guild_muted_until,
                    o = null != u.message_notifications ? m[u.message_notifications] : e.guild_message_notification_settings;
                return {
                    guild_muted_until: d,
                    guild_flags: null !== (t = u.flags) && void 0 !== t ? t : e.guild_flags,
                    guild_is_muted: null !== (n = u.muted) && void 0 !== n ? n : e.guild_is_muted,
                    guild_message_notification_settings: o,
                    guild_suppress_roles: null !== (i = u.suppress_roles) && void 0 !== i ? i : e.guild_suppress_roles,
                    guild_receive_mobile_push: null !== (a = u.mobile_push) && void 0 !== a ? a : e.guild_receive_mobile_push,
                    guild_notify_highlights: null !== (l = u.notify_highlights) && void 0 !== l ? l : e.guild_notify_highlights,
                    guild_suppress_everyone: null !== (s = u.suppress_everyone) && void 0 !== s ? s : e.guild_suppress_everyone,
                    guild_scheduled_events_muted: null !== (r = u.mute_scheduled_events) && void 0 !== r ? r : e.guild_scheduled_events_muted
                }
            },
            o = d(n),
            c = d(M(e), t),
            h = T(o, c, "RETURN_PREVIOUS_WHEN_CHANGED"),
            g = null !== (l = h("guild_flags")) && void 0 !== l ? l : 0,
            A = (null !== (s = c.guild_flags) && void 0 !== s ? s : 0) ^ g,
            p = 0 === (0, _.removeFlags)(A, E.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_OFF, E.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_ON);
        r.default.trackWithMetadata(f.AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, {
            ...c,
            ...u.default.getStats(e),
            location: a,
            guild_id: e,
            update_type: "guild",
            label: i,
            guild_flags_old: h("guild_flags"),
            guild_is_muted_old: h("guild_is_muted"),
            guild_suppress_roles_old: h("guild_suppress_roles"),
            guild_notify_highlights_old: h("guild_notify_highlights"),
            guild_suppress_everyone_old: h("guild_suppress_everyone"),
            guild_receive_mobile_push_old: h("guild_receive_mobile_push"),
            guild_scheduled_events_muted_old: h("guild_scheduled_events_muted"),
            guild_message_notification_settings_old: h("guild_message_notification_settings"),
            is_opt_in_only_change: p
        })
    }

    function T(e, t, n) {
        return i => {
            if ("RETURN_PREVIOUS_WHEN_CHANGED" === n) return e[i] !== t[i] ? e[i] : void 0
        }
    }

    function p(e) {
        return null != e && null != e.end_time ? new Date(e.end_time).getTime() : null
    }

    function S(e, t, n, i, a, l) {
        var s, o;
        let c = function(t) {
                var n, i;
                let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    l = null !== (n = a.muted) && void 0 !== n ? n : null == t ? void 0 : t.channel_is_muted,
                    s = null != a.message_notifications ? m[a.message_notifications] : null == t ? void 0 : t.channel_message_notification_settings,
                    r = null == e ? null : !0 === l || null != s;
                return {
                    channel_is_muted: l,
                    channel_is_overridden: r,
                    channel_flags: null !== (i = a.flags) && void 0 !== i ? i : null == t ? void 0 : t.channel_flags,
                    channel_message_notification_settings: s,
                    channel_muted_until: p(a.mute_config)
                }
            },
            h = c(i),
            g = c(v(e, t), n),
            A = T(h, g, "RETURN_PREVIOUS_WHEN_CHANGED"),
            S = d.default.getChannel(t),
            M = null !== (s = A("channel_flags")) && void 0 !== s ? s : 0,
            N = (null !== (o = g.channel_flags) && void 0 !== o ? o : 0) ^ M,
            C = 0 === (0, _.removeFlags)(N, E.ChannelNotificationSettingsFlags.FAVORITED, E.ChannelNotificationSettingsFlags.OPT_IN_ENABLED);
        r.default.trackWithMetadata(f.AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, {
            ...g,
            ...u.default.getStats(e),
            location: l,
            guild_id: e,
            channel_id: t,
            update_type: "channel",
            label: a,
            parent_id: null != S ? S.parent_id : null,
            channel_flags_old: A("channel_flags"),
            channel_is_muted_old: A("channel_is_muted"),
            channel_muted_until_old: A("channel_muted_until"),
            channel_is_overridden_old: A("channel_is_overridden"),
            channel_message_notification_settings_old: A("channel_message_notification_settings"),
            is_opt_in_only_change: C
        })
    }

    function M(e) {
        let t = o.default.isMuted(e),
            n = o.default.getMuteConfig(e);
        return {
            guild_suppress_everyone: o.default.isSuppressEveryoneEnabled(e),
            guild_suppress_roles: o.default.isSuppressRolesEnabled(e),
            guild_scheduled_events_muted: o.default.isMuteScheduledEventsEnabled(e),
            guild_is_muted: t,
            guild_muted_until: null != n && null != n.end_time ? new Date(n.end_time).getTime() : null,
            guild_receive_mobile_push: o.default.isMobilePushEnabled(e),
            guild_message_notification_settings: m[o.default.getMessageNotifications(e)],
            guild_notify_highlights: o.default.getNotifyHighlights(e),
            guild_flags: o.default.getGuildFlags(e)
        }
    }

    function N(e) {
        let t = new Map;
        return e.forEach(e => t.set(e, M(e))), t
    }

    function v(e, t) {
        let n = o.default.isChannelMuted(e, t),
            i = o.default.getChannelMuteConfig(e, t);
        return {
            channel_is_muted: n,
            channel_muted_until: null != i && null != i.end_time ? new Date(i.end_time).getTime() : null,
            channel_message_notification_settings: m[o.default.getChannelMessageNotifications(e, t)],
            channel_flags: o.default.getChannelIdFlags(e, t)
        }
    }

    function C(e, t) {
        let n = new Map;
        return t.forEach(t => n.set(t, v(e, t))), n
    }

    function O(e, t) {
        c.default.track(f.AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, {
            update_type: "account",
            quiet_mode_enabled: e.quietMode,
            quiet_mode_enabled_old: t.quietMode
        })
    }
}