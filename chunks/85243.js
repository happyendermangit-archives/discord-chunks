function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CREATE_GUILD_EVENT_CORE_PERMISSIONS: function() {
            return a
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
        s = n("981631");
    let a = s.Permissions.VIEW_CHANNEL,
        o = i.combine(a, s.Permissions.CONNECT),
        l = i.combine(a, r.MODERATE_STAGE_CHANNEL_PERMISSIONS)
}