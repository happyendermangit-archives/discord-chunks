function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var s = n("446674"),
        i = n("95410"),
        r = n("913144");
    let a = "GuildNSFWAgreeStore",
        o = {};
    class d extends s.default.Store {
        initialize() {
            var e;
            o = null !== (e = i.default.get(a)) && void 0 !== e ? e : o
        }
        didAgree(e) {
            return null != e && (o[e] || !1)
        }
    }
    d.displayName = "GuildNSFWAgreeStore";
    var u = new d(r.default, {
        GUILD_NSFW_AGREE: function(e) {
            let {
                guildId: t
            } = e;
            o[t] = !0, i.default.set(a, o)
        }
    })
}