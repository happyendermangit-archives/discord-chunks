function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    }), n("881410"), n("222007"), n("424973");
    var a = n("917351"),
        i = n.n(a),
        l = n("267363"),
        d = n("863636"),
        r = n("401690"),
        u = n("923959"),
        s = n("660478"),
        o = n("599110"),
        c = n("299039"),
        f = n("49111"),
        g = n("133335");

    function p(e, t, n) {
        let a = i.flatMap(e, e => {
            let t = u.default.getSelectableChannelIds(e),
                n = u.default.getVocalChannelIds(e),
                a = [...t, ...n],
                i = r.default.getActiveJoinedThreadsForGuild(e);
            for (let e of t) {
                var l;
                let t = null !== (l = i[e]) && void 0 !== l ? l : {};
                for (let e in t) a.push(e)
            }
            return a
        }).map(e => ({
            channelId: e,
            readStateType: g.ReadStateTypes.CHANNEL,
            messageId: s.default.lastMessageId(e)
        }));
        return e.forEach(e => {
            a.push({
                channelId: c.default.castGuildIdAsReadStateChannelId(e),
                readStateType: g.ReadStateTypes.GUILD_EVENT,
                messageId: s.default.lastMessageId(e, g.ReadStateTypes.GUILD_EVENT)
            }), a.push({
                channelId: c.default.castGuildIdAsReadStateChannelId(e),
                readStateType: g.ReadStateTypes.GUILD_ONBOARDING_QUESTION,
                messageId: d.default.ackIdForGuild(e)
            })
        }), o.default.track(f.AnalyticEvents.MARK_AS_READ, {
            source: t,
            type: "guild"
        }), (0, l.bulkAck)(a, n)
    }
}