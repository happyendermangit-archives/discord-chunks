function(e, t, n) {
    "use strict";
    n.r(t), n("411104"), n("47120");
    var i = n("153832"),
        r = n("570140"),
        s = n("318885"),
        a = n("355863"),
        o = n("449224"),
        l = n("451478"),
        u = n("434529"),
        d = n("145597"),
        _ = n("765250"),
        c = n("981631");
    let E = {
        track(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (!__OVERLAY__) throw Error("OverlayActionCreators.track: Must be called within Overlay context");
            (0, s.trackWithOverlayMetadata)(e, t, n)
        },
        overlayReady(e) {
            r.default.dispatch({
                type: "OVERLAY_READY",
                pid: e
            })
        },
        overlayMounted(e) {
            r.default.dispatch({
                type: "OVERLAY_MOUNTED",
                nudge: e
            })
        },
        setFocusedPID(e) {
            r.default.dispatch({
                type: "OVERLAY_FOCUSED",
                pid: e
            })
        },
        setInputLocked(e, t) {
            r.default.dispatch({
                type: "OVERLAY_SET_INPUT_LOCKED",
                locked: e,
                pid: t
            })
        },
        setUILocked(e, t) {
            r.default.dispatch({
                type: "OVERLAY_SET_UI_LOCKED",
                locked: e,
                pid: t
            })
        },
        setLocked(e, t) {
            r.default.dispatch({
                type: "OVERLAY_SET_INPUT_LOCKED",
                locked: e,
                pid: t
            }), r.default.dispatch({
                type: "OVERLAY_SET_UI_LOCKED",
                locked: e,
                pid: t
            })
        },
        setInstanceLocked(e) {
            if (!__OVERLAY__) throw Error("OverlayActionCreators.setInstanceLocked: Must be called within Overlay context");
            E.setLocked(e, (0, d.getPID)())
        },
        setEnabled(e, t) {
            r.default.dispatch({
                type: "OVERLAY_SET_ENABLED",
                enabled: e,
                legacyEnabled: t
            })
        },
        selectCall(e) {
            r.default.dispatch({
                type: "OVERLAY_SELECT_CALL",
                callId: e
            })
        },
        setDisplayNameMode(e) {
            r.default.dispatch({
                type: "OVERLAY_SET_DISPLAY_NAME_MODE",
                mode: e
            })
        },
        setDisplayUserMode(e) {
            r.default.dispatch({
                type: "OVERLAY_SET_DISPLAY_USER_MODE",
                mode: e
            })
        },
        setAvatarSizeMode(e) {
            r.default.dispatch({
                type: "OVERLAY_SET_AVATAR_SIZE_MODE",
                mode: e
            })
        },
        setNotificationPositionMode(e) {
            r.default.dispatch({
                type: "OVERLAY_SET_NOTIFICATION_POSITION_MODE",
                mode: e
            })
        },
        setTextChatNotificationMode(e) {
            r.default.dispatch({
                type: "OVERLAY_SET_TEXT_CHAT_NOTIFICATION_MODE",
                mode: e
            })
        },
        setShowKeybindIndicators(e) {
            r.default.dispatch({
                type: "OVERLAY_SET_SHOW_KEYBIND_INDICATORS",
                shouldShow: e
            })
        },
        callPrivateChannel(e, t) {
            r.default.dispatch({
                type: "OVERLAY_CALL_PRIVATE_CHANNEL",
                channelId: e,
                ring: t
            })
        },
        setTextWidgetOpacity(e) {
            r.default.dispatch({
                type: "OVERLAY_SET_TEXT_WIDGET_OPACITY",
                opacity: e
            })
        },
        disableExternalLinkAlert() {
            r.default.dispatch({
                type: "OVERLAY_DISABLE_EXTERNAL_LINK_ALERT"
            })
        },
        startSession() {
            if (!__OVERLAY__) throw Error("Attempting to start an overlay session outside of the overlay context");
            r.default.dispatch({
                type: "OVERLAY_START_SESSION"
            })
        },
        activateRegion(e) {
            r.default.dispatch({
                type: "OVERLAY_ACTIVATE_REGION",
                region: e
            })
        },
        deactivateAllRegions() {
            r.default.dispatch({
                type: "OVERLAY_DEACTIVATE_ALL_REGIONS"
            })
        },
        setPreviewInGameMode(e) {
            r.default.dispatch({
                type: "OVERLAY_SET_PREVIEW_IN_GAME_MODE",
                isPreviewingInGame: e
            })
        },
        updateNotificationStatus(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.OverlayNotificationStatus.DISMISSED;
            r.default.dispatch({
                type: "OVERLAY_UPDATE_NOTIFICATION_STATUS",
                notificationId: e,
                status: t
            })
        },
        notificationEvent(e, t) {
            var n, i;
            let s = o.default.getGame();
            r.default.dispatch({
                type: "OVERLAY_NOTIFICATION_EVENT",
                notificationType: e,
                action: t,
                gameName: null !== (n = null == s ? void 0 : s.name) && void 0 !== n ? n : null,
                gameId: null !== (i = null == s ? void 0 : s.id) && void 0 !== i ? i : null
            })
        },
        setPinChat(e) {
            let t = d.OVERLAY_LAYOUT_ID,
                n = a.default.getWidgetsForLayout(t),
                r = a.default.getWidgetConfig(c.OverlayWidgets.GUILDS),
                s = a.default.getWidgetConfig(c.OverlayWidgets.TEXT),
                o = a.default.getWidgetConfig(c.OverlayWidgets.GUILDS_TEXT);
            if (0 === n.length || null == r || null == s || null == o) return;
            let E = l.default.windowSize(),
                I = {
                    width: 0,
                    height: 0
                },
                T = {
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                },
                f = {
                    width: 312,
                    height: 0
                },
                S = {
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                },
                A = {
                    width: 0,
                    height: 0
                };
            if (n.forEach(e => {
                    let {
                        type: t,
                        id: n,
                        anchor: i,
                        size: r
                    } = e;
                    switch (t) {
                        case c.OverlayWidgets.TEXT:
                            I = (0, u.getSizeFromLayoutSize)(r, E), (0, _.deleteWidget)(n);
                            break;
                        case c.OverlayWidgets.GUILDS:
                            T = (0, u.getFullCoordsFromLayoutSize)(i, r, E), f = (0, u.getSizeFromLayoutSize)(r, E), (0, _.deleteWidget)(n);
                            break;
                        case c.OverlayWidgets.GUILDS_TEXT:
                            S = (0, u.getFullCoordsFromLayoutSize)(i, r, E), A = (0, u.getSizeFromLayoutSize)(r, E), (0, _.deleteWidget)(n)
                    }
                }), e) {
                let e = "auto" === A.width ? o.minSize.width : A.width;
                e -= r.minSize.width;
                let [n, s] = (0, u.getLeftWidgetSpecs)(S, {
                    ...A,
                    width: r.minSize.width
                }, E), [l, d] = (0, u.getRightWidgetSpecs)(S, {
                    ...A,
                    width: e
                }, E, {
                    x: 10,
                    y: 10
                }), I = a.default.getWidgetDefaultSettings(c.OverlayWidgets.TEXT);
                if (null == I) throw Error("OverlayActionCreators.setPinChat: No config for TEXT exists");
                (0, _.createWidget)({
                    ...I,
                    type: c.OverlayWidgets.TEXT,
                    id: (0, i.v4)(),
                    size: d,
                    anchor: l,
                    layoutId: t
                });
                let T = a.default.getWidgetDefaultSettings(c.OverlayWidgets.GUILDS);
                if (null == T) throw Error("OverlayActionCreators.setPinChat: No config for GUILDS exists");
                (0, _.createWidget)({
                    ...T,
                    type: c.OverlayWidgets.GUILDS,
                    id: (0, i.v4)(),
                    size: s,
                    anchor: n,
                    layoutId: t
                })
            } else {
                let e = "auto" === I.width ? s.minSize.width : I.width;
                e += r.minSize.width;
                let [n, o] = (0, u.getLeftWidgetSpecs)(T, {
                    height: f.height,
                    width: e
                }, E), l = a.default.getWidgetDefaultSettings(c.OverlayWidgets.GUILDS_TEXT);
                if (null == l) throw Error("OverlayActionCreators.setPinChat: No config for GUILDS_TEXT exists");
                (0, _.createWidget)({
                    ...l,
                    type: c.OverlayWidgets.GUILDS_TEXT,
                    id: (0, i.v4)(),
                    layoutId: t,
                    anchor: n,
                    size: o
                })
            }
        },
        resetDefaultLayout(e) {
            null != a.default.getLayout(e) && ((0, _.deleteAllWidgets)(e), (0, _.createWidgets)(a.default.getDefaultLayout(e)))
        },
        setClickZones(e) {
            r.default.dispatch({
                type: "OVERLAY_SET_CLICK_ZONES",
                zones: e
            })
        },
        relayClickZoneClicked(e, t, n) {
            r.default.dispatch({
                type: "OVERLAY_RELAY_CLICK_ZONE_CLICKED",
                zoneName: e,
                normalizedMouseX: t,
                normalizedMouseY: n
            })
        },
        setAssociatedGame(e, t, n) {
            r.default.dispatch({
                type: "OVERLAY_SET_ASSOCIATED_GAME",
                previousAssociatedGamePID: e,
                associatedGamePID: t,
                associatedGame: n
            })
        },
        notifyReadyToShow(e) {
            r.default.dispatch({
                type: "OVERLAY_NOTIFY_READY_TO_SHOW",
                pid: e
            })
        },
        successfullyShown(e) {
            r.default.dispatch({
                type: "OVERLAY_SUCCESSFULLY_SHOWN",
                pid: e
            })
        }
    };
    t.default = E
}