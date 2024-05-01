function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r, a, s, o = n("442837"),
        l = n("570140");
    let u = {},
        d = {};
    class _ extends(s = o.default.Store) {
        getRoleMemberCount(e) {
            return null != e ? u[e] : null
        }
        shouldFetch(e) {
            if (null == e) return !1;
            let t = d[e];
            return null == t || Date.now() - t > 12e4
        }
    }
    a = "GuildRoleMemberCountStore", (r = "displayName") in(i = _) ? Object.defineProperty(i, r, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = a, t.default = new _(l.default, {
        GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: function(e) {
            let {
                guildId: t,
                roleMemberCount: n
            } = e;
            u[t] = n, d[t] = Date.now()
        },
        GUILD_ROLE_MEMBER_COUNT_UPDATE: function(e) {
            let {
                guildId: t,
                roleId: n,
                count: i
            } = e, r = u[t];
            if (null == r) return !1;
            r[n] = i
        },
        GUILD_ROLE_MEMBER_BULK_ADD: function(e) {
            let {
                guildId: t,
                roleId: n,
                added: i
            } = e, r = u[t];
            if (null == r || null == r[n]) return !1;
            let a = Object.keys(i).length;
            r[n] += a
        },
        GUILD_ROLE_MEMBER_ADD: function(e) {
            let {
                guildId: t,
                roleId: n
            } = e, i = u[t];
            if (null == i || null == i[n]) return !1;
            i[n] = i[n] + 1
        },
        GUILD_ROLE_MEMBER_REMOVE: function(e) {
            let {
                guildId: t,
                roleId: n
            } = e, i = u[t];
            if (null == i || null == i[n]) return !1;
            i[n] = Math.max(i[n] - 1, 0)
        },
        GUILD_ROLE_CREATE: function(e) {
            let {
                guildId: t,
                role: n
            } = e;
            null == u[t] && (u[t] = {}), u[t][n.id] = 0
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            delete u[t.id], delete d[t.id]
        }
    })
}