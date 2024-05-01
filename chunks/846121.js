function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r, a, s, o = n("442837"),
        l = n("570140");
    let u = {},
        d = {},
        _ = new Set;
    class c extends(i = o.default.Store) {
        getCompletedActions(e) {
            return null == e ? null : d[e]
        }
        hasCompletedActionForChannel(e, t) {
            let n = this.getCompletedActions(e);
            return null != n && null != n[t]
        }
        getState(e) {
            return null == e ? {} : {
                completedActions: d[e],
                loading: _.has(e)
            }
        }
    }
    s = "GuildOnboardingMemberActionStore", (a = "displayName") in(r = c) ? Object.defineProperty(r, a, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[a] = s, t.default = new c(l.default, {
        GUILD_NEW_MEMBER_ACTIONS_FETCH_START: function(e) {
            let {
                guildId: t
            } = e;
            _.add(t)
        },
        GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS: function(e) {
            let {
                memberActions: t,
                guildId: n
            } = e;
            if (null == t) {
                d[n] = u;
                return
            }
            d[n] = t, _.delete(n)
        },
        GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL: function(e) {
            let {
                guildId: t
            } = e;
            _.delete(t)
        },
        GUILD_NEW_MEMBER_ACTIONS_DELETE_SUCCESS: function(e) {
            let {
                guildId: t
            } = e;
            if (null == d[t]) return !1;
            delete d[t]
        },
        COMPLETE_NEW_MEMBER_ACTION: function(e) {
            let {
                guildId: t,
                channelId: n
            } = e;
            d = {
                ...d,
                [t]: {
                    ...d[t],
                    [n]: !0
                }
            }
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            if (null == d[t.id]) return !1;
            delete d[t.id]
        }
    })
}