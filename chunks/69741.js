function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PUBLIC_SUCCESS_MODAL_SEEN_KEY: function() {
            return o
        },
        PUBLIC_GUILD_ANNOUNCEMENTS_GUILD_ID: function() {
            return l
        },
        PUBLIC_GUILD_UPDATES_WEBHOOK_USER_ID: function() {
            return u
        },
        CREATE_NEW_CHANNEL_VALUE: function() {
            return d
        },
        MODERATOR_PERMISSIONS: function() {
            return c
        },
        MODERATOR_PERMISSIONS_FLAG: function() {
            return _
        },
        COMMUNITY_UPSELL_MINIMUM_GUILD_SIZE: function() {
            return f
        },
        ENABLE_COMMUNITY_FLOW_MODAL_KEY: function() {
            return E
        },
        EnableCommunityModalSteps: function() {
            return i
        }
    }), n("222007");
    var i, s, r = n("316693"),
        a = n("49111");
    let o = "publicSuccessModalSeen",
        l = "667560445975986187",
        u = "669627189624307712",
        d = "1",
        c = [a.Permissions.ADMINISTRATOR, a.Permissions.KICK_MEMBERS, a.Permissions.BAN_MEMBERS, a.Permissions.MANAGE_GUILD, a.Permissions.MANAGE_CHANNELS, a.Permissions.MANAGE_ROLES, a.Permissions.MANAGE_MESSAGES, a.Permissions.MANAGE_GUILD_EXPRESSIONS, a.Permissions.CREATE_GUILD_EXPRESSIONS, a.Permissions.MANAGE_EVENTS, a.Permissions.CREATE_EVENTS, a.Permissions.MODERATE_MEMBERS, a.Permissions.MENTION_EVERYONE],
        _ = r.combine(...c),
        f = 1e3,
        E = "Enable Community Modal";
    (s = i || (i = {})).SAFETY_CHECK = "safety_check", s.BASICS = "basics", s.FINISH = "finish"
}