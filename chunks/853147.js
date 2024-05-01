function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createFakeGuildFeedItem: function() {
            return l
        },
        default: function() {
            return o
        }
    });
    var i = n("536402"),
        r = n("660189"),
        a = n("823379"),
        s = n("313531");

    function o(e) {
        switch (e.entityType) {
            case i.GuildFeedItemTypes.FORUM_POST:
                return {
                    entityId: e.entity.id, details: {
                        parent_channel_id: e.entity.parent_id
                    }, entityType: e.entityType, guildId: e.guildId
                };
            case i.GuildFeedItemTypes.MESSAGE:
                return {
                    entityId: e.entity.id, details: {
                        channel_id: e.entity.channel_id
                    }, entityType: e.entityType, guildId: e.guildId
                };
            default:
                (0, a.assertNever)(e)
        }
    }

    function l(e) {
        switch (e.entityType) {
            case i.GuildFeedItemTypes.FORUM_POST:
                let t = e.entity.id,
                    {
                        firstMessage: n
                    } = r.default.getMessage(t);
                if (null == n) return null;
                return {
                    type: i.GuildFeedItemTypes.FORUM_POST, id: (0, s.getGuildFeedItemIdFromFeatureableItem)(e), sortIndex: 0, message: n, thread: e.entity, featured: !0, seen: !1, highlighted: !1, unreadMention: !1
                };
            case i.GuildFeedItemTypes.MESSAGE:
                return {
                    type: i.GuildFeedItemTypes.MESSAGE, id: (0, s.getGuildFeedItemIdFromFeatureableItem)(e), sortIndex: 0, message: e.entity, referenceMessages: [], featured: !0, seen: !1, highlighted: !1, unreadMention: !1
                }
        }
    }
}