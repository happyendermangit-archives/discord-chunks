function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    }), n("222007"), n("702976"), n("808653");
    var i = n("446674"),
        r = n("913144"),
        s = n("305961"),
        a = n("568734"),
        o = n("299039"),
        l = n("507950"),
        u = n("49111"),
        c = n("397336");
    let d = {};
    class f extends i.default.Store {
        hasViewingRoles() {
            return Object.keys(d).length > 0
        }
        isViewingRoles(e) {
            return null != e && null != d[e]
        }
        getViewingRoles(e) {
            var t;
            return null === (t = d[e]) || void 0 === t ? void 0 : t.roles
        }
        getViewingRolesTimestamp(e) {
            var t;
            return null != e ? null === (t = d[e]) || void 0 === t ? void 0 : t.timestamp : null
        }
        getData(e) {
            return d[e]
        }
        isFullServerPreview(e) {
            var t;
            return (null === (t = d[e]) || void 0 === t ? void 0 : t.type) === l.ImpersonateType.NEW_MEMBER
        }
        isOptInEnabled(e) {
            let t = d[e];
            return null != t && t.type === l.ImpersonateType.NEW_MEMBER && t.optInEnabled
        }
        isOnboardingEnabled(e) {
            let t = d[e];
            return null != t && t.type === l.ImpersonateType.NEW_MEMBER && t.onboardingEnabled
        }
        getViewingChannels(e) {
            let t = d[e];
            return null == t || t.type !== l.ImpersonateType.NEW_MEMBER ? null : t.optInChannels
        }
        getOnboardingResponses(e) {
            let t = d[e];
            return null == t || t.type !== l.ImpersonateType.NEW_MEMBER ? null : t.onboardingResponses
        }
        getMemberOptions(e) {
            let t = d[e];
            return null == t || t.type !== l.ImpersonateType.NEW_MEMBER ? null : t.memberOptions
        }
        isChannelOptedIn(e, t) {
            let n = this.getViewingChannels(e);
            return null != n && n.has(t)
        }
        isViewingServerShop(e) {
            var t;
            return null != e && (null === (t = d[e]) || void 0 === t ? void 0 : t.type) === l.ImpersonateType.SERVER_SHOP
        }
        getImpersonateType(e) {
            if (null == e) return null;
            let t = d[e];
            return null == t ? null : t.type
        }
        getBackNavigationSection(e) {
            if (null == e) return u.GuildSettingsSections.ROLES;
            let t = d[e];
            if (null == t) return u.GuildSettingsSections.ROLES;
            switch (t.type) {
                case l.ImpersonateType.ROLES:
                case l.ImpersonateType.SERVER_SHOP:
                    return t.returnToSection;
                case l.ImpersonateType.NEW_MEMBER:
                    return u.GuildSettingsSections.ONBOARDING;
                default:
                    return u.GuildSettingsSections.ROLES
            }
        }
    }
    f.displayName = "ImpersonateStore";
    var E = new f(r.default, {
        IMPERSONATE_UPDATE: function(e) {
            let {
                guildId: t,
                data: n
            } = e;
            delete n.roles[o.default.castGuildIdAsEveryoneGuildRoleId(t)], d[t] = {
                ...n,
                timestamp: Date.now()
            }
        },
        IMPERSONATE_STOP: function(e) {
            let {
                guildId: t
            } = e;
            if (null == d[t]) return !1;
            delete d[t]
        },
        GUILD_ROLE_DELETE: function(e) {
            let {
                guildId: t,
                roleId: n
            } = e;
            if (null == d[t]) return !1;
            delete d[t].roles[n]
        },
        USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: function(e) {
            var t;
            let {
                guildId: n,
                overrides: i
            } = e;
            if (null == n || null == d[n]) return !1;
            let r = d[n];
            if (null == r || r.type !== l.ImpersonateType.NEW_MEMBER) return !1;
            let s = null !== (t = r.optInChannels) && void 0 !== t ? t : new Set;
            return o.default.keys(i).forEach(e => {
                var t;
                let n = i[e];
                a.hasFlag(null !== (t = n.flags) && void 0 !== t ? t : 0, c.ChannelNotificationSettingsFlags.OPT_IN_ENABLED) ? s.add(e) : s.delete(e)
            }), r.optInChannels = s, !0
        },
        GUILD_ONBOARDING_SELECT_OPTION: function(e) {
            var t;
            let {
                guildId: n,
                optionId: i,
                selected: r,
                removedOptionIds: s
            } = e;
            if (null == n || null == d[n]) return !1;
            let a = d[n];
            if (null == a || a.type !== l.ImpersonateType.NEW_MEMBER) return !1;
            let o = null !== (t = a.onboardingResponses) && void 0 !== t ? t : new Set;
            return null != s && s.length > 0 && s.forEach(e => o.delete(e)), r ? o.add(i) : o.delete(i), a.onboardingResponses = o, !0
        },
        GUILD_MEMBER_UPDATE_LOCAL: function(e) {
            let {
                guildId: t,
                roles: n,
                flags: i
            } = e;
            if (null == t) return !1;
            let r = d[t],
                a = s.default.getGuild(t);
            return null != a && null != r && (null != n && (r.roles = n.reduce((e, t) => {
                let n = a.getRole(t);
                return null != n && (e[t] = n), e
            }, {})), null != i && r.type === l.ImpersonateType.NEW_MEMBER && (r.memberOptions.flags = i), !0)
        }
    })
}