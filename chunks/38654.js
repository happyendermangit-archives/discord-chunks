function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    }), n("222007"), n("702976"), n("808653");
    var i = n("446674"),
        s = n("913144"),
        r = n("305961"),
        a = n("568734"),
        o = n("299039"),
        l = n("507950"),
        u = n("49111"),
        d = n("397336");
    let c = {};
    class f extends i.default.Store {
        hasViewingRoles() {
            return Object.keys(c).length > 0
        }
        isViewingRoles(e) {
            return null != e && null != c[e]
        }
        getViewingRoles(e) {
            var t;
            return null === (t = c[e]) || void 0 === t ? void 0 : t.roles
        }
        getViewingRolesTimestamp(e) {
            var t;
            return null != e ? null === (t = c[e]) || void 0 === t ? void 0 : t.timestamp : null
        }
        getData(e) {
            return c[e]
        }
        isFullServerPreview(e) {
            var t;
            return (null === (t = c[e]) || void 0 === t ? void 0 : t.type) === l.ImpersonateType.NEW_MEMBER
        }
        isOptInEnabled(e) {
            let t = c[e];
            return null != t && t.type === l.ImpersonateType.NEW_MEMBER && t.optInEnabled
        }
        isOnboardingEnabled(e) {
            let t = c[e];
            return null != t && t.type === l.ImpersonateType.NEW_MEMBER && t.onboardingEnabled
        }
        getViewingChannels(e) {
            let t = c[e];
            return null == t || t.type !== l.ImpersonateType.NEW_MEMBER ? null : t.optInChannels
        }
        getOnboardingResponses(e) {
            let t = c[e];
            return null == t || t.type !== l.ImpersonateType.NEW_MEMBER ? null : t.onboardingResponses
        }
        getMemberOptions(e) {
            let t = c[e];
            return null == t || t.type !== l.ImpersonateType.NEW_MEMBER ? null : t.memberOptions
        }
        isChannelOptedIn(e, t) {
            let n = this.getViewingChannels(e);
            return null != n && n.has(t)
        }
        isViewingServerShop(e) {
            var t;
            return null != e && (null === (t = c[e]) || void 0 === t ? void 0 : t.type) === l.ImpersonateType.SERVER_SHOP
        }
        getImpersonateType(e) {
            if (null == e) return null;
            let t = c[e];
            return null == t ? null : t.type
        }
        getBackNavigationSection(e) {
            if (null == e) return u.GuildSettingsSections.ROLES;
            let t = c[e];
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
    var _ = new f(s.default, {
        IMPERSONATE_UPDATE: function(e) {
            let {
                guildId: t,
                data: n
            } = e;
            delete n.roles[o.default.castGuildIdAsEveryoneGuildRoleId(t)], c[t] = {
                ...n,
                timestamp: Date.now()
            }
        },
        IMPERSONATE_STOP: function(e) {
            let {
                guildId: t
            } = e;
            if (null == c[t]) return !1;
            delete c[t]
        },
        GUILD_ROLE_DELETE: function(e) {
            let {
                guildId: t,
                roleId: n
            } = e;
            if (null == c[t]) return !1;
            delete c[t].roles[n]
        },
        USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: function(e) {
            var t;
            let {
                guildId: n,
                overrides: i
            } = e;
            if (null == n || null == c[n]) return !1;
            let s = c[n];
            if (null == s || s.type !== l.ImpersonateType.NEW_MEMBER) return !1;
            let r = null !== (t = s.optInChannels) && void 0 !== t ? t : new Set;
            return o.default.keys(i).forEach(e => {
                var t;
                let n = i[e];
                a.hasFlag(null !== (t = n.flags) && void 0 !== t ? t : 0, d.ChannelNotificationSettingsFlags.OPT_IN_ENABLED) ? r.add(e) : r.delete(e)
            }), s.optInChannels = r, !0
        },
        GUILD_ONBOARDING_SELECT_OPTION: function(e) {
            var t;
            let {
                guildId: n,
                optionId: i,
                selected: s,
                removedOptionIds: r
            } = e;
            if (null == n || null == c[n]) return !1;
            let a = c[n];
            if (null == a || a.type !== l.ImpersonateType.NEW_MEMBER) return !1;
            let o = null !== (t = a.onboardingResponses) && void 0 !== t ? t : new Set;
            return null != r && r.length > 0 && r.forEach(e => o.delete(e)), s ? o.add(i) : o.delete(i), a.onboardingResponses = o, !0
        },
        GUILD_MEMBER_UPDATE_LOCAL: function(e) {
            let {
                guildId: t,
                roles: n,
                flags: i
            } = e;
            if (null == t) return !1;
            let s = c[t];
            return null != s && (null != n && (s.roles = n.reduce((e, n) => {
                let i = r.default.getRole(t, n);
                return null != i && (e[n] = i), e
            }, {})), null != i && s.type === l.ImpersonateType.NEW_MEMBER && (s.memberOptions.flags = i), !0)
        }
    })
}