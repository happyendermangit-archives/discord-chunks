function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MODERATE_STAGE_CHANNEL_PERMISSIONS: function() {
            return r
        },
        STAGE_CHANNEL_DISABLED_PERMISSIONS: function() {
            return a
        },
        UPDATE_STAGE_CHANNEL_MODERATOR_PERMISSIONS: function() {
            return o
        },
        JOIN_VOCAL_CHANNEL_PERMISSIONS: function() {
            return l
        },
        LURKER_STAGE_CHANNEL_PERMISSIONS_ALLOWLIST: function() {
            return u
        }
    }), n("222007");
    var i = n("316693"),
        s = n("49111");
    let r = i.combine(s.Permissions.MANAGE_CHANNELS, s.Permissions.MUTE_MEMBERS, s.Permissions.MOVE_MEMBERS);
    i.combine(s.Permissions.MANAGE_CHANNELS, s.Permissions.MANAGE_ROLES);
    let a = new Set([s.Permissions.SPEAK, s.Permissions.REQUEST_TO_SPEAK, s.Permissions.USE_VAD]),
        o = i.combine(r, s.Permissions.MANAGE_ROLES),
        l = i.combine(s.Permissions.CONNECT, s.Permissions.VIEW_CHANNEL),
        u = i.combine(l, s.Permissions.READ_MESSAGE_HISTORY, s.Permissions.REQUEST_TO_SPEAK, s.Permissions.SPEAK, s.Permissions.USE_VAD)
}