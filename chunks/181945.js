function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return I
        }
    }), n("390547"), n("47120"), n("653041");
    var i = n("392711"),
        r = n.n(i),
        a = n("45114"),
        s = n("45966"),
        o = n("601070"),
        l = n("984933"),
        u = n("306680"),
        d = n("626135"),
        _ = n("709054"),
        c = n("981631"),
        E = n("490897");

    function I(e, t, n) {
        let i = r().flatMap(e, e => {
            let t = l.default.getSelectableChannelIds(e),
                n = [...t, ...l.default.getVocalChannelIds(e)],
                i = o.default.getActiveJoinedThreadsForGuild(e);
            for (let e of t) {
                var r;
                let t = null !== (r = i[e]) && void 0 !== r ? r : {};
                for (let e in t) n.push(e)
            }
            return n
        }).map(e => ({
            channelId: e,
            readStateType: E.ReadStateTypes.CHANNEL,
            messageId: u.default.lastMessageId(e)
        }));
        return e.forEach(e => {
            i.push({
                channelId: _.default.cast(e),
                readStateType: E.ReadStateTypes.GUILD_EVENT,
                messageId: u.default.lastMessageId(e, E.ReadStateTypes.GUILD_EVENT)
            }), i.push({
                channelId: _.default.cast(e),
                readStateType: E.ReadStateTypes.GUILD_ONBOARDING_QUESTION,
                messageId: s.default.ackIdForGuild(e)
            })
        }), d.default.track(c.AnalyticEvents.MARK_AS_READ, {
            source: t,
            type: "guild"
        }), (0, a.bulkAck)(i, n)
    }
}