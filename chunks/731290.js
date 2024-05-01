function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r, s, a, o = n("442837"),
        l = n("433517"),
        u = n("570140");
    let d = "GuildNSFWAgreeStore",
        _ = {};
    class c extends(a = o.default.Store) {
        initialize() {
            var e;
            _ = null !== (e = l.Storage.get(d)) && void 0 !== e ? e : _
        }
        didAgree(e) {
            return null != e && (_[e] || !1)
        }
    }
    s = "GuildNSFWAgreeStore", (r = "displayName") in(i = c) ? Object.defineProperty(i, r, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = s, t.default = new c(u.default, {
        GUILD_NSFW_AGREE: function(e) {
            let {
                guildId: t
            } = e;
            _[t] = !0, l.Storage.set(d, _)
        }
    })
}