function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useCommandContext: function() {
            return i
        }
    });
    var r = n("470079"),
        o = n("306912");

    function i(e) {
        return r.useMemo(function() {
            var t;
            return {
                channel: t = e,
                guild: null != t.guild_id ? o.default.getGuild(t.guild_id) : null
            }
        }, [e])
    }
}