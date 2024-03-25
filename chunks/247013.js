function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var i = n("446674"),
        s = n("95410"),
        r = n("913144");
    let a = "GuildNSFWAgreeStore",
        o = {};
    class l extends i.default.Store {
        initialize() {
            var e;
            o = null !== (e = s.Storage.get(a)) && void 0 !== e ? e : o
        }
        didAgree(e) {
            return null != e && (o[e] || !1)
        }
    }
    l.displayName = "GuildNSFWAgreeStore";
    var u = new l(r.default, {
        GUILD_NSFW_AGREE: function(e) {
            let {
                guildId: t
            } = e;
            o[t] = !0, s.Storage.set(a, o)
        }
    })
}