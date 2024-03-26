function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    }), n("424973");
    var s = n("884691"),
        a = n("599110"),
        l = n("579033"),
        r = n("49111");

    function i(e) {
        let t = s.useRef([]);
        s.useEffect(() => {
            if (null != e && e.state !== l.GuildTemplateStates.RESOLVING) !t.current.includes(e.code) && (t.current.push(e.code), a.default.track(r.AnalyticEvents.CREATE_GUILD_VIEWED, {
                guild_template_code: e.code,
                guild_template_name: e.name,
                guild_template_description: e.description,
                guild_template_guild_id: e.sourceGuildId
            }))
        })
    }
}