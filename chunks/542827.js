function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    }), n("881410"), n("222007"), n("424973");
    var a = n("917351"),
        i = n.n(a),
        l = n("267363"),
        r = n("863636"),
        s = n("401690"),
        u = n("923959"),
        d = n("660478"),
        o = n("599110"),
        c = n("299039"),
        _ = n("49111"),
        f = n("133335");

    function E(e, t, n) {
        let a = i.flatMap(e, e => {
            let t = u.default.getSelectableChannelIds(e),
                n = u.default.getVocalChannelIds(e),
                a = [...t, ...n],
                i = s.default.getActiveJoinedThreadsForGuild(e);
            for (let e of t) {
                var l;
                let t = null !== (l = i[e]) && void 0 !== l ? l : {};
                for (let e in t) a.push(e)
            }
            return a
        }).map(e => ({
            channelId: e,
            readStateType: f.ReadStateTypes.CHANNEL,
            messageId: d.default.lastMessageId(e)
        }));
        return e.forEach(e => {
            a.push({
                channelId: c.default.cast(e),
                readStateType: f.ReadStateTypes.GUILD_EVENT,
                messageId: d.default.lastMessageId(e, f.ReadStateTypes.GUILD_EVENT)
            }), a.push({
                channelId: c.default.cast(e),
                readStateType: f.ReadStateTypes.GUILD_ONBOARDING_QUESTION,
                messageId: r.default.ackIdForGuild(e)
            })
        }), o.default.track(_.AnalyticEvents.MARK_AS_READ, {
            source: t,
            type: "guild"
        }), (0, l.bulkAck)(a, n)
    }
}