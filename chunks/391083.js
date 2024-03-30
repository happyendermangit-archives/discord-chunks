function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i = n("898511"),
        a = n("242880"),
        u = n("629815"),
        s = n("619378"),
        l = n("559264"),
        c = n("428249"),
        f = n("569492"),
        d = n("217014"),
        _ = n("935741"),
        E = n("29604"),
        p = n("990790"),
        m = n("63116"),
        y = n("374550"),
        I = n("131900"),
        h = n("359212"),
        O = n("290976"),
        T = n("281767"),
        S = n("336734");

    function v(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function g(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function A(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function b(e) {
        return (b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function N(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                A(e, t, n[t])
            })
        }
        return e
    }

    function R(e, t) {
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

    function C(e, t) {
        return (C = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var P = Object.freeze({
            selectedGuildId: null,
            selectedChannelId: null,
            displayUserMode: T.OverlayDisplayUsers.ALWAYS,
            displayNameMode: T.OverlayDisplayNames.ALWAYS,
            avatarSizeMode: T.OverlayAvatarSizes.LARGE,
            notificationPositionMode: T.OverlayNotificationPositions.TOP_LEFT,
            textChatNotifications: T.OverlayNotificationTextChatTypes.ENABLED,
            disableExternalLinkAlert: !1,
            disablePinTutorial: !1,
            showKeybindIndicators: !0,
            textWidgetOpacity: S.OpacityBounds.LOWER
        }),
        D = null,
        L = {},
        M = null,
        U = new Set,
        w = !1,
        k = null,
        G = !1,
        B = !1,
        j = new Set,
        F = !1;

    function V(e) {
        var t = L[e];
        return null == t && (t = L[e] = N({}, P)), t
    }
    var H = N({}, P),
        x = new Set(["AUDIO_SET_INPUT_DEVICE", "AUDIO_SET_INPUT_VOLUME", "AUDIO_SET_LOCAL_VIDEO_DISABLED", "AUDIO_SET_LOCAL_VOLUME", "AUDIO_SET_MODE", "AUDIO_SET_NOISE_CANCELLATION", "AUDIO_SET_NOISE_SUPPRESSION", "AUDIO_SET_OUTPUT_DEVICE", "AUDIO_SET_OUTPUT_VOLUME", "AUDIO_TOGGLE_LOCAL_MUTE", "AUDIO_TOGGLE_SELF_DEAF", "AUDIO_TOGGLE_SELF_MUTE", "BILLING_SUBSCRIPTION_UPDATE_SUCCESS", "CATEGORY_COLLAPSE", "CATEGORY_EXPAND", "CHANNEL_ACK", "CHANNEL_PRELOAD", "GIFT_CODE_REDEEM", "GIFT_CODE_REDEEM_FAILURE", "GIFT_CODE_REDEEM_SUCCESS", "HOTSPOT_HIDE", "INVITE_MODAL_CLOSE", "LAYOUT_CREATE", "LAYOUT_CREATE_WIDGETS", "LAYOUT_DELETE_ALL_WIDGETS", "LAYOUT_DELETE_WIDGET", "LAYOUT_SET_PINNED", "LAYOUT_SET_TOP_WIDGET", "LAYOUT_UPDATE_WIDGET", "LOAD_MESSAGES", "LOAD_MESSAGES_FAILURE", "LOAD_MESSAGES_SUCCESS", "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", "OVERLAY_ACTIVATE_REGION", "OVERLAY_DEACTIVATE_ALL_REGIONS", "OVERLAY_MESSAGE_EVENT_ACTION", "OVERLAY_SET_AVATAR_SIZE_MODE", "OVERLAY_SET_CLICK_ZONES", "OVERLAY_SET_DISPLAY_NAME_MODE", "OVERLAY_SET_DISPLAY_USER_MODE", "OVERLAY_SET_INPUT_LOCKED", "OVERLAY_SET_NOTIFICATION_POSITION_MODE", "OVERLAY_SET_TEXT_CHAT_NOTIFICATION_MODE", "OVERLAY_SET_SHOW_KEYBIND_INDICATORS", "OVERLAY_SET_TEXT_WIDGET_OPACITY", "OVERLAY_SET_UI_LOCKED", "OVERLAY_NOTIFY_READY_TO_SHOW", "PREMIUM_PAYMENT_ERROR_CLEAR", "PREMIUM_PAYMENT_MODAL_CLOSE", "PREMIUM_PAYMENT_MODAL_OPEN", "PREMIUM_PAYMENT_SUBSCRIBE_FAIL", "PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS", "PREMIUM_PAYMENT_UPDATE_FAIL", "PREMIUM_PAYMENT_UPDATE_SUCCESS", "PREMIUM_REQUIRED_MODAL_CLOSE", "PREMIUM_REQUIRED_MODAL_OPEN", "PURCHASE_CONFIRMATION_MODAL_CLOSE", "PURCHASE_CONFIRMATION_MODAL_OPEN", "SKU_PURCHASE_CLEAR_ERROR", "SKU_PURCHASE_FAIL", "SKU_PURCHASE_MODAL_CLOSE", "SKU_PURCHASE_MODAL_OPEN", "SKU_PURCHASE_PREVIEW_FETCH_SUCCESS", "SKU_PURCHASE_SHOW_CONFIRMATION_STEP", "SKU_PURCHASE_START", "SKU_PURCHASE_SUCCESS", "STREAM_CLOSE", "STREAM_START", "VOICE_CHANNEL_SELECT", "USER_SETTINGS_PROTO_ENQUEUE_UPDATE", "USER_SETTINGS_PROTO_LOAD_IF_NECESSARY"]);
    var Y = new Set(((function(e) {
        if (Array.isArray(e)) return v(e)
    })(r = x.values()) || function(e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
    }(r) || function(e, t) {
        if (e) {
            if ("string" == typeof e) return v(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return v(e, t)
        }
    }(r) || function() {
        throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()).concat(["ACTIVITY_INVITE_MODAL_CLOSE", "CALL_DELETE", "CHANNEL_COLLAPSE", "CHANNEL_SELECT", "GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY", "OVERLAY_CALL_PRIVATE_CHANNEL", "OVERLAY_JOIN_GAME", "OVERLAY_NOTIFICATION_EVENT", "OVERLAY_SELECT_CALL", "OVERLAY_SET_NOT_IDLE", "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST", "OVERLAY_WIDGET_CHANGED", "SOUNDBOARD_SET_OVERLAY_ENABLED", "STREAM_STOP"]));

    function W() {
        if (!__OVERLAY__) return !1;
        var e = D === (0, h.getPID)(),
            t = U.has((0, h.getPID)()) || j.size > 0;
        e && t ? (0, s.focus)(window, !0) : (0, s.focus)(window, !1)
    }

    function K() {
        if (D !== (0, h.getPID)()) return !1;
        j.clear()
    }

    function z(e) {
        var t = (0, h.getPID)();
        if (null == e.pid || e.pid === t) switch (e.type) {
            case T.OverlayEventTypes.STORAGE_SYNC:
                i.default.PersistedStore.initializeAll(e.states);
                break;
            case T.OverlayEventTypes.DISPATCH:
                null != e.payloads && (G = !0, e.payloads.forEach(function(e) {
                    return function(e) {
                        var t;
                        if ("OVERLAY_INITIALIZE" === e.type && (null == (t = e).version && 1 === h.OVERLAY_VERSION || t.version === h.OVERLAY_VERSION || (u.default.dispatch({
                                type: "OVERLAY_INCOMPATIBLE_APP"
                            }), (0, l.disconnect)(), 0))) B = !0;
                        if (B) switch (e.type) {
                            case "CHANNEL_CREATE":
                            case "THREAD_CREATE":
                            case "THREAD_UPDATE":
                            case "CHANNEL_DELETE":
                            case "THREAD_DELETE":
                                var n = (0, f.createChannelRecord)(e.channel);
                                if (!f.ALL_CHANNEL_TYPES.has(n.type)) break;
                                u.default.dispatch({
                                    type: e.type,
                                    channel: n
                                });
                                break;
                            case "CHANNEL_UPDATES":
                                u.default.dispatch({
                                    type: e.type,
                                    channels: e.channels.map(function(e) {
                                        return (0, f.createChannelRecord)(e)
                                    })
                                });
                                break;
                            case "CONNECTION_OPEN_SUPPLEMENTAL":
                                e.lazyPrivateChannels = (null !== (r = e.lazyPrivateChannels) && void 0 !== r ? r : []).map(function(e) {
                                    return (0, f.createChannelRecord)(e)
                                }), u.default.dispatch(e);
                                break;
                            case "THREAD_LIST_SYNC":
                                u.default.dispatch(R(N({}, e), {
                                    threads: e.threads.map(function(e) {
                                        return (0, f.createChannelRecord)(e)
                                    })
                                }));
                                break;
                            case "GUILD_CREATE":
                                var r, o, i, a, s, d = function(e) {
                                        return (0, f.createChannelRecord)(e)
                                    },
                                    _ = e.guild;
                                _.channels = null !== (a = null === (o = _.channels) || void 0 === o ? void 0 : o.map(d)) && void 0 !== a ? a : null, _.threads = null === (i = _.threads) || void 0 === i ? void 0 : i.map(d), null != _.channelUpdates && (_.channelUpdates.writes = null === (s = _.channelUpdates.writes) || void 0 === s ? void 0 : s.map(d)), u.default.dispatch({
                                    type: "GUILD_CREATE",
                                    guild: _
                                });
                                break;
                            case "USER_SETTINGS_PROTO_UPDATE":
                                u.default.dispatch(R(N({}, e), {
                                    settings: {
                                        proto: (0, c.b64ToProtoWithType)(e.settings.type, e.settings.proto),
                                        type: e.settings.type
                                    }
                                }));
                                break;
                            default:
                                u.default.dispatch(e)
                        }
                    }(e)
                }), G = !1)
        }
    }
    var X = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && C(e, t)
        }(u, e);
        var t, n, r, o, i, a = (t = u, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = b(t);
            if (n) {
                var a = b(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function u() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, u), a.apply(this, arguments)
        }
        return r = u, o = [{
            key: "initialize",
            value: function(e) {
                if (this.waitFor(d.default), this.syncWith([d.default], function() {
                        var e = d.default.getId();
                        H = null != e ? V(e) : N({}, P)
                    }), __OVERLAY__ && (y.isPlatformEmbedded && I.default.requireModule("discord_overlay2"), U.delete((0, h.getPID)())), null != e) {
                    L = e;
                    var t = d.default.getId();
                    null != t && (null == (H = V(t)).textChatNotifications && (H.textChatNotifications = P.textChatNotifications), null == H.textWidgetOpacity && (H.textWidgetOpacity = P.textWidgetOpacity))
                }
            }
        }, {
            key: "getState",
            value: function() {
                return L
            }
        }, {
            key: "isUILocked",
            value: function(e) {
                return !U.has(e)
            }
        }, {
            key: "isInstanceUILocked",
            value: function() {
                if (!__OVERLAY__) throw Error("OverlayStore: App instance should never call .isInstanceUILocked()");
                return !U.has((0, h.getPID)())
            }
        }, {
            key: "isInstanceFocused",
            value: function() {
                if (!__OVERLAY__) throw Error("OverlayStore: App instance should never call .isInstanceFocused()");
                return D === (0, h.getPID)()
            }
        }, {
            key: "isFocused",
            value: function(e) {
                return D === e
            }
        }, {
            key: "isPinned",
            value: function(e) {
                var t = p.default.getLayout(h.OVERLAY_LAYOUT_ID);
                return null != t && null != t.widgets.find(function(t) {
                    var n = p.default.getWidget(t);
                    return null != n && n.type === e && !!n.pinned || !1
                })
            }
        }, {
            key: "getSelectedGuildId",
            value: function() {
                return H.selectedGuildId
            }
        }, {
            key: "getSelectedChannelId",
            value: function() {
                return H.selectedChannelId
            }
        }, {
            key: "getSelectedCallId",
            value: function() {
                return M
            }
        }, {
            key: "getDisplayUserMode",
            value: function() {
                return H.displayUserMode
            }
        }, {
            key: "getDisplayNameMode",
            value: function() {
                return H.displayNameMode
            }
        }, {
            key: "getAvatarSizeMode",
            value: function() {
                return H.avatarSizeMode
            }
        }, {
            key: "getNotificationPositionMode",
            value: function() {
                return H.notificationPositionMode
            }
        }, {
            key: "getTextChatNotificationMode",
            value: function() {
                return H.notificationPositionMode === T.OverlayNotificationPositions.DISABLED ? T.OverlayNotificationTextChatTypes.DISABLED : H.textChatNotifications
            }
        }, {
            key: "showKeybindIndicators",
            get: function() {
                return null == H.showKeybindIndicators || H.showKeybindIndicators
            }
        }, {
            key: "getDisableExternalLinkAlert",
            value: function() {
                return H.disableExternalLinkAlert
            }
        }, {
            key: "getFocusedPID",
            value: function() {
                return D
            }
        }, {
            key: "initialized",
            get: function() {
                return B
            }
        }, {
            key: "incompatibleApp",
            get: function() {
                return w
            }
        }, {
            key: "getActiveRegions",
            value: function() {
                return j
            }
        }, {
            key: "getTextWidgetOpacity",
            value: function() {
                return H.textWidgetOpacity
            }
        }, {
            key: "isPreviewingInGame",
            value: function() {
                return F
            }
        }], g(r.prototype, o), i && g(r, i), u
    }(i.default.PersistedStore);
    A(X, "displayName", "OverlayStore"), A(X, "persistKey", "OverlayStoreV2"), A(X, "migrations", [function() {
        var e = N({}, a.Storage.get("OverlayStore"));
        e.pinnedWidgets, e.positions, e.sizes;
        var t = e.v,
            n = function(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }(e, ["pinnedWidgets", "positions", "sizes", "v"]);
        return N({}, P, 5 === t ? n : null)
    }, function(e) {
        var t = d.default.getId();
        return null == e || null == t ? {} : A({}, t, N({}, e))
    }]), t.default = new X(u.default, {
        LOGOUT: function(e) {
            !e.isSwitchingAccount && (L = {})
        },
        MULTI_ACCOUNT_REMOVE_ACCOUNT: function(e) {
            e.userId in L && delete L[e.userId]
        },
        CONNECTION_CLOSED: function() {
            U.clear()
        },
        OVERLAY_START_SESSION: function() {
            u.default.addInterceptor(function(e) {
                if (G || !Y.has(e.type)) return !1;
                if ("CHANNEL_SELECT" === e.type) {
                    var t = e.guildId,
                        n = e.channelId;
                    return null != n && ((0, l.send)({
                        type: T.OverlayEventTypes.DISPATCH,
                        pid: (0, h.getPID)(),
                        token: (0, h.getRPCAuthToken)(),
                        payloads: [{
                            type: "CHANNEL_PRELOAD",
                            guildId: t === T.ME ? null : t,
                            channelId: n,
                            context: T.CURRENT_APP_CONTEXT
                        }, {
                            type: "OVERLAY_SELECT_CHANNEL",
                            guildId: t,
                            channelId: n
                        }]
                    }), !1)
                }
                return (0, l.send)({
                    type: T.OverlayEventTypes.DISPATCH,
                    pid: (0, h.getPID)(),
                    token: (0, h.getRPCAuthToken)(),
                    payloads: [e]
                }), !x.has(e.type)
            }), (0, l.setReceiveEventHandler)(z, (0, h.getRPCAuthToken)()), (0, l.connect)(), (0, l.send)({
                type: T.OverlayEventTypes.CONNECT,
                pid: (0, h.getPID)(),
                token: (0, h.getRPCAuthToken)()
            })
        },
        OVERLAY_INITIALIZE: function(e) {
            D = e.focusedPID
        },
        OVERLAY_READY: function() {
            var e = H.selectedGuildId,
                t = H.selectedChannelId;
            if (null != e && (!E.default.hasChannels(e) || null != t && !E.default.hasSelectableChannel(e, t)) && (e = null, t = null), null != t && null == _.default.getChannel(t) && (e = null, t = null), null == e && null == t && (e = m.default.getGuildId()), null != e && null == t) {
                var n = E.default.getDefaultChannel(e);
                null != n && (t = n.id)
            }
            H.selectedGuildId = e, H.selectedChannelId = t
        },
        OVERLAY_FOCUSED: function(e) {
            D = e.pid, W()
        },
        OVERLAY_SELECT_CHANNEL: function(e) {
            var t = e.guildId,
                n = e.channelId;
            H.selectedGuildId = t, H.selectedChannelId = n
        },
        OVERLAY_SELECT_CALL: function(e) {
            M = e.callId
        },
        CALL_DELETE: function() {
            M = null
        },
        LAYOUT_CREATE: function() {},
        OVERLAY_SET_DISPLAY_NAME_MODE: function(e) {
            var t = e.mode;
            H.displayNameMode = t
        },
        OVERLAY_SET_DISPLAY_USER_MODE: function(e) {
            var t = e.mode;
            H.displayUserMode = t
        },
        OVERLAY_SET_AVATAR_SIZE_MODE: function(e) {
            var t = e.mode;
            H.avatarSizeMode = t
        },
        OVERLAY_SET_NOTIFICATION_POSITION_MODE: function(e) {
            var t = e.mode;
            H.notificationPositionMode = t
        },
        OVERLAY_SET_TEXT_CHAT_NOTIFICATION_MODE: function(e) {
            var t = e.mode;
            H.textChatNotifications = t
        },
        OVERLAY_SET_SHOW_KEYBIND_INDICATORS: function(e) {
            var t = e.shouldShow;
            H.showKeybindIndicators = t
        },
        OVERLAY_SET_TEXT_WIDGET_OPACITY: function(e) {
            var t = e.opacity,
                n = H.textWidgetOpacity !== t;
            return H.textWidgetOpacity = t, n
        },
        OVERLAY_DISABLE_EXTERNAL_LINK_ALERT: function() {
            H.disableExternalLinkAlert = !0
        },
        OVERLAY_INCOMPATIBLE_APP: function() {
            w = !0
        },
        OVERLAY_SET_UI_LOCKED: function(e) {
            var t = e.locked,
                n = e.pid;
            t ? U.delete(n) : U.add(n), K(), W(), F = !1
        },
        OVERLAY_ACTIVATE_REGION: function(e) {
            var t = e.region;
            if (D !== (0, h.getPID)() || j.has(t)) return !1;
            j.add(t)
        },
        OVERLAY_DEACTIVATE_ALL_REGIONS: K,
        OVERLAY_SET_PREVIEW_IN_GAME_MODE: function(e) {
            F = e.isPreviewingInGame
        },
        WINDOW_RESIZED: function() {
            if (__OVERLAY__) {
                var e = O.default.windowSize();
                !(0, h.validResolution)(e) && (F = !1)
            }
        },
        OVERLAY_SET_ASSOCIATED_GAME: function(e) {
            U.delete(e.previousAssociatedGamePID)
        }
    })
}