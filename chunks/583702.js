function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        StreamRTCAnalyticsContext: function() {
            return D
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
        _ = n("808122"),
        f = n("963990"),
        E = n("161454"),
        h = n("845579"),
        g = n("271938"),
        m = n("42203"),
        p = n("42887"),
        S = n("985365"),
        T = n("945956"),
        v = n("590401"),
        I = n("278163"),
        A = n("599110"),
        C = n("104478"),
        y = n("374014"),
        N = n("196383"),
        R = n("49111"),
        O = n("353927");
    class D {
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
            return g.default.getId() === e
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
                    })), e === R.RTCConnectionStates.RTC_CONNECTED) {
                    var i;
                    null === (i = this._connection) || void 0 === i || i.on(a.BaseConnectionEvent.ScreenshareFinish, (e, t, n, i, s, r, a, o, l, u, d, c, _, h) => {
                        let g = this.getMediaSessionId(),
                            m = this.getRTCConnectionId(),
                            p = this.getGoLiveSource();
                        (0, I.getSystemAnalyticsInfo)().then(S => {
                            var T, v, I;
                            let C = null;
                            if (null != S) {
                                let {
                                    cpu_brand: e,
                                    cpu_vendor: t,
                                    cpu_memory: n,
                                    gpu_brand: i,
                                    gpu_memory: s
                                } = S;
                                C = {
                                    cpu_brand: e,
                                    cpu_vendor: t,
                                    cpu_memory: n,
                                    gpu_brand: i,
                                    gpu_memory: s
                                }
                            }
                            let y = (null != e ? e : 0) + (null != t ? t : 0) + (null != n ? n : 0) + (null != i ? i : 0) + (null != s ? s : 0) + (null != r ? r : 0) + (null != o ? o : 0) + (null != h ? h : 0) + (null != _ ? _ : 0),
                                N = (null == p ? void 0 : null === (T = p.desktopSource) || void 0 === T ? void 0 : T.sourcePid) != null ? E.default.getGameForPID(p.desktopSource.sourcePid) : null,
                                {
                                    gameName: D,
                                    gameId: P,
                                    exe: L,
                                    distributor: M
                                } = (0, f.getRunningGameAnalytics)(N);
                            A.default.track(R.AnalyticEvents.SCREENSHARE_FINISHED, {
                                screenshare_frames: e,
                                videohook_frames: t,
                                hybrid_dxgi_frames: n,
                                hybrid_gdi_frames: i,
                                hybrid_videohook_frames: s,
                                hybrid_graphics_capture_frames: r,
                                hybrid_capture_method_switches: a,
                                quartz_frames: o,
                                screencapturekit_frames: h,
                                go_live_camera_frames: _,
                                total_frames: y,
                                desktop_capturer_type: l,
                                media_session_id: g,
                                rtc_connection_id: m,
                                context: O.MediaEngineContextTypes.STREAM,
                                screens: u,
                                windows: d,
                                activity: c,
                                soundshare_session: null !== (I = null == p ? void 0 : null === (v = p.desktopSource) || void 0 === v ? void 0 : v.soundshareSession) && void 0 !== I ? I : void 0,
                                share_game_name: D,
                                share_game_id: P,
                                share_game_exe: L,
                                share_game_distributor: M,
                                ...C
                            })
                        })
                    })
                }
            }), this.on(u.RTCConnectionEvent.Video, (t, n, i, s, r) => {
                let a = (0, y.decodeStreamKey)(this._streamKey);
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
            } = this._streamContext, o = v.default.getRegion(T.default.getHostname()), l = h.BroadcastAutoBroadcast.getSetting(), {
                gameName: u,
                gameId: d,
                exe: c,
                distributor: _
            } = (0, f.getRunningGameAnalytics)(t);
            return {
                channel_id: this.channelId,
                rtc_connection_id: this.getRTCConnectionId(),
                media_session_id: this.getMediaSessionId(),
                parent_media_session_id: this.parentMediaSessionId,
                sender_user_id: r,
                context: O.MediaEngineContextTypes.STREAM,
                guild_id: a,
                stream_region: e,
                stream_source_type: n,
                guild_region: o,
                participant_type: this.isOwner ? "streamer" : "receiver",
                share_application_name: u,
                share_application_id: d,
                share_application_executable: c,
                share_application_distributor: _,
                video_layout: this._videoStreamStats.getLayout(),
                client_event_source: i,
                is_broadcast: s,
                auto_broadcast_enabled: this.isOwner ? l : null
            }
        }
        _trackVideoStartStats() {
            let e = this.isOwner ? (0, N.default)() : null;
            A.default.track(R.AnalyticEvents.VIDEO_STREAM_STARTED, {
                ...this._getStreamAnalyticsProperties(),
                ...e,
                connection_type: S.default.getType(),
                effective_connection_speed: S.default.getEffectiveConnectionSpeed(),
                service_provider: S.default.getServiceProvider()
            })
        }
        _trackVideoEndStats(e) {
            let t = m.default.getChannel(this.channelId),
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
                f = this.isOwner ? {
                    clips_enabled: u.clipsEnabled && l,
                    clips_buffer_length: u.clipsLength
                } : {},
                E = this.isOwner ? {
                    bandwidth_estimation_experiment: this.getBandwidthEstimationExperiment()
                } : {};
            A.default.track(R.AnalyticEvents.VIDEO_STREAM_ENDED, {
                ...s,
                ...a,
                ...r,
                ...this._videoStreamStats.getStats(),
                ...this._soundshareStats.getStats(),
                ...this._getStreamAnalyticsProperties(),
                ...f,
                ...E,
                channel_type: n,
                reason: e,
                max_viewers: this.analyticsContext.maxViewers,
                hostname: this.hostname,
                hardware_enabled: p.default.getHardwareH264(),
                device_performance_class: this.isOwner ? (0, _.getMediaPerformanceClass)() : null
            })
        }
        _getExtraConnectionOptions() {
            return {
                streamUserId: (0, y.decodeStreamKey)(this._streamKey).ownerId
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
            let u = (0, y.decodeStreamKey)(t),
                {
                    guildId: d,
                    channelId: c
                } = u;
            super({
                userId: g.default.getId(),
                sessionId: e,
                guildId: d,
                channelId: c,
                context: O.MediaEngineContextTypes.STREAM,
                rtcServerId: n,
                parentMediaSessionId: l
            }), this._streamContext = u, this._streamKey = t, this._isStreamer = a, this._videoStreamStats = new C.default(i, this.isOwner), this.analyticsContext = s, this._updateVideoStreamId = r.debounce((e, t) => {
                let {
                    guildId: n,
                    channelId: i,
                    ownerId: s
                } = (0, y.decodeStreamKey)(this._streamKey);
                o.default.wait(() => o.default.dispatch({
                    type: "RTC_CONNECTION_VIDEO",
                    guildId: n,
                    channelId: i,
                    userId: s,
                    streamId: e,
                    rtcServerId: t,
                    context: O.MediaEngineContextTypes.STREAM
                }))
            }, 200), this._videoStreamStats.start(), this._initializeEvents()
        }
    }
}