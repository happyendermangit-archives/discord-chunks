function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        default: function() {
            return u
        }
    }), s("424973");
    var a = s("884691"),
        l = s("599110"),
        n = s("579033"),
        r = s("49111");

    function u(e) {
        let t = a.useRef([]);
        a.useEffect(() => {
            if (null != e && e.state !== n.GuildTemplateStates.RESOLVING) !t.current.includes(e.code) && (t.current.push(e.code), l.default.track(r.AnalyticEvents.CREATE_GUILD_VIEWED, {
                guild_template_code: e.code,
                guild_template_name: e.name,
                guild_template_description: e.description,
                guild_template_guild_id: e.sourceGuildId
            }))
        })
    }
}