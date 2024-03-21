function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        setOptInChannel: function() {
            return h
        },
        updateOptInChannelsImmediate: function() {
            return C
        },
        updateOptInChannelsBatched: function() {
            return I
        },
        bulkOptInChannels: function() {
            return T
        },
        setGuildOptIn: function() {
            return A
        },
        setIsFavorite: function() {
            return G
        },
        dimissFavoriteSuggestion: function() {
            return L
        }
    }), n("222007");
    var a = n("917351"),
        l = n("151426"),
        i = n("913144"),
        d = n("519705"),
        s = n("716241"),
        r = n("479756"),
        o = n("38654"),
        u = n("679428"),
        f = n("872173"),
        g = n("42203"),
        c = n("282109"),
        _ = n("599110"),
        p = n("568734"),
        E = n("34676"),
        N = n("49111"),
        S = n("397336");

    function h(e, t, n, a) {
        if (null == e) return;
        if (o.default.isFullServerPreview(e)) {
            (0, r.updateImpersonatedChannels)(e, n ? [t] : [], n ? [] : [t]);
            return
        }
        let l = c.default.getChannelIdFlags(e, t);
        !n && (l = (0, p.setFlag)(l, S.ChannelNotificationSettingsFlags.FAVORITED, !1));
        let d = (0, E.getCurrentChannelSettings)(e, t),
            f = {
                flags: (0, p.setFlag)(l, S.ChannelNotificationSettingsFlags.OPT_IN_ENABLED, n)
            };
        u.default.saveUserGuildSettingsBulk({
            [e]: {
                channel_overrides: {
                    [t]: f
                }
            }
        }), i.default.dispatch({
            type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
            guildId: e,
            channelId: t,
            settings: f
        }), (0, E.trackChannelNotificationSettingsUpdate)(e, t, f, d, E.NotificationLabel.optedIn(n), a), D(e), _.default.track(N.AnalyticEvents.CHANNEL_LIST_UPDATED, {
            ...(0, s.collectGuildAnalyticsMetadata)(e),
            ...(0, s.collectChannelAnalyticsMetadata)(g.default.getChannel(t)),
            action_type: n ? "add" : "remove",
            location: a
        })
    }

    function C(e, t, n, a) {
        if (null == e) return;
        if (o.default.isFullServerPreview(e)) {
            (0, r.updateImpersonatedChannels)(e, n ? [t] : [], n ? [] : [t]), (0, r.updateImpersonatedData)(e, {
                optInEnabled: !0
            });
            return
        }
        let l = c.default.getChannelIdFlags(e, t);
        !n && (l = (0, p.setFlag)(l, S.ChannelNotificationSettingsFlags.FAVORITED, !1));
        let d = (0, E.getCurrentChannelSettings)(e, t),
            f = {
                flags: (0, p.setFlag)(l, S.ChannelNotificationSettingsFlags.OPT_IN_ENABLED, n)
            };
        if (!c.default.isOptInEnabled(e)) {
            let n = (0, p.setFlag)(c.default.getGuildFlags(e), S.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_ON, !0);
            u.default.saveUserGuildSettingsBulk({
                [e]: {
                    channel_overrides: {
                        [t]: f
                    },
                    flags: n
                }
            })
        }
        i.default.dispatch({
            type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
            guildId: e,
            channelId: t,
            settings: f
        }), (0, E.trackChannelNotificationSettingsUpdate)(e, t, f, d, E.NotificationLabel.optedIn(n), a), D(e), _.default.track(N.AnalyticEvents.CHANNEL_LIST_UPDATED, {
            ...(0, s.collectGuildAnalyticsMetadata)(e),
            ...(0, s.collectChannelAnalyticsMetadata)(g.default.getChannel(t)),
            action_type: n ? "add" : "remove",
            location: a
        })
    }
    async function O(e, t) {
        if (!(null == e || o.default.isFullServerPreview(e))) await u.default.saveUserGuildSettingsBulk({
            [e]: {
                channel_overrides: t
            }
        }), i.default.dispatch({
            type: "USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES",
            guildId: e,
            updates: t
        })
    }
    let I = (0, a.debounce)((e, t) => O(e, t), 1e3);

    function T(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            a = arguments.length > 3 ? arguments[3] : void 0;
        if (null == e) return;
        if (o.default.isFullServerPreview(e)) {
            (0, r.updateImpersonatedChannels)(e, t, []), n && (0, r.updateImpersonatedData)(e, {
                optInEnabled: !0
            });
            return
        }
        let l = {};
        if (t.forEach(t => {
                let n = c.default.getChannelIdFlags(e, t);
                l[t] = {
                    flags: (0, p.setFlag)(n, S.ChannelNotificationSettingsFlags.OPT_IN_ENABLED, !0)
                }
            }), n) {
            let t = (0, p.setFlag)(c.default.getGuildFlags(e), S.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_ON, !0);
            d.default.updateGuildAndChannelNotificationSettings(e, {
                flags: t,
                channel_overrides: l
            }, E.NotificationLabels.OptedIn), _.default.track(N.AnalyticEvents.CHANNEL_LIST_UPDATED, {
                ...(0, s.collectGuildAnalyticsMetadata)(e),
                action_type: "add_many_and_enable_guild",
                location: a
            })
        } else d.default.updateChannelOverrideSettingsBulk(e, l, E.NotificationLabels.OptedIn), _.default.track(N.AnalyticEvents.CHANNEL_LIST_UPDATED, {
            ...(0, s.collectGuildAnalyticsMetadata)(e),
            action_type: "add_many",
            location: a
        })
    }

    function A(e, t, n) {
        if (o.default.isFullServerPreview(e)) {
            (0, r.updateImpersonatedData)(e, {
                optInEnabled: t
            });
            return
        }
        let a = c.default.getGuildFlags(e);
        d.default.updateGuildNotificationSettings(e, {
            flags: (0, p.setFlag)(a, S.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_ON, t)
        }, E.NotificationLabel.optedIn(t)), _.default.track(N.AnalyticEvents.CHANNEL_LIST_UPDATED, {
            ...(0, s.collectGuildAnalyticsMetadata)(e),
            action_type: t ? "guild_enabled" : "guild_disabled",
            location: n
        })
    }

    function G(e, t, n, a) {
        if (null == e || o.default.isFullServerPreview(e)) return;
        let l = c.default.getChannelIdFlags(e, t);
        !(0, p.hasFlag)(l, S.ChannelNotificationSettingsFlags.OPT_IN_ENABLED) && n && (l = (0, p.setFlag)(l, S.ChannelNotificationSettingsFlags.OPT_IN_ENABLED, !0)), d.default.updateChannelOverrideSettings(e, t, {
            flags: (0, p.setFlag)(l, S.ChannelNotificationSettingsFlags.FAVORITED, n)
        }, E.NotificationLabel.favorited(n)), _.default.track(N.AnalyticEvents.CHANNEL_LIST_UPDATED, {
            ...(0, s.collectGuildAnalyticsMetadata)(e),
            action_type: n ? "favorited" : "unfavorited",
            location: a
        })
    }

    function D(e) {
        (0, f.updateUserGuildSettings)(e, e => (!(0, p.hasFlag)(e.guildOnboardingProgress, l.GuildOnboardingProgress.GUILD_NOTICE_CLEARED) || !!(0, p.hasFlag)(e.guildOnboardingProgress, l.GuildOnboardingProgress.GUILD_NOTICE_SHOWN)) && (e.guildOnboardingProgress = (0, p.addFlag)(e.guildOnboardingProgress, l.GuildOnboardingProgress.GUILD_NOTICE_CLEARED), e.guildOnboardingProgress = (0, p.setFlag)(e.guildOnboardingProgress, l.GuildOnboardingProgress.GUILD_NOTICE_SHOWN, !1), !0), f.UserSettingsDelay.INFREQUENT_USER_ACTION)
    }

    function L(e, t) {
        i.default.dispatch({
            type: "DISMISS_FAVORITE_SUGGESTION",
            guildId: e,
            channelId: t
        })
    }
}