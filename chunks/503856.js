function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isRTCConnectedInHub: function() {
            return l
        },
        useConnectedInCurrentHub: function() {
            return u
        }
    });
    var i = n("442837"),
        r = n("592125"),
        a = n("430824"),
        s = n("944486"),
        o = n("981631");
    let l = () => {
            let e = s.default.getVoiceChannelId();
            if (null == e) return !1;
            let t = r.default.getChannel(e);
            if (null == t) return !1;
            let n = a.default.getGuild(t.getGuildId());
            return null != n && n.hasFeature(o.GuildFeatures.HUB)
        },
        u = e => (0, i.useStateFromStores)([s.default, r.default, a.default], () => {
            let t = s.default.getVoiceChannelId();
            if (null == t) return !1;
            let n = r.default.getChannel(t);
            if (null == n) return !1;
            let i = a.default.getGuild(n.getGuildId());
            return null != i && i.id === e
        })
}