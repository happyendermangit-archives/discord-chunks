function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        bulkOptInChannels: function() {
            return O
        },
        dimissFavoriteSuggestion: function() {
            return L
        },
        setGuildOptIn: function() {
            return R
        },
        setIsFavorite: function() {
            return C
        },
        setOptInChannel: function() {
            return A
        },
        updateOptInChannelsBatched: function() {
            return p
        },
        updateOptInChannelsImmediate: function() {
            return m
        }
    }), n("47120");
    var i = n("392711"),
        r = n("524437"),
        a = n("570140"),
        s = n("92114"),
        o = n("367907"),
        l = n("962086"),
        u = n("160404"),
        d = n("149071"),
        _ = n("675478"),
        c = n("592125"),
        E = n("9156"),
        I = n("626135"),
        T = n("630388"),
        f = n("621600"),
        S = n("981631"),
        h = n("526761");

    function A(e, t, n, i) {
        if (null == e) return;
        if (u.default.isFullServerPreview(e)) {
            (0, l.updateImpersonatedChannels)(e, n ? [t] : [], n ? [] : [t]);
            return
        }
        let r = E.default.getChannelIdFlags(e, t);
        !n && (r = (0, T.setFlag)(r, h.ChannelNotificationSettingsFlags.FAVORITED, !1));
        let s = (0, f.getCurrentChannelSettings)(e, t),
            _ = {
                flags: (0, T.setFlag)(r, h.ChannelNotificationSettingsFlags.OPT_IN_ENABLED, n)
            };
        d.default.saveUserGuildSettingsBulk({
            [e]: {
                channel_overrides: {
                    [t]: _
                }
            }
        }), a.default.dispatch({
            type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
            guildId: e,
            channelId: t,
            settings: _
        }), (0, f.trackChannelNotificationSettingsUpdate)(e, t, _, s, f.NotificationLabel.optedIn(n), i), g(e), I.default.track(S.AnalyticEvents.CHANNEL_LIST_UPDATED, {
            ...(0, o.collectGuildAnalyticsMetadata)(e),
            ...(0, o.collectChannelAnalyticsMetadata)(c.default.getChannel(t)),
            action_type: n ? "add" : "remove",
            location: i
        })
    }

    function m(e, t, n, i) {
        if (null == e) return;
        if (u.default.isFullServerPreview(e)) {
            (0, l.updateImpersonatedChannels)(e, n ? [t] : [], n ? [] : [t]), (0, l.updateImpersonatedData)(e, {
                optInEnabled: !0
            });
            return
        }
        let r = E.default.getChannelIdFlags(e, t);
        !n && (r = (0, T.setFlag)(r, h.ChannelNotificationSettingsFlags.FAVORITED, !1));
        let s = (0, f.getCurrentChannelSettings)(e, t),
            _ = {
                flags: (0, T.setFlag)(r, h.ChannelNotificationSettingsFlags.OPT_IN_ENABLED, n)
            };
        if (!E.default.isOptInEnabled(e)) {
            let n = (0, T.setFlag)(E.default.getGuildFlags(e), h.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_ON, !0);
            d.default.saveUserGuildSettingsBulk({
                [e]: {
                    channel_overrides: {
                        [t]: _
                    },
                    flags: n
                }
            })
        }
        a.default.dispatch({
            type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
            guildId: e,
            channelId: t,
            settings: _
        }), (0, f.trackChannelNotificationSettingsUpdate)(e, t, _, s, f.NotificationLabel.optedIn(n), i), g(e), I.default.track(S.AnalyticEvents.CHANNEL_LIST_UPDATED, {
            ...(0, o.collectGuildAnalyticsMetadata)(e),
            ...(0, o.collectChannelAnalyticsMetadata)(c.default.getChannel(t)),
            action_type: n ? "add" : "remove",
            location: i
        })
    }
    async function N(e, t) {
        if (!(null == e || u.default.isFullServerPreview(e))) await d.default.saveUserGuildSettingsBulk({
            [e]: {
                channel_overrides: t
            }
        }), a.default.dispatch({
            type: "USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES",
            guildId: e,
            updates: t
        })
    }
    let p = (0, i.debounce)((e, t) => N(e, t), 1e3);

    function O(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = arguments.length > 3 ? arguments[3] : void 0;
        if (null == e) return;
        if (u.default.isFullServerPreview(e)) {
            (0, l.updateImpersonatedChannels)(e, t, []), n && (0, l.updateImpersonatedData)(e, {
                optInEnabled: !0
            });
            return
        }
        let r = {};
        if (t.forEach(t => {
                let n = E.default.getChannelIdFlags(e, t);
                r[t] = {
                    flags: (0, T.setFlag)(n, h.ChannelNotificationSettingsFlags.OPT_IN_ENABLED, !0)
                }
            }), n) {
            let t = (0, T.setFlag)(E.default.getGuildFlags(e), h.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_ON, !0);
            s.default.updateGuildAndChannelNotificationSettings(e, {
                flags: t,
                channel_overrides: r
            }, f.NotificationLabels.OptedIn), I.default.track(S.AnalyticEvents.CHANNEL_LIST_UPDATED, {
                ...(0, o.collectGuildAnalyticsMetadata)(e),
                action_type: "add_many_and_enable_guild",
                location: i
            })
        } else s.default.updateChannelOverrideSettingsBulk(e, r, f.NotificationLabels.OptedIn), I.default.track(S.AnalyticEvents.CHANNEL_LIST_UPDATED, {
            ...(0, o.collectGuildAnalyticsMetadata)(e),
            action_type: "add_many",
            location: i
        })
    }

    function R(e, t, n) {
        if (u.default.isFullServerPreview(e)) {
            (0, l.updateImpersonatedData)(e, {
                optInEnabled: t
            });
            return
        }
        let i = E.default.getGuildFlags(e);
        s.default.updateGuildNotificationSettings(e, {
            flags: (0, T.setFlag)(i, h.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_ON, t)
        }, f.NotificationLabel.optedIn(t)), I.default.track(S.AnalyticEvents.CHANNEL_LIST_UPDATED, {
            ...(0, o.collectGuildAnalyticsMetadata)(e),
            action_type: t ? "guild_enabled" : "guild_disabled",
            location: n
        })
    }

    function C(e, t, n, i) {
        if (null == e || u.default.isFullServerPreview(e)) return;
        let r = E.default.getChannelIdFlags(e, t);
        !(0, T.hasFlag)(r, h.ChannelNotificationSettingsFlags.OPT_IN_ENABLED) && n && (r = (0, T.setFlag)(r, h.ChannelNotificationSettingsFlags.OPT_IN_ENABLED, !0)), s.default.updateChannelOverrideSettings(e, t, {
            flags: (0, T.setFlag)(r, h.ChannelNotificationSettingsFlags.FAVORITED, n)
        }, f.NotificationLabel.favorited(n)), I.default.track(S.AnalyticEvents.CHANNEL_LIST_UPDATED, {
            ...(0, o.collectGuildAnalyticsMetadata)(e),
            action_type: n ? "favorited" : "unfavorited",
            location: i
        })
    }

    function g(e) {
        (0, _.updateUserGuildSettings)(e, e => (!(0, T.hasFlag)(e.guildOnboardingProgress, r.GuildOnboardingProgress.GUILD_NOTICE_CLEARED) || !!(0, T.hasFlag)(e.guildOnboardingProgress, r.GuildOnboardingProgress.GUILD_NOTICE_SHOWN)) && (e.guildOnboardingProgress = (0, T.addFlag)(e.guildOnboardingProgress, r.GuildOnboardingProgress.GUILD_NOTICE_CLEARED), e.guildOnboardingProgress = (0, T.setFlag)(e.guildOnboardingProgress, r.GuildOnboardingProgress.GUILD_NOTICE_SHOWN, !1), !0), _.UserSettingsDelay.INFREQUENT_USER_ACTION)
    }

    function L(e, t) {
        a.default.dispatch({
            type: "DISMISS_FAVORITE_SUGGESTION",
            guildId: e,
            channelId: t
        })
    }
}