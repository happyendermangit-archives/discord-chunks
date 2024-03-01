function(_, E, I) {
    "use strict";
    var e, a;
    I.r(E), I.d(E, {
        ChannelTypes: function() {
            return e
        },
        ChannelTypesSets: function() {
            return o
        }
    }), I("222007"), (a = e || (e = {}))[a.DM = 1] = "DM", a[a.GROUP_DM = 3] = "GROUP_DM", a[a.GUILD_TEXT = 0] = "GUILD_TEXT", a[a.GUILD_VOICE = 2] = "GUILD_VOICE", a[a.GUILD_CATEGORY = 4] = "GUILD_CATEGORY", a[a.GUILD_ANNOUNCEMENT = 5] = "GUILD_ANNOUNCEMENT", a[a.GUILD_STORE = 6] = "GUILD_STORE", a[a.ANNOUNCEMENT_THREAD = 10] = "ANNOUNCEMENT_THREAD", a[a.PUBLIC_THREAD = 11] = "PUBLIC_THREAD", a[a.PRIVATE_THREAD = 12] = "PRIVATE_THREAD", a[a.GUILD_STAGE_VOICE = 13] = "GUILD_STAGE_VOICE", a[a.GUILD_DIRECTORY = 14] = "GUILD_DIRECTORY", a[a.GUILD_FORUM = 15] = "GUILD_FORUM", a[a.GUILD_MEDIA = 16] = "GUILD_MEDIA", a[a.UNKNOWN = 1e4] = "UNKNOWN";
    let o = {
        CALLABLE: new Set([1, 3]),
        TEXTUAL: new Set([0, 1, 2, 3, 5, 10, 11, 12, 13]),
        GUILD_THREADS_ONLY: new Set([15, 16]),
        STICKERS: new Set([0, 1, 2, 3, 5, 10, 11, 12, 13, 15, 16]),
        READABLE: new Set([0, 1, 2, 3, 5, 10, 11, 12, 13, 14, 15, 16]),
        GUILD: new Set([0, 2, 4, 5, 6, 10, 11, 12, 13, 14, 15, 16]),
        THREADS: new Set([10, 11, 12]),
        PUBLIC_THREADS: new Set([10, 11]),
        GUILD_THREADED: new Set([0, 5, 15, 16]),
        GUILD_STORED: new Set([0, 2, 4, 5, 6, 13, 14, 15, 16]),
        GUILD_TEXTUAL: new Set([0, 2, 5, 10, 11, 12, 13]),
        GUILD_VOCAL: new Set([2, 13]),
        VOCAL_THREAD: new Set([11, 12]),
        VOCAL: new Set([1, 2, 3, 11, 12, 13]),
        VOICE_EFFECTS: new Set([1, 2, 3, 11, 12]),
        GUILD_TEXT_ONLY: new Set([0, 5, 10, 11, 12]),
        LIMITED_CHANNEL_NAME: new Set([0, 5, 10, 11, 12, 15, 16]),
        SEARCHABLE: new Set([0, 1, 2, 3, 5, 10, 11, 12, 13, 15, 16]),
        GUILD_USER_CONTENT: new Set([0, 2, 5, 10, 11, 12, 13, 15, 16]),
        GUILD_TOPICAL: new Set([0, 5, 13, 14, 15, 16]),
        GUILD_WEBHOOKS: new Set([0, 2, 5, 15, 16]),
        GUILD_SYSTEM_CHANNEL: new Set([0, 5]),
        GUILD_PARENTABLE: new Set([0, 2, 5, 10, 11, 12, 13, 14, 15, 16]),
        GUILD_AUTO_MODERATED: new Set([0, 2, 5, 10, 11, 12, 13, 15, 16]),
        GUILD_BASIC: new Set([0, 2, 4]),
        CREATEABLE_GUILD_CHANNELS: new Set([0, 2, 4, 5, 6, 13, 14, 15, 16]),
        MULTI_USER_DMS: new Set([3]),
        ALL_DMS: new Set([1, 3]),
        INVITABLE: new Set([0, 2, 3, 5, 6, 13, 14, 15, 16]),
        GUILD_FEED_FEATURABLE_MESSAGES: new Set([0, 5, 11]),
        ROLE_SUBSCRIPTIONS: new Set([0, 2, 5, 13, 15, 16]),
        ICON_EMOJIS: new Set([0, 2, 5, 13, 15]),
        SUMMARIZEABLE: new Set([0]),
        POLLS: new Set([0, 2, 3, 11, 12, 13]),
        ALL: new Set([0, 1, 2, 3, 4, 5, 6, 10, 11, 12, 13, 14, 15, 16])
    }
}