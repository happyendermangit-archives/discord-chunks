function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createFakeGuildFeedItem: function() {
            return s
        },
        default: function() {
            return u
        }
    });
    var r = n("193695"),
        o = n("566600"),
        i = n("162677"),
        a = n("159109");

    function u(e) {
        switch (e.entityType) {
            case r.GuildFeedItemTypes.FORUM_POST:
                return {
                    entityId: e.entity.id, details: {
                        parent_channel_id: e.entity.parent_id
                    }, entityType: e.entityType, guildId: e.guildId
                };
            case r.GuildFeedItemTypes.MESSAGE:
                return {
                    entityId: e.entity.id, details: {
                        channel_id: e.entity.channel_id
                    }, entityType: e.entityType, guildId: e.guildId
                };
            default:
                (0, i.assertNever)(e)
        }
    }

    function s(e) {
        switch (e.entityType) {
            case r.GuildFeedItemTypes.FORUM_POST:
                var t = e.entity.id,
                    n = o.default.getMessage(t).firstMessage;
                if (null == n) return null;
                return {
                    type: r.GuildFeedItemTypes.FORUM_POST, id: (0, a.getGuildFeedItemIdFromFeatureableItem)(e), sortIndex: 0, message: n, thread: e.entity, featured: !0, seen: !1, highlighted: !1, unreadMention: !1
                };
            case r.GuildFeedItemTypes.MESSAGE:
                return {
                    type: r.GuildFeedItemTypes.MESSAGE, id: (0, a.getGuildFeedItemIdFromFeatureableItem)(e), sortIndex: 0, message: e.entity, referenceMessages: [], featured: !0, seen: !1, highlighted: !1, unreadMention: !1
                }
        }
    }
}