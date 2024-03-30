function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var a = n("164161");

    function r(e) {
        var t, n, r = (0, a.coerceChannelRoute)(e);
        if (null != r) return [r.params.guildId, r.params.channelId];
        var c = (0, a.coerceGuildsRoute)(e);
        return null != c ? [null === (t = c.params) || void 0 === t ? void 0 : t.guildId, null === (n = c.params) || void 0 === n ? void 0 : n.channelId] : [void 0, void 0]
    }
}