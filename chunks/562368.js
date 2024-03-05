function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        default: function() {
            return s
        }
    }), i("222007");
    var l = i("446674"),
        r = i("913144");
    let n = new Map;
    class a extends l.default.Store {
        getGuildRoleConnectionEligibility(t) {
            return null != t ? n.get(t) : void 0
        }
    }
    a.displayName = "GuildRoleConnectionEligibilityStore";
    var s = new a(r.default, {
        GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS: t => {
            let {
                roleId: e,
                roleConnectionEligibility: i
            } = t;
            n.set(e, i)
        }
    })
}