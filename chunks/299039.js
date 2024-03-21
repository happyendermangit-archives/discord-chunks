function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DISCORD_EPOCH: function() {
            return r.DISCORD_EPOCH
        },
        default: function() {
            return o
        }
    });
    var i = n("917351"),
        s = n.n(i),
        r = n("249654");

    function a(e) {
        return e
    }
    var o = {
        age: function(e) {
            return r.age(e)
        },
        extractTimestamp: function(e) {
            return r.extractTimestamp(e)
        },
        compare: function(e, t) {
            return r.compare(e, t)
        },
        atPreviousMillisecond: function(e) {
            return r.atPreviousMillisecond(e)
        },
        fromTimestamp: function(e) {
            return r.fromTimestamp(e)
        },
        keys: function(e) {
            return Object.keys(e)
        },
        forEach: function(e, t) {
            s.forEach(e, (e, n) => t(e, n))
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