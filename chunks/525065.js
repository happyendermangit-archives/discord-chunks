function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var i = n("446674"),
        s = n("913144");
    let r = {},
        a = {};

    function o(e) {
        let {
            invite: t
        } = e, {
            guild: n,
            approximate_presence_count: i
        } = t;
        if ((null == n ? void 0 : n.id) == null || null == i) return !1;
        a[n.id] = i
    }
    class l extends i.default.Store {
        getMemberCounts() {
            return r
        }
        getMemberCount(e) {
            return null != e ? r[e] : null
        }
        getOnlineCount(e) {
            return null != e ? a[e] : null
        }
    }
    l.displayName = "GuildMemberCountStore";
    var u = new l(s.default, {
        CONNECTION_OPEN: function(e) {
            let {
                guilds: t
            } = e;
            r = {}, t.forEach(e => {
                r[e.id] = e.member_count
            })
        },
        OVERLAY_INITIALIZE: function(e) {
            r = {
                ...e.guildMemberCounts
            }
        },
        GUILD_CREATE: function(e) {
            let {
                guild: t
            } = e;
            r[t.id] = t.member_count
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            if (null == r[t.id] && null == a[t.id]) return !1;
            delete r[t.id], delete a[t.id]
        },
        GUILD_MEMBER_LIST_UPDATE: function(e) {
            let {
                guildId: t,
                memberCount: n,
                onlineCount: i
            } = e, s = !1;
            return r[t] !== n && (r[t] = n, s = !0), a[t] !== i && (a[t] = i, s = !0), s
        },
        INVITE_ACCEPT_SUCCESS: o,
        INVITE_RESOLVE_SUCCESS: o,
        ONLINE_GUILD_MEMBER_COUNT_UPDATE: function(e) {
            let {
                guildId: t,
                count: n
            } = e;
            if (null == t || null == n) return !1;
            a[t] = n
        }
    })
}