function(e, a, t) {
    "use strict";
    t.r(a), t.d(a, {
        default: function() {
            return s
        }
    });
    var d = t("153498");

    function s(e) {
        let a = (0, d.coerceChannelRoute)(e);
        if (null != a) return [a.params.guildId, a.params.channelId];
        let t = (0, d.coerceGuildsRoute)(e);
        if (null != t) {
            var s, n;
            return [null === (s = t.params) || void 0 === s ? void 0 : s.guildId, null === (n = t.params) || void 0 === n ? void 0 : n.channelId]
        }
        return [void 0, void 0]
    }
}