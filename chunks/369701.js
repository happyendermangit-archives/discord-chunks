function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        COLLAPSED_SIZE_MEDIA_QUERY: function() {
            return c
        },
        FeedItemInteractionType: function() {
            return i
        },
        GUILD_FEED_CHANNEL_TYPES: function() {
            return E
        },
        GuildFeedRenderMode: function() {
            return a
        },
        GuildFeedSectionTypes: function() {
            return r
        },
        GuildHomeLandingSource: function() {
            return s
        }
    }), n("47120");
    var i, r, a, s, o, l, u, d, _ = n("106351");
    (o = i || (i = {})).MESSAGE_CLICKED = "message_clicked", o.MESSAGE_CHANNEL_CLICKED = "message_channel_clicked", o.REACTION_ADDED = "reaction_added", o.REACTION_REMOVED = "reaction_removed", o.THREAD_EMBED_CLICKED = "thread_embed_clicked", o.LINK_CLICKED = "link_clicked", o.IMAGE_CLICKED = "image_clicked", o.BUTTON_CLICKED = "button_clicked", o.REFERENCED_MESSAGE_CLICKED = "referenced_message_clicked", o.MESSAGED_IN_SIDEBAR = "messaged_in_sidebar", o.REPLIED_IN_SIDEBAR = "replied_in_sidebar", o.REPLIED_TO_MESSAGE = "replied_to_message", o.EXPANDED_ITEM = "expanded_item", o.VIEW_MORE_REPLIES = "view_more_replies", (l = r || (r = {})).UNREAD = "UNREAD", l.READ = "READ", l.HIGHLIGHTED = "HIGHLIGHTED", l.ALL = "ALL", (u = a || (a = {}))[u.SEGMENTED_READ = 0] = "SEGMENTED_READ", u[u.TOP = 1] = "TOP", u[u.NEW = 2] = "NEW";
    let c = "(max-width: 1300px)",
        E = new Set([_.ChannelTypes.GUILD_TEXT, _.ChannelTypes.GUILD_ANNOUNCEMENT, _.ChannelTypes.GUILD_FORUM]);
    (d = s || (s = {})).ORGANIC = "ORGANIC", d.TIMER = "TIMER", d.HIGHLIGHTS = "HIGHLIGHTS"
}