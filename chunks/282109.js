function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getGuildDefaults: function() {
            return Y
        },
        convertChannelOverridesToMap: function() {
            return K
        },
        default: function() {
            return J
        }
    }), n("222007"), n("702976");
    var i = n("917351"),
        s = n.n(i),
        r = n("446674"),
        a = n("913144"),
        o = n("668597"),
        l = n("38654"),
        u = n("640497"),
        d = n("755624"),
        c = n("233069"),
        _ = n("568734"),
        f = n("299039"),
        E = n("42203"),
        h = n("305961"),
        g = n("697218"),
        m = n("49111"),
        p = n("76618"),
        S = n("133335"),
        T = n("397336");
    let v = {},
        I = {},
        A = !1,
        C = !1,
        y = {
            flags: 0
        },
        N = new o.default,
        R = new o.default,
        O = {
            suppress_everyone: !1,
            suppress_roles: !1,
            mute_scheduled_events: !1,
            mobile_push: !0,
            muted: !1,
            message_notifications: m.UserNotificationSettings.ALL_MESSAGES,
            flags: 0,
            channel_overrides: {},
            notify_highlights: m.HighlightSettings.NULL,
            hide_muted_channels: !1,
            version: -1,
            mute_config: null
        },
        D = {
            [m.UserNotificationSettings.ALL_MESSAGES]: {
                ...O,
                message_notifications: m.UserNotificationSettings.ALL_MESSAGES
            },
            [m.UserNotificationSettings.ONLY_MENTIONS]: {
                ...O,
                message_notifications: m.UserNotificationSettings.ONLY_MENTIONS
            }
        },
        P = {},
        L = {},
        M = new Set,
        b = new Set,
        U = {},
        w = {};

    function k(e, t) {
        var n;
        let i = v[e],
            r = null !== (n = null == i ? void 0 : i.channel_overrides) && void 0 !== n ? n : {},
            a = K(t.channel_overrides),
            o = {
                ...Y(e),
                ...i,
                ...t,
                channel_overrides: a
            };
        N.clearTimer(e), s.forEach(r, e => {
            R.clearTimer(e.channel_id)
        }), V(e, o), v[e] = o, P[e] = z(v[e]);
        let l = s.filter(o.channel_overrides, e => {
            var t;
            return _.hasFlag(null !== (t = e.flags) && void 0 !== t ? t : 0, T.ChannelNotificationSettingsFlags.OPT_IN_ENABLED)
        });
        L[e] = new Set(l.map(e => e.channel_id)),
            function(e) {
                var t;
                if (null == e) return;
                let n = new Set(L[e]),
                    i = null !== (t = U[e]) && void 0 !== t ? t : {};
                for (let e in i) {
                    let t = i[e];
                    _.hasFlag(t.flags, T.ChannelNotificationSettingsFlags.OPT_IN_ENABLED) ? n.add(e) : n.delete(e)
                }
                Object.keys(i).length > 0 ? w[e] = n : delete w[e]
            }(e), delete I[e]
    }

    function V(e, t) {
        if (!0 === t.muted) {
            let n = N.setTimer(e, t.mute_config, () => {
                G(e, {
                    muted: !1
                }), a.default.dispatch({
                    type: "GUILD_MUTE_EXPIRED",
                    guildId: e
                })
            });
            n && (t.muted = !1)
        }
        s.forEach(t.channel_overrides, t => {
            if (!0 === t.muted) {
                let n = R.setTimer(t.channel_id, t.mute_config, () => {
                    F(e, t.channel_id, {
                        muted: !1
                    }), a.default.dispatch({
                        type: "CHANNEL_MUTE_EXPIRED",
                        guildId: e,
                        channelId: t.channel_id
                    })
                });
                n && (t.muted = !1)
            }
        })
    }

    function G(e, t) {
        var n;
        let i = v[e];
        k(e, {
            channel_overrides: null !== (n = null == i ? void 0 : i.channel_overrides) && void 0 !== n ? n : {},
            ...t
        })
    }

    function F(e, t, n) {
        let i = H(e, t, n);
        B(e, {
            [t]: i
        })
    }

    function x(e, t) {
        var n;
        let i = {},
            s = null !== (n = null != e ? U[e] : null) && void 0 !== n ? n : {};
        f.default.keys(t).forEach(n => {
            var r;
            let a = H(e, n, t[n]);
            i[n] = a, s[n] = {
                flags: null !== (r = a.flags) && void 0 !== r ? r : 0
            }
        }), null != e && (U[e] = {
            ...U[e],
            ...s
        }), B(e, i)
    }

    function B(e, t) {
        var n;
        let i = v[e],
            s = null !== (n = null == i ? void 0 : i.channel_overrides) && void 0 !== n ? n : {};
        k(e, {
            channel_overrides: null == i ? t : {
                ...s,
                ...t
            }
        })
    }

    function H(e, t, n) {
        var i;
        let s = v[e],
            r = null !== (i = null == s ? void 0 : s.channel_overrides) && void 0 !== i ? i : {};
        return {
            channel_id: t,
            muted: !1,
            ...r[t],
            ...n
        }
    }

    function Y(e) {
        let t = h.default.getGuild(e),
            n = null != t ? t.defaultMessageNotifications : m.UserNotificationSettings.ALL_MESSAGES;
        return D[n]
    }

    function K() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return e instanceof Array ? s.keyBy(e, "channel_id") : e
    }

    function j(e) {
        var t;
        return null !== (t = v[e]) && void 0 !== t ? t : Y(e)
    }

    function W(e) {
        A = _.hasFlag(e.flags, p.AccountNotificationFlags.USE_NEW_NOTIFICATIONS), C = _.hasFlag(e.flags, p.AccountNotificationFlags.MENTION_ON_ALL_MESSAGES), y = e
    }

    function z(e) {
        return new Set(null != e.channel_overrides ? s(e.channel_overrides).filter(e => (0, o.computeIsMuted)(e)).map(e => e.channel_id).value() : null)
    }

    function q() {
        return !0
    }

    function X() {
        return A && u.NotificationsExperiment.getCurrentConfig({
            location: "UserGuildSettingsStore"
        }, {
            autoTrackExposure: !1
        }).enabled
    }
    class Q extends r.default.PersistedStore {
        initialize(e) {
            if (this.waitFor(g.default, h.default, l.default, d.default), null != e) {
                var t, n;
                A = null !== (t = e.useNewNotifications) && void 0 !== t && t, "userGuildSettings" in e && (v = e.userGuildSettings, L = s.mapValues(null !== (n = e.optedInChannelsByGuild) && void 0 !== n ? n : {}, e => new Set(e)), s.forEach(v, (e, t) => {
                    P[t] = z(e)
                }))
            }
        }
        getState() {
            return {
                useNewNotifications: A
            }
        }
        get mentionOnAllMessages() {
            return C
        }
        isSuppressEveryoneEnabled(e) {
            return j(e).suppress_everyone
        }
        isSuppressRolesEnabled(e) {
            return j(e).suppress_roles
        }
        isMuteScheduledEventsEnabled(e) {
            return j(e).mute_scheduled_events
        }
        isMobilePushEnabled(e) {
            return j(e).mobile_push
        }
        isMuted(e) {
            let t = j(e);
            return (0, o.computeIsMuted)(t)
        }
        isTemporarilyMuted(e) {
            let t = j(e);
            return (0, o.isTemporarilyMuted)(t)
        }
        getMuteConfig(e) {
            let t = j(e);
            return t.mute_config
        }
        getMessageNotifications(e) {
            return j(e).message_notifications
        }
        getChannelOverrides(e) {
            var t;
            return null !== (t = j(e).channel_overrides) && void 0 !== t ? t : {}
        }
        getNotifyHighlights(e) {
            return j(e).notify_highlights
        }
        getGuildFlags(e) {
            return j(e).flags
        }
        getChannelMessageNotifications(e, t) {
            let n = this.getChannelOverrides(e)[t];
            return null == n || null == n.message_notifications ? m.UserNotificationSettings.NULL : n.message_notifications
        }
        getChannelMuteConfig(e, t) {
            let n = this.getChannelOverrides(e)[t];
            return null != n ? n.mute_config : null
        }
        getMutedChannels(e) {
            var t;
            return null !== (t = P[e]) && void 0 !== t ? t : M
        }
        isChannelMuted(e, t) {
            var n;
            let i = E.default.getChannel(t);
            return e = null !== (n = null == i ? void 0 : i.getGuildId()) && void 0 !== n ? n : e, this.getMutedChannels(e).has(t)
        }
        isCategoryMuted(e, t) {
            let n = E.default.getChannel(t);
            if (null == n) return !1;
            let i = n.parent_id;
            return null != i && this.getMutedChannels(e).has(i)
        }
        resolvedMessageNotifications(e) {
            let t = this.getChannelMessageNotifications(e.guild_id, e.id);
            if (t !== m.UserNotificationSettings.NULL) return t;
            if (null != e.parent_id) {
                let t = this.getChannelMessageNotifications(e.guild_id, e.parent_id);
                if (t !== m.UserNotificationSettings.NULL) return t
            }
            return this.getMessageNotifications(e.guild_id)
        }
        resolveUnreadSetting(e) {
            if (c.THREAD_CHANNEL_TYPES.has(e.type) || (0, c.isPrivate)(e.type) || !X()) return S.UnreadSetting.ALL_MESSAGES;
            let t = this.getChannelUnreadSetting(e.guild_id, e.id);
            if (t !== S.UnreadSetting.UNSET) return t;
            if (null != e.parent_id) {
                let t = this.getChannelUnreadSetting(e.guild_id, e.parent_id);
                if (t !== S.UnreadSetting.UNSET) return t
            }
            let n = this.getGuildUnreadSetting(e.guild_id);
            return n !== S.UnreadSetting.UNSET ? n : this.resolvedMessageNotifications(e) === m.UserNotificationSettings.ALL_MESSAGES ? S.UnreadSetting.ALL_MESSAGES : S.UnreadSetting.ONLY_MENTIONS
        }
        isGuildOrCategoryOrChannelMuted(e, t) {
            return this.isMuted(e) || this.isCategoryMuted(e, t) || this.isChannelMuted(e, t)
        }
        allowNoMessages(e) {
            return this.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id) || this.resolvedMessageNotifications(e) === m.UserNotificationSettings.NO_MESSAGES || this.isOptInEnabled(e.guild_id) && !this.isChannelRecordOrParentOptedIn(e)
        }
        allowAllMessages(e) {
            return !this.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id) && this.resolvedMessageNotifications(e) === m.UserNotificationSettings.ALL_MESSAGES && (!this.isOptInEnabled(e.guild_id) || this.isChannelRecordOrParentOptedIn(e))
        }
        isGuildCollapsed(e) {
            var t;
            return (null === (t = v[e]) || void 0 === t ? void 0 : t.hide_muted_channels) === !0
        }
        getAllSettings() {
            return {
                userGuildSettings: v,
                mutedChannels: P,
                optedInChannelsByGuild: L
            }
        }
        getChannelIdFlags(e, t) {
            var n;
            let i = this.getChannelOverrides(e)[t];
            return null !== (n = null == i ? void 0 : i.flags) && void 0 !== n ? n : 0
        }
        getChannelFlags(e) {
            return this.getChannelIdFlags(e.guild_id, e.id)
        }
        getNewForumThreadsCreated(e) {
            let t = this.getChannelOverrides(e.guild_id)[e.id];
            if (null != t && null != t.flags) {
                if (_.hasFlag(t.flags, T.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON)) return !0;
                if (_.hasFlag(t.flags, T.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF)) return !1
            }
            return this.resolvedMessageNotifications(e) === m.UserNotificationSettings.ALL_MESSAGES
        }
        isOptInEnabled(e) {
            return null != e && (l.default.isFullServerPreview(e) ? l.default.isOptInEnabled(e) : _.hasFlag(this.getGuildFlags(e), T.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_ON))
        }
        isChannelRecordOrParentOptedIn(e, t) {
            return null != e && null != e.guild_id && (this.isChannelOptedIn(e.guild_id, e.id, t) || null != e.parent_id && this.isChannelOptedIn(e.guild_id, e.parent_id, t))
        }
        isChannelOrParentOptedIn(e, t, n) {
            return this.isChannelRecordOrParentOptedIn(E.default.getChannel(t), n)
        }
        isChannelOptedIn(e, t) {
            var n, i;
            let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (null == e) return !1;
            if (l.default.isFullServerPreview(e)) return l.default.isChannelOptedIn(e, t);
            if (s && null != w[e]) return w[e].has(t);
            let r = null !== (i = null === (n = this.getChannelOverrides(e)[t]) || void 0 === n ? void 0 : n.flags) && void 0 !== i ? i : 0;
            return _.hasFlag(r, T.ChannelNotificationSettingsFlags.OPT_IN_ENABLED)
        }
        getOptedInChannels(e) {
            var t, n;
            return l.default.isFullServerPreview(e) ? null !== (t = l.default.getViewingChannels(e)) && void 0 !== t ? t : b : null !== (n = L[e]) && void 0 !== n ? n : b
        }
        getOptedInChannelsWithPendingUpdates(e) {
            return w[e]
        }
        getPendingChannelUpdates(e) {
            return U[e]
        }
        getGuildFavorites(e) {
            if (l.default.isFullServerPreview(e)) return null;
            if (null == I[e]) {
                let t = s.filter(this.getChannelOverrides(e), t => {
                    var n, i;
                    return _.hasFlag(null !== (i = t.flags) && void 0 !== i ? i : 0, T.ChannelNotificationSettingsFlags.FAVORITED) && (null === (n = E.default.getChannel(t.channel_id)) || void 0 === n ? void 0 : n.guild_id) === e
                });
                I[e] = t.map(e => e.channel_id)
            }
            return I[e]
        }
        isFavorite(e, t) {
            var n;
            return !l.default.isFullServerPreview(e) && (null === (n = this.getGuildFavorites(e)) || void 0 === n ? void 0 : n.includes(t)) === !0
        }
        isMessagesFavorite(e) {
            var t, n;
            let i = null !== (n = null === (t = this.getChannelOverrides(null)[e]) || void 0 === t ? void 0 : t.flags) && void 0 !== n ? n : 0;
            return _.hasFlag(i, T.ChannelNotificationSettingsFlags.FAVORITED)
        }
        isAddedToMessages(e) {
            var t, n;
            let i = null !== (n = null === (t = this.getChannelOverrides(null)[e]) || void 0 === t ? void 0 : t.flags) && void 0 !== n ? n : 0;
            return _.hasFlag(i, T.ChannelNotificationSettingsFlags.OPT_IN_ENABLED)
        }
        getAddedToMessages() {
            var e;
            return null !== (e = L.null) && void 0 !== e ? e : b
        }
        get accountNotificationSettings() {
            return y
        }
        get useNewNotifications() {
            return A
        }
        getGuildUnreadSetting(e) {
            if (!X()) return S.UnreadSetting.ALL_MESSAGES;
            let t = this.getGuildFlags(e);
            return _.hasFlag(t, T.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES) ? S.UnreadSetting.ALL_MESSAGES : _.hasFlag(t, T.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS) ? S.UnreadSetting.ONLY_MENTIONS : S.UnreadSetting.UNSET
        }
        resolveGuildUnreadSetting(e) {
            let t = this.getGuildFlags(e.id);
            return !X() || _.hasFlag(t, T.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES) ? S.UnreadSetting.ALL_MESSAGES : _.hasFlag(t, T.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS) ? S.UnreadSetting.ONLY_MENTIONS : e.defaultMessageNotifications === m.UserNotificationSettings.ALL_MESSAGES ? S.UnreadSetting.ALL_MESSAGES : S.UnreadSetting.ONLY_MENTIONS
        }
        getChannelRecordUnreadSetting(e) {
            return this.getChannelUnreadSetting(e.guild_id, e.id)
        }
        getChannelUnreadSetting(e, t) {
            let n = this.getChannelIdFlags(e, t);
            return _.hasFlag(n, T.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES) ? S.UnreadSetting.ALL_MESSAGES : _.hasFlag(n, T.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS) ? S.UnreadSetting.ONLY_MENTIONS : S.UnreadSetting.UNSET
        }
    }
    Q.displayName = "UserGuildSettingsStore", Q.persistKey = "collapsedGuilds";
    let Z = new Q(a.default, {
        USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
            let {
                userGuildSettings: t
            } = e;
            t.forEach(e => {
                k(e.guild_id, {
                    channel_overrides: {},
                    ...e
                })
            })
        },
        USER_GUILD_SETTINGS_GUILD_UPDATE: function(e) {
            let {
                guildId: t,
                settings: n
            } = e;
            G(t, n)
        },
        USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: function(e) {
            let {
                guildId: t,
                settings: n
            } = e;
            G(t, n), x(t, n.channel_overrides)
        },
        USER_GUILD_SETTINGS_CHANNEL_UPDATE: function(e) {
            let {
                guildId: t,
                channelId: n,
                settings: i
            } = e;
            null != t && null != i.flags && (U[t] = {
                ...U[t],
                [n]: {
                    flags: i.flags
                }
            }), F(t, n, i)
        },
        USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: function(e) {
            let {
                guildId: t,
                overrides: n
            } = e;
            return !(null == t || l.default.isFullServerPreview(t)) && (x(t, n), !0)
        },
        CONNECTION_OPEN: function(e) {
            W(e.notificationSettings), N.reset(), R.reset(), !e.userGuildSettings.partial && (v = {}, P = {}, L = {});
            let t = new Set;
            for (let n in e.userGuildSettings.entries.forEach(e => {
                    !("channel_overrides" in e) && (e.channel_overrides = {}), k(e.guild_id, e), null != e.guild_id && t.add(e.guild_id)
                }), v) !t.has(n) && V(n, v[n])
        },
        CACHE_LOADED: function(e) {
            null != e.userGuildSettings && 0 !== e.userGuildSettings.length && (v = {}, P = {}, L = {}, e.userGuildSettings.forEach(e => {
                let t = e.guild_id;
                v[t] = e;
                let n = new Set,
                    i = new Set;
                for (let t in e.channel_overrides) {
                    var s;
                    let r = e.channel_overrides[t];
                    (0, o.computeIsMuted)(r) && n.add(t), _.hasFlag(null !== (s = r.flags) && void 0 !== s ? s : 0, T.ChannelNotificationSettingsFlags.OPT_IN_ENABLED) && i.add(t)
                }
                P[t] = n, L[t] = i
            }))
        },
        OVERLAY_INITIALIZE: function(e) {
            let {
                allUserGuildSettings: t
            } = e, {
                userGuildSettings: n,
                mutedChannels: i,
                optedInChannelsByGuild: s
            } = t;
            v = {
                ...n
            }, P = {}, L = {}, f.default.keys(i).forEach(e => {
                P[e] = new Set(i[e])
            }), f.default.keys(s).forEach(e => {
                L[e] = new Set(s[e])
            })
        },
        GUILD_CREATE: q,
        GUILD_UPDATE: q,
        GUILD_TOGGLE_COLLAPSE_MUTED: function(e) {
            let {
                guildId: t
            } = e, n = null == v[t] ? Y(t) : v[t];
            v[t] = {
                ...n,
                guild_id: t,
                hide_muted_channels: !0 !== n.hide_muted_channels
            }
        },
        IMPERSONATE_UPDATE: q,
        IMPERSONATE_STOP: q,
        USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES: function(e) {
            let {
                guildId: t,
                updates: n
            } = e;
            if (null == t) return !1;
            let i = U[t];
            if (null == i) return !1;
            for (let e in n) s.isEqual(n[e], i[e]) && delete i[e]
        },
        CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: function(e) {
            let {
                guildId: t
            } = e;
            if (null == t) return !1;
            delete U[t], delete w[t]
        },
        NOTIFICATION_SETTINGS_UPDATE: function(e) {
            let {
                settings: t
            } = e;
            W(t)
        },
        GUILD_MUTE_EXPIRED: () => !0,
        CHANNEL_MUTE_EXPIRED: () => !0
    });
    var J = Z
}