function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    }), n("222007"), n("702976");
    var a = n("872717"),
        l = n("819855"),
        i = n("913144"),
        d = n("679428"),
        s = n("282109"),
        r = n("568734"),
        o = n("34676"),
        u = n("299039"),
        f = n("49111"),
        g = n("397336"),
        c = n("782340"),
        _ = {
            open(e) {
                i.default.dispatch({
                    type: "NOTIFICATION_SETTINGS_MODAL_OPEN",
                    guildId: e
                })
            },
            close() {
                i.default.dispatch({
                    type: "NOTIFICATION_SETTINGS_MODAL_CLOSE"
                })
            },
            updateGuildNotificationSettings(e, t, n, a) {
                let l = (0, o.getCurrentGuildSettings)(e);
                d.default.saveUserGuildSettings(e, t), i.default.dispatch({
                    type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                    guildId: e,
                    settings: t
                }), (0, o.trackGuildNotificationSettingsUpdate)(e, t, l, n, a)
            },
            updateGuildAndChannelNotificationSettings(e, t, n, a) {
                let l = u.default.keys(t.channel_overrides),
                    s = (0, o.getCurrentGuildSettings)(e),
                    r = (0, o.getManyCurrentChannelSettings)(e, l);
                d.default.saveUserGuildSettings(e, t), i.default.dispatch({
                    type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE",
                    guildId: e,
                    settings: t
                }), (0, o.trackGuildNotificationSettingsUpdate)(e, t, s, n, a), u.default.keys(t.channel_overrides).forEach(l => {
                    let i = r.get(l);
                    (0, o.trackChannelNotificationSettingsUpdate)(e, l, t.channel_overrides[l], i, n, a)
                })
            },
            updateGuildNotificationSettingsBulk(e, t, n) {
                let a = u.default.keys(e),
                    l = (0, o.getManyCurrentGuildSettings)(a);
                d.default.saveUserGuildSettingsBulk(e), u.default.entries(e).forEach(e => {
                    let [a, d] = e, s = l.get(a);
                    i.default.dispatch({
                        type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                        guildId: a,
                        settings: d
                    }), (0, o.trackGuildNotificationSettingsUpdate)(a, d, s, t, n)
                })
            },
            updateChannelOverrideSettings(e, t, n, a, s) {
                let r = (0, o.getCurrentChannelSettings)(e, t);
                d.default.saveUserGuildSettings(e, {
                    channel_overrides: {
                        [t]: n
                    }
                }), i.default.dispatch({
                    type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
                    guildId: e,
                    channelId: t,
                    settings: n
                }), l.AccessibilityAnnouncer.announce(c.default.Messages.A11Y_ANNOUNCEMENT_CHANNEL_SETTINGS_UPDATED), (0, o.trackChannelNotificationSettingsUpdate)(e, t, n, r, a, s)
            },
            updateChannelOverrideSettingsBulk(e, t, n, a) {
                let l = u.default.keys(t),
                    s = (0, o.getManyCurrentChannelSettings)(e, l);
                d.default.saveUserGuildSettings(e, {
                    channel_overrides: t
                }), i.default.dispatch({
                    type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
                    guildId: e,
                    overrides: t
                }), u.default.keys(t).forEach(l => (0, o.trackChannelNotificationSettingsUpdate)(e, l, t[l], s.get(l), n, a))
            },
            setForumThreadsCreated(e, t) {
                let n = t ? g.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON : g.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF,
                    a = t ? g.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF : g.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON,
                    l = s.default.getChannelFlags(e);
                this.updateChannelOverrideSettings(e.guild_id, e.id, {
                    flags: l & ~a | n
                }, o.NotificationLabel.forumThreadsCreated(t))
            },
            async setAccountFlag(e, t) {
                let n = s.default.accountNotificationSettings.flags,
                    l = (0, r.setFlag)(n, e, t);
                await a.default.patch({
                    url: f.Endpoints.ACCOUNT_NOTIFICATION_SETTINGS,
                    body: {
                        flags: l
                    }
                }), await i.default.dispatch({
                    type: "NOTIFICATION_SETTINGS_UPDATE",
                    settings: {
                        flags: l
                    }
                })
            }
        }
}