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
        s = n("430824"),
        a = n("944486"),
        o = n("981631");
    let l = () => {
            let e = a.default.getVoiceChannelId();
            if (null == e) return !1;
            let t = r.default.getChannel(e);
            if (null == t) return !1;
            let n = s.default.getGuild(t.getGuildId());
            return null != n && n.hasFeature(o.GuildFeatures.HUB)
        },
        u = e => (0, i.useStateFromStores)([a.default, r.default, s.default], () => {
            let t = a.default.getVoiceChannelId();
            if (null == t) return !1;
            let n = r.default.getChannel(t);
            if (null == n) return !1;
            let i = s.default.getGuild(n.getGuildId());
            return null != i && i.id === e
        })
}