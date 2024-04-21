function(e, s, a) {
    "use strict";
    a.r(s), a.d(s, {
        default: function() {
            return r
        }
    }), a("653041");
    var t = a("470079"),
        l = a("626135"),
        n = a("58346"),
        E = a("981631");

    function r(e) {
        let s = t.useRef([]);
        t.useEffect(() => {
            if (null != e && e.state !== n.GuildTemplateStates.RESOLVING) !s.current.includes(e.code) && (s.current.push(e.code), l.default.track(E.AnalyticEvents.CREATE_GUILD_VIEWED, {
                guild_template_code: e.code,
                guild_template_name: e.name,
                guild_template_description: e.description,
                guild_template_guild_id: e.sourceGuildId
            }))
        })
    }
}