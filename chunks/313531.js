function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GUILD_FEED_MESSAGE_ITEM_ID_TEMPLATE: function() {
            return o
        },
        default: function() {
            return l
        },
        getFeedItemTypeFromId: function() {
            return d
        },
        getGuildFeedItemIdFromFeatureableItem: function() {
            return u
        }
    });
    var i = n("536402"),
        r = n("823379"),
        s = n("709054");
    let a = e => "".concat(i.GuildFeedItemTypes.FORUM_POST, "/").concat(e),
        o = e => "".concat(i.GuildFeedItemTypes.MESSAGE, "/").concat(e);

    function l(e) {
        switch (e.type) {
            case i.GuildFeedItemTypes.FORUM_POST:
                return a(s.default.castMessageIdAsChannelId(e.message.id));
            case i.GuildFeedItemTypes.MESSAGE:
                return o(e.message.id);
            case i.GuildFeedItemTypes.MESSAGE_BUNDLE:
            case i.GuildFeedItemTypes.CONVERSATION:
                return e.id;
            default:
                (0, r.assertNever)(e)
        }
    }

    function u(e) {
        switch (e.entityType) {
            case i.GuildFeedItemTypes.FORUM_POST:
                return a(e.entity.id);
            case i.GuildFeedItemTypes.MESSAGE:
                return o(e.entity.id);
            default:
                (0, r.assertNever)(e)
        }
    }

    function d(e) {
        return e.split("/")[0]
    }
}