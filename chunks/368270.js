function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isRTCConnectedInHub: function() {
            return s
        },
        useConnectedInCurrentHub: function() {
            return l
        }
    });
    var r = n("898511"),
        o = n("935741"),
        i = n("306912"),
        a = n("894288"),
        u = n("281767"),
        s = function() {
            var e = a.default.getVoiceChannelId();
            if (null == e) return !1;
            var t = o.default.getChannel(e);
            if (null == t) return !1;
            var n = i.default.getGuild(t.getGuildId());
            return null != n && n.hasFeature(u.GuildFeatures.HUB)
        },
        l = function(e) {
            return (0, r.useStateFromStores)([a.default, o.default, i.default], function() {
                var t = a.default.getVoiceChannelId();
                if (null == t) return !1;
                var n = o.default.getChannel(t);
                if (null == n) return !1;
                var r = i.default.getGuild(n.getGuildId());
                return null != r && r.id === e
            })
        }
}