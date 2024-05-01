function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DISCORD_EPOCH: function() {
            return s.DISCORD_EPOCH
        }
    });
    var i = n("392711"),
        r = n.n(i),
        s = n("67423");

    function a(e) {
        return e
    }
    t.default = {
        age: function(e) {
            return s.age(e)
        },
        extractTimestamp: function(e) {
            return s.extractTimestamp(e)
        },
        compare: function(e, t) {
            return s.compare(e, t)
        },
        atPreviousMillisecond: function(e) {
            return s.atPreviousMillisecond(e)
        },
        fromTimestamp: function(e) {
            return s.fromTimestamp(e)
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
        cast: a
    }
}