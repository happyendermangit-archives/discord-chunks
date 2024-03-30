function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("629815"),
        o = n("140817"),
        i = n("870331"),
        a = n("120447"),
        u = n("281767");
    t.default = {
        rebuildRTCActiveChannels: function() {
            r.default.dispatch({
                type: "CHANNEL_RTC_ACTIVE_CHANNELS"
            })
        },
        selectParticipant: function(e, t) {
            r.default.dispatch({
                type: "CHANNEL_RTC_SELECT_PARTICIPANT",
                channelId: e,
                id: t
            })
        },
        updateLayout: function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.AppContext.APP;
            i.default.track(u.AnalyticEvents.VIDEO_LAYOUT_TOGGLED, function(e) {
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
            }({
                video_layout: t
            }, (0, o.collectVoiceAnalyticsMetadata)(e))), r.default.dispatch({
                type: "CHANNEL_RTC_UPDATE_LAYOUT",
                channelId: e,
                layout: t,
                appContext: n
            })
        },
        toggleParticipants: function(e, t) {
            r.default.dispatch({
                type: "CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN",
                channelId: e,
                participantsOpen: t
            })
        },
        toggleVoiceParticipantsHidden: function(e, t) {
            r.default.dispatch({
                type: "CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN",
                channelId: e,
                voiceParticipantsHidden: t
            })
        },
        updateStageStreamSize: function(e, t) {
            r.default.dispatch({
                type: "CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE",
                channelId: e,
                large: t
            })
        },
        updateStageVideoLimitBoostUpsellDismissed: function(e, t) {
            r.default.dispatch({
                type: "CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED",
                channelId: e,
                dismissed: t
            })
        },
        updateChatOpen: function(e, t) {
            r.default.dispatch({
                type: "CHANNEL_RTC_UPDATE_CHAT_OPEN",
                channelId: e,
                chatOpen: t
            }), t ? setTimeout(function() {
                a.ComponentDispatch.dispatch(u.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                    channelId: e
                })
            }, 0) : a.ComponentDispatch.dispatch(u.ComponentActions.FOCUS_CHAT_BUTTON)
        }
    }
}