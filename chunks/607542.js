function(e, a, t) {
    "use strict";
    t.r(a), t.d(a, {
        default: function() {
            return d
        }
    });
    var s = t("153498");

    function d(e) {
        let a = (0, s.coerceChannelRoute)(e);
        if (null != a) return [a.params.guildId, a.params.channelId];
        let t = (0, s.coerceGuildsRoute)(e);
        if (null != t) {
            var d, n;
            return [null === (d = t.params) || void 0 === d ? void 0 : d.guildId, null === (n = t.params) || void 0 === n ? void 0 : n.channelId]
        }
        return [void 0, void 0]
    }
}