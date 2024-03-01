function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MODERATE_STAGE_CHANNEL_PERMISSIONS: function() {
            return s
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
        r = n("49111");
    let s = i.default.combine(r.Permissions.MANAGE_CHANNELS, r.Permissions.MUTE_MEMBERS, r.Permissions.MOVE_MEMBERS);
    i.default.combine(r.Permissions.MANAGE_CHANNELS, r.Permissions.MANAGE_ROLES);
    let a = new Set([r.Permissions.SPEAK, r.Permissions.REQUEST_TO_SPEAK, r.Permissions.USE_VAD]),
        o = i.default.combine(s, r.Permissions.MANAGE_ROLES),
        l = i.default.combine(r.Permissions.CONNECT, r.Permissions.VIEW_CHANNEL),
        u = i.default.combine(l, r.Permissions.READ_MESSAGE_HISTORY, r.Permissions.REQUEST_TO_SPEAK, r.Permissions.SPEAK, r.Permissions.USE_VAD)
}