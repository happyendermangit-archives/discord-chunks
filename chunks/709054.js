function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DISCORD_EPOCH: function() {
            return a.DISCORD_EPOCH
        }
    });
    var i = n("392711"),
        r = n.n(i),
        a = n("67423");

    function s(e) {
        return e
    }
    t.default = {
        age: function(e) {
            return a.age(e)
        },
        extractTimestamp: function(e) {
            return a.extractTimestamp(e)
        },
        compare: function(e, t) {
            return a.compare(e, t)
        },
        atPreviousMillisecond: function(e) {
            return a.atPreviousMillisecond(e)
        },
        fromTimestamp: function(e) {
            return a.fromTimestamp(e)
        },
        keys: function(e) {
            return Object.keys(e)
        },
        forEach: function(e, t) {
            r().forEach(e, (e, n) => t(e, n))
        },
        forEachKey: function(e, t) {
            for (let n in e) t(n)
        },
        entries: function(e) {
            return Object.entries(e)
        },
        castChannelIdAsMessageId: function(e) {
            return e
        },
        castMessageIdAsChannelId: function(e) {
            return e
        },
        castGuildIdAsEveryoneGuildRoleId: function(e) {
            return e
        },
        cast: s
    }
}