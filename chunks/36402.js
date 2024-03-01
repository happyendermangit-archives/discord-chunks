function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var l = n("446674"),
        i = n("913144");
    let a = {},
        s = {};
    class r extends l.default.Store {
        getRoleMemberCount(e) {
            return null != e ? a[e] : null
        }
        shouldFetch(e) {
            if (null == e) return !1;
            let t = s[e];
            return null == t || Date.now() - t > 12e4
        }
    }
    r.displayName = "GuildRoleMemberCountStore";
    var o = new r(i.default, {
        GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: function(e) {
            let {
                guildId: t,
                roleMemberCount: n
            } = e;
            a[t] = n, s[t] = Date.now()
        },
        GUILD_ROLE_MEMBER_COUNT_UPDATE: function(e) {
            let {
                guildId: t,
                roleId: n,
                count: l
            } = e, i = a[t];
            if (null == i) return !1;
            i[n] = l
        },
        GUILD_ROLE_MEMBER_BULK_ADD: function(e) {
            let {
                guildId: t,
                roleId: n,
                added: l
            } = e, i = a[t];
            if (null == i || null == i[n]) return !1;
            let s = Object.keys(l).length;
            i[n] += s
        },
        GUILD_ROLE_MEMBER_ADD: function(e) {
            let {
                guildId: t,
                roleId: n
            } = e, l = a[t];
            if (null == l || null == l[n]) return !1;
            l[n] = l[n] + 1
        },
        GUILD_ROLE_MEMBER_REMOVE: function(e) {
            let {
                guildId: t,
                roleId: n
            } = e, l = a[t];
            if (null == l || null == l[n]) return !1;
            l[n] = Math.max(l[n] - 1, 0)
        },
        GUILD_ROLE_CREATE: function(e) {
            let {
                guildId: t,
                role: n
            } = e;
            null == a[t] && (a[t] = {}), a[t][n.id] = 0
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            delete a[t.id], delete s[t.id]
        }
    })
}