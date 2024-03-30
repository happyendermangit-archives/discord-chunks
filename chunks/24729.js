function(e, t, n) {
    "use strict";
    var r, o, i, a;
    n.r(t), n.d(t, {
        ReadStateTypes: function() {
            return r
        },
        UnreadSetting: function() {
            return o
        }
    }), (i = r || (r = {}))[i.CHANNEL = 0] = "CHANNEL", i[i.GUILD_EVENT = 1] = "GUILD_EVENT", i[i.NOTIFICATION_CENTER = 2] = "NOTIFICATION_CENTER", i[i.GUILD_HOME = 3] = "GUILD_HOME", i[i.GUILD_ONBOARDING_QUESTION = 4] = "GUILD_ONBOARDING_QUESTION", (a = o || (o = {}))[a.UNSET = 0] = "UNSET", a[a.ALL_MESSAGES = 1] = "ALL_MESSAGES", a[a.ONLY_MENTIONS = 2] = "ONLY_MENTIONS"
}