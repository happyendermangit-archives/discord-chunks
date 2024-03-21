function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CREATE_GUILD_EVENT_CORE_PERMISSIONS: function() {
            return l
        },
        CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: function() {
            return a
        },
        CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: function() {
            return o
        }
    });
    var i = n("316693"),
        r = n("923510"),
        s = n("49111");
    let l = s.Permissions.VIEW_CHANNEL,
        a = i.combine(l, s.Permissions.CONNECT),
        o = i.combine(l, r.MODERATE_STAGE_CHANNEL_PERMISSIONS)
}