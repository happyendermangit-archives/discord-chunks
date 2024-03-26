function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return K
        }
    }), E("222007"), E("70102");
    var t, o, n = E("811022"),
        r = E("398183"),
        a = E("913144"),
        i = E("115718"),
        I = E("689988"),
        s = E("49671"),
        T = E("963990"),
        S = E("161454"),
        N = E("703370"),
        O = E("860957"),
        A = E("901165"),
        R = E("599110"),
        l = E("50885"),
        u = E("816454"),
        L = E("360782"),
        C = E("84970"),
        c = E("49111"),
        D = E("6791");
    let d = new n.Logger("OverlayUsageStatsManager");
    d.verbose = () => {};
    class U {
        increment(e) {
            ++this.actions[e]
        }
        getAnalytics(e, _) {
            let E = this.actions[D.OverlayNotificationAction.Viewed],
                t = this.actions[D.OverlayNotificationAction.Clicked];
            return 0 === E && 0 === t ? null : {
                event_uuid: _,
                notification_type: e,
                viewed_count: E,
                clicked_count: t
            }
        }
        constructor() {
            this.actions = {
                [D.OverlayNotificationAction.Viewed]: 0,
                [D.OverlayNotificationAction.Clicked]: 0
            }
        }
    }
    class M {
        static makeEmptyGroupAnalytics() {
            return {
                [D.OverlayNotificationGroup.Nudge]: 0,
                [D.OverlayNotificationGroup.TextChat]: 0,
                [D.OverlayNotificationGroup.VoiceCall]: 0,
                [D.OverlayNotificationGroup.Activity]: 0,
                [D.OverlayNotificationGroup.Clips]: 0,
                [D.OverlayNotificationGroup.Other]: 0
            }
        }
        increment(e, _) {
            let E = this.groupCounters[_];
            if (null == E) {
                d.error("NotificationCounter: Unknown notification action: ".concat(_));
                return
            }
            let t = (0, D.getOverlayNotificationGroup)(e);
            if (!(t in E)) {
                d.error("NotificationCounter: Unknown notification action: ".concat(e));
                return
            }++E[t], ++this.actionCounters[_];
            let o = this.counters[e];
            if (null == o) {
                d.error("NotificationCounter: Unknown notification type: ".concat(e));
                return
            }
            o.increment(_)
        }
        getAnalytics() {
            let e = this.groupCounters[D.OverlayNotificationAction.Viewed],
                _ = this.groupCounters[D.OverlayNotificationAction.Clicked];
            return {
                notices_viewed: this.actionCounters[D.OverlayNotificationAction.Viewed],
                notices_clicked: this.actionCounters[D.OverlayNotificationAction.Clicked],
                notice_nudge_viewed: e[D.OverlayNotificationGroup.Nudge],
                notice_text_chat_viewed: e[D.OverlayNotificationGroup.TextChat],
                notice_voice_call_viewed: e[D.OverlayNotificationGroup.VoiceCall],
                notice_activity_viewed: e[D.OverlayNotificationGroup.Activity],
                notice_clips_viewed: e[D.OverlayNotificationGroup.Clips],
                notice_other_viewed: e[D.OverlayNotificationGroup.Other],
                notice_nudge_clicked: _[D.OverlayNotificationGroup.Nudge],
                notice_text_chat_clicked: _[D.OverlayNotificationGroup.TextChat],
                notice_voice_call_clicked: _[D.OverlayNotificationGroup.VoiceCall],
                notice_activity_clicked: _[D.OverlayNotificationGroup.Activity],
                notice_clips_clicked: _[D.OverlayNotificationGroup.Clips],
                notice_other_clicked: _[D.OverlayNotificationGroup.Other]
            }
        }
        getCounterAnalytics(e) {
            return Object.entries(this.counters).map(_ => {
                let [E, t] = _;
                return t.getAnalytics(E, e)
            }).filter(e => null != e)
        }
        constructor() {
            this.actionCounters = {
                [D.OverlayNotificationAction.Viewed]: 0,
                [D.OverlayNotificationAction.Clicked]: 0
            }, this.groupCounters = {
                [D.OverlayNotificationAction.Viewed]: M.makeEmptyGroupAnalytics(),
                [D.OverlayNotificationAction.Clicked]: M.makeEmptyGroupAnalytics()
            }, this.counters = {
                [D.OverlayNotificationType.NewsNudge]: new U,
                [D.OverlayNotificationType.WelcomeNudge]: new U,
                [D.OverlayNotificationType.TextChat]: new U,
                [D.OverlayNotificationType.ActivityUserJoin]: new U,
                [D.OverlayNotificationType.ActivityInvite]: new U,
                [D.OverlayNotificationType.IncomingCall]: new U,
                [D.OverlayNotificationType.GoLiveNudge]: new U,
                [D.OverlayNotificationType.GoLiveNonVoiceNudge]: new U,
                [D.OverlayNotificationType.OverlayCrashed]: new U,
                [D.OverlayNotificationType.StartBroadcastNotification]: new U,
                [D.OverlayNotificationType.ClipsReminderNotification]: new U,
                [D.OverlayNotificationType.ClipsNotification]: new U,
                [D.OverlayNotificationType.KeybindIndicatorsNotification]: new U
            }
        }
    }(o = t || (t = {}))[o.Voice = 0] = "Voice", o[o.Text = 1] = "Text";
    class h {
        static makeEmptyAnalytics() {
            return {
                initialized: !1,
                pinnedToggledCount: 0,
                visibleDuration: new r.StopWatch,
                pinned: !1
            }
        }
        getByType(e) {
            return this.types[e]
        }
        getByWidget(e) {
            switch (e) {
                case c.OverlayWidgets.VOICE:
                    return this.getByType(0);
                case c.OverlayWidgets.TEXT:
                    return this.getByType(1);
                default:
                    return null
            }
        }
        getAnalytics() {
            let e = this.types[0],
                _ = this.types[1];
            return {
                widget_voice_pin_toggle_count: e.pinnedToggledCount,
                widget_voice_visible_duration: e.visibleDuration.elapsed().asMilliseconds(),
                widget_voice_pinned: e.pinned,
                widget_text_pin_toggle_count: _.pinnedToggledCount,
                widget_text_visible_duration: _.visibleDuration.elapsed().asMilliseconds(),
                widget_text_pinned: _.pinned
            }
        }
        constructor() {
            this.types = {
                0: h.makeEmptyAnalytics(),
                1: h.makeEmptyAnalytics()
            }
        }
    }
    class P {
        update() {
            let e = this.game,
                _ = l.default.GetWindowFullscreenTypeByPid(e.pid, e.name, e.fullscreenType);
            if (_ !== this.lastscreenType) {
                if (!(_ in this.counters)) {
                    d.error("ScreenTypeAnalytics: Unknown screen type: ".concat(_), _);
                    return
                }
                this.counters[_].start(), null != this.lastscreenType && this.counters[this.lastscreenType].stop(), this.lastscreenType = _
            }
        }
        getAnalytics() {
            var e, _;
            let E = e => this.counters[e].elapsed().asMilliseconds(),
                t = {
                    [i.RunningProcessFullscreenType.UNKNOWN]: E(i.RunningProcessFullscreenType.UNKNOWN),
                    [i.RunningProcessFullscreenType.WINDOWED]: E(i.RunningProcessFullscreenType.WINDOWED),
                    [i.RunningProcessFullscreenType.MAXIMIZED]: E(i.RunningProcessFullscreenType.MAXIMIZED),
                    [i.RunningProcessFullscreenType.BORDERLESS_FULLSCREEN]: E(i.RunningProcessFullscreenType.BORDERLESS_FULLSCREEN),
                    [i.RunningProcessFullscreenType.FULLSCREEN]: E(i.RunningProcessFullscreenType.FULLSCREEN),
                    [i.RunningProcessFullscreenType.MINIMIZED]: E(i.RunningProcessFullscreenType.MINIMIZED)
                },
                o = Object.entries(t).sort((e, _) => {
                    let [E, t] = e, [o, n] = _;
                    return n - t
                })[0],
                n = parseInt(o[0], 10),
                r = isNaN(n) ? i.RunningProcessFullscreenType.UNKNOWN : n;
            isNaN(n) && d.error("ScreenTypeAnalytics: Unknown most used screen type: ".concat(o), t);
            let a = C.GameDisplayModeStorage.getGameDisplayMode(null !== (e = this.game.name) && void 0 !== e ? e : this.game.id);
            C.GameDisplayModeStorage.setGameDisplayMode(null !== (_ = this.game.name) && void 0 !== _ ? _ : this.game.id, r);
            let I = {
                screentype_unknown_duration: t[i.RunningProcessFullscreenType.UNKNOWN],
                screentype_windowed_duration: t[i.RunningProcessFullscreenType.WINDOWED],
                screentype_maximized_duration: t[i.RunningProcessFullscreenType.MAXIMIZED],
                screentype_borderless_fullscreen_duration: t[i.RunningProcessFullscreenType.BORDERLESS_FULLSCREEN],
                screentype_fullscreen_duration: t[i.RunningProcessFullscreenType.FULLSCREEN],
                screentype_minimized_duration: t[i.RunningProcessFullscreenType.MINIMIZED]
            };
            return {
                ...I,
                screentype_global_supported_duration: I.screentype_windowed_duration + I.screentype_maximized_duration + I.screentype_borderless_fullscreen_duration,
                screentype_global_unsupported_duration: I.screentype_fullscreen_duration,
                screentype_initial: i.RunningProcessFullscreenType[this.game.fullscreenType],
                screentype_most_used: i.RunningProcessFullscreenType[r],
                screentype_most_used_previous: null == a ? null : i.RunningProcessFullscreenType[a],
                game_display_mode_is_adjustment_supported: l.default.GameDisplayModeIsGameSupported(this.game.name)
            }
        }
        destroy() {
            clearInterval(this.updateScreenInterval)
        }
        constructor(e) {
            this.game = e, this.counters = {
                [i.RunningProcessFullscreenType.UNKNOWN]: new r.StopWatch,
                [i.RunningProcessFullscreenType.WINDOWED]: new r.StopWatch,
                [i.RunningProcessFullscreenType.MAXIMIZED]: new r.StopWatch,
                [i.RunningProcessFullscreenType.BORDERLESS_FULLSCREEN]: new r.StopWatch,
                [i.RunningProcessFullscreenType.FULLSCREEN]: new r.StopWatch,
                [i.RunningProcessFullscreenType.MINIMIZED]: new r.StopWatch
            }, this.lastscreenType = void 0, this.update(), this.updateScreenInterval = setInterval(() => this.update(), 1e4)
        }
    }
    class m {
        static get debug() {
            return {
                gamesByPid: m.gamesByPid,
                gamesByName: m.gamesByName
            }
        }
        set successfullyShown(e) {
            this._successfullyShown = e
        }
        static getGameName(e) {
            var _, E;
            return null !== (E = null !== (_ = e.name) && void 0 !== _ ? _ : e.id) && void 0 !== E ? E : null
        }
        static ignoreGame(e) {
            var _;
            return null !== (_ = e.isLauncher) && void 0 !== _ && _
        }
        static create(e) {
            let _ = m.getGameName(e);
            if (m.ignoreGame(e) || null == _) return null;
            let E = new m({
                ...e
            });
            return E.gameConcurrentGameCount = Object.values(m.gamesByPid).length, m.gamesByPid[e.pid] = E, m.gamesByName[_] = E, E
        }
        static getByName(e) {
            return null == e ? null : m.gamesByName[e]
        }
        static getByPid(e) {
            return m.gamesByPid[e]
        }
        static async destroy(e) {
            let _ = m.getGameName(e);
            if (m.ignoreGame(e) || null == _) return;
            let E = m.gamesByPid[e.pid];
            if (null != E) {
                E.screenAnalytics.destroy();
                let _ = await E.getAnalytics();
                for (let e of (R.default.track(c.AnalyticEvents.OVERLAY_USAGE_STATS, _.usage), _.notifications)) R.default.track(c.AnalyticEvents.OVERLAY_USAGE_NOTIFICATION_STATS, e);
                d.verbose("OVERLAY_USAGE_STATS: ".concat(e.name), _), delete m.gamesByPid[e.pid]
            }
            delete m.gamesByName[_]
        }
        async getAnalytics() {
            var e, _, E, t, o, n, r;
            let a = {
                    setting_is_enabled: O.default.enabled,
                    setting_method: null == this.overlayStatus ? null : D.OverlayMethod[this.overlayStatus.overlayMethod],
                    setting_display_user: A.default.getDisplayUserMode(),
                    setting_display_name: A.default.getDisplayNameMode(),
                    setting_avatar_size: A.default.getAvatarSizeMode(),
                    setting_notification_position: A.default.getNotificationPositionMode(),
                    setting_chat_notification: A.default.getTextChatNotificationMode()
                },
                i = (0, S.getOverlayGameStatus)(this.game),
                I = (0, T.getRunningGameAnalytics)(this.game),
                N = {
                    event_uuid: this.uuid,
                    overlay_usage_stats_version: 3,
                    ...this.notificationAnalytics.getAnalytics(),
                    ...this.widgetAnalytics.getAnalytics(),
                    ...this.screenAnalytics.getAnalytics(),
                    ...a,
                    overlay_status_game_enabled: i.enabled,
                    overlay_status_game_source: i.source,
                    game_name: null !== (E = I.gameName) && void 0 !== E ? E : null,
                    game_id: null !== (t = I.gameId) && void 0 !== t ? t : null,
                    game_exe: null !== (o = I.exe) && void 0 !== o ? o : null,
                    game_elevated: this.game.elevated,
                    game_is_launcher: null !== (n = this.game.isLauncher) && void 0 !== n && n,
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
                    hardware_display_count: null !== (r = await (null === s.default || void 0 === s.default ? void 0 : null === (_ = s.default.hardware) || void 0 === _ ? void 0 : null === (e = _.getDisplayCount) || void 0 === e ? void 0 : e.call(_))) && void 0 !== r ? r : null,
                    message_ack_count: this.overlayMessageAckCount,
                    message_created_count: this.overlayMessageCreateCount,
                    desktop_message_ack_count: this.desktopMessageAckCount,
                    desktop_message_created_count: this.desktopMessageCreateCount,
                    desktop_focused_duration: this.desktopFocusedTimer.elapsed().asMilliseconds(),
                    desktop_focused_change_count: this.desktopFocusChangedCount,
                    rtc_connection_duration: this.rtcConnectionTimer.elapsed().asMilliseconds(),
                    mute_toggled_count: this.muteToggledCount,
                    overlay_successfully_shown: this._successfullyShown
                };
            return {
                usage: N,
                notifications: this.notificationAnalytics.getCounterAnalytics(this.uuid)
            }
        }
        setLocked(e) {
            e ? (this.unlockedTimer.stop(), ++this.uiLockedCount) : (this.unlockedTimer.start(), ++this.uiUnlockedCount)
        }
        static gameSetAllUnfocused() {
            for (let e of Object.values(m.gamesByPid)) e.gameFocusedTimer.stop()
        }
        static incrementConcurrentGameCount() {
            for (let e of Object.values(m.gamesByPid)) ++e.gameConcurrentGameCount
        }
        gameSetFocused(e) {
            this.gameFocusedTimer.toggle(e), e && ++this.gameFocusChangedCount
        }
        setSoundboardShown(e, _) {
            this.soundboardShownTimer.toggle(e), e && (++this.soundboardShownCount, _ && ++this.soundboardKeepOpenCount)
        }
        static handleMuteToggled() {
            for (let e of Object.values(m.gamesByPid)) ++e.muteToggledCount
        }
        static desktopSetFocused(e) {
            if (e !== m.desktopMainWindowHasFocus) {
                for (let _ of Object.values(m.gamesByPid)) ++_.desktopFocusChangedCount, e && _.desktopFocusedTimer.toggle(e);
                m.desktopMainWindowHasFocus = e
            }
        }
        static desktopMessageEvent(e) {
            for (let _ of Object.values(m.gamesByPid)) switch (e) {
                case "ack":
                    ++_.desktopMessageAckCount;
                    break;
                case "created":
                    ++_.desktopMessageCreateCount
            }
        }
        static toggleRtcConnection(e) {
            for (let _ of Object.values(m.gamesByPid)) _.rtcConnectionTimer.toggle(e)
        }
        constructor(e) {
            this.game = e, this.uuid = crypto.randomUUID(), this.notificationAnalytics = new M, this.widgetAnalytics = new h, this.uiUnlockedCount = 0, this.uiLockedCount = 0, this.gameFocusChangedCount = 0, this.gameConcurrentGameCount = 0, this.overlayMessageAckCount = 0, this.overlayMessageCreateCount = 0, this.gameTimer = r.StopWatch.startNew(), this.gameFocusedTimer = new r.StopWatch, this.unlockedTimer = new r.StopWatch, this.rtcConnectionTimer = new r.StopWatch, this.desktopFocusedTimer = new r.StopWatch, this.desktopFocusChangedCount = 0, this.desktopMessageAckCount = 0, this.desktopMessageCreateCount = 0, this.soundboardShownTimer = new r.StopWatch, this.soundboardShownCount = 0, this.soundboardKeepOpenCount = 0, this.muteToggledCount = 0, this._successfullyShown = !1, this.screenAnalytics = new P(e), this.overlayStatus = S.default.getGameOverlayStatus(e), m.desktopMainWindowHasFocus && this.desktopFocusedTimer.start(), V.hasConnection() && this.rtcConnectionTimer.start()
        }
    }

    function G(e) {
        for (let _ of (d.verbose("handleRunningGamesChange", e), e.added)) {
            m.incrementConcurrentGameCount();
            let e = m.create(_);
            d.verbose("handleRunningGamesChange added", _, e)
        }
        for (let _ of e.removed) m.destroy(_), d.verbose("handleRunningGamesChange removed", _)
    }

    function p(e) {
        let _ = m.getByPid(e.pid);
        if (d.verbose("OVERLAY_SET_UI_LOCKED", _), null == _) {
            d.error("OVERLAY_SET_UI_LOCKED: Unable to find game", e, m.debug);
            return
        }
        _.setLocked(e.locked)
    }

    function g(e) {
        var _;
        d.verbose("OVERLAY_NOTIFICATION_EVENT", e);
        let E = m.getByName(null !== (_ = e.gameName) && void 0 !== _ ? _ : e.gameId);
        if (null == E) {
            d.error("OVERLAY_NOTIFICATION_EVENT: Game not found.", e, m.debug);
            return
        }
        E.notificationAnalytics.increment(e.notificationType, e.action)
    }

    function y(e) {
        var _;
        d.verbose("OVERLAY_WIDGET_CHANGED", e);
        let E = m.getByName(null !== (_ = e.gameName) && void 0 !== _ ? _ : e.gameId);
        if (null == E) {
            d.error("OVERLAY_WIDGET_CHANGED: Game not found", e, m.debug);
            return
        }
        let t = E.widgetAnalytics.getByWidget(e.widgetType);
        null != t && (!t.initialized && (t.initialized = !0, t.pinned = e.pinned), t.pinned !== e.pinned && ++t.pinnedToggledCount, t.pinned = e.pinned, t.visibleDuration.toggle(e.visible))
    }

    function B(e) {
        if (d.verbose("OVERLAY_FOCUSED", e), m.gameSetAllUnfocused(), null == e.pid) return;
        let _ = m.getByPid(e.pid);
        if (null == _) {
            d.error("OVERLAY_FOCUSED: Game not found", e, m.debug);
            return
        }
        _.gameSetFocused(!0)
    }

    function f(e) {
        var _;
        d.verbose("SOUNDBOARD_SET_OVERLAY_ENABLED", e);
        let E = m.getByPid(e.pid);
        if (null == E) {
            d.error("SOUNDBOARD_SET_OVERLAY_ENABLED: Game not found", e, m.debug);
            return
        }
        E.setSoundboardShown(e.enabled, !!e.enabled && null !== (_ = e.keepOpen) && void 0 !== _ && _)
    }

    function H(e) {
        var _;
        d.verbose("OVERLAY_MESSAGE_EVENT_ACTION", e);
        let E = m.getByName(null !== (_ = e.gameName) && void 0 !== _ ? _ : e.gameId);
        if (null == E) {
            d.error("OVERLAY_MESSAGE_EVENT_ACTION: Game not found", e, m.debug);
            return
        }
        switch (e.eventType) {
            case "ack":
                ++E.overlayMessageAckCount;
                break;
            case "create":
                ++E.overlayMessageCreateCount
        }
    }

    function v(e) {
        d.verbose("MESSAGE_ACKED", e), m.desktopMessageEvent("ack")
    }

    function b(e) {
        e.message.state === c.MessageStates.SENDING && m.desktopMessageEvent("created")
    }

    function w(e) {
        null != (0, L.default)() && (d.verbose("AUDIO_TOGGLE_SELF_MUTE", e), m.handleMuteToggled())
    }

    function F(e) {
        d.verbose("WINDOW_FOCUS", e);
        let _ = (0, u.getMainWindowId)();
        if (e.windowId !== _) {
            d.verbose("WINDOW_FOCUS: Not main window", {
                action: e,
                mainWindowId: _
            });
            return
        }
        m.desktopSetFocused(e.focused)
    }

    function Y(e) {
        let _ = m.getByPid(e.pid);
        if (null == _) {
            d.error("OVERLAY_SUCCESSFULLY_SHOWN: Game not found", e, m.debug);
            return
        }
        _.successfullyShown = !0
    }
    m.gamesByPid = {}, m.gamesByName = {}, m.desktopMainWindowHasFocus = document.hasFocus();
    class V {
        static hasConnection() {
            return V.connections.size > 0
        }
        static handleRTCConnectionState(e) {
            var _;
            let E = (null !== (_ = e.channelId) && void 0 !== _ ? _ : "unknown") + e.context;
            switch (e.state) {
                case c.RTCConnectionStates.RTC_CONNECTED:
                    V.connections.add(E);
                    break;
                case c.RTCConnectionStates.DISCONNECTED:
                    V.connections.delete(E)
            }
            let t = V.hasConnection();
            V.previousHasConnection !== t && (m.toggleRtcConnection(t), V.previousHasConnection = t)
        }
    }
    V.connections = new Set, V.previousHasConnection = !1;
    class k {
        static handleMessageAcked(e) {
            d.verbose("MESSAGE_ACKED", e);
            let _ = N.default.getGame();
            if (null == _) {
                d.error("Game not found.");
                return
            }
            a.default.dispatch({
                type: "OVERLAY_MESSAGE_EVENT_ACTION",
                eventType: "ack",
                gameName: _.name,
                gameId: _.id
            })
        }
        static handleMessageCreate(e) {
            if (e.message.state !== c.MessageStates.SENDING) return;
            d.verbose("MESSAGE_CREATE", e, Error().stack);
            let _ = N.default.getGame();
            if (null == _) {
                d.error("Game not found.");
                return
            }
            a.default.dispatch({
                type: "OVERLAY_MESSAGE_EVENT_ACTION",
                eventType: "create",
                gameName: _.name,
                gameId: _.id
            })
        }
    }
    class W extends I.default {
        constructor(...e) {
            super(...e), this.actions = __OVERLAY__ ? {
                MESSAGE_ACKED: k.handleMessageAcked,
                MESSAGE_CREATE: k.handleMessageCreate
            } : {
                OVERLAY_FOCUSED: B,
                OVERLAY_NOTIFICATION_EVENT: g,
                OVERLAY_SET_UI_LOCKED: p,
                OVERLAY_WIDGET_CHANGED: y,
                OVERLAY_MESSAGE_EVENT_ACTION: H,
                RUNNING_GAMES_CHANGE: G,
                SOUNDBOARD_SET_OVERLAY_ENABLED: f,
                MESSAGE_ACKED: v,
                MESSAGE_CREATE: b,
                WINDOW_FOCUS: F,
                RTC_CONNECTION_STATE: V.handleRTCConnectionState,
                AUDIO_TOGGLE_SELF_MUTE: w,
                OVERLAY_SUCCESSFULLY_SHOWN: Y
            }
        }
    }
    var K = new W
}