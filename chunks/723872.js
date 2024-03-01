function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isRTCConnectedInHub: function() {
            return u
        },
        useConnectedInCurrentHub: function() {
            return o
        }
    });
    var a = n("446674"),
        r = n("42203"),
        s = n("305961"),
        l = n("18494"),
        i = n("49111");
    let u = () => {
            let e = l.default.getVoiceChannelId();
            if (null == e) return !1;
            let t = r.default.getChannel(e);
            if (null == t) return !1;
            let n = s.default.getGuild(t.getGuildId());
            return null != n && n.hasFeature(i.GuildFeatures.HUB)
        },
        o = e => (0, a.useStateFromStores)([l.default, r.default, s.default], () => {
            let t = l.default.getVoiceChannelId();
            if (null == t) return !1;
            let n = r.default.getChannel(t);
            if (null == n) return !1;
            let a = s.default.getGuild(n.getGuildId());
            return null != a && a.id === e
        })
}