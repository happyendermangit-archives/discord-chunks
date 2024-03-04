function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var i = n("913144"),
        s = n("716241"),
        r = n("599110"),
        a = n("659500"),
        o = n("49111"),
        l = {
            rebuildRTCActiveChannels() {
                i.default.dispatch({
                    type: "CHANNEL_RTC_ACTIVE_CHANNELS"
                })
            },
            selectParticipant(e, t) {
                i.default.dispatch({
                    type: "CHANNEL_RTC_SELECT_PARTICIPANT",
                    channelId: e,
                    id: t
                })
            },
            updateLayout(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.AppContext.APP;
                r.default.track(o.AnalyticEvents.VIDEO_LAYOUT_TOGGLED, {
                    video_layout: t,
                    ...(0, s.collectVoiceAnalyticsMetadata)(e)
                }), i.default.dispatch({
                    type: "CHANNEL_RTC_UPDATE_LAYOUT",
                    channelId: e,
                    layout: t,
                    appContext: n
                })
            },
            toggleParticipants(e, t) {
                i.default.dispatch({
                    type: "CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN",
                    channelId: e,
                    participantsOpen: t
                })
            },
            toggleVoiceParticipantsHidden(e, t) {
                i.default.dispatch({
                    type: "CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN",
                    channelId: e,
                    voiceParticipantsHidden: t
                })
            },
            updateStageStreamSize(e, t) {
                i.default.dispatch({
                    type: "CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE",
                    channelId: e,
                    large: t
                })
            },
            updateStageVideoLimitBoostUpsellDismissed(e, t) {
                i.default.dispatch({
                    type: "CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED",
                    channelId: e,
                    dismissed: t
                })
            },
            updateChatOpen(e, t) {
                i.default.dispatch({
                    type: "CHANNEL_RTC_UPDATE_CHAT_OPEN",
                    channelId: e,
                    chatOpen: t
                }), t ? setTimeout(() => {
                    a.ComponentDispatch.dispatch(o.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                        channelId: e
                    })
                }, 0) : a.ComponentDispatch.dispatch(o.ComponentActions.FOCUS_CHAT_BUTTON)
            }
        }
}