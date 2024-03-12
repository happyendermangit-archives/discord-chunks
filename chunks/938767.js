function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useCommandContext: function() {
            return a
        }
    });
    var i = n("884691"),
        l = n("305961");

    function a(e) {
        return i.useMemo(() => {
            var t;
            return {
                channel: t = e,
                guild: null != t.guild_id ? l.default.getGuild(t.guild_id) : null
            }
        }, [e])
    }
}