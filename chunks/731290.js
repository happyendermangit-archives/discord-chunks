function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r, a, s, o = n("442837"),
        l = n("433517"),
        u = n("570140");
    let d = "GuildNSFWAgreeStore",
        _ = {};
    class c extends(s = o.default.Store) {
        initialize() {
            var e;
            _ = null !== (e = l.Storage.get(d)) && void 0 !== e ? e : _
        }
        didAgree(e) {
            return null != e && (_[e] || !1)
        }
    }
    a = "GuildNSFWAgreeStore", (r = "displayName") in(i = c) ? Object.defineProperty(i, r, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = a, t.default = new c(u.default, {
        GUILD_NSFW_AGREE: function(e) {
            let {
                guildId: t
            } = e;
            _[t] = !0, l.Storage.set(d, _)
        }
    })
}