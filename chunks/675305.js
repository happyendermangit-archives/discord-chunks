function(e, n, t) {
    "use strict";
    t.r(n), t.d(n, {
        default: function() {
            return d
        }
    }), t("222007");
    var l = t("446674"),
        i = t("913144");
    let r = {},
        o = {},
        u = new Set;
    class a extends l.default.Store {
        getCompletedActions(e) {
            return null == e ? null : o[e]
        }
        hasCompletedActionForChannel(e, n) {
            let t = this.getCompletedActions(e);
            return null != t && null != t[n]
        }
        getState(e) {
            return null == e ? {} : {
                completedActions: o[e],
                loading: u.has(e)
            }
        }
    }
    a.displayName = "GuildOnboardingMemberActionStore";
    var d = new a(i.default, {
        GUILD_NEW_MEMBER_ACTIONS_FETCH_START: function(e) {
            let {
                guildId: n
            } = e;
            u.add(n)
        },
        GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS: function(e) {
            let {
                memberActions: n,
                guildId: t
            } = e;
            if (null == n) {
                o[t] = r;
                return
            }
            o[t] = n, u.delete(t)
        },
        GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL: function(e) {
            let {
                guildId: n
            } = e;
            u.delete(n)
        },
        GUILD_NEW_MEMBER_ACTIONS_DELETE_SUCCESS: function(e) {
            let {
                guildId: n
            } = e;
            if (null == o[n]) return !1;
            delete o[n]
        },
        COMPLETE_NEW_MEMBER_ACTION: function(e) {
            let {
                guildId: n,
                channelId: t
            } = e;
            o = {
                ...o,
                [n]: {
                    ...o[n],
                    [t]: !0
                }
            }
        },
        GUILD_DELETE: function(e) {
            let {
                guild: n
            } = e;
            if (null == o[n.id]) return !1;
            delete o[n.id]
        }
    })
}