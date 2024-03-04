function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    }), n("222007");
    var i = n("605250"),
        s = n("305961"),
        r = n("802493");
    let a = new i.default("GuildVersions");
    var o = new class e {
        async getCommittedVersions() {
            try {
                let e = r.default.guildVersions();
                if (null == e) return {};
                let t = (await e.getMany()).map(e => [e.id, e.version]);
                return Object.fromEntries(null != t ? t : [])
            } catch (e) {
                return a.warn("couldn't load guild versions", e), {}
            }
        }
        remove(e, t) {
            this.deleteWith(e), this.commit(t)
        }
        handleBackgroundSync(e, t) {
            for (let n of e.guilds) "unavailable" !== n.data_mode && this.updateWith(n.id, [n]), null == s.default.getGuild(n.id) && this.remove(n.id, t);
            this.commit(t)
        }
        handleConnectionOpen(e, t) {
            for (let t of (this.reset(), e.guilds)) this.updateWith(t.id, [t]);
            this.commit(t)
        }
        handleGuildCreate(e, t) {
            var n;
            let i = e.guild,
                s = e.guild.id;
            this.updateWith(s, [i]), this.updateWith(s, i.emojis), this.updateWith(s, i.stickers), this.updateWith(s, i.channels), this.updateWith(s, null === (n = i.channelUpdates) || void 0 === n ? void 0 : n.writes), this.updateWith(s, Array.isArray(i.roles) ? i.roles : Object.values(i.roles)), this.commit(t)
        }
        handleGuildUpdate(e, t) {
            let n = e.guild,
                i = e.guild.id;
            this.updateWith(i, [n]), this.updateWith(i, n.emojis), this.updateWith(i, n.stickers), this.updateWith(i, Array.isArray(n.roles) ? n.roles : Object.values(n.roles)), this.commit(t)
        }
        handleGuildDelete(e, t) {
            this.deleteWith(e.guild.id), this.commit(t)
        }
        handleGuildRoleChange(e, t) {
            this.updateWith(e.guildId, [e.role]), this.commit(t)
        }
        handleGuildRoleDelete(e, t) {
            this.updateWith(e.guildId, [{
                version: e.version
            }]), this.commit(t)
        }
        handleGuildEmojisUpdate(e, t) {
            this.updateWith(e.guildId, e.emojis), this.commit(t)
        }
        handleGuildStickersUpdate(e, t) {
            this.updateWith(e.guildId, e.stickers), this.commit(t)
        }
        handleChannelCreate(e, t) {
            null != e.channel.guild_id && this.updateWith(e.channel.guild_id, [e.channel]), this.commit(t)
        }
        handleChannelUpdates(e, t) {
            for (let t of e.channels) null != t.guild_id && this.updateWith(t.guild_id, [t]);
            this.commit(t)
        }
        handleChannelDelete(e, t) {
            null != e.channel.guild_id && this.updateWith(e.channel.guild_id, [e.channel]), this.commit(t)
        }
        resetInMemoryState() {
            this.reset()
        }
        reset() {
            this.committed = new Map, this.pending = new Map
        }
        deleteWith(e) {
            this.pending.set(e, null)
        }
        updateWith(e, t) {
            if (null != t) {
                var n, i;
                let s = Math.max(null !== (n = this.committed.get(e)) && void 0 !== n ? n : 0, null !== (i = this.pending.get(e)) && void 0 !== i ? i : 0),
                    r = this.computeLatestVersion(s, t);
                r > s && this.pending.set(e, r)
            }
        }
        computeLatestVersion(e, t) {
            let n = e;
            for (let e of t) {
                var i;
                n = Math.max(n, null !== (i = e.version) && void 0 !== i ? i : 0)
            }
            return n
        }
        commit(e) {
            if (this.pending.size > 0) {
                let t = r.default.guildVersionsTransaction(e);
                for (let [e, n] of this.pending) null != n ? (t.put({
                    id: e,
                    version: n
                }), this.committed.set(e, n)) : (t.delete(e), this.committed.delete(e));
                this.pending.clear()
            }
        }
        constructor() {
            this.pending = new Map, this.committed = new Map, this.actions = {
                BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
                CHANNEL_CREATE: (e, t) => this.handleChannelCreate(e, t),
                CHANNEL_DELETE: (e, t) => this.handleChannelDelete(e, t),
                CHANNEL_UPDATES: (e, t) => this.handleChannelUpdates(e, t),
                CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
                GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
                GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
                GUILD_EMOJIS_UPDATE: (e, t) => this.handleGuildEmojisUpdate(e, t),
                GUILD_ROLE_CREATE: (e, t) => this.handleGuildRoleChange(e, t),
                GUILD_ROLE_DELETE: (e, t) => this.handleGuildRoleDelete(e, t),
                GUILD_ROLE_UPDATE: (e, t) => this.handleGuildRoleChange(e, t),
                GUILD_STICKERS_UPDATE: (e, t) => this.handleGuildStickersUpdate(e, t),
                GUILD_UPDATE: (e, t) => this.handleGuildUpdate(e, t)
            }
        }
    }
}