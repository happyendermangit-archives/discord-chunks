function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    }), n("222007");
    var i = n("446674"),
        s = n("913144");
    let r = {},
        a = {},
        o = new Set;
    class l extends i.default.Store {
        getCompletedActions(e) {
            return null == e ? null : a[e]
        }
        hasCompletedActionForChannel(e, t) {
            let n = this.getCompletedActions(e);
            return null != n && null != n[t]
        }
        getState(e) {
            return null == e ? {} : {
                completedActions: a[e],
                loading: o.has(e)
            }
        }
    }
    l.displayName = "GuildOnboardingMemberActionStore";
    var u = new l(s.default, {
        GUILD_NEW_MEMBER_ACTIONS_FETCH_START: function(e) {
            let {
                guildId: t
            } = e;
            o.add(t)
        },
        GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS: function(e) {
            let {
                memberActions: t,
                guildId: n
            } = e;
            if (null == t) {
                a[n] = r;
                return
            }
            a[n] = t, o.delete(n)
        },
        GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL: function(e) {
            let {
                guildId: t
            } = e;
            o.delete(t)
        },
        GUILD_NEW_MEMBER_ACTIONS_DELETE_SUCCESS: function(e) {
            let {
                guildId: t
            } = e;
            if (null == a[t]) return !1;
            delete a[t]
        },
        COMPLETE_NEW_MEMBER_ACTION: function(e) {
            let {
                guildId: t,
                channelId: n
            } = e;
            a = {
                ...a,
                [t]: {
                    ...a[t],
                    [n]: !0
                }
            }
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            if (null == a[t.id]) return !1;
            delete a[t.id]
        }
    })
}