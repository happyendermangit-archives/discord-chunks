function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        StreamRTCAnalyticsContext: function() {
            return O
        },
        default: function() {
            return i
        }
    });
    var i, s = n("917351"),
        r = n.n(s),
        a = n("773364"),
        o = n("913144"),
        l = n("997722"),
        u = n("422791"),
        d = n("56947"),
        c = n("386045"),
        f = n("808122"),
        _ = n("845579"),
        E = n("271938"),
        h = n("42203"),
        g = n("42887"),
        m = n("985365"),
        p = n("945956"),
        S = n("590401"),
        v = n("278163"),
        T = n("599110"),
        I = n("104478"),
        A = n("374014"),
        C = n("933034"),
        y = n("196383"),
        N = n("49111"),
        R = n("353927");
    class O {
        setActionContext(e) {
            this.actionContext = e
        }
        trackViewerCount(e) {
            this.maxViewers = Math.max(e, this.maxViewers)
        }
        constructor({
            streamRegion: e,
            streamApplication: t,
            streamSourceType: n,
            actionContext: i,
            numViewers: s,
            isBroadcast: r = !1
        }) {
            this.streamRegion = e, this.streamApplication = t, this.streamSourceType = n, this.actionContext = i, this.maxViewers = s, this.isBroadcast = r
        }
    }
    i = class extends l.default {
        get isOwner() {
            let {
                ownerId: e
            } = this._streamContext;
            return E.default.getId() === e
        }
        destroy(e) {
            this._videoStreamStats.stop(), this._trackVideoEndStats(e), this._updateVideoStreamId.cancel(), this._updateVideoStreamId(null, null), this._updateVideoStreamId.flush(), super.destroy()
        }
        streamUpdate(e) {
            let t = this._videoQuality;
            null != t && (e ? t.pause() : t.resume())
        }
        layoutChange(e) {
            this._videoStreamStats.layoutChange(e)
        }
        getVideoStats() {
            let {
                ownerId: e
            } = this._streamContext, t = this._videoQuality;
            if (null != t) {
                var n;
                let {
                    duration: i,
                    avg_bitrate: s,
                    avg_fps: r,
                    avg_resolution: a
                } = this.isOwner ? t.getOutboundStats()[0] : null !== (n = t.getInboundStats(e)) && void 0 !== n ? n : {};
                return {
                    duration: i,
                    avg_bitrate: s,
                    avg_fps: r,
                    avg_resolution: a
                }
            }
            return null
        }
        getRegion() {
            return this.analyticsContext.streamRegion
        }
        getMaxViewers() {
            return this.analyticsContext.maxViewers
        }
        _initializeEvents() {
            let e = !1;
            this.on(u.RTCConnectionEvent.State, (e, t, n) => {
                if (o.default.wait(() => o.default.dispatch({
                        type: "RTC_CONNECTION_STATE",
                        state: e,
                        ...t,
                        ...n,
                        streamKey: this._streamKey
                    })), e === N.RTCConnectionStates.RTC_CONNECTED) {
                    var i;
                    null === (i = this._connection) || void 0 === i || i.on(a.BaseConnectionEvent.ScreenshareFinish, (e, t, n, i, s, r, a, o, l, u, d, c, f, _) => {
                        let E = this.getMediaSessionId(),
                            h = this.getRTCConnectionId(),
                            g = this.getGoLiveSource();
                        (0, v.getSystemAnalyticsInfo)().then(m => {
                            let p = null;
                            if (null != m) {
                                let {
                                    cpu_brand: e,
                                    cpu_vendor: t,
                                    cpu_memory: n,
                                    gpu_brand: i,
                                    gpu_memory: s
                                } = m;
                                p = {
                                    cpu_brand: e,
                                    cpu_vendor: t,
                                    cpu_memory: n,
                                    gpu_brand: i,
                                    gpu_memory: s
                                }
                            }
                            let S = (null != e ? e : 0) + (null != t ? t : 0) + (null != n ? n : 0) + (null != i ? i : 0) + (null != s ? s : 0) + (null != r ? r : 0) + (null != o ? o : 0) + (null != _ ? _ : 0) + (null != f ? f : 0);
                            T.default.track(N.AnalyticEvents.SCREENSHARE_FINISHED, {
                                screenshare_frames: e,
                                videohook_frames: t,
                                hybrid_dxgi_frames: n,
                                hybrid_gdi_frames: i,
                                hybrid_videohook_frames: s,
                                hybrid_graphics_capture_frames: r,
                                hybrid_capture_method_switches: a,
                                quartz_frames: o,
                                screencapturekit_frames: _,
                                go_live_camera_frames: f,
                                total_frames: S,
                                desktop_capturer_type: l,
                                media_session_id: E,
                                rtc_connection_id: h,
                                context: R.MediaEngineContextTypes.STREAM,
                                screens: u,
                                windows: d,
                                activity: c,
                                ...p,
                                ...(0, C.default)(null == g ? void 0 : g.desktopSource)
                            })
                        })
                    })
                }
            }), this.on(u.RTCConnectionEvent.Video, (t, n, i, s, r) => {
                let a = (0, A.decodeStreamKey)(this._streamKey);
                a.guildId === t && a.channelId === n && a.ownerId === i && (null != this.getMediaSessionId() && !e && (this._trackVideoStartStats(), e = !0), this._updateVideoStreamId(s, r))
            }), this.on(u.RTCConnectionEvent.VideoSourceQualityChanged, (e, t, n, i, s, r) => {
                o.default.wait(() => o.default.dispatch({
                    type: "MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED",
                    guildId: e,
                    channelId: t,
                    senderUserId: n,
                    maxResolution: i,
                    maxFrameRate: s,
                    context: r
                }))
            })
        }
        _getStreamAnalyticsProperties() {
            let {
                streamRegion: e,
                streamApplication: t,
                streamSourceType: n,
                actionContext: i,
                isBroadcast: s
            } = this.analyticsContext, {
                ownerId: r,
                guildId: a
            } = this._streamContext, o = S.default.getRegion(p.default.getHostname()), l = _.BroadcastAutoBroadcast.getSetting();
            return {
                channel_id: this.channelId,
                rtc_connection_id: this.getRTCConnectionId(),
                media_session_id: this.getMediaSessionId(),
                parent_media_session_id: this.parentMediaSessionId,
                sender_user_id: r,
                context: R.MediaEngineContextTypes.STREAM,
                guild_id: a,
                stream_region: e,
                stream_source_type: n,
                guild_region: o,
                participant_type: this.isOwner ? "streamer" : "receiver",
                share_application_name: null != t ? t.name : null,
                share_application_id: null != t ? t.id : null,
                share_application_executable: null != t ? t.exe : null,
                video_layout: this._videoStreamStats.getLayout(),
                client_event_source: i,
                is_broadcast: s,
                auto_broadcast_enabled: this.isOwner ? l : null
            }
        }
        _trackVideoStartStats() {
            let e = this.isOwner ? (0, y.default)() : null;
            T.default.track(N.AnalyticEvents.VIDEO_STREAM_STARTED, {
                ...this._getStreamAnalyticsProperties(),
                ...e,
                connection_type: m.default.getType(),
                effective_connection_speed: m.default.getEffectiveConnectionSpeed(),
                service_provider: m.default.getServiceProvider()
            })
        }
        _trackVideoEndStats(e) {
            let t = h.default.getChannel(this.channelId),
                n = null != t ? t.type : null,
                {
                    ownerId: i
                } = this._streamContext,
                s = null,
                r = null,
                a = null,
                o = this._videoQuality;
            null != o && (s = this.isOwner ? o.getOutboundStats()[0] : o.getInboundStats(i), r = o.getNetworkStats(), a = this.isOwner ? o.getCodecUsageStats("streamer", this.userId) : o.getCodecUsageStats("receiver", i));
            let l = (0, d.areClipsEnabled)(),
                u = c.default.getSettings(),
                _ = this.isOwner ? {
                    clips_enabled: u.clipsEnabled && l,
                    clips_buffer_length: u.clipsLength
                } : {},
                E = this.isOwner ? {
                    bandwidth_estimation_experiment: this.getBandwidthEstimationExperiment()
                } : {};
            T.default.track(N.AnalyticEvents.VIDEO_STREAM_ENDED, {
                ...s,
                ...a,
                ...r,
                ...this._videoStreamStats.getStats(),
                ...this._soundshareStats.getStats(),
                ...this._getStreamAnalyticsProperties(),
                ..._,
                ...E,
                channel_type: n,
                reason: e,
                max_viewers: this.analyticsContext.maxViewers,
                hostname: this.hostname,
                hardware_enabled: g.default.getHardwareH264(),
                device_performance_class: this.isOwner ? (0, f.getMediaPerformanceClass)() : null
            })
        }
        _getExtraConnectionOptions() {
            return {
                streamUserId: (0, A.decodeStreamKey)(this._streamKey).ownerId
            }
        }
        constructor({
            sessionId: e,
            streamKey: t,
            serverId: n,
            initialLayout: i,
            analyticsContext: s,
            isStreamer: a,
            parentMediaSessionId: l
        }) {
            let u = (0, A.decodeStreamKey)(t),
                {
                    guildId: d,
                    channelId: c
                } = u;
            super({
                userId: E.default.getId(),
                sessionId: e,
                guildId: d,
                channelId: c,
                context: R.MediaEngineContextTypes.STREAM,
                rtcServerId: n,
                parentMediaSessionId: l
            }), this._streamContext = u, this._streamKey = t, this._isStreamer = a, this._videoStreamStats = new I.default(i, this.isOwner), this.analyticsContext = s, this._updateVideoStreamId = r.debounce((e, t) => {
                let {
                    guildId: n,
                    channelId: i,
                    ownerId: s
                } = (0, A.decodeStreamKey)(this._streamKey);
                o.default.wait(() => o.default.dispatch({
                    type: "RTC_CONNECTION_VIDEO",
                    guildId: n,
                    channelId: i,
                    userId: s,
                    streamId: e,
                    rtcServerId: t,
                    context: R.MediaEngineContextTypes.STREAM
                }))
            }, 200), this._videoStreamStats.start(), this._initializeEvents()
        }
    }
}