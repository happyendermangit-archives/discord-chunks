function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        COMMUNITY_UPSELL_MINIMUM_GUILD_SIZE: function() {
            return E
        },
        CREATE_NEW_CHANNEL_VALUE: function() {
            return d
        },
        ENABLE_COMMUNITY_FLOW_MODAL_KEY: function() {
            return I
        },
        EnableCommunityModalSteps: function() {
            return i
        },
        MODERATOR_PERMISSIONS: function() {
            return _
        },
        MODERATOR_PERMISSIONS_FLAG: function() {
            return c
        },
        PUBLIC_GUILD_ANNOUNCEMENTS_GUILD_ID: function() {
            return l
        },
        PUBLIC_GUILD_UPDATES_WEBHOOK_USER_ID: function() {
            return u
        },
        PUBLIC_SUCCESS_MODAL_SEEN_KEY: function() {
            return o
        }
    }), n("47120");
    var i, r, a = n("149765"),
        s = n("981631");
    let o = "publicSuccessModalSeen",
        l = "667560445975986187",
        u = "669627189624307712",
        d = "1",
        _ = [s.Permissions.ADMINISTRATOR, s.Permissions.KICK_MEMBERS, s.Permissions.BAN_MEMBERS, s.Permissions.MANAGE_GUILD, s.Permissions.MANAGE_CHANNELS, s.Permissions.MANAGE_ROLES, s.Permissions.MANAGE_MESSAGES, s.Permissions.MANAGE_GUILD_EXPRESSIONS, s.Permissions.CREATE_GUILD_EXPRESSIONS, s.Permissions.MANAGE_EVENTS, s.Permissions.CREATE_EVENTS, s.Permissions.MODERATE_MEMBERS, s.Permissions.MENTION_EVERYONE],
        c = a.combine(..._),
        E = 1e3,
        I = "Enable Community Modal";
    (r = i || (i = {})).SAFETY_CHECK = "safety_check", r.BASICS = "basics", r.FINISH = "finish"
}