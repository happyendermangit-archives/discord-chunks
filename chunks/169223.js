function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        a = n("812206"),
        s = n("569545"),
        o = n("687516"),
        l = n("981283"),
        u = n("928518"),
        d = n("314897"),
        _ = n("592125"),
        c = n("158776"),
        E = n("19780"),
        I = n("959457"),
        T = n("178635"),
        f = n("531578"),
        S = n("981631");

    function h(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class A extends T.default {
        _initialize() {
            l.default.init()
        }
        constructor(...e) {
            super(...e), h(this, "actions", {
                VOICE_CHANNEL_SHOW_FEEDBACK: e => this.handleVoiceChannelFeedback(e),
                STREAM_CLOSE: e => this.handleStreamClose(e),
                VIDEO_BACKGROUND_SHOW_FEEDBACK: e => this.handleVideoBackgroundShowFeedback(e),
                EMBEDDED_ACTIVITY_CLOSE: e => this.handleActivityClose(e),
                IN_APP_REPORTS_SHOW_FEEDBACK: e => this.handleInAppReportsFeedback(e)
            }), h(this, "handleVoiceChannelFeedback", e => {
                let {
                    analyticsData: t
                } = e;
                this.possiblyShowFeedbackModal(f.FeedbackType.VOICE, () => {
                    (0, r.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("821")]).then(n.bind(n, "988645"));
                        return n => (0, i.jsx)(e, {
                            ...n,
                            analyticsData: t
                        })
                    })
                })
            }), h(this, "handleStreamClose", e => {
                var t;
                let {
                    streamKey: a,
                    canShowFeedback: l
                } = e, u = (0, s.decodeStreamKey)(a), _ = (0, o.getStreamerApplication)(u, c.default), E = null !== (t = I.default.getVideoStats(a)) && void 0 !== t ? t : {}, T = {
                    media_session_id: I.default.getMediaSessionId(a),
                    rtc_connection_id: I.default.getRtcConnectionId(a),
                    stream_region: I.default.getRegion(a),
                    max_viewers: I.default.getMaxViewers(a),
                    ...E
                };
                l && this.possiblyShowFeedbackModal(f.FeedbackType.STREAM, () => {
                    (0, r.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("96307")]).then(n.bind(n, "142402"));
                        return t => (0, i.jsx)(e, {
                            stream: u,
                            streamApplication: _,
                            isStreamer: u.ownerId === d.default.getId(),
                            ...t,
                            analyticsData: T
                        })
                    })
                })
            }), h(this, "handleVideoBackgroundShowFeedback", e => {
                let {
                    analyticsData: t
                } = e;
                this.possiblyShowFeedbackModal(f.FeedbackType.VIDEO_BACKGROUND, () => {
                    (0, r.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("67920")]).then(n.bind(n, "801320"));
                        return n => (0, i.jsx)(e, {
                            ...n,
                            analyticsData: t
                        })
                    })
                })
            }), h(this, "handleActivityClose", e => {
                let {
                    applicationId: t,
                    channelId: s,
                    showFeedback: o
                } = e, l = a.default.getApplication(t), d = _.default.getChannel(s), c = {
                    rtc_connection_id: E.default.getRTCConnectionId(),
                    media_session_id: E.default.getMediaSessionId()
                }, I = u.default.getWindowOpen(S.PopoutWindowKeys.CHANNEL_CALL_POPOUT) ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT;
                null != l && null != d && o && this.possiblyShowFeedbackModal(f.FeedbackType.ACTIVITY, () => {
                    (0, r.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("32627")]).then(n.bind(n, "450634"));
                        return t => (0, i.jsx)(e, {
                            ...t,
                            activityApplication: l,
                            channel: d,
                            analyticsData: c
                        })
                    }, {
                        contextKey: I
                    })
                })
            }), h(this, "handleInAppReportsFeedback", e => {
                let {
                    reportId: t,
                    reportType: a
                } = e;
                this.possiblyShowFeedbackModal(f.FeedbackType.IN_APP_REPORTS, () => {
                    (0, r.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("77927")]).then(n.bind(n, "442173"));
                        return n => (0, i.jsx)(e, {
                            ...n,
                            reportId: t,
                            reportType: a
                        })
                    })
                })
            })
        }
    }
    t.default = new A
}