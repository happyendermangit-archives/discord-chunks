function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ChannelFlags: function() {
            return f
        },
        FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID: function() {
            return p
        },
        MAX_CHANNEL_TOPIC_LENGTH: function() {
            return d
        },
        MAX_FORUM_CHANNEL_TOPIC_LENGTH: function() {
            return _
        },
        StaticChannelId: function() {
            return a
        },
        StaticChannelIds: function() {
            return E
        },
        StaticChannelRoute: function() {
            return i
        },
        StaticChannelRoutes: function() {
            return u
        },
        buildGuildStaticChannelId: function() {
            return l
        },
        isGuildHomeChannel: function() {
            return c
        },
        isStaticChannelRoute: function() {
            return s
        }
    }), (o = i || (i = {})).ROLE_SUBSCRIPTIONS = "role-subscriptions", o.GUILD_SHOP = "shop", o.MEMBER_APPLICATIONS = "member-applications", o.GUILD_HOME = "@home", o.CHANNEL_BROWSER = "channel-browser", o.GUILD_ONBOARDING = "onboarding", o.CUSTOMIZE_COMMUNITY = "customize-community", o.MEMBER_SAFETY = "member-safety";
    var r, o, i, a, u = new Set(Object.values(i));

    function s(e) {
        return u.has(e)
    }

    function l(e, t) {
        return "".concat(e, "-").concat(t)
    }

    function c(e) {
        return !!(null == e ? void 0 : e.includes("@home"))
    }
    var f = Object.freeze({
            GUILD_FEED_REMOVED: 1,
            PINNED: 2,
            ACTIVE_CHANNELS_REMOVED: 4,
            REQUIRE_TAG: 16,
            IS_SPAM: 32,
            IS_GUILD_RESOURCE_CHANNEL: 128,
            CLYDE_AI: 256,
            IS_SCHEDULED_FOR_DELETION: 512,
            IS_MEDIA_CHANNEL: 1024,
            SUMMARIES_DISABLED: 2048,
            IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL: 8192,
            IS_BROADCASTING: 16384,
            HIDE_MEDIA_DOWNLOAD_OPTIONS: 32768,
            IS_JOIN_REQUEST_INTERVIEW_CHANNEL: 65536
        }),
        d = 1024,
        _ = 4096;
    (r = a || (a = {})).GUILD_HOME = "home", r.SERVER_GUIDE = "guide", r.CHANNEL_BROWSER = "browse", r.CUSTOMIZE_COMMUNITY = "customize";
    var E = new Set(Object.values(a)),
        p = "131"
}