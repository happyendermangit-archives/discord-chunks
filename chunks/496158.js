function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useCommandContext: function() {
            return s
        }
    });
    var i = n("470079"),
        r = n("430824");

    function s(e) {
        return i.useMemo(() => {
            var t;
            return {
                channel: t = e,
                guild: null != t.guild_id ? r.default.getGuild(t.guild_id) : null
            }
        }, [e])
    }
}