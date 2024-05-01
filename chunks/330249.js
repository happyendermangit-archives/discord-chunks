function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        },
        getAllMessageIdsFromFeedItem: function() {
            return o
        },
        getAllMessagesFromFeedItem: function() {
            return s
        }
    }), n("47120"), n("536091");
    var i = n("536402"),
        r = n("823379");

    function a(e) {
        switch (e.type) {
            case i.GuildFeedItemTypes.MESSAGE:
            case i.GuildFeedItemTypes.FORUM_POST:
                return e.message;
            case i.GuildFeedItemTypes.MESSAGE_BUNDLE:
                return e.messages[e.messages.length - 1].message;
            case i.GuildFeedItemTypes.CONVERSATION:
                return e.root.messages[e.root.messages.length - 1];
            default:
                (0, r.assertNever)(e)
        }
    }

    function s(e) {
        switch (e.type) {
            case i.GuildFeedItemTypes.MESSAGE:
            case i.GuildFeedItemTypes.FORUM_POST:
                return new Set([e.message]);
            case i.GuildFeedItemTypes.MESSAGE_BUNDLE:
                return new Set(e.messages.map(e => e.message));
            case i.GuildFeedItemTypes.CONVERSATION:
                return new Set(function e(t) {
                    let n = t.children.map(t => e(t));
                    return [t.messages, ...n].flat()
                }(e.root));
            default:
                (0, r.assertNever)(e)
        }
    }

    function o(e) {
        return new Set(Array.from(s(e)).map(e => e.id))
    }
}