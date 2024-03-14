function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        NotificationSettingsUpdateType: function() {
            return i
        },
        NotificationLabels: function() {
            return s
        },
        NotificationLabel: function() {
            return E
        },
        MessageNotificationSettings: function() {
            return g
        },
        trackGuildNotificationSettingsUpdate: function() {
            return m
        },
        muteConfigToTimestamp: function() {
            return S
        },
        trackChannelNotificationSettingsUpdate: function() {
            return v
        },
        getCurrentGuildSettings: function() {
            return T
        },
        getManyCurrentGuildSettings: function() {
            return I
        },
        getCurrentChannelSettings: function() {
            return C
        },
        getManyCurrentChannelSettings: function() {
            return A
        }
    }), n("702976"), n("222007");
    var i, s, r, a, o = n("716241"),
        l = n("637929"),
        u = n("42203"),
        d = n("282109");
    n("599110");
    var c = n("568734"),
        f = n("49111"),
        _ = n("133335"),
        h = n("397336");
    (r = i || (i = {})).GUILD = "guild", r.CHANNEL = "channel", r.ACCOUNT = "account", (a = s || (s = {})).ForumThreadsCreatedOn = "enabled forum thread created notifs", a.ForumThreadsCreatedOff = "disabled forum thread created notifs", a.SuppressEveryoneOn = "enabled suppress everyone", a.SuppressEveryoneOff = "disabled suppress everyone", a.SuppressRolesOn = "enabled suppress roles", a.SuppressRolesOff = "disabled suppress roles", a.HighlightsOn = "enabled highlights", a.HighlightsOff = "disabled highlights", a.MobilePushOn = "enabled mobile push notifications", a.MobilePushOff = "disabled mobile push notifications", a.UnreadsAll = "unreads set to all messages", a.UnreadsMentions = "unreads set to mentions", a.UnreadsDefault = "unreads set to the default", a.NotificationsAll = "notifications set to all messages", a.NotificationsMentions = "notifications set to mentions", a.NotificationsNothing = "notifications set to nothing", a.NotificationsDefault = "notifications set to the default", a.PresetAll = "notification preset set to all messages", a.PresetMentions = "notification preset set to mentions", a.PresetNothing = "notification preset set to nothing", a.PresetDefault = "notification preset set to the default", a.OptedIn = "opted in to entity", a.OptedOut = "opted out from entity", a.Favorited = "favorited", a.UnFavorited = "unfavorited", a.Muted = "muted", a.Unmuted = "unmuted", a.MutedScheduledEvents = "muted scheduled events", a.UnmutedScheduledEvents = "unmuted scheduled events", a.OverrideCreated = "channel override created", a.OverrideDeleted = "channel override deleted";
    let E = {
            forumThreadsCreated: e => e ? "enabled forum thread created notifs" : "disabled forum thread created notifs",
            suppressEveryone: e => e ? "enabled suppress everyone" : "disabled suppress everyone",
            suppressRoles: e => e ? "enabled suppress roles" : "disabled suppress roles",
            highlights: e => e ? "enabled highlights" : "disabled highlights",
            mobilePush: e => e ? "enabled mobile push notifications" : "disabled mobile push notifications",
            optedIn: e => e ? "opted in to entity" : "opted out from entity",
            favorited: e => e ? "favorited" : "unfavorited",
            muted: e => e ? "muted" : "unmuted",
            mutedEvents: e => e ? "muted scheduled events" : "unmuted scheduled events",
            unreads: e => e === _.UnreadSetting.ALL_MESSAGES ? "unreads set to all messages" : e === _.UnreadSetting.ONLY_MENTIONS ? "unreads set to mentions" : "unreads set to the default",
            notifications: e => e === f.UserNotificationSettings.ALL_MESSAGES ? "notifications set to all messages" : e === f.UserNotificationSettings.ONLY_MENTIONS ? "notifications set to mentions" : e === f.UserNotificationSettings.NO_MESSAGES ? "notifications set to nothing" : "notifications set to the default"
        },
        g = Object.freeze({
            [f.UserNotificationSettings.ALL_MESSAGES]: "All",
            [f.UserNotificationSettings.ONLY_MENTIONS]: "Mentions",
            [f.UserNotificationSettings.NO_MESSAGES]: "Nothing",
            [f.UserNotificationSettings.NULL]: null
        });

    function m(e, t, n, i, s) {
        var r, a;
        let u = function(e) {
                var t, n, i, s, r, a, o;
                let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    u = null != l.mute_config && null != l.mute_config.end_time ? new Date(l.mute_config.end_time).getTime() : e.guild_muted_until,
                    d = null != l.message_notifications ? g[l.message_notifications] : e.guild_message_notification_settings;
                return {
                    guild_muted_until: u,
                    guild_flags: null !== (t = l.flags) && void 0 !== t ? t : e.guild_flags,
                    guild_is_muted: null !== (n = l.muted) && void 0 !== n ? n : e.guild_is_muted,
                    guild_message_notification_settings: d,
                    guild_suppress_roles: null !== (i = l.suppress_roles) && void 0 !== i ? i : e.guild_suppress_roles,
                    guild_receive_mobile_push: null !== (s = l.mobile_push) && void 0 !== s ? s : e.guild_receive_mobile_push,
                    guild_notify_highlights: null !== (r = l.notify_highlights) && void 0 !== r ? r : e.guild_notify_highlights,
                    guild_suppress_everyone: null !== (a = l.suppress_everyone) && void 0 !== a ? a : e.guild_suppress_everyone,
                    guild_scheduled_events_muted: null !== (o = l.mute_scheduled_events) && void 0 !== o ? o : e.guild_scheduled_events_muted
                }
            },
            d = u(n),
            _ = u(T(e), t),
            E = p(d, _, "RETURN_PREVIOUS_WHEN_CHANGED"),
            m = null !== (r = E("guild_flags")) && void 0 !== r ? r : 0,
            S = (null !== (a = _.guild_flags) && void 0 !== a ? a : 0) ^ m,
            v = 0 === (0, c.removeFlags)(S, h.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_OFF, h.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_ON);
        o.default.trackWithMetadata(f.AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, {
            ..._,
            ...l.default.getStats(e),
            location: s,
            guild_id: e,
            update_type: "guild",
            label: i,
            guild_flags_old: E("guild_flags"),
            guild_is_muted_old: E("guild_is_muted"),
            guild_suppress_roles_old: E("guild_suppress_roles"),
            guild_notify_highlights_old: E("guild_notify_highlights"),
            guild_suppress_everyone_old: E("guild_suppress_everyone"),
            guild_receive_mobile_push_old: E("guild_receive_mobile_push"),
            guild_scheduled_events_muted_old: E("guild_scheduled_events_muted"),
            guild_message_notification_settings_old: E("guild_message_notification_settings"),
            is_opt_in_only_change: v
        })
    }

    function p(e, t, n) {
        return i => {
            if ("RETURN_PREVIOUS_WHEN_CHANGED" === n) return e[i] !== t[i] ? e[i] : void 0
        }
    }

    function S(e) {
        return null != e && null != e.end_time ? new Date(e.end_time).getTime() : null
    }

    function v(e, t, n, i, s, r) {
        var a, d;
        let _ = function(t) {
                var n, i;
                let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = null !== (n = s.muted) && void 0 !== n ? n : null == t ? void 0 : t.channel_is_muted,
                    a = null != s.message_notifications ? g[s.message_notifications] : null == t ? void 0 : t.channel_message_notification_settings,
                    o = null == e ? null : !0 === r || null != a;
                return {
                    channel_is_muted: r,
                    channel_is_overridden: o,
                    channel_flags: null !== (i = s.flags) && void 0 !== i ? i : null == t ? void 0 : t.channel_flags,
                    channel_message_notification_settings: a,
                    channel_muted_until: S(s.mute_config)
                }
            },
            E = _(i),
            m = _(C(e, t), n),
            v = p(E, m, "RETURN_PREVIOUS_WHEN_CHANGED"),
            T = u.default.getChannel(t),
            I = null !== (a = v("channel_flags")) && void 0 !== a ? a : 0,
            A = (null !== (d = m.channel_flags) && void 0 !== d ? d : 0) ^ I,
            y = 0 === (0, c.removeFlags)(A, h.ChannelNotificationSettingsFlags.FAVORITED, h.ChannelNotificationSettingsFlags.OPT_IN_ENABLED);
        o.default.trackWithMetadata(f.AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, {
            ...m,
            ...l.default.getStats(e),
            location: r,
            guild_id: e,
            channel_id: t,
            update_type: "channel",
            label: s,
            parent_id: null != T ? T.parent_id : null,
            channel_flags_old: v("channel_flags"),
            channel_is_muted_old: v("channel_is_muted"),
            channel_muted_until_old: v("channel_muted_until"),
            channel_is_overridden_old: v("channel_is_overridden"),
            channel_message_notification_settings_old: v("channel_message_notification_settings"),
            is_opt_in_only_change: y
        })
    }

    function T(e) {
        let t = d.default.isMuted(e),
            n = d.default.getMuteConfig(e);
        return {
            guild_suppress_everyone: d.default.isSuppressEveryoneEnabled(e),
            guild_suppress_roles: d.default.isSuppressRolesEnabled(e),
            guild_scheduled_events_muted: d.default.isMuteScheduledEventsEnabled(e),
            guild_is_muted: t,
            guild_muted_until: null != n && null != n.end_time ? new Date(n.end_time).getTime() : null,
            guild_receive_mobile_push: d.default.isMobilePushEnabled(e),
            guild_message_notification_settings: g[d.default.getMessageNotifications(e)],
            guild_notify_highlights: d.default.getNotifyHighlights(e),
            guild_flags: d.default.getGuildFlags(e)
        }
    }

    function I(e) {
        let t = new Map;
        return e.forEach(e => t.set(e, T(e))), t
    }

    function C(e, t) {
        let n = d.default.isChannelMuted(e, t),
            i = d.default.getChannelMuteConfig(e, t);
        return {
            channel_is_muted: n,
            channel_muted_until: null != i && null != i.end_time ? new Date(i.end_time).getTime() : null,
            channel_message_notification_settings: g[d.default.getChannelMessageNotifications(e, t)],
            channel_flags: d.default.getChannelIdFlags(e, t)
        }
    }

    function A(e, t) {
        let n = new Map;
        return t.forEach(t => n.set(t, C(e, t))), n
    }
}