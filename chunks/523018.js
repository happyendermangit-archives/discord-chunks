function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DISCORD_EPOCH: function() {
            return i.DISCORD_EPOCH
        }
    });
    var r = n("392711"),
        o = n.n(r),
        i = n("484308");

    function a(e) {
        return e
    }
    t.default = {
        age: function(e) {
            return i.age(e)
        },
        extractTimestamp: function(e) {
            return i.extractTimestamp(e)
        },
        compare: function(e, t) {
            return i.compare(e, t)
        },
        atPreviousMillisecond: function(e) {
            return i.atPreviousMillisecond(e)
        },
        fromTimestamp: function(e) {
            return i.fromTimestamp(e)
        },
        keys: function(e) {
            return Object.keys(e)
        },
        forEach: function(e, t) {
            o().forEach(e, function(e, n) {
                return t(e, n)
            })
        },
        forEachKey: function(e, t) {
            for (var n in e) t(n)
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