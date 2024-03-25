function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    }), n("222007"), n("424973");
    var i = n("693566"),
        s = n.n(i),
        l = n("689988"),
        a = n("599110"),
        r = n("299039"),
        o = n("49111");
    class u extends l.default {
        handleMessageBecameVisible(e) {
            let {
                messageId: t
            } = e;
            if (null != this.currentlyVisibleMessageTimers[t] || this.viewsInCurrentChannel.has(t)) return;
            let n = this.recentViewTimes.get(t);
            if (null != n && Date.now() - n < 6e4) return;
            let i = setTimeout(() => {
                delete this.currentlyVisibleMessageTimers[t], this.viewsInCurrentChannel.add(t), this.recentViewTimes.set(t, Date.now()), this.bufferViewTrack(e)
            }, 1e3);
            this.currentlyVisibleMessageTimers[t] = i
        }
        handleMessageLostVisibility(e) {
            let t = this.currentlyVisibleMessageTimers[e];
            null != t && (clearTimeout(t), delete this.currentlyVisibleMessageTimers[e])
        }
        handleMessageListVisibilityChange(e) {
            for (let t of e) this.handleMessageBecameVisible(t);
            let t = new Set(e.map(e => e.messageId));
            for (let e of r.default.keys(this.currentlyVisibleMessageTimers)) !t.has(e) && this.handleMessageLostVisibility(e)
        }
        handleChannelSelect() {
            for (let e of Object.values(this.currentlyVisibleMessageTimers)) clearTimeout(e);
            this.currentlyVisibleMessageTimers = {}, this.viewsInCurrentChannel.clear(), this.drainBuffer()
        }
        drainBuffer() {
            for (let e of this.batchBuffer) a.default.track(o.AnalyticEvents.ANNOUNCEMENT_MESSAGE_VIEWED, {
                message_id: e.messageId,
                channel_id: e.channelId,
                guild_id: e.guildId,
                source_channel_id: e.sourceChannelId,
                source_guild_id: e.sourceGuildId
            });
            this.batchBuffer = [], null != this.batchTimerId && (clearTimeout(this.batchTimerId), this.batchTimerId = null)
        }
        bufferViewTrack(e) {
            this.batchBuffer.length >= 10 && this.drainBuffer(), this.batchBuffer.push(e), null == this.batchTimerId && (this.batchTimerId = setTimeout(() => this.drainBuffer(), 2e3))
        }
        constructor(...e) {
            super(...e), this.currentlyVisibleMessageTimers = {}, this.viewsInCurrentChannel = new Set, this.recentViewTimes = new s({
                max: 500,
                maxAge: 6e4
            }), this.batchBuffer = [], this.batchTimerId = null, this.actions = {
                CHANNEL_SELECT: () => this.handleChannelSelect()
            }
        }
    }
    var d = new u
}