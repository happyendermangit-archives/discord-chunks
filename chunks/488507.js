function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return k
        }
    }), E("222007"), E("70102");
    var t, o, n = E("811022"),
        r = E("398183"),
        a = E("913144"),
        i = E("115718"),
        I = E("689988"),
        s = E("49671"),
        T = E("161454"),
        S = E("703370"),
        N = E("860957"),
        O = E("901165"),
        A = E("599110"),
        R = E("50885"),
        l = E("816454"),
        u = E("360782"),
        L = E("84970"),
        C = E("49111"),
        D = E("6791");
    let c = new n.default("OverlayUsageStatsManager");
    c.verbose = () => {};
    class d {
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
    class U {
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
                c.error("NotificationCounter: Unknown notification action: ".concat(_));
                return
            }
            let t = (0, D.getOverlayNotificationGroup)(e);
            if (!(t in E)) {
                c.error("NotificationCounter: Unknown notification action: ".concat(e));
                return
            }++E[t], ++this.actionCounters[_];
            let o = this.counters[e];
            if (null == o) {
                c.error("NotificationCounter: Unknown notification type: ".concat(e));
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
                [D.OverlayNotificationAction.Viewed]: U.makeEmptyGroupAnalytics(),
                [D.OverlayNotificationAction.Clicked]: U.makeEmptyGroupAnalytics()
            }, this.counters = {
                [D.OverlayNotificationType.NewsNudge]: new d,
                [D.OverlayNotificationType.WelcomeNudge]: new d,
                [D.OverlayNotificationType.TextChat]: new d,
                [D.OverlayNotificationType.ActivityUserJoin]: new d,
                [D.OverlayNotificationType.ActivityInvite]: new d,
                [D.OverlayNotificationType.IncomingCall]: new d,
                [D.OverlayNotificationType.GoLiveNudge]: new d,
                [D.OverlayNotificationType.GoLiveNonVoiceNudge]: new d,
                [D.OverlayNotificationType.OverlayCrashed]: new d,
                [D.OverlayNotificationType.StartBroadcastNotification]: new d,
                [D.OverlayNotificationType.ClipsReminderNotification]: new d,
                [D.OverlayNotificationType.ClipsNotification]: new d,
                [D.OverlayNotificationType.KeybindIndicatorsNotification]: new d
            }
        }
    }(o = t || (t = {}))[o.Voice = 0] = "Voice", o[o.Text = 1] = "Text";
    class M {
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
                case C.OverlayWidgets.VOICE:
                    return this.getByType(0);
                case C.OverlayWidgets.TEXT:
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
                0: M.makeEmptyAnalytics(),
                1: M.makeEmptyAnalytics()
            }
        }
    }
    class h {
        update() {
            let e = this.game,
                _ = R.default.GetWindowFullscreenTypeByPid(e.pid, e.name, e.fullscreenType);
            if (_ !== this.lastscreenType) {
                if (!(_ in this.counters)) {
                    c.error("ScreenTypeAnalytics: Unknown screen type: ".concat(_), _);
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
            isNaN(n) && c.error("ScreenTypeAnalytics: Unknown most used screen type: ".concat(o), t);
            let a = L.GameDisplayModeStorage.getGameDisplayMode(null !== (e = this.game.name) && void 0 !== e ? e : this.game.id);
            L.GameDisplayModeStorage.setGameDisplayMode(null !== (_ = this.game.name) && void 0 !== _ ? _ : this.game.id, r);
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
                game_display_mode_is_adjustment_supported: R.default.GameDisplayModeIsGameSupported(this.game.name)
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
    class P {
        static get debug() {
            return {
                gamesByPid: P.gamesByPid,
                gamesByName: P.gamesByName
            }
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
            let _ = P.getGameName(e);
            if (P.ignoreGame(e) || null == _) return null;
            let E = new P({
                ...e
            });
            return E.gameConcurrentGameCount = Object.values(P.gamesByPid).length, P.gamesByPid[e.pid] = E, P.gamesByName[_] = E, E
        }
        static getByName(e) {
            return null == e ? null : P.gamesByName[e]
        }
        static getByPid(e) {
            return P.gamesByPid[e]
        }
        static async destroy(e) {
            let _ = P.getGameName(e);
            if (P.ignoreGame(e) || null == _) return;
            let E = P.gamesByPid[e.pid];
            if (null != E) {
                E.screenAnalytics.destroy();
                let _ = await E.getAnalytics();
                for (let e of (A.default.track(C.AnalyticEvents.OVERLAY_USAGE_STATS, _.usage), _.notifications)) A.default.track(C.AnalyticEvents.OVERLAY_USAGE_NOTIFICATION_STATS, e);
                c.verbose("OVERLAY_USAGE_STATS: ".concat(e.name), _), delete P.gamesByPid[e.pid]
            }
            delete P.gamesByName[_]
        }
        async getAnalytics() {
            var e, _, E, t, o, n;
            let r = {
                    setting_is_enabled: N.default.enabled,
                    setting_method: null == this.overlayStatus ? null : D.OverlayMethod[this.overlayStatus.overlayMethod],
                    setting_display_user: O.default.getDisplayUserMode(),
                    setting_display_name: O.default.getDisplayNameMode(),
                    setting_avatar_size: O.default.getAvatarSizeMode(),
                    setting_notification_position: O.default.getNotificationPositionMode(),
                    setting_chat_notification: O.default.getTextChatNotificationMode()
                },
                a = (0, T.getOverlayGameStatus)(this.game),
                i = {
                    event_uuid: this.uuid,
                    overlay_usage_stats_version: 2,
                    ...this.notificationAnalytics.getAnalytics(),
                    ...this.widgetAnalytics.getAnalytics(),
                    ...this.screenAnalytics.getAnalytics(),
                    ...r,
                    overlay_status_game_enabled: a.enabled,
                    overlay_status_game_source: a.source,
                    game_name: null !== (E = this.game.name) && void 0 !== E ? E : null,
                    game_id: null !== (t = this.game.id) && void 0 !== t ? t : null,
                    game_elevated: this.game.elevated,
                    game_is_launcher: null !== (o = this.game.isLauncher) && void 0 !== o && o,
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
                    hardware_display_count: null !== (n = await (null === s.default || void 0 === s.default ? void 0 : null === (_ = s.default.hardware) || void 0 === _ ? void 0 : null === (e = _.getDisplayCount) || void 0 === e ? void 0 : e.call(_))) && void 0 !== n ? n : null,
                    message_ack_count: this.overlayMessageAckCount,
                    message_created_count: this.overlayMessageCreateCount,
                    desktop_message_ack_count: this.desktopMessageAckCount,
                    desktop_message_created_count: this.desktopMessageCreateCount,
                    desktop_focused_duration: this.desktopFocusedTimer.elapsed().asMilliseconds(),
                    desktop_focused_change_count: this.desktopFocusChangedCount,
                    rtc_connection_duration: this.rtcConnectionTimer.elapsed().asMilliseconds(),
                    mute_toggled_count: this.muteToggledCount
                };
            return {
                usage: i,
                notifications: this.notificationAnalytics.getCounterAnalytics(this.uuid)
            }
        }
        setLocked(e) {
            e ? (this.unlockedTimer.stop(), ++this.uiLockedCount) : (this.unlockedTimer.start(), ++this.uiUnlockedCount)
        }
        static gameSetAllUnfocused() {
            for (let e of Object.values(P.gamesByPid)) e.gameFocusedTimer.stop()
        }
        static incrementConcurrentGameCount() {
            for (let e of Object.values(P.gamesByPid)) ++e.gameConcurrentGameCount
        }
        gameSetFocused(e) {
            this.gameFocusedTimer.toggle(e), e && ++this.gameFocusChangedCount
        }
        setSoundboardShown(e, _) {
            this.soundboardShownTimer.toggle(e), e && (++this.soundboardShownCount, _ && ++this.soundboardKeepOpenCount)
        }
        static handleMuteToggled() {
            for (let e of Object.values(P.gamesByPid)) ++e.muteToggledCount
        }
        static desktopSetFocused(e) {
            if (e !== P.desktopMainWindowHasFocus) {
                for (let _ of Object.values(P.gamesByPid)) ++_.desktopFocusChangedCount, e && _.desktopFocusedTimer.toggle(e);
                P.desktopMainWindowHasFocus = e
            }
        }
        static desktopMessageEvent(e) {
            for (let _ of Object.values(P.gamesByPid)) switch (e) {
                case "ack":
                    ++_.desktopMessageAckCount;
                    break;
                case "created":
                    ++_.desktopMessageCreateCount
            }
        }
        static toggleRtcConnection(e) {
            for (let _ of Object.values(P.gamesByPid)) _.rtcConnectionTimer.toggle(e)
        }
        constructor(e) {
            this.game = e, this.uuid = crypto.randomUUID(), this.notificationAnalytics = new U, this.widgetAnalytics = new M, this.uiUnlockedCount = 0, this.uiLockedCount = 0, this.gameFocusChangedCount = 0, this.gameConcurrentGameCount = 0, this.overlayMessageAckCount = 0, this.overlayMessageCreateCount = 0, this.gameTimer = r.StopWatch.startNew(), this.gameFocusedTimer = new r.StopWatch, this.unlockedTimer = new r.StopWatch, this.rtcConnectionTimer = new r.StopWatch, this.desktopFocusedTimer = new r.StopWatch, this.desktopFocusChangedCount = 0, this.desktopMessageAckCount = 0, this.desktopMessageCreateCount = 0, this.soundboardShownTimer = new r.StopWatch, this.soundboardShownCount = 0, this.soundboardKeepOpenCount = 0, this.muteToggledCount = 0, this.screenAnalytics = new h(e), this.overlayStatus = T.default.getGameOverlayStatus(e), P.desktopMainWindowHasFocus && this.desktopFocusedTimer.start(), F.hasConnection() && this.rtcConnectionTimer.start()
        }
    }

    function m(e) {
        for (let _ of (c.verbose("handleRunningGamesChange", e), e.added)) {
            P.incrementConcurrentGameCount();
            let e = P.create(_);
            c.verbose("handleRunningGamesChange added", _, e)
        }
        for (let _ of e.removed) P.destroy(_), c.verbose("handleRunningGamesChange removed", _)
    }

    function G(e) {
        let _ = P.getByPid(e.pid);
        if (c.verbose("OVERLAY_SET_UI_LOCKED", _), null == _) {
            c.error("OVERLAY_SET_UI_LOCKED: Unable to find game", e, P.debug);
            return
        }
        _.setLocked(e.locked)
    }

    function p(e) {
        var _;
        c.verbose("OVERLAY_NOTIFICATION_EVENT", e);
        let E = P.getByName(null !== (_ = e.gameName) && void 0 !== _ ? _ : e.gameId);
        if (null == E) {
            c.error("OVERLAY_NOTIFICATION_EVENT: Game not found.", e, P.debug);
            return
        }
        E.notificationAnalytics.increment(e.notificationType, e.action)
    }

    function g(e) {
        var _;
        c.verbose("OVERLAY_WIDGET_CHANGED", e);
        let E = P.getByName(null !== (_ = e.gameName) && void 0 !== _ ? _ : e.gameId);
        if (null == E) {
            c.error("OVERLAY_WIDGET_CHANGED: Game not found", e, P.debug);
            return
        }
        let t = E.widgetAnalytics.getByWidget(e.widgetType);
        null != t && (!t.initialized && (t.initialized = !0, t.pinned = e.pinned), t.pinned !== e.pinned && ++t.pinnedToggledCount, t.pinned = e.pinned, t.visibleDuration.toggle(e.visible))
    }

    function y(e) {
        if (c.verbose("OVERLAY_FOCUSED", e), P.gameSetAllUnfocused(), null == e.pid) return;
        let _ = P.getByPid(e.pid);
        if (null == _) {
            c.error("OVERLAY_FOCUSED: Game not found", e, P.debug);
            return
        }
        _.gameSetFocused(!0)
    }

    function B(e) {
        var _;
        c.verbose("SOUNDBOARD_SET_OVERLAY_ENABLED", e);
        let E = P.getByPid(e.pid);
        if (null == E) {
            c.error("SOUNDBOARD_SET_OVERLAY_ENABLED: Game not found", e, P.debug);
            return
        }
        E.setSoundboardShown(e.enabled, !!e.enabled && null !== (_ = e.keepOpen) && void 0 !== _ && _)
    }

    function f(e) {
        var _;
        c.verbose("OVERLAY_MESSAGE_EVENT_ACTION", e);
        let E = P.getByName(null !== (_ = e.gameName) && void 0 !== _ ? _ : e.gameId);
        if (null == E) {
            c.error("OVERLAY_MESSAGE_EVENT_ACTION: Game not found", e, P.debug);
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

    function H(e) {
        c.verbose("MESSAGE_ACKED", e), P.desktopMessageEvent("ack")
    }

    function v(e) {
        e.message.state === C.MessageStates.SENDING && P.desktopMessageEvent("created")
    }

    function b(e) {
        null != (0, u.default)() && (c.verbose("AUDIO_TOGGLE_SELF_MUTE", e), P.handleMuteToggled())
    }

    function w(e) {
        c.verbose("WINDOW_FOCUS", e);
        let _ = (0, l.getMainWindowId)();
        if (e.windowId !== _) {
            c.verbose("WINDOW_FOCUS: Not main window", {
                action: e,
                mainWindowId: _
            });
            return
        }
        P.desktopSetFocused(e.focused)
    }
    P.gamesByPid = {}, P.gamesByName = {}, P.desktopMainWindowHasFocus = document.hasFocus();
    class F {
        static hasConnection() {
            return F.connections.size > 0
        }
        static handleRTCConnectionState(e) {
            var _;
            let E = (null !== (_ = e.channelId) && void 0 !== _ ? _ : "unknown") + e.context;
            switch (e.state) {
                case C.RTCConnectionStates.RTC_CONNECTED:
                    F.connections.add(E);
                    break;
                case C.RTCConnectionStates.DISCONNECTED:
                    F.connections.delete(E)
            }
            let t = F.hasConnection();
            F.previousHasConnection !== t && (P.toggleRtcConnection(t), F.previousHasConnection = t)
        }
    }
    F.connections = new Set, F.previousHasConnection = !1;
    class Y {
        static handleMessageAcked(e) {
            c.verbose("MESSAGE_ACKED", e);
            let _ = S.default.getGame();
            if (null == _) {
                c.error("Game not found.");
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
            if (e.message.state !== C.MessageStates.SENDING) return;
            c.verbose("MESSAGE_CREATE", e, Error().stack);
            let _ = S.default.getGame();
            if (null == _) {
                c.error("Game not found.");
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
    class V extends I.default {
        constructor(...e) {
            super(...e), this.actions = __OVERLAY__ ? {
                MESSAGE_ACKED: Y.handleMessageAcked,
                MESSAGE_CREATE: Y.handleMessageCreate
            } : {
                OVERLAY_FOCUSED: y,
                OVERLAY_NOTIFICATION_EVENT: p,
                OVERLAY_SET_UI_LOCKED: G,
                OVERLAY_WIDGET_CHANGED: g,
                OVERLAY_MESSAGE_EVENT_ACTION: f,
                RUNNING_GAMES_CHANGE: m,
                SOUNDBOARD_SET_OVERLAY_ENABLED: B,
                MESSAGE_ACKED: H,
                MESSAGE_CREATE: v,
                WINDOW_FOCUS: w,
                RTC_CONNECTION_STATE: F.handleRTCConnectionState,
                AUDIO_TOGGLE_SELF_MUTE: b
            }
        }
    }
    var k = new V
}