function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getCommandContext: function() {
            return a
        },
        useCommandContext: function() {
            return o
        }
    });
    var i = n("884691"),
        l = n("305961");

    function a(e) {
        return {
            channel: e,
            guild: null != e.guild_id ? l.default.getGuild(e.guild_id) : null
        }
    }

    function o(e) {
        return i.useMemo(() => a(e), [e])
    }
}