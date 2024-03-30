function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GUILD_FEED_MESSAGE_ITEM_ID_TEMPLATE: function() {
            return u
        },
        default: function() {
            return s
        },
        getFeedItemTypeFromId: function() {
            return c
        },
        getGuildFeedItemIdFromFeatureableItem: function() {
            return l
        }
    });
    var r = n("193695"),
        o = n("162677"),
        i = n("523018"),
        a = function(e) {
            return "".concat(r.GuildFeedItemTypes.FORUM_POST, "/").concat(e)
        },
        u = function(e) {
            return "".concat(r.GuildFeedItemTypes.MESSAGE, "/").concat(e)
        };

    function s(e) {
        switch (e.type) {
            case r.GuildFeedItemTypes.FORUM_POST:
                return a(i.default.castMessageIdAsChannelId(e.message.id));
            case r.GuildFeedItemTypes.MESSAGE:
                return u(e.message.id);
            case r.GuildFeedItemTypes.MESSAGE_BUNDLE:
            case r.GuildFeedItemTypes.CONVERSATION:
                return e.id;
            default:
                (0, o.assertNever)(e)
        }
    }

    function l(e) {
        switch (e.entityType) {
            case r.GuildFeedItemTypes.FORUM_POST:
                return a(e.entity.id);
            case r.GuildFeedItemTypes.MESSAGE:
                return u(e.entity.id);
            default:
                (0, o.assertNever)(e)
        }
    }

    function c(e) {
        return e.split("/")[0]
    }
}