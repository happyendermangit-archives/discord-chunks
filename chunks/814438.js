function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("153832"),
        o = n("629815"),
        i = n("10279"),
        a = n("990790"),
        u = n("215927"),
        s = n("290976"),
        l = n("411686"),
        c = n("359212"),
        f = n("33928"),
        d = n("281767");

    function _(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function E(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }

    function p(e, t) {
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

    function m(e, t) {
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
                if ("string" == typeof e) return _(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var y = {
        track: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (!__OVERLAY__) throw Error("OverlayActionCreators.track: Must be called within Overlay context");
            (0, i.trackWithOverlayMetadata)(e, t, n)
        },
        overlayReady: function(e) {
            o.default.dispatch({
                type: "OVERLAY_READY",
                pid: e
            })
        },
        overlayMounted: function(e) {
            o.default.dispatch({
                type: "OVERLAY_MOUNTED",
                nudge: e
            })
        },
        setFocusedPID: function(e) {
            o.default.dispatch({
                type: "OVERLAY_FOCUSED",
                pid: e
            })
        },
        setInputLocked: function(e, t) {
            o.default.dispatch({
                type: "OVERLAY_SET_INPUT_LOCKED",
                locked: e,
                pid: t
            })
        },
        setUILocked: function(e, t) {
            o.default.dispatch({
                type: "OVERLAY_SET_UI_LOCKED",
                locked: e,
                pid: t
            })
        },
        setLocked: function(e, t) {
            o.default.dispatch({
                type: "OVERLAY_SET_INPUT_LOCKED",
                locked: e,
                pid: t
            }), o.default.dispatch({
                type: "OVERLAY_SET_UI_LOCKED",
                locked: e,
                pid: t
            })
        },
        setInstanceLocked: function(e) {
            if (!__OVERLAY__) throw Error("OverlayActionCreators.setInstanceLocked: Must be called within Overlay context");
            y.setLocked(e, (0, c.getPID)())
        },
        setEnabled: function(e, t) {
            o.default.dispatch({
                type: "OVERLAY_SET_ENABLED",
                enabled: e,
                legacyEnabled: t
            })
        },
        selectCall: function(e) {
            o.default.dispatch({
                type: "OVERLAY_SELECT_CALL",
                callId: e
            })
        },
        setDisplayNameMode: function(e) {
            o.default.dispatch({
                type: "OVERLAY_SET_DISPLAY_NAME_MODE",
                mode: e
            })
        },
        setDisplayUserMode: function(e) {
            o.default.dispatch({
                type: "OVERLAY_SET_DISPLAY_USER_MODE",
                mode: e
            })
        },
        setAvatarSizeMode: function(e) {
            o.default.dispatch({
                type: "OVERLAY_SET_AVATAR_SIZE_MODE",
                mode: e
            })
        },
        setNotificationPositionMode: function(e) {
            o.default.dispatch({
                type: "OVERLAY_SET_NOTIFICATION_POSITION_MODE",
                mode: e
            })
        },
        setTextChatNotificationMode: function(e) {
            o.default.dispatch({
                type: "OVERLAY_SET_TEXT_CHAT_NOTIFICATION_MODE",
                mode: e
            })
        },
        setShowKeybindIndicators: function(e) {
            o.default.dispatch({
                type: "OVERLAY_SET_SHOW_KEYBIND_INDICATORS",
                shouldShow: e
            })
        },
        callPrivateChannel: function(e, t) {
            o.default.dispatch({
                type: "OVERLAY_CALL_PRIVATE_CHANNEL",
                channelId: e,
                ring: t
            })
        },
        setTextWidgetOpacity: function(e) {
            o.default.dispatch({
                type: "OVERLAY_SET_TEXT_WIDGET_OPACITY",
                opacity: e
            })
        },
        disableExternalLinkAlert: function() {
            o.default.dispatch({
                type: "OVERLAY_DISABLE_EXTERNAL_LINK_ALERT"
            })
        },
        startSession: function() {
            if (!__OVERLAY__) throw Error("Attempting to start an overlay session outside of the overlay context");
            o.default.dispatch({
                type: "OVERLAY_START_SESSION"
            })
        },
        activateRegion: function(e) {
            o.default.dispatch({
                type: "OVERLAY_ACTIVATE_REGION",
                region: e
            })
        },
        deactivateAllRegions: function() {
            o.default.dispatch({
                type: "OVERLAY_DEACTIVATE_ALL_REGIONS"
            })
        },
        setPreviewInGameMode: function(e) {
            o.default.dispatch({
                type: "OVERLAY_SET_PREVIEW_IN_GAME_MODE",
                isPreviewingInGame: e
            })
        },
        updateNotificationStatus: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.OverlayNotificationStatus.DISMISSED;
            o.default.dispatch({
                type: "OVERLAY_UPDATE_NOTIFICATION_STATUS",
                notificationId: e,
                status: t
            })
        },
        notificationEvent: function(e, t) {
            var n, r, i = u.default.getGame();
            o.default.dispatch({
                type: "OVERLAY_NOTIFICATION_EVENT",
                notificationType: e,
                action: t,
                gameName: null !== (n = null == i ? void 0 : i.name) && void 0 !== n ? n : null,
                gameId: null !== (r = null == i ? void 0 : i.id) && void 0 !== r ? r : null
            })
        },
        setPinChat: function(e) {
            var t = c.OVERLAY_LAYOUT_ID,
                n = a.default.getWidgetsForLayout(t),
                o = a.default.getWidgetConfig(d.OverlayWidgets.GUILDS),
                i = a.default.getWidgetConfig(d.OverlayWidgets.TEXT),
                u = a.default.getWidgetConfig(d.OverlayWidgets.GUILDS_TEXT);
            if (0 !== n.length && null != o && null != i && null != u) {
                var _ = s.default.windowSize(),
                    y = {
                        width: 0,
                        height: 0
                    },
                    I = {
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0
                    },
                    h = {
                        width: 312,
                        height: 0
                    },
                    O = {
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0
                    },
                    T = {
                        width: 0,
                        height: 0
                    };
                if (n.forEach(function(e) {
                        var t = e.type,
                            n = e.id,
                            r = e.anchor,
                            o = e.size;
                        switch (t) {
                            case d.OverlayWidgets.TEXT:
                                y = (0, l.getSizeFromLayoutSize)(o, _), (0, f.deleteWidget)(n);
                                break;
                            case d.OverlayWidgets.GUILDS:
                                I = (0, l.getFullCoordsFromLayoutSize)(r, o, _), h = (0, l.getSizeFromLayoutSize)(o, _), (0, f.deleteWidget)(n);
                                break;
                            case d.OverlayWidgets.GUILDS_TEXT:
                                O = (0, l.getFullCoordsFromLayoutSize)(r, o, _), T = (0, l.getSizeFromLayoutSize)(o, _), (0, f.deleteWidget)(n)
                        }
                    }), e) {
                    var S = "auto" === T.width ? u.minSize.width : T.width;
                    S -= o.minSize.width;
                    var v = m((0, l.getLeftWidgetSpecs)(O, p(E({}, T), {
                            width: o.minSize.width
                        }), _), 2),
                        g = v[0],
                        A = v[1],
                        b = m((0, l.getRightWidgetSpecs)(O, p(E({}, T), {
                            width: S
                        }), _, {
                            x: 10,
                            y: 10
                        }), 2),
                        N = b[0],
                        R = b[1],
                        C = a.default.getWidgetDefaultSettings(d.OverlayWidgets.TEXT);
                    if (null == C) throw Error("OverlayActionCreators.setPinChat: No config for TEXT exists");
                    (0, f.createWidget)(p(E({}, C), {
                        type: d.OverlayWidgets.TEXT,
                        id: (0, r.v4)(),
                        size: R,
                        anchor: N,
                        layoutId: t
                    }));
                    var P = a.default.getWidgetDefaultSettings(d.OverlayWidgets.GUILDS);
                    if (null == P) throw Error("OverlayActionCreators.setPinChat: No config for GUILDS exists");
                    (0, f.createWidget)(p(E({}, P), {
                        type: d.OverlayWidgets.GUILDS,
                        id: (0, r.v4)(),
                        size: A,
                        anchor: g,
                        layoutId: t
                    }))
                } else {
                    var D = "auto" === y.width ? i.minSize.width : y.width;
                    D += o.minSize.width;
                    var L = m((0, l.getLeftWidgetSpecs)(I, {
                            height: h.height,
                            width: D
                        }, _), 2),
                        M = L[0],
                        U = L[1],
                        w = a.default.getWidgetDefaultSettings(d.OverlayWidgets.GUILDS_TEXT);
                    if (null == w) throw Error("OverlayActionCreators.setPinChat: No config for GUILDS_TEXT exists");
                    (0, f.createWidget)(p(E({}, w), {
                        type: d.OverlayWidgets.GUILDS_TEXT,
                        id: (0, r.v4)(),
                        layoutId: t,
                        anchor: M,
                        size: U
                    }))
                }
            }
        },
        resetDefaultLayout: function(e) {
            null != a.default.getLayout(e) && ((0, f.deleteAllWidgets)(e), (0, f.createWidgets)(a.default.getDefaultLayout(e)))
        },
        setClickZones: function(e) {
            o.default.dispatch({
                type: "OVERLAY_SET_CLICK_ZONES",
                zones: e
            })
        },
        relayClickZoneClicked: function(e, t, n) {
            o.default.dispatch({
                type: "OVERLAY_RELAY_CLICK_ZONE_CLICKED",
                zoneName: e,
                normalizedMouseX: t,
                normalizedMouseY: n
            })
        },
        setAssociatedGame: function(e, t, n) {
            o.default.dispatch({
                type: "OVERLAY_SET_ASSOCIATED_GAME",
                previousAssociatedGamePID: e,
                associatedGamePID: t,
                associatedGame: n
            })
        },
        notifyReadyToShow: function(e) {
            o.default.dispatch({
                type: "OVERLAY_NOTIFY_READY_TO_SHOW",
                pid: e
            })
        },
        successfullyShown: function(e) {
            o.default.dispatch({
                type: "OVERLAY_SUCCESSFULLY_SHOWN",
                pid: e
            })
        }
    };
    t.default = y
}