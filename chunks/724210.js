function(e, t, n) {
    "use strict";
    var i, s, r, a;
    n.r(t), n.d(t, {
        StaticChannelRoute: function() {
            return i
        },
        StaticChannelRoutes: function() {
            return o
        },
        isStaticChannelRoute: function() {
            return l
        },
        buildGuildStaticChannelId: function() {
            return u
        },
        isGuildHomeChannel: function() {
            return d
        },
        ChannelFlags: function() {
            return c
        },
        MAX_CHANNEL_TOPIC_LENGTH: function() {
            return _
        },
        MAX_FORUM_CHANNEL_TOPIC_LENGTH: function() {
            return f
        },
        StaticChannelId: function() {
            return s
        },
        StaticChannelIds: function() {
            return E
        },
        FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID: function() {
            return h
        }
    }), n("222007"), (r = i || (i = {})).ROLE_SUBSCRIPTIONS = "role-subscriptions", r.GUILD_SHOP = "shop", r.MEMBER_APPLICATIONS = "member-applications", r.GUILD_HOME = "@home", r.CHANNEL_BROWSER = "channel-browser", r.GUILD_ONBOARDING = "onboarding", r.CUSTOMIZE_COMMUNITY = "customize-community", r.MEMBER_SAFETY = "member-safety";
    let o = new Set(Object.values(i));

    function l(e) {
        return o.has(e)
    }

    function u(e, t) {
        return "".concat(e, "-").concat(t)
    }

    function d(e) {
        return !!(null == e ? void 0 : e.includes("@home"))
    }
    let c = Object.freeze({
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
            HIDE_MEDIA_DOWNLOAD_OPTIONS: 32768
        }),
        _ = 1024,
        f = 4096;
    (a = s || (s = {})).GUILD_HOME = "home", a.SERVER_GUIDE = "guide", a.CHANNEL_BROWSER = "browse", a.CUSTOMIZE_COMMUNITY = "customize";
    let E = new Set(Object.values(s)),
        h = "131"
}