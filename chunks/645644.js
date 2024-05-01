function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("411104");
    var i, r, a = n("259443"),
        s = n("379649"),
        o = n("570140"),
        l = n("593472"),
        u = n("147913"),
        d = n("579806"),
        _ = n("581567"),
        c = n("594190"),
        E = n("449224"),
        I = n("808506"),
        T = n("237997"),
        f = n("626135"),
        S = n("998502"),
        h = n("830917"),
        A = n("554174"),
        m = n("938038"),
        N = n("981631"),
        p = n("987650");

    function O(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let R = new a.Logger("OverlayUsageStatsManager");
    R.verbose = () => {};
    class C {
        increment(e) {
            ++this.actions[e]
        }
        getAnalytics(e, t) {
            let n = this.actions[p.OverlayNotificationAction.Viewed],
                i = this.actions[p.OverlayNotificationAction.Clicked];
            return 0 === n && 0 === i ? null : {
                event_uuid: t,
                notification_type: e,
                viewed_count: n,
                clicked_count: i
            }
        }
        constructor() {
            O(this, "actions", {
                [p.OverlayNotificationAction.Viewed]: 0,
                [p.OverlayNotificationAction.Clicked]: 0
            })
        }
    }
    class g {
        static makeEmptyGroupAnalytics() {
            return {
                [p.OverlayNotificationGroup.Nudge]: 0,
                [p.OverlayNotificationGroup.TextChat]: 0,
                [p.OverlayNotificationGroup.VoiceCall]: 0,
                [p.OverlayNotificationGroup.Activity]: 0,
                [p.OverlayNotificationGroup.Clips]: 0,
                [p.OverlayNotificationGroup.Other]: 0
            }
        }
        increment(e, t) {
            let n = this.groupCounters[t];
            if (null == n) {
                R.error("NotificationCounter: Unknown notification action: ".concat(t));
                return
            }
            let i = (0, p.getOverlayNotificationGroup)(e);
            if (!(i in n)) {
                R.error("NotificationCounter: Unknown notification action: ".concat(e));
                return
            }++n[i], ++this.actionCounters[t];
            let r = this.counters[e];
            if (null == r) {
                R.error("NotificationCounter: Unknown notification type: ".concat(e));
                return
            }
            r.increment(t)
        }
        getAnalytics() {
            let e = this.groupCounters[p.OverlayNotificationAction.Viewed],
                t = this.groupCounters[p.OverlayNotificationAction.Clicked];
            return {
                notices_viewed: this.actionCounters[p.OverlayNotificationAction.Viewed],
                notices_clicked: this.actionCounters[p.OverlayNotificationAction.Clicked],
                notice_nudge_viewed: e[p.OverlayNotificationGroup.Nudge],
                notice_text_chat_viewed: e[p.OverlayNotificationGroup.TextChat],
                notice_voice_call_viewed: e[p.OverlayNotificationGroup.VoiceCall],
                notice_activity_viewed: e[p.OverlayNotificationGroup.Activity],
                notice_clips_viewed: e[p.OverlayNotificationGroup.Clips],
                notice_other_viewed: e[p.OverlayNotificationGroup.Other],
                notice_nudge_clicked: t[p.OverlayNotificationGroup.Nudge],
                notice_text_chat_clicked: t[p.OverlayNotificationGroup.TextChat],
                notice_voice_call_clicked: t[p.OverlayNotificationGroup.VoiceCall],
                notice_activity_clicked: t[p.OverlayNotificationGroup.Activity],
                notice_clips_clicked: t[p.OverlayNotificationGroup.Clips],
                notice_other_clicked: t[p.OverlayNotificationGroup.Other]
            }
        }
        getCounterAnalytics(e) {
            return Object.entries(this.counters).map(t => {
                let [n, i] = t;
                return i.getAnalytics(n, e)
            }).filter(e => null != e)
        }
        constructor() {
            O(this, "actionCounters", {
                [p.OverlayNotificationAction.Viewed]: 0,
                [p.OverlayNotificationAction.Clicked]: 0
            }), O(this, "groupCounters", {
                [p.OverlayNotificationAction.Viewed]: g.makeEmptyGroupAnalytics(),
                [p.OverlayNotificationAction.Clicked]: g.makeEmptyGroupAnalytics()
            }), O(this, "counters", {
                [p.OverlayNotificationType.NewsNudge]: new C,
                [p.OverlayNotificationType.WelcomeNudge]: new C,
                [p.OverlayNotificationType.TextChat]: new C,
                [p.OverlayNotificationType.ActivityUserJoin]: new C,
                [p.OverlayNotificationType.ActivityInvite]: new C,
                [p.OverlayNotificationType.IncomingCall]: new C,
                [p.OverlayNotificationType.GoLiveNudge]: new C,
                [p.OverlayNotificationType.GoLiveNonVoiceNudge]: new C,
                [p.OverlayNotificationType.OverlayCrashed]: new C,
                [p.OverlayNotificationType.StartBroadcastNotification]: new C,
                [p.OverlayNotificationType.ClipsReminderNotification]: new C,
                [p.OverlayNotificationType.ClipsNotification]: new C,
                [p.OverlayNotificationType.KeybindIndicatorsNotification]: new C
            })
        }
    }(r = i || (i = {}))[r.Voice = 0] = "Voice", r[r.Text = 1] = "Text";
    class L {
        static makeEmptyAnalytics() {
            return {
                initialized: !1,
                pinnedToggledCount: 0,
                visibleDuration: new s.StopWatch,
                pinned: !1
            }
        }
        getByType(e) {
            return this.types[e]
        }
        getByWidget(e) {
            switch (e) {
                case N.OverlayWidgets.VOICE:
                    return this.getByType(0);
                case N.OverlayWidgets.TEXT:
                    return this.getByType(1);
                default:
                    return null
            }
        }
        getAnalytics() {
            let e = this.types[0],
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
        constructor() {
            O(this, "types", {
                0: L.makeEmptyAnalytics(),
                1: L.makeEmptyAnalytics()
            })
        }
    }
    class v {
        update() {
            let e = this.game,
                t = S.default.GetWindowFullscreenTypeByPid(e.pid, e.name, e.fullscreenType);
            if (t !== this.lastscreenType) {
                if (!(t in this.counters)) {
                    R.error("ScreenTypeAnalytics: Unknown screen type: ".concat(t), t);
                    return
                }
                this.counters[t].start(), null != this.lastscreenType && this.counters[this.lastscreenType].stop(), this.lastscreenType = t
            }
        }
        getAnalytics() {
            var e, t;
            let n = e => this.counters[e].elapsed().asMilliseconds(),
                i = {
                    [l.RunningProcessFullscreenType.UNKNOWN]: n(l.RunningProcessFullscreenType.UNKNOWN),
                    [l.RunningProcessFullscreenType.WINDOWED]: n(l.RunningProcessFullscreenType.WINDOWED),
                    [l.RunningProcessFullscreenType.MAXIMIZED]: n(l.RunningProcessFullscreenType.MAXIMIZED),
                    [l.RunningProcessFullscreenType.BORDERLESS_FULLSCREEN]: n(l.RunningProcessFullscreenType.BORDERLESS_FULLSCREEN),
                    [l.RunningProcessFullscreenType.FULLSCREEN]: n(l.RunningProcessFullscreenType.FULLSCREEN),
                    [l.RunningProcessFullscreenType.MINIMIZED]: n(l.RunningProcessFullscreenType.MINIMIZED)
                },
                r = Object.entries(i).sort((e, t) => {
                    let [n, i] = e, [r, a] = t;
                    return a - i
                })[0],
                a = parseInt(r[0], 10),
                s = isNaN(a) ? l.RunningProcessFullscreenType.UNKNOWN : a;
            isNaN(a) && R.error("ScreenTypeAnalytics: Unknown most used screen type: ".concat(r), i);
            let o = m.GameDisplayModeStorage.getGameDisplayMode(null !== (e = this.game.name) && void 0 !== e ? e : this.game.id);
            m.GameDisplayModeStorage.setGameDisplayMode(null !== (t = this.game.name) && void 0 !== t ? t : this.game.id, s);
            let u = {
                screentype_unknown_duration: i[l.RunningProcessFullscreenType.UNKNOWN],
                screentype_windowed_duration: i[l.RunningProcessFullscreenType.WINDOWED],
                screentype_maximized_duration: i[l.RunningProcessFullscreenType.MAXIMIZED],
                screentype_borderless_fullscreen_duration: i[l.RunningProcessFullscreenType.BORDERLESS_FULLSCREEN],
                screentype_fullscreen_duration: i[l.RunningProcessFullscreenType.FULLSCREEN],
                screentype_minimized_duration: i[l.RunningProcessFullscreenType.MINIMIZED]
            };
            return {
                ...u,
                screentype_global_supported_duration: u.screentype_windowed_duration + u.screentype_maximized_duration + u.screentype_borderless_fullscreen_duration,
                screentype_global_unsupported_duration: u.screentype_fullscreen_duration,
                screentype_initial: l.RunningProcessFullscreenType[this.game.fullscreenType],
                screentype_most_used: l.RunningProcessFullscreenType[s],
                screentype_most_used_previous: null == o ? null : l.RunningProcessFullscreenType[o],
                game_display_mode_is_adjustment_supported: S.default.GameDisplayModeIsGameSupported(this.game.name)
            }
        }
        destroy() {
            clearInterval(this.updateScreenInterval)
        }
        constructor(e) {
            O(this, "game", void 0), O(this, "counters", void 0), O(this, "lastscreenType", void 0), O(this, "updateScreenInterval", void 0), this.game = e, this.counters = {
                [l.RunningProcessFullscreenType.UNKNOWN]: new s.StopWatch,
                [l.RunningProcessFullscreenType.WINDOWED]: new s.StopWatch,
                [l.RunningProcessFullscreenType.MAXIMIZED]: new s.StopWatch,
                [l.RunningProcessFullscreenType.BORDERLESS_FULLSCREEN]: new s.StopWatch,
                [l.RunningProcessFullscreenType.FULLSCREEN]: new s.StopWatch,
                [l.RunningProcessFullscreenType.MINIMIZED]: new s.StopWatch
            }, this.lastscreenType = void 0, this.update(), this.updateScreenInterval = setInterval(() => this.update(), 1e4)
        }
    }
    class D {
        static get debug() {
            return {
                gamesByPid: D.gamesByPid,
                gamesByName: D.gamesByName
            }
        }
        set successfullyShown(e) {
            this._successfullyShown = e
        }
        static getGameName(e) {
            var t, n;
            return null !== (n = null !== (t = e.name) && void 0 !== t ? t : e.id) && void 0 !== n ? n : null
        }
        static ignoreGame(e) {
            var t;
            return null !== (t = e.isLauncher) && void 0 !== t && t
        }
        static create(e) {
            let t = D.getGameName(e);
            if (D.ignoreGame(e) || null == t) return null;
            let n = new D({
                ...e
            });
            return n.gameConcurrentGameCount = Object.values(D.gamesByPid).length, D.gamesByPid[e.pid] = n, D.gamesByName[t] = n, n
        }
        static getByName(e) {
            return null == e ? null : D.gamesByName[e]
        }
        static getByPid(e) {
            return D.gamesByPid[e]
        }
        static async destroy(e) {
            let t = D.getGameName(e);
            if (D.ignoreGame(e) || null == t) return;
            let n = D.gamesByPid[e.pid];
            if (null != n) {
                n.screenAnalytics.destroy();
                let t = await n.getAnalytics();
                for (let e of (f.default.track(N.AnalyticEvents.OVERLAY_USAGE_STATS, t.usage), t.notifications)) f.default.track(N.AnalyticEvents.OVERLAY_USAGE_NOTIFICATION_STATS, e);
                R.verbose("OVERLAY_USAGE_STATS: ".concat(e.name), t), delete D.gamesByPid[e.pid]
            }
            delete D.gamesByName[t]
        }
        async getAnalytics() {
            var e, t, n, i, r, a, s;
            let o = {
                    setting_is_enabled: I.default.enabled,
                    setting_method: null == this.overlayStatus ? null : p.OverlayMethod[this.overlayStatus.overlayMethod],
                    setting_display_user: T.default.getDisplayUserMode(),
                    setting_display_name: T.default.getDisplayNameMode(),
                    setting_avatar_size: T.default.getAvatarSizeMode(),
                    setting_notification_position: T.default.getNotificationPositionMode(),
                    setting_chat_notification: T.default.getTextChatNotificationMode()
                },
                l = (0, c.getOverlayGameStatus)(this.game),
                u = (0, _.getRunningGameAnalytics)(this.game);
            return {
                usage: {
                    event_uuid: this.uuid,
                    overlay_usage_stats_version: 3,
                    ...this.notificationAnalytics.getAnalytics(),
                    ...this.widgetAnalytics.getAnalytics(),
                    ...this.screenAnalytics.getAnalytics(),
                    ...o,
                    overlay_status_game_enabled: l.enabled,
                    overlay_status_game_source: l.source,
                    game_name: null !== (n = u.gameName) && void 0 !== n ? n : null,
                    game_id: null !== (i = u.gameId) && void 0 !== i ? i : null,
                    game_exe: null !== (r = u.exe) && void 0 !== r ? r : null,
                    game_elevated: this.game.elevated,
                    game_is_launcher: null !== (a = this.game.isLauncher) && void 0 !== a && a,
                    game_duration: this.gameTimer.elapsed().asMilliseconds(),
                    game_focused_duration: this.gameFocusedTimer.elapsed().asMilliseconds(),
                    game_focused_change_count: this.gameFocusChangedCount,
                    game_concurrent_game_count: this.gameConcurrentGameCount,
                    ui_unlocked_duration: this.unlockedTimer.elapsed().asMilliseconds(),
                    ui_unlocked_count: this.uiUnlockedCount,
                    ui_locked_count: this.uiLockedCount,
                    soundboard_shown_duration: this.soundboardShownTimer.elapsed().asMilliseconds(),
                    soundboard_shown_count: this.soundboardShownCount,
                    soundboard_keep_open_count: this.soundboardKeepOpenCount,
                    hardware_display_count: null !== (s = await (null === d.default || void 0 === d.default ? void 0 : null === (t = d.default.hardware) || void 0 === t ? void 0 : null === (e = t.getDisplayCount) || void 0 === e ? void 0 : e.call(t))) && void 0 !== s ? s : null,
                    message_ack_count: this.overlayMessageAckCount,
                    message_created_count: this.overlayMessageCreateCount,
                    desktop_message_ack_count: this.desktopMessageAckCount,
                    desktop_message_created_count: this.desktopMessageCreateCount,
                    desktop_focused_duration: this.desktopFocusedTimer.elapsed().asMilliseconds(),
                    desktop_focused_change_count: this.desktopFocusChangedCount,
                    rtc_connection_duration: this.rtcConnectionTimer.elapsed().asMilliseconds(),
                    mute_toggled_count: this.muteToggledCount,
                    overlay_successfully_shown: this._successfullyShown
                },
                notifications: this.notificationAnalytics.getCounterAnalytics(this.uuid)
            }
        }
        setLocked(e) {
            e ? (this.unlockedTimer.stop(), ++this.uiLockedCount) : (this.unlockedTimer.start(), ++this.uiUnlockedCount)
        }
        static gameSetAllUnfocused() {
            for (let e of Object.values(D.gamesByPid)) e.gameFocusedTimer.stop()
        }
        static incrementConcurrentGameCount() {
            for (let e of Object.values(D.gamesByPid)) ++e.gameConcurrentGameCount
        }
        gameSetFocused(e) {
            this.gameFocusedTimer.toggle(e), e && ++this.gameFocusChangedCount
        }
        setSoundboardShown(e, t) {
            this.soundboardShownTimer.toggle(e), e && (++this.soundboardShownCount, t && ++this.soundboardKeepOpenCount)
        }
        static handleMuteToggled() {
            for (let e of Object.values(D.gamesByPid)) ++e.muteToggledCount
        }
        static desktopSetFocused(e) {
            if (e !== D.desktopMainWindowHasFocus) {
                for (let t of Object.values(D.gamesByPid)) ++t.desktopFocusChangedCount, e && t.desktopFocusedTimer.toggle(e);
                D.desktopMainWindowHasFocus = e
            }
        }
        static desktopMessageEvent(e) {
            for (let t of Object.values(D.gamesByPid)) switch (e) {
                case "ack":
                    ++t.desktopMessageAckCount;
                    break;
                case "created":
                    ++t.desktopMessageCreateCount
            }
        }
        static toggleRtcConnection(e) {
            for (let t of Object.values(D.gamesByPid)) t.rtcConnectionTimer.toggle(e)
        }
        constructor(e) {
            O(this, "game", void 0), O(this, "uuid", void 0), O(this, "overlayStatus", void 0), O(this, "notificationAnalytics", void 0), O(this, "widgetAnalytics", void 0), O(this, "screenAnalytics", void 0), O(this, "uiUnlockedCount", void 0), O(this, "uiLockedCount", void 0), O(this, "gameFocusChangedCount", void 0), O(this, "gameConcurrentGameCount", void 0), O(this, "overlayMessageAckCount", void 0), O(this, "overlayMessageCreateCount", void 0), O(this, "gameTimer", void 0), O(this, "gameFocusedTimer", void 0), O(this, "unlockedTimer", void 0), O(this, "rtcConnectionTimer", void 0), O(this, "desktopFocusedTimer", void 0), O(this, "desktopFocusChangedCount", void 0), O(this, "desktopMessageAckCount", void 0), O(this, "desktopMessageCreateCount", void 0), O(this, "soundboardShownTimer", void 0), O(this, "soundboardShownCount", void 0), O(this, "soundboardKeepOpenCount", void 0), O(this, "muteToggledCount", void 0), O(this, "_successfullyShown", void 0), this.game = e, this.uuid = crypto.randomUUID(), this.notificationAnalytics = new g, this.widgetAnalytics = new L, this.uiUnlockedCount = 0, this.uiLockedCount = 0, this.gameFocusChangedCount = 0, this.gameConcurrentGameCount = 0, this.overlayMessageAckCount = 0, this.overlayMessageCreateCount = 0, this.gameTimer = s.StopWatch.startNew(), this.gameFocusedTimer = new s.StopWatch, this.unlockedTimer = new s.StopWatch, this.rtcConnectionTimer = new s.StopWatch, this.desktopFocusedTimer = new s.StopWatch, this.desktopFocusChangedCount = 0, this.desktopMessageAckCount = 0, this.desktopMessageCreateCount = 0, this.soundboardShownTimer = new s.StopWatch, this.soundboardShownCount = 0, this.soundboardKeepOpenCount = 0, this.muteToggledCount = 0, this._successfullyShown = !1, this.screenAnalytics = new v(e), this.overlayStatus = c.default.getGameOverlayStatus(e), D.desktopMainWindowHasFocus && this.desktopFocusedTimer.start(), H.hasConnection() && this.rtcConnectionTimer.start()
        }
    }

    function M(e) {
        for (let t of (R.verbose("handleRunningGamesChange", e), e.added)) {
            D.incrementConcurrentGameCount();
            let e = D.create(t);
            R.verbose("handleRunningGamesChange added", t, e)
        }
        for (let t of e.removed) D.destroy(t), R.verbose("handleRunningGamesChange removed", t)
    }

    function y(e) {
        let t = D.getByPid(e.pid);
        if (R.verbose("OVERLAY_SET_UI_LOCKED", t), null == t) {
            R.error("OVERLAY_SET_UI_LOCKED: Unable to find game", e, D.debug);
            return
        }
        t.setLocked(e.locked)
    }

    function P(e) {
        var t;
        R.verbose("OVERLAY_NOTIFICATION_EVENT", e);
        let n = D.getByName(null !== (t = e.gameName) && void 0 !== t ? t : e.gameId);
        if (null == n) {
            R.error("OVERLAY_NOTIFICATION_EVENT: Game not found.", e, D.debug);
            return
        }
        n.notificationAnalytics.increment(e.notificationType, e.action)
    }

    function U(e) {
        var t;
        R.verbose("OVERLAY_WIDGET_CHANGED", e);
        let n = D.getByName(null !== (t = e.gameName) && void 0 !== t ? t : e.gameId);
        if (null == n) {
            R.error("OVERLAY_WIDGET_CHANGED: Game not found", e, D.debug);
            return
        }
        let i = n.widgetAnalytics.getByWidget(e.widgetType);
        null != i && (!i.initialized && (i.initialized = !0, i.pinned = e.pinned), i.pinned !== e.pinned && ++i.pinnedToggledCount, i.pinned = e.pinned, i.visibleDuration.toggle(e.visible))
    }

    function b(e) {
        if (R.verbose("OVERLAY_FOCUSED", e), D.gameSetAllUnfocused(), null == e.pid) return;
        let t = D.getByPid(e.pid);
        if (null == t) {
            R.error("OVERLAY_FOCUSED: Game not found", e, D.debug);
            return
        }
        t.gameSetFocused(!0)
    }

    function G(e) {
        var t;
        R.verbose("SOUNDBOARD_SET_OVERLAY_ENABLED", e);
        let n = D.getByPid(e.pid);
        if (null == n) {
            R.error("SOUNDBOARD_SET_OVERLAY_ENABLED: Game not found", e, D.debug);
            return
        }
        n.setSoundboardShown(e.enabled, !!e.enabled && null !== (t = e.keepOpen) && void 0 !== t && t)
    }

    function w(e) {
        var t;
        R.verbose("OVERLAY_MESSAGE_EVENT_ACTION", e);
        let n = D.getByName(null !== (t = e.gameName) && void 0 !== t ? t : e.gameId);
        if (null == n) {
            R.error("OVERLAY_MESSAGE_EVENT_ACTION: Game not found", e, D.debug);
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

    function B(e) {
        R.verbose("MESSAGE_ACKED", e), D.desktopMessageEvent("ack")
    }

    function k(e) {
        e.message.state === N.MessageStates.SENDING && D.desktopMessageEvent("created")
    }

    function V(e) {
        null != (0, A.default)() && (R.verbose("AUDIO_TOGGLE_SELF_MUTE", e), D.handleMuteToggled())
    }

    function x(e) {
        R.verbose("WINDOW_FOCUS", e);
        let t = (0, h.getMainWindowId)();
        if (e.windowId !== t) {
            R.verbose("WINDOW_FOCUS: Not main window", {
                action: e,
                mainWindowId: t
            });
            return
        }
        D.desktopSetFocused(e.focused)
    }

    function F(e) {
        let t = D.getByPid(e.pid);
        if (null == t) {
            R.error("OVERLAY_SUCCESSFULLY_SHOWN: Game not found", e, D.debug);
            return
        }
        t.successfullyShown = !0
    }
    O(D, "gamesByPid", {}), O(D, "gamesByName", {}), O(D, "desktopMainWindowHasFocus", document.hasFocus());
    class H {
        static hasConnection() {
            return H.connections.size > 0
        }
        static handleRTCConnectionState(e) {
            var t;
            let n = (null !== (t = e.channelId) && void 0 !== t ? t : "unknown") + e.context;
            switch (e.state) {
                case N.RTCConnectionStates.RTC_CONNECTED:
                    H.connections.add(n);
                    break;
                case N.RTCConnectionStates.DISCONNECTED:
                    H.connections.delete(n)
            }
            let i = H.hasConnection();
            H.previousHasConnection !== i && (D.toggleRtcConnection(i), H.previousHasConnection = i)
        }
    }
    O(H, "connections", new Set), O(H, "previousHasConnection", !1);
    class Y {
        static handleMessageAcked(e) {
            R.verbose("MESSAGE_ACKED", e);
            let t = E.default.getGame();
            if (null == t) {
                R.error("Game not found.");
                return
            }
            o.default.dispatch({
                type: "OVERLAY_MESSAGE_EVENT_ACTION",
                eventType: "ack",
                gameName: t.name,
                gameId: t.id
            })
        }
        static handleMessageCreate(e) {
            if (e.message.state !== N.MessageStates.SENDING) return;
            R.verbose("MESSAGE_CREATE", e, Error().stack);
            let t = E.default.getGame();
            if (null == t) {
                R.error("Game not found.");
                return
            }
            o.default.dispatch({
                type: "OVERLAY_MESSAGE_EVENT_ACTION",
                eventType: "create",
                gameName: t.name,
                gameId: t.id
            })
        }
    }
    class j extends u.default {
        constructor(...e) {
            super(...e), O(this, "actions", __OVERLAY__ ? {
                MESSAGE_ACKED: Y.handleMessageAcked,
                MESSAGE_CREATE: Y.handleMessageCreate
            } : {
                OVERLAY_FOCUSED: b,
                OVERLAY_NOTIFICATION_EVENT: P,
                OVERLAY_SET_UI_LOCKED: y,
                OVERLAY_WIDGET_CHANGED: U,
                OVERLAY_MESSAGE_EVENT_ACTION: w,
                RUNNING_GAMES_CHANGE: M,
                SOUNDBOARD_SET_OVERLAY_ENABLED: G,
                MESSAGE_ACKED: B,
                MESSAGE_CREATE: k,
                WINDOW_FOCUS: x,
                RTC_CONNECTION_STATE: H.handleRTCConnectionState,
                AUDIO_TOGGLE_SELF_MUTE: V,
                OVERLAY_SUCCESSFULLY_SHOWN: F
            })
        }
    }
    t.default = new j
}