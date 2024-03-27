function(e, t, n) {
    "use strict";
    var i, r, s, a;
    n.r(t), n.d(t, {
        ChannelFlags: function() {
            return _
        },
        FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID: function() {
            return T
        },
        MAX_CHANNEL_TOPIC_LENGTH: function() {
            return c
        },
        MAX_FORUM_CHANNEL_TOPIC_LENGTH: function() {
            return E
        },
        StaticChannelId: function() {
            return r
        },
        StaticChannelIds: function() {
            return I
        },
        StaticChannelRoute: function() {
            return i
        },
        StaticChannelRoutes: function() {
            return o
        },
        buildGuildStaticChannelId: function() {
            return u
        },
        isGuildHomeChannel: function() {
            return d
        },
        isStaticChannelRoute: function() {
            return l
        }
    }), n("47120"), (s = i || (i = {})).ROLE_SUBSCRIPTIONS = "role-subscriptions", s.GUILD_SHOP = "shop", s.MEMBER_APPLICATIONS = "member-applications", s.GUILD_HOME = "@home", s.CHANNEL_BROWSER = "channel-browser", s.GUILD_ONBOARDING = "onboarding", s.CUSTOMIZE_COMMUNITY = "customize-community", s.MEMBER_SAFETY = "member-safety";
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
    let _ = Object.freeze({
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
        c = 1024,
        E = 4096;
    (a = r || (r = {})).GUILD_HOME = "home", a.SERVER_GUIDE = "guide", a.CHANNEL_BROWSER = "browse", a.CUSTOMIZE_COMMUNITY = "customize";
    let I = new Set(Object.values(r)),
        T = "131"
}