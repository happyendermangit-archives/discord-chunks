function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i = n("188129"),
        a = n("849680"),
        u = n("629815"),
        s = n("660939"),
        l = n("807471"),
        c = n("517727"),
        f = n("603463"),
        d = n("654370"),
        _ = n("215927"),
        E = n("125036"),
        p = n("391083"),
        m = n("870331"),
        y = n("131900"),
        I = n("502752"),
        h = n("287087"),
        O = n("832589"),
        T = n("281767"),
        S = n("336734");

    function v(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function g(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function A(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function b(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    A(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    A(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function N(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function R(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function C(e, t, n) {
        return t && R(e.prototype, t), n && R(e, n), e
    }

    function P(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function D(e) {
        return (D = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function L(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                P(e, t, n[t])
            })
        }
        return e
    }

    function M(e, t) {
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

    function U(e, t) {
        return (U = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function w(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
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
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return v(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return v(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function k(e, t) {
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
    }
    var G = new i.Logger("OverlayUsageStatsManager");
    G.verbose = function() {};
    var B = function() {
            function e() {
                var t;
                N(this, e), P(this, "actions", (P(t = {}, S.OverlayNotificationAction.Viewed, 0), P(t, S.OverlayNotificationAction.Clicked, 0), t))
            }
            return C(e, [{
                key: "increment",
                value: function(e) {
                    ++this.actions[e]
                }
            }, {
                key: "getAnalytics",
                value: function(e, t) {
                    var n = this.actions[S.OverlayNotificationAction.Viewed],
                        r = this.actions[S.OverlayNotificationAction.Clicked];
                    return 0 === n && 0 === r ? null : {
                        event_uuid: t,
                        notification_type: e,
                        viewed_count: n,
                        clicked_count: r
                    }
                }
            }]), e
        }(),
        j = function() {
            function e() {
                var t, n, r;
                N(this, e), P(this, "actionCounters", (P(t = {}, S.OverlayNotificationAction.Viewed, 0), P(t, S.OverlayNotificationAction.Clicked, 0), t)), P(this, "groupCounters", (P(n = {}, S.OverlayNotificationAction.Viewed, e.makeEmptyGroupAnalytics()), P(n, S.OverlayNotificationAction.Clicked, e.makeEmptyGroupAnalytics()), n)), P(this, "counters", (P(r = {}, S.OverlayNotificationType.NewsNudge, new B), P(r, S.OverlayNotificationType.WelcomeNudge, new B), P(r, S.OverlayNotificationType.TextChat, new B), P(r, S.OverlayNotificationType.ActivityUserJoin, new B), P(r, S.OverlayNotificationType.ActivityInvite, new B), P(r, S.OverlayNotificationType.IncomingCall, new B), P(r, S.OverlayNotificationType.GoLiveNudge, new B), P(r, S.OverlayNotificationType.GoLiveNonVoiceNudge, new B), P(r, S.OverlayNotificationType.OverlayCrashed, new B), P(r, S.OverlayNotificationType.StartBroadcastNotification, new B), P(r, S.OverlayNotificationType.ClipsReminderNotification, new B), P(r, S.OverlayNotificationType.ClipsNotification, new B), P(r, S.OverlayNotificationType.KeybindIndicatorsNotification, new B), r))
            }
            return C(e, [{
                key: "increment",
                value: function(e, t) {
                    var n = this.groupCounters[t];
                    if (null == n) {
                        G.error("NotificationCounter: Unknown notification action: ".concat(t));
                        return
                    }
                    var r = (0, S.getOverlayNotificationGroup)(e);
                    if (!(r in n)) {
                        G.error("NotificationCounter: Unknown notification action: ".concat(e));
                        return
                    }++n[r], ++this.actionCounters[t];
                    var o = this.counters[e];
                    if (null == o) {
                        G.error("NotificationCounter: Unknown notification type: ".concat(e));
                        return
                    }
                    o.increment(t)
                }
            }, {
                key: "getAnalytics",
                value: function() {
                    var e = this.groupCounters[S.OverlayNotificationAction.Viewed],
                        t = this.groupCounters[S.OverlayNotificationAction.Clicked];
                    return {
                        notices_viewed: this.actionCounters[S.OverlayNotificationAction.Viewed],
                        notices_clicked: this.actionCounters[S.OverlayNotificationAction.Clicked],
                        notice_nudge_viewed: e[S.OverlayNotificationGroup.Nudge],
                        notice_text_chat_viewed: e[S.OverlayNotificationGroup.TextChat],
                        notice_voice_call_viewed: e[S.OverlayNotificationGroup.VoiceCall],
                        notice_activity_viewed: e[S.OverlayNotificationGroup.Activity],
                        notice_clips_viewed: e[S.OverlayNotificationGroup.Clips],
                        notice_other_viewed: e[S.OverlayNotificationGroup.Other],
                        notice_nudge_clicked: t[S.OverlayNotificationGroup.Nudge],
                        notice_text_chat_clicked: t[S.OverlayNotificationGroup.TextChat],
                        notice_voice_call_clicked: t[S.OverlayNotificationGroup.VoiceCall],
                        notice_activity_clicked: t[S.OverlayNotificationGroup.Activity],
                        notice_clips_clicked: t[S.OverlayNotificationGroup.Clips],
                        notice_other_clicked: t[S.OverlayNotificationGroup.Other]
                    }
                }
            }, {
                key: "getCounterAnalytics",
                value: function(e) {
                    return Object.entries(this.counters).map(function(t) {
                        var n = w(t, 2),
                            r = n[0];
                        return n[1].getAnalytics(r, e)
                    }).filter(function(e) {
                        return null != e
                    })
                }
            }], [{
                key: "makeEmptyGroupAnalytics",
                value: function() {
                    var e;
                    return P(e = {}, S.OverlayNotificationGroup.Nudge, 0), P(e, S.OverlayNotificationGroup.TextChat, 0), P(e, S.OverlayNotificationGroup.VoiceCall, 0), P(e, S.OverlayNotificationGroup.Activity, 0), P(e, S.OverlayNotificationGroup.Clips, 0), P(e, S.OverlayNotificationGroup.Other, 0), e
                }
            }]), e
        }();
    (r = o || (o = {}))[r.Voice = 0] = "Voice", r[r.Text = 1] = "Text";
    var F = function() {
            function e() {
                var t;
                N(this, e), P(this, "types", (P(t = {}, 0, e.makeEmptyAnalytics()), P(t, 1, e.makeEmptyAnalytics()), t))
            }
            return C(e, [{
                key: "getByType",
                value: function(e) {
                    return this.types[e]
                }
            }, {
                key: "getByWidget",
                value: function(e) {
                    switch (e) {
                        case T.OverlayWidgets.VOICE:
                            return this.getByType(0);
                        case T.OverlayWidgets.TEXT:
                            return this.getByType(1);
                        default:
                            return null
                    }
                }
            }, {
                key: "getAnalytics",
                value: function() {
                    var e = this.types[0],
                        t = this.types[1];
                    return {
                        widget_voice_pin_toggle_count: e.pinnedToggledCount,
                        widget_voice_visible_duration: e.visibleDuration.elapsed().asMilliseconds(),
                        widget_voice_pinned: e.pinned,
                        widget_text_pin_toggle_count: t.pinnedToggledCount,
                        widget_text_visible_duration: t.visibleDuration.elapsed().asMilliseconds(),
                        widget_text_pinned: t.pinned
                    }
                }
            }], [{
                key: "makeEmptyAnalytics",
                value: function() {
                    return {
                        initialized: !1,
                        pinnedToggledCount: 0,
                        visibleDuration: new a.StopWatch,
                        pinned: !1
                    }
                }
            }]), e
        }(),
        V = function() {
            function e(t) {
                var n, r = this;
                N(this, e), P(this, "game", void 0), P(this, "counters", void 0), P(this, "lastscreenType", void 0), P(this, "updateScreenInterval", void 0), this.game = t, this.counters = (P(n = {}, s.RunningProcessFullscreenType.UNKNOWN, new a.StopWatch), P(n, s.RunningProcessFullscreenType.WINDOWED, new a.StopWatch), P(n, s.RunningProcessFullscreenType.MAXIMIZED, new a.StopWatch), P(n, s.RunningProcessFullscreenType.BORDERLESS_FULLSCREEN, new a.StopWatch), P(n, s.RunningProcessFullscreenType.FULLSCREEN, new a.StopWatch), P(n, s.RunningProcessFullscreenType.MINIMIZED, new a.StopWatch), n), this.lastscreenType = void 0, this.update(), this.updateScreenInterval = setInterval(function() {
                    return r.update()
                }, 1e4)
            }
            return C(e, [{
                key: "update",
                value: function() {
                    var e = this.game,
                        t = y.default.GetWindowFullscreenTypeByPid(e.pid, e.name, e.fullscreenType);
                    if (t !== this.lastscreenType) {
                        if (!(t in this.counters)) {
                            G.error("ScreenTypeAnalytics: Unknown screen type: ".concat(t), t);
                            return
                        }
                        this.counters[t].start(), null != this.lastscreenType && this.counters[this.lastscreenType].stop(), this.lastscreenType = t
                    }
                }
            }, {
                key: "getAnalytics",
                value: function() {
                    var e, t, n, r = this,
                        o = function(e) {
                            return r.counters[e].elapsed().asMilliseconds()
                        },
                        i = (P(e = {}, s.RunningProcessFullscreenType.UNKNOWN, o(s.RunningProcessFullscreenType.UNKNOWN)), P(e, s.RunningProcessFullscreenType.WINDOWED, o(s.RunningProcessFullscreenType.WINDOWED)), P(e, s.RunningProcessFullscreenType.MAXIMIZED, o(s.RunningProcessFullscreenType.MAXIMIZED)), P(e, s.RunningProcessFullscreenType.BORDERLESS_FULLSCREEN, o(s.RunningProcessFullscreenType.BORDERLESS_FULLSCREEN)), P(e, s.RunningProcessFullscreenType.FULLSCREEN, o(s.RunningProcessFullscreenType.FULLSCREEN)), P(e, s.RunningProcessFullscreenType.MINIMIZED, o(s.RunningProcessFullscreenType.MINIMIZED)), e),
                        a = Object.entries(i).sort(function(e, t) {
                            var n = w(e, 2),
                                r = (n[0], n[1]),
                                o = w(t, 2);
                            return o[0], o[1] - r
                        })[0],
                        u = parseInt(a[0], 10),
                        l = isNaN(u) ? s.RunningProcessFullscreenType.UNKNOWN : u;
                    isNaN(u) && G.error("ScreenTypeAnalytics: Unknown most used screen type: ".concat(a), i);
                    var c = O.GameDisplayModeStorage.getGameDisplayMode(null !== (t = this.game.name) && void 0 !== t ? t : this.game.id);
                    O.GameDisplayModeStorage.setGameDisplayMode(null !== (n = this.game.name) && void 0 !== n ? n : this.game.id, l);
                    var f = {
                        screentype_unknown_duration: i[s.RunningProcessFullscreenType.UNKNOWN],
                        screentype_windowed_duration: i[s.RunningProcessFullscreenType.WINDOWED],
                        screentype_maximized_duration: i[s.RunningProcessFullscreenType.MAXIMIZED],
                        screentype_borderless_fullscreen_duration: i[s.RunningProcessFullscreenType.BORDERLESS_FULLSCREEN],
                        screentype_fullscreen_duration: i[s.RunningProcessFullscreenType.FULLSCREEN],
                        screentype_minimized_duration: i[s.RunningProcessFullscreenType.MINIMIZED]
                    };
                    return M(L({}, f), {
                        screentype_global_supported_duration: f.screentype_windowed_duration + f.screentype_maximized_duration + f.screentype_borderless_fullscreen_duration,
                        screentype_global_unsupported_duration: f.screentype_fullscreen_duration,
                        screentype_initial: s.RunningProcessFullscreenType[this.game.fullscreenType],
                        screentype_most_used: s.RunningProcessFullscreenType[l],
                        screentype_most_used_previous: null == c ? null : s.RunningProcessFullscreenType[c],
                        game_display_mode_is_adjustment_supported: y.default.GameDisplayModeIsGameSupported(this.game.name)
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    clearInterval(this.updateScreenInterval)
                }
            }]), e
        }(),
        H = function() {
            function e(t) {
                N(this, e), P(this, "game", void 0), P(this, "uuid", void 0), P(this, "overlayStatus", void 0), P(this, "notificationAnalytics", void 0), P(this, "widgetAnalytics", void 0), P(this, "screenAnalytics", void 0), P(this, "uiUnlockedCount", void 0), P(this, "uiLockedCount", void 0), P(this, "gameFocusChangedCount", void 0), P(this, "gameConcurrentGameCount", void 0), P(this, "overlayMessageAckCount", void 0), P(this, "overlayMessageCreateCount", void 0), P(this, "gameTimer", void 0), P(this, "gameFocusedTimer", void 0), P(this, "unlockedTimer", void 0), P(this, "rtcConnectionTimer", void 0), P(this, "desktopFocusedTimer", void 0), P(this, "desktopFocusChangedCount", void 0), P(this, "desktopMessageAckCount", void 0), P(this, "desktopMessageCreateCount", void 0), P(this, "soundboardShownTimer", void 0), P(this, "soundboardShownCount", void 0), P(this, "soundboardKeepOpenCount", void 0), P(this, "muteToggledCount", void 0), P(this, "_successfullyShown", void 0), this.game = t, this.uuid = crypto.randomUUID(), this.notificationAnalytics = new j, this.widgetAnalytics = new F, this.uiUnlockedCount = 0, this.uiLockedCount = 0, this.gameFocusChangedCount = 0, this.gameConcurrentGameCount = 0, this.overlayMessageAckCount = 0, this.overlayMessageCreateCount = 0, this.gameTimer = a.StopWatch.startNew(), this.gameFocusedTimer = new a.StopWatch, this.unlockedTimer = new a.StopWatch, this.rtcConnectionTimer = new a.StopWatch, this.desktopFocusedTimer = new a.StopWatch, this.desktopFocusChangedCount = 0, this.desktopMessageAckCount = 0, this.desktopMessageCreateCount = 0, this.soundboardShownTimer = new a.StopWatch, this.soundboardShownCount = 0, this.soundboardKeepOpenCount = 0, this.muteToggledCount = 0, this._successfullyShown = !1, this.screenAnalytics = new V(t), this.overlayStatus = d.default.getGameOverlayStatus(t), e.desktopMainWindowHasFocus && this.desktopFocusedTimer.start(), et.hasConnection() && this.rtcConnectionTimer.start()
            }
            return C(e, [{
                key: "successfullyShown",
                set: function(e) {
                    this._successfullyShown = e
                }
            }, {
                key: "getAnalytics",
                value: function() {
                    var e = this;
                    return b(function() {
                        var t, n, r, o, i, a, u, s, l, _, m, y;
                        return k(this, function(I) {
                            switch (I.label) {
                                case 0:
                                    return r = {
                                        setting_is_enabled: E.default.enabled,
                                        setting_method: null == e.overlayStatus ? null : S.OverlayMethod[e.overlayStatus.overlayMethod],
                                        setting_display_user: p.default.getDisplayUserMode(),
                                        setting_display_name: p.default.getDisplayNameMode(),
                                        setting_avatar_size: p.default.getAvatarSizeMode(),
                                        setting_notification_position: p.default.getNotificationPositionMode(),
                                        setting_chat_notification: p.default.getTextChatNotificationMode()
                                    }, o = (0, d.getOverlayGameStatus)(e.game), i = (0, f.getRunningGameAnalytics)(e.game), m = [L({
                                        event_uuid: e.uuid,
                                        overlay_usage_stats_version: 3
                                    }, e.notificationAnalytics.getAnalytics(), e.widgetAnalytics.getAnalytics(), e.screenAnalytics.getAnalytics(), r)], y = {
                                        overlay_status_game_enabled: o.enabled,
                                        overlay_status_game_source: o.source,
                                        game_name: null !== (a = i.gameName) && void 0 !== a ? a : null,
                                        game_id: null !== (u = i.gameId) && void 0 !== u ? u : null,
                                        game_exe: null !== (s = i.exe) && void 0 !== s ? s : null,
                                        game_elevated: e.game.elevated,
                                        game_is_launcher: null !== (l = e.game.isLauncher) && void 0 !== l && l,
                                        game_duration: e.gameTimer.elapsed().asMilliseconds(),
                                        game_focused_duration: e.gameFocusedTimer.elapsed().asMilliseconds(),
                                        game_focused_change_count: e.gameFocusChangedCount,
                                        game_concurrent_game_count: e.gameConcurrentGameCount,
                                        ui_unlocked_duration: e.unlockedTimer.elapsed().asMilliseconds(),
                                        ui_unlocked_count: e.uiUnlockedCount,
                                        ui_locked_count: e.uiLockedCount,
                                        soundboard_shown_duration: e.soundboardShownTimer.elapsed().asMilliseconds(),
                                        soundboard_shown_count: e.soundboardShownCount,
                                        soundboard_keep_open_count: e.soundboardKeepOpenCount
                                    }, [4, null === c.default || void 0 === c.default ? void 0 : null === (n = c.default.hardware) || void 0 === n ? void 0 : null === (t = n.getDisplayCount) || void 0 === t ? void 0 : t.call(n)];
                                case 1:
                                    return [2, {
                                        usage: M.apply(void 0, m.concat([(y.hardware_display_count = null !== (_ = I.sent()) && void 0 !== _ ? _ : null, y.message_ack_count = e.overlayMessageAckCount, y.message_created_count = e.overlayMessageCreateCount, y.desktop_message_ack_count = e.desktopMessageAckCount, y.desktop_message_created_count = e.desktopMessageCreateCount, y.desktop_focused_duration = e.desktopFocusedTimer.elapsed().asMilliseconds(), y.desktop_focused_change_count = e.desktopFocusChangedCount, y.rtc_connection_duration = e.rtcConnectionTimer.elapsed().asMilliseconds(), y.mute_toggled_count = e.muteToggledCount, y.overlay_successfully_shown = e._successfullyShown, y)])),
                                        notifications: e.notificationAnalytics.getCounterAnalytics(e.uuid)
                                    }]
                            }
                        })
                    })()
                }
            }, {
                key: "setLocked",
                value: function(e) {
                    e ? (this.unlockedTimer.stop(), ++this.uiLockedCount) : (this.unlockedTimer.start(), ++this.uiUnlockedCount)
                }
            }, {
                key: "gameSetFocused",
                value: function(e) {
                    this.gameFocusedTimer.toggle(e), e && ++this.gameFocusChangedCount
                }
            }, {
                key: "setSoundboardShown",
                value: function(e, t) {
                    this.soundboardShownTimer.toggle(e), e && (++this.soundboardShownCount, t && ++this.soundboardKeepOpenCount)
                }
            }], [{
                key: "debug",
                get: function() {
                    return {
                        gamesByPid: e.gamesByPid,
                        gamesByName: e.gamesByName
                    }
                }
            }, {
                key: "getGameName",
                value: function(e) {
                    var t, n;
                    return null !== (n = null !== (t = e.name) && void 0 !== t ? t : e.id) && void 0 !== n ? n : null
                }
            }, {
                key: "ignoreGame",
                value: function(e) {
                    var t;
                    return null !== (t = e.isLauncher) && void 0 !== t && t
                }
            }, {
                key: "create",
                value: function(t) {
                    var n = e.getGameName(t);
                    if (e.ignoreGame(t) || null == n) return null;
                    var r = new e(L({}, t));
                    return r.gameConcurrentGameCount = Object.values(e.gamesByPid).length, e.gamesByPid[t.pid] = r, e.gamesByName[n] = r, r
                }
            }, {
                key: "getByName",
                value: function(t) {
                    return null == t ? null : e.gamesByName[t]
                }
            }, {
                key: "getByPid",
                value: function(t) {
                    return e.gamesByPid[t]
                }
            }, {
                key: "destroy",
                value: function(t) {
                    return b(function() {
                        var n, r, o, i, a, u, s, l, c;
                        return k(this, function(f) {
                            switch (f.label) {
                                case 0:
                                    if (n = e.getGameName(t), e.ignoreGame(t) || null == n) return [2];
                                    if (!(null != (r = e.gamesByPid[t.pid]))) return [3, 2];
                                    return r.screenAnalytics.destroy(), [4, r.getAnalytics()];
                                case 1:
                                    o = f.sent(), m.default.track(T.AnalyticEvents.OVERLAY_USAGE_STATS, o.usage), i = !0, a = !1, u = void 0;
                                    try {
                                        for (s = o.notifications[Symbol.iterator](); !(i = (l = s.next()).done); i = !0) c = l.value, m.default.track(T.AnalyticEvents.OVERLAY_USAGE_NOTIFICATION_STATS, c)
                                    } catch (e) {
                                        a = !0, u = e
                                    } finally {
                                        try {
                                            !i && null != s.return && s.return()
                                        } finally {
                                            if (a) throw u
                                        }
                                    }
                                    G.verbose("OVERLAY_USAGE_STATS: ".concat(t.name), o), delete e.gamesByPid[t.pid], f.label = 2;
                                case 2:
                                    return delete e.gamesByName[n], [2]
                            }
                        })
                    })()
                }
            }, {
                key: "gameSetAllUnfocused",
                value: function() {
                    var t = !0,
                        n = !1,
                        r = void 0;
                    try {
                        for (var o, i = Object.values(e.gamesByPid)[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) o.value.gameFocusedTimer.stop()
                    } catch (e) {
                        n = !0, r = e
                    } finally {
                        try {
                            !t && null != i.return && i.return()
                        } finally {
                            if (n) throw r
                        }
                    }
                }
            }, {
                key: "incrementConcurrentGameCount",
                value: function() {
                    var t = !0,
                        n = !1,
                        r = void 0;
                    try {
                        for (var o, i = Object.values(e.gamesByPid)[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                            var a = o.value;
                            ++a.gameConcurrentGameCount
                        }
                    } catch (e) {
                        n = !0, r = e
                    } finally {
                        try {
                            !t && null != i.return && i.return()
                        } finally {
                            if (n) throw r
                        }
                    }
                }
            }, {
                key: "handleMuteToggled",
                value: function() {
                    var t = !0,
                        n = !1,
                        r = void 0;
                    try {
                        for (var o, i = Object.values(e.gamesByPid)[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                            var a = o.value;
                            ++a.muteToggledCount
                        }
                    } catch (e) {
                        n = !0, r = e
                    } finally {
                        try {
                            !t && null != i.return && i.return()
                        } finally {
                            if (n) throw r
                        }
                    }
                }
            }, {
                key: "desktopSetFocused",
                value: function(t) {
                    if (t !== e.desktopMainWindowHasFocus) {
                        var n = !0,
                            r = !1,
                            o = void 0;
                        try {
                            for (var i, a = Object.values(e.gamesByPid)[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                                var u = i.value;
                                ++u.desktopFocusChangedCount, t && u.desktopFocusedTimer.toggle(t)
                            }
                        } catch (e) {
                            r = !0, o = e
                        } finally {
                            try {
                                !n && null != a.return && a.return()
                            } finally {
                                if (r) throw o
                            }
                        }
                        e.desktopMainWindowHasFocus = t
                    }
                }
            }, {
                key: "desktopMessageEvent",
                value: function(t) {
                    var n = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var i, a = Object.values(e.gamesByPid)[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                            var u = i.value;
                            switch (t) {
                                case "ack":
                                    ++u.desktopMessageAckCount;
                                    break;
                                case "created":
                                    ++u.desktopMessageCreateCount
                            }
                        }
                    } catch (e) {
                        r = !0, o = e
                    } finally {
                        try {
                            !n && null != a.return && a.return()
                        } finally {
                            if (r) throw o
                        }
                    }
                }
            }, {
                key: "toggleRtcConnection",
                value: function(t) {
                    var n = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var i, a = Object.values(e.gamesByPid)[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) i.value.rtcConnectionTimer.toggle(t)
                    } catch (e) {
                        r = !0, o = e
                    } finally {
                        try {
                            !n && null != a.return && a.return()
                        } finally {
                            if (r) throw o
                        }
                    }
                }
            }]), e
        }();

    function x(e) {
        G.verbose("handleRunningGamesChange", e);
        var t = !0,
            n = !1,
            r = void 0;
        try {
            for (var o, i = e.added[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                var a = o.value;
                H.incrementConcurrentGameCount();
                var u = H.create(a);
                G.verbose("handleRunningGamesChange added", a, u)
            }
        } catch (e) {
            n = !0, r = e
        } finally {
            try {
                !t && null != i.return && i.return()
            } finally {
                if (n) throw r
            }
        }
        var s = !0,
            l = !1,
            c = void 0;
        try {
            for (var f, d = e.removed[Symbol.iterator](); !(s = (f = d.next()).done); s = !0) {
                var _ = f.value;
                H.destroy(_), G.verbose("handleRunningGamesChange removed", _)
            }
        } catch (e) {
            l = !0, c = e
        } finally {
            try {
                !s && null != d.return && d.return()
            } finally {
                if (l) throw c
            }
        }
    }

    function Y(e) {
        var t = H.getByPid(e.pid);
        if (G.verbose("OVERLAY_SET_UI_LOCKED", t), null == t) {
            G.error("OVERLAY_SET_UI_LOCKED: Unable to find game", e, H.debug);
            return
        }
        t.setLocked(e.locked)
    }

    function W(e) {
        G.verbose("OVERLAY_NOTIFICATION_EVENT", e);
        var t, n = H.getByName(null !== (t = e.gameName) && void 0 !== t ? t : e.gameId);
        if (null == n) {
            G.error("OVERLAY_NOTIFICATION_EVENT: Game not found.", e, H.debug);
            return
        }
        n.notificationAnalytics.increment(e.notificationType, e.action)
    }

    function K(e) {
        G.verbose("OVERLAY_WIDGET_CHANGED", e);
        var t, n = H.getByName(null !== (t = e.gameName) && void 0 !== t ? t : e.gameId);
        if (null == n) {
            G.error("OVERLAY_WIDGET_CHANGED: Game not found", e, H.debug);
            return
        }
        var r = n.widgetAnalytics.getByWidget(e.widgetType);
        null != r && (!r.initialized && (r.initialized = !0, r.pinned = e.pinned), r.pinned !== e.pinned && ++r.pinnedToggledCount, r.pinned = e.pinned, r.visibleDuration.toggle(e.visible))
    }

    function z(e) {
        if (G.verbose("OVERLAY_FOCUSED", e), H.gameSetAllUnfocused(), null != e.pid) {
            var t = H.getByPid(e.pid);
            if (null == t) {
                G.error("OVERLAY_FOCUSED: Game not found", e, H.debug);
                return
            }
            t.gameSetFocused(!0)
        }
    }

    function X(e) {
        G.verbose("SOUNDBOARD_SET_OVERLAY_ENABLED", e);
        var t, n = H.getByPid(e.pid);
        if (null == n) {
            G.error("SOUNDBOARD_SET_OVERLAY_ENABLED: Game not found", e, H.debug);
            return
        }
        n.setSoundboardShown(e.enabled, !!e.enabled && null !== (t = e.keepOpen) && void 0 !== t && t)
    }

    function q(e) {
        G.verbose("OVERLAY_MESSAGE_EVENT_ACTION", e);
        var t, n = H.getByName(null !== (t = e.gameName) && void 0 !== t ? t : e.gameId);
        if (null == n) {
            G.error("OVERLAY_MESSAGE_EVENT_ACTION: Game not found", e, H.debug);
            return
        }
        switch (e.eventType) {
            case "ack":
                ++n.overlayMessageAckCount;
                break;
            case "create":
                ++n.overlayMessageCreateCount
        }
    }

    function Q(e) {
        G.verbose("MESSAGE_ACKED", e), H.desktopMessageEvent("ack")
    }

    function J(e) {
        e.message.state === T.MessageStates.SENDING && H.desktopMessageEvent("created")
    }

    function Z(e) {
        null != (0, h.default)() && (G.verbose("AUDIO_TOGGLE_SELF_MUTE", e), H.handleMuteToggled())
    }

    function $(e) {
        G.verbose("WINDOW_FOCUS", e);
        var t = (0, I.getMainWindowId)();
        if (e.windowId !== t) {
            G.verbose("WINDOW_FOCUS: Not main window", {
                action: e,
                mainWindowId: t
            });
            return
        }
        H.desktopSetFocused(e.focused)
    }

    function ee(e) {
        var t = H.getByPid(e.pid);
        if (null == t) {
            G.error("OVERLAY_SUCCESSFULLY_SHOWN: Game not found", e, H.debug);
            return
        }
        t.successfullyShown = !0
    }
    P(H, "gamesByPid", {}), P(H, "gamesByName", {}), P(H, "desktopMainWindowHasFocus", document.hasFocus());
    var et = function() {
        function e() {
            N(this, e)
        }
        return C(e, null, [{
            key: "hasConnection",
            value: function() {
                return e.connections.size > 0
            }
        }, {
            key: "handleRTCConnectionState",
            value: function(t) {
                var n, r = (null !== (n = t.channelId) && void 0 !== n ? n : "unknown") + t.context;
                switch (t.state) {
                    case T.RTCConnectionStates.RTC_CONNECTED:
                        e.connections.add(r);
                        break;
                    case T.RTCConnectionStates.DISCONNECTED:
                        e.connections.delete(r)
                }
                var o = e.hasConnection();
                e.previousHasConnection !== o && (H.toggleRtcConnection(o), e.previousHasConnection = o)
            }
        }]), e
    }();
    P(et, "connections", new Set), P(et, "previousHasConnection", !1);
    var en = function() {
            function e() {
                N(this, e)
            }
            return C(e, null, [{
                key: "handleMessageAcked",
                value: function(e) {
                    G.verbose("MESSAGE_ACKED", e);
                    var t = _.default.getGame();
                    if (null == t) {
                        G.error("Game not found.");
                        return
                    }
                    u.default.dispatch({
                        type: "OVERLAY_MESSAGE_EVENT_ACTION",
                        eventType: "ack",
                        gameName: t.name,
                        gameId: t.id
                    })
                }
            }, {
                key: "handleMessageCreate",
                value: function(e) {
                    if (e.message.state === T.MessageStates.SENDING) {
                        G.verbose("MESSAGE_CREATE", e, Error().stack);
                        var t = _.default.getGame();
                        if (null == t) {
                            G.error("Game not found.");
                            return
                        }
                        u.default.dispatch({
                            type: "OVERLAY_MESSAGE_EVENT_ACTION",
                            eventType: "create",
                            gameName: t.name,
                            gameId: t.id
                        })
                    }
                }
            }]), e
        }(),
        er = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && U(e, t)
            }(o, e);
            var t, n, r = (t = o, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = D(t);
                if (n) {
                    var a = D(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : g(e)
            });

            function o() {
                var e;
                return N(this, o), e = r.apply(this, arguments), P(g(e), "actions", __OVERLAY__ ? {
                    MESSAGE_ACKED: en.handleMessageAcked,
                    MESSAGE_CREATE: en.handleMessageCreate
                } : {
                    OVERLAY_FOCUSED: z,
                    OVERLAY_NOTIFICATION_EVENT: W,
                    OVERLAY_SET_UI_LOCKED: Y,
                    OVERLAY_WIDGET_CHANGED: K,
                    OVERLAY_MESSAGE_EVENT_ACTION: q,
                    RUNNING_GAMES_CHANGE: x,
                    SOUNDBOARD_SET_OVERLAY_ENABLED: X,
                    MESSAGE_ACKED: Q,
                    MESSAGE_CREATE: J,
                    WINDOW_FOCUS: $,
                    RTC_CONNECTION_STATE: et.handleRTCConnectionState,
                    AUDIO_TOGGLE_SELF_MUTE: Z,
                    OVERLAY_SUCCESSFULLY_SHOWN: ee
                }), e
            }
            return o
        }(l.default);
    t.default = new er
}