function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return h
        }
    }), n("222007");
    var i = n("705909"),
        s = n("605250"),
        r = n("619443"),
        a = n("42203"),
        o = n("802493"),
        l = n("883062"),
        u = n("794897"),
        d = n("818697"),
        c = n("280468");
    let f = new s.default("Messages");
    class _ {
        static computeUsersAndMembers(e) {
            (0, c.requireSortedDescending)(e);
            let t = new Map,
                n = new Map;
            for (let i of e) this.addIntoMap(t, i.users, e => e.id), this.addIntoMap(n, i.members, e => e.userId);
            return [Array.from(t.values()), Array.from(n.values())]
        }
        static addIntoMap(e, t, n) {
            for (let i of t) {
                let t = n(i),
                    s = e.get(t);
                (null == s || s.incomplete && !i.incomplete) && e.set(t, i)
            }
        }
        constructor(e) {
            if (this.connectionId = null, this.users = [], this.members = [], this.messages = [], e.length > 0) {
                var t;
                let n = null === (t = e[0]) || void 0 === t ? void 0 : t.connectionId,
                    [i, s] = _.computeUsersAndMembers(e);
                e.length > 0 && e.every(e => e.connectionId === n) && (this.connectionId = n), this.users = i, this.members = s, this.messages = e.map(e => e.message)
            }
        }
    }
    var h = new class e {
        async startupLoad(e, t, n, i) {
            let s = o.default.messages(e),
                r = await s.getLatest(t, n, i);
            return new _(r)
        }
        async load(e, t, n) {
            let i = a.default.getBasicChannel(t);
            if (null == t || null == i || !(0, d.isReadableChannel)(i)) return new _([]);
            {
                let s = o.default.messages(e),
                    r = await s.getLatest(i.guild_id, t, n);
                return new _(r)
            }
        }
        handleMessageCreate(e, t) {
            !e.optimistic && !e.isPushNotification && null == e.sendMessageOptions && (0, d.isReadableChannelId)(e.channelId) && this.upsertOne(e.guildId, e.channelId, e.message, t)
        }
        handleMessageUpdate(e, t) {
            if (null != e.message.id && null != e.message.channel_id)(0, d.isReadableChannelId)(e.message.channel_id) && (function(e) {
                return null != e.author && null != e.content && null != e.mentions && null != e.timestamp
            }(e.message) ? this.upsertOne(e.guildId, e.message.channel_id, e.message, t) : this.updateOne(e.guildId, e.message.channel_id, e.message, t))
        }
        handleMessagePreviewsLoaded(e, t) {
            for (let n of e.messages)(0, d.isReadableChannelId)(n.channel_id) && this.insertStale(e.guildId, n.channel_id, n, t)
        }
        handleLoadMessagesSuccess(e, t) {
            let n = a.default.getBasicChannel(e.channelId);
            null != n && (0, d.isReadableChannelId)(e.channelId) && this.upsertMany(n.guild_id, e.channelId, e.messages, t)
        }
        handleMessageDelete(e, t) {
            null != e.id && this.deleteOne(e.guildId, e.channelId, e.id, t)
        }
        handleMessageDeleteBulk(e, t) {
            for (let n of e.ids) this.deleteOne(e.guildId, e.channelId, n, t)
        }
        handleChannelDelete(e, t) {
            this.deleteChannel(e.channel.guild_id, e.channel.id, t)
        }
        handleGuildDelete(e, t) {
            !e.guild.unavailable && this.deleteGuild(e.guild.id, t)
        }
        resetInMemoryState() {}
        insertStale(e, t, n, s) {
            let a = o.default.messagesTransaction(s),
                u = r.default.lastTimeConnectedChanged();
            a.put(e, t, l.KvMessage.fromMessage(e, t, n, u), i.ConflictOptions.Skip)
        }
        upsertOne(e, t, n, s) {
            let a = o.default.messagesTransaction(s),
                d = r.default.lastTimeConnectedChanged();
            a.put(e, t, l.KvMessage.fromMessage(e, t, n, d), i.ConflictOptions.Replace), a.trimChannel(e, t, u.default.saveLimit(t))
        }
        upsertMany(e, t, n, i) {
            let s = o.default.messagesTransaction(i),
                a = r.default.lastTimeConnectedChanged();
            for (let i of n) s.put(e, t, l.KvMessage.fromMessage(e, t, i, a));
            s.trimChannel(e, t, u.default.saveLimit(t))
        }
        async updateOne(e, t, n, i) {
            if (null == n.id) {
                f.warn("updateOne: message.id is null; cannot update a message if we do not know its id.");
                return
            }
            let s = o.default.messages(i.database),
                a = await s.get(e, t, n.id),
                u = r.default.lastTimeConnectedChanged();
            null != a && s.put(e, t, l.KvMessage.fromMessage(e, t, {
                ...a.message,
                ...n
            }, u))
        }
        deleteOne(e, t, n, i) {
            o.default.messagesTransaction(i).deleteMessage(e, t, n)
        }
        deleteChannel(e, t, n) {
            o.default.messagesTransaction(n).deleteChannel(e, t)
        }
        deleteGuild(e, t) {
            o.default.messagesTransaction(t).deleteGuild(e)
        }
        constructor() {
            this.actions = {
                CHANNEL_DELETE: (e, t) => this.handleChannelDelete(e, t),
                GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
                LOAD_MESSAGES_SUCCESS: (e, t) => this.handleLoadMessagesSuccess(e, t),
                MESSAGE_CREATE: (e, t) => this.handleMessageCreate(e, t),
                MESSAGE_DELETE_BULK: (e, t) => this.handleMessageDeleteBulk(e, t),
                MESSAGE_DELETE: (e, t) => this.handleMessageDelete(e, t),
                MESSAGE_PREVIEWS_LOADED: (e, t) => this.handleMessagePreviewsLoaded(e, t),
                MESSAGE_UPDATE: (e, t) => this.handleMessageUpdate(e, t)
            }
        }
    }
}