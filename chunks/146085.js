function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        JOIN_VOCAL_CHANNEL_PERMISSIONS: function() {
            return l
        },
        LURKER_STAGE_CHANNEL_PERMISSIONS_ALLOWLIST: function() {
            return u
        },
        MODERATE_STAGE_CHANNEL_PERMISSIONS: function() {
            return a
        },
        STAGE_CHANNEL_DISABLED_PERMISSIONS: function() {
            return s
        },
        UPDATE_STAGE_CHANNEL_MODERATOR_PERMISSIONS: function() {
            return o
        }
    }), n("47120");
    var i = n("149765"),
        r = n("981631");
    let a = i.combine(r.Permissions.MANAGE_CHANNELS, r.Permissions.MUTE_MEMBERS, r.Permissions.MOVE_MEMBERS);
    i.combine(r.Permissions.MANAGE_CHANNELS, r.Permissions.MANAGE_ROLES);
    let s = new Set([r.Permissions.SPEAK, r.Permissions.REQUEST_TO_SPEAK, r.Permissions.USE_VAD]),
        o = i.combine(a, r.Permissions.MANAGE_ROLES),
        l = i.combine(r.Permissions.CONNECT, r.Permissions.VIEW_CHANNEL),
        u = i.combine(l, r.Permissions.READ_MESSAGE_HISTORY, r.Permissions.REQUEST_TO_SPEAK, r.Permissions.SPEAK, r.Permissions.USE_VAD)
}