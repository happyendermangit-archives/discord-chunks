function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("411104");
    var i, r = n("442837"),
        s = n("433517"),
        a = n("570140"),
        o = n("284737"),
        l = n("490029"),
        u = n("48481"),
        d = n("131704"),
        _ = n("314897"),
        c = n("592125"),
        E = n("984933"),
        I = n("355863"),
        T = n("914010"),
        f = n("358085"),
        S = n("998502"),
        h = n("145597"),
        A = n("451478"),
        m = n("981631"),
        N = n("987650");

    function p(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let O = Object.freeze({
            selectedGuildId: null,
            selectedChannelId: null,
            displayUserMode: m.OverlayDisplayUsers.ALWAYS,
            displayNameMode: m.OverlayDisplayNames.ALWAYS,
            avatarSizeMode: m.OverlayAvatarSizes.LARGE,
            notificationPositionMode: m.OverlayNotificationPositions.TOP_LEFT,
            textChatNotifications: m.OverlayNotificationTextChatTypes.ENABLED,
            disableExternalLinkAlert: !1,
            disablePinTutorial: !1,
            showKeybindIndicators: !0,
            textWidgetOpacity: N.OpacityBounds.LOWER
        }),
        R = null,
        C = {},
        g = null,
        L = new Set,
        D = !1,
        v = null,
        M = !1,
        y = !1,
        P = new Set,
        U = !1;

    function b(e) {
        let t = C[e];
        return null == t && (t = C[e] = {
            ...O
        }), t
    }
    let G = {
            ...O
        },
        w = new Set(["AUDIO_SET_INPUT_DEVICE", "AUDIO_SET_INPUT_VOLUME", "AUDIO_SET_LOCAL_VIDEO_DISABLED", "AUDIO_SET_LOCAL_VOLUME", "AUDIO_SET_MODE", "AUDIO_SET_NOISE_CANCELLATION", "AUDIO_SET_NOISE_SUPPRESSION", "AUDIO_SET_OUTPUT_DEVICE", "AUDIO_SET_OUTPUT_VOLUME", "AUDIO_TOGGLE_LOCAL_MUTE", "AUDIO_TOGGLE_SELF_DEAF", "AUDIO_TOGGLE_SELF_MUTE", "BILLING_SUBSCRIPTION_UPDATE_SUCCESS", "CATEGORY_COLLAPSE", "CATEGORY_EXPAND", "CHANNEL_ACK", "CHANNEL_PRELOAD", "GIFT_CODE_REDEEM", "GIFT_CODE_REDEEM_FAILURE", "GIFT_CODE_REDEEM_SUCCESS", "HOTSPOT_HIDE", "INVITE_MODAL_CLOSE", "LAYOUT_CREATE", "LAYOUT_CREATE_WIDGETS", "LAYOUT_DELETE_ALL_WIDGETS", "LAYOUT_DELETE_WIDGET", "LAYOUT_SET_PINNED", "LAYOUT_SET_TOP_WIDGET", "LAYOUT_UPDATE_WIDGET", "LOAD_MESSAGES", "LOAD_MESSAGES_FAILURE", "LOAD_MESSAGES_SUCCESS", "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", "OVERLAY_ACTIVATE_REGION", "OVERLAY_DEACTIVATE_ALL_REGIONS", "OVERLAY_MESSAGE_EVENT_ACTION", "OVERLAY_SET_AVATAR_SIZE_MODE", "OVERLAY_SET_CLICK_ZONES", "OVERLAY_SET_DISPLAY_NAME_MODE", "OVERLAY_SET_DISPLAY_USER_MODE", "OVERLAY_SET_INPUT_LOCKED", "OVERLAY_SET_NOTIFICATION_POSITION_MODE", "OVERLAY_SET_TEXT_CHAT_NOTIFICATION_MODE", "OVERLAY_SET_SHOW_KEYBIND_INDICATORS", "OVERLAY_SET_TEXT_WIDGET_OPACITY", "OVERLAY_SET_UI_LOCKED", "OVERLAY_NOTIFY_READY_TO_SHOW", "PREMIUM_PAYMENT_ERROR_CLEAR", "PREMIUM_PAYMENT_MODAL_CLOSE", "PREMIUM_PAYMENT_MODAL_OPEN", "PREMIUM_PAYMENT_SUBSCRIBE_FAIL", "PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS", "PREMIUM_PAYMENT_UPDATE_FAIL", "PREMIUM_PAYMENT_UPDATE_SUCCESS", "PREMIUM_REQUIRED_MODAL_CLOSE", "PREMIUM_REQUIRED_MODAL_OPEN", "PURCHASE_CONFIRMATION_MODAL_CLOSE", "PURCHASE_CONFIRMATION_MODAL_OPEN", "SKU_PURCHASE_CLEAR_ERROR", "SKU_PURCHASE_FAIL", "SKU_PURCHASE_MODAL_CLOSE", "SKU_PURCHASE_MODAL_OPEN", "SKU_PURCHASE_PREVIEW_FETCH_SUCCESS", "SKU_PURCHASE_SHOW_CONFIRMATION_STEP", "SKU_PURCHASE_START", "SKU_PURCHASE_SUCCESS", "STREAM_CLOSE", "STREAM_START", "VOICE_CHANNEL_SELECT", "USER_SETTINGS_PROTO_ENQUEUE_UPDATE", "USER_SETTINGS_PROTO_LOAD_IF_NECESSARY"]),
        k = new Set([...w.values(), "ACTIVITY_INVITE_MODAL_CLOSE", "CALL_DELETE", "CHANNEL_COLLAPSE", "CHANNEL_SELECT", "GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY", "OVERLAY_CALL_PRIVATE_CHANNEL", "OVERLAY_JOIN_GAME", "OVERLAY_NOTIFICATION_EVENT", "OVERLAY_SELECT_CALL", "OVERLAY_SET_NOT_IDLE", "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST", "OVERLAY_WIDGET_CHANGED", "SOUNDBOARD_SET_OVERLAY_ENABLED", "STREAM_STOP"]);

    function B() {
        if (!__OVERLAY__) return !1;
        let e = R === (0, h.getPID)(),
            t = L.has((0, h.getPID)()) || P.size > 0;
        e && t ? (0, o.focus)(window, !0) : (0, o.focus)(window, !1)
    }

    function F() {
        if (R !== (0, h.getPID)()) return !1;
        P.clear()
    }

    function V(e) {
        let t = (0, h.getPID)();
        if (null == e.pid || e.pid === t) switch (e.type) {
            case m.OverlayEventTypes.STORAGE_SYNC:
                r.default.PersistedStore.initializeAll(e.states);
                break;
            case m.OverlayEventTypes.DISPATCH:
                null != e.payloads && (M = !0, e.payloads.forEach(e => (function(e) {
                    var t, n, i, r, s, o;
                    if ("OVERLAY_INITIALIZE" === e.type && (null == (o = e).version && 1 === h.OVERLAY_VERSION || o.version === h.OVERLAY_VERSION || (a.default.dispatch({
                            type: "OVERLAY_INCOMPATIBLE_APP"
                        }), (0, l.disconnect)(), 0))) y = !0;
                    if (y) switch (e.type) {
                        case "CHANNEL_CREATE":
                        case "THREAD_CREATE":
                        case "THREAD_UPDATE":
                        case "CHANNEL_DELETE":
                        case "THREAD_DELETE":
                            let _ = (0, d.createChannelRecord)(e.channel);
                            if (!d.ALL_CHANNEL_TYPES.has(_.type)) break;
                            a.default.dispatch({
                                type: e.type,
                                channel: _
                            });
                            break;
                        case "CHANNEL_UPDATES":
                            a.default.dispatch({
                                type: e.type,
                                channels: e.channels.map(e => (0, d.createChannelRecord)(e))
                            });
                            break;
                        case "CONNECTION_OPEN_SUPPLEMENTAL":
                            e.lazyPrivateChannels = (null !== (t = e.lazyPrivateChannels) && void 0 !== t ? t : []).map(e => (0, d.createChannelRecord)(e)), a.default.dispatch(e);
                            break;
                        case "THREAD_LIST_SYNC":
                            a.default.dispatch({
                                ...e,
                                threads: e.threads.map(e => (0, d.createChannelRecord)(e))
                            });
                            break;
                        case "GUILD_CREATE":
                            let c = e => (0, d.createChannelRecord)(e),
                                E = e.guild;
                            E.channels = null !== (r = null === (n = E.channels) || void 0 === n ? void 0 : n.map(c)) && void 0 !== r ? r : null, E.threads = null === (i = E.threads) || void 0 === i ? void 0 : i.map(c), null != E.channelUpdates && (E.channelUpdates.writes = null === (s = E.channelUpdates.writes) || void 0 === s ? void 0 : s.map(c)), a.default.dispatch({
                                type: "GUILD_CREATE",
                                guild: E
                            });
                            break;
                        case "USER_SETTINGS_PROTO_UPDATE":
                            a.default.dispatch({
                                ...e,
                                settings: {
                                    proto: (0, u.b64ToProtoWithType)(e.settings.type, e.settings.proto),
                                    type: e.settings.type
                                }
                            });
                            break;
                        default:
                            a.default.dispatch(e)
                    }
                })(e)), M = !1)
        }
    }
    class x extends(i = r.default.PersistedStore) {
        initialize(e) {
            if (this.waitFor(_.default), this.syncWith([_.default], () => {
                    let e = _.default.getId();
                    G = null != e ? b(e) : {
                        ...O
                    }
                }), __OVERLAY__ && (f.isPlatformEmbedded && S.default.requireModule("discord_overlay2"), L.delete((0, h.getPID)())), null != e) {
                C = e;
                let t = _.default.getId();
                null != t && (null == (G = b(t)).textChatNotifications && (G.textChatNotifications = O.textChatNotifications), null == G.textWidgetOpacity && (G.textWidgetOpacity = O.textWidgetOpacity))
            }
        }
        getState() {
            return C
        }
        isUILocked(e) {
            return !L.has(e)
        }
        isInstanceUILocked() {
            if (!__OVERLAY__) throw Error("OverlayStore: App instance should never call .isInstanceUILocked()");
            return !L.has((0, h.getPID)())
        }
        isInstanceFocused() {
            if (!__OVERLAY__) throw Error("OverlayStore: App instance should never call .isInstanceFocused()");
            return R === (0, h.getPID)()
        }
        isFocused(e) {
            return R === e
        }
        isPinned(e) {
            let t = I.default.getLayout(h.OVERLAY_LAYOUT_ID);
            return null != t && null != t.widgets.find(t => {
                let n = I.default.getWidget(t);
                return null != n && n.type === e && !!n.pinned || !1
            })
        }
        getSelectedGuildId() {
            return G.selectedGuildId
        }
        getSelectedChannelId() {
            return G.selectedChannelId
        }
        getSelectedCallId() {
            return g
        }
        getDisplayUserMode() {
            return G.displayUserMode
        }
        getDisplayNameMode() {
            return G.displayNameMode
        }
        getAvatarSizeMode() {
            return G.avatarSizeMode
        }
        getNotificationPositionMode() {
            return G.notificationPositionMode
        }
        getTextChatNotificationMode() {
            return G.notificationPositionMode === m.OverlayNotificationPositions.DISABLED ? m.OverlayNotificationTextChatTypes.DISABLED : G.textChatNotifications
        }
        get showKeybindIndicators() {
            return null == G.showKeybindIndicators || G.showKeybindIndicators
        }
        getDisableExternalLinkAlert() {
            return G.disableExternalLinkAlert
        }
        getFocusedPID() {
            return R
        }
        get initialized() {
            return y
        }
        get incompatibleApp() {
            return D
        }
        getActiveRegions() {
            return P
        }
        getTextWidgetOpacity() {
            return G.textWidgetOpacity
        }
        isPreviewingInGame() {
            return U
        }
    }
    p(x, "displayName", "OverlayStore"), p(x, "persistKey", "OverlayStoreV2"), p(x, "migrations", [() => {
        let {
            pinnedWidgets: e,
            positions: t,
            sizes: n,
            v: i,
            ...r
        } = {
            ...s.Storage.get("OverlayStore")
        };
        return {
            ...O,
            ...5 === i ? r : null
        }
    }, e => {
        let t = _.default.getId();
        return null == e || null == t ? {} : {
            [t]: {
                ...e
            }
        }
    }]), t.default = new x(a.default, {
        LOGOUT: function(e) {
            !e.isSwitchingAccount && (C = {})
        },
        MULTI_ACCOUNT_REMOVE_ACCOUNT: function(e) {
            e.userId in C && delete C[e.userId]
        },
        CONNECTION_CLOSED: function() {
            L.clear()
        },
        OVERLAY_START_SESSION: function() {
            a.default.addInterceptor(e => {
                if (M || !k.has(e.type)) return !1;
                if ("CHANNEL_SELECT" === e.type) {
                    let {
                        guildId: t,
                        channelId: n
                    } = e;
                    return null != n && ((0, l.send)({
                        type: m.OverlayEventTypes.DISPATCH,
                        pid: (0, h.getPID)(),
                        token: (0, h.getRPCAuthToken)(),
                        payloads: [{
                            type: "CHANNEL_PRELOAD",
                            guildId: t === m.ME ? null : t,
                            channelId: n,
                            context: m.CURRENT_APP_CONTEXT
                        }, {
                            type: "OVERLAY_SELECT_CHANNEL",
                            guildId: t,
                            channelId: n
                        }]
                    }), !1)
                }
                return (0, l.send)({
                    type: m.OverlayEventTypes.DISPATCH,
                    pid: (0, h.getPID)(),
                    token: (0, h.getRPCAuthToken)(),
                    payloads: [e]
                }), !w.has(e.type)
            }), (0, l.setReceiveEventHandler)(V, (0, h.getRPCAuthToken)()), (0, l.connect)(), (0, l.send)({
                type: m.OverlayEventTypes.CONNECT,
                pid: (0, h.getPID)(),
                token: (0, h.getRPCAuthToken)()
            })
        },
        OVERLAY_INITIALIZE: function(e) {
            let {
                focusedPID: t
            } = e;
            R = t
        },
        OVERLAY_READY: function() {
            let e = G.selectedGuildId,
                t = G.selectedChannelId;
            if (null != e && (!E.default.hasChannels(e) || null != t && !E.default.hasSelectableChannel(e, t)) && (e = null, t = null), null != t && null == c.default.getChannel(t) && (e = null, t = null), null == e && null == t && (e = T.default.getGuildId()), null != e && null == t) {
                let n = E.default.getDefaultChannel(e);
                null != n && (t = n.id)
            }
            G.selectedGuildId = e, G.selectedChannelId = t
        },
        OVERLAY_FOCUSED: function(e) {
            let {
                pid: t
            } = e;
            R = t, B()
        },
        OVERLAY_SELECT_CHANNEL: function(e) {
            let {
                guildId: t,
                channelId: n
            } = e;
            G.selectedGuildId = t, G.selectedChannelId = n
        },
        OVERLAY_SELECT_CALL: function(e) {
            let {
                callId: t
            } = e;
            g = t
        },
        CALL_DELETE: function() {
            g = null
        },
        LAYOUT_CREATE: function() {},
        OVERLAY_SET_DISPLAY_NAME_MODE: function(e) {
            let {
                mode: t
            } = e;
            G.displayNameMode = t
        },
        OVERLAY_SET_DISPLAY_USER_MODE: function(e) {
            let {
                mode: t
            } = e;
            G.displayUserMode = t
        },
        OVERLAY_SET_AVATAR_SIZE_MODE: function(e) {
            let {
                mode: t
            } = e;
            G.avatarSizeMode = t
        },
        OVERLAY_SET_NOTIFICATION_POSITION_MODE: function(e) {
            let {
                mode: t
            } = e;
            G.notificationPositionMode = t
        },
        OVERLAY_SET_TEXT_CHAT_NOTIFICATION_MODE: function(e) {
            let {
                mode: t
            } = e;
            G.textChatNotifications = t
        },
        OVERLAY_SET_SHOW_KEYBIND_INDICATORS: function(e) {
            let {
                shouldShow: t
            } = e;
            G.showKeybindIndicators = t
        },
        OVERLAY_SET_TEXT_WIDGET_OPACITY: function(e) {
            let {
                opacity: t
            } = e, n = G.textWidgetOpacity !== t;
            return G.textWidgetOpacity = t, n
        },
        OVERLAY_DISABLE_EXTERNAL_LINK_ALERT: function() {
            G.disableExternalLinkAlert = !0
        },
        OVERLAY_INCOMPATIBLE_APP: function() {
            D = !0
        },
        OVERLAY_SET_UI_LOCKED: function(e) {
            let {
                locked: t,
                pid: n
            } = e;
            t ? L.delete(n) : L.add(n), F(), B(), U = !1
        },
        OVERLAY_ACTIVATE_REGION: function(e) {
            let {
                region: t
            } = e;
            if (R !== (0, h.getPID)() || P.has(t)) return !1;
            P.add(t)
        },
        OVERLAY_DEACTIVATE_ALL_REGIONS: F,
        OVERLAY_SET_PREVIEW_IN_GAME_MODE: function(e) {
            U = e.isPreviewingInGame
        },
        WINDOW_RESIZED: function() {
            if (__OVERLAY__) {
                let e = A.default.windowSize();
                !(0, h.validResolution)(e) && (U = !1)
            }
        },
        OVERLAY_SET_ASSOCIATED_GAME: function(e) {
            L.delete(e.previousAssociatedGamePID)
        }
    })
}