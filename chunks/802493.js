function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    }), n("222007");
    var i = n("446674"),
        r = n("705909"),
        s = n("913144"),
        a = n("271938"),
        o = n("723939");
    r.TableId.KvCache, r.TableId.KvCache;
    class l extends i.Store {
        initialize() {
            this.waitFor(a.default)
        }
        constructor(...e) {
            super(...e), this.database = e => o.default.database(null != e ? e : a.default.getId()), this.channels = u(e => new r.GuildEntityDao("guild_channels", r.TableId.KvCache, e)), this.channelsTemp = u(e => new r.GuildDao("guild_channels_temp", r.TableId.KvCache, e)), this.basicChannels = u(e => new r.Dao("basic_channels", r.TableId.KvCache, e)), this.syncedBasicChannels = u(e => new r.Dao("basic_channels_synced", r.TableId.KvCache, e)), this.cache = u(e => new r.Dao("cache", r.TableId.KvCache, e)), this.forceResyncVersion = u(e => new r.Dao("force_resync_version", r.TableId.KvCache, e)), this.emojis = u(e => new r.GuildEntityDao("guild_emojis", r.TableId.KvCache, e)), this.guilds = u(e => new r.EntityDao("guilds", r.TableId.KvCache, e)), this.guildsRequiringDeletedIdsSync = u(e => new r.EntityDao("guilds_requiring_deleted_ids_sync", r.TableId.KvCache, e)), this.messages = u(e => new r.MessageDao("messages", r.TableId.Messages, e)), this.stickers = u(e => new r.GuildEntityDao("guild_stickers", r.TableId.KvCache, e)), this.guildVersions = u(e => new r.EntityDao("guild_versions", r.TableId.KvCache, e)), this.nonGuildVersions = u(e => new r.EntityDao("non_guild_versions", r.TableId.KvCache, e)), this.userSettings = u(e => new r.EntityDao("user_settings", r.TableId.KvCache, e)), this.readStates = u(e => new r.Dao("read_states", r.TableId.KvCache, e)), this.userGuildSettings = u(e => new r.Dao("user_guild_settings", r.TableId.KvCache, e)), this.channelsTransaction = e => this.channels(e.database).upgradeTransaction(e), this.channelsTempTransaction = e => this.channelsTemp(e.database).upgradeTransaction(e), this.basicChannelsTransaction = e => this.basicChannels(e.database).upgradeTransaction(e), this.syncedBasicChannelsTransaction = e => this.syncedBasicChannels(e.database).upgradeTransaction(e), this.cacheTransaction = e => this.cache(e.database).upgradeTransaction(e), this.forceResyncVersionTransaction = e => this.forceResyncVersion(e.database).upgradeTransaction(e), this.emojisTransaction = e => this.emojis(e.database).upgradeTransaction(e), this.guildsTransaction = e => this.guilds(e.database).upgradeTransaction(e), this.messagesTransaction = e => this.messages(e.database).upgradeTransaction(e), this.stickersTransaction = e => this.stickers(e.database).upgradeTransaction(e), this.guildVersionsTransaction = e => this.guildVersions(e.database).upgradeTransaction(e), this.nonGuildVersionsTransaction = e => this.nonGuildVersions(e.database).upgradeTransaction(e), this.userSettingsTransaction = e => this.userSettings(e.database).upgradeTransaction(e), this.readStatesTransaction = e => this.readStates(e.database).upgradeTransaction(e), this.userGuildSettingsTransaction = e => this.userGuildSettings(e.database).upgradeTransaction(e), this.guildsRequiringDeletedIdsSyncTransaction = e => this.guildsRequiringDeletedIdsSync(e.database).upgradeTransaction(e)
        }
    }

    function u(e) {
        return function(t) {
            let n = null != t ? t : o.default.database(a.default.getId());
            return null == n ? null : e(n)
        }
    }
    var c = new l(s.default, {})
}