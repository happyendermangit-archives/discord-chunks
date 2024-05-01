function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("348326"),
        r = n("710845"),
        a = n("38618"),
        s = n("592125"),
        o = n("287328"),
        l = n("59480"),
        u = n("40455"),
        d = n("989263"),
        _ = n("513418");

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let E = new r.default("Messages");
    class I {
        static computeUsersAndMembers(e) {
            (0, _.requireSortedDescending)(e);
            let t = new Map,
                n = new Map;
            for (let i of e) this.addIntoMap(t, i.users, e => e.id), this.addIntoMap(n, i.members, e => e.userId);
            return [Array.from(t.values()), Array.from(n.values())]
        }
        static addIntoMap(e, t, n) {
            for (let i of t) {
                let t = n(i),
                    r = e.get(t);
                (null == r || r.incomplete && !i.incomplete) && e.set(t, i)
            }
        }
        constructor(e) {
            if (c(this, "connectionId", null), c(this, "users", []), c(this, "members", []), c(this, "messages", []), e.length > 0) {
                var t;
                let n = null === (t = e[0]) || void 0 === t ? void 0 : t.connectionId,
                    [i, r] = I.computeUsersAndMembers(e);
                e.length > 0 && e.every(e => e.connectionId === n) && (this.connectionId = n), this.users = i, this.members = r, this.messages = e.map(e => e.message)
            }
        }
    }
    t.default = new class e {
        async startupLoad(e, t, n, i) {
            let r = o.default.messages(e);
            return new I(await r.getLatest(t, n, i))
        }
        async load(e, t, n) {
            let i = s.default.getBasicChannel(t);
            if (null == t || null == i || !(0, d.isReadableChannel)(i)) return new I([]);
            {
                let r = o.default.messages(e);
                return new I(await r.getLatest(i.guild_id, t, n))
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
            let n = s.default.getBasicChannel(e.channelId);
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
        insertStale(e, t, n, r) {
            let s = o.default.messagesTransaction(r),
                u = a.default.lastTimeConnectedChanged();
            s.put(e, t, l.KvMessage.fromMessage(e, t, n, u), i.ConflictOptions.Skip)
        }
        upsertOne(e, t, n, r) {
            let s = o.default.messagesTransaction(r),
                d = a.default.lastTimeConnectedChanged();
            s.put(e, t, l.KvMessage.fromMessage(e, t, n, d), i.ConflictOptions.Replace), s.trimChannel(e, t, u.default.saveLimit(t))
        }
        upsertMany(e, t, n, i) {
            let r = o.default.messagesTransaction(i),
                s = a.default.lastTimeConnectedChanged();
            for (let i of n) r.put(e, t, l.KvMessage.fromMessage(e, t, i, s));
            r.trimChannel(e, t, u.default.saveLimit(t))
        }
        async updateOne(e, t, n, i) {
            if (null == n.id) {
                E.warn("updateOne: message.id is null; cannot update a message if we do not know its id.");
                return
            }
            let r = o.default.messages(i.database),
                s = await r.get(e, t, n.id),
                u = a.default.lastTimeConnectedChanged();
            null != s && r.put(e, t, l.KvMessage.fromMessage(e, t, {
                ...s.message,
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
            c(this, "actions", {
                CHANNEL_DELETE: (e, t) => this.handleChannelDelete(e, t),
                GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
                LOAD_MESSAGES_SUCCESS: (e, t) => this.handleLoadMessagesSuccess(e, t),
                MESSAGE_CREATE: (e, t) => this.handleMessageCreate(e, t),
                MESSAGE_DELETE_BULK: (e, t) => this.handleMessageDeleteBulk(e, t),
                MESSAGE_DELETE: (e, t) => this.handleMessageDelete(e, t),
                MESSAGE_PREVIEWS_LOADED: (e, t) => this.handleMessagePreviewsLoaded(e, t),
                MESSAGE_UPDATE: (e, t) => this.handleMessageUpdate(e, t)
            })
        }
    }
}