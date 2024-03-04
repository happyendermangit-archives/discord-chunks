function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    }), n("222007");
    var i = n("689988"),
        s = n("689275"),
        r = n("271938"),
        a = n("42203"),
        o = n("299039"),
        l = n("786742");
    class u extends i.default {
        handleThreadCreate(e) {
            let {
                channel: t
            } = e;
            if (t.isForumPost()) {
                let e = t.ownerId === r.default.getId();
                this.readStateSnapshots[t.id] = {
                    isNew: !e,
                    hasUnreads: !e
                }
            }
        }
        constructor(...e) {
            super(...e), this.readStateSnapshots = {}, this.actions = {
                CHANNEL_SELECT: e => this.handleChannelSelect(e),
                THREAD_CREATE: e => this.handleThreadCreate(e)
            }, this.handleChannelSelect = e => {
                let {
                    channelId: t
                } = e;
                if (null == t) return;
                let n = a.default.getChannel(t);
                null != n && n.isForumLikeChannel() && (this.readStateSnapshots = {}, this.processForumChannel(n.guild_id, t))
            }, this.processForumChannel = (e, t) => {
                let n = s.default.getThreadsForParent(e, t);
                o.default.keys(n).forEach(e => {
                    let t = (0, l.getForumPostReadStatesById)(e);
                    null != t && (this.readStateSnapshots[e] = t)
                })
            }, this.getReadStateSnapshotAnalytics = e => this.readStateSnapshots[e]
        }
    }
    var d = new u
}