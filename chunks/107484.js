function(t, e, i) {
    "use strict";
    i.r(e), i("47120");
    var l, r, a, n, s = i("442837"),
        o = i("570140");
    let d = new Map;
    class c extends(l = s.default.Store) {
        getGuildRoleConnectionEligibility(t) {
            return null != t ? d.get(t) : void 0
        }
    }
    n = "GuildRoleConnectionEligibilityStore", (a = "displayName") in(r = c) ? Object.defineProperty(r, a, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[a] = n, e.default = new c(o.default, {
        GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS: t => {
            let {
                roleId: e,
                roleConnectionEligibility: i
            } = t;
            d.set(e, i)
        }
    })
}