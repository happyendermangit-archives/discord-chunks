function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        convertChannelOverridesToMap: function() {
            return K
        },
        getGuildDefaults: function() {
            return W
        }
    }), n("47120"), n("789020");
    var i, r = n("392711"),
        s = n.n(r),
        a = n("442837"),
        o = n("570140"),
        l = n("798140"),
        u = n("160404"),
        d = n("312400"),
        _ = n("569471"),
        c = n("131704"),
        E = n("630388"),
        I = n("709054"),
        T = n("592125"),
        f = n("430824"),
        S = n("594174"),
        h = n("981631"),
        A = n("468788"),
        m = n("490897"),
        N = n("526761");

    function p(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let O = {},
        R = {},
        C = !1,
        g = !1,
        L = {
            flags: 0
        },
        D = new l.default,
        v = new l.default,
        M = {
            suppress_everyone: !1,
            suppress_roles: !1,
            mute_scheduled_events: !1,
            mobile_push: !0,
            muted: !1,
            message_notifications: h.UserNotificationSettings.ALL_MESSAGES,
            flags: 0,
            channel_overrides: {},
            notify_highlights: h.HighlightSettings.NULL,
            hide_muted_channels: !1,
            version: -1,
            mute_config: null
        },
        y = {
            [h.UserNotificationSettings.ALL_MESSAGES]: {
                ...M,
                message_notifications: h.UserNotificationSettings.ALL_MESSAGES
            },
            [h.UserNotificationSettings.ONLY_MENTIONS]: {
                ...M,
                message_notifications: h.UserNotificationSettings.ONLY_MENTIONS
            }
        },
        P = {},
        U = {},
        b = new Set,
        G = new Set,
        w = {},
        B = {};

    function k(e, t) {
        var n;
        let i = O[e],
            r = null !== (n = null == i ? void 0 : i.channel_overrides) && void 0 !== n ? n : {},
            a = K(t.channel_overrides),
            o = {
                ...W(e),
                ...i,
                ...t,
                channel_overrides: a
            };
        D.clearTimer(e), s().forEach(r, e => {
            v.clearTimer(e.channel_id)
        }), V(e, o), O[e] = o, P[e] = Q(O[e]);
        let l = s().filter(o.channel_overrides, e => {
            var t;
            return E.hasFlag(null !== (t = e.flags) && void 0 !== t ? t : 0, N.ChannelNotificationSettingsFlags.OPT_IN_ENABLED)
        });
        U[e] = new Set(l.map(e => e.channel_id)),
            function(e) {
                var t;
                if (null == e) return;
                let n = new Set(U[e]),
                    i = null !== (t = w[e]) && void 0 !== t ? t : {};
                for (let e in i) {
                    let t = i[e];
                    E.hasFlag(t.flags, N.ChannelNotificationSettingsFlags.OPT_IN_ENABLED) ? n.add(e) : n.delete(e)
                }
                Object.keys(i).length > 0 ? B[e] = n : delete B[e]
            }(e), delete R[e]
    }

    function V(e, t) {
        !0 === t.muted && D.setTimer(e, t.mute_config, () => {
            F(e, {
                muted: !1
            }), o.default.dispatch({
                type: "GUILD_MUTE_EXPIRED",
                guildId: e
            })
        }) && (t.muted = !1), s().forEach(t.channel_overrides, t => {
            !0 === t.muted && v.setTimer(t.channel_id, t.mute_config, () => {
                x(e, t.channel_id, {
                    muted: !1
                }), o.default.dispatch({
                    type: "CHANNEL_MUTE_EXPIRED",
                    guildId: e,
                    channelId: t.channel_id
                })
            }) && (t.muted = !1)
        })
    }

    function F(e, t) {
        var n;
        let i = O[e];
        k(e, {
            channel_overrides: null !== (n = null == i ? void 0 : i.channel_overrides) && void 0 !== n ? n : {},
            ...t
        })
    }

    function x(e, t, n) {
        let i = j(e, t, n);
        Y(e, {
            [t]: i
        })
    }

    function H(e, t) {
        var n;
        let i = {},
            r = null !== (n = null != e ? w[e] : null) && void 0 !== n ? n : {};
        I.default.keys(t).forEach(n => {
            var s;
            let a = j(e, n, t[n]);
            i[n] = a, r[n] = {
                flags: null !== (s = a.flags) && void 0 !== s ? s : 0
            }
        }), null != e && (w[e] = {
            ...w[e],
            ...r
        }), Y(e, i)
    }

    function Y(e, t) {
        var n;
        let i = O[e],
            r = null !== (n = null == i ? void 0 : i.channel_overrides) && void 0 !== n ? n : {};
        k(e, {
            channel_overrides: null == i ? t : {
                ...r,
                ...t
            }
        })
    }

    function j(e, t, n) {
        var i;
        let r = O[e],
            s = null !== (i = null == r ? void 0 : r.channel_overrides) && void 0 !== i ? i : {};
        return {
            channel_id: t,
            muted: !1,
            ...s[t],
            ...n
        }
    }

    function W(e) {
        let t = f.default.getGuild(e);
        return y[null != t ? t.defaultMessageNotifications : h.UserNotificationSettings.ALL_MESSAGES]
    }

    function K() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return e instanceof Array ? s().keyBy(e, "channel_id") : e
    }

    function z(e) {
        var t;
        return null !== (t = O[e]) && void 0 !== t ? t : W(e)
    }

    function X(e) {
        C = E.hasFlag(e.flags, A.AccountNotificationFlags.USE_NEW_NOTIFICATIONS), g = E.hasFlag(e.flags, A.AccountNotificationFlags.MENTION_ON_ALL_MESSAGES), L = e
    }

    function Q(e) {
        return new Set(null != e.channel_overrides ? s()(e.channel_overrides).filter(e => (0, l.computeIsMuted)(e)).map(e => e.channel_id).value() : null)
    }

    function q() {
        return !0
    }

    function Z() {
        return C && d.NotificationsExperiment.getCurrentConfig({
            location: "UserGuildSettingsStore"
        }, {
            autoTrackExposure: !1
        }).enabled
    }
    class J extends(i = a.default.PersistedStore) {
        initialize(e) {
            if (this.waitFor(S.default, f.default, u.default, _.default), null != e) {
                var t, n;
                C = null !== (t = e.useNewNotifications) && void 0 !== t && t, "userGuildSettings" in e && (O = e.userGuildSettings, U = s().mapValues(null !== (n = e.optedInChannelsByGuild) && void 0 !== n ? n : {}, e => new Set(e)), s().forEach(O, (e, t) => {
                    P[t] = Q(e)
                }))
            }
        }
        getState() {
            return {
                useNewNotifications: C
            }
        }
        get mentionOnAllMessages() {
            return g
        }
        isSuppressEveryoneEnabled(e) {
            return z(e).suppress_everyone
        }
        isSuppressRolesEnabled(e) {
            return z(e).suppress_roles
        }
        isMuteScheduledEventsEnabled(e) {
            return z(e).mute_scheduled_events
        }
        isMobilePushEnabled(e) {
            return z(e).mobile_push
        }
        isMuted(e) {
            let t = z(e);
            return (0, l.computeIsMuted)(t)
        }
        isTemporarilyMuted(e) {
            let t = z(e);
            return (0, l.isTemporarilyMuted)(t)
        }
        getMuteConfig(e) {
            return z(e).mute_config
        }
        getMessageNotifications(e) {
            return z(e).message_notifications
        }
        getChannelOverrides(e) {
            var t;
            return null !== (t = z(e).channel_overrides) && void 0 !== t ? t : {}
        }
        getNotifyHighlights(e) {
            return z(e).notify_highlights
        }
        getGuildFlags(e) {
            return z(e).flags
        }
        getChannelMessageNotifications(e, t) {
            let n = this.getChannelOverrides(e)[t];
            return null == n || null == n.message_notifications ? h.UserNotificationSettings.NULL : n.message_notifications
        }
        getChannelMuteConfig(e, t) {
            let n = this.getChannelOverrides(e)[t];
            return null != n ? n.mute_config : null
        }
        getMutedChannels(e) {
            var t;
            return null !== (t = P[e]) && void 0 !== t ? t : b
        }
        isChannelMuted(e, t) {
            var n;
            let i = T.default.getChannel(t);
            return e = null !== (n = null == i ? void 0 : i.getGuildId()) && void 0 !== n ? n : e, this.getMutedChannels(e).has(t)
        }
        isCategoryMuted(e, t) {
            let n = T.default.getChannel(t);
            if (null == n) return !1;
            let i = n.parent_id;
            return null != i && this.getMutedChannels(e).has(i)
        }
        resolvedMessageNotifications(e) {
            let t = this.getChannelMessageNotifications(e.guild_id, e.id);
            if (t !== h.UserNotificationSettings.NULL) return t;
            if (null != e.parent_id) {
                let t = this.getChannelMessageNotifications(e.guild_id, e.parent_id);
                if (t !== h.UserNotificationSettings.NULL) return t
            }
            return this.getMessageNotifications(e.guild_id)
        }
        resolveUnreadSetting(e) {
            if (c.THREAD_CHANNEL_TYPES.has(e.type) || (0, c.isPrivate)(e.type) || !Z()) return m.UnreadSetting.ALL_MESSAGES;
            let t = this.getChannelUnreadSetting(e.guild_id, e.id);
            if (t !== m.UnreadSetting.UNSET) return t;
            if (null != e.parent_id) {
                let t = this.getChannelUnreadSetting(e.guild_id, e.parent_id);
                if (t !== m.UnreadSetting.UNSET) return t
            }
            let n = this.getGuildUnreadSetting(e.guild_id);
            return n !== m.UnreadSetting.UNSET ? n : this.resolvedMessageNotifications(e) === h.UserNotificationSettings.ALL_MESSAGES ? m.UnreadSetting.ALL_MESSAGES : m.UnreadSetting.ONLY_MENTIONS
        }
        isGuildOrCategoryOrChannelMuted(e, t) {
            return this.isMuted(e) || this.isCategoryMuted(e, t) || this.isChannelMuted(e, t)
        }
        allowNoMessages(e) {
            return this.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id) || this.resolvedMessageNotifications(e) === h.UserNotificationSettings.NO_MESSAGES || this.isOptInEnabled(e.guild_id) && !this.isChannelRecordOrParentOptedIn(e)
        }
        allowAllMessages(e) {
            return !this.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id) && this.resolvedMessageNotifications(e) === h.UserNotificationSettings.ALL_MESSAGES && (!this.isOptInEnabled(e.guild_id) || this.isChannelRecordOrParentOptedIn(e))
        }
        isGuildCollapsed(e) {
            var t;
            return (null === (t = O[e]) || void 0 === t ? void 0 : t.hide_muted_channels) === !0
        }
        getAllSettings() {
            return {
                userGuildSettings: O,
                mutedChannels: P,
                optedInChannelsByGuild: U
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
                if (E.hasFlag(t.flags, N.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON)) return !0;
                if (E.hasFlag(t.flags, N.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF)) return !1
            }
            return this.resolvedMessageNotifications(e) === h.UserNotificationSettings.ALL_MESSAGES
        }
        isOptInEnabled(e) {
            return null != e && (u.default.isFullServerPreview(e) ? u.default.isOptInEnabled(e) : E.hasFlag(this.getGuildFlags(e), N.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_ON))
        }
        isChannelRecordOrParentOptedIn(e, t) {
            return null != e && null != e.guild_id && (this.isChannelOptedIn(e.guild_id, e.id, t) || null != e.parent_id && this.isChannelOptedIn(e.guild_id, e.parent_id, t))
        }
        isChannelOrParentOptedIn(e, t, n) {
            return this.isChannelRecordOrParentOptedIn(T.default.getChannel(t), n)
        }
        isChannelOptedIn(e, t) {
            var n, i;
            let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (null == e) return !1;
            if (u.default.isFullServerPreview(e)) return u.default.isChannelOptedIn(e, t);
            if (r && null != B[e]) return B[e].has(t);
            let s = null !== (i = null === (n = this.getChannelOverrides(e)[t]) || void 0 === n ? void 0 : n.flags) && void 0 !== i ? i : 0;
            return E.hasFlag(s, N.ChannelNotificationSettingsFlags.OPT_IN_ENABLED)
        }
        getOptedInChannels(e) {
            var t, n;
            return u.default.isFullServerPreview(e) ? null !== (t = u.default.getViewingChannels(e)) && void 0 !== t ? t : G : null !== (n = U[e]) && void 0 !== n ? n : G
        }
        getOptedInChannelsWithPendingUpdates(e) {
            return B[e]
        }
        getPendingChannelUpdates(e) {
            return w[e]
        }
        getGuildFavorites(e) {
            if (u.default.isFullServerPreview(e)) return null;
            if (null == R[e]) {
                let t = s().filter(this.getChannelOverrides(e), t => {
                    var n, i;
                    return E.hasFlag(null !== (i = t.flags) && void 0 !== i ? i : 0, N.ChannelNotificationSettingsFlags.FAVORITED) && (null === (n = T.default.getChannel(t.channel_id)) || void 0 === n ? void 0 : n.guild_id) === e
                });
                R[e] = t.map(e => e.channel_id)
            }
            return R[e]
        }
        isFavorite(e, t) {
            var n;
            return !u.default.isFullServerPreview(e) && (null === (n = this.getGuildFavorites(e)) || void 0 === n ? void 0 : n.includes(t)) === !0
        }
        isMessagesFavorite(e) {
            var t, n;
            let i = null !== (n = null === (t = this.getChannelOverrides(null)[e]) || void 0 === t ? void 0 : t.flags) && void 0 !== n ? n : 0;
            return E.hasFlag(i, N.ChannelNotificationSettingsFlags.FAVORITED)
        }
        isAddedToMessages(e) {
            var t, n;
            let i = null !== (n = null === (t = this.getChannelOverrides(null)[e]) || void 0 === t ? void 0 : t.flags) && void 0 !== n ? n : 0;
            return E.hasFlag(i, N.ChannelNotificationSettingsFlags.OPT_IN_ENABLED)
        }
        getAddedToMessages() {
            var e;
            return null !== (e = U.null) && void 0 !== e ? e : G
        }
        get accountNotificationSettings() {
            return L
        }
        get useNewNotifications() {
            return C
        }
        getGuildUnreadSetting(e) {
            if (!Z()) return m.UnreadSetting.ALL_MESSAGES;
            let t = this.getGuildFlags(e);
            return E.hasFlag(t, N.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES) ? m.UnreadSetting.ALL_MESSAGES : E.hasFlag(t, N.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS) ? m.UnreadSetting.ONLY_MENTIONS : m.UnreadSetting.UNSET
        }
        resolveGuildUnreadSetting(e) {
            let t = this.getGuildFlags(e.id);
            return !Z() || E.hasFlag(t, N.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES) ? m.UnreadSetting.ALL_MESSAGES : E.hasFlag(t, N.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS) ? m.UnreadSetting.ONLY_MENTIONS : e.defaultMessageNotifications === h.UserNotificationSettings.ALL_MESSAGES ? m.UnreadSetting.ALL_MESSAGES : m.UnreadSetting.ONLY_MENTIONS
        }
        getChannelRecordUnreadSetting(e) {
            return this.getChannelUnreadSetting(e.guild_id, e.id)
        }
        getChannelUnreadSetting(e, t) {
            let n = this.getChannelIdFlags(e, t);
            return E.hasFlag(n, N.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES) ? m.UnreadSetting.ALL_MESSAGES : E.hasFlag(n, N.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS) ? m.UnreadSetting.ONLY_MENTIONS : m.UnreadSetting.UNSET
        }
    }
    p(J, "displayName", "UserGuildSettingsStore"), p(J, "persistKey", "collapsedGuilds");
    let $ = new J(o.default, {
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
            F(t, n)
        },
        USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: function(e) {
            let {
                guildId: t,
                settings: n
            } = e;
            F(t, n), H(t, n.channel_overrides)
        },
        USER_GUILD_SETTINGS_CHANNEL_UPDATE: function(e) {
            let {
                guildId: t,
                channelId: n,
                settings: i
            } = e;
            null != t && null != i.flags && (w[t] = {
                ...w[t],
                [n]: {
                    flags: i.flags
                }
            }), x(t, n, i)
        },
        USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: function(e) {
            let {
                guildId: t,
                overrides: n
            } = e;
            return !(null == t || u.default.isFullServerPreview(t)) && (H(t, n), !0)
        },
        CONNECTION_OPEN: function(e) {
            X(e.notificationSettings), D.reset(), v.reset(), !e.userGuildSettings.partial && (O = {}, P = {}, U = {});
            let t = new Set;
            for (let n in e.userGuildSettings.entries.forEach(e => {
                    !("channel_overrides" in e) && (e.channel_overrides = {}), k(e.guild_id, e), null != e.guild_id && t.add(e.guild_id)
                }), O) !t.has(n) && V(n, O[n])
        },
        CACHE_LOADED: function(e) {
            null != e.userGuildSettings && 0 !== e.userGuildSettings.length && (O = {}, P = {}, U = {}, e.userGuildSettings.forEach(e => {
                let t = e.guild_id;
                O[t] = e;
                let n = new Set,
                    i = new Set;
                for (let t in e.channel_overrides) {
                    var r;
                    let s = e.channel_overrides[t];
                    (0, l.computeIsMuted)(s) && n.add(t), E.hasFlag(null !== (r = s.flags) && void 0 !== r ? r : 0, N.ChannelNotificationSettingsFlags.OPT_IN_ENABLED) && i.add(t)
                }
                P[t] = n, U[t] = i
            }))
        },
        OVERLAY_INITIALIZE: function(e) {
            let {
                allUserGuildSettings: t
            } = e, {
                userGuildSettings: n,
                mutedChannels: i,
                optedInChannelsByGuild: r
            } = t;
            O = {
                ...n
            }, P = {}, U = {}, I.default.keys(i).forEach(e => {
                P[e] = new Set(i[e])
            }), I.default.keys(r).forEach(e => {
                U[e] = new Set(r[e])
            })
        },
        GUILD_CREATE: q,
        GUILD_UPDATE: q,
        GUILD_TOGGLE_COLLAPSE_MUTED: function(e) {
            let {
                guildId: t
            } = e, n = null == O[t] ? W(t) : O[t];
            O[t] = {
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
            let i = w[t];
            if (null == i) return !1;
            for (let e in n) s().isEqual(n[e], i[e]) && delete i[e]
        },
        CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: function(e) {
            let {
                guildId: t
            } = e;
            if (null == t) return !1;
            delete w[t], delete B[t]
        },
        NOTIFICATION_SETTINGS_UPDATE: function(e) {
            let {
                settings: t
            } = e;
            X(t)
        },
        GUILD_MUTE_EXPIRED: () => !0,
        CHANNEL_MUTE_EXPIRED: () => !0
    });
    t.default = $
}