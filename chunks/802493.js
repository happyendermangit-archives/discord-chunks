function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    }), n("222007");
    var i = n("446674"),
        s = n("705909"),
        r = n("913144"),
        a = n("271938"),
        o = n("723939");
    s.TableId.KvCache, s.TableId.KvCache;
    class l extends i.Store {
        initialize() {
            this.waitFor(a.default)
        }
        constructor(...e) {
            super(...e), this.database = e => o.default.database(null != e ? e : a.default.getId()), this.channels = u(e => new s.GuildEntityDao("guild_channels", s.TableId.KvCache, e)), this.channelsTemp = u(e => new s.GuildDao("guild_channels_temp", s.TableId.KvCache, e)), this.basicChannels = u(e => new s.Dao("basic_channels", s.TableId.KvCache, e)), this.syncedBasicChannels = u(e => new s.Dao("basic_channels_synced", s.TableId.KvCache, e)), this.cache = u(e => new s.Dao("cache", s.TableId.KvCache, e)), this.forceResyncVersion = u(e => new s.Dao("force_resync_version", s.TableId.KvCache, e)), this.emojis = u(e => new s.GuildEntityDao("guild_emojis", s.TableId.KvCache, e)), this.guilds = u(e => new s.EntityDao("guilds", s.TableId.KvCache, e)), this.guildsRequiringDeletedIdsSync = u(e => new s.EntityDao("guilds_requiring_deleted_ids_sync", s.TableId.KvCache, e)), this.messages = u(e => new s.MessageDao("messages", s.TableId.Messages, e)), this.stickers = u(e => new s.GuildEntityDao("guild_stickers", s.TableId.KvCache, e)), this.guildVersions = u(e => new s.EntityDao("guild_versions", s.TableId.KvCache, e)), this.nonGuildVersions = u(e => new s.EntityDao("non_guild_versions", s.TableId.KvCache, e)), this.userSettings = u(e => new s.EntityDao("user_settings", s.TableId.KvCache, e)), this.readStates = u(e => new s.Dao("read_states", s.TableId.KvCache, e)), this.userGuildSettings = u(e => new s.Dao("user_guild_settings", s.TableId.KvCache, e)), this.channelsTransaction = e => this.channels(e.database).upgradeTransaction(e), this.channelsTempTransaction = e => this.channelsTemp(e.database).upgradeTransaction(e), this.basicChannelsTransaction = e => this.basicChannels(e.database).upgradeTransaction(e), this.syncedBasicChannelsTransaction = e => this.syncedBasicChannels(e.database).upgradeTransaction(e), this.cacheTransaction = e => this.cache(e.database).upgradeTransaction(e), this.forceResyncVersionTransaction = e => this.forceResyncVersion(e.database).upgradeTransaction(e), this.emojisTransaction = e => this.emojis(e.database).upgradeTransaction(e), this.guildsTransaction = e => this.guilds(e.database).upgradeTransaction(e), this.messagesTransaction = e => this.messages(e.database).upgradeTransaction(e), this.stickersTransaction = e => this.stickers(e.database).upgradeTransaction(e), this.guildVersionsTransaction = e => this.guildVersions(e.database).upgradeTransaction(e), this.nonGuildVersionsTransaction = e => this.nonGuildVersions(e.database).upgradeTransaction(e), this.userSettingsTransaction = e => this.userSettings(e.database).upgradeTransaction(e), this.readStatesTransaction = e => this.readStates(e.database).upgradeTransaction(e), this.userGuildSettingsTransaction = e => this.userGuildSettings(e.database).upgradeTransaction(e), this.guildsRequiringDeletedIdsSyncTransaction = e => this.guildsRequiringDeletedIdsSync(e.database).upgradeTransaction(e)
        }
    }

    function u(e) {
        return function(t) {
            let n = null != t ? t : o.default.database(a.default.getId());
            return null == n ? null : e(n)
        }
    }
    var d = new l(r.default, {})
}