function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("789020");
    var i = n("544891"),
        r = n("780384"),
        a = n("570140"),
        s = n("149071"),
        o = n("9156"),
        l = n("630388"),
        u = n("621600"),
        d = n("709054"),
        _ = n("981631"),
        c = n("526761"),
        E = n("689938");
    t.default = {
        open(e) {
            a.default.dispatch({
                type: "NOTIFICATION_SETTINGS_MODAL_OPEN",
                guildId: e
            })
        },
        close() {
            a.default.dispatch({
                type: "NOTIFICATION_SETTINGS_MODAL_CLOSE"
            })
        },
        updateGuildNotificationSettings(e, t, n, i) {
            let r = (0, u.getCurrentGuildSettings)(e);
            s.default.saveUserGuildSettings(e, t), a.default.dispatch({
                type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                guildId: e,
                settings: t
            }), (0, u.trackGuildNotificationSettingsUpdate)(e, t, r, n, i)
        },
        updateGuildAndChannelNotificationSettings(e, t, n, i) {
            let r = d.default.keys(t.channel_overrides),
                o = (0, u.getCurrentGuildSettings)(e),
                l = (0, u.getManyCurrentChannelSettings)(e, r);
            s.default.saveUserGuildSettings(e, t), a.default.dispatch({
                type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE",
                guildId: e,
                settings: t
            }), (0, u.trackGuildNotificationSettingsUpdate)(e, t, o, n, i), d.default.keys(t.channel_overrides).forEach(r => {
                let a = l.get(r);
                (0, u.trackChannelNotificationSettingsUpdate)(e, r, t.channel_overrides[r], a, n, i)
            })
        },
        updateGuildNotificationSettingsBulk(e, t, n) {
            let i = d.default.keys(e),
                r = (0, u.getManyCurrentGuildSettings)(i);
            s.default.saveUserGuildSettingsBulk(e), d.default.entries(e).forEach(e => {
                let [i, s] = e, o = r.get(i);
                a.default.dispatch({
                    type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                    guildId: i,
                    settings: s
                }), (0, u.trackGuildNotificationSettingsUpdate)(i, s, o, t, n)
            })
        },
        updateChannelOverrideSettings(e, t, n, i, o) {
            let l = (0, u.getCurrentChannelSettings)(e, t);
            s.default.saveUserGuildSettings(e, {
                channel_overrides: {
                    [t]: n
                }
            }), a.default.dispatch({
                type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
                guildId: e,
                channelId: t,
                settings: n
            }), r.AccessibilityAnnouncer.announce(E.default.Messages.A11Y_ANNOUNCEMENT_CHANNEL_SETTINGS_UPDATED), (0, u.trackChannelNotificationSettingsUpdate)(e, t, n, l, i, o)
        },
        updateChannelOverrideSettingsBulk(e, t, n, i) {
            let r = d.default.keys(t),
                o = (0, u.getManyCurrentChannelSettings)(e, r);
            s.default.saveUserGuildSettings(e, {
                channel_overrides: t
            }), a.default.dispatch({
                type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
                guildId: e,
                overrides: t
            }), d.default.keys(t).forEach(r => (0, u.trackChannelNotificationSettingsUpdate)(e, r, t[r], o.get(r), n, i))
        },
        setForumThreadsCreated(e, t) {
            let n = t ? c.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON : c.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF,
                i = t ? c.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF : c.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON,
                r = o.default.getChannelFlags(e);
            this.updateChannelOverrideSettings(e.guild_id, e.id, {
                flags: r & ~i | n
            }, u.NotificationLabel.forumThreadsCreated(t))
        },
        async setAccountFlag(e, t) {
            let n = o.default.accountNotificationSettings.flags,
                r = (0, l.setFlag)(n, e, t);
            await i.HTTP.patch({
                url: _.Endpoints.ACCOUNT_NOTIFICATION_SETTINGS,
                body: {
                    flags: r
                }
            }), await a.default.dispatch({
                type: "NOTIFICATION_SETTINGS_UPDATE",
                settings: {
                    flags: r
                }
            })
        }
    }
}