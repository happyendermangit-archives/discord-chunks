function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return L
        }
    }), E("222007");
    var t = E("37983");
    E("884691");
    var o = E("77078"),
        n = E("299285"),
        r = E("374014"),
        a = E("582415"),
        i = E("643130"),
        I = E("292687"),
        s = E("271938"),
        T = E("42203"),
        S = E("824563"),
        N = E("945956"),
        O = E("205817"),
        A = E("722333"),
        R = E("200521"),
        l = E("49111");
    class u extends A.default {
        _initialize() {
            i.default.init()
        }
        constructor(...e) {
            super(...e), this.actions = {
                VOICE_CHANNEL_SHOW_FEEDBACK: e => this.handleVoiceChannelFeedback(e),
                STREAM_CLOSE: e => this.handleStreamClose(e),
                VIDEO_BACKGROUND_SHOW_FEEDBACK: e => this.handleVideoBackgroundShowFeedback(e),
                EMBEDDED_ACTIVITY_CLOSE: e => this.handleActivityClose(e),
                IN_APP_REPORTS_SHOW_FEEDBACK: e => this.handleInAppReportsFeedback(e)
            }, this.handleVoiceChannelFeedback = e => {
                let {
                    analyticsData: _
                } = e;
                this.possiblyShowFeedbackModal(R.FeedbackType.VOICE, () => {
                    (0, o.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await E.el("464667").then(E.bind(E, "464667"));
                        return E => (0, t.jsx)(e, {
                            ...E,
                            analyticsData: _
                        })
                    })
                })
            }, this.handleStreamClose = e => {
                var _;
                let {
                    streamKey: n,
                    canShowFeedback: i
                } = e, I = (0, r.decodeStreamKey)(n), T = (0, a.getStreamerApplication)(I, S.default), N = null !== (_ = O.default.getVideoStats(n)) && void 0 !== _ ? _ : {}, A = {
                    media_session_id: O.default.getMediaSessionId(n),
                    rtc_connection_id: O.default.getRtcConnectionId(n),
                    stream_region: O.default.getRegion(n),
                    max_viewers: O.default.getMaxViewers(n),
                    ...N
                };
                i && this.possiblyShowFeedbackModal(R.FeedbackType.STREAM, () => {
                    (0, o.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await E.el("363787").then(E.bind(E, "363787"));
                        return _ => (0, t.jsx)(e, {
                            stream: I,
                            streamApplication: T,
                            isStreamer: I.ownerId === s.default.getId(),
                            ..._,
                            analyticsData: A
                        })
                    })
                })
            }, this.handleVideoBackgroundShowFeedback = e => {
                let {
                    analyticsData: _
                } = e;
                this.possiblyShowFeedbackModal(R.FeedbackType.VIDEO_BACKGROUND, () => {
                    (0, o.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await E.el("496088").then(E.bind(E, "496088"));
                        return E => (0, t.jsx)(e, {
                            ...E,
                            analyticsData: _
                        })
                    })
                })
            }, this.handleActivityClose = e => {
                let {
                    applicationId: _,
                    channelId: r,
                    showFeedback: a
                } = e, i = n.default.getApplication(_), s = T.default.getChannel(r), S = {
                    rtc_connection_id: N.default.getRTCConnectionId(),
                    media_session_id: N.default.getMediaSessionId()
                }, O = I.default.getWindowOpen(l.PopoutWindowKeys.CHANNEL_CALL_POPOUT), A = O ? o.POPOUT_MODAL_CONTEXT : o.DEFAULT_MODAL_CONTEXT;
                null != i && null != s && a && this.possiblyShowFeedbackModal(R.FeedbackType.ACTIVITY, () => {
                    (0, o.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await E.el("959350").then(E.bind(E, "959350"));
                        return _ => (0, t.jsx)(e, {
                            ..._,
                            activityApplication: i,
                            channel: s,
                            analyticsData: S
                        })
                    }, {
                        contextKey: A
                    })
                })
            }, this.handleInAppReportsFeedback = e => {
                let {
                    reportId: _,
                    reportType: n
                } = e;
                this.possiblyShowFeedbackModal(R.FeedbackType.IN_APP_REPORTS, () => {
                    (0, o.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await E.el("114306").then(E.bind(E, "114306"));
                        return E => (0, t.jsx)(e, {
                            ...E,
                            reportId: _,
                            reportType: n
                        })
                    })
                })
            }
        }
    }
    var L = new u
}