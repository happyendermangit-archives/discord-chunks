function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GUILD_FEED_MESSAGE_ITEM_ID_TEMPLATE: function() {
            return u
        },
        default: function() {
            return s
        },
        getGuildFeedItemIdFromFeatureableItem: function() {
            return a
        },
        getFeedItemTypeFromId: function() {
            return E
        }
    });
    var d = n("611221"),
        i = n("449008"),
        l = n("299039");
    let r = e => "".concat(d.GuildFeedItemTypes.FORUM_POST, "/").concat(e),
        u = e => "".concat(d.GuildFeedItemTypes.MESSAGE, "/").concat(e);

    function s(e) {
        switch (e.type) {
            case d.GuildFeedItemTypes.FORUM_POST:
                return r(l.default.castMessageIdAsChannelId(e.message.id));
            case d.GuildFeedItemTypes.MESSAGE:
                return u(e.message.id);
            case d.GuildFeedItemTypes.MESSAGE_BUNDLE:
            case d.GuildFeedItemTypes.CONVERSATION:
                return e.id;
            default:
                (0, i.assertNever)(e)
        }
    }

    function a(e) {
        switch (e.entityType) {
            case d.GuildFeedItemTypes.FORUM_POST:
                return r(e.entity.id);
            case d.GuildFeedItemTypes.MESSAGE:
                return u(e.entity.id);
            default:
                (0, i.assertNever)(e)
        }
    }

    function E(e) {
        return e.split("/")[0]
    }
}