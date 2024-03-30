function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        bulkOptInChannels: function() {
            return N
        },
        dimissFavoriteSuggestion: function() {
            return D
        },
        setGuildOptIn: function() {
            return R
        },
        setIsFavorite: function() {
            return C
        },
        setOptInChannel: function() {
            return v
        },
        updateOptInChannelsBatched: function() {
            return b
        },
        updateOptInChannelsImmediate: function() {
            return g
        }
    });
    var r = n("392711"),
        o = n("14782"),
        i = n("629815"),
        a = n("942791"),
        u = n("140817"),
        s = n("686785"),
        l = n("717744"),
        c = n("844565"),
        f = n("968574"),
        d = n("935741"),
        _ = n("848957"),
        E = n("870331"),
        p = n("947248"),
        m = n("744542"),
        y = n("281767"),
        I = n("382021");

    function h(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function O(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function T(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                O(e, t, n[t])
            })
        }
        return e
    }

    function S(e, t) {
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

    function v(e, t, n, r) {
        if (null != e) {
            if (l.default.isFullServerPreview(e)) {
                (0, s.updateImpersonatedChannels)(e, n ? [t] : [], n ? [] : [t]);
                return
            }
            var o = _.default.getChannelIdFlags(e, t);
            !n && (o = (0, p.setFlag)(o, I.ChannelNotificationSettingsFlags.FAVORITED, !1));
            var a = (0, m.getCurrentChannelSettings)(e, t),
                f = {
                    flags: (0, p.setFlag)(o, I.ChannelNotificationSettingsFlags.OPT_IN_ENABLED, n)
                },
                h = {
                    channel_overrides: O({}, t, f)
                };
            c.default.saveUserGuildSettingsBulk(O({}, e, h)), i.default.dispatch({
                type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
                guildId: e,
                channelId: t,
                settings: f
            }), (0, m.trackChannelNotificationSettingsUpdate)(e, t, f, a, m.NotificationLabel.optedIn(n), r), P(e), E.default.track(y.AnalyticEvents.CHANNEL_LIST_UPDATED, S(T({}, (0, u.collectGuildAnalyticsMetadata)(e), (0, u.collectChannelAnalyticsMetadata)(d.default.getChannel(t))), {
                action_type: n ? "add" : "remove",
                location: r
            }))
        }
    }

    function g(e, t, n, r) {
        if (null != e) {
            if (l.default.isFullServerPreview(e)) {
                (0, s.updateImpersonatedChannels)(e, n ? [t] : [], n ? [] : [t]), (0, s.updateImpersonatedData)(e, {
                    optInEnabled: !0
                });
                return
            }
            var o = _.default.getChannelIdFlags(e, t);
            !n && (o = (0, p.setFlag)(o, I.ChannelNotificationSettingsFlags.FAVORITED, !1));
            var a = (0, m.getCurrentChannelSettings)(e, t),
                f = {
                    flags: (0, p.setFlag)(o, I.ChannelNotificationSettingsFlags.OPT_IN_ENABLED, n)
                };
            if (!_.default.isOptInEnabled(e)) {
                var h = (0, p.setFlag)(_.default.getGuildFlags(e), I.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_ON, !0);
                c.default.saveUserGuildSettingsBulk(O({}, e, {
                    channel_overrides: O({}, t, f),
                    flags: h
                }))
            }
            i.default.dispatch({
                type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
                guildId: e,
                channelId: t,
                settings: f
            }), (0, m.trackChannelNotificationSettingsUpdate)(e, t, f, a, m.NotificationLabel.optedIn(n), r), P(e), E.default.track(y.AnalyticEvents.CHANNEL_LIST_UPDATED, S(T({}, (0, u.collectGuildAnalyticsMetadata)(e), (0, u.collectChannelAnalyticsMetadata)(d.default.getChannel(t))), {
                action_type: n ? "add" : "remove",
                location: r
            }))
        }
    }

    function A() {
        var e;
        return e = function(e, t) {
            var n;
            return function(e, t) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1], o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2], a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            }(this, function(r) {
                switch (r.label) {
                    case 0:
                        if (null == e || l.default.isFullServerPreview(e)) return [2];
                        return n = {
                            channel_overrides: t
                        }, [4, c.default.saveUserGuildSettingsBulk(O({}, e, n))];
                    case 1:
                        return r.sent(), i.default.dispatch({
                            type: "USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES",
                            guildId: e,
                            updates: t
                        }), [2]
                }
            })
        }, (A = function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    h(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    h(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }).apply(this, arguments)
    }
    var b = (0, r.debounce)(function(e, t) {
        return function(e, t) {
            return A.apply(this, arguments)
        }(e, t)
    }, 1e3);

    function N(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 ? arguments[3] : void 0;
        if (null != e) {
            if (l.default.isFullServerPreview(e)) {
                (0, s.updateImpersonatedChannels)(e, t, []), n && (0, s.updateImpersonatedData)(e, {
                    optInEnabled: !0
                });
                return
            }
            var o = {};
            if (t.forEach(function(t) {
                    var n = _.default.getChannelIdFlags(e, t);
                    o[t] = {
                        flags: (0, p.setFlag)(n, I.ChannelNotificationSettingsFlags.OPT_IN_ENABLED, !0)
                    }
                }), n) {
                var i = (0, p.setFlag)(_.default.getGuildFlags(e), I.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_ON, !0);
                a.default.updateGuildAndChannelNotificationSettings(e, {
                    flags: i,
                    channel_overrides: o
                }, m.NotificationLabels.OptedIn), E.default.track(y.AnalyticEvents.CHANNEL_LIST_UPDATED, S(T({}, (0, u.collectGuildAnalyticsMetadata)(e)), {
                    action_type: "add_many_and_enable_guild",
                    location: r
                }))
            } else a.default.updateChannelOverrideSettingsBulk(e, o, m.NotificationLabels.OptedIn), E.default.track(y.AnalyticEvents.CHANNEL_LIST_UPDATED, S(T({}, (0, u.collectGuildAnalyticsMetadata)(e)), {
                action_type: "add_many",
                location: r
            }))
        }
    }

    function R(e, t, n) {
        if (l.default.isFullServerPreview(e)) {
            (0, s.updateImpersonatedData)(e, {
                optInEnabled: t
            });
            return
        }
        var r = _.default.getGuildFlags(e);
        a.default.updateGuildNotificationSettings(e, {
            flags: (0, p.setFlag)(r, I.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_ON, t)
        }, m.NotificationLabel.optedIn(t)), E.default.track(y.AnalyticEvents.CHANNEL_LIST_UPDATED, S(T({}, (0, u.collectGuildAnalyticsMetadata)(e)), {
            action_type: t ? "guild_enabled" : "guild_disabled",
            location: n
        }))
    }

    function C(e, t, n, r) {
        if (null != e) {
            if (!l.default.isFullServerPreview(e)) {
                var o = _.default.getChannelIdFlags(e, t);
                !(0, p.hasFlag)(o, I.ChannelNotificationSettingsFlags.OPT_IN_ENABLED) && n && (o = (0, p.setFlag)(o, I.ChannelNotificationSettingsFlags.OPT_IN_ENABLED, !0)), a.default.updateChannelOverrideSettings(e, t, {
                    flags: (0, p.setFlag)(o, I.ChannelNotificationSettingsFlags.FAVORITED, n)
                }, m.NotificationLabel.favorited(n)), E.default.track(y.AnalyticEvents.CHANNEL_LIST_UPDATED, S(T({}, (0, u.collectGuildAnalyticsMetadata)(e)), {
                    action_type: n ? "favorited" : "unfavorited",
                    location: r
                }))
            }
        }
    }

    function P(e) {
        (0, f.updateUserGuildSettings)(e, function(e) {
            return (!(0, p.hasFlag)(e.guildOnboardingProgress, o.GuildOnboardingProgress.GUILD_NOTICE_CLEARED) || !!(0, p.hasFlag)(e.guildOnboardingProgress, o.GuildOnboardingProgress.GUILD_NOTICE_SHOWN)) && (e.guildOnboardingProgress = (0, p.addFlag)(e.guildOnboardingProgress, o.GuildOnboardingProgress.GUILD_NOTICE_CLEARED), e.guildOnboardingProgress = (0, p.setFlag)(e.guildOnboardingProgress, o.GuildOnboardingProgress.GUILD_NOTICE_SHOWN, !1), !0)
        }, f.UserSettingsDelay.INFREQUENT_USER_ACTION)
    }

    function D(e, t) {
        i.default.dispatch({
            type: "DISMISS_FAVORITE_SUGGESTION",
            guildId: e,
            channelId: t
        })
    }
}