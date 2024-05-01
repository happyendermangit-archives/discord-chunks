function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r, a, s, o = n("442837"),
        l = n("570140");
    let u = new Map;
    class d extends(i = o.default.Store) {
        getGuildRoleConnectionEligibility(e) {
            return null != e ? u.get(e) : void 0
        }
    }
    s = "GuildRoleConnectionEligibilityStore", (a = "displayName") in(r = d) ? Object.defineProperty(r, a, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[a] = s, t.default = new d(l.default, {
        GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS: e => {
            let {
                roleId: t,
                roleConnectionEligibility: n
            } = e;
            u.set(t, n)
        }
    })
}