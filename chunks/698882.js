function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        NO_SETTINGS: function() {
            return r
        },
        default: function() {
            return _
        }
    }), n("222007");
    var i = n("446674"),
        s = n("913144");
    let r = {
            enabled: !1
        },
        a = [],
        o = {},
        l = new Set,
        u = {};

    function d(e) {
        var t;
        let n = null === (t = o[e]) || void 0 === t ? void 0 : t.newMemberActions;
        return null == n ? null : (u[e] = n, u[e])
    }

    function c(e) {
        let {
            homeSettings: t,
            guildId: n
        } = e;
        null != n && (null == t && (o[n] = r), o[n] = t, d(n), l.delete(n))
    }
    class f extends i.default.Store {
        getSettings(e) {
            var t;
            return null == e ? null : null !== (t = o[e]) && void 0 !== t ? t : r
        }
        getNewMemberActions(e) {
            var t;
            return null == e || (null === (t = this.getSettings(e)) || void 0 === t ? void 0 : t.newMemberActions) == null ? null : null == u[e] ? d(e) : u[e]
        }
        getActionForChannel(e, t) {
            var n;
            let i = this.getSettings(e);
            return null == i ? null : (null !== (n = i.newMemberActions) && void 0 !== n ? n : []).find(e => e.channelId === t)
        }
        hasMemberAction(e, t) {
            return null != this.getActionForChannel(e, t)
        }
        getResourceChannels(e) {
            var t, n;
            return null !== (n = null === (t = o[e]) || void 0 === t ? void 0 : t.resourceChannels) && void 0 !== n ? n : a
        }
        getResourceForChannel(e, t) {
            if (null == e) return null;
            let n = this.getResourceChannels(e);
            return n === a ? null : n.find(e => e.channelId === t)
        }
        getIsLoading(e) {
            return null != e && l.has(e)
        }
        getWelcomeMessage(e) {
            var t;
            if (null != e) return null === (t = o[e]) || void 0 === t ? void 0 : t.welcomeMessage
        }
        hasSettings(e) {
            return null != e && null != o[e]
        }
        getEnabled(e) {
            var t, n;
            return null != e && null !== (n = null === (t = o[e]) || void 0 === t ? void 0 : t.enabled) && void 0 !== n && n
        }
        getNewMemberAction(e, t) {
            var n, i, s;
            return null == e || null == t ? null : null !== (s = null === (i = o[e]) || void 0 === i ? void 0 : null === (n = i.newMemberActions) || void 0 === n ? void 0 : n.find(e => e.channelId === t)) && void 0 !== s ? s : null
        }
    }
    f.displayName = "GuildOnboardingHomeSettingsStore";
    var _ = new f(s.default, {
        GUILD_HOME_SETTINGS_FETCH_START: function(e) {
            let {
                guildId: t
            } = e;
            l.add(t)
        },
        GUILD_HOME_SETTINGS_FETCH_SUCCESS: c,
        GUILD_HOME_SETTINGS_FETCH_FAIL: function(e) {
            let {
                guildId: t
            } = e;
            l.delete(t)
        },
        GUILD_HOME_SETTINGS_UPDATE_SUCCESS: c,
        GUILD_HOME_SETTINGS_TOGGLE_ENABLED: function(e) {
            let {
                guildId: t,
                enabled: n
            } = e, i = o[t];
            if (null == i) return !1;
            i.enabled = n
        },
        GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS: function(e) {
            var t;
            let {
                guildId: n,
                resourceChannel: i
            } = e, s = o[n];
            if (null == s) return !1;
            s.resourceChannels = null !== (t = s.resourceChannels) && void 0 !== t ? t : [];
            let r = s.resourceChannels.findIndex(e => e.channelId === i.channelId);
            return -1 !== r && (s.resourceChannels[r] = {
                ...i
            }, !0)
        },
        GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS: function(e) {
            var t;
            let {
                guildId: n,
                action: i
            } = e, s = o[n];
            if (null == s) return !1;
            s.newMemberActions = null !== (t = s.newMemberActions) && void 0 !== t ? t : [];
            let r = s.newMemberActions.findIndex(e => e.channelId === i.channelId);
            return -1 !== r && (s.newMemberActions[r] = {
                ...i
            }, !0)
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            if (null == o[t.id]) return !1;
            delete o[t.id], delete u[t.id]
        }
    })
}