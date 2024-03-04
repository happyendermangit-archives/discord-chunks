function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return h
        }
    }), n("70102"), n("222007");
    var i = n("748820"),
        s = n("913144"),
        r = n("939398"),
        a = n("505507"),
        o = n("703370"),
        l = n("471671"),
        u = n("80687"),
        d = n("819068"),
        c = n("640583"),
        f = n("49111");
    let _ = {
        track(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (!__OVERLAY__) throw Error("OverlayActionCreators.track: Must be called within Overlay context");
            (0, r.trackWithOverlayMetadata)(e, t, n)
        },
        overlayReady(e) {
            s.default.dispatch({
                type: "OVERLAY_READY",
                pid: e
            })
        },
        overlayMounted(e) {
            s.default.dispatch({
                type: "OVERLAY_MOUNTED",
                nudge: e
            })
        },
        setFocusedPID(e) {
            s.default.dispatch({
                type: "OVERLAY_FOCUSED",
                pid: e
            })
        },
        setInputLocked(e, t) {
            s.default.dispatch({
                type: "OVERLAY_SET_INPUT_LOCKED",
                locked: e,
                pid: t
            })
        },
        setUILocked(e, t) {
            s.default.dispatch({
                type: "OVERLAY_SET_UI_LOCKED",
                locked: e,
                pid: t
            })
        },
        setLocked(e, t) {
            s.default.dispatch({
                type: "OVERLAY_SET_INPUT_LOCKED",
                locked: e,
                pid: t
            }), s.default.dispatch({
                type: "OVERLAY_SET_UI_LOCKED",
                locked: e,
                pid: t
            })
        },
        setInstanceLocked(e) {
            if (!__OVERLAY__) throw Error("OverlayActionCreators.setInstanceLocked: Must be called within Overlay context");
            _.setLocked(e, (0, d.getPID)())
        },
        setEnabled(e) {
            s.default.dispatch({
                type: "OVERLAY_SET_ENABLED",
                enabled: e
            })
        },
        selectCall(e) {
            s.default.dispatch({
                type: "OVERLAY_SELECT_CALL",
                callId: e
            })
        },
        setDisplayNameMode(e) {
            s.default.dispatch({
                type: "OVERLAY_SET_DISPLAY_NAME_MODE",
                mode: e
            })
        },
        setDisplayUserMode(e) {
            s.default.dispatch({
                type: "OVERLAY_SET_DISPLAY_USER_MODE",
                mode: e
            })
        },
        setAvatarSizeMode(e) {
            s.default.dispatch({
                type: "OVERLAY_SET_AVATAR_SIZE_MODE",
                mode: e
            })
        },
        setNotificationPositionMode(e) {
            s.default.dispatch({
                type: "OVERLAY_SET_NOTIFICATION_POSITION_MODE",
                mode: e
            })
        },
        setTextChatNotificationMode(e) {
            s.default.dispatch({
                type: "OVERLAY_SET_TEXT_CHAT_NOTIFICATION_MODE",
                mode: e
            })
        },
        setShowKeybindIndicators(e) {
            s.default.dispatch({
                type: "OVERLAY_SET_SHOW_KEYBIND_INDICATORS",
                shouldShow: e
            })
        },
        callPrivateChannel(e, t) {
            s.default.dispatch({
                type: "OVERLAY_CALL_PRIVATE_CHANNEL",
                channelId: e,
                ring: t
            })
        },
        setTextWidgetOpacity(e) {
            s.default.dispatch({
                type: "OVERLAY_SET_TEXT_WIDGET_OPACITY",
                opacity: e
            })
        },
        disableExternalLinkAlert() {
            s.default.dispatch({
                type: "OVERLAY_DISABLE_EXTERNAL_LINK_ALERT"
            })
        },
        startSession() {
            if (!__OVERLAY__) throw Error("Attempting to start an overlay session outside of the overlay context");
            s.default.dispatch({
                type: "OVERLAY_START_SESSION"
            })
        },
        activateRegion(e) {
            s.default.dispatch({
                type: "OVERLAY_ACTIVATE_REGION",
                region: e
            })
        },
        deactivateAllRegions() {
            s.default.dispatch({
                type: "OVERLAY_DEACTIVATE_ALL_REGIONS"
            })
        },
        setPreviewInGameMode(e) {
            s.default.dispatch({
                type: "OVERLAY_SET_PREVIEW_IN_GAME_MODE",
                isPreviewingInGame: e
            })
        },
        updateNotificationStatus(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.OverlayNotificationStatus.DISMISSED;
            s.default.dispatch({
                type: "OVERLAY_UPDATE_NOTIFICATION_STATUS",
                notificationId: e,
                status: t
            })
        },
        notificationEvent(e, t) {
            var n, i;
            let r = o.default.getGame();
            s.default.dispatch({
                type: "OVERLAY_NOTIFICATION_EVENT",
                notificationType: e,
                action: t,
                gameName: null !== (n = null == r ? void 0 : r.name) && void 0 !== n ? n : null,
                gameId: null !== (i = null == r ? void 0 : r.id) && void 0 !== i ? i : null
            })
        },
        setPinChat(e) {
            let t = d.OVERLAY_LAYOUT_ID,
                n = a.default.getWidgetsForLayout(t),
                s = a.default.getWidgetConfig(f.OverlayWidgets.GUILDS),
                r = a.default.getWidgetConfig(f.OverlayWidgets.TEXT),
                o = a.default.getWidgetConfig(f.OverlayWidgets.GUILDS_TEXT);
            if (0 === n.length || null == s || null == r || null == o) return;
            let _ = l.default.windowSize(),
                h = {
                    width: 0,
                    height: 0
                },
                E = {
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                },
                g = {
                    width: 312,
                    height: 0
                },
                m = {
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                },
                p = {
                    width: 0,
                    height: 0
                };
            if (n.forEach(e => {
                    let {
                        type: t,
                        id: n,
                        anchor: i,
                        size: s
                    } = e;
                    switch (t) {
                        case f.OverlayWidgets.TEXT:
                            h = (0, u.getSizeFromLayoutSize)(s, _), (0, c.deleteWidget)(n);
                            break;
                        case f.OverlayWidgets.GUILDS:
                            E = (0, u.getFullCoordsFromLayoutSize)(i, s, _), g = (0, u.getSizeFromLayoutSize)(s, _), (0, c.deleteWidget)(n);
                            break;
                        case f.OverlayWidgets.GUILDS_TEXT:
                            m = (0, u.getFullCoordsFromLayoutSize)(i, s, _), p = (0, u.getSizeFromLayoutSize)(s, _), (0, c.deleteWidget)(n)
                    }
                }), e) {
                let e = "auto" === p.width ? o.minSize.width : p.width;
                e -= s.minSize.width;
                let [n, r] = (0, u.getLeftWidgetSpecs)(m, {
                    ...p,
                    width: s.minSize.width
                }, _), [l, d] = (0, u.getRightWidgetSpecs)(m, {
                    ...p,
                    width: e
                }, _, {
                    x: 10,
                    y: 10
                }), h = a.default.getWidgetDefaultSettings(f.OverlayWidgets.TEXT);
                if (null == h) throw Error("OverlayActionCreators.setPinChat: No config for TEXT exists");
                (0, c.createWidget)({
                    ...h,
                    type: f.OverlayWidgets.TEXT,
                    id: (0, i.v4)(),
                    size: d,
                    anchor: l,
                    layoutId: t
                });
                let E = a.default.getWidgetDefaultSettings(f.OverlayWidgets.GUILDS);
                if (null == E) throw Error("OverlayActionCreators.setPinChat: No config for GUILDS exists");
                (0, c.createWidget)({
                    ...E,
                    type: f.OverlayWidgets.GUILDS,
                    id: (0, i.v4)(),
                    size: r,
                    anchor: n,
                    layoutId: t
                })
            } else {
                let e = "auto" === h.width ? r.minSize.width : h.width;
                e += s.minSize.width;
                let [n, o] = (0, u.getLeftWidgetSpecs)(E, {
                    height: g.height,
                    width: e
                }, _), l = a.default.getWidgetDefaultSettings(f.OverlayWidgets.GUILDS_TEXT);
                if (null == l) throw Error("OverlayActionCreators.setPinChat: No config for GUILDS_TEXT exists");
                (0, c.createWidget)({
                    ...l,
                    type: f.OverlayWidgets.GUILDS_TEXT,
                    id: (0, i.v4)(),
                    layoutId: t,
                    anchor: n,
                    size: o
                })
            }
        },
        resetDefaultLayout(e) {
            let t = a.default.getLayout(e);
            null != t && ((0, c.deleteAllWidgets)(e), (0, c.createWidgets)(a.default.getDefaultLayout(e)))
        },
        setClickZones(e) {
            s.default.dispatch({
                type: "OVERLAY_SET_CLICK_ZONES",
                zones: e
            })
        },
        relayClickZoneClicked(e, t, n) {
            s.default.dispatch({
                type: "OVERLAY_RELAY_CLICK_ZONE_CLICKED",
                zoneName: e,
                normalizedMouseX: t,
                normalizedMouseY: n
            })
        },
        setAssociatedGame(e, t, n) {
            s.default.dispatch({
                type: "OVERLAY_SET_ASSOCIATED_GAME",
                previousAssociatedGamePID: e,
                associatedGamePID: t,
                associatedGame: n
            })
        },
        notifyReadyToShow(e) {
            s.default.dispatch({
                type: "OVERLAY_NOTIFY_READY_TO_SHOW",
                pid: e
            })
        }
    };
    var h = _
}