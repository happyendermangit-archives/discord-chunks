function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        default: function() {
            return s
        }
    }), i("222007");
    var l = i("446674"),
        r = i("913144");
    let a = new Map;
    class n extends l.default.Store {
        getGuildRoleConnectionEligibility(t) {
            return null != t ? a.get(t) : void 0
        }
    }
    n.displayName = "GuildRoleConnectionEligibilityStore";
    var s = new n(r.default, {
        GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS: t => {
            let {
                roleId: e,
                roleConnectionEligibility: i
            } = t;
            a.set(e, i)
        }
    })
}