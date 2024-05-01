function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CREATE_GUILD_EVENT_CORE_PERMISSIONS: function() {
            return s
        },
        CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: function() {
            return l
        },
        CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: function() {
            return o
        }
    });
    var i = n("149765"),
        r = n("146085"),
        a = n("981631");
    let s = a.Permissions.VIEW_CHANNEL,
        o = i.combine(s, a.Permissions.CONNECT),
        l = i.combine(s, r.MODERATE_STAGE_CHANNEL_PERMISSIONS)
}