function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("967888"),
        o = n("751848"),
        i = n("629815"),
        a = n("844565"),
        u = n("848957"),
        s = n("947248"),
        l = n("744542"),
        c = n("523018"),
        f = n("281767"),
        d = n("382021"),
        _ = n("941504");

    function E(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function p(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }
    t.default = {
        open: function(e) {
            i.default.dispatch({
                type: "NOTIFICATION_SETTINGS_MODAL_OPEN",
                guildId: e
            })
        },
        close: function() {
            i.default.dispatch({
                type: "NOTIFICATION_SETTINGS_MODAL_CLOSE"
            })
        },
        updateGuildNotificationSettings: function(e, t, n, r) {
            var o = (0, l.getCurrentGuildSettings)(e);
            a.default.saveUserGuildSettings(e, t), i.default.dispatch({
                type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                guildId: e,
                settings: t
            }), (0, l.trackGuildNotificationSettingsUpdate)(e, t, o, n, r)
        },
        updateGuildAndChannelNotificationSettings: function(e, t, n, r) {
            var o = c.default.keys(t.channel_overrides),
                u = (0, l.getCurrentGuildSettings)(e),
                s = (0, l.getManyCurrentChannelSettings)(e, o);
            a.default.saveUserGuildSettings(e, t), i.default.dispatch({
                type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE",
                guildId: e,
                settings: t
            }), (0, l.trackGuildNotificationSettingsUpdate)(e, t, u, n, r), c.default.keys(t.channel_overrides).forEach(function(o) {
                var i = s.get(o);
                (0, l.trackChannelNotificationSettingsUpdate)(e, o, t.channel_overrides[o], i, n, r)
            })
        },
        updateGuildNotificationSettingsBulk: function(e, t, n) {
            var r = c.default.keys(e),
                o = (0, l.getManyCurrentGuildSettings)(r);
            a.default.saveUserGuildSettingsBulk(e), c.default.entries(e).forEach(function(e) {
                var r, a, u = (a = 2, function(e) {
                        if (Array.isArray(e)) return e
                    }(r = e) || function(e, t) {
                        var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != o) {
                            var i = [],
                                a = !0,
                                u = !1;
                            try {
                                for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                            } catch (e) {
                                u = !0, r = e
                            } finally {
                                try {
                                    !a && null != o.return && o.return()
                                } finally {
                                    if (u) throw r
                                }
                            }
                            return i
                        }
                    }(r, a) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return E(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return E(e, t)
                        }
                    }(r, a) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    s = u[0],
                    c = u[1],
                    f = o.get(s);
                i.default.dispatch({
                    type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                    guildId: s,
                    settings: c
                }), (0, l.trackGuildNotificationSettingsUpdate)(s, c, f, t, n)
            })
        },
        updateChannelOverrideSettings: function(e, t, n, r, u) {
            var s, c, f, d = (0, l.getCurrentChannelSettings)(e, t);
            var E = {
                channel_overrides: (s = {}, c = t, f = n, c in s ? Object.defineProperty(s, c, {
                    value: f,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : s[c] = f, s)
            };
            a.default.saveUserGuildSettings(e, E), i.default.dispatch({
                type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
                guildId: e,
                channelId: t,
                settings: n
            }), o.AccessibilityAnnouncer.announce(_.default.Messages.A11Y_ANNOUNCEMENT_CHANNEL_SETTINGS_UPDATED), (0, l.trackChannelNotificationSettingsUpdate)(e, t, n, d, r, u)
        },
        updateChannelOverrideSettingsBulk: function(e, t, n, r) {
            var o = c.default.keys(t),
                u = (0, l.getManyCurrentChannelSettings)(e, o);
            a.default.saveUserGuildSettings(e, {
                channel_overrides: t
            }), i.default.dispatch({
                type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
                guildId: e,
                overrides: t
            }), c.default.keys(t).forEach(function(o) {
                return (0, l.trackChannelNotificationSettingsUpdate)(e, o, t[o], u.get(o), n, r)
            })
        },
        setForumThreadsCreated: function(e, t) {
            var n = t ? d.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON : d.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF,
                r = t ? d.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF : d.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON,
                o = u.default.getChannelFlags(e);
            this.updateChannelOverrideSettings(e.guild_id, e.id, {
                flags: o & ~r | n
            }, l.NotificationLabel.forumThreadsCreated(t))
        },
        setAccountFlag: function(e, t) {
            var n;
            return (n = function() {
                var n, o;
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
                }(this, function(a) {
                    switch (a.label) {
                        case 0:
                            return n = u.default.accountNotificationSettings.flags, o = (0, s.setFlag)(n, e, t), [4, r.HTTP.patch({
                                url: f.Endpoints.ACCOUNT_NOTIFICATION_SETTINGS,
                                body: {
                                    flags: o
                                }
                            })];
                        case 1:
                            return a.sent(), [4, i.default.dispatch({
                                type: "NOTIFICATION_SETTINGS_UPDATE",
                                settings: {
                                    flags: o
                                }
                            })];
                        case 2:
                            return a.sent(), [2]
                    }
                })
            }, function() {
                var e = this,
                    t = arguments;
                return new Promise(function(r, o) {
                    var i = n.apply(e, t);

                    function a(e) {
                        p(i, r, o, a, u, "next", e)
                    }

                    function u(e) {
                        p(i, r, o, a, u, "throw", e)
                    }
                    a(void 0)
                })
            })()
        }
    }
}