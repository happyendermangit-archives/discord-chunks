function(e, t, a) {
    "use strict";
    a.r(t), a.d(t, {
        default: function() {
            return u
        }
    });
    var n = a("470079"),
        r = a("870331"),
        l = a("243547"),
        s = a("281767");

    function u(e) {
        var t = n.useRef([]);
        n.useEffect(function() {
            if (null != e && e.state !== l.GuildTemplateStates.RESOLVING) !t.current.includes(e.code) && (t.current.push(e.code), r.default.track(s.AnalyticEvents.CREATE_GUILD_VIEWED, {
                guild_template_code: e.code,
                guild_template_name: e.name,
                guild_template_description: e.description,
                guild_template_guild_id: e.sourceGuildId
            }))
        })
    }
}