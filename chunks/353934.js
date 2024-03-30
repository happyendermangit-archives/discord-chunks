function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        JOIN_VOCAL_CHANNEL_PERMISSIONS: function() {
            return s
        },
        LURKER_STAGE_CHANNEL_PERMISSIONS_ALLOWLIST: function() {
            return l
        },
        MODERATE_STAGE_CHANNEL_PERMISSIONS: function() {
            return i
        },
        STAGE_CHANNEL_DISABLED_PERMISSIONS: function() {
            return a
        },
        UPDATE_STAGE_CHANNEL_MODERATOR_PERMISSIONS: function() {
            return u
        }
    });
    var r = n("22287"),
        o = n("281767"),
        i = r.combine(o.Permissions.MANAGE_CHANNELS, o.Permissions.MUTE_MEMBERS, o.Permissions.MOVE_MEMBERS);
    r.combine(o.Permissions.MANAGE_CHANNELS, o.Permissions.MANAGE_ROLES);
    var a = new Set([o.Permissions.SPEAK, o.Permissions.REQUEST_TO_SPEAK, o.Permissions.USE_VAD]),
        u = r.combine(i, o.Permissions.MANAGE_ROLES),
        s = r.combine(o.Permissions.CONNECT, o.Permissions.VIEW_CHANNEL),
        l = r.combine(s, o.Permissions.READ_MESSAGE_HISTORY, o.Permissions.REQUEST_TO_SPEAK, o.Permissions.SPEAK, o.Permissions.USE_VAD)
}