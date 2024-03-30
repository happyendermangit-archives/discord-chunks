function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        COLLAPSED_SIZE_MEDIA_QUERY: function() {
            return d
        },
        FeedItemInteractionType: function() {
            return u
        },
        GUILD_FEED_CHANNEL_TYPES: function() {
            return _
        },
        GuildFeedRenderMode: function() {
            return l
        },
        GuildFeedSectionTypes: function() {
            return s
        },
        GuildHomeLandingSource: function() {
            return c
        }
    });
    var r, o, i, a, u, s, l, c, f = n("317955");
    (r = u || (u = {})).MESSAGE_CLICKED = "message_clicked", r.MESSAGE_CHANNEL_CLICKED = "message_channel_clicked", r.REACTION_ADDED = "reaction_added", r.REACTION_REMOVED = "reaction_removed", r.THREAD_EMBED_CLICKED = "thread_embed_clicked", r.LINK_CLICKED = "link_clicked", r.IMAGE_CLICKED = "image_clicked", r.BUTTON_CLICKED = "button_clicked", r.REFERENCED_MESSAGE_CLICKED = "referenced_message_clicked", r.MESSAGED_IN_SIDEBAR = "messaged_in_sidebar", r.REPLIED_IN_SIDEBAR = "replied_in_sidebar", r.REPLIED_TO_MESSAGE = "replied_to_message", r.EXPANDED_ITEM = "expanded_item", r.VIEW_MORE_REPLIES = "view_more_replies", (o = s || (s = {})).UNREAD = "UNREAD", o.READ = "READ", o.HIGHLIGHTED = "HIGHLIGHTED", o.ALL = "ALL", (i = l || (l = {}))[i.SEGMENTED_READ = 0] = "SEGMENTED_READ", i[i.TOP = 1] = "TOP", i[i.NEW = 2] = "NEW";
    var d = "(max-width: 1300px)",
        _ = new Set([f.ChannelTypes.GUILD_TEXT, f.ChannelTypes.GUILD_ANNOUNCEMENT, f.ChannelTypes.GUILD_FORUM]);
    (a = c || (c = {})).ORGANIC = "ORGANIC", a.TIMER = "TIMER", a.HIGHLIGHTS = "HIGHLIGHTS"
}