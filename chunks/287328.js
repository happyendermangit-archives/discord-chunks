function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("442837"),
        r = n("348326"),
        a = n("570140"),
        s = n("314897"),
        o = n("261875");

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    r.TableId.KvCache, r.TableId.KvCache;
    class u extends i.Store {
        initialize() {
            this.waitFor(s.default)
        }
        constructor(...e) {
            super(...e), l(this, "database", e => o.default.database(null != e ? e : s.default.getId())), l(this, "channels", d(e => new r.GuildEntityDao("guild_channels", r.TableId.KvCache, e))), l(this, "channelsTemp", d(e => new r.GuildDao("guild_channels_temp", r.TableId.KvCache, e))), l(this, "basicChannels", d(e => new r.Dao("basic_channels", r.TableId.KvCache, e))), l(this, "syncedBasicChannels", d(e => new r.Dao("basic_channels_synced", r.TableId.KvCache, e))), l(this, "cache", d(e => new r.Dao("cache", r.TableId.KvCache, e))), l(this, "forceResyncVersion", d(e => new r.Dao("force_resync_version", r.TableId.KvCache, e))), l(this, "emojis", d(e => new r.GuildEntityDao("guild_emojis", r.TableId.KvCache, e))), l(this, "guilds", d(e => new r.EntityDao("guilds", r.TableId.KvCache, e))), l(this, "guildsRequiringDeletedIdsSync", d(e => new r.EntityDao("guilds_requiring_deleted_ids_sync", r.TableId.KvCache, e))), l(this, "messages", d(e => new r.MessageDao("messages", r.TableId.Messages, e))), l(this, "stickers", d(e => new r.GuildEntityDao("guild_stickers", r.TableId.KvCache, e))), l(this, "guildVersions", d(e => new r.EntityDao("guild_versions", r.TableId.KvCache, e))), l(this, "nonGuildVersions", d(e => new r.EntityDao("non_guild_versions", r.TableId.KvCache, e))), l(this, "userSettings", d(e => new r.EntityDao("user_settings", r.TableId.KvCache, e))), l(this, "readStates", d(e => new r.Dao("read_states", r.TableId.KvCache, e))), l(this, "userGuildSettings", d(e => new r.Dao("user_guild_settings", r.TableId.KvCache, e))), l(this, "channelsTransaction", e => this.channels(e.database).upgradeTransaction(e)), l(this, "channelsTempTransaction", e => this.channelsTemp(e.database).upgradeTransaction(e)), l(this, "basicChannelsTransaction", e => this.basicChannels(e.database).upgradeTransaction(e)), l(this, "syncedBasicChannelsTransaction", e => this.syncedBasicChannels(e.database).upgradeTransaction(e)), l(this, "cacheTransaction", e => this.cache(e.database).upgradeTransaction(e)), l(this, "forceResyncVersionTransaction", e => this.forceResyncVersion(e.database).upgradeTransaction(e)), l(this, "emojisTransaction", e => this.emojis(e.database).upgradeTransaction(e)), l(this, "guildsTransaction", e => this.guilds(e.database).upgradeTransaction(e)), l(this, "messagesTransaction", e => this.messages(e.database).upgradeTransaction(e)), l(this, "stickersTransaction", e => this.stickers(e.database).upgradeTransaction(e)), l(this, "guildVersionsTransaction", e => this.guildVersions(e.database).upgradeTransaction(e)), l(this, "nonGuildVersionsTransaction", e => this.nonGuildVersions(e.database).upgradeTransaction(e)), l(this, "userSettingsTransaction", e => this.userSettings(e.database).upgradeTransaction(e)), l(this, "readStatesTransaction", e => this.readStates(e.database).upgradeTransaction(e)), l(this, "userGuildSettingsTransaction", e => this.userGuildSettings(e.database).upgradeTransaction(e)), l(this, "guildsRequiringDeletedIdsSyncTransaction", e => this.guildsRequiringDeletedIdsSync(e.database).upgradeTransaction(e))
        }
    }

    function d(e) {
        return function(t) {
            let n = null != t ? t : o.default.database(s.default.getId());
            return null == n ? null : e(n)
        }
    }
    t.default = new u(a.default, {})
}