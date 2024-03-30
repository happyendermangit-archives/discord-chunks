function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MessageNotificationSettings: function() {
            return O
        },
        NotificationLabel: function() {
            return h
        },
        NotificationLabels: function() {
            return a
        },
        NotificationSettingsUpdateType: function() {
            return i
        },
        getCurrentChannelSettings: function() {
            return N
        },
        getCurrentGuildSettings: function() {
            return A
        },
        getManyCurrentChannelSettings: function() {
            return R
        },
        getManyCurrentGuildSettings: function() {
            return b
        },
        muteConfigToTimestamp: function() {
            return v
        },
        trackChannelNotificationSettingsUpdate: function() {
            return g
        },
        trackGuildNotificationSettingsUpdate: function() {
            return T
        }
    });
    var r, o, i, a, u, s = n("140817"),
        l = n("343855"),
        c = n("935741"),
        f = n("848957");
    n("870331");
    var d = n("947248"),
        _ = n("281767"),
        E = n("24729"),
        p = n("382021");

    function m(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function y(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                m(e, t, n[t])
            })
        }
        return e
    }

    function I(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }(r = i || (i = {})).GUILD = "guild", r.CHANNEL = "channel", r.ACCOUNT = "account", (o = a || (a = {})).ForumThreadsCreatedOn = "enabled forum thread created notifs", o.ForumThreadsCreatedOff = "disabled forum thread created notifs", o.SuppressEveryoneOn = "enabled suppress everyone", o.SuppressEveryoneOff = "disabled suppress everyone", o.SuppressRolesOn = "enabled suppress roles", o.SuppressRolesOff = "disabled suppress roles", o.HighlightsOn = "enabled highlights", o.HighlightsOff = "disabled highlights", o.MobilePushOn = "enabled mobile push notifications", o.MobilePushOff = "disabled mobile push notifications", o.UnreadsAll = "unreads set to all messages", o.UnreadsMentions = "unreads set to mentions", o.UnreadsDefault = "unreads set to the default", o.NotificationsAll = "notifications set to all messages", o.NotificationsMentions = "notifications set to mentions", o.NotificationsNothing = "notifications set to nothing", o.NotificationsDefault = "notifications set to the default", o.PresetAll = "notification preset set to all messages", o.PresetMentions = "notification preset set to mentions", o.PresetNothing = "notification preset set to nothing", o.PresetDefault = "notification preset set to the default", o.OptedIn = "opted in to entity", o.OptedOut = "opted out from entity", o.Favorited = "favorited", o.UnFavorited = "unfavorited", o.Muted = "muted", o.Unmuted = "unmuted", o.MutedScheduledEvents = "muted scheduled events", o.UnmutedScheduledEvents = "unmuted scheduled events", o.OverrideCreated = "channel override created", o.OverrideDeleted = "channel override deleted";
    var h = {
            forumThreadsCreated: function(e) {
                return e ? "enabled forum thread created notifs" : "disabled forum thread created notifs"
            },
            suppressEveryone: function(e) {
                return e ? "enabled suppress everyone" : "disabled suppress everyone"
            },
            suppressRoles: function(e) {
                return e ? "enabled suppress roles" : "disabled suppress roles"
            },
            highlights: function(e) {
                return e ? "enabled highlights" : "disabled highlights"
            },
            mobilePush: function(e) {
                return e ? "enabled mobile push notifications" : "disabled mobile push notifications"
            },
            optedIn: function(e) {
                return e ? "opted in to entity" : "opted out from entity"
            },
            favorited: function(e) {
                return e ? "favorited" : "unfavorited"
            },
            muted: function(e) {
                return e ? "muted" : "unmuted"
            },
            mutedEvents: function(e) {
                return e ? "muted scheduled events" : "unmuted scheduled events"
            },
            unreads: function(e) {
                return e === E.UnreadSetting.ALL_MESSAGES ? "unreads set to all messages" : e === E.UnreadSetting.ONLY_MENTIONS ? "unreads set to mentions" : "unreads set to the default"
            },
            notifications: function(e) {
                return e === _.UserNotificationSettings.ALL_MESSAGES ? "notifications set to all messages" : e === _.UserNotificationSettings.ONLY_MENTIONS ? "notifications set to mentions" : e === _.UserNotificationSettings.NO_MESSAGES ? "notifications set to nothing" : "notifications set to the default"
            }
        },
        O = Object.freeze((m(u = {}, _.UserNotificationSettings.ALL_MESSAGES, "All"), m(u, _.UserNotificationSettings.ONLY_MENTIONS, "Mentions"), m(u, _.UserNotificationSettings.NO_MESSAGES, "Nothing"), m(u, _.UserNotificationSettings.NULL, null), u));

    function T(e, t, n, r, o) {
        var i, a, u = function(e) {
                var t, n, r, o, i, a, u, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    l = null != s.mute_config && null != s.mute_config.end_time ? new Date(s.mute_config.end_time).getTime() : e.guild_muted_until,
                    c = null != s.message_notifications ? O[s.message_notifications] : e.guild_message_notification_settings;
                return {
                    guild_muted_until: l,
                    guild_flags: null !== (t = s.flags) && void 0 !== t ? t : e.guild_flags,
                    guild_is_muted: null !== (n = s.muted) && void 0 !== n ? n : e.guild_is_muted,
                    guild_message_notification_settings: c,
                    guild_suppress_roles: null !== (r = s.suppress_roles) && void 0 !== r ? r : e.guild_suppress_roles,
                    guild_receive_mobile_push: null !== (o = s.mobile_push) && void 0 !== o ? o : e.guild_receive_mobile_push,
                    guild_notify_highlights: null !== (i = s.notify_highlights) && void 0 !== i ? i : e.guild_notify_highlights,
                    guild_suppress_everyone: null !== (a = s.suppress_everyone) && void 0 !== a ? a : e.guild_suppress_everyone,
                    guild_scheduled_events_muted: null !== (u = s.mute_scheduled_events) && void 0 !== u ? u : e.guild_scheduled_events_muted
                }
            },
            c = u(n),
            f = u(A(e), t),
            E = S(c, f, "RETURN_PREVIOUS_WHEN_CHANGED"),
            m = null !== (i = E("guild_flags")) && void 0 !== i ? i : 0,
            h = (null !== (a = f.guild_flags) && void 0 !== a ? a : 0) ^ m,
            T = 0 === (0, d.removeFlags)(h, p.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_OFF, p.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_ON);
        s.default.trackWithMetadata(_.AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, I(y({}, f, l.default.getStats(e)), {
            location: o,
            guild_id: e,
            update_type: "guild",
            label: r,
            guild_flags_old: E("guild_flags"),
            guild_is_muted_old: E("guild_is_muted"),
            guild_suppress_roles_old: E("guild_suppress_roles"),
            guild_notify_highlights_old: E("guild_notify_highlights"),
            guild_suppress_everyone_old: E("guild_suppress_everyone"),
            guild_receive_mobile_push_old: E("guild_receive_mobile_push"),
            guild_scheduled_events_muted_old: E("guild_scheduled_events_muted"),
            guild_message_notification_settings_old: E("guild_message_notification_settings"),
            is_opt_in_only_change: T
        }))
    }

    function S(e, t, n) {
        return function(r) {
            if ("RETURN_PREVIOUS_WHEN_CHANGED" === n) return e[r] !== t[r] ? e[r] : void 0
        }
    }

    function v(e) {
        return null != e && null != e.end_time ? new Date(e.end_time).getTime() : null
    }

    function g(e, t, n, r, o, i) {
        var a, u, f = function(t) {
                var n, r, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = null !== (n = o.muted) && void 0 !== n ? n : null == t ? void 0 : t.channel_is_muted,
                    a = null != o.message_notifications ? O[o.message_notifications] : null == t ? void 0 : t.channel_message_notification_settings,
                    u = null == e ? null : !0 === i || null != a;
                return {
                    channel_is_muted: i,
                    channel_is_overridden: u,
                    channel_flags: null !== (r = o.flags) && void 0 !== r ? r : null == t ? void 0 : t.channel_flags,
                    channel_message_notification_settings: a,
                    channel_muted_until: v(o.mute_config)
                }
            },
            E = f(r),
            m = f(N(e, t), n),
            h = S(E, m, "RETURN_PREVIOUS_WHEN_CHANGED"),
            T = c.default.getChannel(t),
            g = null !== (a = h("channel_flags")) && void 0 !== a ? a : 0,
            A = (null !== (u = m.channel_flags) && void 0 !== u ? u : 0) ^ g,
            b = 0 === (0, d.removeFlags)(A, p.ChannelNotificationSettingsFlags.FAVORITED, p.ChannelNotificationSettingsFlags.OPT_IN_ENABLED);
        s.default.trackWithMetadata(_.AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, I(y({}, m, l.default.getStats(e)), {
            location: i,
            guild_id: e,
            channel_id: t,
            update_type: "channel",
            label: o,
            parent_id: null != T ? T.parent_id : null,
            channel_flags_old: h("channel_flags"),
            channel_is_muted_old: h("channel_is_muted"),
            channel_muted_until_old: h("channel_muted_until"),
            channel_is_overridden_old: h("channel_is_overridden"),
            channel_message_notification_settings_old: h("channel_message_notification_settings"),
            is_opt_in_only_change: b
        }))
    }

    function A(e) {
        var t = f.default.isMuted(e),
            n = f.default.getMuteConfig(e);
        return {
            guild_suppress_everyone: f.default.isSuppressEveryoneEnabled(e),
            guild_suppress_roles: f.default.isSuppressRolesEnabled(e),
            guild_scheduled_events_muted: f.default.isMuteScheduledEventsEnabled(e),
            guild_is_muted: t,
            guild_muted_until: null != n && null != n.end_time ? new Date(n.end_time).getTime() : null,
            guild_receive_mobile_push: f.default.isMobilePushEnabled(e),
            guild_message_notification_settings: O[f.default.getMessageNotifications(e)],
            guild_notify_highlights: f.default.getNotifyHighlights(e),
            guild_flags: f.default.getGuildFlags(e)
        }
    }

    function b(e) {
        var t = new Map;
        return e.forEach(function(e) {
            return t.set(e, A(e))
        }), t
    }

    function N(e, t) {
        var n = f.default.isChannelMuted(e, t),
            r = f.default.getChannelMuteConfig(e, t);
        return {
            channel_is_muted: n,
            channel_muted_until: null != r && null != r.end_time ? new Date(r.end_time).getTime() : null,
            channel_message_notification_settings: O[f.default.getChannelMessageNotifications(e, t)],
            channel_flags: f.default.getChannelIdFlags(e, t)
        }
    }

    function R(e, t) {
        var n = new Map;
        return t.forEach(function(t) {
            return n.set(t, N(e, t))
        }), n
    }
}