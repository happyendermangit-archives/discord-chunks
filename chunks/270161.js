function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CREATE_GUILD_EVENT_CORE_PERMISSIONS: function() {
            return l
        },
        CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: function() {
            return o
        },
        CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: function() {
            return a
        }
    });
    var i = n("316693"),
        s = n("923510"),
        r = n("49111");
    let l = r.Permissions.VIEW_CHANNEL,
        o = i.default.combine(l, r.Permissions.CONNECT),
        a = i.default.combine(l, s.MODERATE_STAGE_CHANNEL_PERMISSIONS)
}