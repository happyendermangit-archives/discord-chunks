function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        convertChannelOverridesToMap: function() {
            return Z
        },
        getGuildDefaults: function() {
            return J
        }
    });
    var r, o, i = n("392711"),
        a = n.n(i),
        u = n("898511"),
        s = n("629815"),
        l = n("506900"),
        c = n("717744"),
        f = n("229411"),
        d = n("956774"),
        _ = n("569492"),
        E = n("947248"),
        p = n("523018"),
        m = n("935741"),
        y = n("306912"),
        I = n("208454"),
        h = n("281767"),
        O = n("124012"),
        T = n("24729"),
        S = n("382021");

    function v(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function g(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function A(e) {
        return (A = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function b(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                g(e, t, n[t])
            })
        }
        return e
    }

    function N(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function R(e, t) {
        return (R = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var C = {},
        P = {},
        D = !1,
        L = !1,
        M = {
            flags: 0
        },
        U = new l.default,
        w = new l.default,
        k = {
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
        G = (g(r = {}, h.UserNotificationSettings.ALL_MESSAGES, N(b({}, k), {
            message_notifications: h.UserNotificationSettings.ALL_MESSAGES
        })), g(r, h.UserNotificationSettings.ONLY_MENTIONS, N(b({}, k), {
            message_notifications: h.UserNotificationSettings.ONLY_MENTIONS
        })), r),
        B = {},
        j = {},
        F = new Set,
        V = new Set,
        H = {},
        x = {};

    function Y(e, t) {
        var n, r = C[e],
            o = null !== (n = null == r ? void 0 : r.channel_overrides) && void 0 !== n ? n : {},
            i = Z(t.channel_overrides),
            u = N(b({}, J(e), r, t), {
                channel_overrides: i
            });
        U.clearTimer(e), a().forEach(o, function(e) {
            w.clearTimer(e.channel_id)
        }), W(e, u), C[e] = u, B[e] = et(C[e]);
        var s = a().filter(u.channel_overrides, function(e) {
            var t;
            return E.hasFlag(null !== (t = e.flags) && void 0 !== t ? t : 0, S.ChannelNotificationSettingsFlags.OPT_IN_ENABLED)
        });
        j[e] = new Set(s.map(function(e) {
                return e.channel_id
            })),
            function(e) {
                if (null != e) {
                    var t, n = new Set(j[e]),
                        r = null !== (t = H[e]) && void 0 !== t ? t : {};
                    for (var o in r) {
                        var i = r[o];
                        E.hasFlag(i.flags, S.ChannelNotificationSettingsFlags.OPT_IN_ENABLED) ? n.add(o) : n.delete(o)
                    }
                    Object.keys(r).length > 0 ? x[e] = n : delete x[e]
                }
            }(e), delete P[e]
    }

    function W(e, t) {
        !0 === t.muted && U.setTimer(e, t.mute_config, function() {
            K(e, {
                muted: !1
            }), s.default.dispatch({
                type: "GUILD_MUTE_EXPIRED",
                guildId: e
            })
        }) && (t.muted = !1), a().forEach(t.channel_overrides, function(t) {
            !0 === t.muted && w.setTimer(t.channel_id, t.mute_config, function() {
                z(e, t.channel_id, {
                    muted: !1
                }), s.default.dispatch({
                    type: "CHANNEL_MUTE_EXPIRED",
                    guildId: e,
                    channelId: t.channel_id
                })
            }) && (t.muted = !1)
        })
    }

    function K(e, t) {
        var n, r = C[e];
        Y(e, b({
            channel_overrides: null !== (n = null == r ? void 0 : r.channel_overrides) && void 0 !== n ? n : {}
        }, t))
    }

    function z(e, t, n) {
        var r = Q(e, t, n);
        q(e, g({}, t, r))
    }

    function X(e, t) {
        var n, r = {},
            o = null !== (n = null != e ? H[e] : null) && void 0 !== n ? n : {};
        p.default.keys(t).forEach(function(n) {
            var i, a = Q(e, n, t[n]);
            r[n] = a, o[n] = {
                flags: null !== (i = a.flags) && void 0 !== i ? i : 0
            }
        }), null != e && (H[e] = b({}, H[e], o)), q(e, r)
    }

    function q(e, t) {
        var n, r = C[e],
            o = null !== (n = null == r ? void 0 : r.channel_overrides) && void 0 !== n ? n : {};
        Y(e, {
            channel_overrides: null == r ? t : b({}, o, t)
        })
    }

    function Q(e, t, n) {
        var r, o = C[e],
            i = null !== (r = null == o ? void 0 : o.channel_overrides) && void 0 !== r ? r : {};
        return b({}, {
            channel_id: t,
            muted: !1
        }, i[t], n)
    }

    function J(e) {
        var t = y.default.getGuild(e);
        return G[null != t ? t.defaultMessageNotifications : h.UserNotificationSettings.ALL_MESSAGES]
    }

    function Z() {
        var e, t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (e = n, null != (t = Array) && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t) ? a().keyBy(n, "channel_id") : n
    }

    function $(e) {
        var t;
        return null !== (t = C[e]) && void 0 !== t ? t : J(e)
    }

    function ee(e) {
        D = E.hasFlag(e.flags, O.AccountNotificationFlags.USE_NEW_NOTIFICATIONS), L = E.hasFlag(e.flags, O.AccountNotificationFlags.MENTION_ON_ALL_MESSAGES), M = e
    }

    function et(e) {
        return new Set(null != e.channel_overrides ? a()(e.channel_overrides).filter(function(e) {
            return (0, l.computeIsMuted)(e)
        }).map(function(e) {
            return e.channel_id
        }).value() : null)
    }

    function en() {
        return !0
    }

    function er() {
        return D && f.NotificationsExperiment.getCurrentConfig({
            location: "UserGuildSettingsStore"
        }, {
            autoTrackExposure: !1
        }).enabled
    }
    var eo = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && R(e, t)
        }(s, e);
        var t, n, r, o, i, u = (t = s, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = A(t);
            if (n) {
                var a = A(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function s() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, s), u.apply(this, arguments)
        }
        return r = s, o = [{
            key: "initialize",
            value: function(e) {
                if (this.waitFor(I.default, y.default, c.default, d.default), null != e) {
                    var t, n;
                    D = null !== (t = e.useNewNotifications) && void 0 !== t && t, "userGuildSettings" in e && (C = e.userGuildSettings, j = a().mapValues(null !== (n = e.optedInChannelsByGuild) && void 0 !== n ? n : {}, function(e) {
                        return new Set(e)
                    }), a().forEach(C, function(e, t) {
                        B[t] = et(e)
                    }))
                }
            }
        }, {
            key: "getState",
            value: function() {
                return {
                    useNewNotifications: D
                }
            }
        }, {
            key: "mentionOnAllMessages",
            get: function() {
                return L
            }
        }, {
            key: "isSuppressEveryoneEnabled",
            value: function(e) {
                return $(e).suppress_everyone
            }
        }, {
            key: "isSuppressRolesEnabled",
            value: function(e) {
                return $(e).suppress_roles
            }
        }, {
            key: "isMuteScheduledEventsEnabled",
            value: function(e) {
                return $(e).mute_scheduled_events
            }
        }, {
            key: "isMobilePushEnabled",
            value: function(e) {
                return $(e).mobile_push
            }
        }, {
            key: "isMuted",
            value: function(e) {
                var t = $(e);
                return (0, l.computeIsMuted)(t)
            }
        }, {
            key: "isTemporarilyMuted",
            value: function(e) {
                var t = $(e);
                return (0, l.isTemporarilyMuted)(t)
            }
        }, {
            key: "getMuteConfig",
            value: function(e) {
                return $(e).mute_config
            }
        }, {
            key: "getMessageNotifications",
            value: function(e) {
                return $(e).message_notifications
            }
        }, {
            key: "getChannelOverrides",
            value: function(e) {
                var t;
                return null !== (t = $(e).channel_overrides) && void 0 !== t ? t : {}
            }
        }, {
            key: "getNotifyHighlights",
            value: function(e) {
                return $(e).notify_highlights
            }
        }, {
            key: "getGuildFlags",
            value: function(e) {
                return $(e).flags
            }
        }, {
            key: "getChannelMessageNotifications",
            value: function(e, t) {
                var n = this.getChannelOverrides(e)[t];
                return null == n || null == n.message_notifications ? h.UserNotificationSettings.NULL : n.message_notifications
            }
        }, {
            key: "getChannelMuteConfig",
            value: function(e, t) {
                var n = this.getChannelOverrides(e)[t];
                return null != n ? n.mute_config : null
            }
        }, {
            key: "getMutedChannels",
            value: function(e) {
                var t;
                return null !== (t = B[e]) && void 0 !== t ? t : F
            }
        }, {
            key: "isChannelMuted",
            value: function(e, t) {
                var n, r = m.default.getChannel(t);
                return e = null !== (n = null == r ? void 0 : r.getGuildId()) && void 0 !== n ? n : e, this.getMutedChannels(e).has(t)
            }
        }, {
            key: "isCategoryMuted",
            value: function(e, t) {
                var n = m.default.getChannel(t);
                if (null == n) return !1;
                var r = n.parent_id;
                return null != r && this.getMutedChannels(e).has(r)
            }
        }, {
            key: "resolvedMessageNotifications",
            value: function(e) {
                var t = this.getChannelMessageNotifications(e.guild_id, e.id);
                if (t !== h.UserNotificationSettings.NULL) return t;
                if (null != e.parent_id) {
                    var n = this.getChannelMessageNotifications(e.guild_id, e.parent_id);
                    if (n !== h.UserNotificationSettings.NULL) return n
                }
                return this.getMessageNotifications(e.guild_id)
            }
        }, {
            key: "resolveUnreadSetting",
            value: function(e) {
                if (_.THREAD_CHANNEL_TYPES.has(e.type) || (0, _.isPrivate)(e.type) || !er()) return T.UnreadSetting.ALL_MESSAGES;
                var t = this.getChannelUnreadSetting(e.guild_id, e.id);
                if (t !== T.UnreadSetting.UNSET) return t;
                if (null != e.parent_id) {
                    var n = this.getChannelUnreadSetting(e.guild_id, e.parent_id);
                    if (n !== T.UnreadSetting.UNSET) return n
                }
                var r = this.getGuildUnreadSetting(e.guild_id);
                return r !== T.UnreadSetting.UNSET ? r : this.resolvedMessageNotifications(e) === h.UserNotificationSettings.ALL_MESSAGES ? T.UnreadSetting.ALL_MESSAGES : T.UnreadSetting.ONLY_MENTIONS
            }
        }, {
            key: "isGuildOrCategoryOrChannelMuted",
            value: function(e, t) {
                return this.isMuted(e) || this.isCategoryMuted(e, t) || this.isChannelMuted(e, t)
            }
        }, {
            key: "allowNoMessages",
            value: function(e) {
                return this.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id) || this.resolvedMessageNotifications(e) === h.UserNotificationSettings.NO_MESSAGES || this.isOptInEnabled(e.guild_id) && !this.isChannelRecordOrParentOptedIn(e)
            }
        }, {
            key: "allowAllMessages",
            value: function(e) {
                return !this.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id) && this.resolvedMessageNotifications(e) === h.UserNotificationSettings.ALL_MESSAGES && (!this.isOptInEnabled(e.guild_id) || this.isChannelRecordOrParentOptedIn(e))
            }
        }, {
            key: "isGuildCollapsed",
            value: function(e) {
                var t;
                return (null === (t = C[e]) || void 0 === t ? void 0 : t.hide_muted_channels) === !0
            }
        }, {
            key: "getAllSettings",
            value: function() {
                return {
                    userGuildSettings: C,
                    mutedChannels: B,
                    optedInChannelsByGuild: j
                }
            }
        }, {
            key: "getChannelIdFlags",
            value: function(e, t) {
                var n, r = this.getChannelOverrides(e)[t];
                return null !== (n = null == r ? void 0 : r.flags) && void 0 !== n ? n : 0
            }
        }, {
            key: "getChannelFlags",
            value: function(e) {
                return this.getChannelIdFlags(e.guild_id, e.id)
            }
        }, {
            key: "getNewForumThreadsCreated",
            value: function(e) {
                var t = this.getChannelOverrides(e.guild_id)[e.id];
                if (null != t && null != t.flags) {
                    if (E.hasFlag(t.flags, S.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON)) return !0;
                    if (E.hasFlag(t.flags, S.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF)) return !1
                }
                return this.resolvedMessageNotifications(e) === h.UserNotificationSettings.ALL_MESSAGES
            }
        }, {
            key: "isOptInEnabled",
            value: function(e) {
                return null != e && (c.default.isFullServerPreview(e) ? c.default.isOptInEnabled(e) : E.hasFlag(this.getGuildFlags(e), S.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_ON))
            }
        }, {
            key: "isChannelRecordOrParentOptedIn",
            value: function(e, t) {
                return null != e && null != e.guild_id && (this.isChannelOptedIn(e.guild_id, e.id, t) || null != e.parent_id && this.isChannelOptedIn(e.guild_id, e.parent_id, t))
            }
        }, {
            key: "isChannelOrParentOptedIn",
            value: function(e, t, n) {
                return this.isChannelRecordOrParentOptedIn(m.default.getChannel(t), n)
            }
        }, {
            key: "isChannelOptedIn",
            value: function(e, t) {
                var n, r, o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (null == e) return !1;
                if (c.default.isFullServerPreview(e)) return c.default.isChannelOptedIn(e, t);
                if (o && null != x[e]) return x[e].has(t);
                var i = null !== (r = null === (n = this.getChannelOverrides(e)[t]) || void 0 === n ? void 0 : n.flags) && void 0 !== r ? r : 0;
                return E.hasFlag(i, S.ChannelNotificationSettingsFlags.OPT_IN_ENABLED)
            }
        }, {
            key: "getOptedInChannels",
            value: function(e) {
                var t, n;
                return c.default.isFullServerPreview(e) ? null !== (t = c.default.getViewingChannels(e)) && void 0 !== t ? t : V : null !== (n = j[e]) && void 0 !== n ? n : V
            }
        }, {
            key: "getOptedInChannelsWithPendingUpdates",
            value: function(e) {
                return x[e]
            }
        }, {
            key: "getPendingChannelUpdates",
            value: function(e) {
                return H[e]
            }
        }, {
            key: "getGuildFavorites",
            value: function(e) {
                if (c.default.isFullServerPreview(e)) return null;
                if (null == P[e]) {
                    var t = a().filter(this.getChannelOverrides(e), function(t) {
                        var n, r;
                        return E.hasFlag(null !== (r = t.flags) && void 0 !== r ? r : 0, S.ChannelNotificationSettingsFlags.FAVORITED) && (null === (n = m.default.getChannel(t.channel_id)) || void 0 === n ? void 0 : n.guild_id) === e
                    });
                    P[e] = t.map(function(e) {
                        return e.channel_id
                    })
                }
                return P[e]
            }
        }, {
            key: "isFavorite",
            value: function(e, t) {
                var n;
                return !c.default.isFullServerPreview(e) && (null === (n = this.getGuildFavorites(e)) || void 0 === n ? void 0 : n.includes(t)) === !0
            }
        }, {
            key: "isMessagesFavorite",
            value: function(e) {
                var t, n, r = null !== (n = null === (t = this.getChannelOverrides(null)[e]) || void 0 === t ? void 0 : t.flags) && void 0 !== n ? n : 0;
                return E.hasFlag(r, S.ChannelNotificationSettingsFlags.FAVORITED)
            }
        }, {
            key: "isAddedToMessages",
            value: function(e) {
                var t, n, r = null !== (n = null === (t = this.getChannelOverrides(null)[e]) || void 0 === t ? void 0 : t.flags) && void 0 !== n ? n : 0;
                return E.hasFlag(r, S.ChannelNotificationSettingsFlags.OPT_IN_ENABLED)
            }
        }, {
            key: "getAddedToMessages",
            value: function() {
                var e;
                return null !== (e = j.null) && void 0 !== e ? e : V
            }
        }, {
            key: "accountNotificationSettings",
            get: function() {
                return M
            }
        }, {
            key: "useNewNotifications",
            get: function() {
                return D
            }
        }, {
            key: "getGuildUnreadSetting",
            value: function(e) {
                if (!er()) return T.UnreadSetting.ALL_MESSAGES;
                var t = this.getGuildFlags(e);
                return E.hasFlag(t, S.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES) ? T.UnreadSetting.ALL_MESSAGES : E.hasFlag(t, S.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS) ? T.UnreadSetting.ONLY_MENTIONS : T.UnreadSetting.UNSET
            }
        }, {
            key: "resolveGuildUnreadSetting",
            value: function(e) {
                var t = this.getGuildFlags(e.id);
                return !er() || E.hasFlag(t, S.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES) ? T.UnreadSetting.ALL_MESSAGES : E.hasFlag(t, S.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS) ? T.UnreadSetting.ONLY_MENTIONS : e.defaultMessageNotifications === h.UserNotificationSettings.ALL_MESSAGES ? T.UnreadSetting.ALL_MESSAGES : T.UnreadSetting.ONLY_MENTIONS
            }
        }, {
            key: "getChannelRecordUnreadSetting",
            value: function(e) {
                return this.getChannelUnreadSetting(e.guild_id, e.id)
            }
        }, {
            key: "getChannelUnreadSetting",
            value: function(e, t) {
                var n = this.getChannelIdFlags(e, t);
                return E.hasFlag(n, S.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES) ? T.UnreadSetting.ALL_MESSAGES : E.hasFlag(n, S.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS) ? T.UnreadSetting.ONLY_MENTIONS : T.UnreadSetting.UNSET
            }
        }], v(r.prototype, o), i && v(r, i), s
    }(u.default.PersistedStore);
    g(eo, "displayName", "UserGuildSettingsStore"), g(eo, "persistKey", "collapsedGuilds");
    var ei = new eo(s.default, {
        USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
            e.userGuildSettings.forEach(function(e) {
                Y(e.guild_id, b({
                    channel_overrides: {}
                }, e))
            })
        },
        USER_GUILD_SETTINGS_GUILD_UPDATE: function(e) {
            K(e.guildId, e.settings)
        },
        USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: function(e) {
            var t = e.guildId,
                n = e.settings;
            K(t, n), X(t, n.channel_overrides)
        },
        USER_GUILD_SETTINGS_CHANNEL_UPDATE: function(e) {
            var t = e.guildId,
                n = e.channelId,
                r = e.settings;
            null != t && null != r.flags && (H[t] = N(b({}, H[t]), g({}, n, {
                flags: r.flags
            }))), z(t, n, r)
        },
        USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: function(e) {
            var t = e.guildId,
                n = e.overrides;
            return !(null == t || c.default.isFullServerPreview(t)) && (X(t, n), !0)
        },
        CONNECTION_OPEN: function(e) {
            ee(e.notificationSettings), U.reset(), w.reset(), !e.userGuildSettings.partial && (C = {}, B = {}, j = {});
            var t = new Set;
            for (var n in e.userGuildSettings.entries.forEach(function(e) {
                    !("channel_overrides" in e) && (e.channel_overrides = {}), Y(e.guild_id, e), null != e.guild_id && t.add(e.guild_id)
                }), C) !t.has(n) && W(n, C[n])
        },
        CACHE_LOADED: function(e) {
            null != e.userGuildSettings && 0 !== e.userGuildSettings.length && (C = {}, B = {}, j = {}, e.userGuildSettings.forEach(function(e) {
                var t = e.guild_id;
                C[t] = e;
                var n = new Set,
                    r = new Set;
                for (var o in e.channel_overrides) {
                    var i, a = e.channel_overrides[o];
                    (0, l.computeIsMuted)(a) && n.add(o), E.hasFlag(null !== (i = a.flags) && void 0 !== i ? i : 0, S.ChannelNotificationSettingsFlags.OPT_IN_ENABLED) && r.add(o)
                }
                B[t] = n, j[t] = r
            }))
        },
        OVERLAY_INITIALIZE: function(e) {
            var t = e.allUserGuildSettings,
                n = t.userGuildSettings,
                r = t.mutedChannels,
                o = t.optedInChannelsByGuild;
            C = b({}, n), B = {}, j = {}, p.default.keys(r).forEach(function(e) {
                B[e] = new Set(r[e])
            }), p.default.keys(o).forEach(function(e) {
                j[e] = new Set(o[e])
            })
        },
        GUILD_CREATE: en,
        GUILD_UPDATE: en,
        GUILD_TOGGLE_COLLAPSE_MUTED: function(e) {
            var t = e.guildId,
                n = null == C[t] ? J(t) : C[t];
            C[t] = N(b({}, n), {
                guild_id: t,
                hide_muted_channels: !0 !== n.hide_muted_channels
            })
        },
        IMPERSONATE_UPDATE: en,
        IMPERSONATE_STOP: en,
        USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES: function(e) {
            var t = e.guildId,
                n = e.updates;
            if (null == t) return !1;
            var r = H[t];
            if (null == r) return !1;
            for (var o in n) a().isEqual(n[o], r[o]) && delete r[o]
        },
        CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: function(e) {
            var t = e.guildId;
            if (null == t) return !1;
            delete H[t], delete x[t]
        },
        NOTIFICATION_SETTINGS_UPDATE: function(e) {
            ee(e.settings)
        },
        GUILD_MUTE_EXPIRED: function() {
            return !0
        },
        CHANNEL_MUTE_EXPIRED: function() {
            return !0
        }
    });
    t.default = ei
}