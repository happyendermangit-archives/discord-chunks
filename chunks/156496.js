function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CREATE_GUILD_EVENT_CORE_PERMISSIONS: function() {
            return a
        },
        CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: function() {
            return s
        },
        CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: function() {
            return u
        }
    });
    var r = n("22287"),
        o = n("353934"),
        i = n("281767"),
        a = i.Permissions.VIEW_CHANNEL,
        u = r.combine(a, i.Permissions.CONNECT),
        s = r.combine(a, o.MODERATE_STAGE_CHANNEL_PERMISSIONS)
}