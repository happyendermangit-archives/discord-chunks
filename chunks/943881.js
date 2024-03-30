function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r, s, a, o = n("442837"),
        l = n("570140"),
        u = n("411198");
    let d = {};
    class _ extends(a = o.default.Store) {
        getGuild(e) {
            return d[e]
        }
    }
    s = "AuthInviteStore", (r = "displayName") in(i = _) ? Object.defineProperty(i, r, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = s, t.default = new _(l.default, {
        AUTH_INVITE_UPDATE: function(e) {
            let {
                invite: t
            } = e, n = t.guild;
            if (null == n) return !1;
            d[n.id] = (0, u.fromInviteGuild)(n)
        }
    })
}