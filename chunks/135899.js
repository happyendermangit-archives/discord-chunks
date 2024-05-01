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
    var i, r, s = n("149765"),
        a = n("981631");
    let o = "publicSuccessModalSeen",
        l = "667560445975986187",
        u = "669627189624307712",
        d = "1",
        _ = [a.Permissions.ADMINISTRATOR, a.Permissions.KICK_MEMBERS, a.Permissions.BAN_MEMBERS, a.Permissions.MANAGE_GUILD, a.Permissions.MANAGE_CHANNELS, a.Permissions.MANAGE_ROLES, a.Permissions.MANAGE_MESSAGES, a.Permissions.MANAGE_GUILD_EXPRESSIONS, a.Permissions.CREATE_GUILD_EXPRESSIONS, a.Permissions.MANAGE_EVENTS, a.Permissions.CREATE_EVENTS, a.Permissions.MODERATE_MEMBERS, a.Permissions.MENTION_EVERYONE],
        c = s.combine(..._),
        E = 1e3,
        I = "Enable Community Modal";
    (r = i || (i = {})).SAFETY_CHECK = "safety_check", r.BASICS = "basics", r.FINISH = "finish"
}